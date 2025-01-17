import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      white: '#fff',
      white500: '#FFFAFF',

      black500: '#1B1B1E',
      black800: '#011627',
      black900: '#0F0F0F',

      gray100: '#F8F1FF',
      gray900: '#656176',

      black: '#040303',

      lightGreen200: '#9FD356',

      green500: '#00CECB',
      green900: '#042A2B',


      blue200: '#5C95FF',
      blue500: '#3E78B2',
      blue900: '#2E294E',

      oxfordBlue500: '#0A1128',

      violetBlue500: '#3943B7',
      violetBlue800: '#8963BA',
      violetBlue900: '#54428E',

      red500: '#D52941',
      red600: '#DB2B39',
      red700: '#D8315B',


      yellow500: '#FCD581',
      yellow900: '#FFE74C',

      lightYellow200: '#EEFC57',
      lightYellow500: '#FBFF12',
      
      purple500: '#4C2C69',
      purple900: '#6320EE'

    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    }
  }
})