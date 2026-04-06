// SCENE SETUP
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("drone-container").appendChild(renderer.domElement);

// LIGHTING
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const light = new THREE.DirectionalLight(0x00eaff, 1);
light.position.set(5, 5, 5);
scene.add(light);

// DRONE GROUP
const drone = new THREE.Group();
scene.add(drone);

// BODY (CENTER)
const body = new THREE.Mesh(
  new THREE.BoxGeometry(0.8, 0.2, 0.8),
  new THREE.MeshStandardMaterial({
    color: 0x111111,
    metalness: 0.9,
    roughness: 0.2,
  }),
);
drone.add(body);

// ARMS + MOTORS + PROPELLERS
const propellers = [];

function createArm(x, z) {
  // ARM
  const arm = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 1.6),
    new THREE.MeshStandardMaterial({ color: 0x00eaff }),
  );

  arm.rotation.z = Math.PI / 2;
  arm.position.set(x / 2, 0, z / 2);
  drone.add(arm);

  // MOTOR
  const motor = new THREE.Mesh(
    new THREE.CylinderGeometry(0.15, 0.15, 0.2),
    new THREE.MeshStandardMaterial({ color: 0x222222 }),
  );

  motor.position.set(x, 0.15, z);
  drone.add(motor);

  // PROPELLER
  const prop = new THREE.Mesh(
    new THREE.BoxGeometry(1, 0.02, 0.1),
    new THREE.MeshStandardMaterial({ color: 0x00eaff }),
  );

  prop.position.set(x, 0.25, z);
  drone.add(prop);

  propellers.push(prop);
}

// 4 ARMS (X shape)
createArm(1, 1);
createArm(-1, 1);
createArm(1, -1);
createArm(-1, -1);

// CAMERA
camera.position.set(0, 1.5, 5);

// ANIMATION
let time = 0;

function animate() {
  requestAnimationFrame(animate);

  time += 0.02;

  // FLOATING
  drone.position.y = Math.sin(time) * 0.2;

  // SIDE MOTION
  drone.position.x = Math.sin(time * 0.5) * 0.3;

  // ROTATION
  drone.rotation.y += 0.01;

  // PROPELLER SPIN
  propellers.forEach((p) => {
    p.rotation.y += 0.6;
  });

  renderer.render(scene, camera);
}

animate();

// RESPONSIVE
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
