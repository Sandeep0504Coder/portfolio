# 🚀 Deployment Guide

Your Sandeep Mandal portfolio is ready for deployment! Here are step-by-step instructions for popular hosting platforms.

## Pre-Deployment Checklist

- [x] All content is accurate and up-to-date
- [x] Links to GitHub, LinkedIn, and email are correct
- [x] Phone number and contact details verified
- [x] All projects and descriptions are complete
- [ ] (Optional) Add a profile image to assets
- [ ] (Optional) Add project screenshots
- [ ] (Optional) Add favicon

## Build Command

Before deploying, always build locally:

```bash
npm run build
```

This creates a `dist/` folder with production-ready files.

---

## Option 1: Vercel (Recommended - Free)

**Vercel is the easiest option with auto-deployment from GitHub**

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/YOUR_USERNAME/sandeep-portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Your site will be live at: `https://sandeep-portfolio.vercel.app`

3. **Configure Custom Domain** (Optional)
   - In Vercel dashboard → Settings → Domains
   - Add your custom domain

**Advantages:**
- Automatic deployments on push
- Free SSL certificate
- Excellent performance
- Native Next.js/React support

---

## Option 2: Netlify (Free)

### Steps:

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

3. **Access Your Site**
   - Your site will be at: `https://[random-name].netlify.app`

**Advantages:**
- Simple setup
- Free SSL certificate
- Auto deployments from Git
- Drag & drop deployment

---

## Option 3: GitHub Pages (Free)

### Steps:

1. **Update vite.config.ts**
   ```typescript
   export default defineConfig({
     base: '/sandeep-portfolio/',  // if using repo name
     plugins: [react()],
   })
   ```

2. **Update package.json**
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```

3. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable in GitHub**
   - Go to repository Settings
   - Pages section
   - Select "Deploy from a branch"
   - Branch: gh-pages

**Advantages:**
- Completely free
- Directly from GitHub
- Version control integration

---

## Option 4: AWS Amplify (Free tier available)

### Steps:

1. **Push to GitHub/CodeCommit**
   ```bash
   git push origin main
   ```

2. **Deploy on AWS Amplify**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
   - Click "Create app"
   - Connect your Git repository
   - Build settings:
     ```
     - Build command: npm run build
     - Output directory: dist
     ```
   - Deploy

**Advantages:**
- Enterprise-grade infrastructure
- Free tier available
- API integration ready
- Auto-scaling

---

## Option 5: Traditional Hosting (GoDaddy, Hostinger, etc.)

### Steps:

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Upload via FTP**
   - Connect to your hosting via FTP client
   - Upload all files from `dist/` folder
   - Set `index.html` as your default document

3. **Configure Server**
   - Set up 404 redirects to `index.html`
   - Enable gzip compression
   - Set cache headers

**Note:** You may need to add this to `.htaccess`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Post-Deployment

### After deployment, verify:

1. **Site loads correctly**
   - Check all pages work
   - Test responsive design on mobile

2. **Links work**
   - Email links
   - Phone links
   - Social media links
   - All anchors/navigation

3. **Performance**
   - Check [PageSpeed Insights](https://pagespeed.web.dev)
   - Target Core Web Vitals

4. **SEO**
   - Update meta tags in `index.html`
   - Add favicon
   - Submit to Google Search Console

### Update index.html before deploying:

```html
<meta name="description" content="Sandeep Mandal - Full Stack & Flutter Developer Portfolio">
<meta name="keywords" content="developer, portfolio, full-stack, flutter">
<meta name="author" content="Sandeep Mandal">
```

---

## Custom Domain Setup

### If you have a domain:

1. **Vercel**: Settings → Domains → Add domain → Follow DNS instructions
2. **Netlify**: Site settings → Domain management → Add custom domain
3. **Traditional hosting**: Update nameservers at domain registrar

---

## Continuous Deployment

After initial setup, every push to GitHub will automatically redeploy:

```bash
# Make local changes
git add .
git commit -m "Update portfolio"
git push origin main
# Your site updates automatically! ✨
```

---

## Troubleshooting

**Build errors:**
```bash
npm install  # Reinstall dependencies
npm run build  # Try building again
```

**404 errors on routes:**
- Ensure your hosting serves `index.html` for all routes
- This is automatic on Vercel/Netlify
- May need `.htaccess` on traditional hosting

**Images not loading:**
- Check image paths are relative to `public/` or `src/assets/`
- Verify images exist in the `dist/` folder after build

---

## Monitoring & Analytics

### Add Google Analytics (Optional)

1. Create [Google Analytics](https://analytics.google.com) account
2. Add script to `src/main.tsx`:
   ```typescript
   import { useEffect } from 'react'
   
   useEffect(() => {
     // Add your tracking code
   }, [])
   ```

### Performance Monitoring
- Use [WebVitals](https://web.dev/vitals/)
- Monitor Core Web Vitals
- Check [PageSpeed Insights](https://pagespeed.web.dev)

---

## Summary

| Platform | Cost | Setup Time | Best For |
|----------|------|-----------|----------|
| **Vercel** | Free | 2 min | React apps, best DX |
| **Netlify** | Free | 3 min | General use |
| **GitHub Pages** | Free | 5 min | GitHub integration |
| **AWS Amplify** | Free tier | 5 min | Enterprise |
| **Traditional** | $5-20/mo | 10 min | Custom domain |

**Recommendation:** Start with **Vercel** for simplicity and performance!

---

## Next Steps

1. Choose a deployment platform
2. Follow the steps above
3. Share your portfolio with potential employers
4. Keep it updated with new projects

Good luck! 🎉
