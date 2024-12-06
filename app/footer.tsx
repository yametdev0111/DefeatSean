import { FOOTER } from "./config";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="mx-auto w-full max-w-screen-xl grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3">
        {FOOTER.map((section, index) => (
          <div className="text-center mt-8" key={index}>
            <p className="text-white text-[15px] font-semibold">
              {section.title}
            </p>
            {section.content.map((content, index) => (
              <p className="text-white text-sm mt-3" key={index}>
                <span>{content}</span>
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="mx-auto w-full max-w-screen-xl mt-10 items-center text-center">
        <p className="text-[15px] text-white font-semibold">
          PAY SECURELY WITH
        </p>
        <div className="flex flex-row space-x-1 items-center justify-center">
          <Image src={"/visa-icon.svg"} width={72} height={72} />
          <Image src={"/discover-icon.svg"} width={72} height={72} />
          <Image src={"/mastercard-icon.svg"} width={72} height={72} />
          <Image src={"/paypal-icon.svg"} width={72} height={72} />
        </div>
      </div>
    </footer>
  );
}
