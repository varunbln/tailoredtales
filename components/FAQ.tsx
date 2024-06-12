"use client";

export default function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "What topics can I create podcasts for?",
      answer:
        "Our platform lets users create personalized podcasts for any topic they're interested in - anything at all.",
    },
    {
      id: 2,
      question: "What do I do if I don't like the AI voice?",
      answer:
        "We have several different AI voices to choose from, just pick what you like!",
    },
    {
      id: 3,
      question: "Is there a free trial to test it out?",
      answer:
        "Yes, there's a free plan for users to test out our product and see if they like it.",
    },
    {
      id: 4,
      question: "How can I switch between different listening plans?",
      answer:
        "You can easily switch between plans through your account settings. Upgrade or modify your plan anytime to fit your listening needs.",
    },
    {
      id: 5,
      question: "Can I download podcasts to listen offline?",
      answer:
        "Yes, with our Pro and Ultimate plans, you can download your favorite podcasts and enjoy them offline, anytime, anywhere.",
    },
    {
      id: 6,
      question: "Are there any ads in the podcasts?",
      answer:
        "All plans have no ads at all, to provide an uninterrupted, ad-free listening experience.",
    },
  ];

  const faqItemClass = (index: number, mobile: boolean = false) => {
    if (mobile) {
      if (index !== 5) return "custom-border-no-bottom";
      return "custom-border";
    }
    if (index === 0 || index === 2) {
      return "custom-border-no-bottom";
    } else if (index === 4) {
      return "custom-border";
    } else if (index === 1 || index === 3) {
      return "custom-border-no-bottom-left";
    } else if (index === 5) {
      return "custom-border-no-left";
    }
  };

  return (
    <section className="w-full" id="faq">
      <div className="mx-auto w-full max-w-7xl box-border px-10 mb-8 flex flex-col justify-between items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-300 md:text-base">
          Here&apos;s some questions frequently asked by our customers
        </p>
        <div className="hidden invisible w-full md:visible md:grid grid-cols-2 grid-rows-3 m-12">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={
                "flex flex-col justify-start py-8 px-12 " + faqItemClass(index)
              }
            >
              <h4 className="text-lg font-semibold text-white">
                {faq.question}
              </h4>
              <p className="text-zinc-300">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="md:hidden md:invisible w-full m-6">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={
                "flex flex-col justify-start py-8 px-12 " +
                faqItemClass(index, true)
              }
            >
              <h4 className="text-lg font-semibold text-white">
                {faq.question}
              </h4>
              <p className="text-zinc-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
