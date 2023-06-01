const item= Selection.clientHeight / Selection.clientWidth

const scene= new THREE.scene()
const camera= new THREE.perspectiveCamera(75, item, 0.1, 1000);

const renderer= new THREE.webGLRenderer({
    alpha: true,
    anialias: true
});

renderer.setSize( section.clientHeight , section.clientWidth)
section.appendChild( renderer.domElement);

const loader = new THREE.TextureLoader();

const geometry = new THREE.PlaneGeometry(5, 3, 50, 30);

const material = new THREE.MeshBasicMaterial({
    map: loader.load(image)
});

const flag = new THRE.Mesh( geometry, material);
scene.add(flag);

flag.rotation.set( -0.1, 0, 0)
camera.position.z = 5;

const clock = new THREE.Clock()

function animate() {
    const t = clock.getElapsedTime();

    flag.geometry.vertices.map(v => {
        const waveX1 = 0.5 * Math.sin(v.x * 2 + 1)
        const waveX2 = 0.25 * Math.sin(v.x * 3 + t * 2)
        const waveY1 = 0.1 * Math.sin(v.y * 5 + t * 0.5)

        v.z = (waveX1 + waveX2 + waveY1)* multi
    })
    flag.geometry.verticesNeedUpdate = true

    requestAnimationFrame( animate );
    renderer.render( scene,camera )
}

animate();

window.addEventListener("resize", function(){
    camera.aspect = section.clientWidth / section.clientHeight
    camera.updateProjectionMatrix()

    renderer.setSize ( section.clientWidth, section.clientHeight)
})