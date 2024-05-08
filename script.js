
const img1 = document.getElementById('img1');
const about = document.getElementById('about')
const h111 = document.getElementById('h111')
const h112 = document.getElementById('h112')
const h113 = document.getElementById('h113')
const h114 = document.getElementById('h114')
const h1141 = document.getElementById('h1141')
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');
const p5 = document.getElementById('p5');

const array = [h111, h112, h113, h114, h1141];

array.forEach((arr)=>{
    arr.style.display ="none";
})

const ps = [p1, p2, p3, p4, p5];
ps.forEach((p)=>{
 p.style.display = "none";
})

img1.style.display = "none";


window.onload =()=>{
   const myInterval = 
    setTimeout(()=>{
        h111.style.display = "inline"
        h111.style.color = "lightblue"
       }, 200);

     const myInterval2 =  setTimeout(()=> {
           h112.style.display = "inline" 
           h112.style.color = "deeppink"
       }, 500) ;

       const myInterval3 = setTimeout(()=>{
           h113.style.display = "inline"
           h113.style.color = "lightblue";
       }, 800);

      const myInterval4 =  setTimeout(()=>{
           h114.style.display = "inline"
           h114.style.color = "deeppink"
       }, 1100);
       
      const myInterval41 =  setTimeout(()=>{
           h1141.style.display = "inline"
           h1141.style.color = "blue"
       }, 1100);
       
       
      const myInterval5 =  setTimeout(()=>{
           h111.style.display = "inline"
           h111.style.color = "white"
       }, 2400);
      const myInterval6 =  setTimeout(()=>{
           h112.style.display = "inline"
           h112.style.color = "white"
       }, 2100);
      const myInterval7 =  setTimeout(()=>{
           h113.style.display = "inline"
           h113.style.color = "white"
       }, 1900);
      const myInterval8 =  setTimeout(()=>{
           h114.style.display = "inline"
           h114.style.color = "white"
       }, 1600);
      const myInterval9 =  setTimeout(()=>{
           h1141.style.display = "inline"
           h1141.style.color = "white"
       }, 1300);
       const p11 = setTimeout(()=>{
        p1.style.display = "block"
       },500);
       const p22 = setTimeout(()=>{
       p2.style.display = "block"
       },800);
       const p33 = setTimeout(()=>{
        p3.style.display = "block"
       },1100);
       const p44 = setTimeout(()=>{
        p4.style.display = "block"
       },1300);
       const p55 = setTimeout(()=>{
      p5.style.display = "";
       },1500);
       const img = setTimeout(()=>{
        img1.style.display = "inline"
       }, 500)
    }
