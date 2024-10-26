let brick_ubdater = setInterval(() => {
function round2(v) {
    return (v + 0.049999999).toFixed(3);
}
function round1(v) {
    return (v + 0.049999999).toFixed(1);
}
document.getElementById("bricks").innerText = formatNumber(round2(bricks), {useOrderSuffix: true, decimals: 3});
document.getElementById("clicking_power").innerText = formatNumber(((clickbrick + buildings/5 + (cement_income + wall_income + House_income + Estate_income + City_income + voivodeship_income + Country_income + Continent_income + Planet_income + system_income + Galaxy_income)*0.15) * clickin_mulitplayer), {useOrderSuffix: true, decimals: 2});
document.getElementById("buildings").innerText = formatNumber(buildings, {useOrderSuffix: true});
}, 10);  