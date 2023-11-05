import React from 'react'
const MakeBlock = (BlocchiAbout) =>{
    return(
      <div id="grigImg" className='mt-5' >
        {
          BlocchiAbout.map( (block, idx) =>{
  
                const {id, title, parag, imgUrl} = block
  
                if(idx % 2 === 0)
                  return(
                    <React.Fragment key={id}>
                      <div><img src={imgUrl} className='mt-5' alt="" /></div>
                          <div className='paragrafoImg mt-5'>
                              <h3 className='mb-5'>
                                { title }
                              </h3>
                              <p style={{maxWidth: "520px", textAlign: "center"}}>{ parag }</p>
                          </div>
                    </React.Fragment>                
                )
  
                if(idx % 2 !== 0)
                return(
                  <React.Fragment key={id}>
                        <div className='paragrafoImg mt-5'>
                            <h3 className='mb-5'>
                              { title }
                            </h3>
                              { <p style={{maxWidth: "520px"}}>{ parag }</p> }
                        </div>
                        <div><img src={imgUrl} className='mt-5' alt="" /></div>
                  </React.Fragment>                
                )
                return block;
          })
        }
      </div>
    )
  }
export default MakeBlock;