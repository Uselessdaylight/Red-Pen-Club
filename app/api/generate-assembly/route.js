import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
})

export async function POST(request) {
  try {
    const { ageGroup, theme, customTheme, duration, notes, refinePrompt, previousResult } = await request.json()

    const actualTheme = customTheme || theme

    let prompt

    if (refinePrompt && previousResult) {
      prompt = `You are an expert UK school teacher writing assistant.

Here is an existing assembly script:
"${previousResult}"

Please rewrite this script with the following adjustment: ${refinePrompt}

Requirements:
- Write in UK English
- Keep it appropriate for a school assembly
- Engaging and age-appropriate
- Do not use markdown formatting, asterisks, or bold markers — plain text only
- Do not fabricate any details not in the original

Write only the improved script, nothing else.`
    } else {
      prompt = `You are an expert UK school teacher writing an assembly script.

Write a complete assembly script for the following:
- Age group: ${ageGroup}
- Theme: ${actualTheme}
- Duration: ${duration} minutes
- Additional notes: ${notes || 'None'}

Requirements:
- Write in UK English
- Engaging, warm and age-appropriate for ${ageGroup}
- Include: a clear introduction, 2-3 key points or a short story, a reflection moment, a strong closing message
- Write it as a script the teacher reads aloud — include stage directions in brackets like (pause) or (ask the children)
- Interactive where appropriate — include questions for pupils to answer
- Do not use markdown formatting, asterisks, or bold markers — plain text only
- Approximately ${duration} minutes when read aloud at a natural pace

Write only the assembly script, nothing else.`
    }

    const message = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 2000,
      messages: [{ role: 'user', content: prompt }]
    })

    return Response.json({ result: message.content[0].text })

  } catch (error) {
    console.error('Error:', error)
    return Response.json({ error: 'Something went wrong' }, { status: 500 })
  }
}