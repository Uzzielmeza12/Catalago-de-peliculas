import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LadingPage } from "../pages/LadingPage";
import {MovieDetails} from "../pages/MovieDetails";
export function MyRoutes(){
    return(
        <Router>
            <Routes>
              <Route exact path="/" element={<LadingPage/>}/> 
              <Route exact path="/movies/:movieid" element={<MovieDetails/>}/> 
            </Routes> 
        </Router>            
    )
}

