import React, { Fragment } from 'react'

export default (props) => {
    let items = [];
    for (const x in props.task) {
        if (!Array.isArray(props.task[x])) {
            items.push((
                <div key={x} className="col-4 border">
                    <dt>{x}</dt>
                    <dl> {props.task[x]}</dl>
                </div>
            ));
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