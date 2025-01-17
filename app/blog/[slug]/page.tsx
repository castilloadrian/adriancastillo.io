import { readFileSync, readdirSync } from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import matter from 'gray-matter';
import Navbar from '../../../components/Navbar';
import BlogPost from '../../../components/BlogPost';

type Params = {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Params) {
  const resolvedParams = await params;
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${resolvedParams.slug}.mdx`);
  const source = readFileSync(filePath, 'utf8');
  
  const { data: frontmatter, content } = matter(source);
  const { content: mdxContent } = await compileMDX({
    source: content,
    options: { parseFrontmatter: true }
  });

  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-16 space-y-24">
        <BlogPost source={mdxContent} frontMatter={frontmatter} />
      </main>
    </>
  );
}

export async function generateMetadata({ params }: Params) {
  const resolvedParams = await params;
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${resolvedParams.slug}.mdx`);
  const source = readFileSync(filePath, 'utf8');
  const { data: frontmatter } = matter(source);

  return {
    title: `${frontmatter.title} - adrian castillo`,
  };
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const files = readdirSync(postsDirectory);
  
  return files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));
} 