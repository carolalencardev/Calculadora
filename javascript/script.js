var estado; //momento atual em que estou;
var op1; // se estiver digitando os numeros e teclas;
var op2; //se estiver clicando nos numeros;
var resultado; //mostrar o resultado;
var operacao; //realiar a operação guardar valores;

let calculadora = {
  numeroArray: new Array(),

  inicializacao: function () {
    estado = "inicializado";
    this.display();
  },
  addbtn: function () {
    operacao = "addbtn";
    estado = "operando2";
    this.numeroArray = [];
  },
  subbtn: function () {
    operacao = "subbtn";
    estado = "operando2";
    this.numeroArray = [];
  },
  mulbtn: function () {
    operacao = "mulbtn";
    estado = "operando2";
    this.numeroArray = [];
  },
  divbtn: function () {
    operacao = "divbtn";
    estado = "operando2";
    this.numeroArray = [];
  },
  ac: function () {
    calculadora.inicializacao();
    this.numeroArray = [];
  },
  del: function () {
    this.numeroArray.pop();
    this.proximonumero();
    this.display;
  },
  igual: function () {
    switch (operacao) {
      case "addbtn":
        resultado = op1 + op2;
        estado = resultado;
        this.display();
        break;
      case "subbtn":
        resultado = op1 - op2;
        estado = resultado;
        this.display();
        break;
      case "mulbtn":
        resultado = op1 * op2;
        estado = resultado;
        this.display();
        break;
      case "divbtn":
        resultado = op1 / op2;
        estado = resultado;
        this.display();
        break;
    }
  },
  display: function () {
    switch (estado) {
      case "inicializacao":
        document.getElementById("display").innerText = "Display";
        estado = "operando1";
        break;
      case "operndo1":
        document.getElementById("display").innerText = op1;
        break;
      case "operando2":
        document.getElementById("display").innerText = op2;
        break;
      case "resultado":
        document.getElementById("display").innerText = resultado;
        break;
    }
  },
  proximonumero: function (digito) {
    switch (estado) {
      case "operando1":
        this.numeroArray.push(digito);
        op1 = parseFloat(this.numeroArray.join(""));
        this.display();
        break;
      case "operando2":
        this.numeroArray.push(digito);
        op2 = parseFloat(this.numeroArray.join(""));
        this.display();
        break;
    }
  },
};
