import React, { Fragment } from 'react'

export default (props) => {
    console.log(props.task);
    let traduccion = {
        code: "Código",
        name: "Nombre",
        observations: "Observaciones",
        price: "precio"
    };

    let items = [];
    for (const x in props.task) {
        if (!Array.isArray(props.task[x])) {
            if(x != 'id'){
                items.push((
                    <div key={x} className="col-4 border">
                        <dt>{traduccion[x]}</dt>
                        <dl> {props.task[x]}</dl>
                    </div>
                ));
            }
        }
    }

    return (
        props.task && <div className="card" >
            {props.task && (
                <Fragment>
                    <dl className="row">
                        {items}
                    </dl>
                </Fragment>)}
        </div>)
}