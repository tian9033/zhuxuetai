/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // 教育蓝
        secondary: '#F97316', // 活力橙
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        zhuxuetai: {
          primary: '#3B82F6',
          secondary: '#F97316',
          accent: '#10B981',
          neutral: '#1F2937',
          'base-100': '#FFFFFF',
          info: '#3B82F6',
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
        },
      },
    ],
    defaultTheme: 'zhuxuetai',
  },
}
