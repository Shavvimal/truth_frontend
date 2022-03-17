function getRandomTruth(e) {
  e.preventDefault();
  fetch("https://truth-shav.herokuapp.com/truth/random")
    .then((resp) => resp.json())
    .then(formatQuote)
    .then(replaceQuote);
}

//helpers
function replaceQuote(quote) {
  document.getElementById("quote-text").textContent = quote;
}

function formatQuote(quote) {
  msg = quote.truth;
  return msg;
}

module.exports = {
  getRandomQuote,
  replaceQuote,
  formatQuote,
};
