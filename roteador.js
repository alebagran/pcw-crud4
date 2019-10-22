export class Roteador {

    irPara( url ) {
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

        return import( arquivo )
            .then( obj => obj.default )
            .then( render )
            .then( afterRender )
            .catch( error )
    }

}