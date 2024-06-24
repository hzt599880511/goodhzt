var newDiv = document.createElement('div');
newDiv.className = 'inserted-element';
newDiv.textContent = 'money! money! money! ';
const a = new Date('2024-06-19 00:00:00').getTime()
const b = new Date().getTime();
console.log(newDiv)
if (b > a) {
    if(newDiv){
        document.body.appendChild(newDiv);
    }
}
