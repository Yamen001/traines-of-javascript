// let names = ["yamen","majd","ahmed","Yasser","bassem"]
// for(let i =0; i <names.length ; i++){
//     if(names[i][0] == names[i][0].toUpperCase()){
//         console.log(names[i] + " we found the name")
//     }
// }
// //finding name start with y uppercare()
// console.log("#".repeat(10))

// let namesrev = [];
// function reverse(){
//     for(let i =0; i<names.length; i++){
//         namesrev.unshift(names[i])
//     }
//     return namesrev;
// }
// console.log(reverse())
// // reversing array
// console.log("#".repeat(10))


// function noYnames(){
//     for(let i =0; i<names.length ; i++){
//         if(names[i].charAt(0) == "y".toUpperCase() || names[i].charAt(0) == "y".toLowerCase()  ){
//             names.pop(names[i])
//         }
//     }
//     console.log(names)
// }
// noYnames()
// console.log(names)
// //array with no Y names
// console.log("#".repeat(10))

// let useres = {
//     "yamen":1,
//     "majd":2,
//     "iyad":3,
//     "ehsan":4,
//     ages :{
//         age1 : 18,
//         age2 : 22,
//         age3 : 42,
//         age4 : 12,
//     },
//     user1 : function user(name,age){
//         return `hello iam ${name} ...and im ${age} years old`
//     }
// }
// let objssize = Object.keys(useres)
// console.log(objssize)
// console.log(objssize.length)
// console.log(Object.values(useres.ages))
// console.log(useres.user1(Object.keys(useres)[0]),Object.values(useres.ages)[0].toString())
// console.log("#".repeat(10))



// let games = {
//     names:{
//         1:"Call_of_Duty",
//         2:"Fortnite",
//         3: "Cars",
//         4:"Fifa_20",
//         5:"Ono",
//         6:"Mortal_kombat",
//     },
//     prices :{
//         1: 40,
//         2: 20,
//         3: 35,
//         4: 42,
//         5: 53,
//         6: 25,
//     }
// }
// let games_names = Object.values(games.names)
// let games_prices = Object.values(games.prices)

// let game = function game(){
//     for(let i =0 ; i<games_names.length; i++){
//         console.log(`${i}) ${games_names[i]} ===> price is : ${games_prices[i]}`)
//     }
// }
// game()
// // getting the games details
// console.log("#".repeat(10))


// let array = [1,66,3,2,77,12,344]
// // console.log(array.sort())
// function bubblesort(){
//     for(let j=0; j<array.length; j++){
//         for(let i =0 ; i< array.length; i++){
//             if(array[i] >= array[i+1]){
//                 let box ;
//                 box = array[i+1]
//                 array[i+1] = array[i]
//                 array[i] = box;
//             }
//             else{
//                 continue;
//             }
//         }
//     }
//     return array
// }
// console.log(bubblesort())
// // sort an array


// let arrayin = [666,343,21,33,1,88,4]
// function insertionsort(array){
//     for(let i=1; i<array.length; i++){

        
//         let temp = array[i];
//         console.log("!!!" +temp)
//         let j = i - 1;

//         while(array[j]> temp){
//             console.log("################################")
//             console.log(array[j])
//             console.log(array[j +1 ])
//             array[j+1] = array[j]
//             j--
//             console.log(j)
//         }
//         j++
//         array[j] = temp
//     }
//     return array
// }

// [2,12,3,4,11]
// console.log(insertionsort(arrayin))
// let array1 = ["yamen","majd","ehsan","yasser","ossama","sayed"]
// // let osamma = array1.indexOf("ossama")
// // console.log(osamma)
// function indexnum(name){
//     for(let i =0; i<array1.length; i++){
//         if(array1[i] == name){
//             return i
//         }
//     }
// }
// console.log(indexnum("ehsan"))
// console.log(indexnum("ossama"))
// finding index of name

// let array2 = [1,2,4,6,88,3,33,12,123]
// // console.log(array2.slice(array2.indexOf(array2[0]),array2.indexOf(array2[1])))
// function removenum(num){
//     // console.log(typeof(num))
//     // console.log(typeof(array2[1]))
//     if(array2.length !== 0){
//         for(let i =0; i<array2.length; i++){
//             if(array2[i] == num){
//                 // console.log(array2.slice(array2.indexOf(array2[i]),array2.indexOf(array2[i+1])))
//                 array2.splice(array2.indexOf(array2[i]),1,"hiiiiii")
//             }
//         }
//     }
//     return array2
// }
// // console.log(removenum(12))
// console.log(removenum(2))
// console.log('$'.repeat(20))
// //remove any number from array


