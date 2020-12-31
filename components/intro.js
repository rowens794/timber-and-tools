import Image from "next/image";
import Link from "next/link";

const LOGO_WIDTH = 200;

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <Link href="/">
        <a>
          <Image
            src="https://images.prismic.io/timber-tools/a22b9197-fc1b-441a-aa11-db434723bfc5_logo-black.png"
            alt="Timber & Tools"
            width={LOGO_WIDTH}
            height={0.63666666666 * LOGO_WIDTH}
          />
        </a>
      </Link>

      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">A place where builders can build together.</h4>
    </section>
  );
}
