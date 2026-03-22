/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'primary-gradient':
          'linear-gradient(to right, #F6AA09, #b9ad47)',
        'secondary-gradient':
          'linear-gradient(to right, #E7AA26, #E7AA26)',
      },

      headingbgcolors: {
        heading: '#1e293b', // same as slate-800
        headingtextcolor:"F6AA09"
      },
    }
  },
  plugins: [],
};
