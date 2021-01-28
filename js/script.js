var app = new Vue({
  el: '#root',
  data: {
    // url immagine
    logo: 'img/logo.png',
    // placeholder input
    placeholder: 'Aggiungi Elemento',
    // array elementi
    lista: [
      'Elemento 1',
      'Elemento 2',
      'Elemento 3',
    ],
    nuovoElemento: '',
  },
  methods: {
    aggiungiElemento(){
      this.lista.push(this.nuovoElemento);
      this.nuovoElemento = '';
    }
  }


})
