/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'toast-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'toast-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'toast-top': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        'toast-bottom': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      animation: {
        'toast-right': 'toast-right 0.5s',
        'toast-left': 'toast-left 0.5s',
        'toast-top': 'toast-top 0.5s',
        'toast-bottom': 'toast-bottom 0.5s',
      },
    },
    colors: {
      black: {
        100: ' #000000',
        50: '#949494',
        30: '#E7E7E7',
        10: '#F5F5F5',
      },
      blue: {
        100: '#0a2961',
        50: '#898cae',
        30: '#d7d7e3',
        10: '#f0f0f5',
      },
      white: '#FFFFFF',
    },
    fontSize: {
      Title: ['32px', { fontWeight: '700' }],
      SubTitle: ['20px', { fontWeight: '500' }],
      Body: [
        '16px',
        { fontWeight: '400', lineHeight: '20.5px', letterSpacing: '-0.3px' },
      ],
    },
  },
  plugins: [],
};
