let NomeHeroi = "Wendel"
let Xp = 3000
let NivelHeroi = ""


switch (true) {
    case (Xp) <= 1000:
        NivelHeroi = ("Ferro")
        break
    case (Xp) >= 1001 && (Xp) <= 2000:
        NivelHeroi = ("Bronze")
        break
    case (Xp) >= 2001 && (Xp) <= 5000:
        NivelHeroi = ("Prata")
        break
    case (Xp) >= 5001 && (Xp) <= 6000:
        NivelHeroi = ("Ouro")
        break
    case (Xp) >= 6001 && (Xp) <= 7000:
        NivelHeroi = ("Platina")
        break
    case (Xp) >= 7001 && (Xp) <= 8000:
        NivelHeroi = ("Ascendente")
        break
    case (Xp) >= 8001 && (Xp) <= 9000:
        NivelHeroi = ("Imortal")
        break
    case (Xp) >= 9001:
        NivelHeroi = ("Radiante")
        break

            
} 


console.log ("O jogador: " + NomeHeroi + ", está no nível: " + NivelHeroi + ".")