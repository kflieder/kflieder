"use client";

export default function ShareButton({ title }: { title: string }) {
  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      await navigator.share({
        title,
        text: "Check out this article!",
        url,
      });
    } else {
      navigator.clipboard.writeText(url);
      alert("Link copied!");
    }
  };

  return (
    <button onClick={handleShare} className="text-sm underline">
      Share 🔗
    </button>
  );
}
