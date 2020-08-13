import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Layout } from '../../components/Layout'
import { getTags } from '../../lib/posts'
import blogConfig from '../../../blog.config'

import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const tags: string[] = getTags()
  return {
    props: {
      tags
    }
  }
}

export default function ({ tags }: { tags: string[] }) {
  return (
    <React.Fragment>
      <Layout>
        <Head>
          <title>Tags | {blogConfig.shortName}</title>
          <meta name='title' content={`Tags | ${blogConfig.baseName}`} />
          <meta name='description' content={blogConfig.desc} />
          <meta property='og:title' content={`Tags | ${blogConfig.baseName}`} />
          <meta property='og:description' content={blogConfig.desc} />
          <meta property='og:image' content={`${blogConfig.baseUrl}/assets/prtsc-1000.webp`} />
          <meta property='og:url' content={`${blogConfig.baseUrl}/tags`} />
        </Head>
        <article className='content'>
          <h1>Blog Tags</h1>
          <div className='tags'>
            {tags.map((tag) => (<span key={tag} className={tag}><code><Link href='/tags/[tag]' as={`/tags/${tag}`}><a>{tag}</a></Link></code></span>))}
          </div>
        </article>
      </Layout>
      <style jsx>{`
        .content {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto 1rem;
          padding: 5%;
          flex-grow: 1;
        }

        .tags a{
          font-size: .8rem;
        }
      `}</style>
    </React.Fragment>
  )
}