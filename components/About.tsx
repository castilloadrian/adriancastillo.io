import Link from 'next/link'

export default function About() {
  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-medium">adriancastillo.sh</h1>
      <p className="text-lg leading-relaxed">
        hi! i&apos;m adrian, a software engineer based in new york city.
        currently building personal projects in robotics and ai while scaling
        distributed systems @
        <Link
          href="https://www.etsy.com"
          className="hover:underline underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          etsy
        </Link>
        . passionate about ai/ml and reimagining technical possibilities.
      </p>
      <p className="text-lg leading-relaxed">
        this year, i want to build more things.
      </p>
    </section>
  )
}
