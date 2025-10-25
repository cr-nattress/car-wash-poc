import { NextResponse } from 'next/server'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

interface ChatRequest {
  message: string
  history: ChatMessage[]
}

/**
 * AI Chat API Route
 *
 * This route handles chat requests and integrates with AI services.
 * Currently uses mock responses. To enable real AI:
 *
 * 1. Uncomment desired AI integration (OpenAI or Anthropic)
 * 2. Add API key to .env.local
 * 3. Install required package (npm install openai or @anthropic-ai/sdk)
 */
export async function POST(request: Request) {
  try {
    const { message }: ChatRequest = await request.json()

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message format' },
        { status: 400 }
      )
    }

    // For production, uncomment ONE of the following integrations:
    // const response = await getOpenAIResponse(message, history)
    // const response = await getAnthropicResponse(message, history)

    // Currently using mock responses
    const response = await getMockAIResponse(message)

    return NextResponse.json({ message: response })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    )
  }
}

/**
 * Mock AI Response (currently active)
 */
async function getMockAIResponse(userInput: string): Promise<string> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800))

  const input = userInput.toLowerCase()

  // Enhanced responses with more natural language
  if (input.includes('price') || input.includes('cost') || input.includes('how much')) {
    return "Our membership plans offer the best value! We have three tiers:\n\n• Basic Shine - $24/month: Perfect for keeping your car clean with unlimited basic washes\n• Premium Gloss - $34/month: Our most popular! Includes wax, tire shine, and Rain-X\n• Ultimate Protect - $42/month: Maximum protection with ceramic coating and quarterly detailing\n\nAll plans include unlimited washes. Which tier interests you most?"
  }

  if (input.includes('hours') || input.includes('open') || input.includes('when') || input.includes('time')) {
    return "We're here when you need us! Our hours are:\n\n• Monday-Saturday: 7:00 AM - 8:00 PM\n• Sunday: 8:00 AM - 6:00 PM\n\nBoth locations have the same hours. You can also book appointments online 24/7!"
  }

  if (input.includes('location') || input.includes('where') || input.includes('address')) {
    return "We have two convenient locations:\n\n📍 Downtown Scranton\n123 Main Street, Scranton, PA 18503\n\n📍 Wilkes-Barre\n456 Market Street, Wilkes-Barre, PA 18702\n\nBoth locations offer all our services. Which one is closer to you?"
  }

  if (input.includes('book') || input.includes('appointment') || input.includes('schedule') || input.includes('reserve')) {
    return "I'd be happy to help you book! We offer two types of appointments:\n\n1. Detail Services (Interior/Full Detail) - These require advance booking\n2. Express/Deluxe/Ultimate Washes - Walk-ins welcome, but you can book to guarantee your spot\n\nClick the 'Book Now' button at the top of the page, or tell me which service you're interested in and I'll guide you through it!"
  }

  if (input.includes('service') || input.includes('wash') || input.includes('detail')) {
    return "We offer four main services:\n\n1. Express Wash - $12 (5 min): Quick touchless wash\n2. Deluxe Wash - $22 (10 min): Includes wax and tire shine\n3. Ultimate Wash - $32 (15 min): Premium protection with ceramic coating\n4. Full Detail - $99+ (2-3 hrs): Complete interior and exterior detailing\n\nFor regular washing, our unlimited memberships are the best value. What type of service are you looking for?"
  }

  if (input.includes('membership') || input.includes('unlimited') || input.includes('plan')) {
    return "Our membership plans are incredibly popular! Here's why:\n\n✓ Unlimited washes every month\n✓ No long-term contracts\n✓ Valid at both locations\n✓ Priority lane access\n✓ Cancel anytime\n\nMost customers save money after just 2-3 washes per month. The Premium Gloss ($34/mo) is our most popular - it includes everything in Basic plus wax, Rain-X, and tire shine. Want to sign up?"
  }

  if (input.includes('weather') || input.includes('rain') || input.includes('snow')) {
    return "Great question! Weather actually makes it MORE important to wash your car:\n\n• Rain doesn't clean your car - it leaves dirt, minerals, and pollutants\n• Road salt in winter can cause rust and corrosion\n• Spring pollen can damage your paint\n\nOur Rain-X treatment (included in Premium and Ultimate plans) helps water bead right off. Want to protect your car from the elements?"
  }

  if (input.includes('thank') || input.includes('thanks')) {
    return "You're very welcome! I'm here 24/7 if you have any other questions. Have a great day! 🚗✨"
  }

  if (input.includes('bye') || input.includes('goodbye')) {
    return "Thanks for chatting with me! Don't hesitate to reach out if you need anything. Have a fantastic day, and we look forward to seeing you at Superior Car Wash! 👋"
  }

  if (input.includes('help') || input.includes('hi') || input.includes('hello')) {
    return "Hello! 👋 I'm here to help with anything you need. I can answer questions about:\n\n• Our services and pricing\n• Membership plans\n• Location hours\n• Booking appointments\n• Car care tips\n\nWhat would you like to know?"
  }

  // Default response
  return "I'd be happy to help with that! I can assist you with:\n\n• Service information and pricing\n• Membership plans ($24-42/month)\n• Location hours and directions\n• Booking appointments\n• General car wash questions\n\nWhat specific information are you looking for?"
}

