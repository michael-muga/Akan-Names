function akanName(){
    gender = document.getElementById("gender").nodeValue;
    dob = parseInt( document.getElementById("DOB").nodeValue);
    var then = new Date(dob)
    var theday = then.getDay();
    var date= then.getDate();
    var year = then.getFullYear();

    var weekday = new Array(6);
    weekday[1] = "sunday";
    weekday[2] = "monday";
    weekday[3] = "tuesday";
    weekday[4] = "wednesday";
    weekday[5] = "thursday";
    weekday[6] = "friday";
    weekday[7] = "saturday";

    dayborn = weekday[theday];
    alert(gender);
}