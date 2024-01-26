import db from "../firebaseAdmin.js";

export const getUser = async (req, res) => {
  try {
    const doc = await db.collection("Users").doc(req.params.uid).get();
    if (doc.exists) {
      res.json(doc.data());
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send("Internal Servser Error");
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, surname, birthDate, hourlyRate } = req.body;
    await db.collection("Users").doc(req.params.uid).set({
      name,
      surname,
      birthDate,
      hourlyRate,
    });
    res.send("User updated");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
