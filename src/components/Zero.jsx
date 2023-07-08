/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 public/zero/scene.gltf -r public
Author: omninity (https://sketchfab.com/omninity)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/zero-zero-series-mega-man-x-dive-35ceef1fa7454737afb7e0da1cc99b4a
Title: Zero (Zero Series)- Mega Man X DiVE
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Zero(props) {
  const { nodes, materials } = useGLTF('/zero/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.Zero_MMZ} rotation={[-Math.PI / 2, 0, 0]} scale={0.8} />
    </group>
  )
}

useGLTF.preload('/zero/scene.gltf')