function truncate(str, maxlength){
    if (str.length > maxlength){
        return str.substr(0, maxlength - "...".length) + "...";
    } else {
        return str;
    }
}

let dd = document.querySelectorAll('dd');
let ddArray = [...dd];
console.log(ddArray.length);
let elementsDd = document.querySelectorAll('section .box .content p');

let objects = new Array();
let i = 0;
elementsDd.forEach(element => {
    index = Math.floor(Math.random() * ddArray.length);
    let dd = ddArray[index].innerHTML;
    element.textContent = truncate(dd, 50);
    let dt = ddArray[index].previousElementSibling;
    while (!dt.matches("dt")){
        dt = dt.previousElementSibling;
    }
    objects.push(dd);
    element.previousElementSibling.textContent = dt.innerHTML;
    ddArray.splice(index,1);
});


let elementsA = document.querySelectorAll('section .box a');
elementsA.forEach(a => {
    console.log(a.innerHTML);
    a.addEventListener("click",() => {
        if (a.innerHTML == "Подробнее"){
            a.innerHTML = "Закрыть";
            let box = a.closest(".content");
            let p = a.previousElementSibling;
            objects.forEach(e => {
               if (truncate(e, 50) == p.textContent)
                    p.textContent = e;
            });
           box.style.height = "max-content";
        } else {
            a.innerHTML = "Подробнее";
            let box = a.closest(".content");
            let p = a.previousElementSibling;
            p.textContent =  truncate(p.textContent, 50); 
        }
    });
    
})