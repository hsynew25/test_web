import Router from "./components/router";
import GlobalStyles from "./components/globalStyles";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <div className="App">
      <CookiesProvider>
        <Router />
        <GlobalStyles />
      </CookiesProvider>
    </div>
  );
}

export default App;
