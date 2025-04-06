const quotes = [
  {
    quote:
      "When something is important enough, you do it even if the odds are not in your favor.",
    author: "Elon Musk",
  },
  {
    quote:
      "Failure is an option here. If things are not failing, you are not innovating enough.",
    author: "Elon Musk",
  },
  {
    quote:
      "Everybody should learn to program a computer, because it teaches you how to think.",
    author: "Steve Jobs",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  { quote: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  {
    quote:
      "If you're not embarrassed by the first version of your product, you’ve launched too late.",
    author: "Reid Hoffman",
  },
  {
    quote:
      "Learning to write programs stretches your mind, and helps you think better.",
    author: "Bill Gates",
  },
  {
    quote: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House",
  },
  {
    quote:
      "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
  },
  { quote: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
