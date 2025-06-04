"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CallbackForm } from "@/components/callback-form"

interface CallbackButtonProps {
  children: React.ReactNode
  className?: string
}

export function CallbackButton({ children, className }: CallbackButtonProps) {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <Button className={className} onClick={() => setIsFormOpen(true)}>
        {children}
      </Button>

      <CallbackForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}
