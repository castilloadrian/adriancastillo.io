'use client';

import Link from 'next/link';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import MdxRenderer from './MdxRenderer';

interface Frontmatter {
  title?: string;
  date?: string;
  [key: string]: any;
}

interface BlogPostProps {
  source: MDXRemoteSerializeResult;
  frontMatter: Frontmatter;
}

export default function BlogPost({ source, frontMatter }: BlogPostProps) {
  return (
    <section className="space-y-8">
      <div className="space-y-8">
        <Link 
          href="/" 
          className="text-sm hover:underline underline-offset-4"
        >
          back
        </Link>
        <h2 className="text-2xl font-medium">
          {frontMatter?.title || 'Untitled Post'}
        </h2>
      </div>
      <div className="space-y-4">
        <MdxRenderer source={source} />
        <span className="text-sm text-muted-foreground">
          {frontMatter?.date || 'No date'}
        </span>
      </div>
    </section>
  );
}