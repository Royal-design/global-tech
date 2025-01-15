const functions = require("firebase-functions");
const stripe = require("stripe")(functions.config().stripe.secret_key);

exports.createStripeCheckout = functions.https.onCall(async (data, context) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
      shipping_address_collection: {
        allowed_countries: ["US"]
      },
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: 100 * 100,
            product_data: {
              name: "New camera"
            }
          }
        }
      ]
    });

    console.log("Stripe session created:", session.id);
    return { id: session.id };
  } catch (error) {
    console.error("Error creating Stripe session:", error);
  }
});
