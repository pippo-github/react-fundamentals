import handleClick from "../HomeComponent/utilities_js/clickEvt";

const url1 = "https://reactjs.org/docs/getting-started.html";
const url2 = "https://en.wikipedia.org/wiki/React_(JavaScript_library)";

const makeBtn = () =>{
    return (
        <div style={{marginTop: "77px"}}>
            <button className='btn btn-primary'       onClick={ () => { handleClick(url1) }} >React offical documentation</button>
            <button className='btn btn-success ml-2'  onClick={ () => { handleClick(url2) }} >React on wikipedia</button>
        </div>
    )
}


export default makeBtn();