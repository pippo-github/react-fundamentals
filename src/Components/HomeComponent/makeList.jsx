import image from '../React.png'

const topicsApplication = ["component", "useState", "userEffect", "useRef", "events", "DOM elements styling", "form", "modules import/export", "elements iteration", "destructuring", "props && drilling props", "add/remove value from Rest API", "Fake backend JSON server"]


const makeList = (topicsApplication) =>{
    return(
        <ul className='m-5 mb-5' style={{ listStyle: "none", display:"flex", flexDirection:"column", justifyContent:"center", gap: "3px"}}>
        {
            topicsApplication.map( (element, idx) =>{
                return(
                    <li key={idx}> <img  style={{position: "relative", marginRight: "11px"}} width='16px' src={image} alt=""/> { element } </li>
                )
            })
        }
        </ul>
    )
}


export default makeList(topicsApplication);
;