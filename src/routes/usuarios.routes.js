import { Router } from "express";
import CarrosRepository from "../models/users/UsersRepository.js";


const carrosRoutes = Router();
const carrosList = new CarrosRepository();

carrosRoutes.get("/", (req, res) => {
    const carros = carrosList.getAllCarros();

    return res.status(200).json({
        message: carros.length == 0
        ? "Não há carros cadastrados"
        : `Total de carros: ${carros.length}`,
    carros,
    })
})

carrosRoutes.post("/", (req, res) => {
    const { modeloVeiculo, quilometragem, status, problemasReportados } = req.body;

    const carro = carrosList.addCarros( modeloVeiculo, quilometragem, status, problemasReportados);

    if(!modeloVeiculo || !quilometragem ){
      return res.status(400).json({
        message: "Os campos de modelo veículo e quilometragem são obrigatórios"
      })
      
    }

    if(status != "pendente" && status != "manutenção" && status != "finalizado"){
      return res.status(400).json({
        message: "O campo status deve ser preenchido com pendente, manutenção ou finalizado."
      })
    }
  
    return res.status(201).json({
      message: "Carro cadastrado com sucesso!",
      carro,
    });
  });

  carrosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;

    const carro = carrosList.getCarroById(id);
  
    if (!carro) {
      return res.status(404).json({
        message: `Carro com id ${id} não encontrado!`,
      });
    }
  
    return res.status(200).json({
      message: `Carro com id ${id} encontrado!`,
      carro,
    });
  });
  
  carrosRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const {modeloVeiculo, quilometragem, status, problemasReportados } = req.body;
    
    const carro = carrosList.updateCarros(id,modeloVeiculo, quilometragem, status, problemasReportados);

    if(!modeloVeiculo || !quilometragem ){
      return res.status(400).json({
        message: "Os campos de modelo veículo e quilometragem são obrigatórios"
      })
      
    }

    if(status != "pendente" && status != "manutenção" && status != "finalizado"){
      return res.status(400).json({
        message: "O campo status deve ser preenchido com pendente, manutenção ou finalizado."
      })
    }
  
    if (!carro) {
      return res.status(404).json({
        message: `Carro com id ${id} não encontrado!`,
      });
    }
  
    return res.status(201).json({
      message: `Carro com id ${id} atualizado com sucesso!`,
      carro,
    });
  });
  
export default carrosRoutes;
