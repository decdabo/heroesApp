import React from 'react'

export const Card = ({ data }) => {

    const {  name, image } = data;

    return (
        <div className="col-6 col-lg-2 pb-4 m-auto">
            <div className="card__style m-auto">
                <div className="card w-100" style={{width: "100%"}}>
                    <img src={ image.url } className="card-img-top m-auto mt-3" alt={ name } />
                    <div className="card-body">
                        <h5 className="card-title mb-3">{ name }</h5>
                        <div className="btn btn-red-orange">Mirar héroe</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
