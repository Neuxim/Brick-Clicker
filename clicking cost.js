var clickingu1_cost = 100;
var clickingu2_cost = 250;
var clickingu3_cost = 500;
var clickingu4_cost = 850;
var clickingu5_cost = 3450;
var clickingu6_cost = 27650;

const element_big_brick = document.getElementById("big_brick");

const element_clciking_2x_1 = document.getElementById("clicking_2x_1");
const element_clciking_2x_2 = document.getElementById("clicking_2x_2");
const element_clciking_2x_3 = document.getElementById("clicking_2x_3");
const element_clciking_2x_4 = document.getElementById("clicking_2x_4");
const element_clciking_2x_5 = document.getElementById("clicking_2x_5");
const element_clciking_2x_6 = document.getElementById("clicking_2x_6");

element_clciking_2x_1.innerText = "2x income from basic clicking cost: " + formatNumber(clickingu1_cost, {useOrderSuffix: true, decimals: 2});
element_clciking_2x_2.innerText = "2x income from basic clicking cost: " + formatNumber(clickingu2_cost, {useOrderSuffix: true, decimals: 2});
element_clciking_2x_3.innerText = "2x income from basic clicking cost: " + formatNumber(clickingu3_cost, {useOrderSuffix: true, decimals: 2});
element_clciking_2x_4.innerText = "2x income from basic clicking cost: " + formatNumber(clickingu4_cost, {useOrderSuffix: true, decimals: 2});
element_clciking_2x_5.innerText = "4x income from basic clicking cost: " + formatNumber(clickingu5_cost, {useOrderSuffix: true, decimals: 2});
element_clciking_2x_6.innerText = "8x income from basic clicking cost: " + formatNumber(clickingu6_cost, {useOrderSuffix: true, decimals: 2});

element_clciking_2x_1.onclick = () => {
    if(bricks >= clickingu1_cost && clickbrick == 1) {
        bricks = bricks - clickingu1_cost;
        clickbrick = clickbrick + 1;
        element_big_brick.style.backgroundImage = "url('sprites/brick-1.png')";
        element_clciking_2x_1.remove();
    }
}
element_clciking_2x_2.onclick = () => {
    if(bricks >= clickingu2_cost && clickbrick == 2) {
        bricks = bricks - clickingu2_cost;
        clickbrick = clickbrick + 2;
        element_big_brick.style.backgroundImage = "url('sprites/brick-2.png')";
        element_clciking_2x_2.remove();
    }
}
element_clciking_2x_3.onclick = () => {
    if(bricks >= clickingu3_cost && clickbrick == 4) {
        bricks = bricks - clickingu3_cost;
        clickbrick = clickbrick + 4;
        element_big_brick.style.backgroundImage = "url('sprites/brick-3.png')";
        element_clciking_2x_3.remove();
    }
}
element_clciking_2x_4.onclick = () => {
    if(bricks >= clickingu4_cost && clickbrick == 8) {
        bricks = bricks - clickingu4_cost;
        clickbrick = clickbrick + 8;
        element_big_brick.style.backgroundImage = "url('sprites/brick-4.png')";
        element_clciking_2x_4.remove();
    }
}
element_clciking_2x_5.onclick = () => {
    if(bricks >= clickingu5_cost && clickbrick == 16) {
        bricks = bricks - clickingu5_cost;
        clickbrick = clickbrick * 4;
        element_big_brick.style.backgroundImage = "url('sprites/brick-5.png')";
        element_clciking_2x_5.remove();
    }
}
element_clciking_2x_6.onclick = () => {
    if(bricks >= clickingu6_cost && clickbrick == 64) {
        bricks = bricks - clickingu6_cost;
        clickbrick = clickbrick * 8;
        element_big_brick.style.backgroundImage = "url('sprites/brick-6.png')";
        element_clciking_2x_6.remove();
    }
}