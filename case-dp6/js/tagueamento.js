// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.
<!-- Google Analytics -->
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-12345-6', 'none');
ga('send', {
  hitType: 'pageview',
  page: '/index.html'
});
ga('send', {
  hitType: 'pageview',
  page: '/analise.html'
});
ga('send', {
  hitType: 'pageview',
  page: '/sobre.html'
});
var captureOutboundLink = function(url) {
   ga('send', 'event', 'outbound', 'click', url, {
     'transport': 'beacon',
     'hitCallback': function(){document.location = url;}
   });
}
<a href="https://www.dp6.com.br/contato/" onclick="captureOutboundLink('https://www.dp6.com.br/contato/'); return false;">entre_em_contato</a>
<a href="http://autos.dp6.com.br/autos_revista_vfinal.pdf" onclick="captureOutboundLink('http://autos.dp6.com.br/autos_revista_vfinal.pdf'); return false;">download_pdf</a>
ga('send', {
  hitType: 'event',
  eventCategory: 'analise',
  eventAction: 'ver_mais',
  eventLabel: 'Lorem'
});
ga('send', {
  hitType: 'event',
  eventCategory: 'analise',
  eventAction: 'ver_mais',
  eventLabel: 'Ipsum'
});
ga('send', {
  hitType: 'event',
  eventCategory: 'analise',
  eventAction: 'ver_mais',
  eventLabel: 'Dolor'
});
ga('send', {
  hitType: 'event',
  eventCategory: 'contato”',
  eventAction: 'nome',
  eventLabel: 'preencheu'
});
ga('send', {
  hitType: 'event',
  eventCategory: 'contato”',
  eventAction: 'email',
  eventLabel: 'preencheu'
});
ga('send', {
  hitType: 'event',
  eventCategory: 'contato”',
  eventAction: 'telefone',
  eventLabel: 'preencheu'
});
ga('send', {
  hitType: 'event',
  eventCategory: 'contato',
  eventAction: 'enviado',
  eventLabel: 'enviado'
});
</script>
<!-- End Google Analytics -->