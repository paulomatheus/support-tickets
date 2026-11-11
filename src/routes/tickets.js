export const tickets = [
    {
        method: "POST",
        path: "/tickts",
        controller: (request, response) => {
            response.end("Criado com sucesso!")
        }
    }
]
