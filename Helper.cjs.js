"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),r=require("@react-three/fiber");function t(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var u=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,u.get?u:{enumerable:!0,get:function(){return e[t]}})}})),r.default=e,Object.freeze(r)}var u=t(e);function n(e,t,...n){const c=u.useRef(),s=r.useThree((e=>e.scene));return u.useLayoutEffect((()=>{let r;if(e&&null!=e&&e.current&&t&&(c.current=r=new t(e.current,...n)),r)return r.traverse((e=>e.raycast=()=>null)),s.add(r),()=>{c.current=void 0,s.remove(r),null==r.dispose||r.dispose()}}),[s,t,e,...n]),r.useFrame((()=>{var e;null==(e=c.current)||null==e.update||e.update()})),c}exports.Helper=({type:e,args:r=[]})=>{const t=u.useRef(null),c=u.useRef(null);return u.useLayoutEffect((()=>{c.current=t.current.parent})),n(c,e,...r),u.createElement("object3D",{ref:t})},exports.useHelper=n;
