const now = new Date();
console.log(now);
console.log(now.getFullYear(), now.getMonth()+1, now.getDate());
console.log(now.getHours(), now.getMinutes(), now.getSeconds());
console.log(now.getTime(), now.getDay());

console.log(now.getDay());

switch (now.getDay()) {
    case 0:
        console.log("일요일");
        break;
    case 1:
        console.log("월요일");
        break;
    case 2:
        console.log("화요일");
        break;
    case 3:
        console.log("수요일");
        break;
    case 4:
        console.log("목요일");
        break;
    case 5:
        console.log("금요일");
        break;
    case 6:
        console.log("토요일");
        break;
}

let days = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"];
console.log(days[now.getDay()]);



