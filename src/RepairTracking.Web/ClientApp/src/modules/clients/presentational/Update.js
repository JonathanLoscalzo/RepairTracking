import React from 'react';

const Update = ({ client, update, cancel }) => {

    return (
        <div>
            <h1>Edición</h1>
            <form className="well form-horizontal">
                <fieldset>

                </fieldset>
                <div className="form-group row">
                    <div className="pull-right">
                        <button type="button" className="btn btn-primary" onClick={() => update(client)}>Modificar</button>
                        <button type="button" className="btn btn-default" onClick={() => cancel()}>Volver</button>
                    </div>
                </div>
            </form>
        </div>)
}

export default Update;