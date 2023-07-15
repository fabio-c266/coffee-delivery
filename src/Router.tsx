import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { Success } from './pages/Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/checkout" Component={Checkout} />
      <Route path="/success" Component={Success} />
    </Routes>
  )
}
