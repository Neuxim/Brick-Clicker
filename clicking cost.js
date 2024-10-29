var clickingu1_cost = 1000;
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

function addUpgrade(cost, increment, requiredClickBrick, imageUrl, element) {
    element.onclick = () => {
        if (bricks >= cost && clickbrick === requiredClickBrick) {
            bricks -= cost;
            clickbrick += increment;
            element_big_brick.style.backgroundImage = `url('${imageUrl}')`;
            element.remove();
        }
    };
}

// Usage
addUpgrade(clickingu1_cost, 64, 1, 'sprites/brick-1.png', element_clciking_2x_1);
addUpgrade(clickingu2_cost, 2, 2, 'sprites/brick-2.png', element_clciking_2x_2);
addUpgrade(clickingu3_cost, 4, 4, 'sprites/brick-3.png', element_clciking_2x_3);
addUpgrade(clickingu4_cost, 8, 8, 'sprites/brick-4.png', element_clciking_2x_4);
addUpgrade(clickingu5_cost, 16, 16, 'sprites/brick-5.png', element_clciking_2x_5);
addUpgrade(clickingu6_cost, 64, 64, 'sprites/brick-6.png', element_clciking_2x_6);