// let line = "This handout will help you understand how paragraphs are Formed, how to develop stronger paragraphs, and How to completely and clearly express your ideas."
// console.time("abc")
// function linecapatilze(line){
//     let array = line.split(" ")
//     // console.log(array.length)
//     for(let i =0; i<array.length; i++){
//         if(array[i].startsWith(array[i][0].toLowerCase())){
//             array[i] = array[i].substring(0,1).toUpperCase() + array[i].substring(1,100)
//         }
//     }
//     return array.join(" ")
// }
// console.log(linecapatilze(line))
// console.timeEnd("abc")
// capitlize a line 



// swap arrays
// exchange words in paraghrap
// sort array
// linear search
// squential search
// objects with alot of information 

// bubble sort 


// function largernumber(a,b){
//     if(a> b){
//         return console.log(a)
//     }
//     return console.log(b)
// }
// largernumber(11,3)
// largernumber(11,311)

// function signofproduct(a,b,c){
//     let x = a * b * c;
//     if(x <= 0){
//         console.log(`${x} the sign is -`)
//     }
//     else{
//         console.log(`${x} the sign is +`)
//     }
// }
// signofproduct(1,3,5)
// signofproduct(1,-30,5)


// function sortthreenumberes(a,b,c){
//     let array = [a,b,c]
//     for(let j =0; j<array.length ; j++){
//         for(let i =0;i<array.length ; i++){
//             if(array[i] >= array[i+1]){
//                 let box ;
//                 box = array[i]
//                 array[i] = array[i+1]
//                 array[i+1] = box;
//             }
//         }
//     }
//     window.alert(array)
// }
// sortthreenumberes(33,4,2)


// function findlargesetnum(array){
//     for(let j =0; j<array.length ; j++){
//         for(let i =0;i<array.length ; i++){
//             if(array[i] >= array[i+1]){
//                 let box ;
//                 box = array[i]
//                 array[i] = array[i+1]
//                 array[i+1] = box;
//             }
//         }
//     }
//     return window.alert(array[array.length-1])
// }
// findlargesetnum([1,2,66,31,33,11])
// findlargesetnum([1,2,66,31,33,11,-666,43,100])
// //find the largest number ..after sorting it we take the last index


// function oddeven(){
//     for(let i=0;i<=15;i++){
//         if(i%2 ===0){
//             console.log(`${i} is even`)
//         }
//         else{
//             console.log(`${i} is odd `)
//         }
//     }
// }
// oddeven()

// function average(name,mark){
//     let letter ;
//     if(mark <= 60){
//         letter = "F";
//     }
//     else if(60 < mark && mark <= 70){
//         letter = "D"
//     }
//     else if(70 < mark && mark <= 80 ){
//         letter = "C"
//     }
//     else if( 80 < mark && mark <= 90){
//         letter = "B"
//     }
//     else{
//         letter = "A"
//     }
//     console.log(letter)
//     switch(letter){
//         case "A":
//             console.log(`${name} YOUR MARK is "A"`);
//             break;
//         case "B":
//             console.log(`${name} YOUR MARK is "B"`);
//             break;
//         case "C":
//             console.log(`${name} YOUR MARK is "C"`);
//             break;
//         case "D":
//             console.log(`${name} YOUR MARK is "D"`);
//             break;
//         case "F":
//             console.log(`${name} YOUR MARK is "F"`);
//             break;
//     }
// }
// average("yamen",100)
// average("yamen",80)

// average("yamen",70)
// average("yamen",61)


// function pattern(lines){
//     let chr; //to hold the stars
//     for(let i = 0; i <= lines ; i++){ // for number of lines

//         for(let j =1 ; j < i  ; j++){ //for number of stars ..every start of the loop j = 1
//             chr+= "*";
//         }
//         console.log(chr)
//         chr = ""
//     }
// }
// pattern(10)


