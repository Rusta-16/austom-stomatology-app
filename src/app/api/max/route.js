export async function POST(req) {
  try {
    const { fio, tel, comment } = await req.json()

    const MAX_TOKEN = process.env.MAX_TOKEN
    const MAX_CHAT_ID = process.env.MAX_CHAT_ID

    if (!MAX_TOKEN) {
      throw new Error('MAX_TOKEN is missing')
    }

    if (!MAX_CHAT_ID) {
      throw new Error('MAX is missing')
    }

    const message = `
🦷 Новая заявка:

👤 ФИО: ${fio}
📞 Телефон: ${tel}
💬 Комментарий: ${comment || 'нет'}
`
    const res = await fetch(
    `https://platform-api2.max.ru/messages?chat_id=${MAX_CHAT_ID}`,
    {
      method: 'POST',

      headers: {
        'Authorization': MAX_TOKEN,
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