import { ControladoraListagemMedicamento } from "../medicamento/controladora-listagem-medicamento.js";

let pagina = {

    render() {
        return `
        <h1>Medicamentos</h1>
        <a href="/medicamentos/novo" >Novo</a>
        <table id="medicamentos" >
          <thead>
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Validade</th>
                <th>Alterar</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
        `;
    },

    afterRender() {
        const ctrl = new ControladoraListagemMedicamento();
        ctrl.listar();
    }

};

export default pagina;