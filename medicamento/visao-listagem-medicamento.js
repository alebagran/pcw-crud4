export class VisaoListagemMedicamento {

    desenharMedicamentos( medicamentos ) {
        const corpo = document.querySelector( '#medicamentos tbody' );
        corpo.innerHTML = ''; // Limpa
        for ( let m of medicamentos ) {
            const linha = `
            <tr>
                <td>${m.id}</td>
                <td>${m.nome}</td>
                <td>${m.preco}</td>
                <td>${m.validade}</td>
                <td><a href="/medicamentos/${m.id}/alterar" >Alterar</a></td>
            </tr>
            `;
            corpo.innerHTML += linha;
        }
    }

    mostrarErro( erro ) {
        console.log( 'ERRO', erro );
    }

}