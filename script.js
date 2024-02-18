var addBtn = document.getElementsByClassName('add-btn')[0];
var input = document.querySelector('input[type="text"]');
var tbody = document.getElementsByTagName('tbody')[0];
var id = 1;
var usernameCell;


addBtn.addEventListener('click', function(){
    var editIcon = '<svg class="edit-btn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>'
    var deleteIcon = '<svg class="delete-btn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>'
    if(input.value !== ''){
        var tr = document.createElement('tr')
        tr.innerHTML = `<td>${id++}</td><td>${input.value}</td><td class="edit-cell" onclick="editHandler(this)">${editIcon}</td><td onclick="deleteHandler(this)">${deleteIcon}</td>`;
        tbody.appendChild(tr);
        input.value = '';
    }
})

function editHandler(editBtn){
    disableEditBtns();
    hideUsernameCell(editBtn);
    createEditForm();
}

function disableEditBtns() {
    var editCells = document.getElementsByClassName('edit-cell');
    for (var i = 0; i < editCells.length; i++) {
        editCells[i].setAttribute('style', 'pointer-events:none;');
    }
}

function hideUsernameCell(editBtn) {
    usernameCell = editBtn.previousElementSibling;
    usernameCell.style.display = 'none';
}

function createEditForm() {
    var oldUsername = usernameCell.innerText;
    var editTd = document.createElement('td');
    editTd.setAttribute('id', 'edit-td');
    editTd.innerHTML = `<input type="text" value="${oldUsername}"/><button class="update-btn" onclick="updateHandler(this)">update</button><button class="cancel-btn" onclick="cancelHandler(this)">cancel</button>`;
    usernameCell.insertAdjacentElement('afterend', editTd);
}


function updateHandler(updateBtn){
    var updateInput = updateBtn.previousElementSibling;
    if(updateInput.value !== ''){
        usernameCell.innerText = updateInput.value;
        usernameCell.removeAttribute('style');
        updateBtn.parentElement.remove()
        enableEditBtns();
    }
}

function enableEditBtns() {
    var editCells = document.getElementsByClassName('edit-cell');
    for (var i = 0; i < editCells.length; i++) {
        editCells[i].removeAttribute('style');
    }
}

function cancelHandler(){
    usernameCell.style.display = 'table-cell';
    var editTd = document.getElementById('edit-td');
    editTd.remove();
    enableEditBtns();
}

function deleteHandler(deleteBtn){
    deleteBtn.parentElement.remove(); 
}