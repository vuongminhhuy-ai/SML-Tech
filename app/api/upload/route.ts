import { NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import path from 'path'

export async function POST(request: Request) {
    try {
        const formData = await request.formData()
        const file = formData.get('file') as File

        if (!file) {
            return NextResponse.json({ error: 'No file provided' }, { status: 400 })
        }

        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)

        // Save to public/images
        const filename = `${Date.now()}-${file.name.replace(/\s/g, '-')}`
        const filepath = path.join(process.cwd(), 'public', 'images', 'uploads', filename)

        await writeFile(filepath, buffer)

        const publicUrl = `/images/uploads/${filename}`

        return NextResponse.json({
            success: true,
            url: publicUrl,
            filename
        })
    } catch (error) {
        console.error('Error uploading file:', error)
        return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 })
    }
}
