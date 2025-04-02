
import React, { useEffect, useState, useRef } from "react";
import * as THREE from "three";

const SplashScreen = () => {
  const [opacity, setOpacity] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fade in animation
    setTimeout(() => {
      setOpacity(1);
    }, 300);

    // Start fade out animation after 4.5 seconds
    const fadeOutTimer = setTimeout(() => {
      setOpacity(0);
    }, 4500);

    return () => clearTimeout(fadeOutTimer);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Set up the scene
    const scene = new THREE.Scene();
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(
      45, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    camera.position.z = 8;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    canvasRef.current.appendChild(renderer.domElement);

    // Create the realistic globe
    const sphereGeometry = new THREE.SphereGeometry(2, 64, 64);
    
    // Load Earth texture map
    const textureLoader = new THREE.TextureLoader();
    const earthMap = textureLoader.load('https://unpkg.com/three-globe@2.24.13/example/img/earth-blue-marble.jpg');
    const bumpMap = textureLoader.load('https://unpkg.com/three-globe@2.24.13/example/img/earth-topology.png');
    const specularMap = textureLoader.load('https://unpkg.com/three-globe@2.24.13/example/img/earth-water.png');
    
    // Create material with realistic Earth textures
    const material = new THREE.MeshPhongMaterial({
      map: earthMap,
      bumpMap: bumpMap,
      bumpScale: 0.05,
      specularMap: specularMap,
      specular: new THREE.Color(0x333333),
      shininess: 15,
    });

    const globe = new THREE.Mesh(sphereGeometry, material);
    scene.add(globe);

    // Add glow effect / atmosphere
    const atmosphereGeometry = new THREE.SphereGeometry(2.05, 50, 50);
    const atmosphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x3366ff,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // Add clouds layer (optional)
    const cloudGeometry = new THREE.SphereGeometry(2.03, 50, 50);
    const cloudTexture = textureLoader.load('https://unpkg.com/three-globe@2.24.13/example/img/earth-clouds.png');
    const cloudMaterial = new THREE.MeshPhongMaterial({
      map: cloudTexture,
      transparent: true,
      opacity: 0.4,
    });
    const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    scene.add(clouds);

    // Add ambient light for general illumination
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);

    // Add directional light (sun)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Add another directional light from the opposite side for better visibility
    const backLight = new THREE.DirectionalLight(0xffffff, 0.5);
    backLight.position.set(-5, -3, -5);
    scene.add(backLight);

    // Animation loop
    let frameId: number;
    let zoomComplete = false;
    const zoomDuration = 3; // seconds
    const startTime = Date.now();

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      // Rotate the globe and clouds
      globe.rotation.y += 0.0005;
      clouds.rotation.y += 0.0007; // clouds rotate slightly faster for effect
      atmosphere.rotation.y += 0.0005;

      // Create zooming effect
      const elapsed = (Date.now() - startTime) / 1000; // seconds
      if (elapsed < zoomDuration && !zoomComplete) {
        // Start from far away and zoom in
        const progress = elapsed / zoomDuration;
        // Ease in-out function
        const easedProgress = progress < 0.5 
          ? 2 * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
          
        // Start at z=15, end at z=5 (closer)
        camera.position.z = 15 - (easedProgress * 10);
      } else if (!zoomComplete) {
        zoomComplete = true;
        camera.position.z = 5;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!canvasRef.current) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      if (canvasRef.current && canvasRef.current.contains(renderer.domElement)) {
        canvasRef.current.removeChild(renderer.domElement);
      }
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-violet-500 to-purple-800 z-50">
      <div 
        ref={canvasRef} 
        className="absolute inset-0 z-10"
      />
      <div 
        ref={containerRef}
        className="text-center transition-opacity duration-1000 z-20"
        style={{ opacity }}
      >
        <h1 className="text-6xl font-bold text-white mb-4 animate-fade-up shadow-text">
          AK Project
        </h1>
        <p className="text-2xl text-white/90 animate-fade-up shadow-text" style={{ animationDelay: "300ms" }}>
          Представляет
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
