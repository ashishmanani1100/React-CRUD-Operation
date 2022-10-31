import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Users from "./Components/Users/Users";
import { store } from "./Redux/Store/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Users />} />
      </Routes>
    </Provider>
  );
}

export default App;
