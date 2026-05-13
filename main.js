/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/

boton.addEventListener("click", () => {
  // COMPLETAR

  let reg = registrada.value 
  let dis = distancia.value
  
  if (reg === "si"){
    if(dis <= 3) {
      valor="$ 715.24"
     }
      else{
      if(dis <=6) {
        valor="$ 794.74"
      }
        else{
          if(dis <= 12){
            valor="$ 855.97"
          }
          else{
            if(dis <= 27){
              valor="$ 917.24"
            }
          }
        }
      }
    }
  else{
    if(reg==="no") {
     if(dis <= 3) {
       valor="$ 1137.23"
      }
       else{
       if(dis <=6) {
         valor="$ 1263.64"
       }
         else{
           if(dis <= 12){
             valor="$ 1360.99"
           }
          else{
             if(dis <= 27){
               valor="$ 1458.41"
             }
           }
         }
       }
      }
      //tarifa
      else{
        if (reg==="Tarifa social"){
        if(dis <= 3) {
          valor="$ 339,18"
         }
          else{
          if(dis <=6) {
            valor="$ 376,88"
          }
            else{
              if(dis <= 12){
                valor="$ 405,91"
              }
             else{
                if(dis <= 27){
                  valor="$ 434,97"
                }
              }
            }
          }
      }
    }
       }

    tarifa.innerText = valor;

});


