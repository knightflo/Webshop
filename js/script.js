
let bread = document.getElementById("bread").innerText;
let pickle = document.getElementById("pickle").innerText;
let cookie = document.getElementById("cookie").innerText;
let addedcookie = false;
let addedpickle = false;
let addedbread = false;
let cookietotal = parseInt(cookie)*2;
let pickletotal = parseInt(pickle);
let breadtotal = parseInt(bread)*10;
let backdrop = document.getElementById("backdrop")
let cookiestock =document.getElementById("cookiestock").innerText;
let picklestock =document.getElementById("picklestock").innerText;
let breadstock =document.getElementById("breadstock").innerText;
let sold = false;
let bought  = false;
function opensidebar(){
    if (cookie>0||pickle>0||bread>0) {
        document.getElementById("sidebarposition").style.marginRight = "400px";
    }
}

function addbread(){
    if (breadstock>0)
    {
        bread = parseInt(bread) + 1;
        document.getElementById("bread").innerText = bread;
        breadstock = parseInt(breadstock)-1;
        document.getElementById("breadstock").innerText = breadstock;
        document.getElementById("breadplus").style.opacity = "1";
    }
    else{
        document.getElementById("breadplus").style.opacity = "0";
        document.getElementById("breadstock").innerText = "OUT OF STOCK";
    }
}
function removebread(){
if (bread>0){
    breadstock = parseInt(breadstock) + 1;
    document.getElementById("breadstock").innerText = breadstock;
    document.getElementById("breadplus").style.opacity = "1";
}
    bread = parseInt(bread)-1;
    if (bread === -1){
        bread = 0;
    }
    document.getElementById("bread").innerText = bread;
}
function addpickle(){
    if (picklestock>0) {
        pickle = parseInt(pickle) + 1;
        document.getElementById("pickle").innerText = pickle;
        picklestock = parseInt(picklestock)-1;
        document.getElementById("picklestock").innerText = picklestock;
        document.getElementById("pickleplus").style.opacity = "1";
    }
    else{
        document.getElementById("pickleplus").style.opacity = "0";
        document.getElementById("picklestock").innerText = "OUT OF STOCK";
    }
}
function removepickle(){
    if (pickle>0){
        picklestock = parseInt(picklestock) + 1;
        document.getElementById("picklestock").innerText = picklestock;
        document.getElementById("pickleplus").style.opacity = "1";
    }
    pickle = parseInt(pickle)-1;
    if (pickle === -1){
        pickle = 0;
    }
    document.getElementById("pickle").innerText = pickle;
}
function addcookie(){
    if (cookiestock>0) {
        document.getElementById("cookieplus").style.opacity = "1";
        cookie = parseInt(cookie) + 1;
        cookiestock = parseInt(cookiestock) - 1;
        document.getElementById("cookie").innerText = cookie;
        document.getElementById("cookiestock").innerText = cookiestock;
    }
    else{
        document.getElementById("cookieplus").style.opacity = "0";
        document.getElementById("cookiestock").innerText = "OUT OF STOCK";
    }
}
function removecookie(){
    if (cookie>0){
        document.getElementById("cookieplus").style.opacity = "1";
    cookiestock = parseInt(cookiestock) + 1;
    document.getElementById("cookiestock").innerText = cookiestock;
    }

    cookie = parseInt(cookie)-1;
    if (cookie === -1){
        cookie = 0;
    }
    document.getElementById("cookie").innerText = cookie;
}
function addtobar(){




    if (cookie > 0) {
        document.getElementById("cookiepic").style.opacity = "1";
        document.getElementById("cookieadder").innerText = "-"+" "+ cookie +" " +"x" +" "+ "cookies"+" " +"="+" " + cookie*2+" "+ "euro"+" "+" " ;
       document.getElementById("cookiedoc").innerText ="-"+" "+  "stock:"+ " "+cookiestock;
        addedcookie = true;
    }
    else{
        document.getElementById("cookiepic").style.opacity = "0";
        document.getElementById("cookieadder").innerText = ""
        addedcookie = false;
        document.getElementById("cookiedoc").innerText = "";
    }
    cookietotal= parseInt(cookie)*2;
    if (pickle > 0) {
        document.getElementById("picklepic").style.opacity = "1";
        document.getElementById("pickleadder").innerText = "-"+" "+pickle + " "+ "x"+" "+"pickles" +" "+"="+ pickle*1+" "+ "euro"+" ";
       document.getElementById("pickledoc").innerText = "-"+" "+  "stock:"+ " "+picklestock;
        addedpickle = true;
    }
    else
    {
        document.getElementById("picklepic").style.opacity = "0";
        document.getElementById("pickleadder").innerText = ""
        addedpickle = false;
        document.getElementById("pickledoc").innerText = "";
    }
    pickletotal= parseInt(pickle);
    if (bread > 0) {
        document.getElementById("breadpic").style.opacity = "1";
        document.getElementById("breadadder").innerText = "-"+" "+bread + " "+ "x"+" "+"bread" +" "+"="+ bread*10+" "+ "euro"+" ";
        document.getElementById("breaddoc").innerText = "-"+" "+  "stock:"+ " "+breadstock;
        addedbread = true;
    }
    else
    {
        document.getElementById("breadpic").style.opacity = "0";
        document.getElementById("breadadder").innerText = ""
        document.getElementById("breaddoc").innerText = "";
        addedbread = false;
    }
    breadtotal= parseInt(bread)*10;


}
function hidemodal(){
    document.getElementById("sidebarposition").style.marginRight = "0px";
    backdrop.style.display = "none";
    document.getElementById("total").innerText = "";

    document.getElementById("totalprice").innerText = "";
    document.getElementById("youbuy").innerText = "";
    bought = false;
    sold = false;
    document.getElementById("buy").innerText = "Buy";
    document.getElementById("sell").innerText = "Sell";
}

