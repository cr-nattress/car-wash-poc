# AI Components

This directory contains AI-powered components for the Superior Car Wash website.

## ChatBot Component

An intelligent conversational assistant that helps customers with:
- Service information and recommendations
- Pricing and membership questions
- Location and hours inquiries
- Booking appointments
- General support

### Current Implementation

The chatbot currently uses **mock responses** with keyword-based matching for demonstration purposes.

### Integrating Real AI Services

To connect a real AI service (OpenAI, Anthropic Claude, or others), follow these steps:

#### Option 1: OpenAI GPT-4

1. **Install OpenAI SDK**
   ```bash
   npm install openai
   ```

2. **Add API Key to Environment Variables**
   ```bash
   # .env.local
   OPENAI_API_KEY=your_api_key_here
   ```

3. **Create AI API Route**

   Create `src/app/api/chat/route.ts`:
   ```typescript
   import OpenAI from 'openai'
   import { NextResponse } from 'next/server'

   const openai = new OpenAI({
     apiKey: process.env['OPENAI_API_KEY'],
   })

   export async function POST(request: Request) {
     const { message, history } = await request.json()

     const systemPrompt = `You are a helpful assistant for Superior Car Wash.
     Help customers with:
     - Services: Express ($12), Deluxe ($22), Ultimate ($32), Full Detail ($99+)
     - Memberships: Basic Shine ($24/mo), Premium Gloss ($34/mo), Ultimate Protect ($42/mo)
     - Locations: Downtown Scranton & Wilkes-Barre
     - Hours: Mon-Sat 7am-8pm, Sun 8am-6pm

     Be friendly, concise, and guide them toward booking.`

     const completion = await openai.chat.completions.create({
       model: 'gpt-4',
       messages: [
         { role: 'system', content: systemPrompt },
         ...history,
         { role: 'user', content: message },
       ],
       temperature: 0.7,
       max_tokens: 200,
     })

     return NextResponse.json({
       message: completion.choices[0]?.message?.content || 'Sorry, I encountered an error.',
     })
   }
   ```

4. **Update ChatBot Component**

   Replace the `getMockResponse` function in `ChatBot.tsx`:
   ```typescript
   async function getAIResponse(userInput: string, messages: Message[]): Promise<string> {
     const response = await fetch('/api/chat', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({
         message: userInput,
         history: messages.map(m => ({
           role: m.role,
           content: m.content,
         })),
       }),
     })

     const data = await response.json()
     return data.message
   }
   ```

#### Option 2: Anthropic Claude

1. **Install Anthropic SDK**
   ```bash
   npm install @anthropic-ai/sdk
   ```

2. **Add API Key**
   ```bash
   # .env.local
   ANTHROPIC_API_KEY=your_api_key_here
   ```

3. **Create API Route**

   Create `src/app/api/chat/route.ts`:
   ```typescript
   import Anthropic from '@anthropic-ai/sdk'
   import { NextResponse } from 'next/server'

   const anthropic = new Anthropic({
     apiKey: process.env['ANTHROPIC_API_KEY'],
   })

   export async function POST(request: Request) {
     const { message, history } = await request.json()

     const systemPrompt = `You are a helpful assistant for Superior Car Wash...`

     const completion = await anthropic.messages.create({
       model: 'claude-3-sonnet-20240229',
       max_tokens: 200,
       system: systemPrompt,
       messages: [
         ...history,
         { role: 'user', content: message },
       ],
     })

     return NextResponse.json({
       message: completion.content[0].text,
     })
   }
   ```

### Features to Add

Future enhancements for the chatbot:

1. **Context Awareness**
   - Remember user preferences
   - Track conversation history
   - Provide personalized recommendations

2. **Integration with Backend**
   - Direct booking through chat
   - Check real-time availability
   - Process payments

3. **Multi-Language Support**
   - Detect user language
   - Respond in appropriate language

4. **Analytics**
   - Track common questions
   - Measure customer satisfaction
   - Identify improvement areas

5. **Escalation to Human**
   - Detect when AI can't help
   - Transfer to live chat
   - Create support tickets

### Cost Considerations

**OpenAI GPT-4:**
- ~$0.03 per 1K input tokens
- ~$0.06 per 1K output tokens
- Average conversation: $0.05-0.10

**Anthropic Claude 3:**
- ~$0.003 per 1K input tokens
- ~$0.015 per 1K output tokens
- Average conversation: $0.01-0.02

**Estimated Monthly Costs:**
- 1,000 conversations: $10-100
- 5,000 conversations: $50-500
- 10,000 conversations: $100-1000

### Security Best Practices

1. **Never expose API keys in frontend code**
2. **Use server-side API routes** (as shown above)
3. **Implement rate limiting** to prevent abuse
4. **Validate and sanitize** all user inputs
5. **Monitor usage** to detect anomalies
6. **Set token limits** to control costs

### Testing

Test the chatbot with various scenarios:
- Pricing questions
- Service recommendations
- Location inquiries
- Booking requests
- Edge cases and errors

### Deployment

When deploying to Netlify/Vercel:
1. Add API keys to environment variables in platform settings
2. Never commit `.env.local` to git
3. Test in staging before production
4. Monitor API usage and costs

## Future AI Components

- `WeatherPersonalization.tsx` - Weather-based service recommendations
- `ServiceRecommender.tsx` - AI-powered service suggestions
- `PricingOptimizer.tsx` - Dynamic pricing based on demand
