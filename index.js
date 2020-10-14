
//------------------------------------------A1---------------------------------------------------------
// function findOppositeNumber(n,inputNumber){
//     if(n<4||n%2!=0||parseInt(n)!= n||n>20){
//         return "n đang nhập không phải số nguyên dương chẵn nằm trong khoảng từ 4 đến 20"
//     }
//     else{
//         if(inputNumber>=n){
//             return "inputNumber không được lớn hơn hoặc bằng n "
//         }
//         else{
//             if(inputNumber>=n/2){
//                 console.log(1)
//                 return inputNumber-n/2
//             }
//             else{console.log (2)
//                 return n/2+inputNumber}
//         }
//     }
// }
// console.log(findOppositeNumber(12,2))



//------------------------------------------A2-----------------------------------------------------------
// function merge2String(s1, s2) {
//     if (typeof s1 != `string` || typeof s2 != `string`) {
//         return `s1 và s2 phải là stringz`
//     }
//     else {
//         s1 = s1.split("")
//         console.log(...s1)
//         s2 = s2.split("")
//         console.log(...s2)
//         let flag = true
//         let length = s1.length
//         let merge = ""
//         let i
//         if (s1.length >= s2.length) {
//             length = s2.length
//             flag = false
//         }
//         for (i = 0; i < length; i++) {
//             merge = merge + s1[i] + s2[i]
//         }
//         if (flag) {
//             for (i = length; i < s2.length; i++) {
//                 merge = merge + s2[i]
//             }
//         }
//         else {
//             for (i = length; i < s1.length; i++) {
//                 merge = merge + s1[i]
//             }
//         }
//         return merge
//     }
// }
// console.log(merge2String(`abc123`, `efg`))






//------------------------------------------B------------------------------------------------------------
// let ques = document.getElementById("mid").getElementsByTagName("p")[0]
// let input = document.getElementById("input")
// let btn = document.getElementById(`btn`)
// let countUi = document.getElementById(`count`)
// let count = 3
// let res = document.getElementById(`res`)
// function quayso() {
//     if (input.value < 1 || input.value > 10) {
//         alert("Bạn phải nhập số từ 1 đến 10")
//         input.value = ""
//     }

//     else if (Number(input.value).toString() == `NaN`) {
//         alert("Không được nhập chữ")
//         input.value = ""
//     }
//     else {
//         let kq = Math.floor(Math.random() * 10 + 1)
//         if (input.value == kq) {
//             countUi.textContent = ""
//             res.innerHTML = `  <h2>Kết quả là: <span>${kq}</span></h2>
//             <p class="congra">Chúc mừng bạn đã trúng:</p><p class="congra"> 1 con búp bê</>`
//             btn.removeEventListener('click', quayso)
//             ques.textContent = "Bạn có muốn chơi lại không?"
//             btn.className = "remake"
//             btn.textContent = "CHƠI LẠI"
//             console.log(btn)
//             btn.addEventListener(`click`, () => { location.reload() })
//         }
//         else {
//             countUi.textContent = `Bạn còn ${count - 1} lượt chơi`
//             res.innerHTML = `<h2><p>Số bạn dự đoán:&nbsp;&nbsp; <span>${input.value}</span> </p> <p>Kết quả là:&nbsp;&nbsp; <span>${kq}</span></p></h2>
//             <P id="next">Chúc bạn may mắn lần sau</P>`
//             count--
//             kq = Math.floor(Math.random() * 10 + 1)
//             if (count == 0 && input.value != kq) {
//                 res.innerHTML = `<h2><p>Số bạn dự đoán:&nbsp;&nbsp; <span>${input.value}</span> </p> <p>Kết quả là:&nbsp;&nbsp; <span>${kq}</span></p></h2>
//                 <P id="next">Chúc bạn may mắn lần sau</P>
//                 <h1 id="gameover">Bạn hết lượt chơi rồi !!!</h1>`
//                 btn.removeEventListener('click', quayso)
//                 ques.textContent = "Bạn có muốn chơi lại không?"
//                 btn.className = "remake"
//                 btn.textContent = "CHƠI LẠI"
//                 btn.addEventListener(`click`, () => { location.reload() })
//             }
//             input.value = ""
//         }
//     }
// }
// btn.addEventListener(`click`, quayso)