var bricks = 0;
        var brick_a_second = 0;
        var buildings = 0;
        var cement = 0;
        var cement_cost = 10;
        var cement_income = 0;
        var walls = 0;
        var wall_cost = 50;
        var wall_income = 0;
        var House = 0;
        var House_cost = 750;
        var House_income = 0;
        var Estate = 0;
        var Estate_cost = 9375;
        var Estate_income = 0;
        var City = 0;
        var City_cost = 70320;
        var City_income = 0;
        var voivodeship = 0;
        var voivodeship_cost = 351570;
        var voivodeship_income = 0;
        var Country = 0;
        var Country_cost = 5273500;
        var Country_income = 0;
        var Continent = 0;
        var Continent_cost = 65918000;
        var Continent_income = 0;
        var Planet = 0;
        var Planet_cost = 494385000;
        var Planet_income = 0;
        var system = 0;
        var system_cost = 4943848000;
        var system_income = 0;
        var Galaxy = 0;
        var Galaxy_cost = 150000000000;
        var Galaxy_income = 0;

        var all_income = 0;

        var clickin_mulitplayer = 1;
        var cement_multiplayer = 1;
        var walls_multiplayer = 1;
        var House_multiplayer = 1;
        var Estate_multiplayer = 1;
        var City_multiplayer = 1;
        var voivodeship_multiplayer = 1;
        var Country_multiplayer = 1;
        var Continent_muliplayer = 1;
        var Planet_mulitiplayer = 1;
        var system_multiplayer = 1;
        var Galaxy_multiplayer = 1;

        var clickbrick = 1;

        var clicks = 0;
        var total = 0;

        var time_played = 0;

        const element_bricks = document.getElementById("bricks");

       

        document.getElementById("cement").innerText = "Cement - generates " + 0.1*cement_multiplayer + " bricks per second and costs " + formatNumber(cement_cost, {useOrderSuffix: true, decimals: 2});
        document.getElementById("wall").innerText = "Wall - generates " +1*walls_multiplayer + " bricks per second and costs " + formatNumber(wall_cost, {useOrderSuffix: true, decimals: 2});
        document.getElementById("House").innerText = "House - generates "+8*House_multiplayer+" bricks per second and costs " + formatNumber(House_cost, {useOrderSuffix: true, decimals: 2});
        document.getElementById("Estate").innerText = "Estate - generates "+47*Estate_multiplayer+" bricks per second and costs " + formatNumber(Estate_cost, {useOrderSuffix: true, decimals: 2});
        document.getElementById("City").innerText = "City - generates "+500*City_multiplayer+" bricks per second and costs " + formatNumber(City_cost, {useOrderSuffix: true, decimals: 2});
        document.getElementById("voivodeship").innerText = "Voivodeship - generates "+formatNumber(4000*voivodeship_multiplayer, {useOrderSuffix: true, decimals: 1})+" bricks per second and costs " + formatNumber(voivodeship_cost, {useOrderSuffix: true, decimals: 2});
        document.getElementById("Country").innerText = "Country - generates "+formatNumber(35000*Country_multiplayer, {useOrderSuffix: true, decimals: 1})+" bricks per second and costs " + formatNumber(Country_cost, {useOrderSuffix: true, decimals: 2});
        document.getElementById("Continent").innerText = "Continent - generates "+formatNumber(160000*Continent_muliplayer, {useOrderSuffix: true, decimals: 1})+" bricks per second and costs " + formatNumber(Continent_cost, {useOrderSuffix: true, decimals: 2});
        document.getElementById("Planet").innerText = "Planet - generates "+formatNumber(30000000*Planet_mulitiplayer, {useOrderSuffix: true, decimals: 1})+" bricks per second and costs " + formatNumber(Planet_cost, {useOrderSuffix: true, decimals: 2});
        document.getElementById("system").innerText = "Solar system - generates "+formatNumber(1020000000*system_multiplayer, {useOrderSuffix: true, decimals: 1})+" bricks per second and costs " + formatNumber(system_cost, {useOrderSuffix: true, decimals: 2});
        document.getElementById("Galaxy").innerText = "Galaxy - generates "+formatNumber(115000000000*Galaxy_multiplayer, {useOrderSuffix: true, decimals: 1})+" bricks per second and costs " + formatNumber(Galaxy_cost, {useOrderSuffix: true, decimals: 2});


        document.getElementById("cement").onclick = () => {
            if (bricks >= cement_cost) {
                bricks = bricks - cement_cost;
                cement = cement + 1;
                cement_cost = Math.round(cement_cost * 1.15);
                element_bricks.innerText = bricks;
                document.getElementById("cements").innerText = cement;
                buildings = buildings + 1;
                document.getElementById("cement").innerText = "cement - generates " +formatNumber(0.1*cement_multiplayer, {useOrderSuffix: true, decimals: 1})+ " bricks per second and costs " + formatNumber(cement_cost, {useOrderSuffix: true, decimals: 2}) + "accounts for " + cement_income/all_income*100 + "% of production";
            };
        };

        document.getElementById("wall").onclick = () => {
            if (bricks >= wall_cost) {
                bricks = bricks - wall_cost;
                walls = walls + 1;
                wall_cost = Math.round(wall_cost * 1.15);
                element_bricks.innerText = bricks;
                document.getElementById("walls").innerText = walls;
                buildings = buildings + 1;
                document.getElementById("wall").innerText = "Wall - generates " +formatNumber(1*walls_multiplayer, {useOrderSuffix: true, decimals: 1})+ " bricks per second and costs " + formatNumber(wall_cost, {useOrderSuffix: true, decimals: 2});
            };
        };

        document.getElementById("House").onclick = () => {
            if (bricks >= House_cost) {
                bricks = bricks - House_cost;
                House = House + 1;
                House_cost = Math.round(House_cost * 1.15)
                element_bricks.innerText = bricks;
                document.getElementById("Houses").innerText = House;
                buildings = buildings + 1;
                document.getElementById("House").innerText = "House - generates "+formatNumber(8*House_multiplayer, {useOrderSuffix: true, decimals: 1})+" bricks per second and costs " + formatNumber(House_cost, {useOrderSuffix: true, decimals: 2});
            };
        };

        document.getElementById("Estate").onclick = () => {
            if (bricks >= Estate_cost) {
                bricks = bricks - Estate_cost;
                Estate = Estate + 1;
                Estate_cost = Math.round(Estate_cost * 1.15)
                element_bricks.innerText = bricks;
                document.getElementById("Estates").innerText = Estate;
                buildings = buildings + 1;
                document.getElementById("Estate").innerText = "Estate - generates "+formatNumber(47*Estate_multiplayer, {useOrderSuffix: true, decimals: 1})+" bricks per second and costs " + formatNumber(Estate_cost, {useOrderSuffix: true, decimals: 2});
            };
        };

        document.getElementById("City").onclick = () => {
            if (bricks >= City_cost) {
                bricks = bricks - City_cost;
                City = City + 1;
                City_cost = Math.round(City_cost * 1.15)
                element_bricks.innerText = bricks;
                document.getElementById("Citys").innerText = City;
                buildings = buildings + 1;
                document.getElementById("City").innerText = "City - generates "+formatNumber(500*City_multiplayer, {useOrderSuffix: true, decimals: 1})+" bricks per second and costs " + formatNumber(City_cost, {useOrderSuffix: true, decimals: 2});
            };
        };

        document.getElementById("voivodeship").onclick = () => {
            if (bricks >= voivodeship_cost) {
                bricks = bricks - voivodeship_cost;
                voivodeship = voivodeship + 1;
                voivodeship_cost = Math.round(voivodeship_cost * 1.15)
                element_bricks.innerText = bricks;
                document.getElementById("voivodeships").innerText = voivodeship;
                buildings = buildings + 1;
                document.getElementById("voivodeship").innerText = "Voivodeship - generates "+formatNumber(4000*voivodeship_multiplayer, {useOrderSuffix: true, decimals: 1})+" bricks per second and costs " + formatNumber(voivodeship_cost, {useOrderSuffix: true, decimals: 2});
            };
        };
        
        document.getElementById("Country").onclick = () => {
            if (bricks >= Country_cost) {
                bricks = bricks - Country_cost;
                Country = Country + 1;
                Country_cost = Math.round(Country_cost * 1.15)
                element_bricks.innerText = bricks;
                document.getElementById("Countrys").innerText = Country;
                buildings = buildings + 1;
                document.getElementById("Country").innerText = "Country - generates"+formatNumber(35000*Country_multiplayer, {useOrderSuffix: true, decimals: 1})+" bricks per second and costs " + formatNumber(Country_cost, {useOrderSuffix: true, decimals: 2});
            };
        };

        document.getElementById("Continent").onclick = () => {
            if (bricks >= Continent_cost) {
                bricks = bricks - Continent_cost;
                Continent = Continent + 1;
                Continent_cost = Math.round(Continent_cost * 1.15)
                element_bricks.innerText = bricks;
                document.getElementById("Continents").innerText = Continent;
                buildings = buildings + 1;
                document.getElementById("Continent").innerText = "Continent - generates"+ formatNumber(160000*Continent_muliplayer, {useOrderSuffix: true, decimals: 1})+ "bricks per second and costs " + formatNumber(Continent_cost, {useOrderSuffix: true, decimals: 2});
            };
        };

        document.getElementById("Planet").onclick = () => {
            if (bricks >= Planet_cost) {
                bricks = bricks - Planet_cost;
                Planet = Planet + 1;
                Planet_cost = Math.round(Planet_cost * 1.15)
                element_bricks.innerText = bricks;
                document.getElementById("Planets").innerText = Planet;
                buildings = buildings + 1;
                document.getElementById("Planet").innerText = "Planet - generates "+formatNumber(30000000*Planet_mulitiplayer, {useOrderSuffix: true, decimals: 1})+" bricks per second and costs " + formatNumber(Planet_cost, {useOrderSuffix: true, decimals: 2});
            };
        };

        document.getElementById("system").onclick = () => {
            if (bricks >= system_cost) {
                bricks = bricks - system_cost;
                system = system + 1;
                system_cost = Math.round(system_cost * 1.15)
                element_bricks.innerText = bricks;
                document.getElementById("systems").innerText = system;
                buildings = buildings + 1;
                document.getElementById("system").innerText = "Solar system - generates "+formatNumber(1020000000*system_multiplayer, {useOrderSuffix: true, decimals: 1})+" bricks per second and costs " + formatNumber(system_cost, {useOrderSuffix: true, decimals: 2});
            };
        };

        document.getElementById("Galaxy").onclick = () => {
            if (bricks >= Galaxy_cost) {
                bricks = bricks - Galaxy_cost;
                Galaxy = Galaxy + 1;
                Galaxy_cost = Math.round(Galaxy_cost * 1.15)
                element_bricks.innerText = bricks;
                document.getElementById("Galaxys").innerText = Galaxy;
                buildings = buildings + 1;
                document.getElementById("Galaxy").innerText = "Galaxy - generates "+formatNumber(115000000000*Galaxy_multiplayer, {useOrderSuffix: true, decimals: 1})+" bricks per second and costs " + formatNumber(Galaxy_cost, {useOrderSuffix: true, decimals: 2});
            };
        };