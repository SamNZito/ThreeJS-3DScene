/*
This program is a JavaScript code that uses the Three.js library 
to create a 3D scene with various shapes and materials. Here's a breakdown of what the program does:
*/

// Set up the scene, camera, and renderer
const scene = new THREE.Scene(); // Create a new scene
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // Create a perspective camera
const renderer = new THREE.WebGLRenderer({ antialias: true }); // Create a WebGL renderer with antialiasing
renderer.setSize(window.innerWidth, window.innerHeight); // Set the renderer size
document.body.appendChild(renderer.domElement); // Append the renderer to the document body
scene.background = new THREE.Color('white'); // Set the scene background color

// Create a WebGLRenderTarget for the environment map
const envMapRenderTarget = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight); // Create a render target for the environment map
envMapRenderTarget.texture.mapping = THREE.EquirectangularReflectionMapping; // Set the texture mapping for the render target

const hdrLoader = new THREE.RGBELoader(); // Create a loader for the HDR environment map

// Create the environment map material
const envMapMaterial = new THREE.MeshBasicMaterial({
  envMap: envMapRenderTarget.texture, // Use the render target texture as the environment map
});

// Create the shapes material
const shapesMaterial = new THREE.MeshStandardMaterial({
  metalness: 1,
  roughness: 0.1,
});

// Create a PMREMGenerator instance
const pmremGenerator = new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();

// Load the HDR environment map texture
hdrLoader.load('hdr.hdr', function (texture) {
  const envMap = pmremGenerator.fromEquirectangular(texture).texture; // Generate the environment map from the HDR texture
  scene.environment = envMap; // Set the environment map for the scene
  envMapMaterial.envMap = envMap; // Set the environment map for the material
  shapesMaterial.envMap = envMap; // Set the environment map for the material
  shapesMaterial.needsUpdate = true; // Update the material

  scene.background = envMap; // Set the environment map as the scene background
});

// Define materials for cubes and spheres
const cubeMaterial1 = new THREE.MeshStandardMaterial({
  color: 0x3399ff,      // Set the base color
  roughness: 0.1,       // Adjust the roughness (0-1, 0 being smooth and 1 being rough)
  metalness: 0.4,       // Adjust the metalness (0-1, 0 being non-metallic and 1 being fully metallic)
});
const cubeMaterial2 = new THREE.MeshStandardMaterial({
  color: 0xff0000,      // Set the base color
  roughness: 0.1,       // Adjust the roughness (0-1, 0 being smooth and 1 being rough)
  metalness: 0.4,       // Adjust the metalness (0-1, 0 being non-metallic and 1 being fully metallic)
});
const cubeMaterial3 = new THREE.MeshStandardMaterial({
  color: 0x00ff00,      // Set the base color
  roughness: 0.1,       // Adjust the roughness (0-1, 0 being smooth and 1 being rough)
  metalness: 0.4,       // Adjust the metalness (0-1, 0 being non-metallic and 1 being fully metallic)
});


const sphereMaterial1 = new THREE.MeshPhysicalMaterial({
  color: 0x00FFFF ,      // Set the base color
  roughness: 0.1,       // Adjust the roughness (0-1, 0 being smooth and 1 being rough)
  metalness: 0.4,       // Adjust the metalness (0-1, 0 being non-metallic and 1 being fully metallic)
  transparent: true,    // Enable transparency
  opacity: .9,         // Set the opacity (0-1, 0 being fully transparent and 1 being fully opaque)
  envMapIntensity: 1,   // Set the intensity of environment map reflections

});
const sphereMaterial2 = new THREE.MeshStandardMaterial({
  color: 0x00FF00,      // Set the base color
  roughness: 0.1,       // Adjust the roughness (0-1, 0 being smooth and 1 being rough)
  metalness: 0.4,       // Adjust the metalness (0-1, 0 being non-metallic and 1 being fully metallic)
  transparent: true,    // Enable transparency
  opacity: .9,         // Set the opacity (0-1, 0 being fully transparent and 1 being fully opaque)
  envMapIntensity: 1,  
});
const sphereMaterial3 = new THREE.MeshStandardMaterial({
  color: 0xFF0000,      // Set the base color
  roughness: 0.1,       // Adjust the roughness (0-1, 0 being smooth and 1 being rough)
  metalness: 0.4,       // Adjust the metalness (0-1, 0 being non-metallic and 1 being fully metallic)
  transparent: true,    // Enable transparency
  opacity: .9,         // Set the opacity (0-1, 0 being fully transparent and 1 being fully opaque)
  envMapIntensity: 1,
});
const sphereMaterial4 = new THREE.MeshStandardMaterial({
  color: 'black',      // Set the base color
  roughness: 0.1,       // Adjust the roughness (0-1, 0 being smooth and 1 being rough)
  metalness: 0.4,       // Adjust the metalness (0-1, 0 being non-metallic and 1 being fully metallic)
  transparent: true,    // Enable transparency
  opacity: .9,         // Set the opacity (0-1, 0 being fully transparent and 1 being fully opaque)
  envMapIntensity: 1,
});
const sphereMaterial5 = new THREE.MeshStandardMaterial({
  color: 0xffff00,      // Set the base color
  roughness: 0.1,       // Adjust the roughness (0-1, 0 being smooth and 1 being rough)
  metalness: 0.4,       // Adjust the metalness (0-1, 0 being non-metallic and 1 being fully metallic)
  transparent: true,    // Enable transparency
  opacity: .9,         // Set the opacity (0-1, 0 being fully transparent and 1 being fully opaque)
  envMapIntensity: 1,
});


