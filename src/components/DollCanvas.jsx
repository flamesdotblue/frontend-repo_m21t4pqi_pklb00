import React from 'react';
import { motion } from 'framer-motion';

// A stylized SVG doll with layered dress, jewels, and makeup
// Props: dress, jewels, makeup
export default function DollCanvas({ dress, jewels, makeup }) {
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
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50" />
      <div className="absolute -top-40 -right-24 h-96 w-96 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-fuchsia-200/40 blur-3xl" />

      <motion.svg
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewBox="0 0 300 520"
        className="relative z-10 w-[85%] max-w-[380px] drop-shadow-[0_20px_40px_rgba(240,46,170,0.15)]"
        role="img"
        aria-label="Barbie dress-up canvas"
      >
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
        </defs>

        {/* Back shadow */}
        <ellipse cx="150" cy="500" rx="90" ry="14" fill="rgba(0,0,0,0.08)" />

        {/* Hair */}
        <path d="M95 120c0-40 25-70 55-70s55 30 55 70c0 30-10 50-25 65-12 11-27 15-30 30-2-9-12-17-24-24-21-12-31-34-31-71z" fill={hair} />

        {/* Neck */}
        <rect x="142" y="165" width="16" height="28" rx="8" fill={skin} />

        {/* Face */}
        <circle cx="150" cy="135" r="40" fill={skin} stroke={stroke} />

        {/* Eyes */}
        <ellipse cx="136" cy="132" rx="6" ry="4" fill="#111" />
        <ellipse cx="164" cy="132" rx="6" ry="4" fill="#111" />
        <circle cx="136" cy="132" r="2" fill={eyeColor} />
        <circle cx="164" cy="132" r="2" fill={eyeColor} />

        {/* Lashes */}
        <path d="M128 125l8 3M168 125l-8 3" stroke="#000" strokeOpacity="0.6" strokeWidth="1.2" strokeLinecap="round" />

        {/* Nose */}
        <path d="M150 140c-2 4-2 6 0 6" stroke="#000" strokeOpacity="0.25" strokeWidth="1.2" strokeLinecap="round" />

        {/* Lips */}
        <path d="M136 154c4 6 24 6 28 0" fill="none" stroke={lipColor} strokeWidth="3" strokeLinecap="round" />

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

        {/* Skirt */}
        <motion.path
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          d="M96 250c26-6 132-6 158 0-14 20-18 38-32 62-16 26-37 48-72 48s-56-22-72-48c-14-24-18-42-32-62 12-4 28-0 50 0z"
          fill="url(#dressGrad)"
          opacity="0.95"
        />

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
    </div>
  );
}
