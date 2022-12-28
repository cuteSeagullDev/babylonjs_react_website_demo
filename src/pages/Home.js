import React from 'react';
import SceneComponent from '../components/SceneComponent/SceneComponent';
import { onSceneReady, onRender } from '../components/SampleBabylonScene/SampleBabylonScene';



export default function Home() {
    return (
        <div id="main">
            <SceneComponent antialias onSceneReady={onSceneReady} onRender={onRender} id='my-canvas' />
        </div>
    )
}

