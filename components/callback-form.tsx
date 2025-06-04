"use client"

import type React from "react"

import { useState } from "react"
import { X, Check, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CallbackFormProps {
  isOpen: boolean
  onClose: () => void
}

export function CallbackForm({ isOpen, onClose }: CallbackFormProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    ivExperience: "",
    wellnessGoal: "",
    schedulePreference: "",
    name: "",
    phone: "",
    email: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Prepare form data for submission
      const submitData = {
        ivExperience: formData.ivExperience,
        wellnessGoal: formData.wellnessGoal,
        schedulePreference: formData.schedulePreference,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        source: "IV Therapy Callback Form",
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

      // Show success message or redirect
      alert("Thank you! We'll contact you shortly to schedule your appointment.")
      onClose()
    } catch (error) {
      console.error("Form submission error:", error)
      alert("Something went wrong. Please try again.")
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-md overflow-hidden shadow-xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-pink-500 p-6 relative">
          <button onClick={onClose} className="absolute right-4 top-4 text-white hover:bg-white/20 rounded-full p-1">
            <X className="h-6 w-6" />
          </button>
          <h2 className="text-white text-2xl font-bold text-center">Request a callback</h2>
          <p className="text-white/90 text-center mt-2">
            Fill out the form below and we'll reach out to schedule your appointment.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center p-6 border-b">
          <div className="flex items-center gap-4">
            <div
              className={`rounded-full w-8 h-8 flex items-center justify-center ${
                step === 1 ? "bg-blue-500 text-white" : "bg-blue-100 text-blue-500"
              }`}
            >
              {step > 1 ? <Check className="h-4 w-4" /> : "1"}
            </div>
            <div className="text-sm font-medium">Questions</div>

            <div className="w-8 h-0.5 bg-gray-200"></div>

            <div
              className={`rounded-full w-8 h-8 flex items-center justify-center ${
                step === 2 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-500"
              }`}
            >
              2
            </div>
            <div className={`text-sm font-medium ${step === 2 ? "text-gray-900" : "text-gray-500"}`}>Details</div>
          </div>
        </div>

        <form onSubmit={step === 1 ? () => setStep(2) : handleSubmit}>
          {step === 1 ? (
            <div className="p-6">
              <h3 className="text-xl font-bold mb-6">Tell us about your wellness needs:</h3>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="ivExperience" className="block mb-2">
                    Have you tried IV therapy before?
                  </Label>
                  <Select
                    value={formData.ivExperience}
                    onValueChange={(value) => handleChange("ivExperience", value)}
                    required
                  >
                    <SelectTrigger id="ivExperience" className="w-full">
                      <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="wellnessGoal" className="block mb-2">
                    What's your primary wellness goal?
                  </Label>
                  <Select
                    value={formData.wellnessGoal}
                    onValueChange={(value) => handleChange("wellnessGoal", value)}
                    required
                  >
                    <SelectTrigger id="wellnessGoal" className="w-full">
                      <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="energy">Boost energy</SelectItem>
                      <SelectItem value="recovery">Hangover recovery</SelectItem>
                      <SelectItem value="immunity">Strengthen immunity</SelectItem>
                      <SelectItem value="hydration">Hydration</SelectItem>
                      <SelectItem value="beauty">Beauty & skin health</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="schedulePreference" className="block mb-2">
                    When would you like to schedule?
                  </Label>
                  <Select
                    value={formData.schedulePreference}
                    onValueChange={(value) => handleChange("schedulePreference", value)}
                    required
                  >
                    <SelectTrigger id="schedulePreference" className="w-full">
                      <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">As soon as possible</SelectItem>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="tomorrow">Tomorrow</SelectItem>
                      <SelectItem value="this-week">This week</SelectItem>
                      <SelectItem value="next-week">Next week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button type="button" className="w-full mt-8 bg-blue-500 hover:bg-blue-600" onClick={() => setStep(2)}>
                Next Step
              </Button>
            </div>
          ) : (
            <div className="p-6">
              <div className="flex items-center mb-6">
                <button type="button" onClick={() => setStep(1)} className="text-blue-500 flex items-center mr-2">
                  <ArrowLeft className="h-4 w-4 mr-1" /> Back
                </button>
                <h3 className="text-xl font-bold">Your contact details:</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block mb-2">
                    Your name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="block mb-2">
                    Phone number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="block mb-2">
                    Email address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full mt-8 bg-blue-500 hover:bg-blue-600">
                Request Callback
              </Button>

              <p className="text-center text-sm text-gray-500 mt-4">
                By submitting, you agree to our terms and privacy policy.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
