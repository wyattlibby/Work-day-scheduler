// deal with date and time
const date=new Date();
const datestring=date.toLocaleDateString();
const hour=date.getHours();
$("#currentday").text(datestring);
$("#hour"+hour).addClass("present");

const rows=document.querySelectorAll(".row");
for (let row of rows){
    const appointment=localStorage.getItem(row.id);
    if(appointment){
        row.querySelector("textarea").value=appointment;
    }
}

const buttons=document.querySelectorAll("button");
for(let button of buttons){
    button.addEventListener("click",saveAppointment);
}
function saveAppointment(e){
    const button=e.currentTarget;
    const hour=button.parentElement.id;
    const appointment=button.previousElementSibling.value;
    localStorage.setItem(hour,appointment);
}