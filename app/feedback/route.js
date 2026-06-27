export async function POST(request) {
  try {
    const { name, email, role, rating, message } = await request.json()

    const ratings = ['', '😞', '😐', '🙂', '😊', '🤩']
    const ratingEmoji = ratings[parseInt(rating)] || 'Not rated'

    console.log('=== NEW FEEDBACK ===')
    console.log(`Name: ${name || 'Anonymous'}`)
    console.log(`Email: ${email || 'Not provided'}`)
    console.log(`Role: ${role || 'Not provided'}`)
    console.log(`Rating: ${ratingEmoji}`)
    console.log(`Message: ${message}`)
    console.log('===================')

    return Response.json({ success: true })

  } catch (error) {
    console.error('Feedback error:', error)
    return Response.json({ error: 'Something went wrong' }, { status: 500 })
  }
}