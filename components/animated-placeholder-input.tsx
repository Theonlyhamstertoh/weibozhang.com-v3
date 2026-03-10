import { useEffect, useState } from "react";

export function AnimatedPlaceholderInput({
  query,
  setQuery,
}: {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}) {
  const placeholders = [
    "Tabs or spaces?",
    "What's your tech stack?",
    "Coffee or tea?",
    "How did you get into coding?",
    "What's your hot take?",
    "What are you building right now?",
    "Pineapple on pizza — yes or no?",
    "What's your dream project?",
    "Go ahead, I don't bite",
    "What's your guilty pleasure snack?",
    "Favorite tool in your workflow?",
    "Ask me anything...",
  ];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (query) return; // stop animating when user types

    const full = placeholders[placeholderIndex];
    let charIndex = 0;

    // Typewriter effect
    const typeTimer = setInterval(() => {
      setDisplayText(full.slice(0, charIndex + 1));
      charIndex++;
      if (charIndex >= full.length) clearInterval(typeTimer);
    }, 60);

    // Move to next placeholder after a pause
    const nextTimer = setTimeout(() => {
      setPlaceholderIndex((i) => (i + 1) % placeholders.length);
    }, 3000);

    return () => {
      clearInterval(typeTimer);
      clearTimeout(nextTimer);
    };
  }, [placeholderIndex, query]);

  return (
    <input
      value={query}
      className="placeholder:text-neutral-600 text-neutral-50 font-semibold outline-0 border-0 w-full p-0"
      onChange={(e) => setQuery(e.target.value)}
      placeholder={displayText}
    />
  );
}
