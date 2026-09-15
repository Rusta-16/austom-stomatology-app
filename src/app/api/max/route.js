export async function POST(req) {
  try {
    const { fio, tel, comment } = await req.json()

    const TOKEN = process.env.TOKEN
    const CHAT_ID = process.env.CHAT_ID

    if (!TOKEN) {
      throw new Error('MAX_TOKEN is missing')
    }

    if (!CHAT_ID) {
      throw new Error('MAX is missing')
    }бю

    const message = `
🦷 Новая заявка:

👤 ФИО: ${fio}
📞 Телефон: ${tel}
💬 Комментарий: ${comment || 'нет'}
`
    const res = await fetch(
    `https://platform-api2.max.ru/messages?chat_id=${CHAT_ID}`,
    {
      method: 'POST',

      headers: {
        'Authorization': TOKEN,
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        text: message,
      }),
    }
  )

  const data = await res.json()


    console.log('MAX HTTP status:', res.status)
    console.log('MAX response:', data)
    console.log({
      resp: res.ok,
      data: data
    })
    if (!res.ok || !data) {
      throw new Error(data.description || 'MAX API error')
    }
 
    return Response.json({
      ok: true,
    })
  } catch (error) {
    console.error('MAX ERROR:', error)

    return Response.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    )
  }
}