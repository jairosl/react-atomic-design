import styled from 'styled-components';

export const Container = styled.div`
  .wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    main { 
      margin-top: -46px;
      width: 1120px;

      .card + .card {
        margin-top: 8px;
      }
    }
  }
`;
