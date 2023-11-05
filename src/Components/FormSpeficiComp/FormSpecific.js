import { useState, useEffect, useRef } from "react";
import SpecificForm from './FormSpecificUI'
import '../css/formControl.css'

const FromComponent = () => {
    const my_style={
        background: "rgb(122 72 142)",
        padding: "7px"
    }

    const sendData = (e) =>{
        e.preventDefault();
        
        setObjData({ title, desc, imgUrl });
        setTitle("");
        setDesc("");
        setImgUrl("");

        setSubmitData(true);
    }

    const [title, setTitle] = useState('title');
    const [desc, setDesc] = useState("description");
    const [imgUrl, setImgUrl] = useState('https://example.com/image/file.jpeg');
    const [submitData, setSubmitData] = useState(false);
    const [objData, setObjData] = useState({});

    useEffect( () =>{
        document.getElementById("title").placeholder ='title';
        document.getElementById("textDescription").placeholder ='description';
        document.getElementById("urlImg").placeholder ='https://example.com/image/file.jpeg';

        if(submitData){

            title_element.current.style.color='white';
            title_element.current.style.backgroundColor='mediumseagreen';
            title_element.current.style.padding='3px';
    
            desc_element.current.style.color='white';
            desc_element.current.style.backgroundColor='mediumseagreen';
            desc_element.current.style.padding='3px';
    
            urlImg_element.current.style.color='white';
            urlImg_element.current.style.backgroundColor='mediumseagreen';
            urlImg_element.current.style.padding='3px';
        }


// desc_element
// urlImg_element
    },[submitData])
    
    const title_element = useRef(null);
    const desc_element = useRef(null);
    const urlImg_element = useRef(null);

    return(
        <SpecificForm   sendData={sendData}
                        setTitle={setTitle}  
                        title={title}
                        setDesc={setDesc}
                        desc={desc}
                        setImgUrl={setImgUrl}
                        imgUrl={imgUrl}
                        submitData={submitData}
                        my_style={my_style}
                        title_element={title_element}
                        objData={objData}
                        desc_element={desc_element}
                        urlImg_element={urlImg_element}
                        />
    )
}
export default FromComponent;