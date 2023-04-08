import { ContactShadows, Environment, Float, Html, PresentationControls, useGLTF, Text } from '@react-three/drei'
import React, { useRef } from 'react'
// import { useControls } from 'leva'
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing'
// import { Perf } from 'r3f-perf'

const Exp = () => {

    // MODEL IMPORT ------------------------------------------------
    const obj = useGLTF('./assets/model.gltf')

    const rectLightRef = useRef()
    // useHelper(rectLightRef, RectAreaLightHelper, 5)

    // {"position":{"x":0.10999999999999995,"y":1.4500000000000008,"z":-2.0100000000000033}}
    // const positions = useControls({
    //     position: {
    //         value: { x: 0.10999999999999995, y: 1.4500000000000008, z: -2.0100000000000033 },
    //         step: 0.01
    //     }
    // })
    // const distF = useControls({
    //     dist: {
    //         value: 1.33,
    //         step: 0.01
    //     }
    // })
    // const rotation = useControls({
    //     rotX: {
    //         value: -0.3,
    //         step: 0.01
    //     }
    // })
    // const lightControl = useControls({
    //     color: "#00E9FE",
    //     height: 3.2,
    //     width: 5.2,
    //     intensity: 50
    // })
    return (
        <>
            {/* <Perf position="top-left" /> */}
            <color args={["#055055"]} attach={"background"} />
            <Environment preset='city' />
            <EffectComposer>
                <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={300} />
                <Vignette eskil={false} offset={0.1} darkness={1} />
                {/* <ambientLight intensity={1} /> */}
                <PresentationControls
                    global
                    config={{ mass: 2, tension: 400 }}
                    snap={{ mass: 4, tension: 400 }}
                    rotation={[0.4, 0.3, 0]}
                    polar={[-0.2, 0.1]}
                    azimuth={[-0.3, 0.3]}>

                    <Float rotationIntensity={0}>
                        <rectAreaLight ref={rectLightRef} rotation={[0, Math.PI, 0]} position={[0.10999999999999995, 1.4500000000000008 - 1, -2.0100000000000033 + 0.5]} color={"#00E9FE"} width={5.2} height={3.2} intensity={50} />
                        <primitive
                            object={obj.scene}
                            position-y={-1.7}
                            scale={1.5}>

                            <Html transform wrapperClass='htmlScreen' distanceFactor={1.33} rotation-x={-0.3} position={[0.10999999999999995, 1.4500000000000008 , -2.0100000000000033]}>
                                <iframe src='https://shaileshp.me/portfolio' />
                            </Html>
                        </primitive>
                        <Text 
                            color={"#00E9FE"}
                            font='./assets/Satisfy/Satisfy-Regular.ttf'
                            textAlign='center'
                            fontSize={1}
                            maxWidth={2}
                            rotation-y={-Math.PI/2}
                            position={[3,0,0]}>
                                    Shailesh Paliwal</Text>
                    </Float>
                </PresentationControls>
                <ContactShadows position-y={-2.4} opacity={0.4} scale={10} blur={5} />
            </EffectComposer>
        </>
    )
}

export default Exp