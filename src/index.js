// Create variables
const messageList = document.querySelector('.listHolder');
const addInput = document.querySelector('#userInput');
const addBtn = document.querySelector('#addBtn');

// Create a function to create the list
function addList (){
    if (addInput.value === '') {
        alert('Please Enter Your Name.') 
        return false;
    }

    const ul = messageList.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = `Welcome to my page, ${addInput.value}.`;
    addInput.value = ''; // Add this to remove the previous
    ul.appendChild(li);
    createBtn(li);
}

addBtn.addEventListener('click', () => {
    addList();
})

// Add list when Enter Key pressed
addInput.addEventListener('keyup', (event) => {
    if(event.which === 13)
        addList();
})

/* 3. create action buttons*/

// create variables
const listUl = document.querySelector('.list');

// create remove button
function createBtn(button) {
  // create down button
  const editBtn = document.createElement('button');
  editBtn.className = 'btn-icon down';
  editBtn.classList.add('edit');
  editBtn.innerText = "Edit";
  button.appendChild(editBtn);

  const removeBtn = document.createElement('button');
  removeBtn.className = 'btn-icon remove';
  removeBtn.classList.add('remove');
  removeBtn.innerText = "Remove";
  button.appendChild(removeBtn);


  return button;
}

// To Remove each message line when the button is clicked
messageList.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const button = event.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if (button.className === 'btn-icon remove') 
      ul.removeChild(li);
  }
});