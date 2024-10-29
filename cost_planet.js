var Planetu1_cost =30000000000;
var Planetu2_cost =150000000000;
var Planetu3_cost =2250000000000;
var Planetu4_cost =28125000000000;
var Planetu5_cost =210937500000000;
var Planetu6_cost =1054687500000000;

document.getElementById("Planet_2x_1").innerText = "2x/s from Planets cost: " + formatNumber(Planetu1_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("Planet_2x_2").innerText = "2x/s from Planets cost: " + formatNumber(Planetu2_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("Planet_2x_3").innerText = "2x/s from Planets cost: " + formatNumber(Planetu3_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("Planet_2x_4").innerText = "2x/s from Planets cost: " + formatNumber(Planetu4_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("Planet_2x_5").innerText = "2x/s from Planets cost: " + formatNumber(Planetu5_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("Planet_2x_6").innerText = "2x/s from Planets cost: " + formatNumber(Planetu6_cost, {useOrderSuffix: true, decimals: 2});

document.getElementById("Planet_2x_1").onclick = () => {
    if(bricks >= Planetu1_cost && Planet_mulitiplayer == 1) {
        bricks = bricks - Planetu1_cost;
        Planet_mulitiplayer = Planet_mulitiplayer + 1;
        document.getElementById("Planet").style.backgroundImage = "url('sprites/ziemia-1.png')";
        document.getElementById("Planet_2x_1").remove();
    }
}
document.getElementById("Planet_2x_2").onclick = () => {
    if(bricks >= Planetu2_cost && Planet_mulitiplayer == 2) {
        bricks = bricks - Planetu2_cost;
        Planet_mulitiplayer = Planet_mulitiplayer + 2;
        document.getElementById("Planet").style.backgroundImage = "url('sprites/ziemia-2.png')";
        document.getElementById("Planet_2x_2").remove();
    }
}
document.getElementById("Planet_2x_3").onclick = () => {
    if(bricks >= Planetu3_cost && Planet_mulitiplayer == 4) {
        bricks = bricks - Planetu3_cost;
        Planet_mulitiplayer = Planet_mulitiplayer + 4;
        document.getElementById("Planet").style.backgroundImage = "url('sprites/ziemia-3.png')";
        document.getElementById("Planet_2x_3").remove();
    }
}
document.getElementById("Planet_2x_4").onclick = () => {
    if(bricks >= Planetu4_cost && Planet_mulitiplayer == 8) {
        bricks = bricks - Planetu4_cost;
        Planet_mulitiplayer = Planet_mulitiplayer + 8;
        document.getElementById("Planet").style.backgroundImage = "url('sprites/ziemia-4.png')";
        document.getElementById("Planet_2x_4").remove();
        document.getElementById("Planet_2x_4").innerText = "";
        document.getElementById("Planet").innerText = "Planet - generates "+formatNumber(30000000*Planet_mulitiplayer, {useOrderSuffix: true, decimals: 1})+" bricks per second and costs " + formatNumber(Planet_cost, {useOrderSuffix: true, decimals: 2});
    }
}
document.getElementById("Planet_2x_5").onclick = () => {
    if(bricks >= Planetu5_cost && Planet_mulitiplayer == 16) {
        bricks = bricks - Planetu5_cost;
        Planet_mulitiplayer = Planet_mulitiplayer + 16;
        document.getElementById("Planet").style.backgroundImage = "url('sprites/ziemia-5.png')";
        document.getElementById("Planet_2x_5").remove();
        document.getElementById("Planet_2x_5").innerText = "";
        document.getElementById("Planet").innerText = "Planet - generates "+formatNumber(30000000*Planet_mulitiplayer, {useOrderSuffix: true, decimals: 1})+" bricks per second and costs " + formatNumber(Planet_cost, {useOrderSuffix: true, decimals: 2});
    }
}
document.getElementById("Planet_2x_6").onclick = () => {
    if(bricks >= Planetu6_cost && Planet_mulitiplayer == 32) {
        bricks = bricks - Planetu6_cost;
        Planet_mulitiplayer = Planet_mulitiplayer + 32;
        document.getElementById("Planet").style.backgroundImage = "url('sprites/ziemia-6.png')";
        document.getElementById("Planet_2x_6").remove();
        document.getElementById("Planet_2x_6").innerText = "";
        document.getElementById("Planet").innerText = "Planet - generates "+formatNumber(30000000*Planet_mulitiplayer, {useOrderSuffix: true, decimals: 1})+" bricks per second and costs " + formatNumber(Planet_cost, {useOrderSuffix: true, decimals: 2});
    }
}