function showmodal(){
    if (cookie>0||pickle>0||bread>0)
    backdrop.style.display = "block";
}
function buy(){
    if (addedbread||addedcookie||addedpickle === true){
        if (sold ===false) {
            bought = true;

            document.getElementById("sell").innerText = "";

            document.getElementById("total").innerText = "Total price";
            document.getElementById("youbuy").innerText = "You have bought:";

            document.getElementById("totalprice").innerText = (cookietotal + pickletotal + breadtotal).toString() + " " + "euro";
        }
    }
}
function showinfomincookie(){
    document.getElementById("cookieinfo").innerText = "This button will remove 1 of the amount";
}
function hideinfocookie(){
    document.getElementById("cookieinfo").innerText="";
}
function showinfopluscookie(){
    document.getElementById("cookieinfo").innerText = "This button will add 1 of the amount";
}
function buycookoie(){
    document.getElementById("cookieinfo").innerText = "This button will add the amount to the shopping list";
}
function showinfominpickle(){
    document.getElementById("pickleinfo").innerText = "This button will remove 1 of the amount";
}
function hideinfopickle(){
    document.getElementById("pickleinfo").innerText="";
}
function showinfopluspickle(){
    document.getElementById("pickleinfo").innerText = "This button will add 1 of the amount";
}
function buypickle(){
    document.getElementById("pickleinfo").innerText = "This button will add the amount to the shopping list";
}

function showinfominbread(){
    document.getElementById("breadinfo").innerText = "This button will remove 1 of the amount";
}
function hideinfobread(){
    document.getElementById("breadinfo").innerText="";
}
function showinfoplusbread(){
    document.getElementById("breadinfo").innerText = "This button will add 1 of the amount";
}
function buybread(){
    document.getElementById("breadinfo").innerText = "This button will add the amount to the shopping list";
}
function sell(){
    if (addedbread||addedcookie||addedpickle === true){
        if (bought === false) {
            sold = true;

            document.getElementById("buy").innerText = "";

            document.getElementById("total").innerText = "Total price";
            document.getElementById("youbuy").innerText = "You have sold:";

            document.getElementById("totalprice").innerText = (cookietotal + pickletotal + breadtotal).toString() + " " + "euro";
        }
    }
}