import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Hero3DSceneProps {
  className?: string;
}

export const Hero3DScene: React.FC<Hero3DSceneProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 650;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 2. High-Tech Soft Red Circular Particle Texture
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.2, 'rgba(239, 68, 68, 0.9)');
      grad.addColorStop(0.55, 'rgba(220, 38, 38, 0.35)');
      grad.addColorStop(1, 'rgba(220, 38, 38, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(32, 32, 32, 0, Math.PI * 2);
      ctx.fill();
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    // 3. Clean Interactive 3D Neural Constellation (Data & AI Intelligence Matrix)
    const nodeCount = 95;
    const nodes: {
      position: THREE.Vector3;
      velocity: THREE.Vector3;
      origin: THREE.Vector3;
    }[] = [];

    const nodePositions = new Float32Array(nodeCount * 3);

    for (let i = 0; i < nodeCount; i++) {
      // Distribute organically in 3D volume
      const x = (Math.random() - 0.5) * 26;
      const y = (Math.random() - 0.5) * 16;
      const z = (Math.random() - 0.5) * 12;

      const pos = new THREE.Vector3(x, y, z);
      nodes.push({
        position: pos,
        origin: pos.clone(),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.006,
          (Math.random() - 0.5) * 0.006,
          (Math.random() - 0.5) * 0.004
        ),
      });

      nodePositions[i * 3] = x;
      nodePositions[i * 3 + 1] = y;
      nodePositions[i * 3 + 2] = z;
    }

    // Nodes Points Geometry
    const nodesGeo = new THREE.BufferGeometry();
    nodesGeo.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));

    const nodesMat = new THREE.PointsMaterial({
      size: 0.42,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0xffffff,
    });
    const nodesMesh = new THREE.Points(nodesGeo, nodesMat);
    scene.add(nodesMesh);

    // Dynamic Synapse Connecting Lines
    const maxLines = (nodeCount * (nodeCount - 1)) / 2;
    const linePositions = new Float32Array(maxLines * 6);
    const lineColors = new Float32Array(maxLines * 6);

    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    linesGeo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const linesMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.45,
    });
    const linesMesh = new THREE.LineSegments(linesGeo, linesMat);
    scene.add(linesMesh);

    // 4. Subtle Floating Geometric Obsidian Crystals with Crimson Edges
    const floatingCrystals: {
      mesh: THREE.Group;
      basePos: THREE.Vector3;
      rotSpeed: THREE.Vector3;
      bobSpeed: number;
    }[] = [];

    const createCrystal = (
      geo: THREE.BufferGeometry,
      pos: THREE.Vector3,
      scale: number,
      bobSpeed: number
    ) => {
      const g = new THREE.Group();

      const solidMat = new THREE.MeshStandardMaterial({
        color: 0x050505,
        roughness: 0.2,
        metalness: 0.95,
      });
      const solid = new THREE.Mesh(geo, solidMat);
      g.add(solid);

      const wireGeo = new THREE.EdgesGeometry(geo);
      const wireMat = new THREE.LineBasicMaterial({
        color: 0xdc2626,
        transparent: true,
        opacity: 0.85,
      });
      const wire = new THREE.LineSegments(wireGeo, wireMat);
      g.add(wire);

      g.position.copy(pos);
      g.scale.set(scale, scale, scale);
      scene.add(g);

      floatingCrystals.push({
        mesh: g,
        basePos: pos.clone(),
        rotSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.012,
          (Math.random() - 0.5) * 0.015,
          (Math.random() - 0.5) * 0.01
        ),
        bobSpeed,
      });
    };

    // Add minimal, elegant floating geometric accents with deep depth
    createCrystal(new THREE.OctahedronGeometry(1.0), new THREE.Vector3(8.5, 4.2, -4), 0.9, 1.2);
    createCrystal(new THREE.IcosahedronGeometry(0.85), new THREE.Vector3(-9.2, -3.8, -3), 0.8, 1.4);
    createCrystal(new THREE.TetrahedronGeometry(0.75), new THREE.Vector3(9.5, -4.5, -2), 0.75, 1.6);
    createCrystal(new THREE.OctahedronGeometry(0.65), new THREE.Vector3(-8.0, 4.8, -5), 0.7, 1.1);

    // Subtle Concentric Orbital Ring in the distance
    const ringGeo = new THREE.TorusGeometry(8.5, 0.02, 16, 120);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xdc2626,
      transparent: true,
      opacity: 0.2,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    ringMesh.rotation.y = Math.PI / 8;
    ringMesh.position.set(2, 0, -6);
    scene.add(ringMesh);

    // Ambient Red Lighting
    const ambientLight = new THREE.AmbientLight(0x180505, 1.5);
    scene.add(ambientLight);

    const redSpot = new THREE.PointLight(0xdc2626, 4.0, 35);
    redSpot.position.set(4, 5, 8);
    scene.add(redSpot);

    // 5. Mouse Parallax Tracking
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    // Visibility observer
    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // 6. Animation Loop (Silky 60 FPS)
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      // Parallax camera travel
      camera.position.x = mouse.x * 2.2;
      camera.position.y = mouse.y * 1.6;
      camera.lookAt(0, 0, 0);

      // Rotate distant ring
      ringMesh.rotation.z += 0.002;

      // Update Nodes positions (Gentle organic floating)
      const positions = nodesGeo.attributes.position.array as Float32Array;

      for (let i = 0; i < nodeCount; i++) {
        const node = nodes[i];
        node.position.add(node.velocity);

        // Soft bounce within boundaries
        if (Math.abs(node.position.x - node.origin.x) > 1.2) node.velocity.x *= -1;
        if (Math.abs(node.position.y - node.origin.y) > 1.2) node.velocity.y *= -1;
        if (Math.abs(node.position.z - node.origin.z) > 1.0) node.velocity.z *= -1;

        positions[i * 3] = node.position.x;
        positions[i * 3 + 1] = node.position.y;
        positions[i * 3 + 2] = node.position.z;
      }
      nodesGeo.attributes.position.needsUpdate = true;

      // Calculate Proximity Synapse Lines
      let lineIndex = 0;
      let colorIndex = 0;
      const connectionDist = 3.6;

      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dist = nodes[i].position.distanceTo(nodes[j].position);

          if (dist < connectionDist) {
            const alpha = 1.0 - dist / connectionDist;

            linePositions[lineIndex++] = nodes[i].position.x;
            linePositions[lineIndex++] = nodes[i].position.y;
            linePositions[lineIndex++] = nodes[i].position.z;

            linePositions[lineIndex++] = nodes[j].position.x;
            linePositions[lineIndex++] = nodes[j].position.y;
            linePositions[lineIndex++] = nodes[j].position.z;

            // Crimson to soft ruby gradient
            const r = 0.86;
            const g = 0.15 * alpha;
            const b = 0.15 * alpha;

            lineColors[colorIndex++] = r;
            lineColors[colorIndex++] = g;
            lineColors[colorIndex++] = b;

            lineColors[colorIndex++] = r;
            lineColors[colorIndex++] = g;
            lineColors[colorIndex++] = b;
          }
        }
      }

      linesGeo.setDrawRange(0, lineIndex / 3);
      linesGeo.attributes.position.needsUpdate = true;
      linesGeo.attributes.color.needsUpdate = true;

      // Animate floating geometric crystals
      floatingCrystals.forEach((c, idx) => {
        c.mesh.rotation.x += c.rotSpeed.x;
        c.mesh.rotation.y += c.rotSpeed.y;
        c.mesh.rotation.z += c.rotSpeed.z;

        const bob = Math.sin(elapsed * c.bobSpeed + idx) * 0.25;
        c.mesh.position.y = c.basePos.y + bob;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`relative w-full h-full min-h-[450px] overflow-hidden pointer-events-none select-none ${className}`}>
      {/* 3D WebGL Canvas */}
      <div ref={containerRef} className="w-full h-full absolute inset-0" />

      {/* Atmospheric Crimson Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/[0.1] rounded-full blur-[140px] pointer-events-none -z-10 animate-glow-pulse" />
    </div>
  );
};
