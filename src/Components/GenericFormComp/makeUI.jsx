const MakeUI = ({   sendData, generiFuncToGetData, title_element, 
                    title, desc_element, desc, urlImg_element, imgUrl, 
                    dataSend, out_title_element, out_desc_element, out_urlImg_element
                }) =>{
 return (

    <div>

            <h1>
                Form component, generic function controll
            </h1>
            <p className='p-5'>
                This component shows how to manage all the controls of a form through a single generic function to check their status. 
            </p>

            <div style={{marginBottom: "77px"}}>
                <form className='from-group' onSubmit={ (e) => sendData(e) }> 
                    <label  
                            className='mt-3 form-control my_label' 
                            htmlFor="title"
                    >
                        Title
                    </label>

                    <input 
                            onChange={  generiFuncToGetData } 
                            className='form-control' 
                            ref={title_element} 
                            required 
                            type="text" 
                            name="title" 
                            id="title" 
                            placeholder={title}
                    />
                    
                    <label 
                            className='mt-3 form-control my_label' 
                            htmlFor="textDescription"
                    >
                            Description
                    </label>

                    <textarea  
                                onChange={  generiFuncToGetData } 
                                style={{maxHeight:"75px"}} 
                                className='form-control' 
                                ref={desc_element} 
                                required 
                                name="textDescription" 
                                id="textDescription" 
                                placeholder={desc} 
                                cols="30" 
                                rows="10"
                    ></textarea>
                    
                    <label 
                            className='mt-3 form-control my_label' 
                            htmlFor="urlImg"
                    >
                                Image url
                    </label>

                    <input 
                            onChange={ generiFuncToGetData } 
                            className='form-control' 
                            ref={urlImg_element} 
                            required 
                            type="text" 
                            name="urlImg" 
                            placeholder={imgUrl} 
                            id="urlImg"
                    />

                    <input 
                            className='form-control btn btn-primary mt-2 mb-2' 
                            type="submit" 
                            value="send data"
                    />

                </form>
            </div>

            <div>
                <h2> { dataSend ? "Output" : "" } </h2>
                <div ref={out_title_element}></div>
                <div ref={out_desc_element}></div>
                <div ref={out_urlImg_element}></div>
            </div>

    </div>
 )

}


export default MakeUI;