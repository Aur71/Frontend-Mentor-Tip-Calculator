const inputs = document.querySelectorAll("input");
const btns = document.querySelectorAll(".grid-btn")
const h2 = document.querySelectorAll("h2");

btns.forEach(btn => {
    btn.onclick = () => {
        btns.forEach(btn => {
            btn.classList.remove("btn-active");
        })
        btn.classList.add("btn-active")
    }
})