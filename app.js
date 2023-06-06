//onload function is used when file is loaded in dom and if we want as soon as file is loaded load 
//javascript should run use window.onload
window.onload=()=>{
    function CLOCK() {
    console.log("Hello");
    const date=new Date();//gave date
    console.log(date)
    let  hours=date.getHours();//gave hours
    let minutes=date.getMinutes();//gave mintes 0-59
    let seconds=date.getSeconds();//0-59
//fetch the div with specific id 
 // console.log(document.querySelector('#first')); 
 document.querySelector('#first').innerText=hours;
 document.querySelector('#second').innerText=minutes;
 document.querySelector('#third').innerText=seconds;
 //settimeout to automatically increase time so that we dont have to click refresh continously
 setTimeout(CLOCK,1000);
    }
 CLOCK();
}

