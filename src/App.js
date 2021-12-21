import './App.css';
import react,{useContext} from 'react';
import Store from './components/Store';
import ProductContextProvider from './context/ProductContextProvider';
import {SwitchCase , Route ,Redrict} from "react-router-dom"

function App() {
  return (
    <>
      <ProductContextProvider>
        <Switch>
          <Route path="/products" component={Store} />
        </Switch>

      </ProductContextProvider>
    </>
  );
}

export default App;
