module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Inclui arquivos .ts e .tsx
  ],
  theme: {
    extend: {
      colors: {
        nav_light: '#2C3668', 
        dark_light: '#1A1A30',
        accets: '#FFF',
        botao: '#2C3668',
        hoverBorder: '#4E77B6',
        back: '#EBE8EA',
        txt: '#FFF',
        txt2: '#1A1A30',
        instagram: '#E4405F', 
        facebook: '#1877F2',  
        twitter: '#1DA1F2',

      },
      fontFamily: {
        name_logo: ['Anton SC', 'sans-serif'], // Usando a fonte Roboto
      },
      screens: {
        cell_m: '300px',
        cell: '390px',
        cell2: '639px',
        tela: '1800px',
        full: '4000px',
      },
    },
  },
  plugins: [],
};