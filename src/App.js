import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import  Navigation from './routes/navigation/navigation.component';
import  Authentication from './routes/authentication/authentication.component';
import Shop from "./routes/shop/shop.component";


//  in this routing parent compo is navigation bar and its sibling is home and Shop
//  navigation + home give one page and navigation + shop other outlet varies in home and shp
// const App = () => {
//   return (
//     <Routes>
//     <Route path="/" element={ <Navigation />}>
//       <Route path="home" element={ <Home />}/>
//       <Route path="shop" element={ <Shop />}/>
//     </Route> 
//     </Routes>

//   );
// }



// this index make the navigation empty '/' merge with home directy
const App = () => {
  return (
    <Routes>
    <Route path="/" element={ <Navigation />}>
      <Route index element={ <Home />}/>
      <Route path="shop" element={ <Shop />}/>
      <Route path="auth" element={ <Authentication />}/>
    </Route> 
    </Routes>

  );
}
export default App;
