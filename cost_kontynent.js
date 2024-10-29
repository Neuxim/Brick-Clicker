var kontynetu1_cost = 160000000;
var kontynetu2_cost = 800000000;
var kontynetu3_cost = 12000000000;
var kontynetu4_cost = 150000000000;
var kontynetu5_cost = 1125000000000;
var kontynetu6_cost = 5625000000000;

document.getElementById("Continent_2x_1").innerText = "2x/s from continents cost: " + formatNumber(kontynetu1_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("Continent_2x_2").innerText = "2x/s from continents cost: " + formatNumber(kontynetu2_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("Continent_2x_3").innerText = "2x/s from continents cost: " + formatNumber(kontynetu3_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("Continent_2x_4").innerText = "2x/s from continents cost: " + formatNumber(kontynetu4_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("Continent_2x_5").innerText = "2x/s from continents cost: " + formatNumber(kontynetu5_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("Continent_2x_6").innerText = "2x/s0 from continents cost: " + formatNumber(kontynetu6_cost, {useOrderSuffix: true, decimals: 2});

document.getElementById("Continent_2x_1").onclick = () => {
    if(bricks >= kontynetu1_cost && Continent_muliplayer == 1) {
        bricks = bricks - kontynetu1_cost;
        Continent_muliplayer = Continent_muliplayer + 1;
        document.getElementById("Continent").style.backgroundImage = "url('sprites/Continent-1.png')";
        document.getElementById("Continent_2x_1").remove();
    }
}
document.getElementById("Continent_2x_2").onclick = () => {
    if(bricks >= kontynetu2_cost && Continent_muliplayer == 2) {
        bricks = bricks - kontynetu2_cost;
        Continent_muliplayer = Continent_muliplayer + 2;
        document.getElementById("Continent").style.backgroundImage = "url('sprites/Continent-2.png')";
        document.getElementById("Continent_2x_2").remove();
    }
}
document.getElementById("Continent_2x_3").onclick = () => {
    if(bricks >= kontynetu3_cost && Continent_muliplayer == 4) {
        bricks = bricks - kontynetu3_cost;
        Continent_muliplayer = Continent_muliplayer + 4;
        document.getElementById("Continent").style.backgroundImage = "url('sprites/Continent-3.png')";
        document.getElementById("Continent_2x_3").remove();
    }
}
document.getElementById("Continent_2x_4").onclick = () => {
    if(bricks >= kontynetu4_cost && Continent_muliplayer == 8) {
        bricks = bricks - kontynetu4_cost;
        Continent_muliplayer = Continent_muliplayer + 8;
        document.getElementById("Continent").style.backgroundImage = "url('sprites/Continent-4.png')";
        document.getElementById("Continent_2x_4").remove();
    }
}
document.getElementById("Continent_2x_5").onclick = () => {
    if(bricks >= kontynetu5_cost && Continent_muliplayer == 16) {
        bricks = bricks - kontynetu5_cost;
        Continent_muliplayer = Continent_muliplayer + 16;
        document.getElementById("Continent").style.backgroundImage = "url('sprites/Continent-5.png')";
        document.getElementById("Continent_2x_5").remove();
    }
}
document.getElementById("Continent_2x_6").onclick = () => {
    if(bricks >= kontynetu6_cost && Continent_muliplayer == 32) {
        bricks = bricks - kontynetu6_cost;
        Continent_muliplayer = Continent_muliplayer + 32;
        document.getElementById("Continent").style.backgroundImage = "url('sprites/Continent-6.png')";
        document.getElementById("Continent_2x_6").remove();
    }
}