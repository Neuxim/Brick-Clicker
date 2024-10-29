var wallu1_cost = 1000;
var wallu2_cost = 5000;
var wallu3_cost = 75000;
var wallu4_cost = 937500;
var wallu5_cost = 7031250;
var wallu6_cost = 35156250;

document.getElementById("wall_2x_1").innerText = "2x/s from walls cost: " + formatNumber(wallu1_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("wall_2x_2").innerText = "2x/s from walls cost: " + formatNumber(wallu2_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("wall_2x_3").innerText = "2x/s from walls cost: " + formatNumber(wallu3_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("wall_2x_4").innerText = "2x/s from walls cost: " + formatNumber(wallu4_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("wall_2x_5").innerText = "2x/s from walls cost: " + formatNumber(wallu5_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("wall_2x_6").innerText = "2x/s from walls cost: " + formatNumber(wallu6_cost, {useOrderSuffix: true, decimals: 2});

document.getElementById("wall_2x_1").onclick = () => {
    if(bricks >= wallu1_cost && walls_multiplayer == 1) {
        bricks = bricks - wallu1_cost;
        walls_multiplayer = walls_multiplayer + 1;
        document.getElementById("wall").style.backgroundImage = "url('sprites/wall-1.jpg')";
        document.getElementById("wall_2x_1").remove();
    }
}
document.getElementById("wall_2x_2").onclick = () => {
    if(bricks >= wallu2_cost && walls_multiplayer == 2) {
        bricks = bricks - wallu2_cost;
        walls_multiplayer = walls_multiplayer + 2;
        document.getElementById("wall").style.backgroundImage = "url('sprites/wall-2.jpg')";
        document.getElementById("wall_2x_2").remove();
    }
}
document.getElementById("wall_2x_3").onclick = () => {
    if(bricks >= wallu3_cost && walls_multiplayer == 4) {
        bricks = bricks - wallu3_cost;
        walls_multiplayer = walls_multiplayer + 4;
        document.getElementById("wall").style.backgroundImage = "url('sprites/wall-3.jpg')";
        document.getElementById("wall_2x_3").remove();
    }
}
document.getElementById("wall_2x_4").onclick = () => {
    if(bricks >= wallu4_cost && walls_multiplayer == 8) {
        bricks = bricks - wallu4_cost;
        walls_multiplayer = walls_multiplayer + 8;
        document.getElementById("wall").style.backgroundImage = "url('sprites/wall-4.jpg')";
        document.getElementById("wall_2x_4").remove();
    }
}
document.getElementById("wall_2x_5").onclick = () => {
    if(bricks >= wallu5_cost && walls_multiplayer == 16) {
        bricks = bricks - wallu5_cost;
        walls_multiplayer = walls_multiplayer + 16;
        document.getElementById("wall").style.backgroundImage = "url('sprites/wall-5.jpg')";
        document.getElementById("wall_2x_5").remove();
     }
}
document.getElementById("wall_2x_6").onclick = () => {
    if(bricks >= wallu6_cost && walls_multiplayer == 32) {
        bricks = bricks - wallu6_cost;
        walls_multiplayer = walls_multiplayer + 32;
        document.getElementById("wall").style.backgroundImage = "url('sprites/wall-6.jpg')";
        document.getElementById("wall_2x_6").remove();
    }
}