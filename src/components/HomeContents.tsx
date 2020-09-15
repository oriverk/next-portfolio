import React from 'react'
import Link from 'next/link'
import css from 'styled-jsx/css'
import { OptimizedImages } from './general/OptimizedImages'

import { HomeIcons } from './IconsWrapper'

const containerStyle = css`
  section {
    padding: 0 5%;
    flex-grow: 1;
    max-width: 1000px;
    margin: 0 auto 2rem;
  }
  article {
    margin-bottom: 1rem;
  }
  h2, h3 {
    text-align: center;
  }
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: .5rem 0 2rem;
    padding-bottom: 1rem;
  }
  .container:not(:last-child){
    border-bottom: 1px solid grey;
  }
  .left, .right {
    width: 100%;
  }
  @media( min-width: 1280px ){
    .container {
      flex-direction: row;
    }
    .container:not(:last-child){
      padding-bottom: 2rem;
    }
    .left {
      width: 40%;
      margin-right: 5%;
    }
    .right {
      width: 55%;
    }
  }
`

export function Top(props){
  const openSearch = props.openSearch
  return (
    <>
      <section id='top'>
        <div className='topWrapper'>
          <div className='title'>
            <h1 className='topTitle'>Kawano Yudai</h1>
            <h2 className='sub'>B.Agr.</h2>
            <HomeIcons openSearch={openSearch} />
          </div>
        </div>
      </section>
      <style jsx>{`
        section {
          height: 100vh;
          width: 100%;
          margin-bottom: 2rem;
          position: relative;
          background-color: #212121;
          background-size: cover;
          background-position: center;
          background-image: url('/assets/home/sunrisePortrait650x867.webp');
        }

        .topWrapper{
          position: relative;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
        }

        .title {
          width: 100%;
          padding: 5%;
          text-align: center;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .topTitle {
          font-weight: 500;
          font-size: 3.5rem;
          margin: 0 auto;
        }
        .sub {
          font-size: 1.5rem
        }

        @media( min-width: 600px){
          section{
            background-image: url('/assets/home/sunrisePortrait960x1280.webp')
          }
        }
        @media (min-width: 960px){
          section{
            height: 100vh;
            background-image: url('/assets/home/sunrisePortrait1280x1707.webp')
          }
        }
        @media(min-width: 1280px){
          section{
            background-image: url('/assets/home/sunrise2000x1333.webp')
          }
        }
        @media(min-width: 1980px){
          section{
            background-image: url('/assets/home/sunrise3500x2333.webp')
          }
        }
      `}</style>
    </>
  )
}

export function About() {
  return (
    <>
      <section id='about'>
        <h2>About</h2>
        <div className='container'>
          <div className='left'>
            <OptimizedImages
              src='/assets/home/LongRidge700.jpg'
              alt='the scenary from Long-Ridge-Lookout in Adelaide'
            />
          </div>
          <div className='right'>
            <p>My name is Kawano Yudai.</p>
            <p>I graduated from Miyazaki Universiy as Bachelor of Agriculture.</p>
            <p>In agricultural engineering lablatory I studied crop row detecting tech by image processing with C++ and OpenCV.</p>
            <p>After egg company, I stayed at Australia as working holiday. Then I studied Ruby and other tech like database, website system.</p>
            <p>So, I'm interested in both nature and machinery</p>
          </div>
        </div>
      </section>
      <style jsx>{`
        p {
          margin: 0 auto .5rem;
        }
      `}</style>
      <style jsx>
        {containerStyle}
      </style>
    </>    
  );
}

export function History() {
  return (
    <>
      <section id='history'>
        <h2>History</h2>
        <article>
          <h3>Experience</h3>
          <div className='container'>
            <div className='left'>
              <OptimizedImages src='/assets/home/sunrise.jpg' alt='no image'/>
            </div>
            <div className='right'>
              <span>2017/04 - 2018/08</span>
              <br /><b>Egg company in Miyazaki</b>
              <br /><span>Production Management</span>
            </div>
          </div>
        </article>
        <article>
          <h3>Education</h3>
          <div className='container'>
            <div className='left'>
              <OptimizedImages
                src='/assets/home/weeding700.jpg'
                alt='weeding robot motion picture'
              />
            </div>
            <div className='right'>
              <span>2015/04 - 2017/03</span>
              <br /><b>Agricultural Production System Enginnering Lab.</b>
              <br /><span>Agricultural crop row detecting tech by image processing</span>
            </div>
          </div>
          <div className='container'>
            <div className='left'>
              <OptimizedImages
                src='/assets/home/miyazakiUniv.jpg'
                alt='logo of Miyazaki University'
              />
            </div>
            <div className='right'>
              <span>2013/04 - 2017/03 :</span>
              <br /><b>Faculty of Agriculture <wbr />in Miyazaki Univ.</b>
              <br /><span>Majored in Botanics and Agricultural Mechanics</span>
            </div>
          </div>
        </article>
      </section>
      <style jsx>
        {containerStyle}
      </style>
    </>
  )
}

