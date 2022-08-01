function userName(){
var Name= prompt("Please enter your name:");
if(Name==""){
return '"invalid"';
}
return Name;

}
function userGender(){
    var Gender =prompt("Please enter your gender (male or female)");
    if(Gender==""){
        return '"invalid"';
        }
    return Gender;
    
}
function userAge(){
    Age=prompt("Please enter your age:");
    if (Age<=0){
        alert("Your age can't be zero or negative!");
        userAge();
    }
    return Age;

}
function welcomingMassege(){
    var welcommigMass=confirm("do you want to see welcoming massege?")
    return welcommigMass;
}

function welcomeMassege(gender,name){
    if (gender=="male"){
    alert("welcome Mr."+ name+".");
    }
    else if (gender=="female"){
    alert("welcome ms." + name);
    }
    else 
    alert("welcome "+name);
}
function plusThreeQuestions(){
  var Q1= prompt("do you know javascript language?(yes/no)");
   if (Q1==""){
    Q1= '"invaled"';
   }
  var Q2=prompt("do you know HTML language?(yes/no)");
  if (Q2==""){
    Q2= '"invaled"';
   }
  var Q3=prompt("do you know python language?(yes/no)");
  if (Q3==""){
    Q3= '"invaled"';
   }
   var arr=[Q1,Q2,Q3];
   return arr;
}
function calling_functions(){
   var user_name=userName();
   var user_gender=userGender();
   var user_age=userAge();
   var welcoming_massege=welcomingMassege();
   if (welcoming_massege==true){
   var welcome_massege= welcomeMassege(user_gender,user_name);
   var AdissionalQuesstions= plusThreeQuestions();
   var arr =["Javascript?",AdissionalQuesstions[0],"HTML?",AdissionalQuesstions[1],"python?",AdissionalQuesstions[2]];
   }
   var array =[user_name,user_gender,user_age,arr];
   return array;
   }
   var array =calling_functions();
   console.log(array);



