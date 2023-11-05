const  {dati} = require('../../Dati/dataModuleFile');

const MakeBlock = () =>{

    const max_height = "100px";
    const max_width  = "100px";

    const cStyle = {
        width: max_width, 
        height: max_height
    }

    const iStyle = {
        marginTop: "11px", 
        marginLeft: "4px",
        width:"100%", 
        height:"100%"
    }

    return(
        <div>
        {
            dati.map(({ id, nome, cognome, eta, email, img_avatar, role }) => {
                console.log(img_avatar);
                return (
                    <div className="card card-body mt-2 bg-success"  key={id}>
                    <div className='row' style={{backgroundColor:"mediumseagreen"}}>

                        <div className='rounded-circle' style={cStyle}>
                            <img className='border border-solid rounded-circle'  src={img_avatar} style={iStyle} alt=""/>
                        </div>
                        <div className='col-9 text-white'>
                            <div>{nome.toLocaleUpperCase()}</div>
                            <div>{cognome.toLocaleUpperCase()}</div>
                            <div>{eta}</div>
                            <div>{email}</div>
                            <div><b><i className='text-secondary'>role:</i></b> {role} </div>
                        </div>
                    </div>
                    </div>
                );
            })
        }
    </div>
    )    
}

export default MakeBlock;