import React from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import { ArrowIcon } from '../utils/svgIcon'
import { SwipeDrawerLists } from './DrawerLists'

export function PostLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [state, setState] = React.useState({
    left: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setState({ ...state, [anchor]: open })
  }

   // drawer width is defined at _app.jsx
  return (
    <React.Fragment key='left'>
      <SwipeableDrawer
        anchor='left'
        open={state['left']}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        <div
          className='swipeableList'
          role='presentation'
          onClick={toggleDrawer('left', false)}
          onKeyDown={toggleDrawer('left', false)}
        >
          <SwipeDrawerLists />
        </div>
      </SwipeableDrawer>
      <main>
        {children}
      </main>
      <footer>
        <button aria-label='Open drawer' onClick={toggleDrawer('left', true)}>
          <ArrowIcon />
        </button>
      </footer>
      <style jsx>{`
        /* general */
        .swipeableList {
          width: var(--drawerWidth);
          background-color: #424242;
          height: 100vh;
        }

        main{
          flex: 1;
          width: 100%;
        }

        footer{
          width: 100%;
          position: fixed;
          bottom: 0;
          z-index: 100;
        }

        footer button {
          position: fixed;
          left: .4rem;
          bottom: .4rem;
          height: 3.5rem;
          width: 3.5rem;
          border: 1px solid grey;
          border-radius : 50%;
          background-color: #424242;
          outline: none;
        }

        @media ( min-width: 1280px ){
          /* for pc */
          footer button {
            left: 4rem;
            bottom: 4rem;
          }
        }
      `}</style>
    </React.Fragment>
  )
}