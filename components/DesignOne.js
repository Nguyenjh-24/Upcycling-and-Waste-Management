import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function DesignOne(props) {
  const { nodes, materials } = useGLTF('/tripo_pbr_model_0a9be6ea-dd45-43e1-8769-2440587749f7.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_0a9be6ea-dd45-43e1-8769-2440587749f7'].geometry}
        material={materials['tripo_material_0a9be6ea-dd45-43e1-8769-2440587749f7']}
      />
    </group>
  )
}

useGLTF.preload('/tripo_pbr_model_0a9be6ea-dd45-43e1-8769-2440587749f7.glb')
