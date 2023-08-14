function calcSeguro (){
    // Verifica se um gênero foi selecionado
    const genderElement = document.querySelector('input[name="gender"]:checked');
     if (!genderElement) {
     alert (`Escolha o sexo.`);
    return;  }
    
    // Verifica se um o seguro foi selecionado
    const coberturaElement = document.querySelector('input[name="cobertura"]:checked');
     if (!coberturaElement) {
     alert (`Escolha seu Plano.`);
    return;  }
    
    const gender = genderElement.value;
    const cobertura = coberturaElement.value;
    const idade = parseFloat(document.getElementById('idade').value);
    
    if (cobertura === 'total') {
    
        const segurototal = 800
    
        if (gender === 'feminino' && idade >=18 && idade <= 55) {
    
            const seguroFem = segurototal*0.95
    
            document.getElementById('seguro').innerText = `Seu seguro vai custar: R$${seguroFem.toFixed(2)} reais`;
            
        } else if (gender === 'masculino' && idade >=18 && idade <=24){
            const seguroMas = segurototal*1.07
    
            document.getElementById('seguro').innerText = `Seu seguro vai custar: R$${seguroMas.toFixed(2)} reais`;
    
        } else if (idade >=56 && idade <=120){
            const seguroIdoso = segurototal*1.09
    
            document.getElementById('seguro').innerText = `Seu seguro vai custar: R$${seguroIdoso.toFixed(2)} reais`;
    
        } else {
    
            document.getElementById('seguro').innerText = `Seu seguro vai custar: R$${segurototal.toFixed(2)} reais`;
        }
    
    } else if (cobertura === 'parcial') {
    
        const seguroparcial = 500
    
        if (gender === 'feminino' && idade >=18 && idade <= 55) {
    
            const seguroFem = seguroparcial*0.95
    
            document.getElementById('seguro').innerText = `Seu seguro vai custar: R$${seguroFem.toFixed(2)} reais`;
        } else if (gender === 'masculino' && idade >=18 && idade <=24){
            const seguroMas = seguroparcial*1.07
    
            document.getElementById('seguro').innerText = `Seu seguro vai custar: R$${seguroMas.toFixed(2)} reais`;
    
        } else if (idade >=56 && idade <=120){
            const seguroIdoso = seguroparcial*1.09
    
            document.getElementById('seguro').innerText = `Seu seguro vai custar: R$${seguroIdoso.toFixed(2)} reais`;
    
        } else {
    
            document.getElementById('seguro').innerText = `Seu seguro vai custar: R$${seguroparcial.toFixed(2)} reais`;
    }
    
    }}