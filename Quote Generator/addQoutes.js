async function loadData() {
  const storedData = localStorage.getItem("quotes");
  if (storedData) {
    return JSON.parse(storedData);
  }

  const response = await fetch("quotes.json");
  const data = await response.json();
  localStorage.setItem("quotes", JSON.stringify(data));
  return data;
}

async function addQuotes() {
  const authorInput = document.getElementById("qoute-author");
  const qouteTeks = document.getElementById("qoute-teks");

  const newQuote = {
    text: qouteTeks.value,
    author: authorInput.value,
  };

  try {
    const quotesData = await loadData();
    quotesData.push(newQuote);

    localStorage.setItem("quotes", JSON.stringify(quotesData));
    console.log("Quote berhasil ditambahkan!");
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
}

const tombol = document.getElementById("button");
tombol.addEventListener("click", (e) => {
  e.preventDefault();
  addQuotes();
});
