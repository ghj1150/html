function f(x) {
    return x;
}

console.log(typeof f);
console.log(typeof f());

function myFunc(){
    console.log("핫하");
}
console.log(typeof(myFunc));

f(myFunc)();

document.addEventListener("click", function() {
    // click시 할일
})