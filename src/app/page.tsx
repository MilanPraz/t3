import { db } from "~/server/db";
import { QuoteCard } from "./_components/QuoteCard";
// import { QuoteCard } from "../components/QuoteCard";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const allCustomers = await db.query.customers.findMany();

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-12 text-center text-4xl font-bold text-white">
          Inspiring Quotes
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {allCustomers.map((customer, idx) => (
            <QuoteCard
              key={idx}
              imgUrl={customer.imgUrl!}
              quote={customer.quote}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
