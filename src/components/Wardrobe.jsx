import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

export const DRESSES = [
  { id: 'rose', name: 'Rose Gala', color: '#FF6AA2', accent: '#FFD1E8' },
  { id: 'lavender', name: 'Lavender Dream', color: '#B28DFF', accent: '#E9D5FF' },
  { id: 'ocean', name: 'Ocean Pearl', color: '#5EC6FF', accent: '#CFF2FF' },
  { id: 'sunset', name: 'Sunset Glow', color: '#FF8A5B', accent: '#FFD1B5' },
  { id: 'mint', name: 'Mint Charm', color: '#39D98A', accent: '#BDFBE3' },
  { id: 'royal', name: 'Royal Fuchsia', color: '#D946EF', accent: '#F5D0FE' }
];

export default function Wardrobe({ selectedId, onSelect }) {
  const [favorites, setFavorites] = useState(new Set(['rose']));

  const toggleFavorite = (id) => {
    const next = new Set(favorites);
    if (next.has(id)) next.delete(id); else next.add(id);
    setFavorites(next);
  };

  const renderCard = (dress) => (
    <motion.button
      key={dress.id}
      onClick={() => onSelect(dress)}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative overflow-hidden rounded-2xl p-3 shadow-sm ring-1 ring-black/5 transition focus:outline-none ${
        selectedId === dress.id ? 'ring-2 ring-pink-500 shadow-pink-200' : ''
      }`}
      style={{ background: `linear-gradient(135deg, ${dress.color}, ${dress.accent})` }}
      aria-label={`Select ${dress.name}`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute -top-12 -left-12 h-24 w-24 rotate-45 bg-white/20 blur-2xl" />
      </div>
      <div className="h-20 w-full rounded-xl bg-white/15 backdrop-blur-sm ring-1 ring-white/20" />
      <div className="mt-2 flex items-center justify-between">
        <p className="text-xs font-medium text-white drop-shadow">{dress.name}</p>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); toggleFavorite(dress.id); }}
          className={`rounded-full p-1.5 backdrop-blur bg-white/25 ring-1 ring-white/30 text-white ${favorites.has(dress.id) ? 'text-rose-300' : ''}`}
          aria-label={`Favorite ${dress.name}`}
        >
          <Heart className={`h-3.5 w-3.5 ${favorites.has(dress.id) ? 'fill-current' : ''}`} />
        </button>
      </div>
      {selectedId === dress.id && (
        <span className="pointer-events-none absolute -right-1 -top-1 inline-flex items-center rounded-full bg-white/90 px-1.5 py-0.5 text-[10px] font-medium text-pink-600 shadow">Wearing</span>
      )}
    </motion.button>
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-pink-500" />
          <h3 className="text-sm font-semibold text-gray-900">Wardrobe</h3>
        </div>
        <span className="text-xs text-gray-500">Tap a dress to wear</span>
      </div>

      {favorites.size > 0 && (
        <div className="space-y-2">
          <p className="text-[11px] text-gray-600">Favorites</p>
          <div className="grid grid-cols-3 gap-3">
            {DRESSES.filter((d) => favorites.has(d.id)).map(renderCard)}
          </div>
        </div>
      )}

      <div className="space-y-2">
        <p className="text-[11px] text-gray-600">All Dresses</p>
        <div className="grid grid-cols-3 gap-3">
          {DRESSES.map(renderCard)}
        </div>
      </div>
    </div>
  );
}
