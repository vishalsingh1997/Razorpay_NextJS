import Razorpay from "razorpay";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { amount, username, email } = req.body;
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    try {
      const options = {
        amount: amount * 100, // Amount in paise
        currency: "INR",
        receipt: "order_rcptid_11" + Date.now(),
      };

      const order = await razorpay.orders.create(options);
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
