"use client";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { OrderItem } from "@/lib/models/OrderModel";
import { useSession } from "next-auth/react";
import Image from "next/image";

import toast from "react-hot-toast";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function OrderDetails({
  orderId,
  paypalClientId,
}: {
  orderId: string;
  paypalClientId: string;
}) {
  const [dataa, setData] = useState({
    _id: "",
    user: { name: "" },
    items: [], // Assuming OrderItem is a type or interface
    shippingAddress: {
      fullName: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
    },
    paymentMethod: "",
    paymentResult: { id: "", status: "", email_address: "" }, // Optional
    itemsPrice: 0,
    shippingPrice: 0,
    taxPrice: 0,
    totalPrice: 0,
    isPaid: false,
    isDelivered: false,
    paidAt: undefined, // Optional
    deliveredAt: undefined, // Optional
    createdAt: "",
  });

  const [errorr, setError] = useState(" ");

  const { trigger: deliverOrder, isMutating: isDelivering } = useSWRMutation(
    `/api/orders/${orderId}`,
    async (url) => {
      const res = await fetch(`/api/admin/orders/${orderId}/deliver`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      res.ok
        ? toast.success("Order delivered successfully")
        : toast.error(data.message);
    }
  );

  const { data: session } = useSession();
  let sessionuser = session?.user;
  function createPayPalOrder() {
    return fetch(`/api/orders/${orderId}/create-paypal-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((order) => order.id);
  }

  function onApprovePayPalOrder(data: any) {
    return fetch(`/api/orders/${orderId}/capture-paypal-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((orderData) => {
        toast.success("Order paid successfully");
      });
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/orders/${orderId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData((prevData) => ({ ...prevData, ...jsonData }));
      } catch {
        setError("errorr");
      }
    };
    fetchData(); // Call fetchData when the component mounts
  }, [orderId]);

  //const { data, error } = useSWR(`/api/orders/${orderId}`);

  //if (error) return error.message;
  if (!dataa) return <div>Loading...</div>;

  console.log(dataa);

  return (
    <div>
      <h1 className="text-2xl py-4">Order {orderId}</h1>
      <p>Back to<Link href="/"> shopping</Link></p>
      <div className="grid md:grid-cols-4 md:gap-5 my-4">
        <div className="md:col-span-3">
          <div className="card bg-base-300">
            <div className="card-body">
              <h2 className="card-title">Shipping Address</h2>
              <p>{dataa.shippingAddress.fullName}</p>
              <p>
                {dataa.shippingAddress.address}, {dataa.shippingAddress.city},{" "}
                {dataa.shippingAddress.postalCode},{" "}
                {dataa.shippingAddress.country}{" "}
              </p>
              {dataa.isDelivered ? (
                <div className="text-success">
                  Delivered at {dataa.deliveredAt}
                </div>
              ) : (
                <div className="text-error">Not Delivered</div>
              )}
            </div>
          </div>

          <div className="card bg-base-300 mt-4">
            <div className="card-body">
              <h2 className="card-title">Payment Method</h2>
              <p>{dataa.paymentMethod}</p>
              {dataa.isPaid ? (
                <div className="text-success">Paid at {dataa.paidAt}</div>
              ) : (
                <div className="text-error">Not Paid</div>
              )}
            </div>
          </div>

          <div className="card bg-base-300 mt-4">
            <div className="card-body">
              <h2 className="card-title">Items</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {dataa.items.map((item: OrderItem) => (
                    <tr key={item.slug}>
                      <td>
                        <Link
                          href={`/product/${item.slug}`}
                          className="flex items-center"
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={50}
                          ></Image>
                          {/*
                              <span className="px-2">
                                {item.name} ({item.color} {item.size})
                              </span>
                              */}
                        </Link>
                      </td>
                      <td>{item.qty}</td>
                      <td>R {item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div>
          <div className="card bg-base-300">
            <div className="card-body">
              <h2 className="card-title">Order Summary</h2>
              <ul>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Items</div>
                    <div>R {dataa.itemsPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Tax</div>
                    <div>R {dataa.taxPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Shipping</div>
                    <div>R {dataa.shippingPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Total</div>
                    <div>R {dataa.totalPrice}</div>
                  </div>
                </li>

                {!dataa.isPaid && dataa.paymentMethod === "PayPal" && (
                  <li>
                    <PayPalScriptProvider
                      options={{ clientId: paypalClientId }}
                    >
                      <PayPalButtons
                        createOrder={createPayPalOrder}
                        onApprove={onApprovePayPalOrder}
                      />
                    </PayPalScriptProvider>
                  </li>
                )}
                {
                  // @ts-ignore
                  sessionuser?.isAdmin && (
                    <li>
                      <button
                        className="btn w-full my-2"
                        onClick={() => deliverOrder()}
                        disabled={isDelivering}
                      >
                        {isDelivering && (
                          <span className="loading loading-spinner"></span>
                        )}
                        Mark as delivered
                      </button>
                    </li>
                  )
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
