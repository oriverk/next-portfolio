import Head from 'next/head'
import PostLayout from '../../components/PostLayout'
// import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  // ↑await is for reamrk. if not use remark, remove async
  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  const pageTitle = `${postData.title} | Kawano Yudai' site`
  const pageTags = postData.tags ? postData.tags.replace(' ', ', ') : 'GithubPages, React, Next.js'
  const pageImage = postData.image ? postData.image : './assets/prtsc700.jpg'

  return (
    <>
      <PostLayout>
        <Head>
          <title>{pageTitle}</title>
          <meta name='title' content={pageTitle} />
          <meta name='description' content={pageTags} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageTags} />
          <meta property="og:image" content={pageImage} />
          <meta property="og:url" content={`/posts/${postData.id}`} />
        </Head>
        <article className='content'>
          <h1>{postData.title}</h1>
          <div>
            <time dateTime={postData.date}>posted on: {postData.date}</time>
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml}} />
        </article>
        <div className='sns'>
          <div className='twitter'>
            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false"
              data-size="large" data-text={postData.title} data-url={`https://next-portfolio-blue.now.sh/posts/${postData.id}`}
              target="_blank" rel="noopener noreferrer">Tweet</a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
          <div className='hatena'>
            <a href={`https://b.hatena.ne.jp/entry/https://next-portfolio-blue.now.sh/posts/${postData.id}`} className="hatena-bookmark-button" data-hatena-bookmark-layout="touch-counter"
              title={postData.title} target="_blank" rel="noopener noreferrer">
              <img src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
                alt="このエントリーをはてなブックマークに追加" style={{ width:'20px', height:'20px', border: 'none' }} /></a>
            <script type="text/javascript" src="https://b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async="async"></script>
          </div>
        </div>
      </PostLayout>
      <style jsx global>{`
        a{
          color: #50CAF9;
          text-decoration: none;
        }
        code{
          display: inline-block;
          margin: 0 1rem;
          padding: 0 .5rem;
          background-color: #555;
        }
        pre{
          border: .8px solid grey;
          border-radius: 0.25rem;
          display: block;
          white-space: pre;
          background-color: #272c34;
         
          width: 100%;
          max-width: 1000px;
          margin-bottom: 2rem;
          padding: 1rem;
          overflow: auto;
        }
        pre code{
          background-color: #272c34;
          color: white;
          font-size: 1rem;
          font-weight: 400;
          word-break: break-word;
          line-height: 1.5;
        }
        source, img{
          display: block;
          margin: 2rem auto;
          background-color: #424242;
          width: 95%;
        }
        .twitter, .hatena {
          float: left;
        }
      `}</style>
      <style jsx>{`
        .content {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto 1rem;
          padding: 5%;
          flex-grow: 1;
        }
        h1{
          font-size: 1.5rem;
          text-align: center;
        }
      `}</style>
    </>
  )
}