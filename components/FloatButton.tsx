import Image from "next/image";
import Link from "next/link";

const FloatButton = () => {
  return (
    <div className="sticky bottom-8 right-8 z-50">
      <button className="btn-primary shadow-lg hover:scale-105 transition-transform duration-300">
          <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
          <Link href="/companions/new">
            <p className="text-white">New</p>
          </Link>
        </button>
    </div>
  )
}

export default FloatButton
