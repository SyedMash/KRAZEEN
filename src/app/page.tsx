"use client";
import { useGSAP } from "@gsap/react";
import Button from "./components/ui/button/Button";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const card5Ref = useRef<HTMLDivElement>(null);
  const page3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".card", {
      opacity: 0,
      stagger: { each: 0.1, from: "random" },
      scrollTrigger: {
        trigger: mainRef.current,
        start: "10% 0%",
        end: "15% 0%",
        // markers: true,
      },
    });

    gsap.to(mainRef.current, {
      backgroundColor: "black",
      color: "white",
      scrollTrigger: {
        trigger: mainRef.current,
        start: "30% 0%",
        end: "32% 0%",
        scrub: 2,
        // markers: true,
      },
    });

    gsap.matchMedia().add("(min-width: 1024px)", () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: page3Ref.current,
          start: "0% 0%",
          end: "500% 0%",
          scrub: 5,
          // markers: true,
          pin: true,
        },
      });
      timeline
        .to(card1Ref.current, {
          right: 0,
        })
        .to(card2Ref.current, { right: 0 })
        .to(card3Ref.current, { right: 0 })
        .to(card4Ref.current, { right: 0 })
        .to(card5Ref.current, { right: 0 });
    });
  });

  return (
    <main ref={mainRef} className="bg-white">
      {/* hero section starts */}
      <div className="min-h-[95vh] w-full flex flex-col items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-red-400">
          KRAZEEN
        </h1>
        <p className="md:text-2xl 2xl:text-3xl text-center my-5 w-[90%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex soluta
          suscipit odit placeat excepturi vero magni qui optio! Optio culpa
          placeat esse doloribus cupiditate facere vero at officiis neque?
          Minima. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Omnis aliquam harum non perspiciatis voluptatem, odio molestiae
          consequatur ipsa, dignissimos, maiores ex inventore? Tenetur, aut!
          Temporibus, quasi culpa. Omnis, fugiat excepturi.
        </p>
        <div className="">
          <Button />
        </div>
      </div>
      {/* hero section ends */}

      {/* page 2 starts */}
      <div className="min-h-screen lg:min-h-[80vh] w-full flex flex-col gap-2 justify-center lg:flex-row lg:px-5">
        <div className="min-h-fit p-2 w-[90%] lg:w-[33%] lg:h-[100%] bg-black/5 mx-auto rounded-2xl card">
          <h1 className="text-2xl lg:text-4xl 2xl:text-7xl font-bold text-red-400/50 text-center my-3">
            BOX1
          </h1>
          <p className="text-center 2xl:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            facilis tempore saepe, omnis doloribus ad minima minus iste
            incidunt, ea delectus nemo, asperiores ipsam ullam adipisci at
            dolor! Ullam nisi possimus expedita odit ab quo pariatur eaque
            doloribus recusandae, reiciendis provident rem veritatis! Debitis
            porro minima ex tenetur. Pariatur tenetur tempore dolore quasi
            tempora ipsam repellat et cum. Quae, officia minus sit accusamus ut
            impedit non aut praesentium natus. Quisquam, laborum quia. Cumque
            maiores corrupti perspiciatis doloremque fugit facere nobis sapiente
            deleniti? Nostrum, odit quisquam aspernatur architecto veniam qui
            quo doloremque corrupti doloribus autem sequi obcaecati dolorem
            optio! Ipsam, omnis.
          </p>
          <img className="hidden lg:block" src="/images/makima.png" alt="" />
        </div>
        <div className="min-h-fit p-2 w-[90%] lg:w-[33%] lg:h-[100%] bg-black/5 bg-top mx-auto rounded-2xl card">
          <h1 className="text-2xl lg:text-4xl 2xl:text-7xl font-bold text-red-400/50 text-center my-3">
            BOX1
          </h1>
          <p className="text-center 2xl:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            facilis tempore saepe, omnis doloribus ad minima minus iste
            incidunt, ea delectus nemo, asperiores ipsam ullam adipisci at
            dolor! Ullam nisi possimus expedita odit ab quo pariatur eaque
            doloribus recusandae, reiciendis provident rem veritatis! Debitis
            porro minima ex tenetur. Pariatur tenetur tempore dolore quasi
            tempora ipsam repellat et cum. Quae, officia minus sit accusamus ut
            impedit non aut praesentium natus. Quisquam, laborum quia. Cumque
            maiores corrupti perspiciatis doloremque fugit facere nobis sapiente
            deleniti? Nostrum, odit quisquam aspernatur architecto veniam qui
            quo doloremque corrupti doloribus autem sequi obcaecati dolorem
            optio! Ipsam, omnis.
          </p>
          <img className="hidden lg:block" src="/images/makima.png" alt="" />
        </div>
        <div className="min-h-fit p-2 w-[90%] lg:w-[33%] lg:h-[100%] bg-black/5 bg-top mx-auto rounded-2xl card">
          <h1 className="text-2xl lg:text-4xl 2xl:text-7xl font-bold text-red-400/50 text-center my-3">
            BOX1
          </h1>
          <p className="text-center 2xl:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            facilis tempore saepe, omnis doloribus ad minima minus iste
            incidunt, ea delectus nemo, asperiores ipsam ullam adipisci at
            dolor! Ullam nisi possimus expedita odit ab quo pariatur eaque
            doloribus recusandae, reiciendis provident rem veritatis! Debitis
            porro minima ex tenetur. Pariatur tenetur tempore dolore quasi
            tempora ipsam repellat et cum. Quae, officia minus sit accusamus ut
            impedit non aut praesentium natus. Quisquam, laborum quia. Cumque
            maiores corrupti perspiciatis doloremque fugit facere nobis sapiente
            deleniti? Nostrum, odit quisquam aspernatur architecto veniam qui
            quo doloremque corrupti doloribus autem sequi obcaecati dolorem
            optio! Ipsam, omnis.
          </p>
          <img className="hidden lg:block" src="/images/makima.png" alt="" />
        </div>
      </div>
      {/* page 2 ends */}

      {/* page 3 starts */}
      <div
        ref={page3Ref}
        className="min-h-screen w-full flex flex-col gap-2 lg:flex-row items-center overflow-hidden relative"
      >
        <h1 className="hidden lg:block 2xl:text-9xl font-bold text-red-400/50">
          {"-->"}
        </h1>
        <div
          ref={card1Ref}
          className="w-[90%] h-[20vh] rounded-xl lg:rounded-none lg:absolute lg:top-0 lg:-right-full lg:w-full lg:h-full bg-[url(/images/dogdge.jpg)] bg-cover bg-center bg-no-repeat"
        ></div>
        <div
          ref={card2Ref}
          className="w-[90%] h-[20vh] rounded-xl lg:rounded-none lg:absolute lg:top-0 lg:-right-full lg:w-full lg:h-full bg-[url(/images/lambo.jpg)] bg-cover bg-center bg-no-repeat"
        ></div>
        <div
          ref={card3Ref}
          className="w-[90%] h-[20vh] rounded-xl lg:rounded-none lg:absolute lg:top-0 lg:-right-full lg:w-full lg:h-full bg-[url(/images/benz.jpg)] bg-cover bg-center bg-no-repeat"
        ></div>
        <div
          ref={card4Ref}
          className="w-[90%] h-[20vh] rounded-xl lg:rounded-none lg:absolute lg:top-0 lg:-right-full lg:w-full lg:h-full bg-[url(/images/ferar.jpg)] bg-cover bg-center bg-no-repeat"
        ></div>
        <div
          ref={card5Ref}
          className="w-[90%] h-[20vh] rounded-xl lg:rounded-none lg:absolute lg:top-0 lg:-right-full lg:w-full lg:h-full bg-[url(/images/gre.jpg)] bg-cover bg-center bg-no-repeat"
        ></div>
      </div>
      {/* page 3 ends */}
    </main>
  );
}
