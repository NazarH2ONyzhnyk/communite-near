module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      colors: {
        blue: {
          900: "#212353",
        },
        red: {
          500: '#DB2828',
        }
      },
      width: {
        '50': '50px',
        '61': '60px',
        '64': '64px',
        '376': '376px',
      },
      height: {
        '30': '30px',
        '50': '50px',
        '64': '64px',
        '140': '140px',
      }
    },
  },
  variants: {
    extend: {
      scale: ['active'],
    },
  },
  plugins: [],
}
