import React from 'react';
import { connect } from 'react-redux';

const Home = props => (
    // <div id="page-wrapper">
    //     <div class="container-fluid">
    //         <div class="row">
    //             <div class="col-lg-12">
    //                 <h1 class="page-header">Bienvenido!</h1>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div id="wrapper">
        <div className="wrapper-header">
            <div className="col-lg">
                <h1 className="page-header">
                    Bienvenido
                </h1>
            </div>
        </div>
        <div className="wrapper-body">
            <div >
            </div>
        </div>
    </div>
);

const mapStateToProps = (state, ownProps) => {
    return state;
}

export default connect(mapStateToProps)(Home);
