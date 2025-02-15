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

const authorInput = document.getElementById("qoute-author");
const qouteTeks = document.getElementById("qoute-teks");
async function addQuotes() {
  const newQuote = {
    text: qouteTeks.value,
    author: authorInput.value,
  };

  try {
    const quotesData = await loadData();
    quotesData.push(newQuote);

    localStorage.setItem("quotes", JSON.stringify(quotesData));
    alert("Quote berhasil ditambahkan!");
    authorInput.value = "";
    qouteTeks.value = "";
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
}

const tombol = document.getElementById("button");
tombol.addEventListener("click", (e) => {
  e.preventDefault();
  addQuotes();
});

authorInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addQuotes();
});
qouteTeks.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addQuotes();
});
