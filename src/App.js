import Navbar from "./Components/Navbar";
import MainRoutes from "./Pages/MainRoutes";
import Shoes from "./Pages/Shoes";
function App() {
  // DO NOT CHANGE/MODIFY this app-structure here
  return (
    <div data-cy="shoe-app">
      <Navbar />
     
      <MainRoutes />
    </div>
  );
}

export default App;
