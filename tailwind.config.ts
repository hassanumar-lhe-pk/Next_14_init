import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#2C2C2C',
        secondary: '#F5F5F5',
        blue: '#5E17EB',
        yellow: '#ffba0f',
        footer: '#72808A'
      },
      textColor: {
        primary: '#6418C3',
        secondary: '#4B465C',
      },
      borderColor: {
        divider: '#DBDADE',
        primary: '#5E17EB',
      },
    },
  },
  plugins: [],
}
export default config
