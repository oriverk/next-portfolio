import React from 'react'
import Link from 'next/link'

import styles from './Layout.module.css'
import utilStyles from '../styles/utils.module.css'

import { makeStyles, useTheme } from '@material-ui/core/styles'

import Hidden from '@material-ui/core/Hidden'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow'
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'

import HomeIcon from '@material-ui/icons/Home'
import CreateIcon from '@material-ui/icons/Create'

import MyDrawerList from '../components/MyDrawerList'

const drawerWidth = 250

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 100,
    backgroundColor: 'grey',
  },
  profileImgContainer: {
    textAlign: 'center',
    margin: '1rem',
  },
  profileImg: {
    width: `calc(0.5 *  ${drawerWidth}px)`,
  },
  swipeableList: {
    width: drawerWidth,
  },
  permanentDrawer: {
    width: drawerWidth,
    flexShrink: 1,
  },
  permanentDrawerPaper: {
    width: drawerWidth,
  },
  contents: {
    position: 'absolute',
    top: 0,
    flexGrow: 1,
    [theme.breakpoints.down('md')]: {
      // with swipeableDrawer
      width: '100%',
      marginBottom: `59px`,
      paddingBottom: '10px',
      marginLeft: 0,
    },
    [theme.breakpoints.up('lg')]: {
      // with permanentDrawer
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
}))

function PostLayout({ children }) {
  const classes = useStyles()
  const theme = useTheme()
  const [state, setState] = React.useState({
    left: false,
  })

  // Do Not Touch
  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setState({ ...state, [anchor]: open })
  }

  const PostDrawerList = () => {
    return (
      <MyDrawerList>
        <List>
          <Link href="/">
            <ListItem button>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link href="/posts">
            <ListItem button>
              <ListItemIcon><CreateIcon /></ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <div style={{textAlign: 'center'}}><p>h2 index</p></div>
        </List>
      </MyDrawerList>
    )
  }

  return (
    <React.Fragment key='left'>
      <Hidden lgUp>
        <SwipeableDrawer
          anchor='left'
          open={state['left']}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          <div
            className={classes.swipeableList}
            role="presentation"
            onClick={toggleDrawer('left', false)}
            onKeyDown={toggleDrawer('left', false)}
          >
            <PostDrawerList />
          </div>
        </SwipeableDrawer>
        <footer className={classes.footer}>
          <IconButton
            aria-label="Open swipeable temporary drawer"
            onClick={toggleDrawer('left', true)}
          >
            <DoubleArrowIcon color="secondary" style={{ fontSize: 35 }} />
          </IconButton>
        </footer>
      </Hidden>
      <Hidden mdDown>
        <aside>
          <Drawer
            className={classes.permanentDrawer}
            variant="permanent"
            anchor="left"
            classes={{
              paper: classes.permanentDrawerPaper,
            }}
          >
            <PostDrawerList />
          </Drawer>
        </aside>
      </Hidden>
      <main className={classes.contents}>
        {children}
      </main>
    </React.Fragment>
  )
}

export default PostLayout