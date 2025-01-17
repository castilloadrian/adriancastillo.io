'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

const MDXComponent = dynamic(() => import('./MdxComponent'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function MdxRenderer({ source }: { source: MDXRemoteSerializeResult }) {
  return (
    <div className="prose dark:prose-invert text-lg leading-relaxed">
      <Suspense fallback={<div>Loading...</div>}>
        <MDXComponent source={source} />
      </Suspense>
    </div>
  );
} 