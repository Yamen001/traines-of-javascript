// function checkinput(text){
//     if(Object.prototype.toString.call(text) === '[object String]'){
//         return true;
//     }
//     else{
//         return false
//     }
// }
// console.log(checkinput("djsd"))
// console.log(checkinput([1,2,33,13]))
// //check type of input if its string


// function checkifblank(text){
//     if(text.length == 0){
//         console.log(true)
//     }
//     else{
//         console.log(false)
//     }
// }
// checkifblank("")
// checkifblank("hello")
// //check if string empty

// function splitstring(text){
//     return text.trim().split(" ")
// }
// console.log(splitstring(" jjj jjj hello "))
//split a string

// function substrfun(text,number){
//     text = text.substring(0,number)
//     console.log(text)
// }
// substrfun("hello how are you",9)
// substring method


// function abveration_name(name){
//     let word
//     for(let i =0; i<name.length; i++){
//         // console.log(name[i])
//         if(name[i] === " "){
//             //console.log(name[i])
//             //console.log(i)
//             word = name.substring(0,i+3) 
//             break;
//         }
//     }
//     console.log(word)
// }
// abveration_name("Ahemd majd") // Ahmed m
// //abveration name


// function protectemail(text){
//     let arr = text.split("")
//     let arr1= []
//     let arr2= []
//     let finalarr
//     for(let i=0; i<text.length; i++){
//         if(text[i] == "." || text[i] == "-" || text[i] == "_"){
//             // console.log(text[i])
//             arr1 = arr.slice(0,text.indexOf(text[i])+1).join("")
//             // console.log(arr1)
//             arr2 = arr.slice(text.indexOf("@") ,).join("")
//             // console.log(arr2)
//             return arr1 + "---" + arr2
//         }
//     }
// }
// console.log(protectemail("yamen.naseri@gmail.com"))
// console.log(protectemail("yamenahmed-naseri1233@gmail.com"))
// // console.log(protectemail("yamenahmed@gmail.com")) // not wored
// //protect email by..hiding it

// function parpmtizestring(text){
//     let arr = text.split("")
//     let i =0;
//     while(i<arr.length){
//         if(arr[i] == " "){
//             arr[i] = "-"
//         }
//         i++
//     }
//     return console.log(arr.join(""))
// }
// parpmtizestring("hello there..how are you")
// // chnage spaces to -

// function capatlizefirstletter(text){
//     if(text.length <= 1){
//         return "false"
//     }
//     let arr = text.split("")
//     let i =0
//     arr[0] = arr[0].toUpperCase()
//     while(i<arr.length){
//         if(arr[i-1] == " " && arr[i] == arr[i].toLowerCase()){
//             arr[i] = arr[i].toUpperCase()
//         }
//         i++
//     }
//     return arr.join("")
// }
// console.log(capatlizefirstletter("hello therer How Are you"))
// console.log(capatlizefirstletter("  ff"))
//capitlize first letter of string after each space

// function letterswitcher(text){
//     let arr = text.split("")
//     for(let i =0 ; i<arr.length; i++){
//         if(arr[i] == arr[i].toUpperCase()){
//             arr[i] = arr[i].toLowerCase()
//         }
//         else{
//             arr[i] = arr[i].toUpperCase()
//         }
//     }
//     return arr.join("")
// }
// "dsf".toLowerCase
// console.log(letterswitcher("hELLO tHERE"))
// // let name1 = "Yamen"
// // let name2 = name1.replace("Y","F")
// // console.log(name2)
//switch letteres 

// let camalCase = function(text){
//     let arr = text.split("")
//     let i =0;
//     do{
//         if(arr[i] === " "){
//             arr[i]= ""
//             arr[i+1]= arr[i+1].toUpperCase()
        
//         }
//         i++
//     }
//     while(i<arr.length)
//     return arr.join("")
// }
// console.log(camalCase("hello there")) // helloThere
// console.log(camalCase("Java script")) // JavaScript
// // convert to camalcase

// function uncamelize(text,sign){
//     let arr = text.split("")
//     let i =0
//     capletter = "ABCDEFGHIJKLMNOPQRSTUVXXYZ"
//     for(;i<arr.length;){
//         if(capletter.includes(arr[i]) !== false){
//             arr.splice(i,0," ")
//             // console.log("helll")
//             // arr[i-1] =sign;
//             // arr[i] = arr[i].toLowerCase()
//         }
//         i++
//     }
//     return arr.join("")
// }
// console.log(uncamelize("helloThere","_"))

// capletter = "ABCDEFGHIJKLMNOPQRSTUVXXYZ"
// if(capletter.includes("f") !== false){
//     // splice("")
// }
//not worked yet

// let concatenates_Nstrings =  (text,n) =>{
//     let arr = []
//     for(let i =0; i<n ; i++){
//         arr.push(text)
//     }
//     return arr.join("")
// }
// console.log(concatenates_Nstrings("hello",4))
//         repeat = function repeat(str, count) {
//         if(typeof(count) == "undefined") {
//         count =1;
//         }
//         return count < 1 ? '' : new Array(count + 1).join(str);
//         }
////concate strings


// let word = "hello"
// let arr = [2,4,55,3,43]
// arr.splice(0,0,"h")
// console.log(arr)
// let insertstring = (text,word,postion) =>{
//     if(postion === "undifined"){
//         postion = 0;
//     }
//     arr = text.split("")
//     arr.splice(postion,0," "+word+" ")
//     // if(arr[postion+1] !== " " ){
//     //     arr.splice(postion+1,0," ")
//     // }
//     // if(arr[postion-1] !== " " && postion-1 !== 0){
//     //     arr.splice(postion-1,0," ")
//     // }
//     return arr.join('')
// }
// console.log(insertstring("hello...there","yamen",5))
// console.log(insertstring("hello...there","yamen",))
//insert string inside strings //repeat it

// let suffixnumber = num =>{
//     if(typeof(num) !== "number"){
//         return `not a number`
//     }
//     let suffix = ["st","nd","rd","th"]
//     let number = num.toString().slice(-1)
//     switch(number){
//         case "1":{
//             return `${num}${suffix[0]}`
//         }
//         case "2":{
//             return `${num}${suffix[1]}`
//         }
//         case '3':{
//             return `${num}${suffix[2]}`
//         }
//         default:{
//             return `${num}${suffix[3]}`
//         }
//     }
// }
// console.log(suffixnumber("d"))
// console.log(suffixnumber(1))
// console.log(suffixnumber(2))
// console.log(suffixnumber(3))
// console.log(suffixnumber(53))
// console.log(suffixnumber(64))
// add a suffix to a number

let result = (text,n)=>{
    let arr = []
    text = text.split("")
    for(let i=n; i<text.length;){
        console.log(i)
        arr.push(text.splice(text[i],0,))
        i =i+3
    }
    return arr
}
console.log(result("hellodddsfsdfsf",2))
