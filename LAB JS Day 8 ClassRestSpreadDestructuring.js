
//lab class

//lab1
// class Calculator {
//   constructor(_init = 0){ //ฟังชั่นผู้สร้าง
//     this.value = _init

//   }

//   add(num){
//     this.value += num
//     return this.value
//   }
//   subtract(num){
//     this.value -= num
//    return this.value
//   }
//   multiply(num){
//     this.value *= num
//     return this.value
//   }
//   divide(num){
//     this.value /= num
//     return this.value
//   }

//   show(){
//     console.log(`Value = ${this.value}`)
//   }
 
// }

// let result = new Calculator(10)
//   result.show()
// console.log(result.add(50))
// console.log(result.subtract(50))
// console.log(result.multiply(50))
// console.log(result.divide(5))


//lab2
//   class Sale{
//     constructor(_name,_amount,_price){
//       this.name = _name
//       this.amout = _amount
//       this.price = _price
//     }
//     calcPrice(){
//       return this.amout * this.price
//     } 
//   }
//   class Beverage extends Sale{
//     constructor(_name, _amount, _price){
//       super(_name, _amount, _price)
//     }
//   }
 



// let result = new Beverage('Pepsi',5,20)

// console.log(result.calcPrice())




//lab Static Method 

//lab1 Array is Array

// function isArray(input) {

// return Array.isArray(input)

// }
// let result = isArray(["bell", "ploy"]) //true
// let result2 = isArray(10) //false
// console.log(result)
// console.log(result2)


//or
// let isArray = (input) => {return Array.isArray(input)}
//   let result = isArray(["bell", "ploy"]) //true
//   let result2 = isArray(10) //false
//   console.log(result)
//   console.log(result2)






//Object.keys, values, entries
//lab1
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let value = Object.keys(salaries)
//   console.log(value)

// let Summary2 = value.reduce((prev,curr)=>{
//   console.log(salaries[curr])
 
//   return prev += salaries[curr]
// },0)
// console.log(Summary2)


//lab2 empty
// let checkEmptyObj = (obj) => {

//  return Object.keys(obj).length == 0 ? true : false;


// }
// console.log(checkEmptyObj({ John: 100,
//    Ann: 160,
//    Pete: 130}))
// console.log(checkEmptyObj({}))





//res parameter
// Rest and Spread operator
//lab1 จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด
// let calMulti = (...nums) =>{
//   let sum = 1
//   for(let num of nums){
//     console.log(num)
//     sum*=num
//   }
//   return sum
// }

// let result = calMulti(1,2,3,4,5)
// console.log(result)


//lab2

// let filterOdds = (...nums) => {
//   let odd = nums.filter((item) => {
//     console.log(item)
//     return item % 2 == 0
//   })
//   return odd
// }

// let result = filterOdds(1, 2, 3, 4, 5, 6, 7, 8)

// console.log(result)


//lab3
// let mergeObj = (...obj) => {
//   // console.log(obj) //array{}
//   let empty = {}
//   for (let i = 0; i < obj.length; i++) {
//     Object.assign(empty, obj[i]) //เข้าถึงใส่ออปเจกในเอมตี้ไปเรื่อยๆ
//     // console.log(obj[i])
//   }
//   return empty
// }
// let obj1 = {
//   fname: 'piriyapong',
//   lname: 'bunjusook'
// }
// let obj2 = {
//   nickName: 'bell'
// }
// let result = mergeObj(obj1, obj2)

// console.log(result)

//Lab 4

// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];

// let nums3= [5,...nums1,-6,-1,...nums2]

// console.log(nums3)

// let Summary = nums3.reduce((prev,curr)=>{


// return prev += curr
// },0)

// console.log(Summary)                                                    


//lab5 จงเขียนฟังก์ชันที่ใช้คุณสมบัติของ Spread operator เพื่อรับค่า array1 แล้วคืนค่าเป็น array ที่มีการเปลี่ยนแปลงค่าของ index ที่ 3 ให้มีค่าเท่ากับ ค่าเดิมยกกำลัง 2 โดยที่ array1 ไม่เกิดการเปลี่ยนแปลง
// let editArr = (arr) => {
//   let newArr = [...arr]
//   console.log(newArr)
//   // if(newArr.length > 3 ){

//   // }
//   newArr[3] = newArr[3] ** 2
//   return newArr
// }

// let arr = [2, 3, 4, 5, 6]
// let result = editArr(arr)
// console.log(arr)
// console.log(result)


//lab6

// let handlePerson = (fname,lname, ...hobbies)=>{
//   console.log(hobbies)
//   return[fname,lname,...hobbies]


// }
// let result = handlePerson('Piriyapong','Bell','basketball','tennis','swim')
// console.log(result)





//lab7จงเขียนฟังก์ชัน doubleAndReturnArgs โดยรับพารามิเตอร์มาเป็น Array และตัวเลขกี่ตัวก็ได้ และ return ค่าเป็น Array ที่ประกอบด้วยค่าเดิมในพารามิเตอร์ที่เป็น Array และค่าพารามิเตอร์ที่เป็นตัวเลขคูณสอง

// let doubleArr = (arr,...num) =>{
//   // console.log(arr)
//   // console.log(num)
//   let doubleArr = num.map((item)=>item*2)