// Create a ground plane
let dimX = 55;
let dimY = 55;
const groundGeometry = new THREE.PlaneGeometry(dimX, dimY); // Create the ground plane geometry
const groundMaterial = new THREE.MeshStandardMaterial({ 
  color: 0xffffff, 
  metalness: 0.5,
  roughness: 0.7,
  //envMap: cubeCamera.renderTarget.texture 
});
const ground = new THREE.Mesh(groundGeometry, groundMaterial); // Create the ground plane mesh
ground.rotation.x = -Math.PI / 2; // Rotate the ground to lay flat
scene.add(ground); // Add the ground to the scene

// Define wallGeometry, wallMaterial, wall, and wall2
const wallGeometry = new THREE.PlaneGeometry(dimX, dimY);
const wallMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
const wall = new THREE.Mesh(groundGeometry, wallMaterial);
const wall2 = new THREE.Mesh(groundGeometry, wallMaterial);
wall2.rotation.y = -Math.PI/2; // Rotate the ground to lay flat
wall.position.z = -dimX/2 + 10;
wall.position.y = dimX/2;
//wall2.position.z = -dimX/2;
wall2.position.y = dimX/2;
wall2.position.x = dimX/2;
scene.add(wall);
scene.add(wall2);


// Create the geometry
const cubeShape1 = new THREE.BoxGeometry(6, 6, 6);
const cubeShape2 = new THREE.BoxGeometry(4, 4, 4);
const cubeShape3 = new THREE.BoxGeometry(2.5, 2.5, 2.5);
const sphereShape1 = new THREE.SphereGeometry(2, 360, 360);
const sphereShape2 = new THREE.SphereGeometry(1, 360, 360);
const sphereShape3 = new THREE.SphereGeometry(1, 360, 360);
const sphereShape4 = new THREE.SphereGeometry(1, 360, 360);
const sphereShape5 = new THREE.SphereGeometry(1, 360, 360);

const doSphere = new THREE.DodecahedronGeometry(1.5);

const torusRadius = 1; // The radius of the torus knot
const tubeRadius = 0.3; // The radius of the tube
const tubularSegments = 64; // The number of segments in the tube
const radialSegments = 8; 
const torusKnotGeometry = new THREE.TorusKnotGeometry(torusRadius, tubeRadius, tubularSegments, radialSegments);


// Create the cylinder geometry
const radiusTop = 2; // Top radius of the cylinder
const radiusBottom = 1; // Bottom radius of the cylinder
const height = 4; // Height of the cylinder
const radialSegmentsC = 64; // Number of segments around the circumference
const heightSegments = 2; // Number of segments along the height
const openEnded = false; // Whether the ends of the cylinder are open or closed
const cylinderGeometry = new THREE.CylinderGeometry(
  radiusTop,
  radiusBottom,
  height,
  radialSegmentsC,
  heightSegments,
  openEnded
);

const Icosageometry = new THREE.IcosahedronGeometry(2.5);

const cube = new THREE.Mesh(cubeShape1, cubeMaterial1);
const cube2 = new THREE.Mesh(cylinderGeometry, cubeMaterial2);
const cube3 = new THREE.Mesh(cubeShape3, cubeMaterial3);
const cube4 = new THREE.Mesh(cubeShape3, cubeMaterial3);
const cube5 = new THREE.Mesh(cubeShape3, cubeMaterial3);
const cube6 = new THREE.Mesh(cubeShape3, cubeMaterial3);
const cube7 = new THREE.Mesh(cubeShape3, cubeMaterial3);


const sphere = new THREE.Mesh(Icosageometry, sphereMaterial1);
const sphere2 = new THREE.Mesh(sphereShape2, sphereMaterial2);
const sphere3 = new THREE.Mesh(doSphere, sphereMaterial3);
const sphere4 = new THREE.Mesh(torusKnotGeometry, sphereMaterial4);
const sphere5 = new THREE.Mesh(sphereShape5, sphereMaterial5);


const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Set initial camera position and target
camera.position.set(-8, 7, 12); //0,0,5
controls.target.set(0, 0, 0);

// Define variables for camera rotation
const center = new THREE.Vector3(0, 0, 0);
const radius = 10;
const rotationSpeed = 0.001;

