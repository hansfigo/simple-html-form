"use strict";
const myForm = document.getElementById('myForm');
let idInput = document.getElementById('idInput');
let nameInput = document.getElementById('nameInput');
const genderInput = document.getElementById('genderInput');
const output = document.getElementById('output');
const tbody = document.getElementsByTagName('tbody')[0];
const nameList = [];
function displayTable() {
    tbody.innerHTML = ``;
    nameList.forEach((e, index) => {
        const tr = tbody.insertRow();
        const tdId = tr.insertCell();
        const tdName = tr.insertCell();
        const tdGender = tr.insertCell();
        tdId.textContent = e.id;
        tdName.textContent = e.name;
        tdGender.textContent = e.gender;
        const tdAction = tr.insertCell();
        const delButton = document.createElement('button');
        delButton.textContent = 'Delete';
        delButton.addEventListener('click', () => {
            nameList.splice(index, 1);
            displayTable();
        });
        tdAction.appendChild(delButton);
    });
}
myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const studentInput = { id: idInput.value, name: nameInput.value, gender: genderInput.value };
    nameList.push(studentInput);
    displayTable();
    nameInput.value = '';
    idInput.value = '';
    console.log(idInput.value);
});
