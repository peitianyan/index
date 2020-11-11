
let year_btn = document.getElementsByClassName('year')[0];
let month_btn = document.getElementsByClassName('month')[0];
let year = document.getElementsByClassName('year')[0].getElementsByTagName('ul')[0];
let month = document.getElementsByClassName('month')[0].getElementsByTagName('ul')[0];
console.log(year);
function getYear(){
    year_btn.onmouseover = ()=>{
        year.style.display = "block";

    }
    year_btn.onmouseout =()=>{
        year.style.display = "none";
    }
}
getYear();
function getMonth(){
    month_btn.onmouseover = ()=>{
        month.style.display = "block";

    }
    month_btn.onmouseout = ()=>{
        month.style.display = "none";

    }
}
getMonth();


