import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
})

export async function POST(request) {
  try {
    const { yearGroup, articleType, notes, refinePrompt, previousResult } = await request.json()

    let prompt

    if (refinePrompt && previousResult) {
      prompt = `You are an expert UK school teacher writing assistant.

Here is an existing newsletter article:
"${previousResult}"

Please rewrite this article with the following adjustment: ${refinePrompt}

Requirements:
- Write in UK English
- Keep it appropriate for a school newsletter
- Warm and engaging for parents
- Do not use markdown formatting, asterisks, or bold markers — plain text only
- Do not fabricate any details not in the original

Write only the improved article, nothing else.`
    } else {
      prompt = `You are an expert UK school teacher writing a newsletter article for parents.

Write a newsletter article for the following:
- Year Group: ${yearGroup}
- Article type: ${articleType}
- Notes: ${notes}

Requirements:
- Write in UK English
- Warm, engaging and easy to read for parents
- 2-3 short paragraphs
- Include a short snappy headline at the top
- Do not use markdown formatting, asterisks, or bold markers — plain text only
- Celebratory and positive in tone where appropriate
- Specific to the details provided

Write only the newsletter article, nothing else.`
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