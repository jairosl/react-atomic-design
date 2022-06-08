import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  :root {
    --orange-50: #F1972C;

    --purple-250: #BFBFCC;
    --purple-500: #787880;
    --purple-600: #5A5A66;
    --purple-700: #41414C;

    --red-50: #FAECEB;
    --red-150: #EB3B35;

    --green-50: #E8F8E8;
    --green-400: #36B336;

    --white-50: #FCFDFF;
    --white-100: #F0F2F5;
    --white-150: #E1E3E5;

    --gray-100: #E1E3E6;

    --font-IBM: 'IBM Plex Sans, Helvetica, sans-serif';
    --font-Inter: 'Inter, Helvetica, sans-serif'

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; ;
  }

   html { 
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body { 
    background: var(--white-100);
    -webkit-font-smoothing: antialiased;
  }

`;