import Link from "next/link";

interface BlogPost {
  title: string;
  date: string;
  href: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Building a minimal personal website",
    date: "Jan 2024",
    href: "#"
  },
  {
    title: "Thoughts on modern web development",
    date: "Dec 2023",
    href: "#"
  },
  {
    title: "Why simplicity matters",
    date: "Nov 2023",
    href: "#"
  }
];

const Blogs = () => {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-medium">blog</h2>
      <div className="space-y-4">
        {blogPosts.map((post) => (
          <article key={post.title} className="flex justify-between items-baseline group">
            <Link 
              href={post.href}
              className="text-lg hover:underline underline-offset-4"
            >
              {post.title}
            </Link>
            <span className="text-sm text-muted-foreground">{post.date}</span>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blogs;