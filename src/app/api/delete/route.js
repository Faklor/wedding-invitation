import { readFile, writeFile } from 'fs/promises'
import path from 'path'

export async function POST(req) {
  try {
    const { name, user } = await req.json()

    if (!name || !user || !['ura', 'bayrta'].includes(user)) {
      return new Response('Invalid input', { status: 400 })
    }

    const fileName = user === 'ura' ? 'guestsUra.json' : 'guestsBayrta.json'
    const filePath = path.join(process.cwd(), 'src', 'data', fileName)

    const fileData = await readFile(filePath, 'utf-8')
    const guests = JSON.parse(fileData)

    const updated = guests.filter(g => g.name !== name)

    await writeFile(filePath, JSON.stringify(updated, null, 2), 'utf-8')
    return new Response('Deleted', { status: 200 })
  } catch (err) {
    console.error('Ошибка удаления:', err)
    return new Response('Server error', { status: 500 })
  }
}
