import Link from 'next/link'

const socialLinks = [
  {
    platform: 'linkedin',
    href: 'https://www.linkedin.com/in/adrian-castillo-bscs/',
  },
  { platform: 'github', href: 'https://github.com/castilloadrian' },
  { platform: 'email', href: 'mailto:adriancastillo1222@gmail.com' },
  { platform: 'x', href: 'https://x.com/castilloadrianx' },
] as const

export default function Connect() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-medium">connect</h2>
      <div className="space-y-4">
        {socialLinks.map(({ platform, href }) => (
          <div key={platform}>
            <Link
              href={href}
              className="text-lg hover:underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              {platform}
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
