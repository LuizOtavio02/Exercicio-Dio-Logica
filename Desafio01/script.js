document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault(); 


    let name = document.getElementById('name').value;
    let xp = document.getElementById('xp').value;
    

    if(xp < 1000){
        let result = `O Herói ${name}! está no nível Ferro`
        document.getElementById('result').textContent = result;
    }else if(xp>=1000 && xp<2000){
        let result = `O Herói ${name}! está no nível Bronze`
        document.getElementById('result').textContent = result;
    }else if(xp>=2000 && xp<5000){
        let result = `O Herói ${name}! está no nível Prata`
        document.getElementById('result').textContent = result;
    }else if(xp>=5000 && xp<7000){
        let result = `O Herói ${name}! está no nível Ouro`
        document.getElementById('result').textContent = result;
    }else if(xp>=7000 && xp<8000){
        let result = `O Herói ${name}! está no nível Platina`
        document.getElementById('result').textContent = result;
    }else if(xp>=8000 && xp<9000){
        let result = `O Herói ${name}! está no nível Ascendente`
        document.getElementById('result').textContent = result;
    }else if(xp>=9000 && xp<10000){
        let result = `O Herói ${name}! está no nível Imortal`
        document.getElementById('result').textContent = result;
    }else if(xp>=10000){
        let result = `O Herói ${name}! está no nível Radiante`
        document.getElementById('result').textContent = result;
    }else{
        let result = `Voce Digitou algo errado Verifique`
        document.getElementById('result').textContent = result;
    }

    


});

/*Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal 
Se XP for maior ou igual a 10.001 = Radiante*/