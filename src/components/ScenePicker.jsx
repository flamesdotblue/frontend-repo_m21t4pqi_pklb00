import React from 'react';
import { Image, Sun, Crown, Trees, Sparkles } from 'lucide-react';

const SCENES = [
  { id: 'runway', name: 'Runway', icon: Sparkles },
  { id: 'palace', name: 'Palace', icon: Crown },
  { id: 'beach', name: 'Beach', icon: Sun },
  { id: 'garden', name: 'Garden', icon: Trees },
  { id: 'dream', name: 'Dream', icon: Image },
];

export default function ScenePicker({ value, onChange }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image className="h-5 w-5 text-rose-500" />
          <h3 className="text-sm font-semibold text-gray-900">Background</h3>
        </div>
        <span className="text-xs text-gray-500">Change the scene</span>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {SCENES.map((s) => (
          <button
            key={s.id}
            onClick={() => onChange(s.id)}
            className={`group rounded-2xl p-2 text-center ring-1 ring-black/5 transition ${
              value === s.id ? 'bg-gray-900 text-white' : 'bg-white hover:bg-gray-50 text-gray-700'
            }`}
            aria-label={s.name}
          >
            <s.icon className={`mx-auto h-4 w-4 ${value === s.id ? 'text-white' : 'text-gray-700'}`} />
            <p className="mt-1 text-[11px] font-medium">{s.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
