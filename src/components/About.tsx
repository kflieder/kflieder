import React from "react";

function About() {
  return (
    <div className="border p-3 border-white/40 rounded-xl h-[60vh] overflow-auto scrollbar-hide text-white/80 bg-gradient-to-b from-white/5 to-transparent">
      <img
        className="w-32 mb-1 h-auto rounded-full float-left mr-6 border p-1"
        src="/ProfilePic.png"
        alt="Kacey Flieder"
      />
      <p className="tracking-wide pt-8">
        Hey! I’m Kacey, a full stack developer, artist, and all-around creative
        human currently based in Mexico. I’ve always been fascinated by
        technology, but it wasn’t until I moved to Mexico that I finally had the
        space, time, and energy to really dive into coding.
        <br /><br /> I started by
        building free websites for local businesses and friends, and quickly
        realized that creating digital experiences is where my passion truly
        comes alive. Now, I freelance full-time, helping others bring their
        ideas to life through clean design and functional web
        apps. 
        <br /> <br /> When I’m not coding, you’ll probably find me sketching in
        charcoal, experimenting with pastel and paint, or jamming out on an
        instrument. I play saxophone and trombone (though it’s been a while 😅),
        and lately I’ve been learning to play drums — because apparently, rhythm
        follows me everywhere. I’m also a language nerd, both human and
        computer. I’m fairly fluent in Spanish (getting better every day), and I
        love how coding languages and spoken languages both shape the way we
        think and connect with others.
      </p>
    </div>
  );
}

export default About;
