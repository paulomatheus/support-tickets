import { create } from "../controllers/tickets/create.js"
export const tickets = [
    {
        method: "POST",
        path: "/tickets",
        //controller é a funcao que vai excutar alguma coisa
        //quando a rota post for chamada
        controller: create,
    },
]
