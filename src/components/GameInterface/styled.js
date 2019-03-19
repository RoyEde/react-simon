import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 6rem);
  grid-template-rows: repeat(4, 6rem);
  overflow: hidden;
`;

export default { Container };
