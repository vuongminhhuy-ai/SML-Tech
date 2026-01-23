# SML TECH Website

Website chuyên nghiệp cho hệ thống đo khổ màng thông minh SML TECH.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Database/CMS:** Supabase
- **Deployment:** Vercel

## 📁 Project Structure

```
smltech-website/
├── app/
│   ├── layout.tsx          # Root layout với fonts
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles + Tailwind
├── components/
│   ├── Header.tsx          # Navigation + mobile menu
│   ├── Hero.tsx            # Hero section với video modal
│   ├── ValuePropositions.tsx  # 3 value cards
│   ├── ROICalculator.tsx   # Interactive calculator
│   ├── HowItWorks.tsx      # 4-step process
│   ├── ComparisonTable.tsx # Competitor comparison
│   ├── Testimonials.tsx    # Stats + testimonial
│   ├── CTASection.tsx      # Contact form
│   └── Footer.tsx          # Footer với newsletter
├── public/                 # Static assets (images)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🛠️ Installation

### Prerequisites
- Node.js 18+ installed
- npm hoặc yarn

### Steps

1. **Clone repository:**
```bash
git clone https://github.com/yourusername/smltech-website.git
cd smltech-website
```

2. **Install dependencies:**
```bash
npm install
# hoặc
yarn install
```

3. **Create environment file:**
Tạo file `.env.local` trong root directory:
```env
# Supabase (optional - for CMS)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Run development server:**
```bash
npm run dev
# hoặc
yarn dev
```

Mở [http://localhost:3000](http://localhost:3000) trong browser.

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` để thay đổi brand colors:
```typescript
colors: {
  primary: '#1A1F3C',    // Navy Blue
  accent: '#00BCD4',     // Cyan
  success: '#28A745',
  warning: '#FF9800',
}
```

### Content
Tất cả content đều hardcoded trong components. Để dùng CMS:
1. Setup Supabase tables
2. Tạo API routes trong `app/api/`
3. Update components để fetch từ API

### Images
Thêm images vào folder `public/images/`:
- Logo: `public/images/logo.svg`
- Product: `public/images/product-sml100.png`
- Hero background: `public/images/hero-bg.jpg`

## 📱 Features

### ✅ Implemented
- [x] Responsive design (mobile, tablet, desktop)
- [x] Interactive ROI Calculator với real-time calculations
- [x] Smooth animations và transitions
- [x] SEO optimized với metadata
- [x] Vietnamese + English content
- [x] Mobile-friendly navigation
- [x] Contact forms
- [x] Video modal
- [x] Comparison table
- [x] Social proof section

### 🔜 To Be Added
- [ ] Supabase CMS integration
- [ ] Admin dashboard
- [ ] Blog functionality
- [ ] Multi-language routing
- [ ] Contact form backend
- [ ] Analytics tracking
- [ ] Product image gallery

## 🗄️ Supabase Setup (Optional)

### 1. Create Supabase Project
1. Đi tới [supabase.com](https://supabase.com)
2. Tạo project mới
3. Copy URL và anon key vào `.env.local`

### 2. Create Tables

**Table: content**
```sql
CREATE TABLE content (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  section VARCHAR(50) NOT NULL,
  key VARCHAR(100) NOT NULL,
  value_vi TEXT,
  value_en TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**Table: testimonials**
```sql
CREATE TABLE testimonials (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(100),
  title VARCHAR(100),
  company VARCHAR(100),
  quote TEXT,
  avatar_url VARCHAR(255),
  results JSONB,
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Table: contacts**
```sql
CREATE TABLE contacts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  company VARCHAR(100),
  email VARCHAR(100),
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 3. Enable Row Level Security
```sql
ALTER TABLE content ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Public can read content
CREATE POLICY "Public can view content" ON content
  FOR SELECT USING (true);

-- Public can insert contacts
CREATE POLICY "Public can insert contacts" ON contacts
  FOR INSERT WITH CHECK (true);
```

## 🚀 Deployment

### Deploy to Vercel (Free)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/smltech-website.git
git push -u origin main
```

2. **Connect to Vercel:**
- Đi tới [vercel.com](https://vercel.com)
- Import GitHub repository
- Vercel sẽ tự detect Next.js project
- Click "Deploy"

3. **Add Environment Variables (nếu dùng Supabase):**
- Trong Vercel dashboard → Settings → Environment Variables
- Add `NEXT_PUBLIC_SUPABASE_URL` và `NEXT_PUBLIC_SUPABASE_ANON_KEY`

4. **Custom Domain:**
- Settings → Domains
- Add `smltech.vn`
- Update DNS records theo hướng dẫn

## 🔧 Development Tips

### Hot Reload Issues
Nếu changes không reflect:
```bash
rm -rf .next
npm run dev
```

### Build Errors
Check TypeScript errors:
```bash
npm run build
```

### Optimize Images
Use Next.js Image component:
```tsx
import Image from 'next/image'

<Image 
  src="/images/product.png" 
  alt="SML-100" 
  width={500} 
  height={500}
/>
```

## 📊 Performance

Target metrics:
- **Lighthouse Score:** > 90
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s
- **Bundle Size:** < 200KB initial load

## 🐛 Common Issues

### Issue: Module not found
```bash
npm install
```

### Issue: Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Issue: TypeScript errors
```bash
npm install --save-dev @types/react @types/node
```

## 📞 Support

- **Email:** support@smltech.vn
- **Documentation:** [Link to docs]
- **Issues:** GitHub Issues tab

## 📄 License

Copyright © 2026 SML TECH. All rights reserved.

---

**Built with ❤️ for Vietnamese manufacturers**
