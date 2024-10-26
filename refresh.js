let income = setInterval(() => {
    bricks = bricks + (cement_income);
    bricks = bricks + (wall_income);
    bricks = bricks + (House_income);
    bricks = bricks + (Estate_income);
    bricks = bricks + (City_income);
    bricks = bricks + (voivodeship_income);
    bricks = bricks + (Continent_income);
    bricks = bricks + (Planet_income);
    bricks = bricks + (system_income);
    bricks = bricks + (Galaxy_income);
    document.getElementById("bricks").innerText = bricks;

    total += cement_income + wall_income + House_income + Estate_income + City_income + wall_income + Country_income + system_income + Galaxy_income;
    time_played += 1;
   }, 1000);


let refresh = setInterval(() => {
    document.getElementById("clicks").innerText = clicks;
    document.getElementById("total").innerText = Math.round(total) + "   (around: " + formatNumber(total, {useOrderSuffix: true, decimals: 1}) + ")";
    document.getElementById("time_played").innerText = Math.round(time_played) + "s   (around: " + formatNumber(time_played/3600, {useOrderSuffix: true, decimals: 2}) + " Hours)";



    document.getElementById("cements").innerText = cement;
    cement_income = (cement*0.1)*cement_multiplayer;
    document.getElementById("walls").innerText = walls;
    wall_income = (walls*1)*walls_multiplayer;
    document.getElementById("Houses").innerText = House;
    House_income = (House*8)*House_multiplayer;
    document.getElementById("Estates").innerText = Estate;
    Estate_income = (Estate*47)*Estate_multiplayer;
    document.getElementById("Citys").innerText = City;
    City_income = (City*500)*City_multiplayer;
    document.getElementById("voivodeships").innerText = voivodeship;
    voivodeship_income = (voivodeship*4000)*voivodeship_multiplayer;
    document.getElementById("Countrys").innerText = Country;
    Country_income = (Country*35000)*Country_multiplayer;
    document.getElementById("Continents").innerText = Continent;
    Continent_income = (Continent*160000)*Continent_muliplayer;
    document.getElementById("Planets").innerText = Planet;
    Planet_income  = (Planet*30000000)*Planet_mulitiplayer;
    document.getElementById("systems").innerText = system;
    system_income = (system*1020000000)*system_multiplayer;;
    document.getElementById("Galaxys").innerText = Galaxy;
    Galaxy_income = (Galaxy*115000000000)*Galaxy_multiplayer;

    all_income = cement_income + wall_income + House_income + Estate_income + City_income + voivodeship_income + Country_income + Continent_income + Planet_income + system_income + Galaxy_income;
    document.getElementById("cement").innerText = "cement - generates " +formatNumber(0.1*cement_multiplayer, {useOrderSuffix: true, decimals: 1})+ " bricks per second and costs " + formatNumber(cement_cost, {useOrderSuffix: true, decimals: 2}) + " accounts for " + Math.round(cement_income/all_income*100) + "% of production";
    document.getElementById("wall").innerText = "Wall - generates " +formatNumber(1*walls_multiplayer, {useOrderSuffix: true, decimals: 1})+ " bricks per second and costs " + formatNumber(wall_cost, {useOrderSuffix: true, decimals: 2}) + " accounts for " + Math.round(wall_income/all_income*100) + "% of production";
    document.getElementById("House").innerText = "House - generates "+formatNumber(8*House_multiplayer, {useOrderSuffix: true, decimals: 1})+" bricks per second and costs " + formatNumber(House_cost, {useOrderSuffix: true, decimals: 2}) + " accounts for " + Math.round(House_income/all_income*100) + "% of production";
    document.getElementById("Estate").innerText = "Estate - generates "+formatNumber(47*Estate_multiplayer, {useOrderSuffix: true, decimals: 1})+" bricks per second and costs " + formatNumber(Estate_cost, {useOrderSuffix: true, decimals: 2}) + " accounts for " + Math.round(Estate_income/all_income*100) + "% of production";
    document.getElementById("City").innerText = "City - generates "+formatNumber(500*City_multiplayer, {useOrderSuffix: true, decimals: 1})+" bricks per second and costs " + formatNumber(City_cost, {useOrderSuffix: true, decimals: 2}) + " accounts for " + Math.round(City_income/all_income*100) + "% of production";
    document.getElementById("voivodeship").innerText = "Voivodeship - generates "+formatNumber(4000*voivodeship_multiplayer, {useOrderSuffix: true, decimals: 1})+" bricks per second and costs " + formatNumber(voivodeship_cost, {useOrderSuffix: true, decimals: 2}) + " accounts for " + Math.round(voivodeship_income/all_income*100) + "% of production";
    document.getElementById("Country").innerText = "Country - generates"+formatNumber(35000*Country_multiplayer, {useOrderSuffix: true, decimals: 1})+" bricks per second and costs " + formatNumber(Country_cost, {useOrderSuffix: true, decimals: 2}) + " accounts for " + Math.round(Country_income/all_income*100) + "% of production";
    document.getElementById("Continent").innerText = "Continent - generates"+ formatNumber(160000*Continent_muliplayer, {useOrderSuffix: true, decimals: 1})+ "bricks per second and costs " + formatNumber(Continent_cost, {useOrderSuffix: true, decimals: 2}) + " accounts for " + Math.round(Continent_income/all_income*100) + "% of production";
    document.getElementById("Planet").innerText = "Planet - generates "+formatNumber(30000000*Planet_mulitiplayer, {useOrderSuffix: true, decimals: 1})+" bricks per second and costs " + formatNumber(Planet_cost, {useOrderSuffix: true, decimals: 2}) + " accounts for " + Math.round(Planet_income/all_income*100) + "% of production";
    document.getElementById("system").innerText = "Solar system - generates "+formatNumber(1020000000*system_multiplayer, {useOrderSuffix: true, decimals: 1})+" bricks per second and costs " + formatNumber(system_cost, {useOrderSuffix: true, decimals: 2}) + " accounts for " + Math.round(system_income/all_income*100) + "% of production";
    document.getElementById("Galaxy").innerText = "Galaxy - generates "+formatNumber(115000000000*Galaxy_multiplayer, {useOrderSuffix: true, decimals: 1})+" bricks per second and costs " + formatNumber(Galaxy_cost, {useOrderSuffix: true, decimals: 2}) + " accounts for " + Math.round(Galaxy_income/all_income*100) + "% of production";
   }, 5);

   function opacitycheck (x, y) { 
    document.getElementById(x).style.opacity =y;
    }

   let checkopacity = setInterval(() => {

    if (cement_cost - 0.01 < bricks) {
        opacitycheck("cement", 1);} else 
        {opacitycheck("cement", 0.25);}
    
    if (wall_cost-0.01 < bricks) {
        opacitycheck("wall", 1);} else 
        {opacitycheck("wall", 0.25);}

    if (House_cost-0.01 < bricks) {
        opacitycheck("House", 1);} else 
        {opacitycheck("House", 0.25);}
    
    if (Estate_cost-0.01 < bricks) {
        opacitycheck("Estate", 1);} else 
        {opacitycheck("Estate", 0.25);}

    if (City_cost-0.01 < bricks) {
        opacitycheck("City", 1);} else 
        {opacitycheck("City", 0.25);}
    
    if (voivodeship_cost-0.01 < bricks) {
        opacitycheck("voivodeship", 1);} else 
        {opacitycheck("voivodeship", 0.25);}

    if (Country_cost-0.01 < bricks) {
        opacitycheck("Country", 1);} else 
        {opacitycheck("Country", 0.25);}
    
    if (Continent_cost-0.01 < bricks) {
        opacitycheck("Continent", 1);} else 
        {opacitycheck("Continent", 0.25);}

    if (Planet_cost-0.01 < bricks) {
        opacitycheck("Planet", 1);} else 
        {opacitycheck("Planet", 0.25);}

    if (system_cost-0.01 < bricks) {
        opacitycheck("system", 1);} else 
        {opacitycheck("system", 0.25);}

    if (Galaxy_cost-0.01 < bricks) {
        opacitycheck("Galaxy", 1);} else 
        {opacitycheck("Galaxy", 0.25);}


        //ubgrades now:

    if (clickbrick < 1.1){
        if (clickingu1_cost-0.01 < bricks) {
            opacitycheck("clicking_2x_1", 1);} else
            {opacitycheck("clicking_2x_1", 0.25);
        }
    }

    if (clickbrick < 2.1){
        if (clickingu2_cost-0.01 < bricks) {
            opacitycheck("clicking_2x_2", 1);} else
            {opacitycheck("clicking_2x_2", 0.25);
        }
    }

    if (clickbrick < 4.1){
        if (clickingu3_cost-0.01 < bricks) {
            opacitycheck("clicking_2x_3", 1);} else
            {opacitycheck("clicking_2x_3", 0.25);
        }
    }

    if (clickbrick < 8.1){
        if (clickingu4_cost-0.01 < bricks) {
            opacitycheck("clicking_2x_4", 1);} else
            {opacitycheck("clicking_2x_4", 0.25);
        }
    }

    if (clickbrick < 16.1){
        if (clickingu5_cost-0.01 < bricks) {
            opacitycheck("clicking_2x_5", 1);} else
            {opacitycheck("clicking_2x_5", 0.25);
        }
    }

    if (clickbrick < 64.1){
        if (clickingu6_cost-0.01 < bricks) {
            opacitycheck("clicking_2x_6", 1);} else
            {opacitycheck("clicking_2x_6", 0.25);
        }
    }
        //aura


        if (clickin_mulitplayer < 1.01){
        if (aurau1_cost-0.01 < bricks) {
            opacitycheck("aura_2x_1", 1);} else
            {opacitycheck("aura_2x_1", 0.25);
        }
    }

    if (clickin_mulitplayer < 1.02){
        if (aurau2_cost-0.01 < bricks) {
            opacitycheck("aura_2x_2", 1);} else
            {opacitycheck("aura_2x_2", 0.25);
        }
    }

    if (clickin_mulitplayer < 1.03){
        if (aurau3_cost-0.01 < bricks) {
            opacitycheck("aura_2x_3", 1);} else
            {opacitycheck("aura_2x_3", 0.25);
        }
    }

    if (clickin_mulitplayer < 1.05){
        if (aurau4_cost-0.01 < bricks) {
            opacitycheck("aura_2x_4", 1);} else
            {opacitycheck("aura_2x_4", 0.25);
        }
    }

    if (clickin_mulitplayer < 1.07){
        if (aurau5_cost-0.01 < bricks) {
            opacitycheck("aura_2x_5", 1);} else
            {opacitycheck("aura_2x_5", 0.25);
        }
    }

    if (clickin_mulitplayer < 1.1){
        if (aurau6_cost-0.01 < bricks) {
            opacitycheck("aura_2x_6", 1);} else
            {opacitycheck("aura_2x_6", 0.25);
        }
    }

    //cement

    if (cement_multiplayer < 1.1){
        if (cementu1_cost-0.01 < bricks) {
            opacitycheck("cement_2x_1", 1);} else
            {opacitycheck("cement_2x_1", 0.25);
        }
    }

    if (cement_multiplayer < 2.1){
        if (cementu2_cost-0.01 < bricks) {
            opacitycheck("cement_2x_2", 1);} else
            {opacitycheck("cement_2x_2", 0.25);
        }
    }

    if (cement_multiplayer < 4.1){
        if (cementu3_cost-0.01 < bricks) {
            opacitycheck("cement_2x_3", 1);} else
            {opacitycheck("cement_2x_3", 0.25);
        }
    }

    if (cement_multiplayer < 8.1){
        if (cementu4_cost-0.01 < bricks) {
            opacitycheck("cement_2x_4", 1);} else
            {opacitycheck("cement_2x_4", 0.25);
        }
    }

    if (cement_multiplayer < 16.1){
        if (cementu5_cost-0.01 < bricks) {
            opacitycheck("cement_2x_5", 1);} else
            {opacitycheck("cement_2x_5", 0.25);
        }
    }

    if (cement_multiplayer < 64.1){
        if (cementu6_cost-0.01 < bricks) {
            opacitycheck("cement_2x_6", 1);} else
            {opacitycheck("cement_2x_6", 0.25);
        }
    }

    //walls

    if (walls_multiplayer < 1.1){
        if (wallu1_cost-0.01 < bricks) {
            opacitycheck("wall_2x_1", 1);} else
            {opacitycheck("wall_2x_1", 0.25);
        }
    }

    if (walls_multiplayer < 2.1){
        if (wallu2_cost-0.01 < bricks) {
            opacitycheck("wall_2x_2", 1);} else
            {opacitycheck("wall_2x_2", 0.25);
        }
    }

    if (walls_multiplayer < 4.1){
        if (wallu3_cost-0.01 < bricks) {
            opacitycheck("wall_2x_3", 1);} else
            {opacitycheck("wall_2x_3", 0.25);
        }
    }

    if (walls_multiplayer < 8.1){
        if (wallu4_cost-0.01 < bricks) {
            opacitycheck("wall_2x_4", 1);} else
            {opacitycheck("wall_2x_4", 0.25);
        }
    }

    if (walls_multiplayer < 16.1){
        if (wallu5_cost-0.01 < bricks) {
            opacitycheck("wall_2x_5", 1);} else
            {opacitycheck("wall_2x_5", 0.25);
        }
    }

    if (walls_multiplayer < 32.1){
        if (wallu6_cost-0.01 < bricks) {
            opacitycheck("wall_2x_6", 1);} else
            {opacitycheck("wall_2x_6", 0.25);
        }
    }

    //House

    if (House_multiplayer < 1.1){
        if (Houseu1_cost-0.01 < bricks) {
            opacitycheck("House_2x_1", 1);} else
            {opacitycheck("House_2x_1", 0.25);
        }
    }

    if (House_multiplayer < 2.1){
        if (Houseu2_cost-0.01 < bricks) {
            opacitycheck("House_2x_2", 1);} else
            {opacitycheck("House_2x_2", 0.25);
        }
    }

    if (House_multiplayer < 4.1){
        if (Houseu3_cost-0.01 < bricks) {
            opacitycheck("House_2x_3", 1);} else
            {opacitycheck("House_2x_3", 0.25);
        }
    }

    if (House_multiplayer < 8.1){
        if (Houseu4_cost-0.01 < bricks) {
            opacitycheck("House_2x_4", 1);} else
            {opacitycheck("House_2x_4", 0.25);
        }
    }

    if (House_multiplayer < 16.1){
        if (Houseu5_cost-0.01 < bricks) {
            opacitycheck("House_2x_5", 1);} else
            {opacitycheck("House_2x_5", 0.25);
        }
    }

    if (House_multiplayer < 32.1){
        if (Houseu6_cost-0.01 < bricks) {
            opacitycheck("House_2x_6", 1);} else
            {opacitycheck("House_2x_6", 0.25);
        }
    }

    //Estate

    if (Estate_multiplayer < 1.1){
        if (Estateu1_cost-0.01 < bricks) {
            opacitycheck("Estate_2x_1", 1);} else
            {opacitycheck("Estate_2x_1", 0.25);
        }
    }

    if (Estate_multiplayer < 2.1){
        if (Estateu2_cost-0.01 < bricks) {
            opacitycheck("Estate_2x_2", 1);} else
            {opacitycheck("Estate_2x_2", 0.25);
        }
    }

    if (Estate_multiplayer < 4.1){
        if (Estateu3_cost-0.01 < bricks) {
            opacitycheck("Estate_2x_3", 1);} else
            {opacitycheck("Estate_2x_3", 0.25);
        }
    }

    if (Estate_multiplayer < 8.1){
        if (Estateu4_cost-0.01 < bricks) {
            opacitycheck("Estate_2x_4", 1);} else
            {opacitycheck("Estate_2x_4", 0.25);
        }
    }

    if (Estate_multiplayer < 16.1){
        if (Estateu5_cost-0.01 < bricks) {
            opacitycheck("Estate_2x_5", 1);} else
            {opacitycheck("Estate_2x_5", 0.25);
        }
    }

    if (Estate_multiplayer < 32.1){
        if (Estateu6_cost-0.01 < bricks) {
            opacitycheck("Estate_2x_6", 1);} else
            {opacitycheck("Estate_2x_6", 0.25);
        }
    }

    //City

    if (City_multiplayer < 1.1){
        if (Cityu1_cost-0.01 < bricks) {
            opacitycheck("City_2x_1", 1);} else
            {opacitycheck("City_2x_1", 0.25);
        }
    }

    if (City_multiplayer < 2.1){
        if (Cityu2_cost-0.01 < bricks) {
            opacitycheck("City_2x_2", 1);} else
            {opacitycheck("City_2x_2", 0.25);
        }
    }

    if (City_multiplayer < 4.1){
        if (Cityu3_cost-0.01 < bricks) {
            opacitycheck("City_2x_3", 1);} else
            {opacitycheck("City_2x_3", 0.25);
        }
    }

    if (City_multiplayer < 8.1){
        if (Cityu4_cost-0.01 < bricks) {
            opacitycheck("City_2x_4", 1);} else
            {opacitycheck("City_2x_4", 0.25);
        }
    }

    if (City_multiplayer < 16.1){
        if (Cityu5_cost-0.01 < bricks) {
            opacitycheck("City_2x_5", 1);} else
            {opacitycheck("City_2x_5", 0.25);
        }
    }

    if (City_multiplayer < 32.1){
        if (Cityu6_cost-0.01 < bricks) {
            opacitycheck("City_2x_6", 1);} else
            {opacitycheck("City_2x_6", 0.25);
        }
    }

    //wojewodztwa

    if (voivodeship_multiplayer < 1.1){
        if (voivodeshipu1_cost-0.01 < bricks) {
            opacitycheck("voivodeship_2x_1", 1);} else
            {opacitycheck("voivodeship_2x_1", 0.25);
        }
    }

    if (voivodeship_multiplayer < 2.1){
        if (voivodeshipu2_cost-0.01 < bricks) {
            opacitycheck("voivodeship_2x_2", 1);} else
            {opacitycheck("voivodeship_2x_2", 0.25);
        }
    }

    if (voivodeship_multiplayer < 4.1){
        if (voivodeshipu3_cost-0.01 < bricks) {
            opacitycheck("voivodeship_2x_3", 1);} else
            {opacitycheck("voivodeship_2x_3", 0.25);
        }
    }

    if (voivodeship_multiplayer < 8.1){
        if (voivodeshipu4_cost-0.01 < bricks) {
            opacitycheck("voivodeship_2x_4", 1);} else
            {opacitycheck("voivodeship_2x_4", 0.25);
        }
    }

    if (voivodeship_multiplayer < 16.1){
        if (voivodeshipu5_cost-0.01 < bricks) {
            opacitycheck("voivodeship_2x_5", 1);} else
            {opacitycheck("voivodeship_2x_5", 0.25);
        }
    }

    if (voivodeship_multiplayer < 32.1){
        if (voivodeshipu6_cost-0.01 < bricks) {
            opacitycheck("voivodeship_2x_6", 1);} else
            {opacitycheck("voivodeship_2x_6", 0.25);
        }
    }

    //Country

    if (Country_multiplayer < 1.1){
        if (Countryu1_cost-0.01 < bricks) {
            opacitycheck("Country_2x_1", 1);} else
            {opacitycheck("Country_2x_1", 0.25);
        }
    }

    if (Country_multiplayer < 2.1){
        if (Countryu2_cost-0.01 < bricks) {
            opacitycheck("Country_2x_2", 1);} else
            {opacitycheck("Country_2x_2", 0.25);
        }
    }

    if (Country_multiplayer < 4.1){
        if (Countryu3_cost-0.01 < bricks) {
            opacitycheck("Country_2x_3", 1);} else
            {opacitycheck("Country_2x_3", 0.25);
        }
    }

    if (Country_multiplayer < 8.1){
        if (Countryu4_cost-0.01 < bricks) {
            opacitycheck("Country_2x_4", 1);} else
            {opacitycheck("Country_2x_4", 0.25);
        }
    }

    if (Country_multiplayer < 16.1){
        if (Countryu5_cost-0.01 < bricks) {
            opacitycheck("Country_2x_5", 1);} else
            {opacitycheck("Country_2x_5", 0.25);
        }
    }

    if (Country_multiplayer < 32.1){
        if (Countryu6_cost-0.01 < bricks) {
            opacitycheck("Country_2x_6", 1);} else
            {opacitycheck("Country_2x_6", 0.25);
        }
    }

   //Continent

   if (Continent_muliplayer < 1.1){
    if (kontynetu1_cost-0.01 < bricks) {
        opacitycheck("Continent_2x_1", 1);} else
        {opacitycheck("Continent_2x_1", 0.25);
    }
}

if (Continent_muliplayer < 2.1){
    if (kontynetu2_cost-0.01 < bricks) {
        opacitycheck("Continent_2x_2", 1);} else
        {opacitycheck("Continent_2x_2", 0.25);
    }
}

if (Continent_muliplayer < 4.1){
    if (kontynetu3_cost-0.01 < bricks) {
        opacitycheck("Continent_2x_3", 1);} else
        {opacitycheck("Continent_2x_3", 0.25);
    }
}

if (Continent_muliplayer < 8.1){
    if (kontynetu4_cost-0.01 < bricks) {
        opacitycheck("Continent_2x_4", 1);} else
        {opacitycheck("Continent_2x_4", 0.25);
    }
}

if (Continent_muliplayer < 16.1){
    if (kontynetu5_cost-0.01 < bricks) {
        opacitycheck("Continent_2x_5", 1);} else
        {opacitycheck("Continent_2x_5", 0.25);
    }
}

if (Continent_muliplayer < 32.1){
    if (kontynetu6_cost-0.01 < bricks) {
        opacitycheck("Continent_2x_6", 1);} else
        {opacitycheck("Continent_2x_6", 0.25);
    }
}

//Planet

if (Planet_mulitiplayer < 1.1){
    if (Planetu1_cost-0.01 < bricks) {
        opacitycheck("Planet_2x_1", 1);} else
        {opacitycheck("Planet_2x_1", 0.25);
    }
}

if (Planet_mulitiplayer < 2.1){
    if (Planetu2_cost-0.01 < bricks) {
        opacitycheck("Planet_2x_2", 1);} else
        {opacitycheck("Planet_2x_2", 0.25);
    }
}

if (Planet_mulitiplayer < 4.1){
    if (Planetu3_cost-0.01 < bricks) {
        opacitycheck("Planet_2x_3", 1);} else
        {opacitycheck("Planet_2x_3", 0.25);
    }
}

if (Planet_mulitiplayer < 8.1){
    if (Planetu4_cost-0.01 < bricks) {
        opacitycheck("Planet_2x_4", 1);} else
        {opacitycheck("Planet_2x_4", 0.25);
    }
}

if (Planet_mulitiplayer < 16.1){
    if (Planetu5_cost-0.01 < bricks) {
        opacitycheck("Planet_2x_5", 1);} else
        {opacitycheck("Planet_2x_5", 0.25);
    }
}

if (Planet_mulitiplayer < 32.1){
    if (Planetu6_cost-0.01 < bricks) {
        opacitycheck("Planet_2x_6", 1);} else
        {opacitycheck("Planet_2x_6", 0.25);
    }
}

//system

if (system_multiplayer < 1.1){
    if (systemu1_cost-0.01 < bricks) {
        opacitycheck("system_2x_1", 1);} else
        {opacitycheck("system_2x_1", 0.25);
    }
}

if (system_multiplayer < 2.1){
    if (systemu2_cost-0.01 < bricks) {
        opacitycheck("system_2x_2", 1);} else
        {opacitycheck("system_2x_2", 0.25);
    }
}

if (system_multiplayer < 4.1){
    if (systemu3_cost-0.01 < bricks) {
        opacitycheck("system_2x_3", 1);} else
        {opacitycheck("system_2x_3", 0.25);
    }
}

if (system_multiplayer < 8.1){
    if (systemu4_cost-0.01 < bricks) {
        opacitycheck("system_2x_4", 1);} else
        {opacitycheck("system_2x_4", 0.25);
    }
}

if (system_multiplayer < 16.1){
    if (systemu5_cost-0.01 < bricks) {
        opacitycheck("system_2x_5", 1);} else
        {opacitycheck("system_2x_5", 0.25);
    }
}

if (system_multiplayer < 32.1){
    if (systemu6_cost-0.01 < bricks) {
        opacitycheck("system_2x_6", 1);} else
        {opacitycheck("system_2x_6", 0.25);
    }
}

//Galaxy

if (Galaxy_multiplayer < 1.1){
    if (Galaxyu1_cost-0.01 < bricks) {
        opacitycheck("Galaxy_2x_1", 1);} else
        {opacitycheck("Galaxy_2x_1", 0.25);
    }
}

if (Galaxy_multiplayer < 2.1){
    if (Galaxyu2_cost-0.01 < bricks) {
        opacitycheck("Galaxy_2x_2", 1);} else
        {opacitycheck("Galaxy_2x_2", 0.25);
    }
}

if (Galaxy_multiplayer < 4.1){
    if (Galaxyu3_cost-0.01 < bricks) {
        opacitycheck("Galaxy_2x_3", 1);} else
        {opacitycheck("Galaxy_2x_3", 0.25);
    }
}

if (Galaxy_multiplayer < 8.1){
    if (Galaxyu4_cost-0.01 < bricks) {
        opacitycheck("Galaxy_2x_4", 1);} else
        {opacitycheck("Galaxy_2x_4", 0.25);
    }
}

if (Galaxy_multiplayer < 16.1){
    if (Galaxyu5_cost-0.01 < bricks) {
        opacitycheck("Galaxy_2x_5", 1);} else
        {opacitycheck("Galaxy_2x_5", 0.25);
    }
}

if (Galaxy_multiplayer < 32.1){
    if (Galaxyu6_cost-0.01 < bricks) {
        opacitycheck("Galaxy_2x_6", 1);} else
        {opacitycheck("Galaxy_2x_6", 0.25);
    }
}


}, 10)