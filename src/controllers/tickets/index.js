//routeHandler passa essas 3 propriedades em route.controller
export function index({ request, response, database }) {
    //request.query acabou de adicionar no routeHandler
    const {status} = request.query // acessar o status vindo de dentro de request
    console.log(status)
    const tickets = database.select("tickets")

    return response.end(JSON.stringify(tickets))
}
