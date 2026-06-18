import { useEffect, useState } from "react";
import { api } from "../lib/api";
import Link from "next/link";

export default function Buses() {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    api.get("/buses").then((res) => setBuses(res.data));
  }, []);

  return (
    <div>
      <h1>Available Buses</h1>
      {buses.map((bus: any) => (
        <div key={bus.id}>
          <h3>{bus.name}</h3>
          <p>{bus.route}</p>
          <Link href={`/booking/${bus.id}`}>Book</Link>
        </div>
      ))}
    </div>
  );
}
