// Abre WhatsApp com mensagem pronta
document.querySelectorAll('.btn-outline')[0]?.addEventListener('click', function(e){
  // ensure external link opens
});

// Envia comprovativo (simulação)
document.getElementById('sendProof')?.addEventListener('click', function(){
  var name = document.getElementById('buyerName').value.trim();
  var file = document.getElementById('proofFile').files[0];
  if(!name){ alert('Escreve o teu nome completo.'); return; }
  if(!file){ alert('Anexa o comprovativo do pagamento.'); return; }

  // Simulação: mostrar secção de "thanks" — num site real, envias para backend
  alert('Comprovativo recebido. Iremos validar e enviar o link via WhatsApp.');
  document.getElementById('thanks').style.display = 'block';
  document.getElementById('thanks').scrollIntoView({behavior:'smooth'});
});
<script>
class BotVendas {
    constructor() {
        this.messages = [];
        this.botName = "Assistente ADM";
    }

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
            this.enviarMensagem("Pagamento via **Multicaixa Express** no número: **+244 99 999 9999**."); 
            this.enviarMensagem("Após pagar, envia o comprovativo e recebes o Ebook imediatamente.");
            return;
        }

        if (texto.includes("comprar") || texto.includes("ebook")) {
            this.enviarMensagem("Para comprar, faz o pagamento MCX para: **+244 99 999 9999**.");
            this.enviarMensagem("Depois envia o comprovativo e recebes o Ebook automaticamente.");
            return;
        }

        if (texto.includes("como funciona") || texto.includes("explica")) {
            this.enviarMensagem("O Ebook ensina estratégias reais e práticas para ganhar dinheiro online em Angola.");
            this.enviarMensagem("Inclui aulas passo a passo e métodos testados.");
            return;
        }

        this.enviarMensagem("Não entendi bem, mas posso ajudar! Pergunta: preço, comprar, ebook, ou como funciona?");
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
</script>
