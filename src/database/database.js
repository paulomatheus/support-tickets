import fs from "node:fs/promises"

const DATABASE_PATH = new URL("db.json", import.meta.url) //import.meta.url pega endereco dinamico

export class Database {
    //#privado
    #database = {}

    constructor() {
        fs.readFile(DATABASE_PATH, "utf-8") //encode - conjunto de caracteres
        .then((data) => {
            this.#database = JSON.parse(data)
        })
        .catch(() => {
            this.#persist()
        })
    }

    #persist(){
        fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database)) //write cria o arquivo
    }
}
