import { db } from "~/server/db";
import { QuoteCard } from "./_components/QuoteCard";
import { getAllQuote } from "~/server/queries";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const allCustomers = await getAllQuote();

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.1),transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <h1 className="mb-12 text-center text-4xl font-bold text-white drop-shadow-lg">
          Inspiring Quotes
        </h1>
        <div className="grid w-full place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {allCustomers.map((customer, idx) => (
            <QuoteCard
              key={idx}
              imgUrl={customer.imgUrl!}
              quote={customer.quote}
            />
          ))}
        </div>
        {allCustomers.length == 0 && (
          <div className="flex w-full items-center justify-center">
            <Link
              href={"/quote"}
              className="rounded-md border bg-gray-200 p-2 text-center text-4xl font-semibold text-purple-700"
            >
              Add your quotes
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
