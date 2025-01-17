'use client';

import { useMemo } from 'react';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

export default function MdxComponent({ source }: { source: MDXRemoteSerializeResult }) {
  const MDXContent = useMemo(async () => {
    const { MDXRemote } = await import('next-mdx-remote');
    return <MDXRemote {...source} />;
  }, [source]);

  return MDXContent;
} 