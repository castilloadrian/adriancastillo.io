import Link from "next/link";

interface SocialLink {
  platform: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  { platform: "email", href: "mailto:adriancastillo1222@gmail.com" },
  { platform: "x", href: "https://x.com/castilloadrianx" },
  { platform: "github", href: "https://github.com/castilloadrian" },
];

const Connect = () => {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-medium">connect</h2>
      <div className="space-y-4">
        {socialLinks.map((link) => (
          <div key={link.platform}>
            <Link 
              href={link.href}
              className="text-lg hover:underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.platform}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Connect;