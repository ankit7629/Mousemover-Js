const container = document.querySelector('.container')

window.addEventListener('mouseover', (e) => {

    container.innerHTML = `
        <div class="box">
            <h4>Mouse X Position</h4>
            ${e.clientX}
        </div>
        <div class="box">
            <h4>Mouse Y Position</h4>
            ${e.clientY}
        </div>
 `
})