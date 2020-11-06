import { useColorContext, colorModes } from "../context/color-mode"
export const Footer = () => {
  const { color, setColor } = useColorContext()
  return (
    <>
      <footer>
        <div> カラーモード: {color} </div>
        <div>
          <select
            defaultValue={color}
            onChange={(e) => setColor(e.target.value)}
          >
            {Object.entries(colorModes).map(([value, label]) =>
              <option value={value} key={label}>{label}</option>)
            }
          </select>
        </div>
      </footer>
      <style jsx>{`
        footer {
          background-color: ${color === 'dark' ? '#000' : color === 'light' ? '#EEE' : '#555'};
        }
      `}</style>
    </>
  )
}