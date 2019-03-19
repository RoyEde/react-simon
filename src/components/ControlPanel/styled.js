import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  background-color: #ece7ee;
  border: 0.5rem solid #333;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  grid-area: 2 / 2 / 4 / 4;
  justify-content: space-around;
  padding: 1rem;
  z-index: 2;
`;

const RowContainer = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-around;
  margin-top: -0.5rem;
  width: 100%;
`;

const Sup = styled.sup`
  font-weight: 200;
  font-size: 1rem;
`;

const Title = styled.h1`
  font-family: 'Alfa Slab One', sans-serif;
`;

export default { Container, RowContainer, Sup, Title };
