"use client";
import React, { useRef, useEffect } from "react";

function MatrixBanner() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const drops: any = [];
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const fontSize = 24;
    const columns = canvas.width / fontSize;

    for (let i = 0; i < columns; i++) {
      drops[i] = (Math.random() * canvas.height) / fontSize;
    }

    const matrixChars =
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+[]{}|;:",.<>?/`~';

    function getRandomChar() {
      return matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
    }

    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.font = `${fontSize}px monospace`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00FF00";

    let splatterTime = 0;
    function drawMatrix(time: number) {
      if (!ctx) return;
      if (!canvas) return;
      ctx.fillStyle = "rgba(0,0,0,0.8)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00FF00";
      for (let i = 0; i < columns; i++) {
        const char = getRandomChar();
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        drops[i] += 0.1;
        if (drops[i] * fontSize > canvas.height) {
          drops[i] = 0;
        }
      } 
     
      if (time - splatterTime > 800) {
        // every 0.8s
        for (let k = 0; k < 5; k++) {
          const col = Math.floor(Math.random() * columns);
          const char = getRandomChar();
          ctx.fillText(char, col * fontSize, drops[col] * fontSize);
          drops[col] += 0.1; // let it fall slightly
        }
        splatterTime = time;
      }
      
    }
    let lastTime = 0;

    function animate(time: number) {
      if (time - lastTime > 75) {
        // ~20fps
        drawMatrix(time);
        lastTime = time;
      }
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full rounded-xl overflow-hidden"></canvas>;
}

export default MatrixBanner;
