import "./styles.css";
import Header from "./containers/Header";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />

      
      <Switch>     
      <Route path="/" exact component={ProductListing} />
      <Route path="/product/:productId" exact component={ProductDetail} />
      <Route> 404 not Found </Route>
      </Switch>
      
      
      </BrowserRouter>
    </div>
  );
}
