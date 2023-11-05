const iFrameUrl = "https://www.mapquest.com/embed/near-40.71018238104457,13.914270401000977?center=40.709531765423854,13.912210464477539&zoom=14&maptype=map";

const MakeIframe = (iframeUrl) =>{

const my_style = {
    width: "100%",
    height: "500px",
    border: "#ffa solid 2px",
    margin: "44px 0",
    padding: "7px",
    borderRadius: "5px"
}

const ifStyle = {
    height:"100%", 
    width:"100%", 
    border:"0", 
    marginWidth:"0", 
    marginHeight:"0", 
}


  return(
    <div style={ my_style }>
      <iframe 
              title="mappa" 
              style={ifStyle}
              src={iFrameUrl}
        >     
      </iframe>
    </div>
  )
}


export default MakeIframe(iFrameUrl);