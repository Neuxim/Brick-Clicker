var Houseu1_cost = 8000;
var Houseu2_cost = 40000;
var Houseu3_cost = 600000;
var Houseu4_cost = 7500000;
var Houseu5_cost = 56250000;
var Houseu6_cost = 281250000;

document.getElementById("House_2x_1").innerText = "2x/sfrom Houses cost: " + formatNumber(Houseu1_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("House_2x_2").innerText = "2x/sfrom Houses cost: " + formatNumber(Houseu2_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("House_2x_3").innerText = "2x/sfrom Houses cost: " + formatNumber(Houseu3_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("House_2x_4").innerText = "2x/sfrom Houses cost: " + formatNumber(Houseu4_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("House_2x_5").innerText = "2x/sfrom Houses cost: " + formatNumber(Houseu5_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("House_2x_6").innerText = "2x/sfrom Houses cost: " + formatNumber(Houseu6_cost, {useOrderSuffix: true, decimals: 2});

document.getElementById("House_2x_1").onclick = () => {
    if(bricks >= Houseu1_cost && House_multiplayer == 1) {
        bricks = bricks - Houseu1_cost;
        House_multiplayer = House_multiplayer + 1;
        document.getElementById("House").style.backgroundImage = "url('sprites/House-1.jpg')";
        document.getElementById("House_2x_1").remove();
    }
}
document.getElementById("House_2x_2").onclick = () => {
    if(bricks >= Houseu2_cost && House_multiplayer == 2) {
        bricks = bricks - Houseu2_cost;
        House_multiplayer = House_multiplayer + 2;
        document.getElementById("House").style.backgroundImage = "url('sprites/House-2.jpg')";
        document.getElementById("House_2x_2").remove();
    }
}
document.getElementById("House_2x_3").onclick = () => {
    if(bricks >= Houseu3_cost && House_multiplayer == 4) {
        bricks = bricks - Houseu3_cost;
        House_multiplayer = House_multiplayer + 4;
        document.getElementById("House").style.backgroundImage = "url('sprites/House-3.jpg')";
        document.getElementById("House_2x_3").remove();
    }
}
document.getElementById("House_2x_4").onclick = () => {
    if(bricks >= Houseu4_cost && House_multiplayer == 8) {
        bricks = bricks - Houseu4_cost;
        House_multiplayer = House_multiplayer + 8;
        document.getElementById("House").style.backgroundImage = "url('sprites/House-4.jpg')";
        document.getElementById("House_2x_4").remove();
    }
}
document.getElementById("House_2x_5").onclick = () => {
    if(bricks >= Houseu5_cost && House_multiplayer == 16) {
        bricks = bricks - Houseu5_cost;
        House_multiplayer = House_multiplayer + 16;
        document.getElementById("House").style.backgroundImage = "url('sprites/House-5.jpg')";
        document.getElementById("House_2x_5").remove();
   }
}
document.getElementById("House_2x_6").onclick = () => {
    if(bricks >= Houseu6_cost && House_multiplayer == 32) {
        bricks = bricks - Houseu6_cost;
        House_multiplayer = House_multiplayer + 64;
        document.getElementById("House").style.backgroundImage = "url('sprites/House-6.jpg')";
        document.getElementById("House_2x_6").remove();
    }
}