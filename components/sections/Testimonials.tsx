"use client";

const reviews = [
  {
    quote:
      "First Class did an outstanding job replacing our roof. The crew was professional, showed up when they said they would, and cleaned up completely when finished. We couldn't be happier with the quality of the work.",
    name: "Carlos A.",
    location: "Okotoks, AB",
  },
  {
    quote:
      "Had my siding and gutters replaced. The team was knowledgeable and easy to communicate with throughout the whole project. I would absolutely recommend them to anyone in the Calgary area looking for quality exterior work.",
    name: "Jennifer M.",
    location: "Calgary, AB",
  },
  {
    quote:
      "Used First Class for a commercial flat roof repair and they delivered on time and on budget. They navigated some tricky complications without any drama. Great company to work with for larger projects.",
    name: "Robert T.",
    location: "Calgary, AB",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-[#F0EFEC] py-20 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-[#C9A84C] text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-3">
            Customer Reviews
          </p>

          <h2 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl text-[#0F1923] leading-[0.98] tracking-tight">
            What Our
            <br />
            <span className="text-[#C9A84C]">Customers Say.</span>
          </h2>

          <p className="text-[#6B7B8D] text-sm sm:text-base leading-7 mt-5 max-w-xl">
            From residential repairs to larger commercial projects, our
            reputation is built on quality workmanship, clear communication, and
            dependable service.
          </p>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {reviews.map(({ quote, name, location }, index) => (
            <article
              key={name}
              className="
                group
                relative
                bg-white
                border border-[#E5E1D9]
                rounded-[9px]
                p-7 sm:p-8
                flex flex-col
                min-h-[320px]
                overflow-hidden
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_20px_50px_rgba(15,25,35,0.08)]
              "
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-7">
                <span className="font-display text-5xl leading-none text-[#C9A84C]/30">
                  “
                </span>

                <span className="text-[#C9A84C] text-xs font-bold tracking-[0.16em]">
                  5.0
                </span>
              </div>

              {/* Quote */}
              <p className="text-[#1C2B3A] text-sm sm:text-[15px] leading-7 flex-1">
                “{quote}”
              </p>

              {/* Divider */}
              <div className="border-t border-[#E5E1D9] mt-7 pt-5 flex items-end justify-between gap-4">
                <div>
                  <div className="text-[#0F1923] font-semibold text-sm">
                    {name}
                  </div>

                  <div className="text-[#6B7B8D] text-xs tracking-wide mt-1">
                    {location}
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 shrink-0">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="text-[#C9A84C] text-sm"
                      aria-hidden="true"
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              {/* Gold hover accent */}
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#C9A84C] group-hover:w-full transition-all duration-500" />
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-12 pt-7 border-t border-[#D9D4C9] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <p className="text-[#6B7B8D] text-sm">
            Ready to experience the First Class difference?
          </p>

          <a
            href="#estimate"
            style={{ borderRadius: "9px" }}
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              bg-[#0F1923]
              text-white
              px-6
              py-3.5
              text-xs
              font-bold
              tracking-[0.14em]
              uppercase
              hover:bg-[#C9A84C]
              hover:text-[#0F1923]
              transition-all
              duration-300
              w-fit
            "
          >
            Request an Estimate
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
