var cementu1_cost = 100;
var cementu2_cost = 500;
var cementu3_cost = 7500;
var cementu4_cost = 94750;
var cementu5_cost = 379000;
var cementu6_cost = 3032000;

document.getElementById("cement_2x_1").innerText = "2x/s from cement cost: " + formatNumber(cementu1_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("cement_2x_2").innerText = "2x/s from cement cost: " + formatNumber(cementu2_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("cement_2x_3").innerText = "2x/s from cement cost: " + formatNumber(cementu3_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("cement_2x_4").innerText = "2x/s from cement cost: " + formatNumber(cementu4_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("cement_2x_5").innerText = "4x/s from cement cost: " + formatNumber(cementu5_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("cement_2x_6").innerText = "8x/s from cement cost: " + formatNumber(cementu6_cost, {useOrderSuffix: true, decimals: 2});

document.getElementById("cement_2x_1").onclick = () => {
    if(bricks >= cementu1_cost && cement_multiplayer == 1) {
        bricks = bricks - cementu1_cost;
        cement_multiplayer = cement_multiplayer + 1;
        document.getElementById("cement").style.backgroundImage = "url('sprites/cement-1.jpg')";
        document.getElementById("cement_2x_1").remove();
    }
}
document.getElementById("cement_2x_2").onclick = () => {
    if(bricks >= cementu2_cost && cement_multiplayer == 2) {
        bricks = bricks - cementu2_cost;
        cement_multiplayer = cement_multiplayer + 2;
        document.getElementById("cement").style.backgroundImage = "url('sprites/cement-2.jpg')";
        document.getElementById("cement_2x_2").remove();
    }
}
document.getElementById("cement_2x_3").onclick = () => {
    if(bricks >= cementu3_cost && cement_multiplayer == 4) {
        bricks = bricks - cementu3_cost;
        cement_multiplayer = cement_multiplayer + 4;
        document.getElementById("cement").style.backgroundImage = "url('sprites/cement-3.jpg')";
        document.getElementById("cement_2x_3").remove();
    }
}
document.getElementById("cement_2x_4").onclick = () => {
    if(bricks >= cementu4_cost && cement_multiplayer == 8) {
        bricks = bricks - cementu4_cost;
        cement_multiplayer = cement_multiplayer + 8;
        document.getElementById("cement").style.backgroundImage = "url('sprites/cement-4.jpg')";
        document.getElementById("cement_2x_4").remove();
    }
}
document.getElementById("cement_2x_5").onclick = () => {
    if(bricks >= cementu5_cost && cement_multiplayer == 16) {
        bricks = bricks - cementu5_cost;
        cement_multiplayer = cement_multiplayer * 4;
        document.getElementById("cement").style.backgroundImage = "url('sprites/cement-5.jpg')";
        document.getElementById("cement_2x_5").remove();;
    }
}
document.getElementById("cement_2x_6").onclick = () => {
    if(bricks >= cementu6_cost && cement_multiplayer == 64) {
        bricks = bricks - cementu6_cost;
        cement_multiplayer = cement_multiplayer * 8;
        document.getElementById("cement").style.backgroundImage = "url('sprites/cement-6.jpg')";
        document.getElementById("cement_2x_6").remove();
    }
}