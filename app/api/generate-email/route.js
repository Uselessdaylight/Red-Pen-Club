import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
})

export async function POST(request) {
  try {
    const { yearGroup, studentName, emailType, tone, notes, refinePrompt, previousResult } = await request.json()

    const name = studentName ? studentName : 'the student'

    let prompt

    if (refinePrompt && previousResult) {
      prompt = `You are an expert UK school teacher writing assistant.

Here is an existing parent email:
"${previousResult}"

Please rewrite this email with the following adjustment: ${refinePrompt}

Requirements:
- Write in UK English
- Keep it appropriate for a school parent email
- Professional and clear
- Do not fabricate any details not in the original

Write only the improved email, nothing else.`
    } else {
      prompt = `You are an expert UK primary and secondary school teacher writing assistant.

Write a professional parent email for the following situation:
- Year Group: ${yearGroup}
- Student: ${name}
- Email type: ${emailType}
- Tone: ${tone}
- Teacher's notes: ${notes}

Requirements:
- Write in UK English (behaviour, practise, organise etc)
- Start with "Dear Parent/Carer,"
- End with "Kind regards," followed by a line break then "[Teacher's name]"
- Professional but appropriately ${tone.toLowerCase()}
- Clear and concise — parents are busy
- Do not fabricate details not provided
- Match the email type and tone requested

Write only the email, nothing else.`
    }

    const message = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 500,
      messages: [{ role: 'user', content: prompt }]
    })

    return Response.json({ result: message.content[0].text })

  } catch (error) {
    console.error('Error:', error)
    return Response.json({ error: 'Something went wrong' }, { status: 500 })
  }
}