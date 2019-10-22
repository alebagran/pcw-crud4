export class VisaoFormMedicamento {

    aoSalvar( callback ) {
        document.getElementById( 'salvar' )
            .addEventListener( 'click', callback );
    }

    mostrarSucesso() {
        alert( 'Salvo com sucesso!' );
    }

    mostrarErro( erro ) {
        alert( erro.message );
    }

    medicamento() {
        return {
            id: document.getElementById( 'id' ).value,
            nome: document.getElementById( 'nome' ).value,
            preco: document.getElementById( 'preco' ).value,
            validade: document.getElementById( 'validade' ).value
        };
    }

    id() {
        const path = location.pathname;
        if ( /^\/medicamentos\/[0-9]+\/alterar\/?$/.test( path ) ) {
            return Number( /[0-9]+/.exec( path )[ 0 ] );
        }
        return -1;
    }

    desenharMedicamento( obj ) {
        if ( ! obj.id ) {
            document.getElementById( 'medicamento' ).hidden = true;
            document.getElementById( 'msg' ).innerHTML = '<p>Não encontrado.</p>';
            return;
        }
        document.getElementById( 'titulo' ).textContent = 'Medicamento ' + obj.id;
        document.getElementById( 'id' ).value = obj.id;
        document.getElementById( 'nome' ).value = obj.nome;
        document.getElementById( 'preco' ).value = obj.preco;
        document.getElementById( 'validade' ).value = obj.validade;
    }
}