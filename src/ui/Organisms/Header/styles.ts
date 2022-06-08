import styled from 'styled-components';

export const ContainerUI = styled.div`
  width: 100%;
  height: 280px;
  background: var(--purple-700);
  

  header { 
    max-width: 1120px;
    margin: 0 auto;
  }
`

export const HeaderUI = styled.header`
  div.state-session, div.summary-session {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div.state-session {
    height: 104px;
    border-bottom: 1px solid var(--purple-650);
    margin-bottom: 2rem;
  }

  div.total-hours-free {
    display: flex;
    align-items: end;

    span { 
      margin-right: 0.625rem;
    }
  }

  div.containerIcon {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

export const Icon = styled.span`
  padding: 0.25rem;
  display: flex;
  align-items: center;  
  border-radius: 5px;

  background: rgba(252, 253, 255, 0.1);

`