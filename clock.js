window.setInterval(function (){
    let time = document.getElementById("c");
    let date = document.getElementById("d");
    let tmp = new Date();

    let day = tmp.getDay() - 1;
    let month = tmp.getMonth() + 1;
    
    time.innerText = tmp.getHours() + ":" + tmp.getMinutes() + ":" + tmp.getSeconds();
    date.innerText = day + "/" + month + "/" + tmp.getFullYear();
},1000);