"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./Billboard.cjs.js"),r=require("./ScreenSpace.cjs.js"),s=require("./ScreenSizer.cjs.js"),t=require("./QuadraticBezierLine.cjs.js"),o=require("./CubicBezierLine.cjs.js"),i=require("./CatmullRomLine.cjs.js"),a=require("./Line.cjs.js"),u=require("./PositionalAudio.cjs.js"),c=require("./Text.cjs.js"),n=require("./Text3D.cjs.js"),p=require("./Effects.cjs.js"),j=require("./GradientTexture.cjs.js"),x=require("./Image.cjs.js"),l=require("./Edges.cjs.js"),d=require("./Outlines.cjs.js"),q=require("./Trail.cjs.js"),m=require("./Sampler.cjs.js"),h=require("./ComputedAttribute.cjs.js"),C=require("./Clone.cjs.js"),M=require("./MarchingCubes.cjs.js"),S=require("./Decal.cjs.js"),T=require("./Svg.cjs.js"),b=require("./Gltf.cjs.js"),P=require("./AsciiRenderer.cjs.js"),f=require("./Splat.cjs.js"),g=require("./OrthographicCamera.cjs.js"),B=require("./PerspectiveCamera.cjs.js"),v=require("./CubeCamera.cjs.js"),A=require("./DeviceOrientationControls.cjs.js"),F=require("./FlyControls.cjs.js"),L=require("./MapControls.cjs.js"),G=require("./OrbitControls.cjs.js"),R=require("./TrackballControls.cjs.js"),D=require("./ArcballControls.cjs.js"),E=require("./TransformControls.cjs.js"),k=require("./PointerLockControls.cjs.js"),I=require("./FirstPersonControls.cjs.js"),w=require("./CameraControls.cjs.js"),z=require("./MotionPathControls.cjs.js"),O=require("./GizmoHelper.cjs.js"),y=require("./GizmoViewcube.cjs.js"),H=require("./GizmoViewport.cjs.js"),V=require("./Grid.cjs.js"),W=require("./CubeTexture.cjs.js"),K=require("./Fbx.cjs.js"),Q=require("./Ktx2.cjs.js"),N=require("./Progress.cjs.js"),U=require("./Texture.cjs.js"),X=require("./VideoTexture.cjs.js"),_=require("./useFont.cjs.js"),J=require("./useSpriteLoader.cjs.js"),Y=require("./Helper.cjs.js"),Z=require("./Stats.cjs.js"),$=require("./StatsGl.cjs.js"),ee=require("./useDepthBuffer.cjs.js"),re=require("./useAspect.cjs.js"),se=require("./useCamera.cjs.js"),te=require("./DetectGPU.cjs.js"),oe=require("./Bvh.cjs.js"),ie=require("./useContextBridge.cjs.js"),ae=require("./useAnimations.cjs.js"),ue=require("./Fbo.cjs.js"),ce=require("./useIntersect.cjs.js"),ne=require("./useBoxProjectedEnv.cjs.js"),pe=require("./BBAnchor.cjs.js"),je=require("./TrailTexture.cjs.js"),xe=require("./Example.cjs.js"),le=require("./SpriteAnimator.cjs.js"),de=require("./CurveModifier.cjs.js"),qe=require("./MeshDistortMaterial.cjs.js"),me=require("./MeshWobbleMaterial.cjs.js"),he=require("./MeshReflectorMaterial.cjs.js"),Ce=require("./MeshRefractionMaterial.cjs.js"),Me=require("./MeshTransmissionMaterial.cjs.js"),Se=require("./MeshDiscardMaterial.cjs.js"),Te=require("./MultiMaterial.cjs.js"),be=require("./PointMaterial.cjs.js"),Pe=require("./shaderMaterial.cjs.js"),fe=require("./softShadows.cjs.js"),ge=require("./shapes.cjs.js"),Be=require("./RoundedBox.cjs.js"),ve=require("./ScreenQuad.cjs.js"),Ae=require("./Center.cjs.js"),Fe=require("./Resize.cjs.js"),Le=require("./Bounds.cjs.js"),Ge=require("./CameraShake.cjs.js"),Re=require("./Float.cjs.js"),De=require("./Stage.cjs.js"),Ee=require("./Backdrop.cjs.js"),ke=require("./Shadow.cjs.js"),Ie=require("./Caustics.cjs.js"),we=require("./ContactShadows.cjs.js"),ze=require("./AccumulativeShadows.cjs.js"),Oe=require("./Reflector.cjs.js"),ye=require("./SpotLight.cjs.js"),He=require("./Environment.cjs.js"),Ve=require("./Lightformer.cjs.js"),We=require("./Sky.cjs.js"),Ke=require("./Stars.cjs.js"),Qe=require("./Cloud.cjs.js"),Ne=require("./Sparkles.cjs.js"),Ue=require("./useEnvironment.cjs.js"),Xe=require("./MatcapTexture.cjs.js"),_e=require("./NormalTexture.cjs.js"),Je=require("./Wireframe.cjs.js"),Ye=require("./ShadowAlpha.cjs.js"),Ze=require("./Points.cjs.js"),$e=require("./Instances.cjs.js"),er=require("./Segments.cjs.js"),rr=require("./Detailed.cjs.js"),sr=require("./Preload.cjs.js"),tr=require("./BakeShadows.cjs.js"),or=require("./meshBounds.cjs.js"),ir=require("./AdaptiveDpr.cjs.js"),ar=require("./AdaptiveEvents.cjs.js"),ur=require("./PerformanceMonitor.cjs.js"),cr=require("./RenderTexture.cjs.js"),nr=require("./RenderCubeTexture.cjs.js"),pr=require("./Mask.cjs.js"),jr=require("./Hud.cjs.js"),xr=require("./Fisheye.cjs.js"),lr=require("./MeshPortalMaterial.cjs.js"),dr=require("./calculateScaleFactor.cjs.js");require("@babel/runtime/helpers/extends"),require("react"),require("three"),require("@react-three/fiber"),require("three-stdlib"),require("troika-three-text"),require("suspend-react"),require("../helpers/constants.cjs.js"),require("meshline"),require("camera-controls"),require("maath"),require("zustand"),require("hls.js"),require("stats.js"),require("../helpers/useEffectfulState.cjs.js"),require("stats-gl"),require("detect-gpu"),require("three-mesh-bvh"),require("react-composer"),require("../helpers/deprecated.cjs.js"),require("../materials/BlurPass.cjs.js"),require("../materials/ConvolutionMaterial.cjs.js"),require("../materials/MeshReflectorMaterial.cjs.js"),require("../materials/MeshRefractionMaterial.cjs.js"),require("../materials/DiscardMaterial.cjs.js"),require("@monogrid/gainmap-js"),require("../helpers/environment-assets.cjs.js"),require("../materials/SpotLightMaterial.cjs.js"),require("uuid"),require("../materials/WireframeMaterial.cjs.js"),exports.Billboard=e.Billboard,exports.ScreenSpace=r.ScreenSpace,exports.ScreenSizer=s.ScreenSizer,exports.QuadraticBezierLine=t.QuadraticBezierLine,exports.CubicBezierLine=o.CubicBezierLine,exports.CatmullRomLine=i.CatmullRomLine,exports.Line=a.Line,exports.PositionalAudio=u.PositionalAudio,exports.Text=c.Text,exports.Text3D=n.Text3D,exports.Effects=p.Effects,exports.isWebGL2Available=p.isWebGL2Available,exports.GradientTexture=j.GradientTexture,exports.GradientType=j.GradientType,exports.Image=x.Image,exports.Edges=l.Edges,exports.Outlines=d.Outlines,exports.Trail=q.Trail,exports.useTrail=q.useTrail,exports.Sampler=m.Sampler,exports.useSurfaceSampler=m.useSurfaceSampler,exports.ComputedAttribute=h.ComputedAttribute,exports.Clone=C.Clone,exports.MarchingCube=M.MarchingCube,exports.MarchingCubes=M.MarchingCubes,exports.MarchingPlane=M.MarchingPlane,exports.Decal=S.Decal,exports.Svg=T.Svg,exports.Gltf=b.Gltf,exports.useGLTF=b.useGLTF,exports.AsciiRenderer=P.AsciiRenderer,exports.Splat=f.Splat,exports.OrthographicCamera=g.OrthographicCamera,exports.PerspectiveCamera=B.PerspectiveCamera,exports.CubeCamera=v.CubeCamera,exports.useCubeCamera=v.useCubeCamera,exports.DeviceOrientationControls=A.DeviceOrientationControls,exports.FlyControls=F.FlyControls,exports.MapControls=L.MapControls,exports.OrbitControls=G.OrbitControls,exports.TrackballControls=R.TrackballControls,exports.ArcballControls=D.ArcballControls,exports.TransformControls=E.TransformControls,exports.PointerLockControls=k.PointerLockControls,exports.FirstPersonControls=I.FirstPersonControls,exports.CameraControls=w.CameraControls,exports.MotionPathControls=z.MotionPathControls,exports.useMotion=z.useMotion,exports.GizmoHelper=O.GizmoHelper,exports.useGizmoContext=O.useGizmoContext,exports.GizmoViewcube=y.GizmoViewcube,exports.GizmoViewport=H.GizmoViewport,exports.Grid=V.Grid,exports.CubeTexture=W.CubeTexture,exports.useCubeTexture=W.useCubeTexture,exports.Fbx=K.Fbx,exports.useFBX=K.useFBX,exports.Ktx2=Q.Ktx2,exports.useKTX2=Q.useKTX2,exports.Progress=N.Progress,exports.useProgress=N.useProgress,exports.IsObject=U.IsObject,exports.Texture=U.Texture,exports.useTexture=U.useTexture,exports.VideoTexture=X.VideoTexture,exports.useVideoTexture=X.useVideoTexture,exports.useFont=_.useFont,exports.checkIfFrameIsEmpty=J.checkIfFrameIsEmpty,exports.getFirstFrame=J.getFirstFrame,exports.useSpriteLoader=J.useSpriteLoader,exports.Helper=Y.Helper,exports.useHelper=Y.useHelper,exports.Stats=Z.Stats,exports.StatsGl=$.StatsGl,exports.useDepthBuffer=ee.useDepthBuffer,exports.useAspect=re.useAspect,exports.useCamera=se.useCamera,exports.DetectGPU=te.DetectGPU,exports.useDetectGPU=te.useDetectGPU,exports.Bvh=oe.Bvh,exports.useBVH=oe.useBVH,exports.useContextBridge=ie.useContextBridge,exports.useAnimations=ae.useAnimations,exports.Fbo=ue.Fbo,exports.useFBO=ue.useFBO,exports.useIntersect=ce.useIntersect,exports.useBoxProjectedEnv=ne.useBoxProjectedEnv,exports.BBAnchor=pe.BBAnchor,exports.TrailTexture=je.TrailTexture,exports.useTrailTexture=je.useTrailTexture,exports.Example=xe.Example,exports.SpriteAnimator=le.SpriteAnimator,exports.useSpriteAnimator=le.useSpriteAnimator,exports.CurveModifier=de.CurveModifier,exports.MeshDistortMaterial=qe.MeshDistortMaterial,exports.MeshWobbleMaterial=me.MeshWobbleMaterial,exports.MeshReflectorMaterial=he.MeshReflectorMaterial,exports.MeshRefractionMaterial=Ce.MeshRefractionMaterial,exports.MeshTransmissionMaterial=Me.MeshTransmissionMaterial,exports.MeshDiscardMaterial=Se.MeshDiscardMaterial,exports.MultiMaterial=Te.MultiMaterial,exports.PointMaterial=be.PointMaterial,exports.PointMaterialImpl=be.PointMaterialImpl,exports.shaderMaterial=Pe.shaderMaterial,exports.SoftShadows=fe.SoftShadows,exports.Box=ge.Box,exports.Capsule=ge.Capsule,exports.Circle=ge.Circle,exports.Cone=ge.Cone,exports.Cylinder=ge.Cylinder,exports.Dodecahedron=ge.Dodecahedron,exports.Extrude=ge.Extrude,exports.Icosahedron=ge.Icosahedron,exports.Lathe=ge.Lathe,exports.Octahedron=ge.Octahedron,exports.Plane=ge.Plane,exports.Polyhedron=ge.Polyhedron,exports.Ring=ge.Ring,exports.Shape=ge.Shape,exports.Sphere=ge.Sphere,exports.Tetrahedron=ge.Tetrahedron,exports.Torus=ge.Torus,exports.TorusKnot=ge.TorusKnot,exports.Tube=ge.Tube,exports.RoundedBox=Be.RoundedBox,exports.ScreenQuad=ve.ScreenQuad,exports.Center=Ae.Center,exports.Resize=Fe.Resize,exports.Bounds=Le.Bounds,exports.useBounds=Le.useBounds,exports.CameraShake=Ge.CameraShake,exports.Float=Re.Float,exports.Stage=De.Stage,exports.Backdrop=Ee.Backdrop,exports.Shadow=ke.Shadow,exports.Caustics=Ie.Caustics,exports.ContactShadows=we.ContactShadows,exports.AccumulativeShadows=ze.AccumulativeShadows,exports.RandomizedLight=ze.RandomizedLight,exports.accumulativeContext=ze.accumulativeContext,exports.Reflector=Oe.Reflector,exports.SpotLight=ye.SpotLight,exports.SpotLightShadow=ye.SpotLightShadow,exports.Environment=He.Environment,exports.EnvironmentCube=He.EnvironmentCube,exports.EnvironmentMap=He.EnvironmentMap,exports.EnvironmentPortal=He.EnvironmentPortal,exports.Lightformer=Ve.Lightformer,exports.Sky=We.Sky,exports.calcPosFromAngles=We.calcPosFromAngles,exports.Stars=Ke.Stars,exports.Cloud=Qe.Cloud,exports.CloudInstance=Qe.CloudInstance,exports.Clouds=Qe.Clouds,exports.Sparkles=Ne.Sparkles,exports.useEnvironment=Ue.useEnvironment,exports.MatcapTexture=Xe.MatcapTexture,exports.useMatcapTexture=Xe.useMatcapTexture,exports.NormalTexture=_e.NormalTexture,exports.useNormalTexture=_e.useNormalTexture,exports.Wireframe=Je.Wireframe,exports.ShadowAlpha=Ye.ShadowAlpha,exports.Point=Ze.Point,exports.Points=Ze.Points,exports.PointsBuffer=Ze.PointsBuffer,exports.PositionPoint=Ze.PositionPoint,exports.Instance=$e.Instance,exports.InstancedAttribute=$e.InstancedAttribute,exports.Instances=$e.Instances,exports.Merged=$e.Merged,exports.PositionMesh=$e.PositionMesh,exports.createInstances=$e.createInstances,exports.Segment=er.Segment,exports.SegmentObject=er.SegmentObject,exports.Segments=er.Segments,exports.Detailed=rr.Detailed,exports.Preload=sr.Preload,exports.BakeShadows=tr.BakeShadows,exports.meshBounds=or.meshBounds,exports.AdaptiveDpr=ir.AdaptiveDpr,exports.AdaptiveEvents=ar.AdaptiveEvents,exports.PerformanceMonitor=ur.PerformanceMonitor,exports.usePerformanceMonitor=ur.usePerformanceMonitor,exports.RenderTexture=cr.RenderTexture,exports.RenderCubeTexture=nr.RenderCubeTexture,exports.Mask=pr.Mask,exports.useMask=pr.useMask,exports.Hud=jr.Hud,exports.Fisheye=xr.Fisheye,exports.MeshPortalMaterial=lr.MeshPortalMaterial,exports.calculateScaleFactor=dr.calculateScaleFactor;