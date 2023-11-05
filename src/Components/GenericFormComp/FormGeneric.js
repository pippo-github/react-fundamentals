/* eslint-disable */
import { useState, useRef } from "react";
import '../css/formControl.css'
import MakeUI from './makeUI'

const FromComponent = () => {

    const [dataSend, setDataSend] = useState(false)
    
    const sendData = (e) =>{
        e.preventDefault();

        setValoriGenerica({...valoriGenerici })
        const { title, textDescription, urlImg }  = valoriGenerici; 

        out_title_element.current.innerText = "Title: " + title;
        out_desc_element.current.innerText = "Description: " + textDescription;
        out_urlImg_element.current.innerText = "Img url: " + urlImg;

        title_element.current.value = ''
        desc_element.current.value = ''
        urlImg_element.current.value = ''

        setDataSend(true);
    }

    const generiFuncToGetData = (e) => {
        let name = e.target.name
        let value = e.target.value
        setValoriGenerica({...valoriGenerici, id: new Date().getTime().toString(), [name]:value })
    }
    
    const [valoriGenerici, setValoriGenerica] = useState([]);
    const [title, setTitle] = useState('title');
    const [desc, setDesc] = useState("description");
    const [imgUrl, setImgUrl] = useState('https://example.com/image/file.jpeg');

    const title_element = useRef(null);
    const desc_element = useRef(null);
    const urlImg_element = useRef(null);

    const out_title_element = useRef(null);
    const out_desc_element = useRef(null);
    const out_urlImg_element = useRef(null);

    return(
        <MakeUI sendData={sendData} 
                generiFuncToGetData={generiFuncToGetData} 
                title_element={title_element} 
                title={title} 
                desc_element={desc_element}
                desc={desc}
                urlImg_element={urlImg_element}
                imgUrl={imgUrl}
                dataSend={dataSend}
                out_title_element={out_title_element}
                out_desc_element={out_desc_element}
                out_urlImg_element={out_urlImg_element}
        />
    )
}

export default FromComponent