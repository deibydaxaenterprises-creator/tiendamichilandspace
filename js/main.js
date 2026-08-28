// Michiland Space
document.addEventListener("DOMContentLoaded", () => {
    const c = document.querySelector(".particles");
    if (!c) return;
    for (let i = 0; i < 30; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        p.style.left = Math.random()*100 + "%";
        p.style.width = p.style.height = (Math.random()*3+1) + "px";
        p.style.animationDuration = (Math.random()*10+8) + "s";
        p.style.animationDelay = (Math.random()*8) + "s";
        p.style.opacity = Math.random()*0.4+0.15;
        c.appendChild(p);
    }
});
