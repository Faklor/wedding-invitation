import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const filePath = path.join(process.cwd(), 'src/data', 'guests.json')
console.log(filePath)

// GET: получить список гостей
export async function GET() {
  try {
    const data = fs.readFileSync(filePath, 'utf-8')
    const guests = JSON.parse(data)
    return NextResponse.json(guests)
  } catch (err) {
    return NextResponse.json({ error: 'Ошибка чтения файла' }, { status: 500 })
  }
}

// POST: добавить нового гостя
export async function POST(req) {
  try {
    const body = await req.json()
    const { name } = body

    if (!name || !name.trim()) {
      return NextResponse.json({ error: 'ФИО не может быть пустым' }, { status: 400 })
    }

    const data = fs.readFileSync(filePath, 'utf-8')
    const guests = JSON.parse(data)

    const newGuest = { id: Date.now(), name: name.trim() }
    guests.push(newGuest)

    fs.writeFileSync(filePath, JSON.stringify(guests, null, 2), 'utf-8')

    return NextResponse.json(newGuest, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: 'Ошибка записи файла' }, { status: 500 })
  }
}
