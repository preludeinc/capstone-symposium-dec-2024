import React from "react";
import { Default } from "../layouts/Default";
import useEventbrite from "react-eventbrite-popup-checkout";

export const Register = () => {
  const handleOrderComplete = React.useCallback(() => {
    console.log("Order completed successfully");
  }, []);

  const checkOut = useEventbrite({
    eventId: "1042162645527",
    modal: false,
    onOrderComplete: handleOrderComplete,
    iFrameHeight: 500,
    iFrameAutoAdapt: 100,
  });

  return (
    <>
    <Default>
      <div className="container pt-10 my-[4em] px-4">
      <section className="reg-section align-center">
          <h1 className="reg-heading">
            Register
          </h1>
          <div className="reg-container">
            {checkOut ? (
              <div id={checkOut.id} />
            ): null}
          </div>
      </section>
      </div>
    </Default>
    </>
  );
}
