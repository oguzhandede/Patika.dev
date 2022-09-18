let Username = prompt("Lütfen İsminiz Giriniz:");
let Username_html = document.querySelector("#UserName");

if (Username.length > 2) {
    Username_html.innerHTML = ` ${Username}  `
} else {
    let Username = prompt("Lütfen Gecerli Bir İsminiz Giriniz:");

}

function DateHours() {

    let date = new Date().toDateString();
    document.getElementById('tarih').innerHTML = date;

    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let secound = new Date().getSeconds();
    document.getElementById('hours').innerHTML = hour + ":" + minutes+":"+secound;
}
setInterval(DateHours,1000);