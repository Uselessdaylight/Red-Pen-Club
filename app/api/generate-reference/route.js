import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
})

export async function POST(request) {
  try {
    const { yearGroup, studentName, letterType, destination, notes, refinePrompt, previousResult } = await request.json()

    const name = studentName ? studentName : 'the student'
    const dest = destination ? `addressed to ${destination}` : ''

    let prompt

    if (refinePrompt && previousResult) {
      prompt = `You are an expert UK school teacher writing assistant.

Here is an existing reference letter:
"${previousResult}"

Please rewrite this letter with the following adjustment: ${refinePrompt}

Requirements:
- Write in UK English
- Keep it appropriate for a formal school reference letter
- Professional and well structured
- Do not fabricate any details not in the original

Write only the improved letter, nothing else.`
    } else {
      prompt = `You are an expert UK secondary or primary school teacher writing a reference letter.

Write a professional reference letter for the following:
- Year Group: ${yearGroup}
- Student: ${name}
- Letter type: ${letterType}
- ${dest}
- Teacher's notes: ${notes}

Requirements:
- Write in UK English (behaviour, practise, organise etc)
- Start with "To Whom It May Concern," or "Dear Admissions Team," if university
- End with "Yours sincerely," followed by a line break then "[Teacher's name]" and "[Job title]"
- 3-4 paragraphs: introduction, academic/personal qualities, specific achievements, strong recommendation
- Warm but professional tone
- Do not fabricate specific grades or details not provided
- Appropriate for official use

Write only the reference letter, nothing else.`
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