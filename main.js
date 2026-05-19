/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/

tarifa.innertext="(Tarifa)"
boton.addEventListener("click", () => {
  // COMPLETAR

  let reg = registrada.value 
  let dis = distancia.value
  let tpo = tipo.value

  if (tpo==="ciudad") {
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
            else{
              valor="Distancia No valida"
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
             else{
              valor="Distancia No valida"
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
                else{
                  valor="Distancia No valida"
                }
              }
            }
          }
      }
    }
       }
      }
      //copia hasta aca
    else {
      if (tpo==="provincia") {
  if (reg === "si"){
    if(dis <= 3) {
      valor="$ 968,57"
     }
      else{
      if(dis <=6) {
        valor="$ 1.089,64"
      }
        else{
          if(dis <= 12){
            valor="$ 1.210,71"
          }
          else{
            if(dis <= 27){
              valor="$ 1.452,85"
            }
            else {
              valor="$ 1.708,07"
            }
          }
        }
      }
    }
  else{
    if(reg==="no") {
     if(dis <= 3) {
       valor="$ 1.937,14"
      }
       else{
       if(dis <=6) {
         valor="$ 2.179,28"
       }
         else{
           if(dis <= 12){
             valor="$ 2.421,42"
           }
          else{
             if(dis <= 27){
               valor="$ 2.905,70"
             }
             else {
              valor= "$ 3.416,14"
             }
           }
         }
       }
      }
      //tarifa
      else{
        if (reg==="Tarifa social"){
        if(dis <= 3) {
          valor="$ 435,85"
         }
          else{
          if(dis <=6) {
            valor="$ 490,33"
          }
            else{
              if(dis <= 12){
                valor="$ 544,81"
              }
             else{
                if(dis <= 27){
                  valor="$ 653,78"
                }
                else{
                  valor="$ 768,63"
                }
              }
            }
          }
      }
    }
       }
      }
      //nacional
      else {
      if (tpo==="nacional") {
  if (reg === "si"){
    if(dis <= 3) {
      valor="$ 700,00"
     }
      else{
      if(dis <=6) {
        valor="$ 779,78"
      }
        else{
          if(dis <= 12){
            valor="$ 839,86"
          }
          else{
            if(dis <= 27){
              valor="$ 899,99"
            }
            else {
              valor="$ 959,71"
            }
          }
        }
      }
    }
  else{
    if(reg==="no") {
     if(dis <= 3) {
       valor="$ 1.113,00"
      }
       else{
       if(dis <=6) {
         valor="$ 1.239,85"
       }
         else{
           if(dis <= 12){
             valor="$ 1.335,38"
           }
          else{
             if(dis <= 27){
               valor="$ 1.430,98"
             }
             else {
              valor= "$ 1.525,94"
             }
           }
         }
       }
      }
      //tarifa
      else{
        if (reg==="Tarifa social"){
        if(dis <= 3) {
          valor="$ 315,00"
         }
          else{
          if(dis <=6) {
            valor="$ 350,90"
          }
            else{
              if(dis <= 12){
                valor="$ 377,93"
              }
             else{
                if(dis <= 27){
                  valor="$ 404,99"
                }
                else{
                  valor="$ 431,86"
                }
              }
            }
          }
      }
    }
       }
      }
    }
    }
    
    
tarifa.innerText = valor;

});


