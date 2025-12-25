type ReviewCardProps = {
  author?: string;
  rating?: number;
  text?: string;
  time?: string;
};

export default function ReviewCard({
  author,
  rating,
  text,
  time,
}: ReviewCardProps) {
  return (
    <div className="flex flex-col gap-2 border rounded border-white/50 p-4 bg-white/5 shadow-md min-h-[200px] text-lg">
      <div className='flex justify-between items-center mb-2 border-b pb-2 border-white/50'>
        <strong>{author}</strong>
        {rating && (
          <div className="flex items-center gap-1">
            {Array.from({ length: Math.round(rating) }).map((_, i) => (
              <span key={i} className="text-yellow-400">
                ★
              </span>
            ))}
            <span className="text-sm text-white/60 ml-1">{rating}</span>
          </div>
        )}
      </div>

      {text && <p>{text}</p>}
      {time && <small>{time}</small>}
      <a href="https://share.google/TWObAsOPtaiLha5Gq" target="_blank" className="underline underline-offset-2 cursor-pointer">
        Google Reviews
      </a>
    </div>
  );
}
