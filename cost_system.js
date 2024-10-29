var systemu1_cost = 1000000000000;
var systemu2_cost = 5000000000000;
var systemu3_cost = 75000000000000;
var systemu4_cost = 937500000000000;
var systemu5_cost = 7031250000000000;
var systemu6_cost = 35156250000000000;

document.getElementById("system_2x_1").innerText = "2x/s from solar systems cost: " + formatNumber(systemu1_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("system_2x_2").innerText = "2x/s from solar systems cost: " + formatNumber(systemu2_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("system_2x_3").innerText = "2x/s from solar systems cost: " + formatNumber(systemu3_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("system_2x_4").innerText = "2x/s from solar systems cost: " + formatNumber(systemu4_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("system_2x_5").innerText = "2x/s from solar systems cost: " + formatNumber(systemu5_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("system_2x_6").innerText = "2x/s from solar systems cost: " + formatNumber(systemu6_cost, {useOrderSuffix: true, decimals: 2});

document.getElementById("system_2x_1").onclick = () => {
    if(bricks >= systemu1_cost && system_multiplayer == 1) {
        bricks = bricks - systemu1_cost;
        system_multiplayer = system_multiplayer + 1;
        document.getElementById("system").style.backgroundImage = "url('sprites/systemsloneczny-1.png')";
        document.getElementById("system_2x_1").remove();
        document.getElementById("system_2x_1").innerText = "";
    }
}
document.getElementById("system_2x_2").onclick = () => {
    if(bricks >= systemu2_cost && system_multiplayer == 2) {
        bricks = bricks - systemu2_cost;
        system_multiplayer = system_multiplayer + 2;
        document.getElementById("system").style.backgroundImage = "url('sprites/systemsloneczny-2.png')";
        document.getElementById("system_2x_2").remove();
        document.getElementById("system_2x_2").innerText = "";
    }
}
document.getElementById("system_2x_3").onclick = () => {
    if(bricks >= systemu3_cost && system_multiplayer == 4) {
        bricks = bricks - systemu3_cost;
        system_multiplayer = system_multiplayer + 4;
        document.getElementById("system").style.backgroundImage = "url('sprites/systemsloneczny-3.png')";
        document.getElementById("system_2x_3").remove();
        document.getElementById("system_2x_3").innerText = "";
    }
}
document.getElementById("system_2x_4").onclick = () => {
    if(bricks >= systemu4_cost && system_multiplayer == 8) {
        bricks = bricks - systemu4_cost;
        system_multiplayer = system_multiplayer + 8;
        document.getElementById("system").style.backgroundImage = "url('sprites/systemsloneczny-4.png')";
        document.getElementById("system_2x_4").remove();
        document.getElementById("system_2x_4").innerText = "";
    }
}
document.getElementById("system_2x_5").onclick = () => {
    if(bricks >= systemu5_cost && system_multiplayer == 16) {
        bricks = bricks - systemu5_cost;
        system_multiplayer = system_multiplayer + 16;
        document.getElementById("system").style.backgroundImage = "url('sprites/systemsloneczny-5.png')";
        document.getElementById("system_2x_5").remove();
        document.getElementById("system_2x_5").innerText = "";
    }
}
document.getElementById("system_2x_6").onclick = () => {
    if(bricks >= systemu6_cost && system_multiplayer == 32) {
        bricks = bricks - systemu6_cost;
        system_multiplayer = system_multiplayer + 32;
        document.getElementById("system").style.backgroundImage = "url('sprites/systemsloneczny-6.png')";
        document.getElementById("system_2x_6").remove();
        document.getElementById("system_2x_6").innerText = "";
    }
}