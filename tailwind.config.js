/** @type {import('tailwindcss').Config} */
import colors from './tailwind/colors'

const px0_200 = Array.from({ length: 201 }, (_, i) => `${i+1}px`)
const px0_20 = Array.from({ length: 21 }, (_, i) => `${i+1}px`)

export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        ...px0_200,
      },
      borderWidth: {
        ...px0_20,
      },
      colors,
    },
  },
  plugins: [],
}

