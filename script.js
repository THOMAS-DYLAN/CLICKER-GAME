let stone = 0, wood = 100000, metal = 0, power = 1000000, stoneAxe2 = 0, stonePick2 = 0, dynamite2 = 0, sledgehammer2 = 0, metalPick2 = 0, stoneAge = 0, metalAge = 0, powerAge = 0, woodperclick = 1, woodAxe2 = 0, stoneperclick = 1, metalperclick = 1, powerperclick = 1, woodAxe = false, stoneAxe = false, sledgehammer = false, dynamite = false, stonePick = false, metalPick = false;
document.getElementById("Power").addEventListener("click", buyPowerElectric, buyPowerWood, buyPowerMetal, buyPowerStone, buyPowerElectric)
function woodClick(){
    wood += woodperclick;
}
function buyStoneAge(){
    if (wood >= 200){
        wood -= 200, stoneAge = 1;
    }
    if (stoneAge == 1){
        document.getElementById("stoneAge").style.visibility="hidden", document.getElementById("stone").disabled = false;
    }
}
function stoneClick(){
    stone += stoneperclick;
}
function buyMetalAge(){
    if (stone >= 200){
        stone -= 200, metalAge = 1;
    }if (metalAge == 1){
        document.getElementById("metalAge").style.visibility="hidden", document.getElementById("metal").disabled = false;
    }
}
function metalClick(){
    metal += metalperclick;
}
function buyPowerAge(){
    if (metal >= 200){
        metal -= 200, powerAge = 1;
    }if (powerAge == 1){
        document.getElementById("powerAge").style.visibility="hidden", document.getElementById("electricity").disabled = false;
    }
}
function powerClick(){
    power += powerperclick;
}
function value(){
    setInterval(values, 10);
    setInterval(addPowerTools, 10)
}
value();
function values(){
    document.getElementById("woodPoint").innerHTML = (`wood: ${wood}`), document.getElementById("stonePoint").innerHTML = (`stone: ${stone}`), document.getElementById("metalPoint").innerHTML = (`metal: ${metal}`), document.getElementById("electricPoint").innerHTML = (`power: ${power}`);
}
function buyWood(){
    if (wood >= 100){
        woodAxe = true;
        wood -= 100, woodAxe2++;
    } if (woodAxe = true){
        woodperclick = 2;
    } if (woodAxe2 >= 2){
        wood += 100;
    }
}
function buyWood2(){
    if (woodAxe == true && wood >= 120 && stoneAge == true){
        stoneAxe = true;
        wood -= 120, stoneAxe2++;
    } if (stoneAxe = true ){
        woodperclick = 3;
    } if (stoneAxe2 = 2){
        wood += 120;
    }
}
function buyStone(){
    if (stone >= 100){
        let dynamite = true;
        stone -= 100, dynamite2++;
    } if (dynamite = true){
        stoneperclick = 2;
    } if (dynamite2 >= 2){
        stone += 100;
    }
}
function buyStone2(){
    if (dynamite = true && stone >= 120 && stoneAge == true){
        let sledgehammer = true;
        stone -= 120, sledgehammer2++;
    } if (sledgehammer = true){
        stoneperclick = 3;
    } if (sledgehammer2 >= 2){
        stone += 120;
    }
}
function buyMetal(){
    if (metal >= 100){
        let stonePick  = true;
        metal -= 100, stonePick2++;
    } if (stonePick = true){
        metalperclick = 2;
    } if (stonePick2 >= 2){
        metal += 100;
    }
}
function buyMetal2(){
    if (stonePick = true && metal >= 120 && metalAge == true){
        let metalPick = true;
        metal -= 120, metalPick2++;
    } if (metalPick = true){
        metalperclick = 3;
    } if (metalPick2 >= 2){
        metal += 120;
    }
}
function buyPowerWood(){
    if (powerAge == true && power == 5000 && wood == 5000){
        chainsawAmount += 1, power -= 5000, wood -= 5000;
    }if (chainsawAmount >= 2){
        power += 5000, wood += 5000;
    }
}
function buyPowerStone(){
    if (powerAge == true && power == 5000 && stone == 5000){
        drillAmount += 1, power -= 5000, stone -= 5000;
    }if (drillAmount >= 2){
        power += 5000, stone += 5000;
    }
}
function buyPowerMetal(){
    if (powerAge == true && power == 5000 && metal == 5000){
        quaryAmount += 1, power -= 5000, metal -= 5000;
    }if (quaryAmount >= 2){
        power += 5000, metal += 5000;
    }
}
function addPowerTools(){
    wood += chainsaw*chainsawAmount, stone += drill*stoneAmount, metal += quary*quaryAmount;
}
