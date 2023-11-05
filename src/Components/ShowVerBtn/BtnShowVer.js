import React, { useState } from "react";
import  GetVer  from "../GetVerComponent/GetVersion";

const ShowVerBtn = () =>{

    const [showVer, setShowVer] = useState(false);

    return(
        <div>
                <button
                        className="btn btn-primary"
                        onClick={ () => { setShowVer(!showVer) }}
                        style={{fontFamily:"monospace"}}
                >
                    {showVer ? "hide version" : "show version"}
                </button>
                { showVer &&
                            (
                            <div>
                                <span>React Version: </span> <GetVer/>
                            </div>
                            )
                }
        </div>
    )
}

export default ShowVerBtn