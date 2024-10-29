var aurau1_cost=1000;
var aurau2_cost=5000;
var aurau3_cost=100000;
var aurau4_cost=1000000;
var aurau5_cost=100000000;
var aurau6_cost=1000000000;

document.getElementById("aura_2x_1").innerText = "income +1% from clicking cost: " + formatNumber(aurau1_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("aura_2x_2").innerText = "income +1% from clicking cost: " + formatNumber(aurau2_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("aura_2x_3").innerText = "income +1% from clicking cost: " + formatNumber(aurau3_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("aura_2x_4").innerText = "income +2% from clicking cost: " + formatNumber(aurau4_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("aura_2x_5").innerText = "income +2% from clicking cost: " + formatNumber(aurau5_cost, {useOrderSuffix: true, decimals: 2});
document.getElementById("aura_2x_6").innerText = "income +3% from clicking cost: " + formatNumber(aurau6_cost, {useOrderSuffix: true, decimals: 2});

document.getElementById("aura_2x_1").onclick = () => {
    if(bricks >= aurau1_cost && clickin_mulitplayer == 1) {
        bricks = bricks - aurau1_cost;
        clickin_mulitplayer = clickin_mulitplayer + 0.01;
        document.getElementById("aura_area").style.backgroundImage = "url('sprites/aura-1.png')";
        document.getElementById("aura_2x_1").remove();
    }
}
document.getElementById("aura_2x_2").onclick = () => {
    if(bricks >= aurau2_cost && clickin_mulitplayer == 1.01) {
        bricks = bricks - aurau2_cost;
        clickin_mulitplayer = clickin_mulitplayer + 0.01;
        document.getElementById("aura_area").style.backgroundImage = "url('sprites/aura-2.png')";
        document.getElementById("aura_2x_2").remove();
    }
}
document.getElementById("aura_2x_3").onclick = () => {
    if(bricks >= aurau3_cost && clickin_mulitplayer == 1.02) {
        bricks = bricks - aurau3_cost;
        clickin_mulitplayer = clickin_mulitplayer + 0.01;
        document.getElementById("aura_area").style.backgroundImage = "url('sprites/aura-3.png')";
        document.getElementById("aura_2x_3").remove();
    }
}
document.getElementById("aura_2x_4").onclick = () => {
    if(bricks >= aurau4_cost && clickin_mulitplayer == 1.03) {
        bricks = bricks - aurau4_cost;
        clickin_mulitplayer = clickin_mulitplayer + 0.02;
        document.getElementById("aura_area").style.backgroundImage = "url('sprites/aura-4.png')";
        document.getElementById("aura_2x_4").remove();
    }
}
document.getElementById("aura_2x_5").onclick = () => {
    if(bricks >= aurau5_cost && clickin_mulitplayer == 1.05) {
        bricks = bricks - aurau5_cost;
        clickin_mulitplayer = clickin_mulitplayer + 0.02;
        document.getElementById("aura_area").style.backgroundImage = "url('sprites/aura-5.png')";
        document.getElementById("aura_2x_5").remove();
    }
}
document.getElementById("aura_2x_6").onclick = () => {
    if(bricks >= aurau6_cost && clickin_mulitplayer == 1.07) {
        bricks = bricks - aurau6_cost;
        clickin_mulitplayer = clickin_mulitplayer + 0.03;
        document.getElementById("aura_area").style.backgroundImage = "url('sprites/aura-6.png')";
        document.getElementById("aura_2x_6").remove();
    }
}