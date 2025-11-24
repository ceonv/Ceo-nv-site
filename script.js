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
