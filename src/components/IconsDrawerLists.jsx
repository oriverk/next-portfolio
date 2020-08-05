import React from 'react'
import Link from 'next/link'
import { Divider } from '../utils/IconsUtils'
import { HomeIcon, AboutIcon, BlogIcon } from '../utils/IconsSvgIcon'
import blogConfig from '../../blog.config'

import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import { QiitaSvg, WantedlySvg } from '../utils/IconsSvg'
import { MdHome, MdEdit, MdLocalOffer } from "react-icons/md";


const SnsIcon = (props) => {
  return (
    <React.Fragment>
      <a className='snsLink' href={props.href} aria-label={props.label} target='_blank' rel='noopener noreferrer'>
        <div className='svgWrapper'>
          <IconContext.Provider value={{ className: 'react-icons drawerSnsIcon' }}>
            {props.children}
          </IconContext.Provider>
        </div>
      </a>
      <style jsx global>{`
        .drawerSnsIcon{
          width: 1em;
          height: 1em;
          display: inline-block;
          font-size: 1.5rem;
          transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          flex-shrink: 0;
          user-select: none;
        }
      `}</style>
      <style jsx>{`
        .snsLink {
          display: inline-block;
          transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          fill: #50CAF9;
          float: left;
        }
        {/* .snsLink:hover {
          border-radius: 50%;
          background-color: rgba(255,255,255,0.08);
        } */}
        .svgWrapper{
          flex: 0 0 auto;
          padding: 12px;
          overflow: visible;
          font-size: 1.5rem;
          text-align: center;
          transition: 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          border-radius: 50%;
          display: inline-block;
        }
      `}</style>
    </React.Fragment>
  )
}


const DrawerLists = ({ children }) => {
  return (
    <React.Fragment>
      <React.Fragment>
        <div className="drawerContents">
          <div className='profileImgContainer'>
            <picture>
              <source srcSet='/assets/human192x192.webp' type='image/webp' className='profileImg' />
              <img src='/assets/human192x192.png' alt='avatar' className='profileImg' />
            </picture>
          </div>
          <Divider />
          {children}
          <Divider />
          <div className='snsIcons'>
            <SnsIcon href={`https://qiita.com/${blogConfig.sns.qiita}`} label='Qiita'>
              <QiitaSvg class='drawerSnsIcon' fill='#50CAF9' />
            </SnsIcon>
            <SnsIcon href={`https://www.wantedly.com/users/${blogConfig.sns.wantedly}`} label='Wantedly'>
              <WantedlySvg class='drawerSnsIcon' fill='#50CAF9'/>
            </SnsIcon>
            <SnsIcon href={`https://github.com/${blogConfig.sns.github}`} label='Github' >
              <FaGithub />
            </SnsIcon>
            <SnsIcon href={`https://www.linkedin.com/in/${blogConfig.sns.linkedin}`} label='linkedin'>
              <FaLinkedin />  
            </SnsIcon>
            <SnsIcon href={`https://twitter.com/${blogConfig.sns.twitter}`} label='Twitter'>
              <FaTwitter />
            </SnsIcon>
          </div>
        </div>
        <style jsx>{`
          .snsIcons {
            width: 100%;
          }
          .profileImgContainer {
            margin: 1rem;
            border-radius: 50%;
          }

          .profileImg {
            margin: 0 auto;
            width: 80%;
            background-color: #424242;
          }
      `}</style>
      </React.Fragment>
    </React.Fragment>
  )
}

const ListItem = React.forwardRef((props, ref) => {
  return (
    <>
      <a href={props.href} key={props.key} onClick={props.onClick} ref={ref}>
        {props.children}
      </a>
      <style jsx>{`
        a{
          transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          padding: .5rem 1rem;
          width: 100%;
          height: 4rem;
          justify-content: flex-start;
          user-select: none;
        }
        a:hover {
          text-decoration: none;
          background-color: rgba(255, 255, 255, 0.08);
        }
        @media ( min-width: 1280px){
          a {
            height: 4.75rem;
          }
        }
      `}</style>
    </>
  )
})

export const IconsPermanentDrawerLists = (props) => {
  return (
    <React.Fragment>
      <DrawerLists>
        <div className='lists'>
          {/* {!props.home && ( */}
            <Link href='/' key='home' passHref>
              <ListItem>
                <div className='listIcon'>
                  <IconContext.Provider value={{ className: 'react-icons listIconSvg' }}>
                    <MdHome />
                  </IconContext.Provider>
                </div>
                <span>Home</span>
              </ListItem>
            </Link>
          {/* )} */}
          <Link href='/posts' key='blog' passHref>
            <ListItem>
              <div className='listIcon'><BlogIcon /></div>
              <span>Blog</span>
            </ListItem>
          </Link>
          <Link href='/tags' key='tags' passHref>
            <ListItem>
              <div className='listIcon'><BlogIcon /></div>
              <span>Tags</span>
            </ListItem>
          </Link>
        </div>
      </DrawerLists>
      <style jsx global>{`
        .listIconSvg{
          fill: #EEE;
          width: 1em;
          height: 1em;
        }
      `}</style>
      <style jsx>{`
        .lists {
          margin: 0;
          padding: 0;
          position: relative;
          display: flex;
          flex-direction: column;
          color: #EEE;
        }

        .lists span {
          color: #EEE;
        }

        .listIcon {
          display: inline-flex;
          vertical-align: middle;
          padding-right: 2rem;
          height: 100%;
        }
      `}</style>
    </React.Fragment>
  )
}

export const IconsLeftSwipeDrawerLists = (props) => {
  return (
    <React.Fragment>
      <DrawerLists>
        <div>
          <p>Kawano Yudai</p>
          <p>with React, TypeScript</p>
          <p>This uses Google Analytics</p>
        </div>
        <Divider />
        <div>
          <p>some are under construction...</p>
        </div>
      </DrawerLists>
      <style jsx>{`
        div {
          color: #EEE;
          text-align: center;
        }
      `}</style>
    </React.Fragment>
  )
}