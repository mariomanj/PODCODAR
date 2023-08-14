function calcTriangulo () {

    const numberX = parseFloat(document.getElementById('numberX').value);
    const numberY = parseFloat(document.getElementById('numberY').value);
    const numberZ = parseFloat(document.getElementById('numberZ').value);

    if (numberX + numberY > numberZ && numberX + numberZ > numberY) {

        if (numberX === numberY && numberX === numberZ) {

            document.getElementById('triangulo').innerText = `O triangulo é equilatero e isoceles`;

        } else if (numberX === numberY && numberX !== numberZ || numberX === numberZ && numberX !== numberY){
            document.getElementById('triangulo').innerText = `O triangulo é isosceles`;
        } else if (numberX !== numberY && numberX !== numberZ && numberY !== numberZ) {

            document.getElementById('triangulo').innerText = `O triangulo é escaleno`;

        }
       
    } else {

        alert('Não é um triangulo')
    }


}