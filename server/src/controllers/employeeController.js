import db from "../firebaseAdmin.js";

export const addEmployee = async (req, res) => {
  try {
    const { name, surname, birthdate, sex, hourlyRate, position } = req.body;
    const newEmployeeRef = db.collection("employees").doc();
    await newEmployeeRef.set({
      id: newEmployeeRef.id,
      name,
      surname,
      birthdate,
      sex,
      hourlyRate,
      position,
    });

    res.status(200).json({ id: newEmployeeRef.id });
  } catch (error) {
    console.error("Error adding employee:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const getAllEmployees = async (req, res) => {
  try {
    const snapshot = await db.collection("employees").get();
    const employees = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json(employees);
  } catch (error) {
    console.error("Error getting employees:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const getEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const docRef = db.collection("employees").doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
      res.status(404).send("Employee not found");
    } else {
      res.json(doc.data());
    }
  } catch (error) {
    console.error("Error getting employee:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const updateEmployeeData = async (req, res) => {
  try {
    const { id } = req.params;
    const employeeData = req.body;
    await db.collection("employees").doc(id).update(employeeData);
    res.send("Employee updated successfully");
  } catch (error) {
    console.error("Error updating employee:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection("employees").doc(id).delete();
    res.status(200).send("Employee deleted successfully");
  } catch (error) {
    console.error("Error deleting employee:", error);
    res.status(500).send("Internal Server Error");
  }
};
