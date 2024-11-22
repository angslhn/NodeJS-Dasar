const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

// Menggunakan EJS

app.set("view engine", "ejs");

app.use(expressLayouts);

app.get("/", (request, response) => {
  const mahasiswa = [
    {
      nama: "Aang Solihin",
      npm: "240160121001",
    },
    {
      nama: "Maman Hidayat",
      npm: "240160121023",
    },
    {
      nama: "Deden Ferdiansyah",
      npm: "240160121065",
    },
    {
      nama: "Rahmat Bahrudin",
      npm: "240160121088",
    },
  ];

  response.render("index", {
    title: "Home",
    layout: "layouts/main-layout",
    mahasiswa,
  });
});

app.get("/about", (request, response) => {
  response.render("about", {
    layout: "layouts/main-layout",
    title: "About",
  });
});

app.get("/work", (request, response) => {
  response.render("work", {
    layout: "layouts/main-layout",
    title: "Work",
  });
});

app.get("/contact", (request, response) => {
  response.render("contact", {
    layout: "layouts/main-layout",
    title: "Contact",
  });
});

app.use("/", (request, response) => {
  response.status(404);
  response.send("Halaman tidak di temukan!");
});

app.listen(port, (error) => {
  if (error) {
    console.log("Tidak dapat menjalankan server");
  } else {
    console.log(`Server berjalan di port ${port}`);
  }
});
