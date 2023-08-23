import React from "react";

export default function ProductDetail({ onCloseDetail, product }) {
  return (
    <div style={{ display: "block" }} class="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">THÔNG TIN CHI TIẾT SẢN PHẨM</h5>
            <button
              onClick={onCloseDetail}
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div className="text-center">
              <img src={product.image} height={300} width={300} lt="" />
            </div>
            <h3 className="text-center mb-4">{product.name}</h3>
            <p>Mô tả sản phẩm : {product.description}</p>
            <p>Mô tả ngắn : {product.shortDescription}</p>
            <p>Số lượng trong kho : {product.quantity}</p>
            <p>Giá : {product.price} $ / 1 đôi</p>
          </div>
          <div class="modal-footer">
            <button
              onClick={onCloseDetail}
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// "id": 1,
// "name": "Adidas Prophere",
// "alias": "adidas-prophere",
// "price": 350,
// "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
// "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
// "quantity": 995,
// "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
