import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
})

export async function POST(request) {
  try {
    const { yearGroup, subject, targetType, notes, refinePrompt, previousResult } = await request.json()

    let prompt

    if (refinePrompt && previousResult) {
      prompt = `You are an expert UK school teacher writing assistant.

Here is an existing student target:
"${previousResult}"

Please rewrite this target with the following adjustment: ${refinePrompt}

Requirements:
- Write in UK English
- Keep it appropriate for a ${yearGroup} student
- Specific and actionable
- Do not fabricate any details not in the original

Write only the improved target, nothing else.`
    } else {
      prompt = `You are an expert UK primary and secondary school teacher writing assistant.

Write a specific, actionable student target for the following:
- Year Group: ${yearGroup}
- Subject: ${subject}
- Target type: ${targetType}
- Teacher's notes: ${notes}

Requirements:
- Write in UK English
- Start with "My target is to..." or "To achieve my next step I will..."
- Specific and measurable — not vague like "try harder"
- Achievable for a ${yearGroup} student
- 2-3 sentences maximum
- Include one concrete action the student can take
- Positive and forward-looking in tone

Write only the student target, nothing else.`
    }

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