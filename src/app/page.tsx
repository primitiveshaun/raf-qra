import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white sm:items-start">
        {/* RAF Logo */}
        <Image
          src="/assets/brand/raf-logo-blue.svg"
          alt="RAF logo"
          width={200}
          height={88}
          priority
        />

        {/* Intro */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-h1 text-dark">Hello There!</h1>

          <p className="text-body max-w-md text-dark">
            Click the button below to see the Next.js RAF demo.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="/qra"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-blue px-5 text-white no-underline transition-opacity hover:opacity-80 md:w-[158px]"
          >
            View Demo
          </a>

          <a
            href="https://github.com/primitiveshaun/raf-qra"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-full items-center justify-center rounded-full border border-gray px-5 text-dark transition-opacity hover:opacity-70 md:w-[158px]"
          >
            Github Repo
          </a>
        </div>
      </main>
    </div>
  );
}
