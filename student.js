
document.querySelector("form").addEventListener("submit", function (e) {
e.preventDefault();


const studentData = {
name: document.getElementById("studentName").value,
rollNo: document.getElementById("rollNo").value,
dob: document.getElementById("dob").value,
gender: document.getElementById("gender").value,
email: document.getElementById("email").value,
phone: document.getElementById("phone").value,
department: document.getElementById("department").value,
year: document.getElementById("year").value,
address: document.getElementById("address").value
};


let students = JSON.parse(localStorage.getItem("students")) || [];
students.push(studentData);
localStorage.setItem("students", JSON.stringify(students));


alert("Student details saved successfully (LocalStorage)");
this.reset();
});
