var vue = new Vue({
    el:"#app" ,
    data: {"nome" : "Daniel", "sobrenome": "Teles"},

    computed: {
      nomeCompleto(){
        return `${this.nome} ${this.sobrenome} `; 
      }
    }
  }
);
