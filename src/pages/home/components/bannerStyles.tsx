import { styled } from "@stitches/react";
import JiuJitsuBackground from "../../../assets/img/jj2.png"

export const BannerContainer = styled('div', {
  height: '75vh',
  backgroundSize: 'cover', 
  backgroundPosition: 'center', 
  padding: '20px 0',

  display: 'flex',
  alignItems: 'center',


  h1: {
    maxWidth: '75%',
    fontSize: 48,
    textTransform: 'uppercase',
    color: '$lightGreen200'
  },

  p: {
    margin: '15px 0',
    color: '$gray200',
    fontWeight: 'lighter'
  }
})
