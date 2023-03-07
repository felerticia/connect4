import './DropZone.css'
import { size } from '../constants/constants'
import ActiveMarble from './ActiveMarble'
import { useState } from 'react';

const DropZone = () => {

    const [turn,setTurn] = useState(1)
    const [dropped,setDropped] = useState([
    //   {x:6, y:0, player:1},
    //   {x:6, y:1, player:2},
    //   {x:6, y:4, player:1},
    //   {x:5, y:4, player:1},
    //   {x:4, y:4, player:1},
    ])

    return <div className="drop-zone">
        {dropped.map((m,i) => 
            <div key={i} 
                className={`p${m.player}`}
                style={{transform:`translate(${m.y*size}px,${m.x*size+150}px)`}}>
            </div>
        )}
        <ActiveMarble dropped={dropped} turn={turn} setDropped={setDropped} setTurn={setTurn} />
    </div>     
}

export default DropZone