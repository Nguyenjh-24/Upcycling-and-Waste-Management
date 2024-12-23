import * as THREE from 'three';
import * as React from 'react';
import { ReactThreeFiber } from '@react-three/fiber';
import { ForwardRefComponent } from '../helpers/ts-utils';
declare global {
    namespace JSX {
        interface IntrinsicElements {
            positionMesh: ReactThreeFiber.Object3DNode<PositionMesh, typeof PositionMesh>;
        }
    }
}
type Api = {
    getParent: () => React.MutableRefObject<InstancedMesh>;
    subscribe: <T>(ref: React.MutableRefObject<T>) => void;
};
export type InstancesProps = JSX.IntrinsicElements['instancedMesh'] & {
    context?: React.Context<Api>;
    range?: number;
    limit?: number;
    frames?: number;
};
export type InstanceProps = JSX.IntrinsicElements['positionMesh'] & {
    context?: React.Context<Api>;
};
export type InstancedAttributeProps = JSX.IntrinsicElements['instancedBufferAttribute'] & {
    name: string;
    defaultValue: any;
    normalized?: boolean;
    usage?: number;
};
type InstancedMesh = Omit<THREE.InstancedMesh, 'instanceMatrix' | 'instanceColor'> & {
    instanceMatrix: THREE.InstancedBufferAttribute;
    instanceColor: THREE.InstancedBufferAttribute;
};
export declare class PositionMesh extends THREE.Group {
    color: THREE.Color;
    instance: React.MutableRefObject<THREE.InstancedMesh | undefined>;
    instanceKey: React.MutableRefObject<JSX.IntrinsicElements['positionMesh'] | undefined>;
    constructor();
    get geometry(): THREE.BufferGeometry | undefined;
    raycast(raycaster: THREE.Raycaster, intersects: THREE.Intersection[]): void;
}
export declare const Instance: React.ForwardRefExoticComponent<Omit<InstanceProps, "ref"> & React.RefAttributes<unknown>>;
export declare const Instances: ForwardRefComponent<InstancesProps, THREE.InstancedMesh>;
export interface MergedProps extends InstancesProps {
    meshes: THREE.Mesh[];
    children: React.ReactNode;
}
export declare const Merged: ForwardRefComponent<any, THREE.Group>;
export declare function createInstances<T = InstanceProps>(): readonly [React.ForwardRefExoticComponent<Omit<InstancesProps, "ref"> & React.RefAttributes<THREE.InstancedMesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>>, React.ForwardRefExoticComponent<React.PropsWithoutRef<T & Omit<ReactThreeFiber.ExtendedColors<ReactThreeFiber.Overwrite<Partial<PositionMesh>, ReactThreeFiber.NodeProps<PositionMesh, typeof PositionMesh>>>, ReactThreeFiber.NonFunctionKeys<{
    position?: ReactThreeFiber.Vector3;
    up?: ReactThreeFiber.Vector3;
    scale?: ReactThreeFiber.Vector3;
    rotation?: ReactThreeFiber.Euler;
    matrix?: ReactThreeFiber.Matrix4;
    quaternion?: ReactThreeFiber.Quaternion;
    layers?: ReactThreeFiber.Layers;
    dispose?: (() => void) | null;
}>> & {
    position?: ReactThreeFiber.Vector3;
    up?: ReactThreeFiber.Vector3;
    scale?: ReactThreeFiber.Vector3;
    rotation?: ReactThreeFiber.Euler;
    matrix?: ReactThreeFiber.Matrix4;
    quaternion?: ReactThreeFiber.Quaternion;
    layers?: ReactThreeFiber.Layers;
    dispose?: (() => void) | null;
} & import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers & {
    context?: React.Context<Api>;
}> & React.RefAttributes<PositionMesh & T>>];
export declare const InstancedAttribute: React.ForwardRefExoticComponent<Omit<InstancedAttributeProps, "ref"> & React.RefAttributes<unknown>>;
export {};
