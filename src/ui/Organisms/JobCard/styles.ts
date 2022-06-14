import styled from 'styled-components';

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  background: var(--white-50);
  border-radius: 5px;
  border: 1px solid var(--gray-100);
  padding: 2rem;
  max-width: 1120px;


  #job-button-control,
  #id-and-title-job {
    display: flex;
    align-items: center;
  }

  #id-and-title-job {
    gap: 2rem;
    width: 364px;
  }

  #job-button-control {
    gap: 0.5rem;
  }

  .button-controls-base {
    border: 1px solid var(--gray-100);
    height: 40px;
    width: 40px;
  }
`;
