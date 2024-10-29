var Estateu1_cost = 47000;
var Estateu2_cost = 235000;
var Estateu3_cost = 3525000;
var Estateu4_cost = 44062500;
var Estateu5_cost = 330468750;
var Estateu6_cost = 1652343750;

document.getElementById("Estate_2x_1").innerText = "2x/s from estates cost: " + formatNumber(Estateu1_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("Estate_2x_2").innerText = "2x/s from estates cost: " + formatNumber(Estateu2_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("Estate_2x_3").innerText = "2x/s from estates cost: " + formatNumber(Estateu3_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("Estate_2x_4").innerText = "2x/s from estates cost: " + formatNumber(Estateu4_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("Estate_2x_5").innerText = "2x/s from estates cost: " + formatNumber(Estateu5_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("Estate_2x_6").innerText = "2x/s from estates cost: " + formatNumber(Estateu6_cost, {useOrderSuffix: true, decimals: 2});

document.getElementById("Estate_2x_1").onclick = () => {
    if(bricks >= Estateu1_cost && Estate_multiplayer == 1) {
        bricks = bricks - Estateu1_cost;
        Estate_multiplayer = Estate_multiplayer + 1;
        document.getElementById("Estate").style.backgroundImage = "url('sprites/Estate-1.jpg')";
        document.getElementById("Estate_2x_1").remove();            }
}
document.getElementById("Estate_2x_2").onclick = () => {
    if(bricks >= Estateu2_cost && Estate_multiplayer == 2) {
        bricks = bricks - Estateu2_cost;
        Estate_multiplayer = Estate_multiplayer + 2;
        document.getElementById("Estate").style.backgroundImage = "url('sprites/Estate-2.jpg')";
        document.getElementById("Estate_2x_2").remove();            }
}
document.getElementById("Estate_2x_3").onclick = () => {
    if(bricks >= Estateu3_cost && Estate_multiplayer == 4) {
        bricks = bricks - Estateu3_cost;
        Estate_multiplayer = Estate_multiplayer + 4;
        document.getElementById("Estate").style.backgroundImage = "url('sprites/Estate-3.jpg')";
        document.getElementById("Estate_2x_3").remove();
    }
}
document.getElementById("Estate_2x_4").onclick = () => {
    if(bricks >= Estateu4_cost && Estate_multiplayer == 8) {
        bricks = bricks - Estateu4_cost;
        Estate_multiplayer = Estate_multiplayer + 8;
        document.getElementById("Estate").style.backgroundImage = "url('sprites/Estate-4.jpg')";
        document.getElementById("Estate_2x_4").remove();
    }
}
document.getElementById("Estate_2x_5").onclick = () => {
    if(bricks >= Estateu5_cost && Estate_multiplayer == 16) {
        bricks = bricks - Estateu5_cost;
        Estate_multiplayer = Estate_multiplayer + 16;
        document.getElementById("Estate").style.backgroundImage = "url('sprites/Estate-5.jpg')";
        document.getElementById("Estate_2x_5").remove();
    }
}
document.getElementById("Estate_2x_6").onclick = () => {
    if(bricks >= Estateu6_cost && Estate_multiplayer == 32) {
        bricks = bricks - Estateu6_cost;
        Estate_multiplayer = Estate_multiplayer + 32;
        document.getElementById("Estate").style.backgroundImage = "url('sprites/Estate-6.jpg')";
        document.getElementById("Estate_2x_6").remove();
    }
}