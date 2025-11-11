import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'background': 'var(--background)',
        'foreground': 'var(--foreground)',
      },
      textColor: {
        'foreground': 'var(--foreground)',
        'background': 'var(--background)',
      },
      borderColor: {
        'border': 'var(--border)',
      },
    },
  },
  plugins: [],
};

export default config;