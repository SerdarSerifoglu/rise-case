export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: "Urgent", color: "red" },
    { id: 2, name: "Important", color: "purple" },
    { id: 3, name: "Normal", color: "blue" },
  ]);
}
