'use client'

import { useState } from 'react';
import Image from 'next/image';

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openLightbox = (image: string) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div
            key={image}
            className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => openLightbox(image)}
          >
            <Image
              src={`/images/${image}`}
              alt={image}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeLightbox}>
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={`/images/${currentImage}`}
              alt={currentImage}
              width={1200}
              height={800}
              className="max-h-[90vh] w-auto object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeLightbox}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

