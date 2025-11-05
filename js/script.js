// Title

const titleElmen = document.getElementById("main-title");
console.log(titleElmen);

// Prendo gli elementi

//immagine
 const imgLampadina = document.getElementById("lampadina");
 console.log(imgLampadina);

 //Button
 const btnElem = document.querySelector(".btn");
 console.log(btnElem);

 // Quando clicchiamo il bottone, si accendi 
 // la lampadina e quando se spegne la lampadina 
 // diventa spenta

 let accesa = false;
 btnElem.addEventListener("click", function() {

    if(accesa === true) {
        imgLampadina.src = "img/white_lamp.png";
        imgLampadina.classList.remove("accesa");
        btnElem.innerText = "Accendi";  
        titleElem.innerHTML = "";
    
    } else {
        imgLampadina.src ="img/yellow_lamp.png";
        imgLampadina.classList.add("accesa");
        btnElem.innerText= "Spegni";
        
    }
    accesa = !accesa;
  
 }); 
