// function armstrong(num){
//     let x = num
//     let array = x.toString().split("")
//     // console.log(+array[0])
//     let y= (+array[0]) ** 3 + (+array[1])**3 + (+array[2]) **3
//     console.log(y)
// }
// armstrong(424)



// function checkifisarray(ele){
//     if(typeof(ele) === typeof([])){
//         return true
//     }
//     return false
// }
// console.log(checkifisarray("sdf"))
// console.log(checkifisarray([1,36,32]))


// function returnfirstN_eles(array,n){
//     if(array == null){
//         return `false`;
//     }
//     if(n == null){
//         return array[0]
//     }
//     if(n < 0){
//         return [];
//     }
//     return array.slice(0,n) 
// }
// console.log(returnfirstN_eles([1,2,5,22,63],2))
// console.log(returnfirstN_eles([1,2,5,22,63]))
// console.log(returnfirstN_eles([1,2,5,22,63],-1))
// console.log(returnfirstN_eles())


// function returnlastN_eles(array,n){
//     if(array == null){
//         return false;
//     }
//     if(n == null){
//         return array.slice(-1)
//     }
//     if(n < 0){
//         return array.slice(n)
//     }
//     else{
//         return array.slice(-n)
//     }
// }
// console.log(returnlastN_eles(null,-2))
// console.log(returnlastN_eles([1,2,5,22,63],null))
// console.log(returnlastN_eles([1,2,5,22,63],-1))
// console.log(returnlastN_eles([1,2,5,22,63],1))
// console.log(returnlastN_eles([1,2,5,22,63],4))


// function joinarray(array,n){
//     if(array == null){
//         return false;
//     }
//     else{
//         let words = "'" ; // its better to give words ="" empty better than undifined
//         for(let i =0; i<n ; i++){
//             words+= ` ${array[i]},`
//         }
//         return `${words} '`
//     }
// }
// console.log(joinarray(["red","blue","orange","green"],["red","blue","orange","green"].length))
// console.log(joinarray(["red","blue","orange","green","yellow","purple"],["red","blue","orange","green","yellow","purple"].length))


// function evenDash(number){
//     if(number === null){
//         return false;
//     }
//     if(typeof(number) !== typeof(1)){
//         return `not a number`;
//     }
//     let numbers = number.toString().split("")
//     for(let i =0; i<numbers.length ; i++){
//         if(numbers[i]%2 === 0 && numbers[i+1]%2 ===0){
//             numbers[i] = `${numbers[i]}-`
//         }
//     }
//     return numbers.join("")
// }
// console.log(evenDash("dfsd"))
// console.log(evenDash(42243))
//add dash between tow even numberes

//not work yet
// function frequentitem(array){
//     if(array.length ===0 || array.length ===1){
//         return false;
//     }
//     if(typeof(array) !== typeof([])){
//         return false;
//     }
//     let numberes = '';
//     let letters = '';
//     //we sepeariting tow arrays ...one for number and one for letteres

//     for(let i =0; i<array.length; i++){
//         if(typeof(array[i]) == typeof(1)){
//             numberes = numberes + array[i].toString() +"-"
//         }
//         else{
//             letters = letters+ array[i] + "-"
//         }
//     }
//     let numberesarray = numberes.split("-").slice(0,-1) // now we have array of numberes
//     let lettersarray = letters.split("-").slice(0,1) // now we have array of letteres
//     // console.log(numberesarray)    
//     // console.log(lettersarray)
//     // console.log(lettersarray.length)

//     function repeateditems(numarr,letarr){
//         let numberresult;
//         let letterresult

//         if(numarr.length == 0 || numarr.length == 1){
//             numberresult = "done"
//         }
//         if(letarr.length == 0 || letarr.length == 1){
//             letterresult = "done"
//         }
//         for(let i =0; i<numberesarray.length; i++){
//             let counter= 0
//             for(let j=i; j<numberesarray.length; j++){
//                 if(numberesarray[i] == numberesarray[j+1]){
//                     Console.WriteLine("Current count: {0}", i + 1);
//                 }
//             }
//         }
//         return letterresult
//     }
//     return repeateditems(numberesarray,lettersarray)
// }
// console.log(frequentitem([1,3,56,'d']))


// var a = [1,2,3];
// var b = [1,2,3];

// var c = { x: 1, y: 2 };
// var d = { x: 1, y: 2 };

