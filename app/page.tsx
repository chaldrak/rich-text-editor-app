import Image from "next/image";
import Myform from "./Components/form-content";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Myform/>
    </main>
  );
}
