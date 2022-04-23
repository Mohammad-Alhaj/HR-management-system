"use strict";

let sectionEl =document.getElementById("section")
let formEl =document.getElementById("form")
let info=[];


function Employee(employeeId,fullName,department,level,imageUlr,salary) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
this.salary=salary;

this.imageUlr=imageUlr,

info.push(this);
  }
  SVGStyleElement
  

 let employee1= new Employee(Math.floor(1000 + Math.random() * 9000),"GhaziSamer","Administration","Senior","photo/Ghazi.jpg",);
 let employee2= new Employee(Math.floor(1000 + Math.random() * 9000),"LanaAli","Finance","Senior","photo/Lana.jpg", );
 let employee3= new Employee(Math.floor(1000 + Math.random() * 9000),"TamaraAyoub","Marketing","Senior","photo/Tamara.jpg",);
 let employee4= new Employee(Math.floor(1000 + Math.random() * 9000),"SafiWalid","Administration","MidSenior","photo/Safi.jpg",);
 let employee5= new Employee(Math.floor(1000 + Math.random() * 9000),"OmarZaid","Development","Senior","photo/Omar.jpg",)
 let employee6= new Employee(Math.floor(1000 + Math.random() * 9000),"RanaSaleh","Development", "Junior","photo/Rana.jpg",);
 let employee7= new Employee(Math.floor(1000 + Math.random() * 9000),"HadiAhmad","Finance","MidSenior","photo/Hadi.jpg",);
 



 Employee.prototype.salaryy=function(){
      if (this.level=="Senior") {

          return (Math.floor(Math.random() * (2000 - 1500 + 1) ) + 1500)*0.925;
      
      }
      else if (this.level=="MidSenior") {
        return (Math.floor(Math.random() * (1500 - 1000 + 1) ) + 1000)*0.925;

      }else if (this.level=="Junior"); {
        return (Math.floor(Math.random() * (1000 - 500 + 1) ) + 500)*0.925;
      }
 }

 Employee.prototype.render=function(){
 
  document.write("<center><div>The full name is " +employee1.fullName+" and the salary is " +employee1.salary+"</div>");
  
  document.write("<div>The full name is " +employee2.fullName+" and the salary is " +employee2.salary+"</div>");
  document.write("<div>The full name is " +employee3.fullName+" and the salary is " +employee3.salary+"</div>");
  document.write("<div>The full name is " +employee4.fullName+" and the salary is " +employee4.salary+"</div>");
  document.write("<div>The full name is " +employee5.fullName+" and the salary is " +employee5.salary+"</div>");
  document.write("<div>The full name is " +employee6.fullName+" and the salary is " +employee6.salary+"</div>");
  document.write("<div>The full name is " +employee7.fullName+" and the salary is " +employee7.salary+"</div></center>");
   }

employee1.salary=employee1.salaryy();//
employee2.salary=employee2.salaryy();
employee3.salary=employee3.salaryy();
employee4.salary=employee4.salaryy();
employee5.salary=employee5.salaryy();
employee6.salary=employee6.salaryy();
employee7.salary=employee7.salaryy();



 console.table(employee6);
 employee1.render();

Employee.prototype.render=function () {

  let employeeId=document.createElement("p")
  employeeId.textContent=`EmployeeId : ${this.employeeId}`;
  sectionEl.appendChild(employeeId);


let fullName=document.createElement("p");
fullName.textContent=`Full Name : ${this.fullName}`;
sectionEl.appendChild(fullName);

let department=document.createElement("p");
department.textContent=` Department : ${this.department}`;
sectionEl.appendChild(department);

let level=document.createElement("p");
level.textContent=`level : ${this.level}`;
sectionEl.appendChild(level);

let image=document.createElement("img");//document.getElementById("myImg").height = "300";
//document.getElementById("myImg").width = "300";
image.src=this.imageUlr;
sectionEl.appendChild(image);
image.style.width="160px";
}



console.log(sectionEl);

for (let i = 0; i < info.length; i++) {
  info[i].render();
}

 

formEl.addEventListener("submit", handleSubmit);

  function handleSubmit(event) {
      // the default behaviour of submitting the form is to refresh the page
event.preventDefault();
      // console.log("Form event", event);
      // console.log("Form event", event)
      let employeeId=event.target.EmployeeId.value;
let fullName=event.target.FullName.value;
let department=event.target .Department.value;
let level=event.target.Level.value;
let image=event.target.Image.value;



let newemployee= new Employee(Math.floor(1000 + Math.random() * 9000),fullName,department,level,"photo/new employee.jpg");

newemployee.render();
    console.log(newemployee);


    };
