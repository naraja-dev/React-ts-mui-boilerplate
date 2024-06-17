import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Routers } from './Routes'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Provider } from "react-redux";
import { store } from './store';
import { ErrorBoundaries } from './components/ErrorBoundaries';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundaries>
      <Provider store={store}>
        <Routers />
      </Provider>
    </ErrorBoundaries>
  </React.StrictMode>,
)
