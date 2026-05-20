/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-bg)',
        foreground: 'var(--color-text)',
        primary: 'var(--color-primary)',
        'primary-light': 'var(--color-primary-light)',
        'primary-dark': 'var(--color-primary-dark)',
        secondary: 'var(--color-secondary)',
        'secondary-light': 'var(--color-secondary-light)',
        'secondary-dark': 'var(--color-secondary-dark)',
        surface: 'var(--color-surface)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
        'neutral': 'var(--color-neutral)',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
      },
      fontSize: {
        h1: 'var(--font-h1)',
        h2: 'var(--font-h2)',
        h3: 'var(--font-h3)',
        h4: 'var(--font-h4)',
        h5: 'var(--font-h5)',
        h6: 'var(--font-h6)',
        'body-1': 'var(--font-body-1)',
        'body-2': 'var(--font-body-2)',
        caption: 'var(--font-caption)',
      },
      boxShadow: {
        brand: 'var(--shadow-brand)',
      },
      backgroundImage: {
        'gradient-orange-radial': 'var(--gradient-orange-radial)',
        'gradient-linear-primary': 'var(--gradient-linear-primary)',
      },
    },
  },
  plugins: [],
};
