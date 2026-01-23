import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const CONTENT_FILE = path.join(process.cwd(), 'data', 'content.json')

// Validate content structure
function validateContent(content: any): boolean {
    if (!content || typeof content !== 'object') return false

    // Check required sections
    const requiredSections = ['hero', 'values', 'cta', 'testimonial', 'stats']
    for (const section of requiredSections) {
        if (!(section in content)) return false
    }

    return true
}

// GET - Read content
export async function GET() {
    try {
        const data = fs.readFileSync(CONTENT_FILE, 'utf8')
        const content = JSON.parse(data)
        return NextResponse.json(content)
    } catch (error) {
        console.error('Error reading content:', error)
        return NextResponse.json({ error: 'Failed to read content' }, { status: 500 })
    }
}

// POST - Update content
export async function POST(request: Request) {
    try {
        const newContent = await request.json()

        // Validate content structure
        if (!validateContent(newContent)) {
            return NextResponse.json({
                error: 'Invalid content structure'
            }, { status: 400 })
        }

        // Create backup before writing
        const backupFile = CONTENT_FILE + '.backup'
        if (fs.existsSync(CONTENT_FILE)) {
            fs.copyFileSync(CONTENT_FILE, backupFile)
        }

        // Write to file
        fs.writeFileSync(CONTENT_FILE, JSON.stringify(newContent, null, 2), 'utf8')

        return NextResponse.json({ success: true, message: 'Content updated successfully' })
    } catch (error) {
        console.error('Error updating content:', error)

        // Restore from backup if it exists
        const backupFile = CONTENT_FILE + '.backup'
        if (fs.existsSync(backupFile)) {
            fs.copyFileSync(backupFile, CONTENT_FILE)
        }

        return NextResponse.json({ error: 'Failed to update content' }, { status: 500 })
    }
}
