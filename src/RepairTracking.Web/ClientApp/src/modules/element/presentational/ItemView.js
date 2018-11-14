import React, { Fragment } from 'react'
import moment from 'moment';


export default (props) => {
    let items = [];
    for (const x in props.element) {
        if (!Array.isArray(props.element[x])) {
            items.push((
                <div className="col-4 border">
                    <dt>{x}</dt>
                    <dl> {props.element[x]}</dl>
                </div>
            ));
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
                                Tarea: {x.name} - Cantidad: {x.price}</li>))}
                    </ul>
                    <ul className="list-group">
                        {props.element.pieces.map((x, i) => (
                            <li key={i} className="list-group-item">
                                Pieza: {x.name} - Precio: {x.price}</li>))}
                    </ul>
                </Fragment>)}
        </div>)
}