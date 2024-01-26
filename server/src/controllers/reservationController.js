import db from "../firebaseAdmin.js";

export const addReservation = async (req, res) => {
  try {
    const { fullName, date, hour, numberOfGuests, table } = req.body;
    const docRef = db.collection("reservations").doc(date);
    const doc = await docRef.get();

    if (!doc.exists) {
      await docRef.set({ [hour]: [{ fullName, numberOfGuests, table }] });
    } else {
      const existingReservations = doc.data()[hour] || [];
      await docRef.update({
        [hour]: [...existingReservations, { fullName, numberOfGuests, table }],
      });
    }

    res.status(200).send("Reservation added");
  } catch (error) {
    console.error("Error adding reservation:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const getReservations = async (req, res) => {
  try {
    const { date } = req.params;
    const docRef = db.collection("reservations").doc(date);
    const doc = await docRef.get();

    if (!doc.exists) {
      res.status(404).send("No reservations found for this date");
    } else {
      res.json(doc.data());
    }
  } catch (error) {
    console.error("Error getting reservations:", error);
    res.status(500).send("Internal Server Error");
  }
};
