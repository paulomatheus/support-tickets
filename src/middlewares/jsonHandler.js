export async function jsonHandler(request, response) {
    const buffers = []

    for await (const chunk of request){ // percorre cada pedaço da requisicao

        buffers.push(chunk) //coloca pedaço no buffers
    }

    try {
        //disponivel em todas as requisicoes
        //adicionando dentro da requisicao a propriedade de body
        request.body = JSON.parse(Buffer.concat(buffers).toString())
        /*(Buffer.concat(buffers).toString()) soma os chunks do buffer */ 
    } catch (error) {
        request.body = null
    }

    response.setHeader("Content-Type", "application/json") //formato do conteudo
}