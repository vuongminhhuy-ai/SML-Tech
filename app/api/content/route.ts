import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const CONTENT_FILE = path.join(process.cwd(), 'data', 'content.json')

// GET - Read content
export async function GET() {
    try {
        const data = fs.readFileSync(CONTENT_FILE, 'utf8')
        return NextResponse.json(JSON.parse(data))
    } catch (error) {
        console.error('Error reading content:', error)
        return NextResponse.json({ error: 'Failed to read content' }, { status: 500 })
    }
}

// POST - Update content
export async function POST(request: Request) {
    try {
        const newContent = await request.json()

        // Write to file
        fs.writeFileSync(CONTENT_FILE, JSON.stringify(newContent, null, 2), 'utf8')

        return NextResponse.json({ success: true, message: 'Content updated successfully' })
    } catch (error) {
        console.error('Error updating content:', error)
        return NextResponse.json({ error: 'Failed to update content' }, { status: 500 })
    }
}
