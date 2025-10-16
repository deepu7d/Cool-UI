"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

type Card = {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
};

const cards: Card[] = [
  {
    id: "card-1",
    category: "Core Feature",
    title: "Dynamic Content Rendering",
    description:
      "Leverage server-side capabilities for blazing-fast page loads and optimal SEO performance.",
    content:
      "Our architecture allows for rendering content dynamically on the server based on user requests. This ensures that the initial HTML sent to the browser is fully populated, which is crucial for search engine crawlers and provides a near-instantaneous first paint for users. It also reduces the amount of JavaScript needed on the client-side, further boosting performance.",
  },
  {
    id: "card-2",
    category: "API Integration",
    title: "Seamless API Connectivity",
    description:
      "Integrate with any third-party service using our robust and flexible API gateway.",
    content:
      "The API gateway is designed for high availability and low latency. It supports REST, GraphQL, and gRPC protocols out-of-the-box. Built-in authentication, rate limiting, and caching layers protect your backend services and ensure a smooth experience for developers and end-users. Detailed logging and monitoring provide full visibility into your API traffic.",
  },
  {
    id: "card-3",
    category: "Performance",
    title: "Global Edge Network",
    description:
      "Serve content from the edge, closer to your users, for unparalleled speed and reliability.",
    content:
      "By deploying your static assets and serverless functions to our global edge network, you can significantly reduce latency. User requests are automatically routed to the nearest data center. This not only improves speed but also enhances reliability by distributing traffic and providing resilience against regional outages. The network includes powerful caching and DDoS protection.",
  },
];

export default function Cards() {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center p-4 font-sans">
      {/* Main cards list */}
      <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            layoutId={card.id}
            onClick={() => setSelectedCard(card)}
            className="bg-light 700 relative cursor-pointer rounded-lg p-6 shadow-xl transition-shadow duration-300 hover:shadow-xl hover:shadow-neutral-900/50"
          >
            <h2 className="mb-1 text-xl font-semibold text-neutral-100">
              {card.title}
            </h2>
            <p className="text-neutral-400">{card.description}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCard && (
          <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Expanded Card */}
            <motion.div
              transition={{ duration: 0.2, ease: "easeInOut" }}
              layoutId={selectedCard.id}
              className="bg-light relative z-10 max-w-sm rounded-lg p-8 shadow-2xl"
            >
              <motion.button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-200"
                aria-label="Close"
              >
                <X size={24} />
              </motion.button>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="mb-6 flex items-center space-x-4">
                  <div>
                    <p className="text-sm text-neutral-400">
                      {selectedCard.category}
                    </p>
                    <h2 className="text-3xl font-bold text-neutral-100">
                      {selectedCard.title}
                    </h2>
                  </div>
                </div>
                <div className="prose prose-invert max-w-none text-neutral-300">
                  {selectedCard.content}
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
