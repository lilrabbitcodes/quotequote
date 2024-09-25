'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Sample quotes (in a real app, you'd fetch these from an API)
const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
]

export function QuoteGeneratorComponent() {
  const [quote, setQuote] = useState(quotes[0])

  const generateNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setQuote(quotes[randomIndex])
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <h1 className="text-2xl md:text-3xl font-bold text-[#333333] mb-8">
        Random Quote Generator
      </h1>
      <Card className="w-full max-w-[600px] bg-[#f5f5f5] border-[#cccccc]">
        <CardContent className="p-6">
          <blockquote className="text-[#333333] text-base md:text-lg font-serif italic mb-4">
            "{quote.text}"
          </blockquote>
          <p className="text-[#666666] text-sm md:text-base font-sans">
            - {quote.author}
          </p>
        </CardContent>
      </Card>
      <Button
        onClick={generateNewQuote}
        className="mt-8 bg-[#008080] hover:bg-[#006666] text-white font-sans px-6 py-3 rounded"
      >
        New Quote
      </Button>
    </div>
  )
}