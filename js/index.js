//1. Valyuta konvertorunu yaz. İstifadəçi ABŞ dolları miqdarını daxil edir, çevirmək istədiyi
//valyutu seçir: EUR, UAH və ya AZN, və cavab olaraq müvafiq məbləği alır.

// function mezenne() {
//   let dollars = prompt("Dollar daxil edin: ");
//   valyuta = prompt("Secim edin (1-EUR , 2-UAH , 3-AZN)");
//   let money;
//   switch (valyuta) {
//     case "1":
//       money = dollars * 0.93;
//       break;
//     case "2":
//       money = dollars * 39.38;
//       break;
//     case "3":
//       money = dollars * 1.7;
//       break;
//     default:
//       money = "Duzgun Deyer daxil edin!!!";
//       break;
//   }
//   return money;
// }
// let money1 = mezenne();
// alert(money1);

//2. İstifadəçidən alış-verişin məbləğini soruş və endirimlə ödəmə məbləğini göstər: 200-dən
//300-ə qədər - 3% endirim, 300-dən 500-ə qədər - 5% endirim, 500-dən yuxarı - 7% endirim

// function endirim() {
//   let shop = prompt("Alis-Veris qiymetini daxil edin: ");
//   let price;

//   if (Number(shop) >= 0 && Number(shop) < 200) {
//     price = Number(shop);
//   } else if (Number(shop) >= 200 && Number(shop) < 300) {
//     price = Number(shop) * 0.97;
//   } else if (Number(shop) >= 300 && Number(shop) < 500) {
//     price = Number(shop) * 0.95;
//   } else if (Number(shop) >= 500) {
//     price = Number(shop) * 0.93;
//   } else {
//     price = "Duzgun Deyer daxil edin!!!";
//   }
//   return price;
// }

// let shops = endirim();
// alert(shops);

//3. İstifadəçidən dairənin perimetri və kvadratın perimetri soruş və belə bir dairənin göstərilən
//kvadrata sığacağını müəyyənləşdir.

// function perimetr(per1, per2) {
//   let side1 = per1 / 4;
//   let side2 = per2 / 3.14;
//   if (side1 >= side2) return true;
//   else return false;
// }
// let kvadrat = prompt("Kvadrat perimetri daxil edin: ");
// let daire = prompt("Dairenin perimetrin daxil edin: ");
// let yoxlama = perimetr(kvadrat, daire);
// alert(yoxlama);

//4. İstifadəçiyə 3 sual ver, hər bir sual üç cavab variantı ilə. Hər doğru cavab üçün 2 bal verilir.
//Suallardan sonra istifadəçiyə qazanılan bələdçi balı göstər

// let bal = 0;
// let sual1 = prompt(
//   "1)Azerbaycanin paytaxti haradir?\nA)Seki \nB)Baki \nC)Gence"
// );
// if (sual1.toLowerCase() === "b") {
//   alert("Tebrikler , Siz 2 Bal qazandiz");
//   bal += 2;
// } else {
//   alert("Yanlis Cavab");
// }
// let sual2 = prompt(
//   "2)Azerbaycanin 2ci en boyuk seheri hansidir?\nA)Sumqayit \nB)Mingecevir \nC)Gence"
// );
// if (sual2.toLowerCase() === "c") {
//   alert("Tebrikler , Siz 2 Bal qazandiz");
//   bal += 2;
// } else {
//   alert("Yanlis Cavab");
// }
// let sual3 = prompt(
//   "Azerbaycanin sahesi ne qederdir?\nA)86.6 \nB)120.5 \nC)91.3"
// );
// if (sual3.toLowerCase() === "a") {
//   alert("Tebrikler , Siz 2 Bal qazandiz");
//   bal += 2;
// } else {
//   alert("Yanlis Cavab");
// }
// alert("Toplam baliniz: " + bal);

//5. Tarixi soruş (gün, ay, il) və onun ardınca gələn tarixi göstər. Növbəti ay, il və ya dövr
//keçidini nəzərə alın, həmçinin dövr varlığını.

// function Next_Day(il, ay, gun) {
//   if (Number(ay) < 1 || Number(ay) > 12) {
//     alert("Ay ucun 1-12 araliqi daxil ede bilersiz. ");
//     return;
//   }
//   let fevral;
//   let max_gun;
//   let yeni_il, yeni_ay, yeni_gun;

