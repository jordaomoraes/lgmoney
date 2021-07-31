import styled from "styled-components";

export const Container = styled.div`
//usando grid pois os componentes são do mesmo tamanho ou flex
display: grid;
//grid-template-columns: 1fr 1fr 1fr é a mais coisa que a linha abaixo
grid-template-columns: repeat(3, 1fr);
gap:2rem;
margin-top: -10rem;

div{
  background: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color:var(--text-title);

  header{

    display: flex;
    align-items: center;
  
    justify-content: space-between;
  }

  strong{

    display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
    
    
    }

    &.destaque-fundo{

      background: var(--green);
      color:#fff
    }
}


`;