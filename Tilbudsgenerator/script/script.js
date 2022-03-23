var ClientNameEl = document.getElementById("ClientName");
var SupportNameEl = document.getElementById("SupportName");
var RadioEl = document.getElementsByClassName("Item");
var CheckboxEl = document.getElementsByClassName("Item2");

var DiscountMonthlyEl = document.getElementById("Discount1");
var DiscountEl = document.getElementById("Discount2");

var PrintOutEl = document.getElementById("PrintOut");

document.addEventListener("change", Run);
var InternettPris = [399, 599, 799, 999];
var TilleggPris = [399, 499];

function Run() {
    var AllProducts = []
    var AllPrices = []
    var TotalPrice1 = 0
    var TotalPrice2 = 0
    var Items = 0
    for (var i = 0; i < RadioEl.length; i++) {
        if (RadioEl[i].checked) {
            AllProducts.push(RadioEl[i].value)
            AllPrices.push(InternettPris[i])
            TotalPrice1 += InternettPris[i]
        }
    }

    for (var i = 0; i < CheckboxEl.length; i++) {
        if (CheckboxEl[i].checked) {
                AllProducts.push(CheckboxEl[i].value)
                AllPrices.push(TilleggPris[i])
                TotalPrice2 += TilleggPris[i]
        }
    }

    var PriceDiscountMonthly = parseInt(TotalPrice1 * DiscountMonthlyEl.value/100)
    var PriceDiscountOneTime = parseInt(TotalPrice2 * DiscountEl.value/100)
    var PriceList = ""
    console.log(PriceDiscountMonthly)
    for (var i = 0; i < AllProducts.length; i++) {
        PriceList += (AllProducts[i] + " " +  AllPrices[i] + "kr " + '\n')
        Items += 1
    }
    var AllProducts2 = AllProducts
    if (Items > 1) {
        AllProducts2.splice(AllProducts.length-1, 0,"og ")
    }
    PrintOutEl.innerHTML = [
        "Hei " + ClientNameEl.value + " og takk for en hyggelig telefonsamtale." + '\n' +
        "Sender deg som avtalt tilbud på " + AllProducts2 + '\n' + 
        "Prisen vil da bli" + '\n' + PriceList +

        "Måndelig Rabatt" + " " + DiscountMonthlyEl.value + "% " + PriceDiscountMonthly + "kr" + '\n' +
        "Engangskost Rabatt" + " " + DiscountEl.value + "% " + PriceDiscountOneTime + "kr"  + '\n' +
        "Totalt " + (TotalPrice1+TotalPrice2-(PriceDiscountMonthly+PriceDiscountOneTime)) + '\n' +
        "Det er bare å svare på denne eposten hvis du har noen spørsmål." + '\n' +
        "Med vennlig hilsen " + SupportNameEl.value
    ];
    console.log("Test")
}

function Copy() {
    PrintOutEl.select();
    PrintOutEl.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(PrintOutEl.value)
    alert("Copied")
}





