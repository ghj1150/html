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

// document.addEventListener("click", function() {
//     // click시 할일
// });

// scope
// 지역변수 : 함수내에서 선언한 변수
// 전역변수 : 지역변수가 아닌 변수

// var b = 20; // 전역
function test() {
    // console.log(a);
    // var a = 10;
    // console.log(a);
    // console.log(b);
    b = 30;
}

// console.log(a);
test();
console.log(b);

for(var i = 0; i < 10; i++) {

}
console.log(i);
{
    {
        {
            {
                {
                    {
                        var num = 30;
                    }
                }
            }
        }
    }
}

console.log(num);

function f1() {
    var local = 30;
    function f2() {
        console.log(local);
    }
    f2();
}
f1();

