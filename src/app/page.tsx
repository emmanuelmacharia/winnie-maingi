import Image from "next/image";
import FeedbackForm from "~/components/FeedbackForm";

export default function HomePage() {
  return (
    <main>
      <section className="relative flex min-h-screen w-full items-end overflow-hidden">
        {/* Hero section */}
        {/* Background Image */}
        <Image
          src="/hero-cover.png"
          alt="Winnie Maingi Hero"
          fill
          priority
          className="absolute inset-0 -z-10 object-cover object-center"
        />
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 -z-10 bg-black/40" />
        {/* Hero Content */}
        <div className="relative z-10 flex w-full flex-col justify-end px-8 pb-16">
          <h1 className="mb-6 max-w-5xl font-sans text-[5vw] leading-none font-light text-white md:text-[6rem]">
            Winnie Maingi
          </h1>
          <p className="max-w-4xl font-sans text-xl text-white md:text-2xl">
            Thought Leader in Trust and Family Law | Estate Planning
            <br />| Family Business Advisory
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-8 py-16 lg:flex-row">
        {/* About section */}
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="mb-4 text-3xl font-semibold">About the coach</h2>
          <div className="flex flex-col items-center lg:flex-row lg:gap-8">
            <div>
              <p className="w-full py-12 text-lg lg:max-w-2xl">
                Winnie Maingi is an experienced estate planner, trust
                practitioner, and lawyer specializing in trust and family law,
                estate planning, and family business advisory. She is dedicated
                to enhancing wealth preservation through innovative estate
                planning solutions, with a focus on Kenyan families and
                businesses
              </p>
            </div>
            <div>
              <p className="mt-0 w-full pt-0 text-lg lg:max-w-2xl">
                Winnie&apos;s expertise includes:
              </p>
              <ul className="list-disc pl-6 text-lg">
                <li>
                  Trust Planning: Ensuring seamless wealth transition across
                  generations
                </li>
                <li>
                  Entity Restructuring: Optimizing family business structures
                  for longevity and efficiency
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-emerald flex items-center justify-center px-8 py-16 text-white">
        {/* Feedback section aligned with about section */}
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="flex w-full flex-col gap-8 text-justify lg:w-1/2">
              <h2 className="text-yellow mb-4 text-left text-3xl font-semibold">
                We&apos;d love your feedback
              </h2>
              <p>
                We appreciate you taking part in our wealth structuring class!{" "}
                <br />
                To serve you better in future sessions, We&apos;d love your
                honest feedback.
              </p>
              <p>It only takes a minute and it means the world to us!</p>
            </div>
            <div className="w-full lg:w-1/2">
              <FeedbackForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
