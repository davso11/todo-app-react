import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { StoreProvider } from './store/storeContext'
import { Toaster } from 'react-hot-toast'
import { App } from './App'
import './assets/main.css'

const root = createRoot(document.getElementById('root'))

const iconSetups = {
  color: 'white',
  className: '',
  title: 'Icône',
}

root.render(
  <StoreProvider>
    <IconContext.Provider value={iconSetups}>
      <Router>
        <App />
        <Toaster position="bottom-right" />
      </Router>
    </IconContext.Provider>
  </StoreProvider>
)
