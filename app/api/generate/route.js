import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
})

export async function POST(request) {
  try {
    const { yearGroup, subject, effort, tone, notes } = await request.json()

    const prompt = `You are an expert UK primary and secondary school teacher writing assistant. 

Write a professional report comment for the following student:
- Year Group: ${yearGroup}
- Subject: ${subject}
- Effort level: ${effort}
- Tone: ${tone}
- Teacher's notes: ${notes}

Requirements:
- Write in UK English (behaviour, practise, organise etc)
- 3-4 sentences long
- Professional but warm
- Specific to the details provided
- Do not use the student's name
- Do not start with "This student"
- Focus on achievement, effort, and one specific next step
- Match the tone requested (formal/warm/neutral)

Write only the report comment, nothing else.`

    const message = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 300,
      messages: [{ role: 'user', content: prompt }]
    })

    return Response.json({ result: message.content[0].text })

  } catch (error) {
    console.error('Error:', error)
    return Response.json({ error: 'Something went wrong' }, { status: 500 })
  }
}