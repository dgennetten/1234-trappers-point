# 🚀 Deployment Guide

## Before Deploying

### ✅ Pre-Deployment Checklist

- [ ] All images added to `public/images/` folders
- [ ] Property specs updated in `PropertySpecs.tsx`
- [ ] Gallery image counts updated in `App.tsx`
- [ ] Contact email verified in `Contact.tsx`
- [ ] Tested locally with `npm run dev`
- [ ] Built successfully with `npm run build`
- [ ] Tested production build with `npm run preview`

---

## Option 1: Vercel (Recommended - Free & Easy)

### Why Vercel?
- ✅ Free hosting
- ✅ Automatic HTTPS
- ✅ Custom domain support
- ✅ Automatic deployments from Git
- ✅ Global CDN

### Steps:

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   cd trappers-point
   vercel
   ```

3. **Follow the prompts**:
   - Link to your Vercel account
   - Name your project
   - Accept default settings

4. **Done!** Your site will be live at `https://your-project.vercel.app`

### Custom Domain:
- Go to Vercel dashboard → Your project → Settings → Domains
- Add your custom domain (e.g., `trapperspoint.com`)
- Update DNS records as instructed

---

## Option 2: Netlify (Also Great - Free)

### Why Netlify?
- ✅ Free hosting
- ✅ Drag & drop deployment
- ✅ Continuous deployment from Git
- ✅ Custom domains

### Method A: Drag & Drop

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Go to** [Netlify Drop](https://app.netlify.com/drop)

3. **Drag the `dist/` folder** onto the page

4. **Done!** Site is live instantly

### Method B: Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**:
   ```bash
   cd trappers-point
   netlify deploy --prod
   ```

3. **Follow prompts** and select the `dist` folder

---

## Option 3: GitHub Pages (Free)

### Steps:

1. **Install gh-pages**:
   ```bash
   npm install -D gh-pages
   ```

2. **Add to `package.json`**:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/trappers-point"
   }
   ```

3. **Update `vite.config.ts`**:
   ```typescript
   export default defineConfig({
     base: '/trappers-point/',
     plugins: [react()],
   })
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select `gh-pages` branch
   - Save

---

## Option 4: Traditional Web Host (cPanel, etc.)

### Steps:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload the `dist/` folder contents** via FTP/SFTP to your web root (usually `public_html/` or `www/`)

3. **Configure `.htaccess`** (if on Apache):
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

4. **Done!** Site should be live at your domain

---

## Option 5: AWS S3 + CloudFront (Advanced)

### Why AWS?
- High performance
- Scalable
- Professional setup

### Quick Steps:

1. **Build**:
   ```bash
   npm run build
   ```

2. **Create S3 bucket** and enable static website hosting

3. **Upload `dist/` contents** to S3

4. **Create CloudFront distribution** pointing to S3 bucket

5. **Configure DNS** to point to CloudFront

---

## Post-Deployment

### Testing:

- [ ] Site loads correctly
- [ ] Images display properly
- [ ] Hero slideshow works
- [ ] Gallery modals open and navigate
- [ ] Email link works
- [ ] Site is responsive on mobile
- [ ] No console errors

### Performance Optimization:

1. **Image Optimization**:
   - Compress all images before uploading
   - Use WebP format for better compression (optional)

2. **Caching**:
   - Most platforms handle this automatically
   - Verify with browser dev tools

3. **SEO**:
   - Submit to Google Search Console
   - Add Google Analytics (optional)

### Custom Domain Setup:

Most platforms support custom domains:
1. Purchase domain (GoDaddy, Namecheap, etc.)
2. Add domain in hosting platform dashboard
3. Update DNS records:
   - **A record**: Points to hosting IP
   - **CNAME**: Points to hosting URL
4. Wait for DNS propagation (24-48 hours)

---

## Troubleshooting

### Images not loading:
- Check file paths are correct
- Verify images are in `public/images/` folder
- Clear browser cache

### Site shows blank page:
- Check browser console for errors
- Verify `base` path in `vite.config.ts` if deploying to subdirectory
- Ensure build completed successfully

### 404 errors on refresh:
- Configure server to redirect all routes to `index.html`
- See hosting-specific docs for SPA routing

---

## Continuous Deployment (Optional)

### Auto-deploy from GitHub:

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/trappers-point.git
   git push -u origin main
   ```

2. **Connect to Vercel/Netlify**:
   - Link GitHub repo in platform dashboard
   - Enable automatic deployments
   - Push updates to GitHub → Site auto-updates

---

## Cost Estimate

| Platform | Cost | Custom Domain | SSL |
|----------|------|---------------|-----|
| Vercel | Free | ✅ | ✅ |
| Netlify | Free | ✅ | ✅ |
| GitHub Pages | Free | ✅ | ✅ |
| Traditional Host | $5-20/mo | ✅ | Varies |
| AWS S3 + CloudFront | ~$1-5/mo | ✅ | ✅ |

**Recommendation**: Start with Vercel or Netlify (free, easy, professional)

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Vite Deployment: https://vitejs.dev/guide/static-deploy.html

---

**Ready to deploy?** Follow the Vercel or Netlify steps above for the quickest path to a live site! 🚀