import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/home'
import Filme from './pages/filme'
import Favoritos from './pages/favoritos'

const Routes = () => {
    return(
        <BrowserRouter>
        <Header />
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path="/filme/:id" component={Filme}></Route>
                <Route exact path="/favoritos" component={Favoritos}></Route>
            </Switch>
        </BrowserRouter>
    )
}  

export default Routes