//   if (Number(il) % 4 === 0) {
//     fevral = 29;
//   } else {
//     fevral = 28;
//   }
//   if (Number(gun) > fevral && Number(ay) === 2) {
//     alert(Number(il) + " de fevral " + fevral + " gunden ibaretdir!!!");
//     return;
//   }

//   if (
//     Number(ay) === 4 ||
//     Number(ay) === 6 ||
//     Number(ay) === 9 ||
//     Number(ay) === 11
//   ) {
//     max_gun = 30;
//   } else {
//     max_gun = 31;
//   }
//   if (Number(gun) > max_gun) {
//     alert(Number(ay) + "ci ay max " + max_gun + " gunden ibaretdir!!!");
//     return;
//   }

//   if (Number(ay) === 2) {
//     if (Number(gun) < fevral) {
//       yeni_gun = Number(gun) + 1;
//       yeni_ay = 2;
//       yeni_il = Number(il);
//     } else if (Number(gun) === fevral) {
//       yeni_gun = 1;
//       yeni_ay = 3;
//       yeni_il = Number(il);
//     }
//   } else if (Number(ay) === 12 && Number(gun) === 31) {
//     yeni_gun = 1;
//     yeni_ay = 1;
//     yeni_il = Number(il) + 1;
//   } else {
//     if (Number(gun) === max_gun) {
//       yeni_gun = 1;
//       yeni_ay = Number(ay) + 1;
//       yeni_il = Number(il);
//     } else {
//       yeni_gun = Number(gun) + 1;
//       yeni_ay = Number(ay);
//       yeni_il = Number(il);
//     }
//   }
//   return [yeni_il, yeni_ay, yeni_gun];
// }
// let il = prompt("Il daxil edin: ");
// let ay = prompt("Ay daxil edin: ");
// let gun = prompt("Gun daxil edin: ");
// let nextDay = Next_Day(il, ay, gun);

// alert("Növbəti gün: " + nextDay[2] + " / " + nextDay[1] + " / " + nextDay[0]);

// 6. Həftə gününün çıxışını dövrə salın: "Həftə günü. Növbəti günü görmək istəyirsiniz?" və
// istifadəçi OK düyməsini basana qədər belə davam edir.
// let i = 0;
// while (true) {
//   let week = [
//     "Bazar ertesi",
//     "Cersenbe axsami",
//     "Cersenbe",
//     "Cume ertesi",
//     "Cume",
//     "Senbe",
//     "Bazar",
//   ];
//   if (i === 7) {
//     i = 0;
//   }
//   alert(week[i]);
//   i++;
//   var result = confirm("Novbeti gunu gormek isteyirsen?");
//   if (!result) break;
// }

// 7. Bütün 2-dən 9-a qədər rəqəmlərin vurma cədvəlini göstərin. Hər rəqəmi 1-dən 10-a qədər
// rəqəmlərlə vurun.

// for (let i = 2; i <= 9; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(i + " * " + j + " = " + i * j);
//   }
// }

// Avtomobil haqqında məlumatları təsvir edən obyekt yaradın (istehsalçı, model, buraxılış ili,
//     orta sürət), və bu obyekt ilə işləmək üçün aşağıdakı funksiyaları yaradın.
//     1. Avtomobil haqqında məlumatları ekrana çıxaran funksiya.
//     2. Verilən məsafəni orta sürətlə qət edərkən lazım olan zamanı hesablamaq üçün funksiya
//     yaradın. Sürət əsasında hər 4 saatda bir sürücünün 1 saatlik istirahət etməsinin vacib
//     olduğunu nəzərə alın.

// let car = {
//   fabrik: "BMW",
//   model: "m5",
//   il: 2021,
//   orta_suret: 100,
//   info: function () {
//     console.log("Fabrik: " + this.fabrik);
//     console.log("Model: " + this.model);
//     console.log("Il: " + this.il);
//     console.log("Orta Suret: " + this.orta_suret);
//   },
//   time: function (way) {
//     console.log(
//       "Time: " + (way / this.orta_suret + Math.trunc(way / this.orta_suret / 4))
//     );
//   },
// };
// car.info();
// car.time(500);
