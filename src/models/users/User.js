class Carros {
  constructor(id, modeloVeiculo, quilometragem, status, problemasReportados) {
    this.id = this.generateId();
    this.modeloVeiculo = modeloVeiculo;
    this.quilometragem = quilometragem;
    this.status = status;
    this.problemasReportados = problemasReportados
  }

  generateId(){
    return Math.floor(Math.random() * 999) + 1;
  }
}

export default Carros;
