import { useRouter } from "next/router";
import { useState } from "react";
import { api } from "../../lib/api";

export default function Booking() {
  const router = useRouter();
  const { id } = router.query;

  const [seatNo, setSeatNo] = useState(1);

  const book = async () => {
    await api.post("/bookings", {
      userId: "USER_ID",
      busId: id,
      seatNo,
    });

    alert("Booked!");
  };

  return (
    <div>
      <h1>Book Seat</h1>
      <input
        type="number"
        value={seatNo}
        onChange={(e) => setSeatNo(+e.target.value)}
      />
      <button onClick={book}>Confirm Booking</button>
    </div>
  );
}
