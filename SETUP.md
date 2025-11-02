# 🚀 Quick Setup Guide

## Step 1: Verify Installation

The project is already set up! Just verify everything is working:

```bash
cd trappers-point
npm run dev
```

Visit `http://localhost:5176` to see the site.

## Step 2: Add Your Images

### Hero Section Images (5 required)
Place 5 high-quality landscape photos in `public/images/`:
- `hero1.jpg` - Main lakefront view
- `hero2.jpg` - Architecture/house exterior
- `hero3.jpg` - Lake/water feature
- `hero4.jpg` - Interior luxury shot
- `hero5.jpg` - Nature/landscape

### Lakeside Background (1 required)
- `lake-panorama.jpg` - Wide panoramic lake view

### Gallery Images
Add as many as you want in these folders:
- `public/images/interior/` → `interior-1.jpg`, `interior-2.jpg`, etc.
- `public/images/exterior/` → `exterior-1.jpg`, `exterior-2.jpg`, etc.
- `public/images/lake/` → `lake-1.jpg`, `lake-2.jpg`, etc.

## Step 3: Update Property Data

Open `src/components/PropertySpecs.tsx` and edit line 5-29:

```typescript
const specs = [
  {
    label: 'Square Footage',
    value: '4,200 sq ft', // ← Update this
  },
  {
    label: 'Avg Monthly Utilities',
    value: '$350', // ← Update this
  },
  // ... etc
];
```

## Step 4: Adjust Gallery Image Counts

Open `src/App.tsx` and update line 8-10 to match your photo counts:

```typescript
// If you have 15 interior photos, change 12 to 15:
const interiorImages = Array.from({ length: 15 }, ...);
```

## Step 5: Test Everything

- ✅ Hero slideshow transitions smoothly
- ✅ Property specs display correctly
- ✅ Gallery thumbnails load
- ✅ Modal opens when clicking photos
- ✅ Navigation arrows work in modal
- ✅ Contact email is correct

## Step 6: Build for Production

When ready to deploy:

```bash
npm run build
```

Upload the `dist/` folder to your web host.

---

## 🎨 Optional Customizations

### Change Color Scheme

Edit `tailwind.config.js` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
    }
  }
}
```

### Update Meta Tags

Edit `index.html` for SEO:

```html
<title>1234 Trappers Point - Luxury Lakefront Estate</title>
<meta name="description" content="Your description">
```

### Add Google Analytics

Add tracking code to `index.html` before `</head>`.

---

## ❓ Troubleshooting

**Images not showing?**
- Check file names match exactly (case-sensitive)
- Ensure images are in `public/images/` folders
- Hard refresh browser (Ctrl+F5)

**Galleries empty?**
- Update image counts in `App.tsx`
- Verify folder structure matches

**Build errors?**
- Run `npm install` again
- Delete `node_modules` and reinstall
- Check for TypeScript errors

---

## 📞 Need Help?

All components are in `src/components/`:
- `Hero.tsx` - Slideshow and highlights
- `PropertySpecs.tsx` - Property data
- `PhotoGallery.tsx` - Reusable gallery
- `LakesideLiving.tsx` - Lifestyle section
- `Contact.tsx` - Contact form

Each file is well-commented and easy to modify!