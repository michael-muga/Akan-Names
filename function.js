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

    if (dayborn ==="sunday" && gender==="Male"){
        alert("your Akan name is Kwasi")
    }
    else if (dayborn ==="monday" && gender==="Male"){
        alert("your Akan name is kwadwo")
    }
    else if (dayborn ==="tuesday" && gender==="Male"){
        alert("your Akan name is kwabena")
    }
    else if (dayborn ==="wednesday" && gender==="Male"){
        alert("your Akan name is kwaku")
    }
    else if (dayborn ==="thursday" && gender==="Male"){
        alert("your Akan name is yaw")
    }
    else if (dayborn ==="friday" && gender==="Male"){
        alert("your Akan name is kofi")
    }
    else{
        alert("your Akan name is kwame")
    }

    if (dayborn ==="sunday" && gender==="Female"){
        alert("your Akan name is Akosua")
    }
    else if (dayborn ==="monday" && gender==="Female"){
        alert("your Akan name is Adwoa")
    }
    else if (dayborn ==="tuesday" && gender==="Female"){
        alert("your Akan name is Abenaa")
    }
    else if (dayborn ==="wednesday" && gender==="Female"){
        alert("your Akan name is Akua")
    }
    else if (dayborn ==="thursday" && gender==="Female"){
        alert("your Akan name is yaa")
    }
    else if (dayborn ==="friday" && gender==="Female"){
        alert("your Akan name is Afua")
    }
    else{
        alert("your Akan name is Ama")
    }
    
    
    
}