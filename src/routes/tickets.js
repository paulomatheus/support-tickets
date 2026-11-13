export const tickets = [
    {
        method: "POST",
        path: "/tickets",
        //controller é a funcao que vai excutar alguma coisa
        //quando a rota post for chamada
        controller: (request, response) => {
            response.end("Criado com sucesso!")
        }
    }
]
