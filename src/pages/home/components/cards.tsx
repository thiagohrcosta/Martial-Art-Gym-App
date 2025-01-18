import Image from "next/image";
import { CardCallToActionContainer, CardContainer, CardDescription, CardStyles } from "./cardStyles";

import NoGi from '../../../assets/img/nogi.png'
import JiuJitsu from '../../../assets/img/jj.png'
interface CardProps {
  imgUrl: String,
  title: String
}

export function Cards({ imgUrl, title}: CardProps) {
  return (
    <>
      <CardStyles>
        <CardContainer>
          <Image
            width={100}
            height={100}
            src={title === 'No-Gi' ? NoGi : JiuJitsu}
            alt={title}
          />
          <CardDescription>
            <h2>{title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien ligula, 
              aliquet at congue sed, mollis eget turpis.
            </p>
            <CardCallToActionContainer>
              <button>See more</button>
            </CardCallToActionContainer>
          </CardDescription>
        </CardContainer>
      </CardStyles>
    </>
  )
}