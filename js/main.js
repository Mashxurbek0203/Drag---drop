const item = document.querySelector('.item');

const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', drop)
}

function dragStart(event) {
    setTimeout(() => {
        event.target.classList.add('hide')

    }, 0)
    event.target.classList.add('hold')
}


function dragEnd(event) {
    event.target.className = 'item'
}

function dragover(event) {
    event.preventDefault()
    console.log('drag over');
}

function dragenter(event) {
    event.target.classList.add('hovered')
    console.log('drag enter');

}

function dragleave(event) {
    event.target.classList = 'placeholder'
    console.log('drag leave');

}

function drop(event) {
    event.target.className = 'placeholder'
    event.target.append(item)
    console.log('drag drop');
}