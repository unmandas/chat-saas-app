"use client";

import { addDoc, collection } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState } from "react";

const CheckoutButton = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const createCheckoutSession = async () => {
    if (!session) return;
    // push a document into firebase db
    setLoading(true);

    const docRef = await addDoc(
      collection(db, "customers", session.user.id, "checkout_sessions"),
      {
        price: "price_",
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    );

    // ... stripe extension on firebase will create a check out session

    // redirect user to checkout page
  };
  return (
    <div className="flex flex-col space-y-2">
      <button
        onClick={() => createCheckoutSession()}
        className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible: outline focus-visible: outline-2 focus-visible: outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-80
  disabled:bg-indigo-600/50 disabled:text-white disabled:cursor-default"
      >
        Sign Up
      </button>
    </div>
  );
};

export default CheckoutButton;
