import { readFileSync, readdirSync } from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import Navbar from '../../../components/Navbar';
import BlogPost from '../../../components/BlogPost';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface Frontmatter {
  title?: string;
  date?: string;
  [key: string]: any;
}

export const dynamic = 'force-dynamic';

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${resolvedParams.slug}.mdx`);
  const source = readFileSync(filePath, 'utf8');
  
  const { data: frontmatter, content } = matter(source);
  const mdxSource = await serialize(content, {
    parseFrontmatter: true,
    mdxOptions: {
      development: process.env.NODE_ENV === 'development'
    }
  });

  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-16 space-y-24">
        <BlogPost source={mdxSource} frontMatter={frontmatter} />
      </main>
    </>
  );
}

export async function generateMetadata({ params }: PageProps) {
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
  const filenames = readdirSync(postsDirectory);
  
  return filenames.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));
} 