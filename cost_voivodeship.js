var voivodeshipu1_cost = 4000000;
var voivodeshipu2_cost = 20000000;
var voivodeshipu3_cost = 300000000;
var voivodeshipu4_cost = 3750000000;
var voivodeshipu5_cost = 28125000000;
var voivodeshipu6_cost = 140625000000;

document.getElementById("voivodeship_2x_1").innerText = "2x/s from voivodeships cost: " + formatNumber(voivodeshipu1_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("voivodeship_2x_2").innerText = "2x/s from voivodeships cost: " + formatNumber(voivodeshipu2_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("voivodeship_2x_3").innerText = "2x/s from voivodeships cost: " + formatNumber(voivodeshipu3_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("voivodeship_2x_4").innerText = "2x/s from voivodeships cost: " + formatNumber(voivodeshipu4_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("voivodeship_2x_5").innerText = "2x/s from voivodeships cost: " + formatNumber(voivodeshipu5_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("voivodeship_2x_6").innerText = "2x/s from voivodeships cost: " + formatNumber(voivodeshipu6_cost, {useOrderSuffix: true, decimals: 2});

document.getElementById("voivodeship_2x_1").onclick = () => {
    if(bricks >= voivodeshipu1_cost && voivodeship_multiplayer == 1) {
        bricks = bricks - voivodeshipu1_cost;
        voivodeship_multiplayer = voivodeship_multiplayer + 1;
        document.getElementById("voivodeship").style.backgroundImage = "url('sprites/voivodeship-1.png')";
        document.getElementById("voivodeship_2x_1").remove();
    }
}
document.getElementById("voivodeship_2x_2").onclick = () => {
    if(bricks >= voivodeshipu2_cost && voivodeship_multiplayer == 2) {
        bricks = bricks - voivodeshipu2_cost;
        voivodeship_multiplayer = voivodeship_multiplayer + 2;
        document.getElementById("voivodeship").style.backgroundImage = "url('sprites/voivodeship-2.png')";
        document.getElementById("voivodeship_2x_2").remove();
    }
}
document.getElementById("voivodeship_2x_3").onclick = () => {
    if(bricks >= voivodeshipu3_cost && voivodeship_multiplayer == 4) {
        bricks = bricks - voivodeshipu3_cost;
        voivodeship_multiplayer = voivodeship_multiplayer + 4;
        document.getElementById("voivodeship").style.backgroundImage = "url('sprites/voivodeship-3.png')";
        document.getElementById("voivodeship_2x_3").remove();
    }
}
document.getElementById("voivodeship_2x_4").onclick = () => {
    if(bricks >= voivodeshipu4_cost && voivodeship_multiplayer == 8) {
        bricks = bricks - voivodeshipu4_cost;
        voivodeship_multiplayer = voivodeship_multiplayer + 8;
        document.getElementById("voivodeship").style.backgroundImage = "url('sprites/voivodeship-4.png')";
        document.getElementById("voivodeship_2x_4").remove();
    }
}
document.getElementById("voivodeship_2x_5").onclick = () => {
    if(bricks >= voivodeshipu5_cost && voivodeship_multiplayer == 16) {
        bricks = bricks - voivodeshipu5_cost;
        voivodeship_multiplayer = voivodeship_multiplayer + 16;
        document.getElementById("voivodeship").style.backgroundImage = "url('sprites/voivodeship-5.png')";
        document.getElementById("voivodeship_2x_5").remove();
    }
}
document.getElementById("voivodeship_2x_6").onclick = () => {
    if(bricks >= voivodeshipu6_cost && voivodeship_multiplayer == 32) {
        bricks = bricks - voivodeshipu6_cost;
        voivodeship_multiplayer = voivodeship_multiplayer + 32;
        document.getElementById("voivodeship").style.backgroundImage = "url('sprites/voivodeship-6.png')";
        document.getElementById("voivodeship_2x_6").remove();
    }
}