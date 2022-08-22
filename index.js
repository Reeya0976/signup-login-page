function func(){
    let un = document.getElementById("un").value;
    let pw = document.getElementById("pw").value;
    if(un=="Reeya" && pw == "2022"){
        window.location.href="wel.html";
    }
    else{
        alert("incoreect un and pw")
    }
}