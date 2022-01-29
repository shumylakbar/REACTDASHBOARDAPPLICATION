import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/sidebar";
import "./App.css"
import Home from "./pages/home/home";
import Userlist from "./pages/userlist/userlist";
import SimpleMap2 from "./components/map/map2";
import Datalog from "./components/datalog/datalog";
import Datalog2 from "./components/datalog/datalog2";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
   <Router>
     <Topbar/>
     <div className="container">
       <Sidebar/>
       <Switch>
         <Route exact path="/">
           <Home />
         </Route>
         <Route path="/users">
           <Userlist />
         </Route>
         <Route path="/map2">
           <SimpleMap2 />
         </Route>
         <Route path="/datalog">
           <Datalog />
         </Route>
         <Route path="/datalog2">
           <Datalog2 />
         </Route>
       </Switch>
     </div>
   </Router>
  );
}

export default App;
