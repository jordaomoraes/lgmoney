import styled from "styled-components";

export const Container = styled.header `

background: var(--blue);
`;
export const Content = styled.div `
max-width: 1200px;
//linha abaixo é para centralizar
margin: 0 auto;
padding: 2rem 1rem 12rem;
/* background: var(--red); */
//alinha ao centro e um do lado do outro
display: flex;
align-items: center;
//joga um pra cada lado da tela
justify-content: space-between;

button {
font-size: 1rem;
color:#fff;
background: var(--blue-light);
border: 0;
padding: 0 2rem;
border-radius: 0.25rem;
height: 3rem;
//aqui é quando o filter é aplicado, vai ter a transição
transition: filter 0.2s;

&:hover {

  filter: brightness(0.9)
}

}

`;