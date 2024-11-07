const todolist = [{name:'ridita',dueDate: '2022-23-12'},{name:'farhan',dueDate:2023-29-10}];
const ridita = [];
let the_todolist = '';
let html = '';
function addTodo() {
    const lisit = document.querySelector('.js-input-todo');
    const listElement = lisit.value;
   // todolist.push(listElement);
    console.log(listElement);
    lisit.value=''; 
    make_a_list();
    
}
function make_a_list(){
    for(let k=0;k<todolist.length;k++)
    {
        const todoObject = todolist[k];
        const namere = todoObject.name;
        const dueDate = todoObject.dueDate;
        let p = 
        
        `<p>${namere} ${dueDate}
        <button onclick = "todolist.splice(${k},1);addTodo();">Delete</button>
        </p>`;

        the_todolist = the_todolist + p;
        
    }
    let po = document.querySelector('.js-todo-listi');
    po.innerHTML = the_todolist;
}

