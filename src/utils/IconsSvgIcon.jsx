import { Hatena, Home, Human, Pen } from './svg'

function SvgIcon(props) {
  return (
    <>
      <div>
        <svg>
          {props.children}
        </svg>
      </div>
      <style jsx>{`
        div {
          flex: 0 0 auto;
          padding: 12px;
          overflow: visible;
          font-size: 1.5rem;
          text-align: center;
          transition: 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          border-radius: 50%;
        }
        
        svg {
          width: 1em;
          height: 1em;
          display: inline-block;
          font-size: 1.5rem;
          transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          flex-shrink: 0;
          user-select: none;
        }
      `}</style>
    </>
  )
}

// Tech SNS SvgIcon
export const HatenaIcon = () => {
  return <SvgIcon><Hatena /></SvgIcon>
}

// General Website SvgIcon
export const HomeIcon = () => {
  return <SvgIcon><Home /></SvgIcon>
}

export const AboutIcon = () => {
  return <SvgIcon><Human /></SvgIcon>
}

export const BlogIcon = () => {
  return <SvgIcon><Pen /></SvgIcon>
}