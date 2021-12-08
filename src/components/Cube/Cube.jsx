import React, { Component } from 'react'
import * as THREE from 'three'

export default class Cube extends Component {
    componentDidMount() {
        this.sceneSetup()
        this.addCustomSceneObjects()
        this.startAnimationLoop()
        window.addEventListener('resize', this.handleWindowResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize)
        window.cancelAnimationFrame(this.requestID)
        this.controls.dispose()
    }

    PointerLockControls = function (camera) {
        let scope = this
        camera.rotation.set(0, 0, 0)
        let pitchObject = new THREE.Object3D()
        pitchObject.add(camera)
        let yawObject = new THREE.Object3D()
        yawObject.position.y = 10
        yawObject.add(pitchObject)
        const PI_2 = Math.PI / 2

        let onMouseMove = (event) => {
            if (scope.enabled === false) return
            let movementX =
                event.movementX ||
                event.mozMovementX ||
                event.webkitMovementX ||
                0
            let movementY =
                event.movementY ||
                event.mozMovementY ||
                event.webkitMovementY ||
                0
            yawObject.rotation.y -= movementX * 0.002
            pitchObject.rotation.x -= movementY * 0.002
            pitchObject.rotation.x = Math.max(
                -PI_2,
                Math.min(PI_2, pitchObject.rotation.x)
            )
        }

        this.dispose = () => {
            document.removeEventListener('mousemove', onMouseMove, false)
        }

        document.addEventListener('mousemove', onMouseMove, false)
        scope.enabled = false
        this.getObject = function () {
            return yawObject
        }

        this.getDirection = (function () {
            let direction = new THREE.Vector3(0, 0, -1)
            let rotation = new THREE.Euler(0, 0, 0, 'YXZ')
            return function (v) {
                rotation.set(pitchObject.rotation.x, yawObject.rotation.y, 0)
                v.copy(direction).applyEuler(rotation)
                return v
            }
        })()
    }

    sceneSetup = () => {
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight

        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(95, width / height, 0.1, 20)
        this.camera.position.z = 0.0001
        this.controls = new this.PointerLockControls(this.camera)

        this.controls.enabled = true
        this.scene.add(this.controls.getObject())
        this.controls.getObject().position.set(0, 0, 0)

        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize(width, height)
        this.renderer.setClearColor(0x000000)
        this.mount.appendChild(this.renderer.domElement)
    }

    addCustomSceneObjects = () => {
        const geometry = new THREE.BoxGeometry(10, 10, 10, 12, 12, 12)
        const material = new THREE.MeshBasicMaterial({
            color: 0x151e21,
            wireframe: true,
        })
        this.cube = new THREE.Mesh(geometry, material)
        this.scene.add(this.cube)

        let light = new THREE.AmbientLight(0xffffff)

        this.scene.add(light)
    }

    startAnimationLoop = () => {
        this.renderer.render(this.scene, this.camera)
        this.requestID = window.requestAnimationFrame(this.startAnimationLoop)
    }

    handleWindowResize = () => {
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight

        this.renderer.setSize(width, height)
        this.camera.aspect = width / height
        this.camera.updateProjectionMatrix()
    }

    render() {
        return <div className={`${this.props.showCube} cube`} ref={(ref) => (this.mount = ref)} />
    }
}
