import { createRoot } from 'react-dom/client'

import reportWebVitals from './reportWebVitals'

import App from './app'
import GlobalStyling from './config/styles'

const rootElement = document.getElementById('root') as HTMLDivElement
const root = createRoot(rootElement)
root.render(
  <>
    {/** @ts-ignore */}
    <GlobalStyling />
    <App />
  </>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