/**
 * OpenAI GPT-4 Integration (Uncomment to use)
 *
 * Setup:
 * 1. npm install openai
 * 2. Add OPENAI_API_KEY to .env.local
 * 3. Uncomment this function and the import at top
 */
/*
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
})

async function getOpenAIResponse(message: string, history: ChatMessage[]): Promise<string> {
  const systemPrompt = `You are a helpful, friendly assistant for Superior Car Wash, a premium car wash business in Northeast Pennsylvania.

SERVICES:
- Express Wash: $12 (5 min touchless wash)
- Deluxe Wash: $22 (10 min with wax & tire shine)
- Ultimate Wash: $32 (15 min with ceramic coating)
- Full Detail: $99+ (2-3 hrs complete detailing)

MEMBERSHIPS (Unlimited monthly):
- Basic Shine: $24/month (Express wash features)
- Premium Gloss: $34/month (Most Popular! Deluxe features)
- Ultimate Protect: $42/month (Ultimate features + quarterly detail)

LOCATIONS:
- Downtown Scranton: 123 Main St, Scranton PA (Mon-Sat 7am-8pm, Sun 8am-6pm)
- Wilkes-Barre: 456 Market St, Wilkes-Barre PA (Same hours)

IMPORTANT:
- Be conversational, friendly, and concise
- Emphasize membership value (unlimited washes)
- Guide customers toward booking
- Mention we're open 7 days a week
- If asked about weather, explain rain doesn't clean cars

Keep responses under 150 words.`

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: systemPrompt },
      ...history.slice(-6), // Last 3 exchanges for context
      { role: 'user', content: message },
    ],
    temperature: 0.7,
    max_tokens: 200,
  })

  return completion.choices[0]?.message?.content || 'I apologize, but I encountered an error. Please try again.'
}
*/

/**
 * Anthropic Claude Integration (Uncomment to use)
 *
 * Setup:
 * 1. npm install @anthropic-ai/sdk
 * 2. Add ANTHROPIC_API_KEY to .env.local
 * 3. Uncomment this function and the import at top
 */
/*
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env['ANTHROPIC_API_KEY'],
})

async function getAnthropicResponse(message: string, history: ChatMessage[]): Promise<string> {
  const systemPrompt = `You are a helpful, friendly assistant for Superior Car Wash, a premium car wash business in Northeast Pennsylvania.

[Same system prompt as OpenAI above]`

  const completion = await anthropic.messages.create({
    model: 'claude-3-sonnet-20240229',
    max_tokens: 200,
    system: systemPrompt,
    messages: [
      ...history.slice(-6).map(m => ({
        role: m.role,
        content: m.content,
      })),
      { role: 'user', content: message },
    ],
  })

  return completion.content[0].type === 'text'
    ? completion.content[0].text
    : 'I apologize, but I encountered an error. Please try again.'
}
*/
