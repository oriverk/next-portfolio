import css from 'styled-jsx/css'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

import { IconContext } from 'react-icons'
import { BsMoon, BsSun } from "react-icons/bs"

const Style = css`
button {
background: #0f1114;
border: none;
border-radius: 30px;
cursor: pointer;
display: flex;
font-size: 0.5rem;
justify-content: space-between;
overflow: hidden;
position: relative;
width: 64px;
height: 28px;
margin: 0;
padding: 0.5rem;
}
button:focus {
  outline: none;
}

.theme-switch-svg {
  position: absolute;
  top: 4px;
  right: 6px;
  width: 1.2rem;
  height: auto;
}

:global(.theme-switch-svg svg) {
  fill: #FF0;
}

.switch-toggle-ball {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #fefefe;
  transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1) 0ms;
}
.switch-toggle-ball {
  transform: ${(props) => (props.theme === 'dark' ? 'translateX(36px)' : 'translateX(0)')};
}
`

export const Switch: React.FC = props => {
  const { theme, switchTheme } = useContext(ThemeContext)

  return (
    <IconContext.Provider value={{ className: 'react-icons' }}>
      <button onClick={switchTheme}>
        <div className='theme-switch-svg'>
          <BsMoon />
        </div>
        <div className='theme-switch-theme'>
          <BsSun />
        </div>
        <div className='switch-toggle-ball'></div>
      </button>
      <style jsx>{Style}</style>
    </IconContext.Provider>
  )
}