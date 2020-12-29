let button = document.getElementById('button');
let buttonClose = document.getElementById('close');

button.addEventListener('click', function (){
    let features = "menubar=no, scrollbars=yes, width=500, height=500, status=no, toolbar=no";
    let myWindow = window.open('https://www.wwe.com/', '', features);

    myWindow.resizeBy(500, 600);

    buttonClose.addEventListener('click', function (){
        myWindow.close();
    })
})
