const myForm = document.getElementById('myForm');
let idInput = (<HTMLInputElement>document.getElementById('idInput'))
let nameInput = (<HTMLInputElement>document.getElementById('nameInput'))
const genderInput = (<HTMLInputElement>document.getElementById('genderInput'))
const output = document.getElementById('output');
const tbody = document.getElementsByTagName('tbody')[0];

interface student {
    name: string,
    id: string,
    gender: string
}

const nameList: student[] = [];

function displayTable() {

    tbody.innerHTML = ``

    nameList.forEach((e, index) => {
        const tr = tbody.insertRow();
        const tdId = tr.insertCell();
        const tdName = tr.insertCell();
        const tdGender = tr.insertCell();

        tdId.textContent = e.id
        tdName.textContent = e.name;
        tdGender.textContent = e.gender;

        const tdAction = tr.insertCell();
        const delButton = document.createElement('button');
        delButton.textContent = 'Delete'
        delButton.addEventListener('click', () => {
            nameList.splice(index, 1);
            displayTable()
        })
        tdAction.appendChild(delButton)
    });
}

myForm!.addEventListener('submit', (event) => {
    event.preventDefault();
    const studentInput : student = { id: idInput.value, name: nameInput.value, gender: genderInput.value }

    nameList.push(studentInput);

    displayTable();

    nameInput!.value = '';
    idInput!.value = '';
    console.log(idInput.value)

});
