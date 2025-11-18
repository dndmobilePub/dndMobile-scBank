"use client"

import { useState, useCallback } from "react"

export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
      return true
    } catch (error) {
      console.error("Copy failed:", error)
      setCopied(false)
      return false
    }
  }, [])

  return { copy, copied }
}
