'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface Frontmatter {
  title?: string;
  date?: string;
  [key: string]: any;
}

interface BlogPostProps {
  source: ReactNode;
  frontMatter: Frontmatter;
}

export default function BlogPost({ source, frontMatter }: BlogPostProps) {
  return (
    <section className="max-w-2xl mx-auto space-y-12">
      <header className="space-y-8">
        <Link 
          href="/" 
          className="text-sm hover:underline underline-offset-4 text-muted-foreground"
        >
          back
        </Link>
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight">
            {frontMatter?.title || 'Untitled Post'}
          </h1>
          <time className="text-sm text-muted-foreground block">
            {frontMatter?.date || 'No date'}
          </time>
        </div>
      </header>
      
      <article className="prose prose-neutral dark:prose-invert">
        {source}
      </article>
    </section>
  );
}