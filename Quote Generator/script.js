const getQuotes = async () => {
  try {
    let quotesData = localStorage.getItem("quotes");

    if (quotesData) {
      return JSON.parse(quotesData);
    }

    const response = await fetch("quotes.json");
    if (!response.ok) {
      throw new Error("Gagal mengambil data");
    }

    quotesData = await response.json();
    localStorage.setItem("quotes", JSON.stringify(quotesData));
    return quotesData;
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    return [];
  }
};

const text = document.getElementById("qoutesText");
const tombol = document.getElementById("tombol");
const penulis = document.getElementById("penulis");

tombol.addEventListener("click", async () => {
  const quotesData = await getQuotes();

  if (quotesData.length === 0) {
    text.innerHTML = "Tidak ada kutipan tersedia.";
    penulis.innerHTML = "";
    return;
  }

  let angkaRandom = Math.floor(Math.random() * quotesData.length);
  text.innerHTML = `"${quotesData[angkaRandom].text}"`;
  penulis.innerHTML = `- ${quotesData[angkaRandom].author} -`;
});
