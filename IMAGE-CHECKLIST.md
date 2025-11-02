# 📸 Image Checklist

## Required Images

### Hero Section (5 images)
Place in `public/images/`:

- [ ] `hero1.jpg` - Primary lakefront view
- [ ] `hero2.jpg` - House exterior/architecture
- [ ] `hero3.jpg` - Lake access/dock
- [ ] `hero4.jpg` - Interior highlight
- [ ] `hero5.jpg` - Nature/landscape

**Specs**: 1920x1080 or higher, landscape orientation, JPG format

---

### Lakeside Living Background (1 image)
Place in `public/images/`:

- [ ] `lake-panorama.jpg` - Wide panoramic lake view

**Specs**: 2560x1440 or wider, very wide landscape, JPG format

---

### Interior Gallery
Place in `public/images/interior/`:

- [ ] `interior-1.jpg`
- [ ] `interior-2.jpg`
- [ ] `interior-3.jpg`
- [ ] `interior-4.jpg`
- [ ] `interior-5.jpg`
- [ ] ... (add as many as you want)

**Suggested shots**:
- Living room with fireplace(s)
- Kitchen/dining area
- Master bedroom
- Bathrooms
- Unique architectural details
- Wood doors (mentioned in highlights)
- Interior views of lake

**Specs**: 800x800 minimum, square crop recommended, JPG format

---

### Exterior Gallery
Place in `public/images/exterior/`:

- [ ] `exterior-1.jpg`
- [ ] `exterior-2.jpg`
- [ ] `exterior-3.jpg`
- [ ] `exterior-4.jpg`
- [ ] `exterior-5.jpg`
- [ ] ... (add as many as you want)

**Suggested shots**:
- Full house facade
- Different angles of property
- Loafing shed and paddock
- Driveway/entrance
- Outdoor spaces (deck, patio)
- Garden/landscaping
- Property boundaries

**Specs**: 800x800 minimum, square crop recommended, JPG format

---

### Lake Gallery
Place in `public/images/lake/`:

- [ ] `lake-1.jpg`
- [ ] `lake-2.jpg`
- [ ] `lake-3.jpg`
- [ ] `lake-4.jpg`
- [ ] `lake-5.jpg`
- [ ] ... (add as many as you want)

**Suggested shots**:
- Sunrise/sunset over lake
- Kayak/canoe/paddle boats (mentioned in highlights)
- Different seasons if available
- Wildlife on lake
- Lake from different vantage points
- Dock/water access
- Lake activities

**Specs**: 800x800 minimum, square crop recommended, JPG format

---

## Image Optimization Tips

### Before Adding Images:

1. **Resize large images** to appropriate sizes (saves bandwidth)
2. **Compress JPGs** to 80-85% quality (use tools like TinyPNG)
3. **Use consistent naming** (lowercase, hyphens, sequential numbers)
4. **Remove EXIF data** if privacy is a concern

### Recommended Tools:

- **Bulk resize**: [Bulk Resize Photos](https://bulkresizephotos.com/)
- **Compression**: [TinyPNG](https://tinypng.com/)
- **Editing**: Photoshop, GIMP, or Preview (Mac)

### Photography Tips:

- ✅ Golden hour lighting (sunrise/sunset) for exterior shots
- ✅ Well-lit interior shots (turn on all lights)
- ✅ Declutter spaces before photographing
- ✅ Use wide-angle lens for rooms
- ✅ Capture unique selling points
- ✅ Show different seasons if possible
- ✅ Include lifestyle elements (boats, horses, activities)

---

## After Adding Images

1. Update image counts in `src/App.tsx`:
   ```typescript
   const interiorImages = Array.from({ length: YOUR_COUNT }, ...);
   ```

2. Test the site:
   - Hero slideshow transitions smoothly
   - All gallery thumbnails load
   - Modal navigation works
   - Images look sharp on large screens

3. Check file sizes:
   - Hero images: < 500KB each
   - Gallery images: < 200KB each
   - Total site: Aim for < 10MB

---

## Quick File Name Generator

If you need to rename files quickly, use this PowerShell command:

### Interior:
```powershell
$i = 1; Get-ChildItem "path\to\photos" | ForEach-Object { 
  Rename-Item $_.FullName -NewName "interior-$i.jpg"; $i++ 
}
```

### Exterior:
```powershell
$i = 1; Get-ChildItem "path\to\photos" | ForEach-Object { 
  Rename-Item $_.FullName -NewName "exterior-$i.jpg"; $i++ 
}
```

### Lake:
```powershell
$i = 1; Get-ChildItem "path\to\photos" | ForEach-Object { 
  Rename-Item $_.FullName -NewName "lake-$i.jpg"; $i++ 
}
```

---

**Current Status**: ⬜ No images added yet

Update this checklist as you add images! ✓