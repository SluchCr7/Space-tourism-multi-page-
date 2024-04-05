let Bolts = document.querySelectorAll(".Bolt");

Bolts.forEach((Bolt) => {
    Bolt.addEventListener("click", (e) => {
        Bolts.forEach((Bolt) => {
            Bolt.classList.remove("active");
        })
        e.currentTarget.classList.add("active");
    })
})

let btnOpenMenu = document.getElementById("btnOpenMenu")

btnOpenMenu.addEventListener("click", () => {
    document.getElementById("menu").classList.remove("noneDisplay")
})

document.getElementById("btnClose").addEventListener("click", () => {
    document.getElementById("menu").classList.add("noneDisplay")
})