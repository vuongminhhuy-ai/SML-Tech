import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our content
export type ContentItem = {
    id: string
    section: string
    key: string
    value_vi: string
    value_en: string
    image_url?: string
    created_at: string
    updated_at: string
}

export type Testimonial = {
    id: string
    name: string
    title: string
    company: string
    quote_vi: string
    quote_en: string
    avatar_url?: string
    results: {
        waste_reduction: string
        monthly_saving: string
        roi_months: string
    }
    is_featured: boolean
    created_at: string
}

// Content management functions
export async function getContent(section?: string) {
    let query = supabase.from('content').select('*')

    if (section) {
        query = query.eq('section', section)
    }

    const { data, error } = await query

    if (error) throw error
    return data as ContentItem[]
}

export async function updateContent(id: string, updates: Partial<ContentItem>) {
    const { data, error } = await supabase
        .from('content')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()

    if (error) throw error
    return data[0]
}

export async function uploadImage(file: File, bucket: string = 'images') {
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const filePath = `${fileName}`

    const { error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(filePath, file)

    if (uploadError) throw uploadError

    const { data } = supabase.storage.from(bucket).getPublicUrl(filePath)

    return data.publicUrl
}

export async function getTestimonials(featured?: boolean) {
    let query = supabase.from('testimonials').select('*')

    if (featured !== undefined) {
        query = query.eq('is_featured', featured)
    }

    const { data, error } = await query

    if (error) throw error
    return data as Testimonial[]
}
