console.log("js actif");
let btn = document.querySelector(".btn")
console.log(btn);
let input=document.querySelector(".pass")
console.log(input);
let notif=document.querySelector(".notification")
console.log(notif);




btn.addEventListener("click",()=>{
    nombrealeatoire()
})
let fonawersone=document.querySelector(".fa-copy")
console.log( fonawersone);
 fonawersone.addEventListener("click",()=>{
    copypass()
     let p =document.createElement("p")
              if (input.value) {
                notif.innerHTML=""
                  p.innerHTML="Code Copié"+input.value
                notif.appendChild(p)
                notif.classList.add("active")
                setTimeout(() => {
                    
                
                     notif.classList.remove("active")

                },700)
                
              }

 })
   function nombrealeatoire() {
            const structure ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#\$%&'()*+,-./:;<=>?@[\]^_{|}~"
            const passlength=14
            let pass=""
            for (let index = 0; index < passlength; index++) {
                const passaleatoire=Math.floor(Math.random()*structure.length)
                pass+=structure.substring(passaleatoire,passaleatoire+1)
                console.log(passaleatoire,pass);
                input.value=pass
                
                
            }
            
            
    }
      function copypass() {
         input.select() // selectionne le champ de l' input pour les odinateurs
        input.setSelectionRange(0,9999) //selectionne le champ de l' input pour les endroide
       // copier la valeur de notre champ dans le presse papier
        navigator.clipboard.writeText(input.value)
       

    }
  

