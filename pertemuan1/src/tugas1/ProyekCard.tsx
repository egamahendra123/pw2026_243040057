import React from 'react';

interface ProyekProps {
  judul: string;
  deskripsi: string;
  tags: string[];
  linkGithub: string;
}

export default function ProyekCard({ judul, deskripsi, tags, linkGithub }: ProyekProps) {
  return (
    <div style={{ border: '1px solid #E1E4E8', borderRadius: '8px', padding: '16px', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1B365D', marginBottom: '8px' }}>{judul}</h3>
        <p style={{ fontSize: '13px', color: '#555', marginBottom: '12px' }}>{deskripsi}</p>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
          {tags.map((tag, i) => (
            <span key={i} style={{ fontSize: '11px', backgroundColor: '#EDF2F7', padding: '2px 8px', borderRadius: '4px' }}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <a href={linkGithub} target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', fontWeight: 'bold', color: '#1B365D', textDecoration: 'none' }}>
        Repository GitHub &rarr;
      </a>
    </div>
  );
}