const blob = {
    struct: document.getElementById('blob'),
    input: {w: false, a: false, s: false, d: false},
    position: {x: 0, y: 0},
    velocity: {x: 0, y: 0}
}
window.addEventListener('keydown', (event) => {
    switch(event.key.toString().toLowerCase()) {
        case 'w':
        case 'arrowup':
            blob.input.w = true
            break
        case 'a':
        case 'arrowleft':
            blob.input.a = true
            break
        case 's':
        case 'arrowdown':
            blob.input.s = true
            break
        case 'd':
        case 'arrowright':
            blob.input.d = true
            break
    }
})
window.addEventListener('keyup', (event) => {
    switch(event.key.toString().toLowerCase()) {
        case 'w':
        case 'arrowup':
            blob.input.w = false
            break
        case 'a':
        case 'arrowleft':
            blob.input.a = false
            break
        case 's':
        case 'arrowdown':
            blob.input.s = false
            break
        case 'd':
        case 'arrowright':
            blob.input.d = false
            break
    }
})

function thing() {
    document.querySelector('audio').play()
    var s = setInterval(function(){
        document.getElementById('add').setAttribute('onclick', '')
        blob.struct.setAttribute('src', 'img/blob.gif')
        blob.struct.style.top = 0
        blob.struct.style.left = 0
        animate()
        clearInterval(s)
    }, 4500)
}
function animate() {
    window.requestAnimationFrame(animate)

    blob.struct.style.left = blob.position.x
    blob.struct.style.top = blob.position.y

    blob.position.x += blob.velocity.x
    blob.position.y += blob.velocity.y

    if(blob.input.a) {
        blob.velocity.x = -5
    }
    else if(blob.input.d) {
        blob.velocity.x = 5
    }
    else blob.velocity.x = 0

    if(blob.input.w) {
        blob.velocity.y = -5
    }
    else if(blob.input.s) {
        blob.velocity.y = 5
    }
    else blob.velocity.y = 0
    
}