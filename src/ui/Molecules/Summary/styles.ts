import styled from 'styled-components';

export const ContainerSummary = styled.div`
  display: flex;
  align-items: center;
  
  div { 
    text-align: left;
  }  

  div + div {
    margin-left: 40px;
  }
`;
