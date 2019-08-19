var maleNames = {
    Sunday: 'Kwasi',
    Monday: 'Kwadwo',
    Tuesday: 'Kwabena',
    Wednesday: 'Kwaku',
    Thursday: 'Yaw',
    Friday: 'Kofi',
    Saturday: 'Kwame',
};

var femaleNames = {
    Sunday: 'Akosua',
    Monday: 'Adwoa',
    Tuesday: 'Abenaa',
    Wednesday: 'Akua',
    Thursday: 'Yaa',
    Friday: 'Afua',
    Saturday: 'Ama',
};


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
    if(isNaN(month) || month=== "" || month ===null || month <1 || month>12){
        alert("invalid month");
       
    }
     if(month===1 || month>2){
  if (date>ListofDays[month-1])
  {
  alert('Invalid date format!');
  return false;
  }
  }
  if(month===2){
  var lyear = false;
  if ( (!(year % 4) && year % 100) || !(year % 400)) 
  {
      
  lyear = true;
  }
  if ((lyear==false) && (date>=29))
  {
  alert('Invalid date format!');
  return false;
  }
  if ((lyear==true) && (date>29))
  {
  alert('Invalid date format!');
  return false;
  }
  }
  if(isNaN(year) || year === "" ||year === null || year <1900 || year > currentYear){
        alert("invalid year");
        return false;
 }//else{
    //     //alert("select gender")
    //     return year;
    //}
    if (gen[0].checked === false && gen[1].checked === false) {
        alert('select gender');
        return false;
     } else {
         for (i = 0; i < gen.length; i++) {
             if (gen[i].checked)
                //alert(gen[i].value);
                    var gend= gen[i].value;
                    //return gend;
                    var userInputs ={
                        userDate: date,
                        userMonth: month,
                        userYear: year,
                        userGender: gend
                    };
                    return userInputs;
                    }
                    
                
                }           
  
                
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

 function execute(){
     var a = validation();
     var DD = parseInt(a.userDate);
     var MM = parseInt(a.userMonth);
     var newYear = a.userYear;
     var YY = parseInt(newYear.slice(2,4));
     var CC = parseInt(newYear.slice(0,2));
     var newGender = a.userGender;
//var weekDate = Math.floor((((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);
// var a = (14 - month) / 12
//                                       //calculating dday of the week
// var y = year - a                          //https://www.mindstick.com/blog/387/calculating-day-of-the-week-for-any-date-in-javascript

// var m = month + 12 * a - 2

// var d = (day + y + y / 4 - y / 100 + y / 400 + (31 * m / 12) % 7

var a = Math.floor((14 - MM) / 12);
var y = newYear - a;
 var m = MM + 12 * a - 2;
 var dayOfTheWeek = (DD + y + Math.floor(y / 4) - Math.floor(y / 100) +
 Math.floor(newYear / 400) + Math.floor((31 * m) / 12)) % 7;
 console.log(dayOfTheWeek);
 var daysOfaweek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday',       
         'Thursday', 'Friday', 'Saturday');
 

var realDay = daysOfaweek[dayOfTheWeek];
// return realDay;

if (newGender === "male") {
    //var myAkanObj = maleAkaname;

    for (var name in maleNames) {
        if (maleNames.hasOwnProperty(name)) {
            if (name === realDay) {
                //userAkanName = myAkanObj[akan];
                alert("Your Akan name is "+maleNames[name]);
            }
        }
    }

 }
}

