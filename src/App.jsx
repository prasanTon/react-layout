import {Route, Switch} from 'react-router-dom'
import About from './pages/About'
import Cart from './pages/Cart'
import Couter from './pages/Couter'
import Home from "./pages/Home"

const App = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/cart" component={Cart} />
      <Route path="/counter" component={Couter} />
    </Switch>
  )
}

export default App
