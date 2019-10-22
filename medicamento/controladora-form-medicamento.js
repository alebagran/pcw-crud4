import { ServicoMedicamento } from "./servico-medicamento.js";
import { VisaoFormMedicamento } from "./visao-form-medicamento.js";

export class ControladoraFormMedicamento {

    constructor() {
        this.servico = new ServicoMedicamento();
        this.visao = new VisaoFormMedicamento();
    }

    iniciar() {
        this.visao.aoSalvar( () => this.salvar() );

        const id = this.visao.id();
        if ( id >= 0 ) {
            this.servico.comId( id )
                .then( this.visao.desenharMedicamento )
                .catch( this.visao.mostrarErro );
        }
    }

    salvar() {
        let medicamento = this.visao.medicamento();
        this.servico.salvar( medicamento )
            .then( this.visao.mostrarSucesso )
            .catch( this.visao.mostrarErro );
    }

}