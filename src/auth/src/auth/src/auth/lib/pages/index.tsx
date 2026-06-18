import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Bus Ticket System</h1>
      <Link href="/buses">View Buses</Link>
    </div>
  );
}
