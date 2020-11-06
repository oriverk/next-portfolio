import { useColorContext, colorModes } from '../context/color-mode'

export const Header = () => {
  const { color, setColor } = useColorContext()

  return (
    <header>
      <h1>hoge</h1>
      <div>color mode: {color}</div>
      <div>
        <select defaultValue={color} onChange={(e) => setColor(e.target.value)}>
          {Object.entries(colorModes).map(([value, label]) =>
            <option value={value} >{label}</option>)
          }
        </select>
      </div>
    </header>
  )
}

