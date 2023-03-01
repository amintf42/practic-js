let table = document.querySelector("table");


let students =[
{
    name: "sana",
    family: "samin",
    age: 30,
    nationalID: '0016879543',
    phoneNumber: '09121001010',
    skill: 'JS',
    isAwarded: false
},
{
    name: "Sara",
    family: "Darabi",
    age: 22,
    nationalID: '01234567',
    phoneNumber: '09121556548',
    skill: 'Nodejs',
    isAwarded: true,
    // imgSrc: "hafez.jpg"
},
{
    name: "Arsalan",
    family: "Darabi",
    age: 22,
    nationalID: '01234567',
    phoneNumber: '09121556548',
    skill: 'Nodejs',
    isAwarded: false
},
]
for (const student of students) {
let tr = document.createElement("tr");

    for (const key in student) {
        let value = student[key];
        let td = document.createElement("td");
        if(value == true){
            tr.style.background = "green"
            tr.style.color = "white"

        }
        td.textContent = value;
        tr.appendChild(td);
    }
    table.appendChild(tr);

}
