export async function POST(req) {
  const { fio, tel, comment } = await req.json()

  const message = `
🦷 Новая заявка:
👤 ФИО: ${fio}
📞 Телефон: ${tel}
💬 Комментарий: ${comment || 'нет'}
  `

  const TOKEN = process.env.TELEGRAM_TOKEN
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID

  const res = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message
    })
  })

  const data = await res.json()

  console.log("TELEGRAM RESPONSE:", data)

  return Response.json({
    ok: true,
    telegram: data
  })
}