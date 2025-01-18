import { Cards } from "./components/cards";
import { HomeCardStyle } from "./styles";

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <HomeCardStyle>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </HomeCardStyle>
    </>
    
  )
}