"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { uploadNewQuote } from "~/server/queries";
import { UploadButton, UploadDropzone } from "~/utils/uploadthings";

export default function Page() {
  const router = useRouter();
  const [quote, setQuote] = useState("");
  const [image, setImage] = useState({ name: "", url: "" });
  async function handleUpload(file: any) {
    console.log("FILEEE:", file);
    const upload = {
      name: await file?.name,
      url: await file?.url,
    };
    setImage(upload);
    console.log("UPLOADDD:", upload);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("IMAGE FILE:", image);

    const res = await uploadNewQuote(image, quote);

    console.log("RES after upload:", res);
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="relative z-40 flex h-[100vh-100px] min-h-screen flex-col items-center justify-center gap-8 px-8 py-40">
        <textarea
          onChange={(e) => setQuote(e.target.value)}
          value={quote}
          placeholder="Write your quote here"
          className="h-40 w-full rounded-sm border border-dashed bg-transparent p-2 text-white"
        />
        <UploadDropzone
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
        {!image.name && (
          <p className="text-red-200">Upload the above image first.</p>
        )}
        <button
          disabled={!image.name}
          className="rounded-md border p-2 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
