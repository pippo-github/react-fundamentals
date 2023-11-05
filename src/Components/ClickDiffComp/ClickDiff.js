/* eslint-disable */
import { useState } from "react";
import IntroBlock from "./IntroBlock";
import {textFunAsync, textFunSync} from './SyntaxText'
import SyntaxBlock from './SyntaxBlock'
import "./styleClickDiffCmp.css"

const ClickDiff = () =>{

    const [stateBtnSyns, setStateBtnSyns] = useState(0)
    const [stateBtnAsyns, setStateBtnAsyns] = useState(0)

    const clickAsync = () => {
        setTimeout( () =>{
            setStateBtnAsyns( (stateBtnAsyns) =>{ return stateBtnAsyns + 1 })
        }, 2000)
    } 

    const  clickSync = () => {
        setTimeout( () =>{
            setStateBtnSyns( stateBtnSyns + 1)
        }, 2000)
    }

    return(
        <div>
            <IntroBlock />
            <div className='row'>
                <SyntaxBlock countState={stateBtnSyns}  btnLab='btn sync event' functionName={clickSync} textFunSyntax={textFunSync}/>
                <SyntaxBlock countState={stateBtnAsyns} btnLab='btn async event' functionName={clickAsync} textFunSyntax={textFunAsync}/>
            </div>            
        </div>
    )
}
export default ClickDiff
