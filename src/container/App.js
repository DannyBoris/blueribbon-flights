import "../App.css";
import Main from "./Main";
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from "../store/";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={1}>
        <Router>
          <div className="App">
            <Main />
          </div>
        </Router>
      </SnackbarProvider>
    </Provider>
  );
}

export default App;
