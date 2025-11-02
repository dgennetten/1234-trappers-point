# 🏡 Trappers Point Showcase Website

A professional, visually compelling showcase website for the luxury lakefront property at **1234 Trappers Point, Fort Collins, CO**.

## 🚀 Tech Stack

- **React** with **Vite**
- **TypeScript**
- **TailwindCSS** for styling
- **Lucide React** for icons

## 📁 Project Structure

```
trappers-point/
├── src/
│   ├── components/
│   │   ├── Hero.tsx              # Full-screen slideshow with property highlights
│   │   ├── PropertySpecs.tsx     # Key property specifications
│   │   ├── PhotoGallery.tsx      # Reusable gallery with modal
│   │   ├── LakesideLiving.tsx    # Lifestyle section
│   │   └── Contact.tsx           # Contact information
│   ├── App.tsx                   # Main app component
│   ├── types.ts                  # TypeScript interfaces
│   └── index.css                 # Tailwind imports
├── public/
│   └── images/                   # Image assets (create this folder)
│       ├── hero1.jpg             # Hero slideshow images (5 total)
│       ├── lake-panorama.jpg     # Lakeside Living background
│       ├── interior/             # Interior photos
│       ├── exterior/             # Exterior photos
│       └── lake/                 # Lake photos
```

## 🖼️ Image Setup

### Required Images

Create the following folder structure in `public/images/`:

```
public/images/
├── hero1.jpg
├── hero2.jpg
├── hero3.jpg
├── hero4.jpg
├── hero5.jpg
├── lake-panorama.jpg
├── interior/
│   ├── interior-1.jpg
│   ├── interior-2.jpg
│   └── ... (as many as you want)
├── exterior/
│   ├── exterior-1.jpg
│   ├── exterior-2.jpg
│   └── ... (as many as you want)
└── lake/
    ├── lake-1.jpg
    ├── lake-2.jpg
    └── ... (as many as you want)
```

### Image Recommendations

- **Hero images**: 1920x1080 or higher, landscape orientation
- **Gallery images**: At least 800x800, square crops work best
- **Lake panorama**: 2560x1440 or wider for parallax effect

## ⚙️ Customization

### Update Property Specifications

Edit `src/components/PropertySpecs.tsx` and update these placeholder values:

```typescript
const specs = [
  { label: 'Square Footage', value: '4,200 sq ft' },  // Update
  { label: 'Lot Size', value: '3+ acres' },
  { label: 'Avg Monthly Utilities', value: '$350' },  // Update
  { label: 'Annual Property Taxes', value: '$8,500' }, // Update
  { label: 'School District', value: 'Poudre R-1' },  // Update
  { label: 'Estimated Value', value: '$2.4M' },       // Update
];
```

### Adjust Number of Gallery Images

In `src/App.tsx`, adjust the array lengths to match your actual photo count:

```typescript
const interiorImages = Array.from({ length: 12 }, (_, i) => 
  `/images/interior/interior-${i + 1}.jpg`
);
```

Change `12` to the actual number of photos you have in each category.

## 🎨 Features

### ✨ Hero Section
- Full-screen slideshow with 5 images
- Smooth fade transitions (5s intervals)
- Property highlights overlay
- Animated slide indicators
- Scroll-down chevron indicator

### 📊 Property Specifications
- 6 key data points with icons
- Hover animations
- Responsive grid layout

### 🖼️ Photo Galleries
- Three separate galleries (Interior, Exterior, Lake)
- Responsive grid with square thumbnails
- Hover scale animation
- Full-screen modal with navigation
- Keyboard support (arrows, escape)

### 🌅 Lakeside Living
- Parallax background image
- 4 feature cards with icons
- Poetic, emotionally resonant copy
- Glass-morphism design

### 📬 Contact Section
- Clean contact card
- Email link
- Location information
- Professional styling

## 🛠️ Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5176](http://localhost:5176) in your browser.

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎯 Next Steps

1. **Add Your Images**: Create the image folders and add your photos
2. **Update Property Data**: Edit PropertySpecs.tsx with real values
3. **Adjust Gallery Counts**: Match the number of images in each gallery
4. **Customize Colors**: Modify Tailwind theme in `tailwind.config.js`
5. **SEO**: Update `index.html` meta tags and title

## 📱 Responsive Design

The site is fully responsive and optimized for:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1920px+)

## 🚢 Deployment

### Quick Deploy Options

- **Vercel**: `npm install -g vercel && vercel`
- **Netlify**: Drag & drop the `dist/` folder
- **GitHub Pages**: Push to GitHub and enable Pages

## 📝 License

MIT License - See [LICENSE](./LICENSE) file for details.

Note: While the code is MIT licensed, images and property-specific content may have different usage rights.

---

Built with ❤️ for Trappers Point
