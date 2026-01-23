# SML TECH - Admin Panel (JSON-based - 100% Free)

## 🎉 No Database Required!

This admin panel uses **JSON files** instead of external databases - completely free, no limits!

---

## ✅ What You Get

- ✅ **100% miễn phí** - Không cần Supabase, Firebase, etc.
- ✅ **Đơn giản** - Chỉ cần edit JSON file
- ✅ **Nhanh** - Không có API calls đến external services
- ✅ **An toàn** - Content lưu trong project, deploy cùng code

---

## 🚀 Quick Start

### 1. Access Admin Panel

**URL:** `http://localhost:3000/admin` (local)

Hoặc: `https://your-site.vercel.app/admin` (production)

### 2. Edit Content

1. Click "Chỉnh sửa" button
2. Sửa text (Vietnamese + English)
3. Click "Lưu Tất Cả"
4. Done! Changes saved to `data/content.json`

### 3. Upload Images

1. Click "Chọn hình để upload"
2. Select image file
3. Auto-uploaded to `public/images/uploads/`
4. Copy URL to use in content

---

## 📁 File Structure

```
smltech-website/
├── data/
│   └── content.json           ← All editable content here
│
├── public/images/uploads/     ← Uploaded images
│
├── app/api/
│   ├── content/route.ts       ← API to read/write JSON
│   └── upload/route.ts        ← API to upload images
│
└── app/admin/page.tsx         ← Admin dashboard
```

---

## 📝 How It Works

### Content Storage

All content stored in `data/content.json`:

```json
{
  "hero": {
    "title_vi": "Tiêu đề tiếng Việt",
    "title_en": "English title",
    ...
  },
  "values": [...],
  "cta": {...},
  ...
}
```

### Editing Process

1. **Admin UI** → Edit content
2. **POST /api/content** → Save to content.json
3. **Homepage** → Read from content.json
4. **Changes** → Immediate (after save)

### Image Upload

1. **Upload** → File saved to `public/images/uploads/`
2. **URL** → `/images/uploads/filename.jpg`
3. **Use** → Copy URL to use in content

---

## 🔧 Advanced Editing

### Option 1: Via Admin Panel (Recommended)

Visit `/admin` and use the UI.

### Option 2: Direct JSON Editing

1. Open `data/content.json`
2. Edit text directly
3. Save file
4. Restart dev server (if local)

Example:
```json
{
  "hero": {
    "title_vi": "Tiêu đề mới của bạn",
    "title_en": "Your new title"
  }
}
```

---

## 🎨 Adding New Editable Sections

### 1. Add to content.json

```json
{
  "new_section": {
    "text_vi": "Vietnamese text",
    "text_en": "English text"
  }
}
```

### 2. Update Admin Panel

Add editing UI in `app/admin/page.tsx`:

```tsx
<input
  value={content.new_section.text_vi}
  onChange={(e) => setContent({
    ...content,
    new_section: { ...content.new_section, text_vi: e.target.value }
  })}
/>
```

### 3. Use in Component

```tsx
'use client'
import { useEffect, useState } from 'react'

export default function MyComponent() {
  const [content, setContent] = useState<any>(null)
  
  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => setContent(data))
  }, [])
  
  return <h1>{content?.new_section?.text_vi}</h1>
}
```

---

## 🔒 Security (Production)

### Add Password Protection

Simple password protection for `/admin`:

```tsx
// app/admin/page.tsx
'use client'

export default function AdminDashboard() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  
  const handleLogin = () => {
    if (password === 'your-secret-password') {
      setAuthenticated(true)
      localStorage.setItem('admin_auth', 'true')
    } else {
      alert('Wrong password!')
    }
  }
  
  useEffect(() => {
    if (localStorage.getItem('admin_auth') === 'true') {
      setAuthenticated(true)
    }
  }, [])
  
  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full p-8">
          <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded mb-4"
            placeholder="Password"
          />
          <button onClick={handleLogin} className="btn-primary w-full">
            Login
          </button>
        </div>
      </div>
    )
  }
  
  return (
    // ... admin panel
  )
}
```

---

## 📊 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Deploy on Vercel
3. Auto-deployed with admin panel
4. `/admin` works immediately

**Note:** File writes work on Vercel Edge Functions!

### Alternative: Use Git for Changes

If Vercel blocks writes:
1. Edit `data/content.json` locally
2. Commit and push to GitHub
3. Vercel auto-deploys

---

## 🆚 Comparison: JSON vs Supabase

| Feature | JSON-based | Supabase |
|---------|-----------|----------|
| **Cost** | FREE ✅ | FREE tier → Paid |
| **Setup** | None | Sign up, config |
| **Speed** | Ultra fast | Network calls |
| **Limits** | None | 500MB, 2GB bandwidth |
| **Offline** | Works | Needs internet |
| **Complexity** | Simple | Database setup |

**Verdict:** JSON is perfect for small-medium websites like SML TECH!

---

## ❓ FAQ

**Q: Can multiple admins edit at once?**  
A: No, with JSON files, last save wins. Use Git workflow for multi-admin.

**Q: What if I want a real database later?**  
A: Easy migration - export JSON to Supabase/Firebase/MongoDB.

**Q: Are images stored in JSON?**  
A: No, images go to `public/images/uploads/`. JSON only stores URLs.

**Q: Can I rollback changes?**  
A: Yes! Use Git history to revert `content.json`.

**Q: Is it production-ready?**  
A: Yes! Many sites use JSON content. Perfect for < 10,000 pages.

---

## 🎯 Quick Commands

**Start dev server:**
```bash
npm run dev
```

**Access admin:**
```
http://localhost:3000/admin
```

**Edit content directly:**
```
data/content.json
```

**View uploaded images:**
```
public/images/uploads/
```

---

**100% free, zero dependencies, works everywhere! 🎉**
