import React, { useMemo, useState } from 'react';
import DollCanvas from './components/DollCanvas.jsx';
import Wardrobe from './components/Wardrobe.jsx';
import JewelBox from './components/JewelBox.jsx';
import MakeupPalette from './components/MakeupPalette.jsx';
import ScenePicker from './components/ScenePicker.jsx';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function App() {
  const [dress, setDress] = useState({ id: 'rose', name: 'Rose Gala', color: '#FF6AA2', accent: '#FFD1E8' });
  const [jewels, setJewels] = useState({ earrings: true, necklace: true, tiara: false, gemColor: '#A78BFA', metal: 'gold' });
  const [makeup, setMakeup] = useState({ lip: '#E2557E', blush: '#FDB7C8', eye: '#7AA5FF' });
  const [scene, setScene] = useState('runway');

  const headerSubtitle = useMemo(() => {
    const bits = [dress?.name, jewels?.metal === 'gold' ? 'Golden set' : 'Silver set', `Scene: ${scene}`];
    return bits.filter(Boolean).join(' · ');
  }, [dress, jewels, scene]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 text-gray-900">
      {/* Top navigation */}
      <header className="sticky top-0 z-20 backdrop-blur-xl bg-white/60 border-b border-white/40">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-2xl bg-gradient-to-br from-pink-500 to-fuchsia-600 shadow ring-1 ring-black/5 grid place-items-center">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold">Barbie Dress-Up Studio</p>
              <p className="text-[11px] text-gray-600">{headerSubtitle}</p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => {
                setDress({ id: 'rose', name: 'Rose Gala', color: '#FF6AA2', accent: '#FFD1E8' });
                setJewels({ earrings: true, necklace: true, tiara: false, gemColor: '#A78BFA', metal: 'gold' });
                setMakeup({ lip: '#E2557E', blush: '#FDB7C8', eye: '#7AA5FF' });
                setScene('runway');
              }}
              className="rounded-full bg-gray-900 text-white text-xs px-3 py-1.5 shadow hover:opacity-95"
            >
              Reset look
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Canvas */}
          <motion.section
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-3 rounded-3xl bg-white/60 backdrop-blur-xl ring-1 ring-black/5 p-4 sm:p-6"
          >
            <div className="aspect-[3/4] w-full">
              <DollCanvas dress={dress} jewels={jewels} makeup={makeup} scene={scene} />
            </div>
          </motion.section>

          {/* Controls */}
          <div className="lg:col-span-2 space-y-6">
            <motion.section
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.4 }}
              className="rounded-3xl bg-white/70 backdrop-blur-xl p-4 sm:p-6 ring-1 ring-black/5"
            >
              <Wardrobe selectedId={dress?.id} onSelect={setDress} />
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.4 }}
              className="rounded-3xl bg-white/70 backdrop-blur-xl p-4 sm:p-6 ring-1 ring-black/5"
            >
              <ScenePicker value={scene} onChange={setScene} />
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="rounded-3xl bg-white/70 backdrop-blur-xl p-4 sm:p-6 ring-1 ring-black/5"
            >
              <JewelBox jewels={jewels} onChange={setJewels} />
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="rounded-3xl bg-white/70 backdrop-blur-xl p-4 sm:p-6 ring-1 ring-black/5"
            >
              <MakeupPalette makeup={makeup} onChange={setMakeup} />
            </motion.section>
          </div>
        </div>

        {/* Mobile reset */}
        <div className="mt-6 sm:hidden flex justify-center">
          <button
            onClick={() => {
              setDress({ id: 'rose', name: 'Rose Gala', color: '#FF6AA2', accent: '#FFD1E8' });
              setJewels({ earrings: true, necklace: true, tiara: false, gemColor: '#A78BFA', metal: 'gold' });
              setMakeup({ lip: '#E2557E', blush: '#FDB7C8', eye: '#7AA5FF' });
              setScene('runway');
            }}
            className="rounded-full bg-gray-900 text-white text-xs px-4 py-2 shadow"
          >
            Reset look
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8">
        <p className="text-center text-xs text-gray-500">Inspired by Apple’s clean UI principles · Scenes, sparkles, and glossy details for a more beautiful Barbie</p>
      </footer>
    </div>
  );
}
