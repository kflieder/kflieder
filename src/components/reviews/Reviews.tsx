"use client";

import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import ImageCard from "./ImageCard";

type Review = {
  author?: string;
  rating?: number;
  text?: string;
  time?: string;
  photo?: string;
  images?: string[]; 
};


export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const reviewImages = [
    "/brookeReview.png",
  ]

  const totalSlides = (reviews.length ?? 0) + (reviewImages.length ?? 0);

  

  useEffect(() => {
    fetch("/api/google")
      .then((res) => res.json())
      .then((data) => {
        setReviews(Array.isArray(data.reviews) ? data.reviews : []);
        setLoading(false);
      });
  }, []);

  // useEffect(() => {
  //   if (totalSlides === 0) return;

  //   const interval = setInterval(() => {
  //     setActiveIndex((prev) => prev === totalSlides - 1 ? 0 : prev + 1);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [totalSlides]);

  if (loading) return <div className='flex w-full justify-center items-center'><div className='loader'></div></div>;

return (
  <div className="relative w-full overflow-hidden">
    <div
      className="flex items-center transition-transform duration-700 ease-in-out"
      style={{ transform: `translateX(-${activeIndex * 100}%)` }}
    >
      {reviews.map((review, index) => (
        <div
          key={`google-${index}`}
          className="w-full shrink-0 px-4"
        >
          <ReviewCard
            author={review.author}
            rating={review.rating}
            text={review.text}
            time={review.time}
          />
        </div>
      ))}

      {reviewImages.map((src, index) => (
        <div
          key={`image-${index}`}
          className="w-full shrink-0 px-4"
        >
          <ImageCard src={src} />
        </div>
      ))}
    </div>
  </div>
);



}
