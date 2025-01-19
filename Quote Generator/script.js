const qoutes = [
  {
    text: "You can't go and change the beginning. But you can start where you are and change the ending.",
    author: "C.S. Lewis",
  },
  {
    text: "You will never reach your destination, if you stop and throw stones at every dog that barks.",
    author: "Winston C",
  },
  {
    text: "One day you will tell your story of how you overcame, what you went through, and it will be someone else's survival guide.",
    author: "Brene Brown",
  },
  {
    text: "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain",
  },
  {
    text: "Your value doesn't decrease based on someone else's inability to see your worth.",
    author: "Zig Ziglar",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
    author: "Joseph Campbell",
  },
  {
    text: "It's your outlook on life that counts. If you take yourself lightly and don't take yourself too seriously, pretty soon you can find the humor in our everyday lives. And sometimes it can be a lifesaver.",
    author: "Betty White",
  },
  {
    text: "I believe that if you'll just stand up and go, life will open up for you. Something just motivates you to keep moving.",
    author: "Tina Turner",
  },
  {
    text: "Life shrinks or expands in proportion to one's courage.",
    author: "Anais Nin",
  },
  {
    text: "There are no regrets in life, just lessons.",
    author: "Jennifer Janiston",
  },
  {
    text: "Dark times lie ahead of us and there will be a time when we must choose between what is easy and what is right.",
    author: "Albus Percival Wulfric Brian Dumbledore",
  },
  {
    text: "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",
    author: "Albus Percival Wulfric Brian Dumbledore",
  },
  {
    text: "My mission in life is not merely to survive, but to thrive",
    author: "Maya Angelou",
  },
];

const text = document.getElementById("qoutesText");
const tombol = document.getElementById("tombol");
const tombolTambah = document.getElementById("tombolTambah");
const penulis = document.getElementById("penulis");

tombol.addEventListener("click", () => {
  let angkaRandom = Math.round(Math.random() * qoutes.length);
  text.innerHTML = `"${qoutes[angkaRandom].text}"`;
  penulis.innerHTML = `- ${qoutes[angkaRandom].author} -`;
});
