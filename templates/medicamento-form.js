import { ControladoraFormMedicamento } from "../medicamento/controladora-form-medicamento.js";

let pagina = {

    render() {
        return `
        <a href="/medicamentos" >Listagem</a>
        <h1 id="titulo" >Medicamento</h1>
        <div id="medicamento" >
          <input id="id" type="hidden" />
          <input id="nome" placeholder="nome"  />
          <input id="preco" placeholder="preco" />
          <input id="validade" placeholder="validade" />
          <button id="salvar" >Salvar</button>
        </div>
        <div id="msg" ></div>
        `;
    },

    afterRender() {
        const ctrl = new ControladoraFormMedicamento();
        ctrl.iniciar();
    }

};

export default pagina;