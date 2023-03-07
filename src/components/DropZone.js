import './DropZone.css'
import { size } from '../constants/constants'
import ActiveMarble from './ActiveMarble'

const DropZone = ({dropped,turn}) => {
    return <div className="drop-zone">
        {dropped.map((m,i) => 
            <div key={i} 
                className={`p${m.player}`}
                style={{transform:`translate(${m.y*size}px,${m.x*size+50}px)`}}>
            </div>
        )}
        <ActiveMarble turn={turn} />
    </div>     
}

export default DropZone