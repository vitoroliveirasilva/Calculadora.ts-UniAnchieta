type Operacao = "somar" | "subtrair" | "multiplicar" | "dividir";

interface OperacaoRegistro {
  operacao: Operacao;
  a: number;
  b: number;
  resultado: number;
}

class Calculadora {
  private historico: OperacaoRegistro[] = [];

  public somar(a: number, b: number): number {
    const resultado = a + b;
    this.registrar("somar", a, b, resultado);
    return resultado;
  }

  public subtrair(a: number, b: number): number {
    const resultado = a - b;
    this.registrar("subtrair", a, b, resultado);
    return resultado;
  }

  public multiplicar(a: number, b: number): number {
    const resultado = a * b;
    this.registrar("multiplicar", a, b, resultado);
    return resultado;
  }

  public dividir(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida.");
    }
    const resultado = a / b;
    this.registrar("dividir", a, b, resultado);
    return resultado;
  }

  public ListarOperacoesRealizadas(): OperacaoRegistro[] {
    return this.historico.slice();
  }

  private registrar(operacao: Operacao, a: number, b: number, resultado: number): void {
    this.historico.push({ operacao, a, b, resultado });
  }
}
