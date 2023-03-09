
	const form = document.querySelector("#newTaskForm");
	const input = document.querySelector("#newTaskInput");
	const listElement = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;
        if (!task){
            alert("Please Enter Your Task Below.");
            return;
        }

        // Create a div class called "task":
		const classTask = document.createElement('div');
		classTask.classList.add('task');

        // Create Another div class called "content":
		const classContent = document.createElement('div');
		classContent.classList.add('content');

        // Put the div class "content" into div class "task":
		classTask.appendChild(classContent);

        // Create Input Box:
		const taskInput = document.createElement('input');
		taskInput.classList.add('text');
		taskInput.type = 'text';
		taskInput.value = task;
		taskInput.setAttribute('readonly', 'readonly');

        // Put the input class into content class:
		classContent.appendChild(taskInput);

        // Create action class to put buttons in:
		const classActions = document.createElement('div');
		classActions.classList.add('actions');
		
        // Create An Edit Button:
		const editBtn = document.createElement('button');
		editBtn.classList.add('edit');
		editBtn.innerText = 'Edit';

		// Create A Delete Button:
		const deleteBtn = document.createElement('button');
  		deleteBtn.className = 'btn-icon remove';
		
        // Put both buttons in the class actions:
		classActions.appendChild(editBtn);
		classActions.appendChild(deleteBtn);

        // Put class action in the class task:
		classTask.appendChild(classActions);

        // Put class task in the main class tasks:
		listElement.appendChild(classTask);

        // To empty out the input after user submit:
		input.value = '';

		editBtn.addEventListener('click', (e) => {
			if (editBtn.innerText.toLowerCase() == "edit") {
				editBtn.innerText = "Save";
				taskInput.removeAttribute("readonly");
				taskInput.focus();
			} else {
				editBtn.innerText = "Edit";
				taskInput.setAttribute("readonly", "readonly");
			}
		});

		deleteBtn.addEventListener('click', (e) => {
			listElement.removeChild(classTask);
		});
		
	});