//   return arr.concat(...doubleArr)
// }




// console.log(doubleArr([1, 2, 3], 4, 4)); 


//lab9 จงเขียนฟังก์ชัน cloneArray โดยรับพารามิเตอร์มาเป็น Array และ return ค่าเป็น Array ที่มี element เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว


// let cloneArray = (arr) =>{
// let clone = [...arr]
//   // console.log(clone) 
// return clone
// }

// console.log(cloneArray([1,2,3,4,5]))


//lab10 จงเขียนฟังก์ชัน cloneObject โดยรับพารามิเตอร์มาเป็น Object และ return ค่าเป็น Object ที่มี key-value เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว


// let cloneObject = (obj) =>{
//   let cloneObj = { ...obj }

//   console.log(cloneObj)
//   return cloneObj
// }
// console.log(cloneObject({name:'bell',age:'28'}))










//Destructuring


//lab11
// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // Maya
// console.log(second); // Marisa
// console.log(third); // Chi
// //เพราะdesrructuring แทนอเรย์ตัว 1 2 3

//lab12
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];
// console.log(raindrops); // Raindrops on roses เพราะแทนอเรย์ตัวแรก 0
// console.log(whiskers); // whiskers on kittens เพราะแทนอเรย์ตัวที่ 2
// console.log(aFewOfMyFavoriteThings); // ['Bright copper kettles','warm woolen mittens'] เพราะแทนอเรย์ที่เหลือทั้งหมด rest parameter

//lab13 

// let numbers = [10, 20, 30];
//  //20            30           30              20
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // [ 10,30,20 ] เพราะสลับสองตำแหน่งท้าย ตำแหน่งแรกไม่มี ก็เท่าเดิมdefault

//lab 14
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // 8 เพราะdetructuring ค่าkey valueมาด้วย
// console.log(yearNeptuneDiscovered); // 1846 เพราะdetructuring ค่าkey valueมาด้วย

//lab15
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); // {yearMarsDiscovered:1659 ,yearNeptuneDiscovered:1846} resparameter ...ถัดจาหค่าnumPlanets


//lab16
// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// console.log(getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' })); // Your name is Alejandro and you like purple เพราะpurple ส่งทับgreen
// console.log(getUserData({ firstName: 'Melissa' })); // Your name is Melissa and you like green เพราะเอาgreen default
// console.log(getUserData({})); // Your name is undefined and you like green เพราะ ไม่มีการกำหนดค่า firstName
 

 //lab17 ให้ใช้ Array destructuring ในการสลับค่าตัวแปร guest กับ admin

// let guest = 'Jane';
// let admin = 'Pete';


// [guest, admin] = [admin , guest]


// console.log(guest)
// console.log(admin)


// lab18 ยังไม่เสร็จ
// let obj = {
//   firstName: 'Piriyapong',
//   lastName: 'Bunjusook',
//   age: 28
// }

// let checkAge = (obj) =>{
  
//     let {firstName,lastName,age} = obj
//   if (age > 18) {
//     return `Hello, ${firstName} ${lastName}!`;
//   } else {
//     return "You do not have access rights.";
//   }
  
// }
// console.log(checkAge(obj))






//lab19 
// let user = {
//   name: 'John',
//   years: '27'
// };


// let {name,years:age,isAdmin="false"} = user

// console.log(name) //John
// console.log(age) // 27
// console.log(isAdmin) //false


//lab20

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250
// };

// function topSalaries(salaries) {
//   let maxSalary = 0;
//   let topPerson = null;

//   for (let [name, salary] of Object.entries(salaries)) {
    
//     if (salary > maxSalary) { 
//       maxSalary = salary; //maximum
//       topPerson = name; // insert name in top person
//     }
//   }

//   return topPerson;
// }
// console.log(topSalaries(salaries));



//lab21

// let arr = [1, [2, [[[3, 4], 5], 6]]];
// let [a, [b, [[[c, d], e], f]]] = arr
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)

//lab22
// const obj = { prop: 5, prop2: 10 };

// let { prop: a , prop2: b} = obj
// console.log(a)
// console.log(b)


//23 a และ b มีค่าเท่าไร

// let a, b;
// { a, b } = { a: 1, b: 2 };

//a=1
//b=2
//destructuring ถูกต้อง

//lab24 a และ b มีค่าเท่าไร

// const [, , , a, b] = [1, 2, 3];

//a  undefined
//b  undefined
//ตำแหน่งdestructuring มันผิด

//lab25 ให้ใช้ destructuring โดยให้ x เท่ากับ 5 และ y เท่ากับ 100   
// const q = { prop: 5, prop2: [10, 100] };

// let {prop: x,prop2: [ , y]}= q


// console.log(y)


//lab26
// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };
// const { prop: x, prop2: { prop2: { nested: [, y ,] } } } = q;

// console.log(y);
//lab27
// const names = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jack', lastName: 'Dann' },
//   { firstName: 'Joe', lastName: 'Dunne' }
// ];

// for(let {firstName,lastName} of names){
//   console.log(firstName, lastName)
// }

//lab28 
// let users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ];

// for (let { user, age = 'unknown' } of users) {
//   console.log(user, age);
// }