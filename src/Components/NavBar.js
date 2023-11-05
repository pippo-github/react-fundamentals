/* 
Richiede
$npm i react-router-dom
*/

import Developers from "./DeveloperComponent/Developers";
import HomeComponent from "../Components/HomeComponent/HomeComponent";
import ErrorMsgComponent from "./ErrorComp/ErrorMsgComponent";
import FormGeneric from "./GenericFormComp/FormGeneric";
import FormSpecific from '../Components/FormSpeficiComp/FormSpecific';
import ClickDiff from "../Components/ClickDiffComp/ClickDiff";
import About from "../Components/AboutComponent/About";
import RestApi from "./FormRestAPIComp/FormRestAPI";

import './css/NavBar.css'
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const NavBar = () => {
    return(
        <div>

        <Router>
 
                <div>                     
                    <ul className='navBarElements'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/formGenericFun'>Create from1</Link></li>
                        <li><Link to='/formSpecificFun'>Create form2</Link></li>
                        <li><Link to='/clickDiff'>Click diff</Link></li>
                        <li><Link to='/restAPI'>Rest API</Link></li>
                        <li><Link to='/developer'>Developers</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </div>


            <Switch>

            <Route exact path='/restAPI'>
                    <RestApi></RestApi>
            </Route>

                <Route exact path= '/developer' >
                    <Developers></Developers>
                </Route>

                <Route exact path='/'>
                    <HomeComponent></HomeComponent>
                </Route>
               
                <Route exact path='/formGenericFun'>
                    <FormGeneric/>
                </Route>
               
                <Route exact path='/formSpecificFun'>
                    <FormSpecific/>
                </Route>
               
                <Route exact path='/ClickDiff'>
                    <ClickDiff/>
                </Route>
               
                <Route exact path='/about'>
                        <About/>
                </Route>
               
                <Route path="*">
                        <ErrorMsgComponent/>
                </Route>

            </Switch>
        </Router>
        </div>
    )

}

export default NavBar