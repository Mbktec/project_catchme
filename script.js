const cachette = document.querySelectorAll('.cachette');
const chat = document.querySelectorAll('.chat');
const score = document.querySelector('.score');
const btnCliq = document.querySelector('button');
let compteur = 0;
let etat = false


btnCliq.addEventListener('click', () => {
   if(etat === false){
      etat = true
      btnCliq.style.backgroundColor="green"
      const intervalId = setInterval( function afficheChat(){
         const index = Math.floor(Math.random() * chat.length);
         const jerry = chat[index];
         jerry.style.visibility= "visible";
         jerry.classList.add("unjs")
         setTimeout(() => {
         jerry.style.visibility = 'hidden';
         jerry.classList.remove("unjs")
          }, 1000)
          
       },1000)
       setTimeout(function(){
         clearInterval(intervalId);
         btnCliq.style.backgroundColor="blue"
      },10000)
   }else{
      etat=false
      location.reload();
   }

})

chat.forEach((element) =>
   element.addEventListener("click", () => {
      compteur++
      score.textContent= compteur;
   })
   )


