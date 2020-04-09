// create a scene 
let scene = new THREE.Scene();
scene.background = new THREE.Color('aqua');

// create a camera
let fov = 75;
let aspect = window.innerWidth/window.innerHeight;
let near = 0.1;
let far = 100;
let camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
let camX = 0;
let camY = 0;
let camZ = 10;
let ltX = 0;
let ltY = 0;
let ltZ = 10;

// create a Renderer
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// add the automatically created CANVAS element to the page
document.body.appendChild(renderer.domElement);

//renderer.render(scene, camera);

// create a Geometry
let geometry = new THREE.BoxBufferGeometry(3,3,3);

// create a Material
//let material = new THREE.MeshBasicMaterial({ color: 0xc203fc });
//let material = new THREE.MeshStandardMaterial({ color: 0xc203fc });
let material = new THREE.MeshToonMaterial({ color: 0xc203fc });

// create a Mesh containing the Geometry and Material
let mesh = new THREE.Mesh(geometry, material);

// add the mesh to the screen
scene.add(mesh);

camera.position.set(camX,camY,camZ);

// create a new directional light
let light = new THREE.DirectionalLight(0xffffff,5.0);

// move light back and up
light.position.set(ltX,ltY,ltZ);
scene.add(light);



// is equivalent to camera
renderer.render(scene, camera);

let animate = function() {
    requestAnimationFrame( animate );

    camera.position.set(camX,camY,camZ);
    light.position.set(ltX,ltY,ltZ);

    // increase the mesh's rotation each frame
   // mesh.rotation.x += 0.01;
  //  mesh.rotation.y += 0.01;
  //  mesh.rotation.z += 0.01;
    renderer.render(scene, camera);
}

animate();