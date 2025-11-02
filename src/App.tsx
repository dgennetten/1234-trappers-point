import { Hero, PropertySpecs, PhotoGallery, LakesideLiving, Contact } from './components';

// Automatically load all images from each directory
const interiorImagesGlob = import.meta.glob('/public/images/interior/*.{jpg,jpeg,png,webp}', { eager: true, as: 'url' });
const exteriorImagesGlob = import.meta.glob('/public/images/exterior/*.{jpg,jpeg,png,webp}', { eager: true, as: 'url' });
const lakeImagesGlob = import.meta.glob('/public/images/lake/*.{jpg,jpeg,png,webp}', { eager: true, as: 'url' });

// Natural/numeric sort function
const naturalSort = (a: string, b: string) => {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
};

// Convert to arrays and sort numerically by filename
const interiorImages = Object.keys(interiorImagesGlob).sort(naturalSort).map(path => path.replace('/public', ''));
const exteriorImages = Object.keys(exteriorImagesGlob).sort(naturalSort).map(path => path.replace('/public', ''));
const lakeImages = Object.keys(lakeImagesGlob).sort(naturalSort).map(path => path.replace('/public', ''));

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <PropertySpecs />
      <PhotoGallery title="Interior Photos" images={interiorImages} bgColor="bg-gray-50" />
      <PhotoGallery title="Exterior Photos" images={exteriorImages} bgColor="bg-white" />
      <PhotoGallery title="Lake Photos" images={lakeImages} bgColor="bg-gray-50" />
      <LakesideLiving />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} 1234 Trappers Point. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
