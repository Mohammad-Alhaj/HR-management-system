"use strict";



function Employee(employeeId,fullName,department,level,imageUlr,salary) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
this.salary=salary;

this.imageUlr=imageUlr;
  }
  
 let employee1= new Employee(1000,"GhaziSamer","Administration","Senior","./images.jpg",);
 let employee2= new Employee(1001,"LanaAli","Finance","Senior","./images.jpg", );
 let employee3= new Employee(1002,"TamaraAyoub","Marketing","Senior","./images.jpg",);
 let employee4= new Employee(1003,"SafiWalid","Administration","MidSenior","./images.jpg",);
 let employee5= new Employee(1004,"OmarZaid","Development","Senior","./images.jpg",)
; let employee6= new Employee(1005,"RanaSaleh","Development", "Junior","./images.jpg",);
 let employee7= new Employee(1006,"HadiAhmad","Finance","MidSenior","./images.jpg",);
 
 
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

document.write("<div>The full name is " +employee1.fullName+" and the salary is " +employee1.salary+"</div>");

document.write("<div>The full name is " +employee2.fullName+" and the salary is " +employee2.salary+"</div>");
document.write("<div>The full name is " +employee3.fullName+" and the salary is " +employee3.salary+"</div>");
document.write("<div>The full name is " +employee4.fullName+" and the salary is " +employee4.salary+"</div>");
document.write("<div>The full name is " +employee5.fullName+" and the salary is " +employee5.salary+"</div>");
document.write("<div>The full name is " +employee6.fullName+" and the salary is " +employee6.salary+"</div>");
document.write("<div>The full name is " +employee7.fullName+" and the salary is " +employee7.salary+"</div>");
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

//  for (const key in Employee) {
//    console.log(key);
//    console.log(Employee[key]);
//  }
 

 