let haftaKunlari = prompt(
  "Bugungi hafta kunlarini raqam bilan kiritin? \n variantlar: \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7"
);

console.log(haftaKunlari);

if (haftaKunlari === "1") {
  alert("dushanba");
} else if (haftaKunlari === "2") {
  alert("seshanba");
} else if (haftaKunlari === "3") {
  alert("chorshanba");
} else if (haftaKunlari === "4") {
  alert("payshanba");
} else if (haftaKunlari === "5") {
  alert("Juma");
} else if (haftaKunlari === "6") {
  alert("shanba");
} else if (haftaKunlari === "7") {
  alert("yakshanba");
} else {
  alert("bu hafta kuni topilmadi!");
}
