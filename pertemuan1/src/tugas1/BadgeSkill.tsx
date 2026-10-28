import React from 'react';

interface BadgeProps {
  namaSkill: string;
  level: 'Pemula' | 'Menengah' | 'Mahir';
}

export default function BadgeSkill({ namaSkill, level }: BadgeProps) {
  const warna = level === 'Mahir' ? 'bg-green-100 text-green-700' : level === 'Menengah' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700';

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold ${warna} inline-block mr-2 mb-2`}>
      {namaSkill} ({level})
    </span>
  );
}