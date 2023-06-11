/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'toast-bottom':
          'toast-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'toast-top':
          'toast-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
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
