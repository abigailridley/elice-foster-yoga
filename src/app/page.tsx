import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-8 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">Elice Foster Yoga</h1>
      <p className="mb-6">Join us for relaxing, restorative yoga.</p>
      <Link
        href="/book"
        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
      >
        Book a Class
      </Link>
    </main>
  );
}
