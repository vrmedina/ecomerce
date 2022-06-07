import React from "react";

const ProductItem = props => {
  const { product } = props;
  return (
    <div className=" column is-half">
      <div className="box">
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src="https://static9.depositphotos.com/1006187/1077/i/450/depositphotos_10772874-stock-photo-toolbox.jpg" alt="toolbox"></img>
            </figure>
          </div>
          <div className="media-content">
            <b style={{ textTransform: "capitalize" }}>
              {product.name}{" "}
              <span className="tag is-danger">${product.price}</span>
            </b>
            <div>{product.shortDesc}</div>

            {product.stock > 0 ? (
              <small>{product.stock + " Disponible"}</small>
            ) : (
              <small className="has-text-danger">Producto Agotado</small>
            )}
            <div className="is-clearfix">
              <button
                className="button is-small is-outlined is-danger   is-pulled-right"
                onClick={() =>
                  props.addToCart({
                    id: product.name,
                    product,
                    amount: 1
                  })
                }
              >
                Añadir al Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
