import './App.css';
import Kartuprofil from './kartuprofil'; // Karena sejajar dengan App.tsx

// Panggil 3 komponen dari dalam folder tugas1
import BadgeSkill from './tugas1/BadgeSkill';
import ItemMatkul from './tugas1/ItemMatkul';
import ProyekCard from './tugas1/ProyekCard';

export default function App() {
  const daftarPraktikum = [
    { id: 101, kode: 'IF211', nama: 'Pemrograman Web', sks: 3, hari: 'Senin' },
    { id: 102, kode: 'IF212', nama: 'Sistem Basis Data', sks: 3, hari: 'Rabu' },
    { id: 103, kode: 'IF213', nama: 'Rekayasa Perangkat Lunak', sks: 3, hari: 'Kamis' },
    { id: 104, kode: 'IF214', nama: 'Arsitektur Terdistribusi', sks: 2, hari: 'Jumat' }
  ];

  const daftarProyek = [
    { judul: 'Portofolio Akademik', deskripsi: 'Aplikasi web portofolio React & TypeScript.', tags: ['React', 'TypeScript'], linkGithub: 'https://github.com/egamahendra123' },
    { judul: 'Game 2D Astronot', deskripsi: 'Game edukasi luar angkasa interaktif.', tags: ['ActionScript3', 'GameDev'], linkGithub: 'https://github.com/egamahendra123' },
    { judul: 'Dashboard Analitik', deskripsi: 'Visualisasi data enterprise ritel.', tags: ['Tableau', 'Analytics'], linkGithub: 'https://github.com/egamahendra123' },
    { judul: 'Dockerized App', deskripsi: 'Konfigurasi deployment multi-service.', tags: ['Docker', 'DevOps'], linkGithub: 'https://github.com/egamahendra123' }
  ];

  return (
    <div style={{ maxWidth: '850px', margin: '40px auto', padding: '0 24px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ color: '#1B365D' }}>Praktikum Pemrograman Web</h1>
        <p style={{ color: '#666' }}>Universitas Pasundan - Modul 1</p>
      </header>

      {/* Bagian Profil & Tugas 1 */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ color: '#2C3E50', borderBottom: '2px solid #E1E4E8', paddingBottom: '8px' }}>Profil Praktikan</h2>
        <Kartuprofil nama="Ega Mahendra" npm="243040057" kelas="Teknik Informatika - Semester 5" status="Aktif" />
        <div style={{ marginTop: '12px' }}>
          <BadgeSkill namaSkill="React.js" level="Mahir" />
          <BadgeSkill namaSkill="Java OOP" level="Menengah" />
          <BadgeSkill namaSkill="Docker" level="Menengah" />
        </div>
      </section>

      {/* Bagian Tugas 2 */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ color: '#2C3E50', borderBottom: '2px solid #E1E4E8', paddingBottom: '8px' }}>Daftar Mata Kuliah</h2>
        {daftarPraktikum.map((m) => (
          <ItemMatkul key={m.id} kode={m.kode} nama={m.nama} sks={m.sks} hari={m.hari} />
        ))}
      </section>

      {/* Bagian Tugas 3 */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ color: '#2C3E50', borderBottom: '2px solid #E1E4E8', paddingBottom: '8px', marginBottom: '16px' }}>Showcase Portofolio Mini</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          {daftarProyek.map((p, idx) => (
            <ProyekCard key={idx} judul={p.judul} deskripsi={p.deskripsi} tags={p.tags} linkGithub={p.linkGithub} />
          ))}
        </div>
      </section>
    </div>
  );
}