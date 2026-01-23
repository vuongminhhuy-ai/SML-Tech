# SML TECH - Admin Panel Usage Guide

## 🔐 Accessing Admin Panel

**URL:** `http://localhost:3000/admin` (local) or `https://smltech.vn/admin` (production)

---

## 📋 Setup Supabase

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up / Log in
3. Click "New Project"
4. Fill in:
   - Name: `SML TECH`
   - Database Password: (create strong password)
   - Region: `Southeast Asia (Singapore)`
5. Wait 2-3 minutes for project creation

### 2. Get API Keys

1. In Supabase dashboard → Settings → API
2. Copy:
   - `Project URL` → This is your `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → This is your `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 3. Add to Environment Variables

Create `.env.local` in project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Run Database Schema

1. Supabase dashboard → SQL Editor
2. Click "New Query"
3. Copy entire content from `supabase-schema.sql`
4. Paste and click "Run"
5. You should see: "Success. No rows returned"

### 5. Enable Storage

1. Supabase → Storage
2. Bucket `images` should be auto-created
3. Make sure it's set to `public`

---

## 🎨 Using Admin Panel

### Edit Text Content

1. Go to `/admin`
2. Find the section you want to edit (e.g., "hero / title")
3. Click "Chỉnh sửa" button
4. Edit Vietnamese (🇻🇳) and English (🇬🇧) text
5. Click "Lưu" to save
6. Changes appear on website immediately

**Example Sections:**
- `hero / title` - Main headline
- `hero / subtitle` - Subheading
- `hero / description` - Hero paragraph
- `value1 / title` - First value proposition title
- `cta / title` - Call-to-action section title

### Upload Images

1. In any content item, scroll to "Hình ảnh" section
2. Click "Upload hình mới"
3. Select image file (JPG, PNG, WebP)
4. Wait for upload (green success message)
5. Image URL saved automatically

**Recommended Image Sizes:**
- Hero product: 1200x800px
- Dashboard screenshot: 1920x1080px
- Logo: SVG or 400x100px PNG

---

## 📊 Managing Testimonials

### Edit Customer Quotes

Currently in database, can be managed via SQL:

```sql
-- View testimonials
SELECT * FROM testimonials;

-- Update testimonial
UPDATE testimonials
SET quote_vi = 'New Vietnamese quote',
    quote_en = 'New English quote'
WHERE id = 'testimonial-id';
```

**Future Enhancement:** Add testimonials management UI in admin panel.

---

## 🔄 Content Update Workflow

### Adding New Editable Content

To make a new section editable:

1. **Add to Database:**
```sql
INSERT INTO content (section, key, value_vi, value_en) VALUES
('new_section', 'new_key', 'Vietnamese text', 'English text');
```

2. **Update Component:**
```typescript
// In component
const [content, setContent] = useState<{[key: string]: string}>({})

useEffect(() => {
  async function loadContent() {
    const data = await getContent('new_section')
    const contentMap = data.reduce((acc, item) => ({
      ...acc,
      [item.key]: language === 'vi' ? item.value_vi : item.value_en
    }), {})
    setContent(contentMap)
  }
  loadContent()
}, [language])

// Use in JSX
<h1>{content['new_key'] || 'Fallback text'}</h1>
```

---

## 🛡️ Security Recommendations

### Production Setup

1. **Enable RLS (Row Level Security):**
   - Already enabled in schema
   - Only authenticated users can edit

2. **Add Authentication:**
```typescript
// Add to admin/page.tsx
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminDashboard() {
  const router = useRouter()
  
  useEffect(() => {
    checkAuth()
  }, [])
  
  async function checkAuth() {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      router.push('/login')
    }
  }
  
  // ... rest of component
}
```

3. **Create Login Page:**
```typescript
// app/login/page.tsx
'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (!error) {
      window.location.href = '/admin'
    }
  }
  
  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto mt-20">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 border rounded mb-4"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-2 border rounded mb-4"
      />
      <button type="submit" className="btn-primary w-full">
        Login
      </button>
    </form>
  )
}
```

4. **Create Admin User in Supabase:**
   - Supabase → Authentication → Users
   - Click "Invite User"
   - Enter admin email
   - User receives email with password setup link

---

## 📝 Common Tasks

### Change Homepage Hero Text

1. Go to `/admin`
2. Find "hero / title"
3. Click "Chỉnh sửa"
4. Update both languages
5. Click "Lưu"

### Upload New Product Image

1. Go to `/admin`
2. Find section with image_url field
3. Click "Upload hình mới"
4. Select image
5. Done - URL saved automatically

### Add New Testimonial

```sql
INSERT INTO testimonials (
  name, title, company, 
  quote_vi, quote_en, 
  results, is_featured
) VALUES (
  'Customer Name', 
  'Title', 
  'Company Name',
  'Vietnamese quote here',
  'English quote here',
  '{"waste_reduction": "5%", "monthly_saving": "50M", "roi_months": "6"}',
  true
);
```

---

## 🔧 Troubleshooting

### "Cannot read properties of undefined"
- Check `.env.local` has correct Supabase credentials
- Restart dev server: `npm run dev`

### "No rows returned" when loading content
- Run `supabase-schema.sql` in SQL Editor
- Check database has content table with data

### Image upload fails
- Check Storage → images bucket exists
- Check bucket is set to `public`
- File size < 5MB

### Changes not appearing on website
- Hard refresh browser (Ctrl+Shift+R)
- Check content is actually saved in Supabase
- Check component is using dynamic content, not hardcoded

---

## 🎯 Quick Reference

**Supabase Dashboard:** https://app.supabase.com  
**Admin Panel:** /admin  
**Schema File:** supabase-schema.sql  
**Supabase Client:** lib/supabase.ts  

**Key Files:**
- `/app/admin/page.tsx` - Admin UI
- `/lib/supabase.ts` - Database functions
- `/supabase-schema.sql` - Database setup
- `/.env.local` - Configuration (don't commit!)

---

**Admin panel allows easy content and image management without code changes! 🎉**
