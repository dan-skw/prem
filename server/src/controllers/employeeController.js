import db from "../firebaseAdmin.js";

export const addEmployee = async (req, res) => {
  try {
    const {
      name,
      surname,
      birthdate,
      sex,
      hourlyRate,
      position,
      contractExpiryDate,
    } = req.body;
    const newEmployeeRef = db.collection("employees").doc();
    await newEmployeeRef.set({
      id: newEmployeeRef.id,
      name,
      surname,
      birthdate,
      sex,
      hourlyRate,
      position,
      contractExpiryDate,
    });

    res.status(200).json({ id: newEmployeeRef.id });
  } catch (error) {
    console.error("Error adding employee:", error);
    res.status(500).send("Internal Server Error");
  }
};
