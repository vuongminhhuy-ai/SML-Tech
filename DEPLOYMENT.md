# DEPLOYMENT OPTIONS - SML TECH Website

## Option 1: Vercel (RECOMMENDED) ⭐

**Tại sao nên dùng:**
- ✅ Admin panel hoạt động (/admin)
- ✅ Upload images được
- ✅ Edit content real-time
- ✅ Free tier: 100GB bandwidth/tháng
- ✅ Custom domain miễn phí

### Deploy Steps (2 phút)

1. **Đăng nhập Vercel:**
   - Vào https://vercel.com
   - Sign in with GitHub

2. **Import Project:**
   - Click "Add New" → "Project"
   - Select "vuongminhhuy-ai/SML-Tech"
   - Click "Import"

3. **Deploy:**
   - Vercel tự detect Next.js
   - Click "Deploy"
   - Wait 2-3 minutes
   - Done!

4. **Live URL:**
   - `https://sml-tech.vercel.app`
   - Hoặc custom domain: `smltech.vn`

### Custom Domain (Optional)

1. Vercel Dashboard → Domains
2. Add `smltech.vn`
3. Update DNS:
   ```
   Type    Name    Value
   A       @       76.76.21.21
   CNAME   www     cname.vercel-dns.com
   ```

---

## Option 2: GitHub Pages (Static Only)

**Limitations:**
- ❌ Admin panel KHÔNG hoạt động
- ❌ Không upload images được
- ❌ Phải edit content bằng Git

**Khi nào dùng:**
- Chỉ cần website tĩnh
- Không cần admin panel
- Edit content qua GitHub

### Setup GitHub Pages (Nếu chọn này)

1. **Enable Static Export:**

Edit `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // ← Add this
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

2. **Build static files:**
```bash
npm run build
```

3. **Create GitHub Action:**

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v2
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v2
```

4. **Enable in GitHub:**
   - Repo → Settings → Pages
   - Source: GitHub Actions
   - Save

5. **Access:**
   - `https://vuongminhhuy-ai.github.io/SML-Tech/`

---

## 🆚 Detailed Comparison

| Feature | Vercel | GitHub Pages |
|---------|--------|--------------|
| **Cost** | Free | Free |
| **Setup Time** | 2 minutes | 5-10 minutes |
| **Admin Panel** | ✅ Works | ❌ Not supported |
| **API Routes** | ✅ Yes | ❌ No |
| **Image Upload** | ✅ Yes | ❌ No |
| **Custom Domain** | ✅ Free + SSL | ✅ Free + SSL |
| **Build Time** | Auto | Auto via Actions |
| **Bandwidth** | 100GB/month | Unlimited |
| **Next.js Support** | Full | Static export only |
| **Deployment** | Auto on push | Via GitHub Actions |

---

## 💡 Recommendation

### For SML TECH Website: **USE VERCEL**

**Reasons:**
1. Admin panel cần thiết để edit content
2. Vercel free tier đủ dùng (100GB/tháng)
3. Deploy nhanh hơn (2 phút vs 10 phút)
4. Không cần config gì thêm
5. Professional URL

### GitHub Pages suitable for:
- Landing pages đơn giản
- Blog static
- Documentation sites
- Portfolio sites

---

## 🚀 Quick Deploy (Vercel)

**Commands:** KHÔNG CẦN! Just use Vercel dashboard.

**Steps:**
1. vercel.com → Sign in with GitHub
2. Import "SML-Tech" repo
3. Click Deploy
4. Live in 2 minutes

**That's it!** ✨

---

## 📊 Cost Breakdown

### Vercel Free Tier:
- 100GB bandwidth/month
- Unlimited websites
- Custom domains: Unlimited
- Build time: 100 hours/month
- **For SML TECH:** More than enough!

### GitHub Pages:
- Unlimited bandwidth
- 1GB storage
- **BUT:** No server features

---

## 🎯 Final Answer

**Dùng Vercel!** 

- Free như GitHub Pages
- Nhưng có đầy đủ features
- Admin panel hoạt động
- Setup dễ hơn

**GitHub Pages chỉ phù hợp nếu:**
- Bạn muốn website tĩnh 100%
- Không cần admin panel
- OK với edit content qua Git

---

**Next Step:** Deploy lên Vercel ngay! (2 phút)
