/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: '',
        primary: '#2962FF',
        background: '#FFFFFF',
        dark: '#0D0D0D',
        light: '#F8FAFC',
        grey: '#BFBFBF',
        lightGrey: '#D6D6D6',
      },
      keyframes: {
        'slide-in-left': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        'scale-up': {
          '0%': {
            transform: 'scale(0)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        'scale-down': {
          '0%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(0)',
          },
        },
        spinCustom: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left 0.5s ease-out forwards',
        'scale-up': 'scale-up 0.2s ease-out forwards',
        'scale-down': 'scale-up 0.2s ease-out forwards',
        'spin-custom': 'spinCustom 1s linear infinite',
      },
    },
  },
  plugins: [],
};
