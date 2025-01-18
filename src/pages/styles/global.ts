import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$black',
    color: '$gray100',
    maxWidth: 1280,
    padding: 10,
    margin: '0 auto'
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400
  }
})