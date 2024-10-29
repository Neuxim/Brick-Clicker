var Countryu1_cost = 35000000;
var Countryu2_cost = 175000000;
var Countryu3_cost = 2625000000;
var Countryu4_cost = 32812500000;
var Countryu5_cost = 246093750000;
var Countryu6_cost = 1230468750000;

document.getElementById("Country_2x_1").innerText = "2x/s from countries cost: " + formatNumber(Countryu1_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("Country_2x_2").innerText = "2x/s from countries cost: " + formatNumber(Countryu2_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("Country_2x_3").innerText = "2x/s from countries cost: " + formatNumber(Countryu3_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("Country_2x_4").innerText = "2x/s from countries cost: " + formatNumber(Countryu4_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("Country_2x_5").innerText = "2x/s from countries cost: " + formatNumber(Countryu5_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("Country_2x_6").innerText = "2x/s from countries cost: " + formatNumber(Countryu6_cost, {useOrderSuffix: true, decimals: 2});

document.getElementById("Country_2x_1").onclick = () => {
    if(bricks >= Countryu1_cost && Country_multiplayer == 1) {
        bricks = bricks - Countryu1_cost;
        Country_multiplayer = Country_multiplayer + 1;
        document.getElementById("Country").style.backgroundImage = "url('sprites/Country-1.png')";
        document.getElementById("Country_2x_1").remove();;
    }
}
document.getElementById("Country_2x_2").onclick = () => {
    if(bricks >= Countryu2_cost && Country_multiplayer == 2) {
        bricks = bricks - Countryu2_cost;
        Country_multiplayer = Country_multiplayer + 2;
        document.getElementById("Country").style.backgroundImage = "url('sprites/Country-2.png')";
        document.getElementById("Country_2x_2").remove();
    }
}
document.getElementById("Country_2x_3").onclick = () => {
    if(bricks >= Countryu3_cost && Country_multiplayer == 4) {
        bricks = bricks - Countryu3_cost;
        Country_multiplayer = Country_multiplayer + 4;
        document.getElementById("Country").style.backgroundImage = "url('sprites/Country-3.png')";
        document.getElementById("Country_2x_3").remove();
    }
}
document.getElementById("Country_2x_4").onclick = () => {
    if(bricks >= Countryu4_cost && Country_multiplayer == 8) {
        bricks = bricks - Countryu4_cost;
        Country_multiplayer = Country_multiplayer + 8;
        document.getElementById("Country").style.backgroundImage = "url('sprites/Country-4.png')";
        document.getElementById("Country_2x_4").remove();
    }
}
document.getElementById("Country_2x_5").onclick = () => {
    if(bricks >= Countryu5_cost && Country_multiplayer == 16) {
        bricks = bricks - Countryu5_cost;
        Country_multiplayer = Country_multiplayer + 16;
        document.getElementById("Country").style.backgroundImage = "url('sprites/Country-5.png')";
        document.getElementById("Country_2x_5").remove();
    }
}
document.getElementById("Country_2x_6").onclick = () => {
    if(bricks >= Countryu6_cost && Country_multiplayer == 32) {
        bricks = bricks - Countryu6_cost;
        Country_multiplayer = Country_multiplayer + 32;
        document.getElementById("Country").style.backgroundImage = "url('sprites/Country-6.png')";
        document.getElementById("Country_2x_6").remove();
    }
}