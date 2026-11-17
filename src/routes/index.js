//junta todas as rotas que estao em arquivos diferentes
import { tickets } from "./tickets.js"
import { parseRoutePath } from "../utils/parseRoutePath.js"

export const routes = [...tickets].map((route) => ({ //tickets é uma lista
    ...route, //espalhar o conteudo de cada rota
    path: parseRoutePath((route.path)), //sobreescreve o parseRoutePath
}))
