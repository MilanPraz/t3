import Image from "next/image";
import Link from "next/link";

export const mockLinks = [
  "https://utfs.io/f/hp9bRscWm6e9h76saPcWm6e9ItL0QHxXvdAoCNZwigEylKRS",
  "https://utfs.io/f/hp9bRscWm6e9loLQWafzeOUuDkYPpG7r0Cwt6Ffq4QsSNgXx",
  "https://utfs.io/f/hp9bRscWm6e9KzkidOHcs3UPHLRQIdv0GJbf2YMXij5kmzep",
  "https://utfs.io/f/hp9bRscWm6e9yvtn8u7oQnlACNM8T5D3xIgkEVYsw9c14FBX",
  "https://utfs.io/f/hp9bRscWm6e9ZIA6MtOT2eFmE5gwtL8HU3vlrzn709GdfiBq",
];

export default function HomePage() {
  return (
    <main className="">
      <section className="flex flex-wrap items-center gap-4">
        {mockLinks.map((m, idx) => (
          <div key={idx}>
            <Image
              src={m}
              alt="phooto"
              height={400}
              width={300}
              className="h-80 w-80 object-cover"
            />
          </div>
        ))}
      </section>
      Hello World!
    </main>
  );
}