// var e = "text";
// var f = "te" + "xt";

// a == b            // false
// a === b           // false

// c == d            // false
// c === d           // false

// e == f            // true
// e === f           // true


// '' == '0'           // false
// 0 == ''             // true
// 0 == '0'            // true

// false == 'false'    // false
// false == '0'        // true

// false == undefined  // false
// false == null       // false
// null == undefined   // true

// ' \t\r\n ' == 0     // true


// function lettersswitcher(text){
//     if(text.length === 0 || text.length === 1){
//         return false;
//     }
//     let array = text.split("")
//     for(let i =0; i<array.length;i++){
//         if(array[i] == array[i].toUpperCase()){
//             array[i]= array[i].toLowerCase()
//         }
//         else{
//             array[i]= array[i].toUpperCase()
//         }
//     }
//     return array.join("")
// }
// letter switcher
// another way

// let smalllet = "abcdefghijklmnopqrstuvwxyz"
// let capitallet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let resurlt = []

// function letterswitcher(text){
//     for(let i =0; i<text.length; i++){
//         if(smalllet.indexOf(text[i]) !== -1){
//             resurlt.push(text[i].toUpperCase())
//         }
//         else if(capitallet.indexOf(text[i]) !== -1){
//             resurlt.push(text[i].toLowerCase())
//         }
//         else{
//             resurlt.push(text[i])
//         }
//     }
//     return resurlt.join("")
// }
// console.log(letterswitcher("Hello threr "))
// letter switcher


//not worked yet
// function arrayrows(array){
//     for(let i =0; i<=array.length; i++){
//         console.log(`row ${i+1}`)
//         if(array[i].length <= 1){
//             console.log(array[i])
//         }
//         else{
//             for(let j=0; j<array[i].length;j++){
//                 console.log(array[i][j])
//             }
//         }
//     }
// }
// arrayrows([[1,2,3],[11,22,3],2])
//every element in the main array we creat row:0 1 2 


// function lengthofvector(text){
//     let x = text.split("+")
//     // let az="abcdefghijklmnopqrstwxyz"
//     // let AZ="abcdefghijklmnopqrstwxyz".toUpperCase();

//     let num1 = +(x[0].split("i").slice(0,1))
//     let num2 = +(x[1].split("j").slice(0,1))
//     console.log(Math.sqrt(num1**2 + num2**2).toFixed(1))
    
// }
// lengthofvector("4i + 2j")
// //find the lenght of a vector


// function muladdnumbers(array){
//     let addtion = 0 ; 
//     let mult = 1;
//     for(let i =0; i<array.length; i++){
//         addtion = addtion + array[i]
//         mult = mult * array[i]
//     }
//     return ` the multi answer is : ${mult}
//     the addtion answer is ${addtion}`
// }
// console.log(muladdnumbers([1,4,3]))


// setTimeout(function sayhello(){
//     console.log('hello')
// },3000)

// let counter = 0
// let handler = setInterval(function counter1(){
//     counter++
//     console.log(counter)
//     if(counter === 5){
//         stop()
//     }
// },1000)
// function stop(){
//     clearInterval(handler)
// }

// let x = document.body;
// const handler = setInterval(colors,1000)
// let counter =0
// function colors(){
//     if(counter === 5){
//         stopcolors()
//     }
//     if(x.style.backgroundColor == "yellow"){
//         x.style.backgroundColor = "red"
//     }
//     else {
//         x.style.backgroundColor = "yellow"
//     }
//     console.log(counter)
//     counter++
// }
// function stopcolors(){
//     clearInterval(handler)
//}

// let input = document.querySelector("#input")
// let add = document.querySelector(".add")
// let display = document.querySelector(".display")
// let array = []
// add.onclick= function add(){
//     if(input.value == ""){
//         console.log("nothing to add")
//     }
//     else{
//         array.push(input.value)
//         input.value = ""
//     }
// }
// display.onclick = function show(){
//     for(let i =0 ; i<array.length; i++){
//         console.log(array)
//         document.querySelector(".result").innerHTML =  document.querySelector(".result").innerHTML+ array[i] +" "
//     }
// }
{/* <div>
<input type="text" name="" id="input">
<button class="add">add</button>
<button class="display">display</button>
<div class="result"></div>
</div> */}
// add items to the page


