import { readFile } from 'fs/promises'
import path from 'path'

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const user = searchParams.get('user')

    if (!['ura', 'bayrta'].includes(user)) {
      return new Response('Invalid user', { status:400 })
    }

    const fileName = user === 'ura' ? 'guestsUra.json' : 'guestsBayrta.json'
    const filePath = path.join(process.cwd(), 'src', 'data', fileName)

    const fileData = await readFile(filePath, 'utf-8')
    const guests = JSON.parse(fileData)

    return Response.json(guests)
  } catch (err) {
    console.error('Ошибка чтения:', err)
    return new Response('Server error', { status: 500 })
  }
}
