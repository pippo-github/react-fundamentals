/* eslint-disable */
import React from "react";
import BlocchiAbout from '../../Dati/datiAbout'
import MakeIframe from "./IframeComp";
import MakeBlock from "./MakeBlockComponent";
import MakeText from "./MakeText";
import Btn from "./BtnClassComponent";
import '../css/About.css'


/* 
google map e' diventato a pagamanto anche se offre $300 a chi utilizza il servizio come nuovo chilente PER ORA !!!
Qui ho deciso di utilizzare dei provider diverso come:

mapquest


richiede:
npm install google-maps-react@2.0.6 -- rimosso non mi piace l'idea che e' a pagamento!

abilitare Maps JavaScript API a questa url:

https://console.cloud.google.com/apis/library/maps-backend.googleapis.com?q=Google%20Maps%20JavaScript%20API&id=fd73ab50-9916-4cde-a0f6-dc8be0a0d425&project=windy-furnace-180806 


Google Maps API guide: https://developers.google.com/maps/documentation/javascript/get-api-key​
Find your latitude and logitude: http://www.latlong.net/
*/

class About extends React.Component {
  
  constructor() {
    super()
    this.state = {showMsg: true};
   }
  
  componentDidMount(){
    console.log("componentDidMount");
  }
  componentDidUpdate(){
    console.log("componentDidUpdate");
  }
  componentWillUnmount(){
    console.log("componentWillUnmount");
  }
  
      render() {  

          const ClassComp = () =>
          (
            <div>
                <h2>
                  class component 
                </h2>
                    {  this.state.showMsg && "Stato componente principale == true"  }
                    <Btn labelBtn={"cambia valore allo stato del compnente Btn"}/>
            </div>
          )

            return (
              <div className='container'>
                { MakeText() }
                { MakeBlock(BlocchiAbout) }
                { MakeIframe }

                { <ClassComp/> }

              </div>
            );
      }
}

export default About;