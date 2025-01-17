import Link from "next/link";
import { readdirSync, readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface BlogPost {
  title: string;
  date: string;
  href: string;
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const posts = readdirSync(postsDirectory)
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const { data } = matter(readFileSync(filePath, 'utf8'));
      
      return {
        title: data.title || 'Untitled',
        date: data.date || 'No date',
        href: `/blog/${filename.replace('.mdx', '')}`
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export default async function Blogs() {
  const blogPosts = await getBlogPosts();

  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-medium">blog</h2>
      <div className="space-y-4">
        {blogPosts.map((post) => (
          <article key={post.href} className="flex justify-between items-baseline group">
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
}