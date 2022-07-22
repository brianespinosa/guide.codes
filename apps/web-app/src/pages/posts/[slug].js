import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { remarkCodeHike } from '@code-hike/mdx';
// import Link from 'next/link';
import path from 'path';
import { CH } from '@code-hike/mdx/components';
import theme from 'shiki/themes/dracula.json';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';
import Layout from '../../components/Layout/Layout';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  CH,
  // a: CustomLink,
  // // It also works with dynamically-imported components, which is especially
  // // useful for conditionally loading components for certain routes.
  // // See the notes in README.md for more details.
  // TestComponent: dynamic(() => import('../../components/TestComponent')),
  // Head,
};

export default function PostPage({ mdxSource, frontMatter }) {
  return (
    <Layout>
      {/* <header>
        <nav>
          <Link href="/">
            <a>👈 Go back home</a>
          </Link>
        </nav>
      </header>
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
      </div> */}
      <main>
        <MDXRemote {...mdxSource} components={components} />
      </main>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        [
          remarkCodeHike,
          {
            autoImport: false,
            lineNumbers: true,
            showCopyButton: false,
            theme,
          },
        ],
      ],
      rehypePlugins: [],
      useDynamicImport: true,
    },
  });

  return { props: { mdxSource, frontMatter: data } };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
