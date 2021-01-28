var app = new Vue({
  el: '#root',
  data: {
    // url immagine
    logo: {
      src:'img/logo.png',
      alt: 'logo',
    },
    // classe i
    iClass: {

    },
    // placeholder input
    placeholder: 'Aggiungi Elemento',
    // array elementi
    lista: [
      'Elemento 1',
      'Elemento 2',
      'Elemento 3',
    ],
    // elemento inserito
    nuovoElemento: '',
  },
  methods: {
    // se l' utente ha scritto qualcosa, lo aggiungo all' array
    aggiungiElemento(){
      if(this.nuovoElemento !== ''){
      this.lista.push(this.nuovoElemento);
      // pulisco input
      this.nuovoElemento = '';
     }
    },
    /*funzione elimina con argomento index che filtra gli elementi di un array
    e restituisce in lista solo gli elementi che hanno indice diverso dall'
    elemento cliccato*/
    eliminaElemento(index){
      this.lista = this.lista.filter((elem, index1) => {
      return index !== index1;
      })
    },
  }
})
Vue.config.devtools = true;
