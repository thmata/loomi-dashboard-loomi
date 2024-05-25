'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push('/login');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Hello World</p>
      <button onClick={handleLoginRedirect} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Go to Login
      </button>
    </main>
  );
}