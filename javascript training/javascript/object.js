// let user = {
    //     name:"yamen",
    //     age:21,
//     sayhello : function(){
    //         return "hello world"
    //     }
    // }
    // console.log(user)
    // console.log(user.name)
    // console.log(user.age)
    // console.log(user.sayhello())
    // console.log(Object.keys(user))
    // console.log(Object.values(user))
    // console.log(JSON.stringify(user))
    // let one = JSON.stringify(user)
    // console.log(JSON.parse(one))



// let child = new Object({})
// child.name = "yamen";
// child.age = 22;
// console.log(child)

// let child2 = new Object({
//     name : "majd",
//     age: 18,
// })
// console.dir(child2)
// console.log(typeof(child2 ==="object")?true:false)

// let father = {
//     name:"ahmed",
//     age:44,
//     kids:[child,child2]
// }
// console.log(Object.keys(father.kids))
// let one = JSON.stringify(child)
// console.log(JSON.parse(one))

// let user = {
//     name:"majd",
//     age:18,
//     skills :{
//         football: 40,
//         draw: 14,
//         study:0,
//     },
//     marks :[22,43,21,32]
// }
// console.log(user)
// console.log(user.skills)
// console.log(Object.keys(user.skills))
// console.log(Object.values(user.skills))
// console.log(Object.values(user.marks))
// console.log(user.marks)
// console.log(user.skills.football)
// console.log(user.marks)

// let sum ={name:"yamen",age:22}
// const skills = {1:"html",2:"css",3:"js",status:false}
// const marks = {4:33,5:55,6:44}
// // console.log(marks)
// // marks[1] = 32
// skills[3] = "php"
// skills.status = true
// // console.log(marks)
// // console.log(skills)

// let user = Object.assign(skills,marks)
// console.log(skills)
// console.table(user)
// console.log(Object.keys(user))
// console.log(Object.values(user))


// const ob1 = {}
// Object.defineProperty(ob1,"id",{value:20})
// console.log(ob1)

// let isobj = function(obj){
//     let type = typeof obj
//     return ( (type === "object" || type === "function" )&&  (type !== "null"))
// }
// let x = 5
// console.log(isobj(x))
// console.log(student instanceof Object)
// check if its objs

// // 1
var student = {
    name:"david rayy",
    sclass : "VI",
    rolino:12
}
console.log(student.pr)
// console.log(Object.keys(student).join(" "))
// console.log(student.keys)
// list of properites
// name sclass rolino

// //2
// function deleteprop(obj){
//     if(obj instanceof Object !== true){
//         return []
//     }
//     let string = JSON.stringify(obj)
//     let arr = string.split(",")
//     arr = arr.splice(0,2,)
//     console.log(arr.join(",")+ "}")
//     result = JSON.parse(arr.join(",")+ "}")
//     return result
// }
// console.log(deleteprop(student))
// >another way
// delete student.rolino;
// console.log(student)
// delete rolino method


//3
// let length_ob =function (obj){
//     if(!isobj(obj)){
//         return false
//     }
//     else{
//         let len = Object.keys(obj).length
//         return len
//     }
//     function isobj(obj){
//         if((typeof obj === "object" || typeof obj === "function") && (typeof obj !== "null")){
//             return true
//         }
//     }
// }
// console.log(length_ob(student))
//>another way
// Object.objsize = function(Myobj) {
//     var osize = 0, key;
//     for (key in Myobj) {
//         if (Myobj.hasOwnProperty(key)) osize++;
//     }
//     console.log(Myobj.hasOwnProperty(key))
//     return osize;
// };
// var objsize = Object.objsize(student);
// console.log('Size of the current object : '+objsize);


// 4
// var library = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false
//     }];
// function get_readingstatus(obj){
//     for(let i =0; i<library.length;i++){
//         // console.log(obj[i].readingStatus)
//         console.log(`the readingstatus of ${obj[i].author} is ${obj[i].readingStatus} ... its name is ${obj[i].title}`)
//     }
// }
// get_readingstatus(library)
// get the status of reading


//5
// let clynder = {
//     radius:r,
//     hieght: h,
//     volume :result
// }
function clynder_vloume(obj,r,h){
    console.log(this)
    // obj.radius = r;
    // obj.hieght = h;
    // obj.result = 3.14*r**2*h
}
clynder_vloume(0,1,3)