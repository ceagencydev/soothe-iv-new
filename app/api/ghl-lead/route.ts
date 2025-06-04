import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    // Parse the incoming request data
    const data = await req.json()
    console.log("Received form data:", data) // <-- Added logging

    // Validate required fields
    if (!data.name || !data.email || !data.phone) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    // Get GHL API credentials from environment variables
    const ghlApiKey = process.env.GHL_API_KEY
    const ghlApiUrl = process.env.GHL_API_URL

    if (!ghlApiKey || !ghlApiUrl) {
      console.error("Missing GHL API credentials")
      return NextResponse.json({ message: "Server configuration error" }, { status: 500 })
    }

    // Prepare the data for GHL API
    const ghlPayload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      source: "Website Contact Form",
      // Add any additional fields your GHL setup requires
    }

    // Make request to Go High Level API
    const ghlEndpoint = `${ghlApiUrl}/contacts/`
    const resp = await fetch(ghlEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ghlApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ghlPayload),
    })

    const result = await resp.json()
    console.log("GHL API Response:", result) // <-- Added logging

    if (!resp.ok) {
      console.error("GHL API Error:", result)
      return NextResponse.json({ message: "Failed to submit lead to CRM" }, { status: 500 })
    }

    // Success response
    return NextResponse.json(
      {
        message: "Lead submitted successfully",
        contactId: result.contact?.id || result.id,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("API Route Error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
