var Galaxyu1_cost = 115000000000000;
var Galaxyu2_cost = 575000000000000;
var Galaxyu3_cost = 8625000000000000;
var Galaxyu4_cost = 107812500000000000;
var Galaxyu5_cost = 808593750000000000;
var Galaxyu6_cost = 4042968750000000000;

document.getElementById("Galaxy_2x_1").innerText = "2x/s from Galaxies cost: " + formatNumber(Galaxyu1_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("Galaxy_2x_2").innerText = "2x/s from Galaxies cost: " + formatNumber(Galaxyu2_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("Galaxy_2x_3").innerText = "2x/s from Galaxies cost: " + formatNumber(Galaxyu3_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("Galaxy_2x_4").innerText = "2x/s from Galaxies cost: " + formatNumber(Galaxyu4_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("Galaxy_2x_5").innerText = "2x/s from Galaxies cost: " + formatNumber(Galaxyu5_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("Galaxy_2x_6").innerText = "2x/s from Galaxies cost: " + formatNumber(Galaxyu6_cost, {useOrderSuffix: true, decimals: 2});

document.getElementById("Galaxy_2x_1").onclick = () => {
    if(bricks >= Galaxyu1_cost && Galaxy_multiplayer == 1) {
        bricks = bricks - Galaxyu1_cost;
        Galaxy_multiplayer = Galaxy_multiplayer + 1;
        document.getElementById("Galaxy").style.backgroundImage = "url('sprites/Galaxy-1.png')";
        document.getElementById("Galaxy_2x_1").remove();
        document.getElementById("Galaxy_2x_1").innerText = "";
    }
}
document.getElementById("Galaxy_2x_2").onclick = () => {
    if(bricks >= Galaxyu2_cost && Galaxy_multiplayer == 2) {
        bricks = bricks - Galaxyu2_cost;
        Galaxy_multiplayer = Galaxy_multiplayer + 2;
        document.getElementById("Galaxy").style.backgroundImage = "url('sprites/Galaxy-2.png')";
        document.getElementById("Galaxy_2x_2").remove();
        document.getElementById("Galaxy_2x_2").innerText = "";
    }
}
document.getElementById("Galaxy_2x_3").onclick = () => {
    if(bricks >= Galaxyu3_cost && Galaxy_multiplayer == 4) {
        bricks = bricks - Galaxyu3_cost;
        Galaxy_multiplayer = Galaxy_multiplayer + 4;
        document.getElementById("Galaxy").style.backgroundImage = "url('sprites/Galaxy-3.png')";
        document.getElementById("Galaxy_2x_3").remove();
        document.getElementById("Galaxy_2x_3").innerText = "";
    }
}
document.getElementById("Galaxy_2x_4").onclick = () => {
    if(bricks >= Galaxyu4_cost && Galaxy_multiplayer == 8) {
        bricks = bricks - Galaxyu4_cost;
        Galaxy_multiplayer = Galaxy_multiplayer + 8;
        document.getElementById("Galaxy").style.backgroundImage = "url('sprites/Galaxy-4.png')";
        document.getElementById("Galaxy_2x_4").remove();
        document.getElementById("Galaxy_2x_4").innerText = "";
    }
}
document.getElementById("Galaxy_2x_5").onclick = () => {
    if(bricks >= Galaxyu5_cost && Galaxy_multiplayer == 16) {
        bricks = bricks - Galaxyu5_cost;
        Galaxy_multiplayer = Galaxy_multiplayer + 16;
        document.getElementById("Galaxy").style.backgroundImage = "url('sprites/Galaxy-5.png')";
        document.getElementById("Galaxy_2x_5").remove();
        document.getElementById("Galaxy_2x_5").innerText = "";
    }
}
document.getElementById("Galaxy_2x_6").onclick = () => {
    if(bricks >= Galaxyu6_cost && Galaxy_multiplayer == 32) {
        bricks = bricks - Galaxyu6_cost;
        Galaxy_multiplayer = Galaxy_multiplayer + 32;
        document.getElementById("Galaxy").style.backgroundImage = "url('sprites/Galaxy-6.png')";
        document.getElementById("Galaxy_2x_6").remove();
        document.getElementById("Galaxy_2x_6").innerText = "";
    }
}