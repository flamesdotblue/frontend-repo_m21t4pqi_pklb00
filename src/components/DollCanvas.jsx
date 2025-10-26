import React from 'react';
import { motion } from 'framer-motion';

function SceneBackground({ scene }) {
  // Apple-like soft gradients per scene
  const map = {
    runway: 'from-fuchsia-100 via-rose-50 to-white',
    palace: 'from-amber-50 via-rose-50 to-fuchsia-50',
    beach: 'from-sky-100 via-rose-50 to-amber-50',
    garden: 'from-emerald-100 via-teal-50 to-rose-50',
    dream: 'from-violet-100 via-pink-50 to-fuchsia-100',
  };
  const g = map[scene] || map.runway;

  return (
    <>
      <div className={`absolute inset-0 bg-gradient-to-br ${g}`} />
      {/* soft blobs */}
      <div className="absolute -top-40 -right-24 h-96 w-96 rounded-full bg-white/35 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-white/25 blur-3xl" />
      {scene === 'beach' && (
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-amber-200/50 to-transparent" />
      )}
      {scene === 'garden' && (
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-emerald-200/40 to-transparent" />
      )}
      {scene === 'palace' && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 h-28 w-28 rounded-full bg-amber-200/40 blur-2xl" />
      )}
    </>
  );
}

