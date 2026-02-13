import ScrollVideo from "./components/ScrollVideo";

export default function Home() {
  return (
    <main>
      <ScrollVideo />
      <div className="min-h-screen flex items-center justify-center bg-black text-black z-10 relative">
        <h1 className="text-4xl font-bold">Content Below</h1>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black z-10 relative">
        <h1 className="text-4xl font-bold">More Content</h1>
      </div>
    </main>
  );
}
