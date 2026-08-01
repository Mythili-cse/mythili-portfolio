/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#06070D',
        surface: '#0C0E18',
        surface2: '#12142299',
        line: '#1E2133',
        violet: {
          DEFAULT: '#7C6CF6',
          soft: '#A69CFB',
        },
        cyan: {
          DEFAULT: '#3FE0D0',
          soft: '#8FF0E5',
        },
        amber: {
          DEFAULT: '#F5B94A',
        },
        ink: {
          primary: '#EDEFF7',
          muted: '#8B90A8',
          faint: '#565A73',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        aurora:
          'radial-gradient(ellipse 80% 50% at 20% -10%, rgba(124,108,246,0.35), transparent), radial-gradient(ellipse 60% 40% at 85% 10%, rgba(63,224,208,0.22), transparent), radial-gradient(ellipse 60% 50% at 50% 100%, rgba(124,108,246,0.15), transparent)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(124,108,246,0.25), 0 0 40px -10px rgba(124,108,246,0.45)',
        'glow-cyan': '0 0 0 1px rgba(63,224,208,0.25), 0 0 40px -10px rgba(63,224,208,0.45)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
    },
  },
  plugins: [],
}
