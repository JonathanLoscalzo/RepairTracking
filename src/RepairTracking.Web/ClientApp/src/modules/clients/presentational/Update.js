import React from 'react';

const Update = ({ client, update, cancel }) => {

    return (
        <div id="wrapper">
            <div className="wrapper-header">
                <div className="col-lg">
                    <h1 className="page-header">Edición Cliente</h1>
                </div>
            </div>
            <div className="wrapper-body">
                <div className="row">
                    <div className="col-md">
                        <form className="well form-horizontal">
                            <fieldset>
                                <div className="form-group">
                                    <label> Text Input </label>
                                    <input className="form-control" />
                                    <p className="help-block">Example block-level help text here.</p>
                                </div>
                            </fieldset>
                            <button type="button" className="btn btn-primary" onClick={() => update(client)}>Modificar</button>
                            <button type="button" className="btn btn-default" onClick={() => cancel()}>Volver</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Update;