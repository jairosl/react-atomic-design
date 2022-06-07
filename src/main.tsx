import ReactDOM from 'react-dom/client'
import { GlobalStyle } from "./styles/global"

import { Router } from "./router";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyle />
    <Router />
  </>
)