export default function DollCanvas({ dress, jewels, makeup, scene = 'runway' }) {
  const skin = '#FAD9C1';
  const hair = '#3B2F2F';
  const stroke = 'rgba(0,0,0,0.06)';

  const lipColor = makeup?.lip || '#E2557E';
  const blushColor = makeup?.blush || '#FDB7C8';
  const eyeColor = makeup?.eye || '#7AA5FF';

  const dressColor = dress?.color || '#FF7AB6';
  const accentColor = dress?.accent || '#FFD2E8';

  const metalColor = jewels?.metal === 'silver' ? '#D1D5DB' : '#F59E0B';
  const gemColor = jewels?.gemColor || '#A78BFA';

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden rounded-3xl">
      <SceneBackground scene={scene} />

      {/* sparkles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 28 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/70"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              boxShadow: '0 0 6px rgba(255,255,255,0.9)'
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        whileHover={{ scale: 1.01 }}
        className="relative z-10 w-[85%] max-w-[440px] drop-shadow-[0_20px_40px_rgba(240,46,170,0.15)]"
      >
        <motion.svg viewBox="0 0 300 520" role="img" aria-label="Barbie dress-up canvas" className="w-full h-auto">
          <defs>
            <radialGradient id="blushGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={blushColor} stopOpacity="0.75" />
              <stop offset="100%" stopColor={blushColor} stopOpacity="0" />
            </radialGradient>
            <linearGradient id="dressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={dressColor} />
              <stop offset="100%" stopColor={accentColor} />
            </linearGradient>
            <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={metalColor} />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.65" />
            </linearGradient>
            <linearGradient id="gemGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={gemColor} />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.5" />
            </linearGradient>
            <radialGradient id="hairShine" cx="30%" cy="20%" r="60%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
            <pattern id="sparkle" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.6" fill="rgba(255,255,255,0.7)" />
            </pattern>
          </defs>

          {/* shadow */}
          <ellipse cx="150" cy="500" rx="90" ry="14" fill="rgba(0,0,0,0.08)" />

          {/* Hair with shine */}
          <g>
            <path d="M95 120c0-40 25-70 55-70s55 30 55 70c0 30-10 50-25 65-12 11-27 15-30 30-2-9-12-17-24-24-21-12-31-34-31-71z" fill={hair} />
            <path d="M95 120c0-40 25-70 55-70s55 30 55 70c0 30-10 50-25 65" fill="url(#hairShine)" />
          </g>

          {/* Neck */}
          <rect x="142" y="165" width="16" height="28" rx="8" fill={skin} />

          {/* Face with highlight */}
          <g>
            <circle cx="150" cy="135" r="40" fill={skin} stroke={stroke} />
            <ellipse cx="160" cy="128" rx="16" ry="10" fill="#fff" opacity="0.3" />
          </g>

          {/* Eyes more detailed */}
          <g>
            <ellipse cx="136" cy="132" rx="7" ry="4.5" fill="#fff" />
            <ellipse cx="164" cy="132" rx="7" ry="4.5" fill="#fff" />
            <circle cx="136" cy="132" r="3" fill={eyeColor} />
            <circle cx="164" cy="132" r="3" fill={eyeColor} />
            <circle cx="136" cy="131.5" r="1.5" fill="#111" />
            <circle cx="164" cy="131.5" r="1.5" fill="#111" />
            <circle cx="139" cy="130" r="0.8" fill="#fff" />
            <circle cx="167" cy="130" r="0.8" fill="#fff" />
          </g>

          {/* Lashes */}
          <path d="M128 125l8 3M168 125l-8 3" stroke="#000" strokeOpacity="0.6" strokeWidth="1.2" strokeLinecap="round" />

          {/* Nose */}
          <path d="M150 140c-2 4-2 6 0 6" stroke="#000" strokeOpacity="0.25" strokeWidth="1.2" strokeLinecap="round" />

          {/* Lips glossy */}
          <g>
            <path d="M136 154c4 6 24 6 28 0" fill="none" stroke={lipColor} strokeWidth="3" strokeLinecap="round" />
            <path d="M142 152c4 2 12 2 16 0" stroke="#fff" strokeOpacity="0.5" />
          </g>

          {/* Blush */}
          <circle cx="122" cy="146" r="10" fill="url(#blushGrad)" />
          <circle cx="178" cy="146" r="10" fill="url(#blushGrad)" />

          {/* Torso */}
          <path d="M110 190c12-8 78-8 80 0 9 26 10 60 10 120s-12 120-50 120-50-60-50-120 1-94 10-120z" fill={skin} stroke={stroke} />

          {/* Dress Top */}
          <motion.path
            key={dress?.id || 'dress'}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            d="M110 190c10-10 80-10 80 0 3 7-6 24-12 30-10 10-50 10-60 0-6-6-15-23-8-30z"
            fill="url(#dressGrad)"
          />

          {/* Skirt with sparkles */}
          <g opacity="0.98">
            <motion.path
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              d="M96 250c26-6 132-6 158 0-14 20-18 38-32 62-16 26-37 48-72 48s-56-22-72-48c-14-24-18-42-32-62 12-4 28-0 50 0z"
              fill="url(#dressGrad)"
            />
            <path d="M96 250c26-6 132-6 158 0-14 20-18 38-32 62-16 26-37 48-72 48s-56-22-72-48c-14-24-18-42-32-62 12-4 28-0 50 0z" fill="url(#sparkle)" opacity="0.35" />
          </g>

          {/* Necklace */}
          {jewels?.necklace && (
            <g>
              <path d="M118 185c20 18 44 18 64 0" stroke="url(#metalGrad)" strokeWidth="5" fill="none" strokeLinecap="round" />
              <circle cx="150" cy="196" r="8" fill="url(#gemGrad)" stroke={metalColor} strokeWidth="1" />
            </g>
          )}

          {/* Earrings */}
          {jewels?.earrings && (
            <g>
              <circle cx="114" cy="150" r="3" fill="url(#metalGrad)" />
              <circle cx="114" cy="160" r="6" fill="url(#gemGrad)" stroke={metalColor} strokeWidth="1" />
              <circle cx="186" cy="150" r="3" fill="url(#metalGrad)" />
              <circle cx="186" cy="160" r="6" fill="url(#gemGrad)" stroke={metalColor} strokeWidth="1" />
            </g>
          )}

          {/* Tiara */}
          {jewels?.tiara && (
            <g>
              <path d="M120 98c18-16 42-16 60 0" stroke="url(#metalGrad)" strokeWidth="6" fill="none" strokeLinecap="round" />
              <circle cx="150" cy="92" r="7" fill="url(#gemGrad)" stroke={metalColor} strokeWidth="1" />
            </g>
          )}

          {/* Arms (front) */}
          <path d="M110 220c-18 10-30 30-34 60-2 16 4 26 10 28 8 2 16-8 16-20 0-22 8-40 20-56 2-4-4-14-12-12z" fill={skin} />
          <path d="M190 220c18 10 30 30 34 60 2 16-4 26-10 28-8 2-16-8-16-20 0-22-8-40-20-56-2-4 4-14 12-12z" fill={skin} />
        </motion.svg>
      </motion.div>
    </div>
  );
}
