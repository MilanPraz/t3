"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from "./db";
import { customers } from "./db/schema";

type TFile = {
  name: string;
  url: string;
};

export async function uploadNewQuote(file: TFile, quote: string) {
  const user = await auth();
  if (!user.userId) throw new Error("Unauthorized");
  const res = await db.insert(customers).values({
    name: file.name,
    imgUrl: file.url,
    quote: quote,
    userId: user.userId, // Ensure this is a string
  });
}
