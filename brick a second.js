let interval1 = setInterval(() => {
    brick_a_second = cement_income + wall_income + House_income + Estate_income + City_income + voivodeship_income + Country_income + Continent_income + Planet_income* + system_income*system_multiplayer + Galaxy_income;
    document.getElementById("brick_a_second").innerText = formatNumber((cement_income + wall_income + House_income + Estate_income + City_income + voivodeship_income + Country_income + Continent_income + Planet_income* + system_income*system_multiplayer + Galaxy_income), {useOrderSuffix: true, decimals: 3}) + "/s";
}, 100);