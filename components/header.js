import Image from "next/image";
import Link from "next/link";

const LOGO_WIDTH = 200;

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
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
    </h2>
  );
}
