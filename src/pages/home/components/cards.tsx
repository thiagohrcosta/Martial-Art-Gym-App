import { CardCallToActionContainer, CardContainer, CardDescription, CardStyles } from "./styles";

export function Cards() {
  return (
    <>
      <CardStyles>
        <CardContainer>
          <img 
            src="https://images.unsplash.com/photo-1676220672943-5100a727ba36?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          />
          <CardDescription>
            <h2>Jiu-Jitsu</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien ligula, 
              aliquet at congue sed, mollis eget turpis. Maecenas faucibus justo erat, 
              et finibus dui congue non. Aenean blandit venenatis quam at viverra. 
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