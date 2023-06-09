# ThreeJS-3DScene
https://samnzito.github.io/ThreeJS-3DScene/ThreeJS-3D-Project/home3.html
This program is a JavaScript code that uses the Three.js library to create a 3D scene with various shapes and materials. 
Here's a breakdown of what the program does:

## Breakdown
1. It sets up the scene, camera, and renderer:
   - Creates a new scene.
   - Creates a perspective camera with a specified field of view, aspect ratio, and near/far clipping planes.
   - Creates a WebGL renderer with antialiasing.
   - Sets the size of the renderer to match the window dimensions.
   - Appends the renderer to the document body.
   - Sets the scene background color to white.
2. It creates a WebGLRenderTarget for the environment map:
   - Creates a render target for the environment map.
   - Sets the texture mapping for the render target to EquirectangularReflectionMapping.
3. It loads an HDR environment map texture and generates an environment map:
   - Creates an RGBELoader for loading HDR environment map textures.
   - Creates a material for the environment map using the render target texture as the envMap.
   - Creates a material for the shapes using a MeshStandardMaterial with specified metalness and roughness values.
   - Creates a PMREMGenerator instance for generating the environment map.
   - Loads the HDR environment map texture from a specified URL.
   - Generates the environment map from the HDR texture using the PMREMGenerator.
   - Sets the environment map for the scene, environment map material, and shapes material.
   - Updates the shapes material.
   - Sets the environment map as the scene background.
4. It defines materials for cubes, spheres, and other shapes.

5. It creates a ground plane:
   - Defines the dimensions, geometry, and material for the ground plane.
   - Creates a Mesh with the ground plane geometry and material.
   - Rotates the ground plane to lay flat.
   - Adds the ground plane to the scene.
6. It creates various shapes such as cubes, spheres, pyramids, cylinders, and cones:
   - Defines the geometries and materials for the shapes.
   - Creates Mesh objects with the respective geometries and materials.
   - Sets positions and rotations for the shapes.
   - Adds the shapes to the scene.
7. It sets up an animation loop using the animate() function:
   - Calls requestAnimationFrame() recursively to update the animation frame.
   - Rotates the cubes and spheres.
   - Sets the render target to the environment map render target.
   - Renders the scene with the environment map.
   - Resets the render target to the screen.
   - Renders the scene.

## Overview
Overall, this program creates a 3D scene with various shapes, applies materials to them, uses an HDR environment map for reflections and lighting, and animates the scene by rotating the shapes.
