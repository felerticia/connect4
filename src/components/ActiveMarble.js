import { useEffect, useState } from "react";

const ActiveMarble = ({turn}) => {

    const [column,setColumn] = useState(0)

    const handleKeyDown = e => {
        if(e.keyCode === 37 && column > 0){
            setColumn(column-1)
        }
        else if(e.keyCode === 39 && column < 6){
            setColumn(column+1)
        }
        else if(e.keyCode === 32 || e.keyCode === 13){

        }
    }

    useEffect(() => {
        document.addEventListener("keyup", handleKeyDown, false);
        return () => document.removeEventListener("keyup", handleKeyDown);
    })

    return <div 
        className={`active p${turn}`} style={{marginLeft : column*100+'px'}}
    />
}

export default ActiveMarble