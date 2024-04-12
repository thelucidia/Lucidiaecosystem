import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';

const useCachedModelLoader = (url: string): GLTF | undefined => {
  const cache = useRef<Record<string, GLTF | undefined>>({});

  if (!cache.current[url]) {
    cache.current[url] = useLoader(GLTFLoader, url);
  }

  return cache.current[url];
};

const Model: React.FC = React.memo(() => {
  // const gltf: GLTF | undefined = useLoader(GLTFLoader, 'soldier/scene.gltf');
  const gltf = useCachedModelLoader('soldier/scene.gltf');
  if (!gltf) {
    return null;
  }
  return <primitive object={gltf.scene} children-0-castShadow />;
});

export default Model;
