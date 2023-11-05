import React from 'react'

const OutputBox = (prop) => {
  console.log(prop);
  const {inserimentiForm}     = prop;
  const {setInserimentiForm}  = prop;

  return (
    <div>
        { (inserimentiForm.length) ? <h1>Output box</h1> : "" }
      <div>
        {inserimentiForm.map((e, idx) => {
          return (
            <React.Fragment key={idx}>
            <div  className="card card-body mb-2">
              
              <div>{e.name}</div>
              <div>{e.prename}</div>
              <div>{e.message}</div>

              <form onSubmit={(e) => e.preventDefault()}>
                <button
                  type="submit"
                  onClick={() => {
                    prop.deleteElementFunc(e.id, inserimentiForm, setInserimentiForm);
                  }}
                  className="btn btn-danger mt-3 mb-3"
                >
                  {" "} delete element {" "}
                </button>
              </form>
            </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};


export default OutputBox;