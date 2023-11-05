import OutputBox from "./OutputBoxComp";

const MakeFromHtml = ( {showHide,
                        sendData,
                        setInserimentiForm,
                        inserimentiForm,
                        addData,
                        inputOne,
                        inputTwo,
                        inputThree,
                        getValues,
                        inserimentoForm,
                        setInserimentoForm,
                        deleteElement}) =>{

  return(
      <div>
        <div className='mt-0' style={{ display: showHide ? "block" : "none" }}>
                
          <h1>Create elements, form</h1>

          <form 
                      className="form-group"
                      onSubmit={(event) => {
                          sendData(event, setInserimentiForm, inserimentiForm, inserimentoForm, addData, inputOne, inputTwo, inputThree);
                      }}
              >
                  <label className="form-control mb-1" htmlFor="nome">
                      Nome
                  </label>

                  <input
                          pattern="[^\s][A-Za-z\s]{2,}"
                          onInvalid={(evento) => {
                          evento.target.setCustomValidity("only chars, minimum 3");
                          }}
                          onInput={(e) => e.target.setCustomValidity("")}
                          ref={inputOne}
                          placeholder="value 1"
                          onChange={(evento) => getValues(evento, setInserimentoForm, inserimentoForm)}
                          className="form-control mb-2"
                          type="text"
                          name="name"
                          id="nome"
                          required
                  />

                  <label 
                          className="form-control mb-1" 
                          htmlFor="cognome"
                  >
                      Cognome
                  </label>

                  <input
                          required
                          ref={inputTwo}
                          placeholder="value 2"
                          onChange={(evento) => getValues(evento, setInserimentoForm, inserimentoForm)}
                          className="form-control mb-2"
                          type="text"
                          name="prename"
                          id="cognome"
                  />

                  <label 
                          className="form-control mb-1" 
                          htmlFor="message"
                  >
                      message
                  </label>

                  <input
                          required
                          ref={inputThree}
                          placeholder="value 3"
                          onChange={(evento) => getValues(evento, setInserimentoForm, inserimentoForm)}
                          className="form-control mb-2"
                          type="text"
                          name="message"
                          id="message"
                  />

                  <button 
                          className="btn btn-success"
                  > 
                  send data 
                  </button>
                  
          </form>

        </div>
              <OutputBox setInserimentiForm={setInserimentiForm} inserimentiForm={inserimentiForm} deleteElementFunc={deleteElement} />
      </div>
  )
    
}


export default MakeFromHtml;