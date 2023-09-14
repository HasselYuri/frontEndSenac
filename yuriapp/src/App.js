import {
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom"; //Sempre precisa importar!!
import "./App.css";
import PaginaInicial from "./screens/PaginaInicial";
import PaginaContato from "./screens/PaginaContato";

//Criando o Router
const router = createBrowserRouter([
  {
    path: "*",
    Component: RootNavigation,
    errorElement
  },
]);

function App() {
  return (
    <div className="App">
      {/* <h1>meu app em react</h1><p></p><Relogio></Relogio> */}
      <RouterProvider router={router} />
    </div>
  );
}

function RootNavigation() {
  return (
    <Routes>
      <Route path="/" element={<PaginaInicial />}></Route>
      <Route path="/contato" element={<PaginaContato />}></Route>
    </Routes>
  );
}

export default App;
