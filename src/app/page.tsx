import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";
export const mockLinks = [
  "https://utfs.io/f/hp9bRscWm6e9h76saPcWm6e9ItL0QHxXvdAoCNZwigEylKRS",
  "https://utfs.io/f/hp9bRscWm6e9loLQWafzeOUuDkYPpG7r0Cwt6Ffq4QsSNgXx",
  "https://utfs.io/f/hp9bRscWm6e9KzkidOHcs3UPHLRQIdv0GJbf2YMXij5kmzep",
  "https://utfs.io/f/hp9bRscWm6e9yvtn8u7oQnlACNM8T5D3xIgkEVYsw9c14FBX",
  "https://utfs.io/f/hp9bRscWm6e9ZIA6MtOT2eFmE5gwtL8HU3vlrzn709GdfiBq",
];

export default async function HomePage() {
  const allcustomers = await db.query.customers.findMany();
  console.log("Customers:", allcustomers);

  return (
    <main className="">
      <section className="mt-8 flex flex-wrap items-center gap-4">
        {allcustomers.map((m, idx) => (
          <div key={idx} className="rounded-lg border-2 p-2 text-center">
            <Image
              src={m.imgUrl}
              alt="phooto"
              height={400}
              width={300}
              className="h-80 w-80 object-cover"
            />
            <p>{m.name}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
