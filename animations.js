
document.getElementById("big_brick").onclick = () => {
    document.getElementById("big_brick").classList.add("active");
    document.getElementById("aura_area").classList.add("active");

    clicks += 1;
    total += (clickbrick + buildings/5 + (cement_income + wall_income + House_income + Estate_income + City_income + voivodeship_income + Country_income + Continent_income + Planet_income + system_income + Galaxy_income)*0.15) * clickin_mulitplayer ;
    bricks = bricks + (clickbrick + buildings/5 + (cement_income + wall_income + House_income + Estate_income + City_income + voivodeship_income + Country_income + Continent_income + Planet_income + system_income + Galaxy_income)*0.15) * clickin_mulitplayer ;
    element_bricks.innerText = bricks;

    let animation_refresh = setInterval(() => {
        document.getElementById("big_brick").classList.remove("active");
        document.getElementById("aura_area").classList.remove("active");
        clearInterval(animation_refresh);
    }, 200);  
}