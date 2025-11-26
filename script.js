class BotVendas {
    enviarMensagem(texto, autor = "bot") {
        const chat = document.getElementById("chat");
        const msg = document.createElement("div");
        msg.className = autor === "bot" ? "bot-msg" : "user-msg";
        msg.textContent = texto;
        chat.appendChild(msg);
        chat.scrollTop = chat.scrollHeight;
    }

    iniciar() {
        this.enviarMensagem("Olá! 👋 Sou o assistente automático de vendas.");
        this.enviarMensagem("Posso ajudar a comprar o Ebook *Como Ganhar Dinheiro Online*?");
    }

    responder(texto) {
        texto = texto.toLowerCase();

        if (texto.includes("preço") || texto.includes("custa")) {
            this.enviarMensagem("O Ebook custa **5.000 Kz**.");
            this.enviarMensagem("Pagamento via Multicaixa Express no número: +244 972 898 156.");
            this.enviarMensagem("Após pagar, envia o comprovativo e recebes o Ebook automaticamente.");
            return;
        }

        if (texto.includes("comprar") || texto.includes("ebook")) {
            this.enviarMensagem("Para comprar, paga via MCX: +244 972 898 156.");
            this.enviarMensagem("Depois manda o comprovativo e recebes o Ebook.");
            return;
        }

        if (texto.includes("como funciona") || texto.includes("explica")) {
            this.enviarMensagem("Este Ebook ensina métodos reais para ganhar dinheiro online em Angola, passo a passo.");
            return;
        }

        this.enviarMensagem("Não entendi bem… podes perguntar: preço, comprar, ebook, como funciona.");
    }
}

const bot = new BotVendas();

window.onload = () => bot.iniciar();

function enviar() {
    const input = document.getElementById("mensagem");
    const texto = input.value;

    if (texto.trim() === "") return;

    bot.enviarMensagem(texto, "user");
    bot.responder(texto);
    input.value = "";
}
