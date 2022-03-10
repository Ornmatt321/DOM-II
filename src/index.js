import './less/index.less'

// Your code goes here!
console.log('hello world');

window.onload = function (evt) {
    console.log(`event ${evt.type} fired! Ready to go!`);
    const heading = document.querySelector('h1');
    heading.textContent = "READY TO GO!";
    
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
        .then(text => {
            heading.textContent += text
        })
    })
    document.body.addEventListener('click', evt => {
        evt.target.classList.toggle('mirror')
    })

    document.body.addEventListener('dblclick', evt => {
        evt.target.outerHTML = '';
    })

    window.addEventListener('keydown', evt => {
        if(evt.key == 6) {
            document.body.outerHTML = 'YOU RAN ORDER 66';
        }
    })
    document.body.addEventListener('mousemove', evt => {
        const { clientX, clientY} = evt
        // console.log(`mouse is at ${clientX}, ${clientY}`)
    })

    const destinations = document.querySelectorAll('.destination')
    // console.log(destinations)
    for (let destination of destinations) {
        destination.addEventListener('mouseenter', evt => {
// console.log(destinations)
destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', () => {
            destination.style.fontWeight = 'initial'
        }, 500)
    }
}