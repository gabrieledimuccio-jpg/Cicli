// SOLO NUMERI

let scegli_bevanda;
 do {
     scegli_bevanda = Number(prompt(`Seleziona una bevanda : 1/Acqua, 2/Coca cola, 3/Birra.`))
    
     switch (scegli_bevanda) {
         case 1:
         console.log(`È stata selezionata l’acqua`);
         break;
         case 2:
         console.log(`È stata selezionato coca cola`);
         break;
         case 3:
         console.log(`È stata selezionata birra`);
         break;
         default:
         console.log(`Scelta non valida. Seleziona una bevanda : 1/Acqua, 2/Coca cola, 3/Birra.`);      
     }
 }while(scegli_bevanda < 1 || scegli_bevanda > 3);

 console.log(`Erogazione in corso.`);



// NUMERI E STRINGHE
do {
     scegli_bevanda = prompt(`Seleziona una bevanda : 1/Acqua, 2/Coca cola, 3/Birra.`);
    
     switch (scegli_bevanda) {
         case`1`:
         case `acqua`:
         console.log(`È stata selezionata l’acqua`);
         break;
         case `2`:
         case `coca cola`:
         console.log(`È stata selezionato coca cola`);
         break;
         case `3`:
         case `birra`:
         console.log(`È stata selezionata birra`);
         break;
         default:
         console.log(`Scelta non valida. Seleziona una bevanda : 1/Acqua, 2/Coca cola, 3/Birra.`);      
     }
 }while(scegli_bevanda < 1 || scegli_bevanda > 3);

 console.log(`Erogazione in corso.`);


