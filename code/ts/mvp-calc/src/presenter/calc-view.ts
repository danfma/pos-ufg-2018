/**
 * Valor iniciais para a view da calculadora.
 */
export interface CalcViewInit {
  initialInput1?: number;
  initialInput2?: number;
  initialResult?: number;
}

/**
 * Contrato entre o presenter e a view da calculadora.
 */
export interface CalcView {
  /**
   * Inicializa a view com alguns valores padrões.
   */
  initialize(data: CalcViewInit): void;

  /**
   * Mostra o resultado de um cálculo para o usuário.
   */
  displayResult(result: number): void;

  /**
   * Mostra uma mensagem de erro para o usuário.
   */
  showError(message: string): void;
}