// Add the cube to the scene
scene.add(cube);
scene.add(cube2);
scene.add(cube3);
scene.add(cube5);
scene.add(cube6);
scene.add(cube7);
scene.add(cube4);

scene.add(sphere);
scene.add(sphere2);
scene.add(sphere3);
scene.add(sphere4);
scene.add(sphere5);

//lighting, spotlight
const spotlight = new THREE.SpotLight(0xffffff, .9, 0, Math.PI/5.5, );
spotlight.position.set(-12, 7, 12);
spotlight.target.position.set(0, 3, 0);
spotlight.castShadow = true;
spotlight.shadow.mapSize.width = 1024;
spotlight.shadow.mapSize.height = 1024;

scene.add(spotlight);

//big cube
cube.position.y = 3; // Adjust the y-position of the cube shape

//right most cube
cube2.position.x = 7; 
cube2.position.y = 2;
cube2.position.z = 3;

cube2.rotation.y = -0.3;
cube2.rotation.x = 0.00;
cube2.rotation.z = 0.00;

//smallest cube
cube3.position.x = 0;  
cube3.position.y = 1.5;
cube3.position.z = 5;  

//smallest cube
cube4.position.x = 0;  
cube4.position.y = 1.5;
cube4.position.z = 5; 

//smallest cube
cube5.position.x = 0;  
cube5.position.y = 1.5;
cube5.position.z = 5; 

//smallest cube
cube6.position.x = 0;  
cube6.position.y = 1.5;
cube6.position.z = 5; 

cube7.rotation.y = 0.3;
cube7.rotation.x = 0.00;
cube7.rotation.z = 0.00;

//left most sphere
sphere.position.x = -6; 
sphere.position.y = 2.5;
sphere.position.z = -.5;

//top most sphere
sphere2.position.x = -.7; 
sphere2.position.y = 7;
sphere2.position.z = .8;

//left corner
sphere3.position.x = -4.5; 
sphere3.position.y = 1.5;
sphere3.position.z = 3.6;


//ontop of small cube
sphere4.position.x = 7; 
sphere4.position.y = 3;
sphere4.position.z = 3;
sphere4.rotation.y = Math.PI/2;

sphere5.position.x = 4.6; 
sphere5.position.y = 5;
sphere5.position.z = 6;

let angle = 0; // Initial angle
let circleRadius = 2;
// Set floating parameters
const amplitude = .4; // The maximum distance the shape will move up and down
const frequency = 0.02; // The frequency of the floating animation
let time = 0;

// Set initial position and velocity
let position = { x: 4.6, y: 6, z: 6 };
let velocity = { x: 0, y: 0.05, z: 0 }; // Adjust the y-component to control the bounce height

// Render the scene
function animate() {
  requestAnimationFrame(animate);

   // Update position based on velocity
   position.x += velocity.x;
   position.y += velocity.y;
   position.z += velocity.z;
    // Bounce the shape when it reaches a certain height
 if (position.y > 6 || position.y < 1  ) {
  velocity.y *= -1; // Reverse the direction of the velocity to simulate bouncing
  }
 // Update the shape's position
 sphere5.position.set(position.x, position.y, position.z);

  // sphere4.position.set(6, yT, 3);
  sphere4.position.y = Math.sin(time) * amplitude + 6.2;
  time += frequency;

  sphere4.rotation.y += 0.01;
  sphere4.rotation.x += 0.01;
  sphere4.rotation.z += 0.01;


  //console.log(camera.position)
  const x = center.x + circleRadius * Math.cos(THREE.MathUtils.degToRad(angle));
  const z = center.z + circleRadius * Math.sin(THREE.MathUtils.degToRad(angle));
  sphere2.position.set(x, 7, z);

  sphere2.rotation.y += 0.01;
  // Increment the angle for the next frame
  angle += .5;

  //cube.rotation.x += .005;
  cube2.rotation.y += 0.01;

  cube3.rotation.x -= 0.01;
  cube3.rotation.y -= 0.01;
  cube3.rotation.z -= 0.01;

  cube4.rotation.x -= 0.015;
  cube4.rotation.y -= 0.015;
  cube4.rotation.z -= 0.015;

  cube5.rotation.x -= 0.02;
  cube5.rotation.y -= 0.02;
  cube5.rotation.z -= 0.02;

  cube6.rotation.x -= 0.025;
  cube6.rotation.y -= 0.025;
  cube6.rotation.z -= 0.025;

  cube7.rotation.x -= 0.03;
  cube7.rotation.y -= 0.03;
  cube7.rotation.z -= 0.03;

  sphere3.rotation.y += 0.01;
  sphere3.rotation.x += 0.01;

  sphere.rotation.y -= 0.01;
  sphere.rotation.z -= 0.01;
  sphere.rotation.x -= 0.01;

  controls.update();
  
  renderer.render(scene, camera);
}

animate();
