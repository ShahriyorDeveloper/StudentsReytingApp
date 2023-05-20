let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let students = document.getElementById("students");
let add = document.getElementById("add");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
});

let formValidation = () => {
    if (textInput.value === "") {
        console.log("failure");
        msg.innerHTML = "Task cannot be blank";
    } else {
        console.log("success");
        msg.innerHTML = "";
    }
    acceptData();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();

    (() => {
        add.setAttribute("data-bs-dismiss", "");
    })();

};

let data = [];

let acceptData = () => {
    data.push({
        text: textInput.value,
        date: dateInput.value,
        description: textarea.value,
    });

    localStorage.setItem("data", JSON.stringify(data));

    console.log(data);
    createTasks();
};

let createTasks = () => {

    data.sort((a, b) => {
        return b.description - a.description;
    });
    
    students.innerHTML = "";
    data.map((x, y) => {
        return (students.innerHTML += `
        
        <tr> ${y + 1}</tr>
        <tr id=${y + 1}>
            <td class="fw-bold">${x.text}</td>
            <td class="small text-secondary">${x.date}</td>
            <td>${x.description} ball</td>
    
            <td class="options">
              <i onClick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
              <i onClick="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
            </td>
        </tr>
      `);
    });

    resetForm();

};


let resetForm = () => {
    textInput.value = "";
    dateInput.value = "";
    textarea.value = "";
};
let deleteTask = (e) => {
    e.parentElement.parentElement.remove();

    data.splice(e.parentElement.parentElement.id, 1);

    localStorage.setItem("data", JSON.stringify(data));

    console.log(data);
};
let editTask = (e) => {
    let selectedTask = e.parentElement.parentElement;

    textInput.value = selectedTask.children[0].innerHTML;
    dateInput.value = selectedTask.children[1].innerHTML;
    textarea.value = selectedTask.children[2].innerHTML;

    deleteTask(e);
};

(() => {
    data = JSON.parse(localStorage.getItem("data")) || [];
    console.log(data);
    createTasks();
})();




















































// concat
// const fruits = ['apple', 'cherry', 'lemon'];
// const vegetables = ['pump', 'carrot', 'potato'];

// console.log(fruits.concat(vegetables));


// indeOF
// const fruits = ['apple', 'cherry', 'lemon'];

// console.log(fruits.indexOf('lemon'));

// find

// const fruits = [1, 3, 5, 6, 7];

// // let arr = fruits.find(elem =>  elem > 4 )

// console.log(fruits.find(elem =>  elem > 4 ));


// findIndex

// const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 44;

// console.log(array1.findIndex(isLargeNumber));
// Expected output: 3


// Foreach
// const fruits = ['apple', 'cherry', 'lemon'];

// fruits.forEach((elem, index ) => {
//     console.log(elem + '  ' + index);
// });

// includes

// const fruits = ['apple', 'cherry', 'lemon'];

// console.log(fruits.includes('apple'));


// sort


// const fruits = ['melon','banana','apple', 'cherry', 'lemon'];
// const numbers = [5, 232, 8, 34, 2, 4, 1, 23, 12,]
// numbers.sort(function (a, b) {
//     return b - a
// });

// document.getElementById('lorem').innerHTML = numbers

// numbers.forEach((elem) => {
//     document.getElementById('lorem').innerHTML = elem
// });


// numbers.map((elem) => {
//     document.getElementById('lorem').innerHTML = elem
// });


// console.log(numbers);



// let p = document.getElementById('lorem');

// const students = [
//     {
//         name: "Shahriyor",
//         score: 10
//     },
//     {
//         name: "Shahriyor",
//         score: 5
//     },
//     {
//         name: "Shahriyor",
//         score: 3
//     },
//     {
//         name: "Shahriyor",
//         score: 1
//     },
// ]

// function arraySort (a, b) {
//     return b.score - a.score
// }

// console.log(students.sort(arraySort));

// students.map((elem) => {
//     p.innerHTML += `
//     <div>
//         <p>${elem.name}</p>
//         <p>${students.sort(function (a, b) {
//             return b.score - a.score
//         })}</p>
//     </div>
//     `

//     // elem.sort(function (a, b) {
//     //     return b - a
//     // });
// });


// Slice

// const numbers = [5, 232, 8, 34, 2, 4, 1, 23, 12,]

// console.log(numbers.slice(1, 4));


// splice

// const numbers = [5, 232, 8, 34, 2, 4, 1, 23, 12,]

// let num = numbers.splice(0, 6);
// console.log(num);

// console.log(numbers);


// var num = 10;

// {
//     console.log(num = 20);
//     let raqam = 2;
// };

// console.log(this);

// func()

