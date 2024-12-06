import CardComponent from "./components/CardComponent";
import { MAKE_ICONS } from "./config";
import Image from "next/image";
import EngineDisplay from "./components/EngineDisplay";
import { FaSearch } from "react-icons/fa";
import FindPart from "./components/FindPart";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white mt-24">
      <div className="relative">
        <img
          className="object-center object-cover pointer-events-none absolute w-full h-full"
          src={"/home.webp?q=50"}
        />
        <section className="relative z-1 w-full bg-no-repeat bg-cover items-center lg:px-32 md:px-16 flex flex-col lg:flex-row lg:space-x-10 md:space-x-6 justify-between">
          <div className="lg:w-1/2 lg:flex lg:flex-col lg:order-1 order-2 px-2 w-full">
            <h1 className="text-white font-extrabold text-4xl lg:text-5xl md:text-5xl">
              {"Quality Used Auto Parts Online"}
            </h1>
            <h2 className="text-white text-[25px] mt-10">
              {
                "Your Reliable Online Marketplace for Used Auto Parts in the USA"
              }
            </h2>
          </div>
          <FindPart
            selectedMake={"Choose Your Car"}
            selectedPart={"Choose Part"}
          />
        </section>
      </div>

      <div className="mx-auto w-full max-w-screen-xl flex flex-col mt-10">
        <h4 className="text-[40px] font-black text-center text-text-primary">
          Special Offers - SHOP NOW!
        </h4>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 items-center justify-center px-2 gap-y-2">
          <EngineDisplay
            image="/engine.webp"
            title="Unlock Enhanced Performance: Engine Assembly Done Right!"
            subtitle="Elevate your vehicle's power with our meticulously crafted and quality-tested Used Engine Assemblies for sale. Designed to seamlessly integrate into your vehicle, our assemblies ensure optimal performance and a perfect fit."
            content="Say goodbye to compatibility worries – each assembly not only works but excels, boosting both power and efficiency. Revitalize your ride today!"
          />
          <EngineDisplay
            image="/transmission.webp"
            title="Seamless Shifting: Elevate Your Drive with Our Transmission Assemblies!"
            subtitle="Upgrade your driving experience with our precision-engineered and quality-tested Used Transmission Assemblies for sale. Designed to deliver smooth shifting and exceptional performance, our assemblies ensure a perfect fit for your vehicle."
            content="Say goodbye to compatibility concerns – each assembly not only works flawlessly but also enhances your driving pleasure and efficiency. Transform your vehicle's performance today!"
          />
        </div>
      </div>

      <div
        className="py-10 w-full flex flex-col items-center bg-cover mt-10"
        style={{ backgroundImage: "url('/home-image1.webp')" }}
      >
        <h3 className="text-white font-extrabold text-[40px] mt-5 text-center">
          Welcome to Used Auto Parts Pro – Your Premier Source for Quality
          Vehicle Components!
        </h3>
        <p className="text-white text-[24px] leading-relaxed mt-10 w-full text-center px-10 lg:px-48 md:px-36">
          Discover the pinnacle of convenience and expertise with{" "}
          <span className="font-bold italic">online used auto parts</span> and{" "}
          <span className="font-bold italic">online used car parts</span> at
          Used Auto Parts Pro. Whether you&apos;re seeking{" "}
          <span className="font-bold italic">used parts for trucks</span> or
          exploring local{" "}
          <span className="font-bold italic">
            junkyards near me that sell parts
          </span>
          , we&apos;re your go-to solution. Experience the ease of{" "}
          <span className="font-bold italic">
            junkyards near me with online inventory
          </span>{" "}
          as we redefine accessibility.
        </p>
        <p className="text-white text-[24px] leading-relaxed mt-10 w-full text-center px-10 lg:px-48 md:px-36">
          Trust meets affordability here. We blend competitive pricing with
          uncompromised value, ensuring you receive the best.
        </p>
        <p className="text-white text-[24px] leading-relaxed w-full text-center px-10 lg:px-48 md:px-36">
          Ready to step into excellence? Dial{" "}
          <span className="text-primary font-semibold">(877) 982-7774</span> to
          join the ranks of satisfied Used Auto Parts Pro customers.
        </p>
        <p className="text-white text-[24px] leading-relaxed mt-10 w-full text-center px-10 lg:px-48 md:px-36">
          Elevate your auto parts journey today – where quality and convenience
          collide!
        </p>
      </div>

      <div className="w-full flex flex-col bg-[#F6F6F6] py-10">
        <h4 className="text-[40px] font-black text-center text-text-primary">
          Why Choose Us?
        </h4>
        <p className="text-[18px]  text-center text-text-primary">
          Elevate your experience with Used Auto Parts Pro! Seamless buying,
          worry-free service, and a touch of professionalism redefine your
          journey. Choose us for quality and satisfaction, every step of the
          way.
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2  w-full mt-5 grid-cols-1 lg:gap-y-3 md:gap-y-3">
          <CardComponent
            image="/warranty.webp"
            title="Guaranteed Parts"
            subtitle="Experience true peace of mind with our 90-day warranty. Selected parts enjoy this standard coverage, and for added confidence, explore our competitively priced extended warranty options. Drive with assurance – choose Used Auto Parts Pro!"
          />

          <CardComponent
            image="/free-shipping.webp"
            title="We Offer Free Shipping"
            subtitle="Seamless shipping, zero cost! Enjoy free shipping across the continental 48 states, courtesy of Used Auto Parts Pro. Your convenience, our commitment – delivered right to your doorstep."
          />

          <CardComponent
            image="/replacement.webp"
            title="We Offer Easy Replacements"
            subtitle="Relax, we've got your back. Embrace peace of mind with our hassle-free returns and replacements. Your satisfaction, our priority!"
          />

          <CardComponent
            image="/reliability.webp"
            title="We Offer Reliability"
            subtitle="Count on us for reliability. Our commitment shines through in every quality used OEM Auto Part, from engines to transmissions. Your vehicle's heart, our expertise!"
          />

          <CardComponent
            image="/pricing.webp"
            title="We Offer Competitive Pricing."
            subtitle="Unlock affordability with us. Our products boast competitive pricing, perfectly aligned with your budget. Elevate your ride without breaking the bank!"
          />

          <CardComponent
            image="/search.webp"
            title="We Search All Brands"
            subtitle="We explore every brand, year, make, and model. Have a question? Reach out at (877) 982-7774. Your ultimate vehicle solution!"
          />
        </div>
      </div>

      <div className="w-full mx-auto max-w-screen-xl flex flex-row mt-10 items-center">
        <FaSearch size={18} color="#002E5B" className="search-icon" />
        <h4 className="font-sans text-[#002E5B] text-[20px] font-bold uppercase ml-2">
          SEARCH BY CAR MAKE
        </h4>
      </div>

      <div className="w-full mx-auto max-w-screen-xl mt-5">
        <div className="mx-5 grid grid-cols-4 lg:grid-cols-5 md:grid-cols-5 gap-x-5 lg:gap-x-28 md:gap-x-14 gap-y-5">
          {MAKE_ICONS.map((item, index) => (
            <div key={index}>
              <div className="w-50 py-5 items-center flex flex-col w-50 h-50">
                <Image
                  src={item[0]}
                  width={70}
                  height={70}
                  alt="Image"
                  className="w-auto h-auto"
                />
                <p className="text-text-primary mt-2">{item[1]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="w-full flex flex-col bg-[#F6F6F6] py-10 mt-10"
        id="testimonials"
      >
        <h4 className="text-[40px] font-black text-center text-text-primary">
          Testimonial
        </h4>
        <div className="flex flex-row flex-wrap space-y-2 justify-between mt-5">
          <div className="relative min-w-[340px] h-80 lg:mt-0 md:mt-0 max-w-sm p-6 bg-[rgb(208,208,208)] rounded-lg flex flex-col mx-auto">
            <p className="mb-3 font-normal text-text-primary text-[16px]">
              <span className="font-bold italic">Heidi Gardner from TX</span>{" "}
              here! I can&apos;t express how thrilled I am with the motor I got.
              It runs like a dream, and my mechanic was impressed with how clean
              and low-mileage it was under the valve covers. Used Auto Parts Pro
              came through for me, and I wouldn&apos;t think twice about
              choosing them again if I ever need another engine. Top-notch
              quality and service all the way!
            </p>
          </div>

          <div className="relative min-w-[340px] h-80 lg:mt-0 md:mt-0 max-w-sm p-6 bg-[rgb(208,208,208)] rounded-lg flex flex-col mx-auto">
            <p className="mb-3 font-normal text-text-primary text-[16px]">
              Used Auto Parts Pro deserves nothing less than a perfect 10 in my
              book.{" "}
              <span className="font-bold italic">Mateo Apaestegui from PA</span>{" "}
              here, and I&apos;m thoroughly impressed. The level of dedication
              your team put into ensuring my order was accurate and delivered on
              time is commendable. You&apos;ve won my trust and loyalty. Kudos
              to Used Auto Parts Pro for setting a new standard of excellence!
            </p>
          </div>

          <div className="relative min-w-[340px] h-80 lg:mt-0 md:mt-0 max-w-sm p-6 bg-[rgb(208,208,208)] rounded-lg flex flex-col mx-auto">
            <p className="mb-3 font-normal text-text-primary text-[16px]">
              <span className="font-bold italic">Robert S from NY</span> here,
              and I want to shout from the rooftops about my 100% satisfaction
              with your company. When it comes to accuracy and representation,
              you&apos;ve aced it. On a scale of 1 to 10, there&apos;s no doubt
              – you&apos;re a solid 10. Used Auto Parts Pro, you&apos;ve earned
              my unwavering trust and admiration!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
