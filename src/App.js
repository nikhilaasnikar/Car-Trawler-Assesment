import "./App.css";
import ProductList from "./components/ProductList";
import productDetails from "./components/productDetails";
import { ThemeContextProvider } from "./Context/ThemeContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/details" component={productDetails} />
          </Switch>
        </Router>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
