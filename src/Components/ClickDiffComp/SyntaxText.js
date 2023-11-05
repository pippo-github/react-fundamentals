const textFunAsync = `
const clickAsync = () => {
    setTimeout( () =>{
        setStateBtnAsyns( (stateBtnAsyns) => {
            return stateBtnAsyns + 1
        })
    }, 2000)
}`

const textFunSync = `
const  clickSync = () => {
    setTimeout( () =>{
        setStateBtnSyns( stateBtnSyns + 1)
    }, 2000)
}`


export {textFunAsync}
export {textFunSync}