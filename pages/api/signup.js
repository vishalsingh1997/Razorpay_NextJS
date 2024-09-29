export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, email, password } = req.body;

    // Here you would handle user creation logic
    // For example, save the user to a database or integrate with Firebase

    res
      .status(200)
      .json({ message: "User signed up successfully", username, email });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
