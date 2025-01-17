'use client';

import { MDXRemote } from 'next-mdx-remote/rsc';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

export default function MdxRenderer({ source }: { source: MDXRemoteSerializeResult }) {
  return (
    <div className="prose dark:prose-invert text-lg leading-relaxed">
      <MDXRemote source={source.compiledSource} />
    </div>
  );
} 