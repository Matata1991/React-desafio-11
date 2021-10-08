import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Contacto from "./components/Contacto";
import Nabvar from "./components/Nabvar";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ItemListContainer from "./containers/ItemListContainer";
import { useState, createContext } from "react";
import CartContextProvider from "./context/cartContext";


const categorias = [
  { id: 1, categoria: 'tortas', titulo: 'Torta Multicolor', descripcion: 'Torta de bizcochuelos de colores, cubierta con crema', precio: '1000', imagen:'https://www.bettycrocker.lat/wp-content/uploads/2020/12/BClatam-recipe-pastel-arcoiris.png'},
  { id: 2, categoria: 'tortas', titulo: 'Torta Chocolate', descripcion: 'Torta de bizcochuelo de chocolate, cubierta con chocolate', precio: '1500', imagen:'https://www.bettycrocker.lat/wp-content/uploads/2020/12/BClatam-recipe-pastel-de-chocolate-con-glaseado-de-chocolate.png'}    
]

export const ContextApp = createContext()

function App() {

  const [state, setState] = useState(categorias)

  function sttearstate(item){
    setState(item)
  }
  return (
    <>
      <CartContextProvider>
        <ContextApp.Provider value={ { state, sttearstate } } >
          <BrowserRouter>
            <Nabvar /> 
            <Switch>
              <Route exact path='/' component={ItemListContainer} />
              <Route exact path='/categoria/:idCategoria' component={ItemListContainer} />
              <Route exact path='/detalle/:id' component={ItemDetailContainer} />
              <Route exact path='/carrito' component={Cart} />
              <Route exact path='/contacto' component={Contacto} />
            </Switch>
          </BrowserRouter>
        </ContextApp.Provider>
      </CartContextProvider>
    </>  
  );
}


export default App;
