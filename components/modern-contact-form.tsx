"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

// Form validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required").min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(1, "Last name is required").min(2, "Last name must be at least 2 characters"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[\d\s\-+$$$$.]+$/, "Please enter a valid phone number"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/ghl-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || `Server error: ${response.status}`)
      }

      // Success
      setSubmitStatus("success")
      reset()
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
    reset()
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* First Name & Last Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                    First Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    {...register("firstName")}
                    className={`transition-colors ${
                      errors.firstName
                        ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.firstName && <p className="text-sm text-red-600">{errors.firstName.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                    Last Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    {...register("lastName")}
                    className={`transition-colors ${
                      errors.lastName
                        ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.lastName && <p className="text-sm text-red-600">{errors.lastName.message}</p>}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  {...register("email")}
                  className={`transition-colors ${
                    errors.email
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  }`}
                  disabled={isSubmitting}
                />
                {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  {...register("phone")}
                  className={`transition-colors ${
                    errors.phone
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  }`}
                  disabled={isSubmitting}
                />
                {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
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
