let submit = document.getElementById("btn");
let resContent = document.getElementById("result-content");
let apikey = "ema_live_YUJWjiVzeW5byC1ieu1SGHYYFmw8j1TH7qVHBo75";
let str = ``;
submit.addEventListener("click", (event) => {
    event.preventDefault();
    resContent.innerHTML = `<img src="images/loading2.svg" width="50px">`;
    validateEmail();
})

const validateEmail = async () => {
    let email = document.getElementById("email").value;
    if (!email) {
        resContent.innerHTML = `Please Enter Email`;
        return;
    }
    let url = `https://api.emailvalidation.io/v1/info?apikey=${apikey}&email=${email}`;
    console.log(url);
    let reponse = await fetch(url);
    console.log(reponse);
    let data = await reponse.json();
    console.log(data);
    str = ``;
    resContent.innerHTML = str;
    for (const key in data) {
        str += `<div>${key}: ${data[key]}</div>`
    }
    resContent.innerHTML = str;
}