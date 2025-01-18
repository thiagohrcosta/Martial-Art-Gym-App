import { Navbar } from "@/components/navbar";
import { Banner } from "./components/banner";
import { Cards } from "./components/cards";
import { HomeCardStyle } from "./styles";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <HomeCardStyle>
        <Cards 
          imgUrl={'https://images.unsplash.com/photo-1676220672943-5100a727ba36?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          title={'Jiu-Jitsu'}
        />
        <Cards 
          imgUrl={'https://images.unsplash.com/photo-1602827115209-0f49346b36b2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          title={'No-Gi'}
        />
        <Cards 
          imgUrl={'https://images.unsplash.com/photo-1676220672943-5100a727ba36?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          title={'Jiu-Jitsu'}
        />
        <Cards 
          imgUrl={'https://images.unsplash.com/photo-1602827115209-0f49346b36b2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          title={'No-Gi'}
        />
      </HomeCardStyle>
    </>
    
  )
}