/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useRef } from "react";
import deleteElement from "./utilities_js/deleteElement";
import sendData from "./utilities_js/sendData";
import addData from "./utilities_js/addData";
import getData from "./utilities_js/getData";
import getValues from "./utilities_js/getValues";
import MakeFormHtml from "./MakeFormHtml";
import IntroTextComp from "./IntroTextComp";
import {textNpmSintax, textPackageJsonSintax} from './utilities_js/stringText'
import './css/Component.css'

const FormInput = ({showHide}) => {
  const inputOne = useRef(null);
  const inputTwo = useRef(null);
  const inputThree = useRef(null);

  const [inserimentoForm, setInserimentoForm] = useState({});
  const [inserimentiForm, setInserimentiForm] = useState([]);

  useEffect(() => {
    getData(setInserimentiForm); // previene loop infinito
  }, []);

  // gli attributi "name" del from devono corrispondere con quelli
  // del file JSON altrimenti la funzione generica per prendere
  // l'input non funzionara' correttamente

      return (

          <MakeFormHtml showHide={showHide} 
                        sendData={sendData} 
                        setInserimentiForm={setInserimentiForm} 
                        inserimentiForm={inserimentiForm}
                        addData={addData}
                        inputOne={inputOne}
                        inputTwo={inputTwo}
                        inputThree={inputThree}
                        getValues={getValues}
                        inserimentoForm={inserimentoForm}
                        setInserimentoForm={setInserimentoForm}
                        deleteElement={deleteElement}

        />
    );
};

const FormRestAPI = () => {
 const [showForm, setShowForm] = useState(false)

  return (
    <IntroTextComp  textNpmSintax={textNpmSintax}
                    textPackageJsonSintax={textPackageJsonSintax}
                    showForm={showForm}
                    setShowForm={setShowForm} 
                    FormInput={FormInput}                   
    />
  );
};

export default FormRestAPI;