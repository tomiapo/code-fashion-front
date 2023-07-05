import React, { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

function OrdersHistory() {
  const { orders } = useContext(OrderContext);
  return (
    <div className="grid grid-cols-1 gap-4">
      {orders.length === 0 ? (
        <p>No orders available</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.order_id}
            className="bg-white rounded-md shadow-md p-4"
          >
            <h3 className="text-lg font-bold mb-2">
              Orden ID: {order.order_id}
            </h3>
            <p className="text-gray-500 mb-2">
              ID del producto: {order.product_id}
            </p>
            <p className="text-gray-700 font-bold">
              Cantidad de productos: ${order.product_quantity}
            </p>
            <p className="text-gray-700 font-bold">
              Cantidad Total: ${order.total_amount}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default OrdersHistory;
