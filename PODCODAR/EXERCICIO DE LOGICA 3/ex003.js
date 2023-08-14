function calcIMC (genderElement, peso, altura){
   
    // Verifica se um gênero foi selecionado
       
       if (!genderElement) {
        alert (`Escolha o sexo.`);
        return;
                   }

   const gender = genderElement.value;
      
 if (gender === "feminino") {
   
   const IMC = peso / (altura * altura) 
       if (IMC < 19.1) {
   document.getElementById('IMC').innerText = `seu IMC é igual a: ${IMC.toFixed(2)} você esta abaixo do peso`;}
          else if (IMC >= 19.1 && IMC < 25.8) {document.getElementById('IMC').innerText = `seu IMC é igual a: ${IMC.toFixed(2)} você esta no seu peso normal`;}
               else if (IMC >= 25.8 && IMC < 27.3) {document.getElementById('IMC').innerText = `seu IMC é igual a: ${IMC.toFixed(2)} você esta um pouco acima do peso`;} 
                   else if (IMC >= 27.3 && IMC < 32.3) {document.getElementById('IMC').innerText = `seu IMC é igual a: ${IMC.toFixed(2)} você esta acima do peso ideal`;}
                           else {document.getElementById('IMC').innerText = `seu IMC é igual a: ${IMC.toFixed(2)} você esta obeso`;}
   } else if (gender === "masculino") {
       const peso = parseFloat(document.getElementById('peso').value);
       const altura = parseFloat(document.getElementById('altura').value);
       const IMC = peso / (altura * altura)
       if (IMC < 20.7) {
           document.getElementById('IMC').innerText = `seu IMC é igual a: ${IMC.toFixed(2)} você esta abaixo do peso`;}
                   else if (IMC >= 20.7 && IMC < 26.4) {document.getElementById('IMC').innerText = `seu IMC é igual a: ${IMC.toFixed(2)} você esta no seu peso normal`;}
                       else if (IMC >= 26.4 && IMC < 27.8) {document.getElementById('IMC').innerText = `seu IMC é igual a: ${IMC.toFixed(2)} você esta um pouco acima do peso`;} 
                           else if (IMC >= 27.8 && IMC < 31.1) {document.getElementById('IMC').innerText = `seu IMC é igual a: ${IMC.toFixed(2)} você esta um pouco acima do peso`;}
                               else {document.getElementById('IMC').innerText = `seu IMC é igual a: ${IMC.toFixed(2)} você esta obeso`;}
   }
   // nao esta funcionando quando nao colocar o sexo
           else if (gender === "null") {
               document.getElementById('IMC').innerText = `Escolha o sexo.`;}

}
