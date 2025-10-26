import React from 'react';
import { Diamond, Star } from 'lucide-react';

const COLORS = [
  '#A78BFA',
  '#F472B6',
  '#60A5FA',
  '#34D399',
  '#F59E0B',
  '#F97316',
];

export default function JewelBox({ jewels, onChange }) {
  const set = (patch) => onChange({ ...jewels, ...patch });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Diamond className="h-5 w-5 text-fuchsia-500" />
          <h3 className="text-sm font-semibold text-gray-900">Jewel Box</h3>
        </div>
        <span className="text-xs text-gray-500">Toggle and color</span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { key: 'necklace', label: 'Necklace' },
          { key: 'earrings', label: 'Earrings' },
          { key: 'tiara', label: 'Tiara' },
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => set({ [item.key]: !jewels[item.key] })}
            className={`rounded-xl px-3 py-2 text-xs font-medium ring-1 ring-black/5 transition ${
              jewels[item.key]
                ? 'bg-gradient-to-br from-fuchsia-100 to-pink-100 text-fuchsia-700'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-600">Metal</p>
        <div className="flex gap-2">
          {['gold', 'silver'].map((m) => (
            <button
              key={m}
              onClick={() => set({ metal: m })}
              className={`rounded-full px-3 py-1 text-xs ring-1 ring-black/5 ${
                jewels.metal === m ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Star className="h-4 w-4 text-pink-500" />
          <p className="text-xs font-medium text-gray-900">Gem color</p>
        </div>
        <div className="grid grid-cols-6 gap-2">
          {COLORS.map((c) => (
            <button
              key={c}
              onClick={() => set({ gemColor: c })}
              className={`h-6 w-6 rounded-full ring-2 ring-offset-2 ${
                jewels.gemColor === c ? 'ring-pink-500' : 'ring-transparent'
              }`}
              style={{ backgroundColor: c }}
              aria-label={`Gem color ${c}`}
            />
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-white to-rose-50 p-3 ring-1 ring-black/5">
        <p className="text-[11px] text-gray-600">Tip: Mix metals for a fashion-forward look. Try silver tiara with golden earrings!</p>
      </div>
    </div>
  );
}
