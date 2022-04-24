"use strict"

let infpAc=[];
let tableId=document.getElementById("tableId")
let tableId2=document.getElementById("tableID2")

function Employee(employeeId,fullName,department,level,imageUlr,salary) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
this.salary=salary;

this.imageUlr=imageUlr,

infpAc.push(this);
  }

  

let employee8= new Employee(Math.floor(1000 + Math.random() * 9000),"GhaziSamer","Administration","Senior","photo/Ghazi.jpg",);
let employee9= new Employee(Math.floor(1000 + Math.random() * 9000),"LanaAli","Finance","Senior","photo/Lana.jpg", );
let employee10= new Employee(Math.floor(1000 + Math.random() * 9000),"TamaraAyoub","Marketing","Senior","photo/Tamara.jpg",);
let employee11= new Employee(Math.floor(1000 + Math.random() * 9000),"SafiWalid","Administration","MidSenior","photo/Safi.jpg",);
let employee12= new Employee(Math.floor(1000 + Math.random() * 9000),"OmarZaid","Development","Senior","photo/Omar.jpg",)
let employee13= new Employee(Math.floor(1000 + Math.random() * 9000),"RanaSaleh","Development", "Junior","photo/Rana.jpg",);
let employee14= new Employee(Math.floor(1000 + Math.random() * 9000),"HadiAhmad","Finance","MidSenior","photo/Hadi.jpg",);




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

 // document.write("<center><div>The full name is " +employee8.fullName+" and the salary is " +employee8.salary+"</div>");
 
 // document.write("<div>The full name is " +employee9.fullName+" and the salary is " +employee9.salary+"</div>");
 // document.write("<div>The full name is " +employee10.fullName+" and the salary is " +employee10.salary+"</div>");
 // document.write("<div>The full name is " +employee4.fullName+" and the salary is " +employee4.salary+"</div>");
 // document.write("<div>The full name is " +12.fullName+" and the salary is " +12.salary+"</div>");
 // document.write("<div>The full name is " +employee6.fullName+" and the salary is " +employee6.salary+"</div>");
 // document.write("<div>The full name is " +employee14.fullName+" and the salary is " +employee14.salary+"</div></center>");
  }

employee8.salary=employee8.salaryy();//
employee9.salary=employee9.salaryy();
employee10.salary=employee10.salaryy();
employee11.salary=employee11.salaryy();
employee12.salary=employee12.salaryy();
employee13.salary=employee13.salaryy();
employee14.salary=employee14.salaryy();



// console.table(employee6);
employee8.render();

var countAdministration=0; var salaryAdm=0;
var countFinance=0;var salaryFin=0;
var countMarketing=0;var salaryMark=0;
var countDevelopment=0;var salaryDev=0;

for (let i = 0; i < infpAc.length; i++) {
    

    if (infpAc[i].department=="Administration") {
        countAdministration++;
        salaryAdm=infpAc[i].salary+salaryAdm



    }  else if (infpAc[i].department=="Finance") {
        countFinance++;
        salaryFin=infpAc[i].salary+salaryFin

    }
    else if (infpAc[i].department=="Marketing") {
        countMarketing++;
        salaryMark=infpAc[i].salary+salaryMark


    } else if (infpAc[i].department=="Development") {
        countDevelopment++;
        salaryDev=infpAc[i].salary+salaryDev
    }
}
console.log(salaryDev);

console.log(salaryAdm);


Employee.prototype.renderTable = function () {
    let tr1 = document.createElement("tr");
    tableId.appendChild(tr1);

    let Department = document.createElement("th");
    Department.textContent = `-Department-  `;
    tr1.appendChild(Department);

    let Number = document.createElement("th");
    Number.textContent = (`-Number of employees-  `);
    tr1.appendChild(Number);


    let Average = document.createElement("th");
    Average.textContent = "-Average salary-";
    tr1.appendChild(Average);

//.............//



    let tr2 = document.createElement("tr");
    tableId.appendChild(tr2);

    let Administration = document.createElement("td");
    Administration.textContent = `Administration `;
    tr2.appendChild(Administration);


    let countAdmin = document.createElement("td");
    countAdmin.textContent =countAdministration ;
    tr2.appendChild(countAdmin);

    let number = document.createElement("td");
    number.textContent =salaryAdm /countAdministration;
    tr2.appendChild(number);

//.....................//


let tr3 = document.createElement("tr");
    tableId.appendChild(tr3);

    let Finance = document.createElement("td");
    Finance.textContent = `Finance `;
    tr3.appendChild(Finance);


    let countFin = document.createElement("td");
    countFin.textContent =countFinance ;
    tr3.appendChild(countFin);

    let number1 = document.createElement("td");
    number1.textContent =salaryFin/countFinance ;
    tr3.appendChild(number1);

//..................................

let tr4 = document.createElement("tr");
    tableId.appendChild(tr4);

    let Marketing = document.createElement("td");
    Marketing.textContent = `Marketing  `;
    tr4.appendChild(Marketing);


    let countmar = document.createElement("td");
    countmar.textContent =countMarketing ;
    tr4.appendChild(countmar);

    let number2 = document.createElement("td");
    number2.textContent =salaryMark/countMarketing ;
    tr4.appendChild(number2);

//....................................../
let tr5 = document.createElement("tr");
    tableId.appendChild(tr5);

    let Development = document.createElement("td");
    Development.textContent = `Development  `;
    tr5.appendChild(Development);


    let countde = document.createElement("td");
    countde.textContent =countDevelopment ;
    tr5.appendChild(countde);

    let number3 = document.createElement("td");
    number3.textContent =salaryDev/countDevelopment;
    tr5.appendChild(number3);
}
//console.log(tableId);

Employee.prototype.renderTable2 = function () {

    let tr1 = document.createElement("tr");
    tableId2.appendChild(tr1);

    let totaEmployees = document.createElement("th");
    totaEmployees.textContent = `-TotaEmployees-  `;
    tr1.appendChild(totaEmployees);

    let averageSalary = document.createElement("th");
    averageSalary.textContent = (`-Average salary for all -  `);
    tr1.appendChild(averageSalary);


    let totalSalary = document.createElement("th");
    totalSalary.textContent = "-TotalSalary-";
    tr1.appendChild(totalSalary);

//.............................................
let tr2 = document.createElement("tr");
    tableId2.appendChild(tr2);

    let totaEmp = document.createElement("td");
    totaEmp.textContent = countAdministration+countFinance+countMarketing+countDevelopment;
    tr2.appendChild(totaEmp);


    let averageSal = document.createElement("td");
    averageSal.textContent =(salaryAdm+salaryFin+salaryMark+salaryDev)/4 ;
    tr2.appendChild(averageSal);

    let totalSal = document.createElement("td");
    totalSal.textContent =salaryAdm+salaryFin+salaryMark+salaryDev
    tr2.appendChild(totalSal);



    
}

 
function renderAll()
{
  for (let i = 0; i < 1; i++) {
    infpAc[i].renderTable();
    infpAc[i].renderTable2();
  }

}

renderAll()

