let obj = require("readline-sync") ;
let fs = require("fs");   // loaded core fs module



module.exports.AddEmployee = function addEmployee(){

let number1 = obj.question("Enter Number of Records you wanna store : ") ;
console.log(" ");
console.log("Storing " +number1 + " Data Items for you  .....") ;
console.log(" "); 


for(var i =0 ; i < number1 ; i ++) {
  
    console.log(".........................................") ;
    let fname = obj.question("Enter your first Name : ") ;
    let lname = obj.question("Enter your last Name : ") ;
    let Gender = obj.question("Enter your Gender : ") ;
    let Email = obj.question("Enter your Email : ") ;
    var d = new Date();
    

    console.log(".........................................") ;
    console.log("Your Entered Details : ") ;
    console.log("First : " +fname) ;
    console.log("Last  : " +lname) ;
    console.log("Gender : " +Gender) ;
    console.log("Email : " +Email) ;
    console.log("Entered @ : " +d) ;
    console.log(".........................................") ;
    
    

    var emp = {} ;
    emp.FirstName = fname ;
    emp.LastName = lname;
    emp.Gender = Gender ;
    emp.Email = Email ;
    emp.TimeStamp = d ;
    
  
     fs.readFile("log.json" ,  (err,data) => {
        
        
        if(!err) {
            
          var newA = JSON.parse(data) ;
          newA.push(emp);
     
     
          fs.writeFile("log.json" , JSON.stringify(newA) ,  (err) => {
            if(!err) {
                console.log("Record Stored") ;
            }
        });
        }


    });
}

}




    
