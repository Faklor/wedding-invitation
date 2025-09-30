import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'


const transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  secure: true, // true для 465, false для 587
  auth: {
    user: process.env.MAIL_USER, // faklor_br_ar@mail.ru
    pass: process.env.MAIL_PASS, // пароль приложения из Mail.ru
  },
})


export async function POST(req) {
  try {
    const body = await req.json()
    const { name } = body

    if (!name || !name.trim()) {
      return NextResponse.json({ error: 'ФИО не может быть пустым' }, { status: 400 })
    }

    await transporter.sendMail({
    from: `"Wedding Bot" <${process.env.MAIL_USER}>`, // твой ящик
    to: "faklor_br_ar@mail.ru", // получатель
    replyTo: "faklor_br_ar@mail.ru", // чтобы можно было ответить
    subject: "Подтверждение присутствия",
    text: `Гость подтвердил присутствие ФИО: ${name}`,
    html: `<p>Гость подтвердил присутствие ФИО: <b>${name}</b></p>`
    })


    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Ошибка при отправке письма' }, { status: 500 })
  }
}
