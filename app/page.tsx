import { redirect } from 'next/navigation';

export default function HomePage() {
  // Mengarahkan ke halaman login secara otomatis saat diakses
  redirect('/login');
}