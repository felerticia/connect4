import './DropZone.css'
import { size } from '../constants/constants'

const DropZone = ({dropped,turn}) => {
    return <div className="drop-zone">
        {dropped.map((m,i) => 
            <div key={i} 
                className={`p${m.player}`}
                style={{transform:`translate(${m.y*size}px,${m.x*size+50}px)`}}>
            </div>)}
        <div className={`active p${turn}`}/>
    </div>     
}

export default DropZone