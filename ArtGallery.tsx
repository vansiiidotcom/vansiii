import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X } from 'lucide-react';

const artworks = [
  {
    id: 1,
    title: "Digital Dreams",
    artist: "Alex Rivera",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5",
    description: "An exploration of digital consciousness through abstract forms.",
    year: "2024",
    medium: "Digital Art",
    dimensions: "4000 × 3000 px"
  },
  {
    id: 2,
    title: "Neon Nights",
    artist: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945",
    description: "Urban landscapes reimagined through a cyberpunk lens.",
    year: "2024",
    medium: "Digital Photography",
    dimensions: "3840 × 2160 px"
  },
  {
    id: 3,
    title: "Abstract Flow",
    artist: "Marcus Kim",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab",
    description: "Fluid dynamics meet digital manipulation.",
    year: "2024",
    medium: "Mixed Media",
    dimensions: "5000 × 3333 px"
  },
  {
    id: 4,
    title: "Geometric Harmony",
    artist: "Emma Wilson",
    image: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3",
    description: "A study in geometric patterns and color theory.",
    year: "2024",
    medium: "Digital Art",
    dimensions: "4500 × 3000 px"
  },
  {
    id: 5,
    title: "Urban Reflections",
    artist: "David Park",
    image: "https://images.unsplash.com/photo-1550537687-c91072c4792d",
    description: "City life through a kaleidoscopic lens.",
    year: "2024",
    medium: "Photography",
    dimensions: "4000 × 2667 px"
  },
  {
    id: 6,
    title: "Digital Flora",
    artist: "Lisa Martinez",
    image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
    description: "Nature meets technology in this digital garden series.",
    year: "2024",
    medium: "Digital Art",
    dimensions: "5000 × 3333 px"
  },
  {
    id: 7,
    title: "Quantum Dreams",
    artist: "James Wilson",
    image: "https://images.unsplash.com/photo-1550537687-c91072c4792d",
    description: "Exploring the intersection of quantum physics and art.",
    year: "2024",
    medium: "Digital Art",
    dimensions: "4000 × 3000 px"
  },
  {
    id: 8,
    title: "Ethereal Waves",
    artist: "Anna Lee",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab",
    description: "A study in light and motion through digital medium.",
    year: "2024",
    medium: "Digital Art",
    dimensions: "4500 × 3000 px"
  }
];

interface ArtworkModalProps {
  artwork: typeof artworks[0];
  onClose: () => void;
}

const ArtworkModal = ({ artwork, onClose }: ArtworkModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90"
      style={{ zIndex: 10002 }}
      onClick={onClose}
    >
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed top-4 right-4 z-50 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
        onClick={onClose}
      >
        <X className="w-6 h-6 text-white" />
      </motion.button>

      <div 
        className="h-screen flex items-center justify-center px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full max-w-[1600px] h-[80vh] flex gap-8">
          {/* Left side - Image */}
          <div className="flex-1 flex items-center justify-center bg-black/50 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              src={artwork.image}
              alt={artwork.title}
              className="max-h-full max-w-full object-contain rounded-xl"
            />
          </div>

          {/* Right side - Artwork details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-[400px] bg-white rounded-2xl p-8 overflow-y-auto"
          >
            <h2 className="text-4xl font-bold mb-2">{artwork.title}</h2>
            <p className="text-purple-600 mb-6">{artwork.artist}</p>
            <p className="text-gray-600 mb-8">{artwork.description}</p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Year</h3>
                <p className="font-medium">{artwork.year}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Medium</h3>
                <p className="font-medium">{artwork.medium}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Dimensions</h3>
                <p className="font-medium">{artwork.dimensions}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const ArtGallery = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworks[0] | null>(null);

  return (
    <>
      <div className={`min-h-screen bg-[#F8F5F1] pt-20 ${selectedArtwork ? 'hidden' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-light mb-12 tracking-tighter text-center"
          >
            Wall of Art
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedArtwork(artwork)}
              >
                <div className="aspect-[4/5] overflow-hidden rounded-xl bg-white">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <Eye className="w-8 h-8 text-white mb-2 mx-auto" />
                      <p className="text-white text-sm font-medium text-center">View Artwork</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium">{artwork.title}</h3>
                  <p className="text-sm text-gray-600">{artwork.artist}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedArtwork && (
          <ArtworkModal
            artwork={selectedArtwork}
            onClose={() => setSelectedArtwork(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ArtGallery;