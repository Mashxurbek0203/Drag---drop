const gameBtns = document.querySelectorAll('.game-btn')
console.log(gameBtns);

gameBtns.forEach((gameBtn) => {
    gameBtn.addEventListener('dragstart', dragstart)
    gameBtn.addEventListener('dragend', dragend)
})

const placeholders = document.querySelectorAll('.placeholder')


placeholders.forEach((placeholder) => {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', drop)
})

function dragover(event) {
    event.preventDefault();
}

function dragenter(event) {
    event.target.classList.add('hovered')
}

function dragleave(event) {
    event.target.className = 'placeholder'
}

function drop(event) {
    event.target.className = 'placeholder'
    event.target.append(dragstart())
}

function dragstart(event) {
    setTimeout(() => {
        event.target.classList.add('hide')
    }, 0);
    return event.target
}

function dragend(event) {
    event.target.classList.remove('hide')
}