import React from 'react';
import { MdSend, MdArrowBack } from 'react-icons/md'
import { IoIosRedo } from 'react-icons/io'

const styles = {
    paddingBottom: '35px',
    marginLeft: '10px'
};

export default ({ submitting, pristine, reset, goBack, text, previousPage, destroy, currentPage }) => (
    <div className="form-row mt-3 d-flex justify-content-center">
        <button
            style={styles}
            type="submit"
            className="btn btn-lg btn-primary "
            disabled={submitting}>
            <MdSend /> {text}
                        </button>
        <button style={styles} type="button"
            className="btn btn-lg btn-default"
            disabled={pristine || submitting}
            onClick={reset}>
            <IoIosRedo /> Limpiar Campos
                        </button>
        <button style={styles} type="button"
            className="btn btn-lg btn-default"
            disabled={currentPage === 1}
            onClick={previousPage}>
            <MdArrowBack /> Atrás
                        </button>
        <button style={styles} type="button"
            className="btn btn-lg btn-danger"
            onClick={() => {destroy(); goBack()}}>
            <MdArrowBack /> Cancelar
                        </button>
    </div>)