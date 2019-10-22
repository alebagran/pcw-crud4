import { ServicoMedicamento } from "./servico-medicamento.js/index.js";
import { VisaoListagemMedicamento } from "./visao-listagem-medicamento.js/index.js";

export class ControladoraListagemMedicamento {

    constructor() {
        this.servico = new ServicoMedicamento();
        this.visao = new VisaoListagemMedicamento();
    }

    listar() {
        this.servico.todos()
            .then( this.visao.desenharMedicamentos )
            .catch( this.visao.mostrarErro );
    }

}