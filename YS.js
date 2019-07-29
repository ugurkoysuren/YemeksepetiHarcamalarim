var array = $(".amount-info > strong").text().split("TL");
var total = 0
$.each(array, function (index, value) { total = total + parseInt(value); console.log(parseFloat(total) + "TL"); });
