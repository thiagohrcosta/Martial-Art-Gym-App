import { styled } from "@stitches/react";

export const CardStyles = styled('div', {

})

export const CardContainer = styled('div', {
  maxWidth: 280,

  img: {
    width: 280,
    height: 440
  }
})

export const CardDescription = styled('div', {
  border: '1px solid $black500',
  background: '$black500',
  padding: 15,

  h2: {
    textAlign: 'center',
    color: '$gray200',
    marginBottom: 20,
  },

  p: {
    textAlign: 'justify',
    color: '$gray200',
    fontWeight: 'lighter'
  }
})

export const CardCallToActionContainer = styled('div', {
  button: {
    width: '100%',
    margin: '10px 0',
    padding: '10px',
    borderRadius: 8,
    border: 'none',
    background: '$lightGreen200',
    cursor: 'pointer',
    
    '&:hover': {
      opacity: '0.9'
    }
  }

})