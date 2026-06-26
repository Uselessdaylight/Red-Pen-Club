import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
})

export async function POST(request) {
  try {
    const { yearGroup, tripType, destination, date, cost, notes, refinePrompt, previousResult } = await request.json()

    const dateInfo = date ? `Date: ${date}` : ''
    const costInfo = cost ? `Cost: ${cost}` : 'Cost: free'

    let prompt

    if (refinePrompt && previousResult) {
      prompt = `You are an expert UK school teacher writing assistant.

Here is an existing trip letter:
"${previousResult}"

Please rewrite this letter with the following adjustment: ${refinePrompt}

Requirements:
- Write in UK English
- Keep it appropriate for a school parent letter
- Professional and clear
- Do not fabricate any details not in the original

Write only the improved letter, nothing else.`
    } else {
      prompt = `You are an expert UK school teacher writing a trip letter to parents.

Write a professional trip letter for the following:
- Year Group: ${yearGroup}
- Trip type: ${tripType}
- Destination: ${destination}
- ${dateInfo}
- ${costInfo}
- Additional notes: ${notes || 'None provided'}

Requirements:
- Write in UK English
- Start with "Dear Parent/Carer,"
- End with "Kind regards," followed by "[Teacher's name]"
- Include: purpose of trip, destination, date if provided, cost if provided, what to bring, permission slip reminder
- Friendly but informative tone
- Clear and easy to read for parents
- Do not use markdown formatting, asterisks, or bold markers - plain text only
- Include a permission slip section at the bottom with a dotted line, student name field, and parent signature field, and two tick boxes: one for "Yes, I give permission" and one for "No, I do not give permission"

Write only the trip letter, nothing else.`
    }

    const message = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 600,
      messages: [{ role: 'user', content: prompt }]
    })

    return Response.json({ result: message.content[0].text })

  } catch (error) {
    console.error('Error:', error)
    return Response.json({ error: 'Something went wrong' }, { status: 500 })
  }
}