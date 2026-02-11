/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0047AB', // 建筑蓝
        secondary: '#F97316', // 活力橙
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        zhuxuetai: {
          primary: '#0047AB',
          secondary: '#F97316',
          accent: '#10B981',
          neutral: '#1F2937',
          'base-100': '#FFFFFF',
          info: '#0047AB',
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
        },
      },
    ],
    defaultTheme: 'zhuxuetai',
  },
}
