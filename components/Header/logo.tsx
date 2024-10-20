import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <h2 className="text-3xl font-bold hover:text-orange-500 cursor-pointer duration-300">
          bazaar.
        </h2>
      </Link>
    </div>
  );
};

export default Logo;