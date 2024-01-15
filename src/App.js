import { Route, Routes} from "react-router-dom";
import Home from "./components/routes/home/home";
import NavigationBar from "./components/routes/navigationBar/navigationBar";
import SignIn from "./components/routes/signIn/signIn";


const Shop = () => {

  return (
    <div>
      Shop page
    </div>
  );
}

const App = () => {

  return (

    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />}/>
        <Route path="shop" element={<Shop />}/>
        <Route path="sign-in" element={<SignIn />}/>
      </Route>
    </Routes>
    
  );
}

export default App;
