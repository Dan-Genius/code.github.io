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
    arr.style.visibility ="hidden";
   
})

const ps = [p1, p2, p3, p4, p5];
ps.forEach((p)=>{
 p.style.visibility = "hidden";
 
})

img1.style.visibility = "hidden";


window.onload =()=>{
   const myInterval = 
    setTimeout(()=>{
        h111.style.visibility = "unset"
        h111.style.color = "lightblue"
       }, 200);

     const myInterval2 =  setTimeout(()=> {
           h112.style.visibility = "unset" 
           h112.style.color = "deeppink"
       }, 400) ;

       const myInterval3 = setTimeout(()=>{
        h113.style.visibility = "unset" 
           h113.style.color = "lightblue";
       }, 600);

      const myInterval4 =  setTimeout(()=>{
        h114.style.visibility = "unset" 
           h114.style.color = "deeppink"
       }, 800);
       
      const myInterval41 =  setTimeout(()=>{
           h1141.style.visibility = "unset" 
           h1141.style.color = "blue"
       }, 1000);
       
       
      const myInterval5 =  setTimeout(()=>{
        h111.style.visibility = "unset" 
           h111.style.color = "white"
       }, 2700);
      const myInterval6 =  setTimeout(()=>{
        h112.style.visibility = "unset" 
           h112.style.color = "white"
       }, 2400);
      const myInterval7 =  setTimeout(()=>{
        h113.style.visibility = "unset" 
           h113.style.color = "white"
       }, 2100);
      const myInterval8 =  setTimeout(()=>{
        h114.style.visibility = "unset" 
           h114.style.color = "white"
       }, 1800);
      const myInterval9 =  setTimeout(()=>{
           h1141.style.visibility = "unset" 
           h1141.style.color = "white"
       }, 1300);

       
       const p11 = setTimeout(()=>{
        p1.style.visibility = "unset" 
        p1.style.transform = 'scale(0.8)';
       },1500);
       const p12 = setTimeout(()=>{
        p1.style.visibility = "unset" 
        p1.style.transform = 'scale(1)';
       },1600);


       const p22 = setTimeout(()=>{
        p2.style.visibility = "unset"
        p2.style.transform = 'scale(0.8)';
       },2000);
       const p21 = setTimeout(()=>{
        p2.style.visibility = "unset" 
        p2.style.transform = 'scale(1)';
       },2100);


       const p33 = setTimeout(()=>{
        p3.style.visibility = "unset" 
        p3.style.transform = "scale(0.8)";
       },2500);
       const p31 = setTimeout(()=>{
        p3.style.visibility = "unset" 
        p3.style.transform = 'scale(1)';
       },2600);

       const p44 = setTimeout(()=>{
        p4.style.visibility = "unset" 
        p4.style.transform = "scale(0.7)";
       },3500);
       const p41 = setTimeout(()=>{
        p4.style.visibility = "unset" 
        p4.style.transform = 'scale(1)';
       },3600);
  

       const p55 = setTimeout(()=>{
        p5.style.visibility = "unset" 
        p5.style.transform = "scale(0.7)";
       },4100);
       const p51 = setTimeout(()=>{
        p5.style.visibility = "unset" 
        p5.style.transform = 'scale(1)';
       },4200);


       const img = setTimeout(()=>{
        img1.style.visibility = "unset" 
        img1.style.transform = "scale(0.8)"; 
       }, 3000)
       const img2 = setTimeout(()=>{
        img1.style.visibility = "unset" 
        img1.style.transform = 'scale(1)';
       },3100);
    }
