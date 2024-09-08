const CREATOR = document.getElementById('creator-box');
const LIST = document.getElementById('task-list');
let tag = 0;

function addTask(){
    let task = document.createElement('div');
    let text = document.createElement('p');
    let del = document.createElement('button');

    task.style.width = '556px';
    task.style.height = '50px';
    task.style.backgroundColor = '#fff';
    task.style.marginTop = '5px';
    task.style.border = 'solid 1px #000';
    task.style.borderRadius = '5px';
    task.setAttribute('id', `task${tag}`);

    text.textContent = CREATOR.value;
    text.style.fontSize = '18px';
    text.style.position = 'relative';
    text.style.bottom = '2px';
    text.style.left = '15px';

    del.style.width = '70px';
    del.style.height = ' 50px';
    del.style.backgroundColor = '#ff0000'
    del.style.position = 'relative';
    del.style.bottom = '57px';
    del.style.left = '486px';
    del.style.border = 'none';
    del.style.borderTopRightRadius = '5px';
    del.style.borderBottomRightRadius = '5px';
    del.style.fontSize = '24px';
    del.style.color = '#fff';
    del.innerHTML = 'X';
    del.style.fontStyle = 'bold';
    del.setAttribute('onclick', `delTask(${tag})`);
    
    CREATOR.value = '';

    task.appendChild(text);
    task.appendChild(del);
    LIST.appendChild(task);

    tag++;
}

function delTask(taskTag){
    let selTask = document.getElementById(`task${taskTag}`);
    selTask.remove();
}