export function Works() {
  return (
    <>
      <section id='works'>
        <h2>Works</h2>
        <article>
          <div className='container'>
            <div className='left'>
              <OptimizedImages
                src='/assets/home/20200915prtsc1000.jpg'
                alt='screen shot of this site'
              />
            </div>
            <div className='right'>
              <b>This portfolio site as resume and tech blog</b>
              <br /><span> :to learn modern JS</span>
              <br /><span>with Reactand Typescript</span>
              <ul>
                <li><Link href='/posts/[id]' as='/posts/20200526-next-portfolio'><a>Blog: Created portfolio site with Next.js</a></Link></li>
                <li><a href='https://github.com/oriverk/next-portfolio' target='_blank' rel='noopener noreferrer' >Github repositry</a></li>
              </ul>
            </div>
          </div>
          <div className='container'>
            <div className='left'>
              <OptimizedImages
                src='/assets/posts/202003/miyazaki-oss1.jpg'
                alt='screenshot of miyazaki corona oss site'
              />
            </div>
            <div className='right'>
              <b>Miyazaki COVID-19 Task Force site</b>
              <br /><span>( OSS website )</span>
              <br /><span>with Vue.js, TypeScript</span>
              <ul>
                <li><Link href='/posts/[id]' as='/posts/20200329-joined-corona-oss'><a>Blog: Joined OSS for COVID-19 site of Miyazaki</a></Link></li>
                <li><a href='https://github.com/oriverk/covid19' target='_blank' rel='noopener noreferrer' >Github repositry</a></li>
                <li><a href='https://covid19-miyazaki.netlify.app/' target='_blank' rel='noopener noreferrer' >The site on Netlify</a></li>
              </ul>
            </div>
          </div>
          <div className='container'>
            <div className='left'>
              <OptimizedImages
                src='/assets/home/codr700.jpg'
                alt='scrren shot of code share on twitter app'
              />
            </div>
            <div className='right'>
              <b>Coder0</b>
              <br /><span> :to share code with syntax-highlight</span>
              <br /><span>with RubyonRails, PostgreSQL, AWS S3</span>
              <ul>
                <li><Link href='posts/[id]' as='/posts/20191129-post-code2twitter'><a>Blog: Wanna Share code on Twitter</a></Link></li>
                <li><a href='https://github.com/oriverk/Codr' target='_blank' rel='noopener noreferrer' >Github repositry</a></li>
              </ul>
            </div>
          </div>
          <div className='container'>
            <div className='left'>
              <OptimizedImages
                src='/assets/home/githubPages1st700.jpg'
                alt='screenshot of my 1st githubpages'
              />
            </div>
            <div className='right'>
              <b>GithubPages</b>
              <br /><span>:My 1st GithubPages</span>
              <br /><span>with Ruby, Jekyll</span>
              <ul>
                <li><Link href='/posts/[id]' as='/posts/20190818-use-jekyll'><a>Blog: Build GithubPages with Jekyll</a></Link></li>
                <li><a href='https://github.com/oriverk/oriverk.github.io' target='_blank' rel='noopener noreferrer' >Github repositry</a></li>
              </ul>
            </div>
          </div>
          <div className='container'>
            <div className='left'>
              <OptimizedImages src='/assets/home/sunrise.jpg' alt='no image' />
            </div>
            <div className='right'>
              <b>Ticket sales System</b>
              <br /><span> :from the 2018 Autumn FE exam</span>
              <br /><span>with RubyonRails, PostgreSQL, Heroku</span>
              <ul>
                <li><Link href='/posts/[id]' as='/posts/20190829-fe-exam'><a>Blog: Reproduce ticket sales system in FE exam</a></Link></li>
                <li><a href='https://github.com/oriverk/ConcertTicket' target='_blank' rel='noopener noreferrer' >Github repositry</a></li>
                <li><a href='https://www.jitec.ipa.go.jp/1_04hanni_sukiru/mondai_kaitou_2018h30_2/2018h30a_fe_pm_qs.pdf' target='_blank' rel='noopener noreferrer'>IPA FE exam</a></li>
              </ul>
            </div>
          </div>
        </article>
      </section>
      <style jsx>
        {containerStyle}
      </style>
    </>  
  );
}