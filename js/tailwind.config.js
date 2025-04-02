tailwind.config = {
  theme: {
    extend: {
      boxShadow: {
        header: '0 4px 94px 0 rgba(0, 0, 0, 0.1)',
        'goods-card': '0 4px 94px 0 rgba(0, 0, 0, 0.1), 0 0 5px 0 rgba(0, 0, 0, 0.05)'
      },
      colors: {
        blue: {
          normal: '#262267'
        },
        gray: {
          light: '#EEEEEE',
          normal: '#BCBCBC',
          dark: '#F3F3F3',
        }
      },
      screens: {
        sm: '370px',
        md: '687px',
        lg: '1250px',
        xl: '1750px',
      },
      container: {
        center: true,
        screens: {
          sm: '370px',
          md: '687px',
          lg: '1250px',
          xl: '1750px',
        },
      },
    }
  }
}