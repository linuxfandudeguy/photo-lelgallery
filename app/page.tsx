import fs from 'fs';
import path from 'path';
import Gallery from '../components/Gallery';
import ThemeToggle from '../components/ThemeToggle';

export default async function Home() {
  const imagesDirectory = path.join(process.cwd(), 'public/images');
  const imageFilenames = await fs.promises.readdir(imagesDirectory);

  return (
    <main className="container mx-auto px-4 py-8 min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">lelgallery photo directory</h1>
        <ThemeToggle />
      </div>
      <Gallery images={imageFilenames} />
    </main>
  );
}

