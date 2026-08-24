export async function POST(req) {
  try {
    const { fio, tel, comment } = await req.json()

    const TOKEN = process.env.TELEGRAM_TOKEN
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID

    if (!TOKEN) {
      console.error('TELEGRAM_TOKEN is missing')
      return Response.json(
        { ok: false, error: 'TELEGRAM_TOKEN is missing' },
        { status: 500 }
      )
    }

    if (!CHAT_ID) {
      console.error('TELEGRAM_CHAT_ID is missing')
      return Response.json(
        { ok: false, error: 'TELEGRAM_CHAT_ID is missing' },
        { status: 500 }
      )
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

    console.log('TELEGRAM RESPONSE:', data)

    if (!res.ok || !data.ok) {
      return Response.json(
        {
          ok: false,
          error: data.description || 'Telegram API error',
        },
        { status: 500 }
      )
    }

    return Response.json({
      ok: true,
      telegram: data,
    })
  } catch (error) {
    console.error('TELEGRAM ERROR:', error)

    return Response.json(
      {
        ok: false,
        error: 'Failed to send Telegram message',
      },
      { status: 500 }
    )
  }
}