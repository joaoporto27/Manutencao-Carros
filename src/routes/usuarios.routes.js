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
  
    return res.status(201).json({
      message: "Carro cadastrado com sucesso!",
      carro,
    });
  });

  carrosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;

    const user = usersList.getUserById(id);
  
    if (!user) {
      return res.status(404).json({
        message: `Usuário com id ${id} não encontrado!`,
      });
    }
  
    return res.status(200).json({
      message: `Usuário com id ${id} encontrado!`,
      user,
    });
  });
  
  carrosRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    
    const user = usersList.updateUser(id, name, email, password);
  
    if (!user) {
      return res.status(404).json({
        message: `Usuário com id ${id} não encontrado!`,
      });
    }
  
    return res.status(200).json({
      message: `Usuário com id ${id} atualizado com sucesso!`,
      user,
    });
  });
  
  carrosRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;
    const user = usersList.deleteUser(id);
    if (!user) {
      return res.status(404).json({
        message: `Usuário com id ${id} não encontrado!`,
      });
    }
    return res.status(200).json({
      message: `Usuário com id ${id} deletado com sucesso!`,
      user,
    });
  });
export default carrosRoutes;
