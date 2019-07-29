# YemeksepetiHarcamalarim
Tüm Yemeksepeti harcamalarini gösteren js kodu.



İlk önce yemek sepeti siparişlerinize girdikten sonra hepsinin yüklenmesini tamamladıktan sonra en aşağı kadar inmeniz gerekiyor ondan sonra console kısmına gelerek 



var array = $(".amount-info > strong").text().split("TL");

var total = 0

$.each(array, function (index, value) {
total = total + parseInt(value);
console.log(parseFloat(total) + "TL");
});
