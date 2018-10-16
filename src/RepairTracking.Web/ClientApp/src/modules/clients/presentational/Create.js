import React from 'react';

const Create = ({ client, add, cancel }) => {
    return (
        <div>
            <h1>Nuevo Cliente</h1>
            <div >
                <form className="well form-horizontal">
                    <fieldset>

                    </fieldset>
                    <div className="form-group row">
                        <div className="pull-right">
                            <button type="button" className="btn btn-primary" onClick={() => add(client)}>Modificar</button>
                            <button type="button" className="btn btn-default" onClick={() => cancel()}>Volver</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>)
}

export default Create;