"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@babel/runtime/helpers/extends"),r=require("react"),t=require("three"),n=require("@react-three/fiber"),a=require("./shaderMaterial.cjs.js"),o=require("./Texture.cjs.js"),s=require("../helpers/constants.cjs.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function c(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})}})),r.default=e,Object.freeze(r)}var l=i(e),u=c(r),f=c(t);const v=a.shaderMaterial({color:new f.Color("white"),scale:new f.Vector2(1,1),imageBounds:new f.Vector2(1,1),resolution:1024,map:null,zoom:1,radius:0,grayscale:0,opacity:1},"\n  varying vec2 vUv;\n  varying vec2 vPos;\n  void main() {\n    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.);\n    vUv = uv;\n    vPos = position.xy;\n  }\n",`\n  // mostly from https://gist.github.com/statico/df64c5d167362ecf7b34fca0b1459a44\n  varying vec2 vUv;\n  varying vec2 vPos;\n  uniform vec2 scale;\n  uniform vec2 imageBounds;\n  uniform float resolution;\n  uniform vec3 color;\n  uniform sampler2D map;\n  uniform float radius;\n  uniform float zoom;\n  uniform float grayscale;\n  uniform float opacity;\n  const vec3 luma = vec3(.299, 0.587, 0.114);\n  vec4 toGrayscale(vec4 color, float intensity) {\n    return vec4(mix(color.rgb, vec3(dot(color.rgb, luma)), intensity), color.a);\n  }\n  vec2 aspect(vec2 size) {\n    return size / min(size.x, size.y);\n  }\n  \n  const float PI = 3.14159265;\n    \n  // from https://iquilezles.org/articles/distfunctions\n  float udRoundBox( vec2 p, vec2 b, float r ) {\n    return length(max(abs(p)-b+r,0.0))-r;\n  }\n\n  void main() {\n    vec2 s = aspect(scale);\n    vec2 i = aspect(imageBounds);\n    float rs = s.x / s.y;\n    float ri = i.x / i.y;\n    vec2 new = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);\n    vec2 offset = (rs < ri ? vec2((new.x - s.x) / 2.0, 0.0) : vec2(0.0, (new.y - s.y) / 2.0)) / new;\n    vec2 uv = vUv * s / new + offset;\n    vec2 zUv = (uv - vec2(0.5, 0.5)) / zoom + vec2(0.5, 0.5);\n\n    vec2 res = vec2(scale * resolution);\n    vec2 halfRes = 0.5 * res;\n    float b = udRoundBox(vUv.xy * res - halfRes, halfRes, resolution * radius);    \n\t  vec3 a = mix(vec3(1.0,0.0,0.0), vec3(0.0,0.0,0.0), smoothstep(0.0, 1.0, b));\n    gl_FragColor = toGrayscale(texture2D(map, zUv) * vec4(color, opacity * a), grayscale);\n    \n    #include <tonemapping_fragment>\n    #include <${s.version>=154?"colorspace_fragment":"encodings_fragment"}>\n  }\n`),m=u.forwardRef((({children:e,color:r,segments:t=1,scale:a=1,zoom:o=1,grayscale:s=0,opacity:i=1,radius:c=0,texture:f,toneMapped:m,transparent:d,side:y,...g},p)=>{n.extend({ImageMaterial:v});const x=u.useRef(null),h=n.useThree((e=>e.size)),b=Array.isArray(a)?[a[0],a[1]]:[a,a],w=[f.image.width,f.image.height],j=Math.max(h.width,h.height);return u.useImperativeHandle(p,(()=>x.current),[]),u.useLayoutEffect((()=>{x.current.geometry.parameters&&x.current.material.scale.set(b[0]*x.current.geometry.parameters.width,b[1]*x.current.geometry.parameters.height)}),[]),u.createElement("mesh",l.default({ref:x,scale:Array.isArray(a)?[...a,1]:a},g),u.createElement("planeGeometry",{args:[1,1,t,t]}),u.createElement("imageMaterial",{color:r,map:f,zoom:o,grayscale:s,opacity:i,scale:b,imageBounds:w,resolution:j,radius:c,toneMapped:m,transparent:d,side:y,key:v.key}),e)})),d=u.forwardRef((({url:e,...r},t)=>{const n=o.useTexture(e);return u.createElement(m,l.default({},r,{texture:n,ref:t}))})),y=u.forwardRef((({url:e,...r},t)=>u.createElement(m,l.default({},r,{ref:t})))),g=u.forwardRef(((e,r)=>{if(e.url)return u.createElement(d,l.default({},e,{ref:r}));if(e.texture)return u.createElement(y,l.default({},e,{ref:r}));throw new Error("<Image /> requires a url or texture")}));exports.Image=g;
