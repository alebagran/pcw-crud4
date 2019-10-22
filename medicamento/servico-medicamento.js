import APP from "/app.js"

export class ServicoMedicamento {

    constructor() {
        this.url = `${APP.api}/medicamentos`;
    }

    todos() {
        return fetch( this.url )
            .then( response => response.json() );
    }

    comId( id ) {
        const url = `${this.url}/${id}`;
        return fetch( url )
            .then( response => response.json() );
    }

    salvar( obj ) {

        // validar...

        const salvar = ! obj.id;
        const url = salvar ? this.url : `${this.url}/${obj.id}`;
        const metodo = salvar ? "POST" : "PUT";

        return fetch( url,
            {
                method: metodo,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( obj )
            }
        ).then( response => response.text() );

    }

}