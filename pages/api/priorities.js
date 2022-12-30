export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: "Acil", color: "red" },
    { id: 2, name: "Önemli", color: "orange" },
    { id: 3, name: "Normal", color: "blue" },
  ]);
}
