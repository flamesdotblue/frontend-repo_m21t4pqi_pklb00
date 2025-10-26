import React from 'react';
import { Palette } from 'lucide-react';

const LIP = ['#E2557E', '#FF4D6D', '#C026D3', '#F97316', '#111827'];
const BLUSH = ['#FDB7C8', '#FECDD3', '#FBCFE8', '#FDE68A', '#FCA5A5'];
const EYE = ['#7AA5FF', '#34D399', '#A78BFA', '#F472B6', '#60A5FA'];

function Swatches({ colors, value, onChange }) {
  return (
    <div className="grid grid-cols-5 gap-2">
      {colors.map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`h-7 w-7 rounded-full ring-2 ring-offset-2 ${
            value === c ? 'ring-fuchsia-500' : 'ring-transparent'
          }`}
          style={{ backgroundColor: c }}
          aria-label={`Select ${c}`}
        />
      ))}
    </div>
  );
}

export default function MakeupPalette({ makeup, onChange }) {
  const set = (patch) => onChange({ ...makeup, ...patch });

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Palette className="h-5 w-5 text-rose-500" />
        <h3 className="text-sm font-semibold text-gray-900">Makeup</h3>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-medium text-gray-700">Lips</p>
        <Swatches colors={LIP} value={makeup.lip} onChange={(v) => set({ lip: v })} />
      </div>

      <div className="space-y-2">
        <p className="text-xs font-medium text-gray-700">Blush</p>
        <Swatches colors={BLUSH} value={makeup.blush} onChange={(v) => set({ blush: v })} />
      </div>

      <div className="space-y-2">
        <p className="text-xs font-medium text-gray-700">Eyeshadow</p>
        <Swatches colors={EYE} value={makeup.eye} onChange={(v) => set({ eye: v })} />
      </div>
    </div>
  );
}
