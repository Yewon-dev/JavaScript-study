/*
const arr = [0,1,2,3,4,5,6,7,8,9,10];

arr.forEach(function(element, index, array){
  console.log(`${array}의 ${index}번째 요소 : ${element}`);
})
*/

/*
const arr2 = ['강수지', '김예진', '이태림'];

arr2.forEach(function(element, index, array){
  console.log(`${index+1}번째 운영진 : ${element}`);
})
*/

/*
const person ={
  name: '김예원',
  age : 24,
  gender : 'Female',
  isLikeLion: true,
  introduce: function(){
    return`저는 ${this.age}살 ${this.name}입니다.`;
  }
}
console.log(person.introduce()); //메소드를 출력하려면 괄호 붙이기

person['favorite color']= 'blue'; //띄어쓰기를 쓰려면 대괄호 사용
console.log(person);

person.address = '서울';
person.isLionMember = function() {
  if (this.isLikeLion) {
    return `멋쟁이사자처럼 회원입니다.`;
  }
}

console.log(person.address);
console.log(person.isLionMember());

delete person.gender;

console.log(person);
*/

//MATH
/*
console.log(Math.random());
console.log(Math.floor(5.5));
console.log(Math.ceil(5.5));
console.log(Math.round(5.5));
console.log(Math.round(5.49));
*/
//console.log(Math.floor(Math.random()*100));


//DOM
/*
colors=['red','blue','green'];

let lis = document.getElementsByTagName('li');
for (let i = 0 ; i <lis.length; i++){
  lis[i].style.color = colors[i];
}
*/

let li = document.querySelectorAll('li');
for (let i = 0 ; i <li.length; i++){
  li[i].style.color = 'red';
}


li = document.querySelector('.activate');
li.style.color='blue';
/*
window.alert('경고창');
window.confirm('확인창');
let input = window.prompt('입력하세요');
document.write(input);
*/

//location.href = "https://www.naver.com/";

//window.open('https://www.naver.com/');
//window.open('https://www.naver.com/','_self');
//window.open('https://www.naver.com/','_blank','width=200,height=200,resizable=yes');
//window.open('https://www.naver.com/','naver');

//EVENT
let t = document.getElementById('target');

t.onclick = function() {
  alert('Hello Hello');
}
t.addEventListener('click', function(event){
  alert('Hellooo, '+event.target.value);
})