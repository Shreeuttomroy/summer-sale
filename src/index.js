function getTargetProduct(product) {
    const products = document.querySelectorAll(product);
    products.forEach(element => {
        element.addEventListener('click', function productDetails(target) {
            const elem = element.childNodes[3].childNodes[3].innerText;
            const elmPrice = element.childNodes[3].childNodes[5].innerText;
            const price = parseFloat(elmPrice);
            createNewEle(elem);
            const totalPrice = calculate(price);
            document.getElementById('totalPrice').innerText = totalPrice;
            document.getElementById('total').innerText = totalPrice;
            if (totalPrice > 0) {
                let btnPurchase = document.getElementById('btnPurchase');
                btnPurchase.style.backgroundColor = "#E527B2";
                btnPurchase.disabled = false;
            }
            if (totalPrice >= 200) {
                let btn = document.getElementById('applyBtn');
                btn.style.backgroundColor = "#E527B2";
                btn.disabled = false;
            }
        })
    });
}
getTargetProduct('.product');
document.getElementById('applyBtn').addEventListener('click', function dom(){
    const totalPriceOut = preNumber('totalPrice');
    const discount = (totalPriceOut/100)*20;
    const inputValue = document.getElementById("couponCode").value;
    if (inputValue === 'SELL200') {
        document.getElementById('discount').innerHTML = discount;
        const totalD = totalPriceOut - discount;
        document.getElementById('total').innerText = totalD;
        document.getElementById("couponCode").value='';
    }
});
document.getElementById("close").addEventListener('click', closeAction);
function closeAction(){
    window.location.pathname='/';
}
function createNewEle(elem) {
    let liEl = document.createElement('li');
    let parentLiEl = document.getElementById('selectList');
    liEl.innerHTML = elem;
    liEl.style.listStyleType = 'decimal';
    parentLiEl.appendChild(liEl);
}
function calculate(price) {
    const preTotal = preNumber('totalPrice');
    return preTotal + price;
}
function preNumber(inputId) {
    const ele = document.getElementById(inputId).innerText;
    let eleFloat = parseFloat(ele);
    if (isNaN(eleFloat)) {
        eleFloat = 0;
        return eleFloat;
    }
    return eleFloat;
}