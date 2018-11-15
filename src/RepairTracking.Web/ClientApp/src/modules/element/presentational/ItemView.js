import React, { Fragment } from 'react'
import moment from 'moment';


export default (props) => {
    let items = [];
    console.log(props.element);
    let traduccion = {code: 'Código', name: 'Nombre', brand: 'Marca', observations:'Observaciones'};
    for (const x in props.element) {
        if (!Array.isArray(props.element[x])) {
            if(x != 'id'){
                items.push((
                    <div className="col-4 border">
                        <dt>{traduccion[x]}</dt>
                        <dl> {props.element[x]}</dl>
                    </div>
                ));   
            }
        }
    }

    return (
        props.element && <div className="card" >
            {props.element && (
                <Fragment>
                    <dl className="row">
                        {items}
                    </dl>
                    <ul className="list-group">
                        {props.element.tasks.map((x, i) => (
                            <li key={i} className="list-group-item">
                                Tarea: {x.name} - Precio: {'$' + x.price}</li>))}
                    </ul>
                    <ul className="list-group">
                        {props.element.pieces.map((x, i) => (
                            <li key={i} className="list-group-item">
                                Pieza: {x.name} - Precio: {'$' + x.price}</li>))}
                    </ul>
                </Fragment>)}
        </div>)
}