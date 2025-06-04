"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

interface ModernContactFormProps {
  title?: string
  description?: string
  className?: string
}

export default function ModernContactForm({
  title = "Get In Touch",
  description = "Fill out the form below and we'll get back to you as soon as possible.",
  className = "",
}: ModernContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  // Client-side validation
  const validateForm = (formData: FormData) => {
    const errors: Record<string, string> = {}

    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string

    if (!firstName || firstName.trim().length < 2) {
      errors.firstName = "First name must be at least 2 characters"
    }

    if (!lastName || lastName.trim().length < 2) {
      errors.lastName = "Last name must be at least 2 characters"
    }

    if (!email) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address"
    }

    if (!phone) {
      errors.phone = "Phone number is required"
    } else if (!/^[\d\s\-+().]{10,}$/.test(phone)) {
      errors.phone = "Please enter a valid phone number"
    }

    return errors
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")
    setFormErrors({})

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    // Validate form
    const errors = validateForm(formData)
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      setIsSubmitting(false)
      return
    }

    try {
      // Prepare form data for submission
      const submitData = {
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        source: "Website Contact Form",
        submittedAt: new Date().toISOString(),
      }

      // Submit to Make.com webhook
      const response = await fetch("https://hook.us2.make.com/quyob9vflq22o6vvq6bfqnvcq6ykmhxh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      })

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`)
      }

      // Success - show thank you message and clear form
      setSubmitStatus("success")
      form.reset()
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setSubmitStatus("idle")
    setErrorMessage("")
    setFormErrors({})
  }

  return (
    <div className={`w-full max-w-lg mx-auto ${className}`}>
      <Card className="shadow-lg border-0 bg-white">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">{title}</CardTitle>
          <CardDescription className="text-gray-600 text-base">{description}</CardDescription>
        </CardHeader>

        <CardContent className="px-6 pb-6">
          {/* Success Message */}
          {submitStatus === "success" && (
            <Alert className="mb-6 bg-green-50 border-green-200">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <AlertDescription className="text-green-800 font-medium">
                Thank you for your message! We'll get back to you within 24 hours.
                <Button variant="link" className="p-0 h-auto text-green-700 underline ml-2" onClick={resetForm}>
                  Submit another message
                </Button>
              </AlertDescription>
            </Alert>
          )}

          {/* Error Message */}
          {submitStatus === "error" && (
            <Alert className="mb-6 bg-red-50 border-red-200">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <AlertDescription className="text-red-800 font-medium">{errorMessage}</AlertDescription>
            </Alert>
          )}

          {/* Form */}
          {submitStatus !== "success" && (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* First Name & Last Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                    First Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    className={`transition-colors ${
                      formErrors.firstName
                        ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                    disabled={isSubmitting}
                    required
                  />
                  {formErrors.firstName && <p className="text-sm text-red-600">{formErrors.firstName}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                    Last Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    className={`transition-colors ${
                      formErrors.lastName
                        ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                    disabled={isSubmitting}
                    required
                  />
                  {formErrors.lastName && <p className="text-sm text-red-600">{formErrors.lastName}</p>}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  className={`transition-colors ${
                    formErrors.email
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  }`}
                  disabled={isSubmitting}
                  required
                />
                {formErrors.email && <p className="text-sm text-red-600">{formErrors.email}</p>}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  className={`transition-colors ${
                    formErrors.phone
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  }`}
                  disabled={isSubmitting}
                  required
                />
                {formErrors.phone && <p className="text-sm text-red-600">{formErrors.phone}</p>}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          )}

          {/* Privacy Notice */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              We respect your privacy and will never share your information with third parties.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
