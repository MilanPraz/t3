import Image from "next/image";

interface QuoteCardProps {
  imgUrl: string;
  quote: string;
}

export function QuoteCard({ imgUrl, quote }: QuoteCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl p-6 transition-all hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-75 transition-opacity group-hover:opacity-100" />
      <div className="relative z-10 flex flex-col items-center space-y-4 text-white">
        <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-lg">
          <Image
            src={imgUrl}
            alt="Author"
            width={80}
            height={80}
            className="h-full w-full object-cover"
          />
        </div>
        <blockquote className="text-center text-lg font-medium italic">
          "{quote}"
        </blockquote>
      </div>
    </div>
  );
}
