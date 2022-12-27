import React from 'react';
import "App.css";
import Nav from './components/Navbar/Navbar';
import SceneComponent from './components/SceneComponent/SceneComponent';
import { onSceneReady, onRender } from './components/SampleBabylonScene/SampleBabylonScene';

const App = () => (

    <>
        <Nav />
        <div id="main">
            <SceneComponent antialias onSceneReady={onSceneReady} onRender={onRender} id='my-canvas' />
        </div>

    </>

)


export default App;

