import Carros from "./User.js";

class CarrosRepository {
    constructor() {
        this.carros = [];
    }

    getAllCarros() {
        return this.carros;
    }

    addCarros(modeloVeiculo, quilometragem, status, problemasReportados) {
        const newCarro = new Carros(modeloVeiculo, quilometragem, status, problemasReportados);

        this.carros.push(newCarro);

        return newCarro;
    }

    getCarroById(id) {
        const carro = this.carros.find((c) => c.id == id);

        if (!carro) {
            return null;
        }

        return carro;
    }

    updateCarros(id, modeloVeiculo, quilometragem, status, problemasReportados) {
        const carro = this.getCarroById(id);

        if (!carro) {
            return null;
        }

        carro.modeloVeiculo = modeloVeiculo;
        carro.quilometragem = quilometragem;
        carro.status = status;
        carro.problemasReportados = problemasReportados;

        return carro;
    }

}

export default CarrosRepository;