
function mudarConteudo( arquivo ) {

    const render = obj => {
        document.getElementById( 'conteudo' ).innerHTML = obj.render();
        return obj;
    };

    const afterRender = obj => {
        obj.afterRender();
    };

    const error = err => {
        console.log( err );
    };

    import( arquivo )
        .then( obj => obj.default )
        .then( render )
        .then( afterRender )
        .catch( error )
}

window.addEventListener( 'load', function load() {

    const path = location.pathname;
    if ( /^\/?$/.test( path ) ) {
        document.getElementById( 'conteudo' ).innerHTML = 'Página inicial';
    } else if ( /^\/medicamentos\/?$/.test( path ) ) {
        mudarConteudo( '/templates/medicamentos.js' );
    } else if ( /^\/medicamentos\/novo\/?$/.test( path ) ) {
        mudarConteudo( '/templates/medicamento-form.js' );
    } else if ( /^\/medicamentos\/[0-9]+\/alterar\/?$/.test( path ) ) {
        mudarConteudo( '/templates/medicamento-form.js' );
    } else {
       document.getElementById( 'conteudo' ).innerHTML = 'Não encontrada.';
    }

} );