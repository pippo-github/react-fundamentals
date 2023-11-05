const sendData = (e, setInserimentiForm, inserimentiForm, inserimentoForm, addData, inputOne, inputTwo, inputThree) => {
    e.preventDefault();
  
    setInserimentiForm([...inserimentiForm, inserimentoForm]);

    addData(inserimentoForm, setInserimentiForm);

    inputOne.current.value = "";
    inputTwo.current.value = "";
    inputThree.current.value = "";

  };


  export default sendData;
