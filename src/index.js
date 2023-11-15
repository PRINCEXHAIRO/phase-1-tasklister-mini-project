document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form')

  form.addEventListener('submit', (e) => {
    e.preventDefault();
  // Will return the value we targeted
 buildToDo(e.target.new-task-description.value)
 form.reset()

  })
});

  function buildToDo(todo) { 
    console.log(todo)
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.innerHTML = 'X'
    btn.addEventListener('click', handleDelete)
    p.innerHTML = todo
    p.appendChild(btn)
    const tasks = document.querySelector('#tasks')
    tasks.appendChild(p)
    btn.addEventListener('click')
  }

  function handleDelete(e){
    e.target.parentNode.remove()
  }
