// import './css/Component.css'

const IntroTextComp = ({  textNpmSintax,
                          textPackageJsonSintax,
                          showForm,
                          setShowForm,
                          FormInput}) =>{
return(
        <div>
           <h1>Rest API page, fake JSON server</h1>
  
            <p>
              This page allows you to view the contents of the file: "db.json" used by the third-party "json-server" library, which allows, through the fake server backend, to add or remove entries from the archive used to create a REST API .        </p>
            <p>
              The server intercepts and handles HTTP requests for the following verbs: "GET", "POST", "PATCH", "PUT" and "DELETE".
            </p>
            <p>
              In the example of this page we only use: "GET", "POST", and "DELETE", as the contents are taken, added or removed from the "db.json" file.
            </p>
    
            <p>
              The server must be installed, configured in the "package.json" file in the "scripts" section, and in running state, to activate it follow the instructions below:
            </p>
    
  
              <div className="my_style_div">
                  
                  <div className="my_style_label" > NPM syntax </div>
                  <div> 
                      <pre style={{color: "green"}}>
      
                          { textNpmSintax }
      
                      </pre> 
      
                  <div className="my_style_label"> package.json syntax </div>
      
                      <pre style={{color: "green"}}>
      
                          { textPackageJsonSintax }
      
                      </pre> 
      
                  </div>
              </div>
      
  
              <button   className={ showForm ? 'btn btn-secondary mt-4 mb-4' : 'btn btn-danger mt-4 mb-4' } onClick={ () => setShowForm(!showForm) }> {showForm ? "hide form" : "insert data"  } </button>
              <FormInput showHide={showForm}/> 
      </div>
  )
}

export default IntroTextComp;