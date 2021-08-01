import styled from "styled-components";

export const Container = styled.div`

margin-top: 3rem;

table{

  width: 100%;
  //espaçamento dos itens da tabela
  border-spacing: 0 0.5rem;

  th{

    color:var(--blue-body);
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }

  td{

    padding: 1rem 2rem;
    border: 0;
    background: var(--shape);
    font-weight: 400;
    color:var(--blue-body);
    border-radius: 0.25rem;

    &:first-child{
      color:var(--text-title);
      font-weight: 500;

    }

    &.deposito{
      color:var(--green);

    }
    &.retirada{

      color:var(--red)
    }
  }

}

`;