// mostra i blocchi di sintassi per 
// la funzione async e sync relativa al click


const ButtonComponent = ({label, bntType, functionClick}) =>{ 
    return(
        <div>
            <button className={bntType} onClick={ functionClick }>{label}</button>
        </div>
    )
}


const SyntaxBlock = ({countState, btnLab, functionName, textFunSyntax}) =>{
    return(
        <div className='col-6 text-center mb-3'>
        <span>Sync count: </span>{ countState }
        <ButtonComponent bntType="btn btn-primary mt-4" label={btnLab}  functionClick={ () => {functionName()} }/>

        <div className="my_style_div">
            <div className= "my_style_label" > Syntax </div>
                <div> 
                    <pre style={{color: "green", minHeight: "222px"}}>
                        { textFunSyntax }
                    </pre> 
                </div>
            </div>
        </div>
    )
}


export default SyntaxBlock