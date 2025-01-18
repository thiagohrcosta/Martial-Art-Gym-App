import { BannerContainer, HeroBackground } from "./bannerStyles";

import HeroImage from '../../../assets/img/femalegym.png'
import HeroJJ from '../../../assets/img/jiujitsuhero.png'
import Image from "next/image";
export function Banner() {
  return (
    <BannerContainer>
      <div>
        <h1>Get ready for your best version</h1>
        <p>Unleash Your Strength, Discipline, and Confidence in Every Move</p>
      </div>
      <div>
        <HeroBackground>
          <Image 
            width={750}
            height={530}
            src={HeroJJ}
            alt="Jiu-Jitsu"
            quality={100}
          />
        </HeroBackground>
      </div>
    </BannerContainer>
  )
}