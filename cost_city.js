var Cityu1_cost = 500000;
var Cityu2_cost = 2500000;
var Cityu3_cost = 37500000;
var Cityu4_cost = 468750000;
var Cityu5_cost = 3515625000;
var Cityu6_cost = 17578125000;

document.getElementById("City_2x_1").innerText = "2x/s from cities cost: " + formatNumber(Cityu1_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("City_2x_2").innerText = "2x/s from cities cost: " + formatNumber(Cityu2_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("City_2x_3").innerText = "2x/s from cities cost: " + formatNumber(Cityu3_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("City_2x_4").innerText = "2x/s from cities cost: " + formatNumber(Cityu4_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("City_2x_5").innerText = "2x/s from cities cost: " + formatNumber(Cityu5_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("City_2x_6").innerText = "2x/s from cities cost: " + formatNumber(Cityu6_cost, {useOrderSuffix: true, decimals: 2});

document.getElementById("City_2x_1").onclick = () => {
    if(bricks >= Cityu1_cost && City_multiplayer == 1) {
        bricks = bricks - Cityu1_cost;
        City_multiplayer = City_multiplayer + 1;
        document.getElementById("City").style.backgroundImage = "url('sprites/City-1.jpg')";
        document.getElementById("City_2x_1").remove();
    }
}
document.getElementById("City_2x_2").onclick = () => {
    if(bricks >= Cityu2_cost && City_multiplayer == 2) {
        bricks = bricks - Cityu2_cost;
        City_multiplayer = City_multiplayer + 2;
        document.getElementById("City").style.backgroundImage = "url('sprites/City-2.jpg')";
        document.getElementById("City_2x_2").remove();
    }
}
document.getElementById("City_2x_3").onclick = () => {
    if(bricks >= Cityu3_cost && City_multiplayer == 4) {
        bricks = bricks - Cityu3_cost;
        City_multiplayer = City_multiplayer + 4;
        document.getElementById("City").style.backgroundImage = "url('sprites/City-3.jpg')";
        document.getElementById("City_2x_3").remove();;
    }
}
document.getElementById("City_2x_4").onclick = () => {
    if(bricks >= Cityu4_cost && City_multiplayer == 8) {
        bricks = bricks - Cityu4_cost;
        City_multiplayer = City_multiplayer + 8;
        document.getElementById("City").style.backgroundImage = "url('sprites/City-4.jpg')";
        document.getElementById("City_2x_4").remove();
    }
}
document.getElementById("City_2x_5").onclick = () => {
    if(bricks >= Cityu5_cost && City_multiplayer == 16) {
        bricks = bricks - Cityu5_cost;
        City_multiplayer = City_multiplayer + 16;
        document.getElementById("City").style.backgroundImage = "url('sprites/City-5.jpg')";
        document.getElementById("City_2x_5").remove();
    }
}
document.getElementById("City_2x_6").onclick = () => {
    if(bricks >= Cityu6_cost && City_multiplayer == 32) {
        bricks = bricks - Cityu6_cost;
        City_multiplayer = City_multiplayer + 32;
        document.getElementById("City").style.backgroundImage = "url('sprites/City-6.jpg')";
        document.getElementById("City_2x_6").remove();
    }
}