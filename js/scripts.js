const male = {
    Sunday: 'Kwasi',
    Monday: 'Kwadwo',
    Tuesday: 'Kwabena',
    Wednesday: 'Kwaku',
    Thursday: 'Yaw',
    Friday: 'Kofi',
    Saturday: 'Kwame',
};

const female = {
    Sunday: 'Akosua',
    Monday: 'Adwoa',
    Tuesday: 'Abenaa',
    Wednesday: 'Akua',
    Thursday: 'Yaa',
    Friday: 'Afua',
    Saturday: 'Ama',
};
const gender = [male, female];
// // console.log(gender[1]);
// console.log(Object.keys(gender[0]));
// console.log(gender.prototype.keys());
// function validation (){
// // const inputText = document.querySelector('[bd]')
// //     var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

// }

function ClearFields() {

     document.getElementById("d").value = "";
     document.getElementById("m").value = "";
     document.getElementById("yy").value = "";
     document.getElementsByName("gd").value = "";
     
     document.getElementById('one').style.display = "none";
     document.getElementById('two').style.display = "none";
     document.getElementById('three').style.display = "none";
     document.getElementById('four').style.display = "none";
     document.getElementById("ans").style.display = "none";
}

// function validation (){
//     var
//     var month = document.getElementsByName('m');

//     var reg = /^(0?[1-9]|1[012])$/;
//     if(month.value.test(reg)){
//         alert('valid month');
//     }else{
//         alert('invalid month')
//     }
// const validation =()=>{
//     const day = document.getElementById('d');
//     const month = document.getElementById('m');
//     const year = document.getElementById('yy');
//     const sex = document.getElementsByName('gd');

//     if(day.value === "" && month.value === "" ){
//         alert("fill all fields")
//     }else{
//         alert('lets go on');
//     }



// }

function validation() {
    var date = document.getElementById("d").value;
    
    var month = document.getElementById("m").value;
    var year = document.getElementById("yy").value;
    var gen = document.getElementsByName("gd");
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    if(isNaN(date) || date === null || date === "" || date < 1 || date > 31){
        alert("invalid date");
        return false;
    }
    var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
    

    if (month===1 || month>2){
  if (date>ListofDays[month-1])
  {
  alert('Invalid date format!');
  return false;
  }
  }
  if (month===2){
  var lyear = false;
  if ( (!(year % 4) && year % 100) || !(year % 400)) 
  {
  lyear = true;
  }
  if ((lyear==false) && (dd>=29))
  {
  alert('Invalid date format!');
  return false;
  }
  if ((lyear==true) && (dd>29))
  {
  alert('Invalid date format!');
  return false;
  }
  }
//   }
//   else
//   {
//   alert("Invalid date format!");
//   document.form1.text1.focus();
//   return false;
//   }
    // if(isNaN(date.value) ||date.value <1 || date.value >31 ||date.value === null || date.value === ""){
    //     //alert("Invalid date format");
    // document.getElementById('one').innerHTML = "invalid day";
    // document.getElementById('one').style.color = "red"
    // }else{
    //     //alert("continue");
    //     return date;
    // }
    // if (isNaN(month.value) || month.value < 1 || month.value > 12 || month.value === "" || month.value == null) {
    //     //alert('invalid month');
    //     document.getElementById('two').innerHTML = "invalid month";
    // document.getElementById('two').style.color = "red"
    // } else {
    //     //alert('you ok');
    //     return month;
    // }
    // if(isNaN(year.value) || year.value === "" ||year.value === null || year.value <1900 || year.value > currentYear){
    //     //alert("invalid year");
    //     document.getElementById('three').innerHTML = "invalid year";
    // document.getElementById('three').style.color = "red"
    // }else{
    //     //alert("select gender")
    //     return year;
        
    // }
    // if (gen[0].checked === false && gen[1].checked === false) {
    //    // alert('get out of here');
    //     document.getElementById('four').innerHTML = "select gender";
    // document.getElementById('four').style.color = "red"
    // } else {
    //     for (i = 0; i < gen.length; i++) {
    //         if (gen[i].checked)
    //             var gend= gen[i].value
    //             return gend;
    //             }

}

// function calDay(){
//     var userInputs = validation();
//     updateDate = myDetails.newDate
//     updateMonth = myDetails.newMonth;
//     updateYear = myDetails.newYear;
//     updateGender = myDetails.newGender;
//     console.log(updateDate);
//}
 function realValues(){
     var a= validation();
     var day = parseInt(a.myDate);
     var month =parseInt(a.myMonth);
     var year = a.myYear;
     var yy = parseInt(year.slice(2,4));
     var cc =parseInt(year.slice(0,2));
//var myDate = 
 }

