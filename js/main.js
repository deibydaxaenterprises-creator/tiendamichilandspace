// Michiland Space
const DISCORD_ADMIN = "dazagroupglobal";
const DISCORD_INVITE = "https://discord.gg/DNbKMrwn";

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

function getDiscordLink(name, price) {
    const msg = `Hola @${DISCORD_ADMIN}! Quiero comprar: **${name}**
Precio: ${price}

Métodos de pago:

🌍 Internacional (México, Argentina, Venezuela y otros):
• PayPal
• Binance

🇨🇴 Colombia:
• Llave Bre-B
• Bancolombia

¿Me ayudas con el pago?`;

    // Copia el mensaje al portapapeles (silencioso, sin alerta)
    try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(msg);
        }
    } catch (e) {}

    // Abre el servidor de Discord
    return DISCORD_INVITE;
}
