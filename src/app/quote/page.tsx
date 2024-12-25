"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { uploadNewQuote } from "~/server/queries";
import { UploadButton } from "~/utils/uploadthings";

export default function Page() {
  const router = useRouter();
  const [quote, setQuote] = useState("");
  async function handleUpload(file: any) {
    console.log("FILEEE:", file);
    const upload = {
      name: await file?.name,
      url: await file?.url,
    };
    console.log("UPLOADDD:", upload);

    const res = await uploadNewQuote(upload, quote);

    console.log("RES after upload:", res);
  }

  return (
    <div className="flex h-[100vh-100px] flex-col items-center justify-center gap-8 px-8 py-40">
      <textarea
        onChange={(e) => setQuote(e.target.value)}
        value={quote}
        placeholder="Write your quote here"
        className="h-40 w-full rounded-sm border border-dashed bg-transparent p-2 text-white"
      />
      <UploadButton
        endpoint={"imageUploader"}
        onUploadError={(error) => {
          console.error("Client-side upload error:", error);
        }}
        onClientUploadComplete={async (data) => {
          console.log("RESSSS:", data);
          await handleUpload(data[0]);
          //   uploadNewQuote(data[0])
        }}
      />
    </div>
  );
}
