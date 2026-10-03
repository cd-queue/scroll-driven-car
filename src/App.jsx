import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import carImage from "./assets/obcar.png";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const carRef = useRef(null);
  const trailRef = useRef(null);
  const headlineRef = useRef(null);

  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const car = carRef.current;
      const trail = trailRef.current;
      const headline = headlineRef.current;

      const letters = gsap.utils.toArray(".value-letter");

      const carWidth = car.offsetWidth;
      const endX = window.innerWidth - carWidth * 0.3;

      const headlineRect = headline.getBoundingClientRect();

      const letterPositions = letters.map(
        (letter) =>
          headlineRect.left + letter.offsetLeft
      );

      gsap.set(trail, {
        width: 0,
      });

      gsap.set(letters, {
        opacity: 0,
      });

      gsap.set(
        [
          box1Ref.current,
          box2Ref.current,
          box3Ref.current,
          box4Ref.current,
        ],
        {
          opacity: 0,
        }
      );


      gsap.to(car, {
        x: endX,

        ease: "none",

        scrollTrigger: {
          trigger: sectionRef.current,

          start: "top top",

          end: "bottom top",

          scrub: true,

          pin: trackRef.current,

          anticipatePin: 1,

          onUpdate: () => {
            const carX = Number(
              gsap.getProperty(car, "x")
            );

            const carCenter =
              carX + carWidth / 5;

            gsap.set(trail, {
              width: carCenter,
            });

            letters.forEach((letter, index) => {
              const letterX =
                letterPositions[index];

              gsap.set(letter, {
                opacity:
                  carCenter >= letterX ? 1 : 0,
              });
            });
          },
        },
      });



      gsap.to(box1Ref.current, {
        opacity: 1,


        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top+=300 top",
          end: "top+=700 top",
          scrub: true,
        },
      });

      gsap.to(box2Ref.current, {
        opacity: 1,

        scrollTrigger: {
          trigger: sectionRef.current,

          start: "top+=500 top",

          end: "top+=650 top",

          scrub: true,
        },
      });


      gsap.to(box3Ref.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: sectionRef.current,

          start: "top+=750 top",

          end: "top+=900 top",

          scrub: true,
        },
      });

      gsap.to(box4Ref.current, {
        opacity: 1,

        scrollTrigger: {
          trigger: sectionRef.current,

          start: "top+=1000 top",

          end: "top+=1150 top",

          scrub: true,
        },
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="text-black">


      <section
        ref={sectionRef}
        className="relative h-[200vh]"
      >

        <div
          ref={trackRef}
          className="
            relative
            h-screen
            w-full
            overflow-hidden
          "
        >

          <div
            className="
              absolute
              left-0
              top-1/2

              w-full
              h-[220px]

              -translate-y-1/2

              bg-black
            "
          >

            <div
              ref={trailRef}
              className="
                absolute
                left-0
                top-0

                h-full
                w-0

                bg-[#40d677]
              "
            />

            <div
              ref={headlineRef}
              className="
                absolute
                left-1/2
                top-1/2

                z-20

                -translate-x-1/2
                -translate-y-1/2

                whitespace-nowrap

                text-[70px]
                md:text-[120px]
                lg:text-[150px]

                font-bold

                tracking-[0.06em]

                text-black
              "
            >

              <span className="value-letter">
                W
              </span>

              <span className="value-letter">
                E
              </span>

              <span className="value-letter">
                L
              </span>

              <span className="value-letter">
                C
              </span>

              <span className="value-letter">
                O
              </span>

              <span className="value-letter">
                M
              </span>

              <span className="value-letter">
                E
              </span>

              <span className="value-letter">
                &nbsp;
              </span>

              <span className="value-letter">
                I
              </span>

              <span className="value-letter">
                T
              </span>

              <span className="value-letter">
                Z
              </span>

              <span className="value-letter">
                F
              </span>

              <span className="value-letter">
                I
              </span>

              <span className="value-letter">
                Z
              </span>

              <span className="value-letter">
                Z
              </span>

            </div>

            <div
              ref={carRef}
              className="
                absolute
                left-0
                top-1/2

                z-30

                -translate-y-1/2
              "
            >

              <img
                src={carImage}
                alt="Car"

                className="
                  block

                  w-[450px]
                  h-auto
                "
              />

            </div>

          </div>


          <div
            ref={box1Ref}
            className="
              absolute

              top-[10%]
              right-[30%]

              z-40
            rounded-[10px]
             bg-[#def54f]
             text-[#111]
             text-[20px]
            p-[30px]
            "
          >
            <div className="mt-3 text-6xl font-bold">
              58%
            </div>

            <p className="mt-3 leading-6">
              Increase in pickup point use
            </p>

          </div>

          <div
            ref={box2Ref}
            className="
              absolute

              top-[10%]
              right-[10%]

              z-40

              rounded-[10px]
             bg-[#333]
             text-[#fff]
             text-[20px]
            p-[30px]
            "
          >

            <div className="mt-3 text-6xl font-bold">
              23%
            </div>

            <p className="mt-3 leading-6">
              Increase in pickup point use
            </p>

          </div>


          <div
            ref={box3Ref}
            className="
              absolute

              top-[70%]
              right-[33%]

              z-40

            rounded-[10px]
             bg-[#6ac9ff]
             text-[#111]
             text-[20px]
            p-[30px]
            "
          >

            <div className="mt-3 text-6xl font-bold">
              27%
            </div>

            <p className="mt-3 leading-6">
              Decreased in customer phone calls

            </p>

          </div>


          <div
            ref={box4Ref}
            className="
              absolute

              top-[70%]
              right-[10%]

              z-40

             rounded-[10px]
             bg-[#fa7328]
             text-[#111]
             text-[20px]
            p-[30px]
             
            "
          >

            <div className="mt-3 text-6xl font-bold">
              40%
            </div>

            <p className="mt-3 leading-6">
              Decreased in customer phone calls
            </p>

          </div>

        </div>
      </section>
    </main>
  );
}

export default App;