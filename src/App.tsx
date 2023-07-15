import { Router } from './Router'
import { Header } from './components/Header'
import { CartContextProvider } from './contexts/Cart'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

export function App() {
  return (
    <div className="px-40">
      <BrowserRouter>
        <CartContextProvider>
          <Header />
          <Router />
        </CartContextProvider>
        <ToastContainer />
      </BrowserRouter>
    </div>
  )
}
