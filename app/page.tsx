"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Texture from "@/assets/Textures.svg";
import TitanLogo from "@/assets/TitanLogo.svg";
import TextureOverlay from "@/assets/logo-outline.svg";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";
import gsap from "gsap";
import { ShinyButton } from "@/components/magicui/shiny-button";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate background overlays
      gsap.from(".bg-texture", {
        opacity: 0,
        scale: 1.2,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.from(".overlay-texture", {
        opacity: 0,
        duration: 1.5,
        delay: 0.3,
        ease: "power2.out",
      });

      // Animate logo
      gsap.from(".logo", {
        y: -50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "back.out(1.7)",
      });

      // Animate heading
      gsap.from(".heading", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
      });

      // Animate feature card
      gsap.from(".feature-card", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 1.2,
        ease: "power3.out",
      });

      // Animate buttons (stagger)
      gsap.from(".cta-btn", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 1.6,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="py-20 bg-gradient-to-br from-primary to-background w-screen min-h-screen relative flex items-center justify-center px-5 md:px-12 lg:px-16 xl:px-24"
    >
      <Image
        src={Texture}
        alt="Texture Background"
        sizes="100%"
        priority
        fill
        draggable={false}
        className="bg-texture h-full w-full object-cover mix-blend-color-dodge absolute z-0"
      />
      <Image
        src={TextureOverlay}
        alt="Texture Overlay"
        sizes="100%"
        priority
        fill
        draggable={false}
        className="overlay-texture h-full w-full object-cover object-center mix-blend-color-dodge absolute z-10"
      />
      <div className="relative z-20 text-center flex flex-col items-center justify-center gap-9">
        <div>
          <div>
            <Image
              src={TitanLogo}
              alt="Titan Logo"
              sizes="100%"
              priority
              className="logo h-12 md:h-16 w-auto mx-auto"
            />
          </div>
          <h1 className="heading text-2xl md:text-4xl lg:text-5xl font-sans text-white font-semibold">
            The fastest. Highest rewarding. Lowest trading fee. Telegram trading
            bot in history.
          </h1>
        </div>

        <ShinyButton className="feature-card py-7 border-1 rounded-4xl md:rounded-[55px] bg-gradient-to-br from-[#FA9543]/15 to-[#E26500]/15 border-foreground px-8 md:px-12 max-w-3xl font-mono">
          <h3 className="font-semibold text-xl md:text-2xl font-mono">
            Multi-chain & Non-custodial
          </h3>
          <p className="text-base md:text-xl font-mono">
            Trade across multiple chains seamlessly while keeping full control
            of your assets
          </p>
        </ShinyButton>

        <div className="text-background font-mono flex flex-col md:flex-row items-center w-full md:w-fit max-w-3xl justify-between gap-5 md:gap-10">
          <Link
            href={"https://x.com/titantradingbot?s=21"}
            className="cta-btn py-7 w-full md:w-fit px-10 text-2xl flex items-center justify-center gap-2 border-1 rounded-[55px] bg-gradient-to-br from-[#FA9543] to-[#E26500] border-foreground"
          >
            <FaXTwitter />
            <span>Follow on X</span>
          </Link>

          <Link
            href={""}
            className="cta-btn py-7 w-full md:w-fit px-10 text-2xl flex items-center justify-center gap-2 border-1 rounded-[55px] bg-gradient-to-br from-[#FA9543] to-[#E26500] border-foreground"
          >
            <RiTelegram2Fill />
            <span>Join Telegram</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
