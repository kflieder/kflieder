type ImageCardProps = {
  src: string;
  alt?: string;
};

export default function ImageCard({ src, alt }: ImageCardProps) {
  return (
    <div className="review-card">
      <img
        src={src}
        alt={alt || "Review screenshot"}
        style={{ width: "100%", borderRadius: "12px" }}
      />
    </div>
  );
}
