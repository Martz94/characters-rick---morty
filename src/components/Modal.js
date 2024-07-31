import React from "react";

const Autos = ({ modelos = [] }) => {
    return (
        <>
        <div className="row">
            {modelos.map((item, index) => (
                <div key={index} className="col-3">
                    <div className="card" style={{ minWidth: "200px" }}>
                        <img src={item.image} alt=""></img>
                        <div className="card-body">
                            <h5 className="card-title">Modelo: {item.modelo}</h5>
                            <hr />
                            <p>Marca: {item.marca}</p>
                            <p>Precio: {item.precio}</p>
                        </div>
                        
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Launch static backdrop modal
                        </button>
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ...
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Understood</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>              

            ))}
        </div>
        </>
    )
}

export default Autos