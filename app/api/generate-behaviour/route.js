import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
})

export async function POST(request) {
  try {
    const { yearGroup, incidentType, location, notes, refinePrompt, previousResult } = await request.json()

    const where = location ? `Location: ${location}` : ''

    let prompt

    if (refinePrompt && previousResult) {
      prompt = `You are an expert UK school behaviour documentation assistant.

Here is an existing behaviour log:
"${previousResult}"

Please rewrite this log with the following adjustment: ${refinePrompt}

Requirements:
- Write in UK English
- Keep it factual and professional
- Appropriate for official school records
- Do not fabricate any details not in the original

Write only the improved log, nothing else.`
    } else {
      prompt = `You are an expert UK school behaviour documentation assistant.

Write a professional behaviour log for the following incident:
- Year Group: ${yearGroup}
- Incident type: ${incidentType}
- ${where}
- What happened: ${notes}

Requirements:
- Write in UK English (behaviour, unauthorised etc)
- Factual, clear and professional
- Written in third person ("The student..." or "The pupil...")
- Include: what happened, staff response, outcome
- No emotive language — just facts
- Appropriate for official school safeguarding and behaviour records
- 3-5 sentences

Write only the behaviour log, nothing else.`
    }

    const message = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 400,
      messages: [{ role: 'user', content: prompt }]
    })

    return Response.json({ result: message.content[0].text })

  } catch (error) {
    console.error('Error:', error)
    return Response.json({ error: 'Something went wrong' }, { status: 500 })
  }
}