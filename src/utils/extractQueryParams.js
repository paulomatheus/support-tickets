export function extractQueryParams(query){
    return query 
    .slice(1) //recorta do 1 em diante
    .split("&") //divide com &, pode aparecer depois do closed
    /**
     * reduce( () => {}, {} )
     * (funcao) => {executa alguma coisa}, {retorna um objeto} = reduce
     */

    .reduce( (queryParams, param) => {
        const [key, value] = param.split("=")
        queryParams[key] = value
        return queryParams
        // saida { status: 'closed' }
    }, {} )
}
