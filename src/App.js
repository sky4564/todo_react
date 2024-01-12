// import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';

import Renderer from './comp/Renderer'
// import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
 

function App() {
    useEffect(() => {
        console.log('mounted!')        
    })
    return (
    <div className="App">
    <Renderer/>
    </div>    
    );
}


export default App;
