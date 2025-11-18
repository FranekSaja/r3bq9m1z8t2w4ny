/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        text: 'var(--text)',
        'menu-color': 'var(--menu-color)',
        'hover-color': 'var(--hover-color)',
        'link-color': 'var(--link-color)',
        green: 'var(--green)',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--text)',
            '--tw-prose-headings': 'var(--text)',
            '--tw-prose-lead': 'var(--text)',
            '--tw-prose-links': 'var(--text)',
            '--tw-prose-bold': 'var(--text)',
            '--tw-prose-counters': 'var(--text)',
            '--tw-prose-bullets': 'var(--text)',
            '--tw-prose-hr': 'var(--text)',
            '--tw-prose-quotes': 'var(--text)',
            '--tw-prose-quote-borders': 'var(--text)',
            '--tw-prose-captions': 'var(--text)',
            '--tw-prose-code': 'var(--text)',
            '--tw-prose-pre-code': 'var(--text)',
            '--tw-prose-pre-bg': 'transparent',
            '--tw-prose-th-borders': 'var(--text)',
            '--tw-prose-td-borders': 'var(--text)',
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  safelist: [
    'project-list',
    'publication-list',
    'bg-secondary',
    'text-text',
  ],
}