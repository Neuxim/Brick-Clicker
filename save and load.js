document.getElementById("save").onclick = () => {
    save(bricks)
};

document.getElementById("load").onclick = () => {
    load()
};

function save() {
    alert("Saving...")
    localStorage.setItem('clicks', JSON.stringify(clicks))
    localStorage.setItem('total', JSON.stringify(total))
    localStorage.setItem('buildings', JSON.stringify(buildings))
    localStorage.setItem('time_played', JSON.stringify(time_played))


    localStorage.setItem('brick', JSON.stringify(bricks));
    localStorage.setItem('cement', JSON.stringify(cement));
    localStorage.setItem('walls', JSON.stringify(walls));
    localStorage.setItem('House', JSON.stringify(House));
    localStorage.setItem('Estate', JSON.stringify(Estate));
    localStorage.setItem('City', JSON.stringify(City));
    localStorage.setItem('voivodeship', JSON.stringify(voivodeship));
    localStorage.setItem('Country', JSON.stringify(Country));
    localStorage.setItem('Continent', JSON.stringify(Continent));
    localStorage.setItem('Planet', JSON.stringify(Planet));
    localStorage.setItem('system', JSON.stringify(system));
    localStorage.setItem('Galaxy', JSON.stringify(Galaxy));
    alert("Saved!")
}

function load() {
    alert("Loding...")
    clicks = JSON.parse(localStorage.getItem('clicks'));
    total = JSON.parse(localStorage.getItem('total'));
    buildings = JSON.parse(localStorage.getItem('buildings'));
    time_played = JSON.parse(localStorage.getItem('time_played'));


    bricks = JSON.parse(localStorage.getItem('brick'));
    cement = JSON.parse(localStorage.getItem('cement'));
    walls = JSON.parse(localStorage.getItem('walls'));
    House = JSON.parse(localStorage.getItem('House'));
    Estate = JSON.parse(localStorage.getItem('Estate'));
    City = JSON.parse(localStorage.getItem('City'));
    voivodeship = JSON.parse(localStorage.getItem('voivodeship'));
    Country = JSON.parse(localStorage.getItem('Country'));
    Continent = JSON.parse(localStorage.getItem('Continent'));
    Planet = JSON.parse(localStorage.getItem('Planet'));
    system = JSON.parse(localStorage.getItem('system'));
    Galaxy = JSON.parse(localStorage.getItem('Galaxy'));
    alert("Loaded")
}