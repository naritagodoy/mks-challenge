import styled from "styled-components";

export const Banner = styled.div`
  padding: 3rem;
  background-color: #0f52ba;
  color: #ffffff;
`;

export const ContainerProducts = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-widht: 70%;
  margin: 1rem;
`;
export const ListProducts = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 2rem;
  width: 83%;
`;

export const ProductStyle = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  line-height: 1rem;
  border-radius: 2rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  flex: 1 1;
  align-items:center;

  h2 {
    font-size: 1rem;
    font-family: Montserrat;
    
    line height: 2rem;
    color: #2C2C2C;
    font-weight:400;
    flex-wrap: wrap;
  }
  img {
    width: 8rem;
  }

  p {
    font-size: 0.8rem;
  }
`;

export const LinkComprar = styled.footer`
  background-color: #0f52ba;
  display: inline-block;
  width: 8rem;
  text-align: center;

  padding: 1em;
  border-radius: 1rem;

  a {
    text-decoration: none;
    color: #ffffff;
  }
`;

export const FooterStyle = styled.div`
  background-color: #eeeeee;
  padding: 2rem;

  h2 {
    text-align: center;
    align-itens: center;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`;
