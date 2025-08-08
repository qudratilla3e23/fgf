// let randomson = Math.floor(Math.random() * 90000 + 10000);
// console.log(randomson);

// console.log(5 == 5); // true

// let yosh = prompt("Yosh kiriting:");
// if (yosh >= 16) {
//     alert("Siz pasport olishingiz mumkin");
// } else {
//     alert("Mumkin emas");
// }

// let son = prompt("Son kiriting:");
// if (son % 2 == 0) {
//     alert(son + " juft son");
// } else {
//     alert(son + " toq son");
// }

// letson = ("Son kiriting")
// if (son == 1) {
//     alert("Dushanba");
// } else if (son == 2) {
//     alert("Seshanba");
// } else if (son == 3) {
//     alert("Chorshanba");
// } else if (son == 4) {
//     alert("Payshanba");
// } else if (son == 5) {
//     alert("Juma");
// } else if (son == 6) {
//     alert("Shanba");
// } else if (son == 7) {
//     alert("Yakshanba");
// } else {
//     alert("Bunday kun yo'q");
// }


let baho = prompt("Baho kiriting (1-5):");

if (baho == 1) {
    alert("Yomon");
} else if (baho == 2) {
    alert("Qoniqarsiz");
} else if (baho == 3) {
    alert("Qoniqarli");
} else if (baho == 4) {
    alert("Yaxshi");
} else if (baho == 5) {
    alert("A'lo");
} else {
    alert("Noto‘g‘ri baho kiritildi");
}


let rang = prompt("Rang kiriting (yashil, qizil, sariq):");

if (rang.toLowerCase() === "yashil") {
    alert("Yur");
} else if (rang.toLowerCase() === "qizil") {
    alert("To‘xta");
} else if (rang.toLowerCase() === "sariq") {
    alert("Tayyorlan");
} else {
    alert("Bunday rang mavjud emas");
}
