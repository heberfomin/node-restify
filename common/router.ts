// como o Restify não suporta o encapsulamento de Rotas, precisamos criar uma classe 
// abstrata para organizar o uso de rotas (duferença em relacao ao express)
import * as restify from 'restify'

export abstract class Router {
    abstract applyRoutes(application: restify.Server)
}