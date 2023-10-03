const desinput = document.getElementById('des') as HTMLInputElement;

const addbtn = document.getElementById('addbtn') as HTMLButtonElement; 

const todolist = document.getElementById('todolist') as HTMLUListElement;


import axios from  'axios'

const count: number = 1

addbtn.addEventListener('click', () => {
    const li = document.createElement('li') as HTMLLIElement;
    const desValue :string = desinput.value;
    li.innerHTML = desValue

    todolist.appendChild(li)
    console.log(desValue)
    const obj = {
        id: count,
        des: desValue
    }
    axios.post('http://localhost:300/todo',obj ).then(data  =>console.log(data))
    .catch(err => console.log(err))
})