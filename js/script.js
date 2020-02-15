document.querySelector('button').addEventListener('click', random);
function random() {
   let a = String(Math.floor(Math.random() * 255));
   let b = String(Math.floor(Math.random() * 255));
   let c = String(Math.floor(Math.random() * 255));
   let all;
   all = "rgb("+a +"," + b +"," + c +")";
   document.querySelector('body').style.background = all;
}

