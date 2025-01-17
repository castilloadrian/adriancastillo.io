import About from '../components/About'
import Blogs from '../components/Blogs'
import Navbar from '../components/Navbar'
import Connect from '../components/Connect'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-16 space-y-24">
        <About />
        <Blogs />
        <Connect />
      </main>
    </div>
  )
}
