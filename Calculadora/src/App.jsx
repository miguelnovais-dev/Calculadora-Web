import "./style.css";
import { useState } from "react";

function App() {

  const [visor, setVisor] = useState("0");
  const [primeiroNumero, setPrimeiroNumero] = useState(null);
  const [operacao, setOperacao] = useState(null);
  const [expressao, setExpressao] = useState("");

function adicionarNumero(numero) {

  if (numero === "." && visor.includes(".")) {
    return;
  }

  const novoVisor = visor === "0" ? numero : visor + numero;

  setVisor(novoVisor);

  if (operacao) {
    setExpressao(`${primeiroNumero} ${operacao} ${novoVisor}`);
  }
}

function escolherOperacao(op) {
  setPrimeiroNumero(Number(visor));
  setOperacao(op);

  setExpressao(`${visor} ${op}`);
  setVisor("0");
}

function calcular() {

  const segundoNumero = Number(visor);
  let resultado;

  if (operacao === "+") {
    resultado = primeiroNumero + segundoNumero;
  }

  if (operacao === "-") {
    resultado = primeiroNumero - segundoNumero;
  }

  if (operacao === "*") {
    resultado = primeiroNumero * segundoNumero;
  }

  if (operacao === "/") {

    if (segundoNumero === 0) {
      setVisor("Erro");
      return;
    }

    resultado = primeiroNumero / segundoNumero;
  }


  setVisor(String(resultado));
  setExpressao("");
  setPrimeiroNumero(null);
  setOperacao(null);
}


  return (
    <>
      <div className="visor">
        {expressao || visor}
      </div>

      <div className="container">

        <button onClick={() => adicionarNumero("1")}>1</button>
        <button onClick={() => adicionarNumero("2")}>2</button>
        <button onClick={() => adicionarNumero("3")}>3</button>
        <button onClick={() => escolherOperacao("/")} className="funcoes">/</button>


        <button onClick={() => adicionarNumero("4")}>4</button>
        <button onClick={() => adicionarNumero("5")}>5</button>
        <button onClick={() => adicionarNumero("6")}>6</button>
        <button onClick={() => escolherOperacao("*")} className="funcoes">*</button>


        <button onClick={() => adicionarNumero("7")}>7</button>
        <button onClick={() => adicionarNumero("8")}>8</button>
        <button onClick={() => adicionarNumero("9")}>9</button>
        <button onClick={() => escolherOperacao("-")} className="funcoes">-</button>


        <button onClick={() => adicionarNumero(".")}>.</button>
        <button onClick={() => adicionarNumero("0")}>0</button>
        <button onClick={calcular}>=</button>
        <button onClick={() => escolherOperacao("+")} className="funcoes">+</button>

      </div>
    </>
  );
}

export default App;