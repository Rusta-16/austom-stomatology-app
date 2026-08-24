export async function POST(req) {
  try {
    const { fio, tel, comment } = await req.json()

    const TOKEN = process.env.TELEGRAM_TOKEN
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID

    console.log('TOKEN exists:', Boolean(TOKEN))
    console.log('CHAT_ID exists:', Boolean(CHAT_ID))

    if (!TOKEN) {
      throw new Error('TELEGRAM_TOKEN is missing')
    }

    if (!CHAT_ID) {
      throw new Error('TELEGRAM_CHAT_ID is missing')
    }

    const message = `
🦷 Новая заявка:

👤 ФИО: ${fio}
📞 Телефон: ${tel}
💬 Комментарий: ${comment || 'нет'}
`

    const res = await fetch(
      `https://api.telegram.org/bot${TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      }
    )

    const data = await res.json()

    console.log('Telegram HTTP status:', res.status)
    console.log('Telegram response:', data)

    if (!res.ok || !data.ok) {
      throw new Error(data.description || 'Telegram API error')
    }

    return Response.json({
      ok: true,
    })
  } catch (error) {
    console.error('TELEGRAM ERROR:', error)

    return Response.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    )
  }
}