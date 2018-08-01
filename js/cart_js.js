// Калькулятор товара
var nPlus,sumPlus,sum1, price,nMinus, sumMinus,sum1, sum2, res;
price = 5891.82;
function plus(){        
        price = 5891.82;
        nPlus = document.getElementById('num1').value;
        nPlus = parseInt(nPlus);
        sumPlus = ++nPlus;
        sumPlus = parseInt(sumPlus);
        console.log(sumPlus);
        sum1 = sumPlus * price;
        console.log(sum1);
        document.getElementById('sum1').innerText = sum1;
        if (sum1 == 0 ) {
            document.getElementById('sum1').innerText = price;
        }
        document.getElementById('sum').innerText = sum1 + (price*2);

}
function minus(){
        nPlus = document.getElementById('num1').value;
        nPlus = parseInt(nPlus);
        sumPlus = nPlus++;
        sumPlus = parseInt(sumPlus);
        sum1 = sumPlus * price;
        document.getElementById('sum1').innerText = sum1;
        nMinus = document.getElementById('num1').value;
        nMinus = parseInt(nMinus);
        sumMinus = --nMinus;
        sumMinus = parseInt(nMinus);
        document.getElementById('sum1').innerText = sum1-price;
        document.getElementById('sum').innerText = sum1+price;
        
}
function plus2(){
        nPlus = document.getElementById('num2').value;
        nPlus = parseInt(nPlus);
        sumPlus = ++nPlus;
        sumPlus = parseInt(sumPlus);
        console.log(sumPlus);
        sum1= sumPlus * price;
        console.log(sum1);
        document.getElementById('sum2').innerText = sum1;
        if (sum1 == 0 ) {
            document.getElementById('sum2').innerText = price;
        }
        document.getElementById('sum').innerText = sum1 + (price*2);
}
function minus2(){
        nPlus = document.getElementById('num2').value;
        nPlus = parseInt(nPlus);
        sumPlus = nPlus++;
        sumPlus = parseInt(sumPlus);
        sum1 = sumPlus * price;
        document.getElementById('sum2').innerText = sum1;
        nMinus = document.getElementById('num2').value;
        nMinus = parseInt(nMinus);
        sumMinus = --nMinus;
        sumMinus = parseInt(nMinus);
        document.getElementById('sum2').innerText = sum1-price;
        
}
function plus3(){
        nPlus = document.getElementById('num3').value;
        nPlus = parseInt(nPlus);
        sumPlus = ++nPlus;
        sumPlus = parseInt(sumPlus);
        console.log(sumPlus);
        sum1 = sumPlus * price;
        console.log(sum1);
        document.getElementById('sum3').innerText = sum1;
        if (sum1 == 0 ) {
            document.getElementById('sum3').innerText = price;
        }
}
function minus3(){
        nPlus = document.getElementById('num3').value;
        nPlus = parseInt(nPlus);
        sumPlus = nPlus++;
        sumPlus = parseInt(sumPlus);
        sum1 = sumPlus * price;
        document.getElementById('sum3').innerText = sum1;
        nMinus = document.getElementById('num3').value;
        nMinus = parseInt(nMinus);
        sumMinus = --nMinus;
        sumMinus = parseInt(nMinus);
        document.getElementById('sum3').innerText = sum1-price;
        
}

/*Индуский код для придания динамичности элементам
Крестик*/

    $(function(){
        $('.c1').mouseover(function(){
            $('.b1').addClass('display-active');
        });
        $('.c1').mouseout(function(){
            $('.b1').removeClass('display-active');
        });
        $('.c2').mouseover(function(){
            $('.b2').addClass('display-active');
        });
        $('.c2').mouseout(function(){
            $('.b2').removeClass('display-active');
        });   
        $('.c3').mouseover(function(){
            $('.b3').addClass('display-active');
        });
        $('.c3').mouseout(function(){
            $('.b3').removeClass('display-active');
        });    
    });

/*Скрипт для работы кнопок в классе quantity-block*/

$(function() {
  (function quantityProducts() {
    var $quantityArrowMinus1 = $(".m1");
    var $quantityArrowPlus1 = $(".p1");
    var $quantityNum1 = $(".n1");
    var $quantityArrowMinus2= $(".m2");
    var $quantityArrowPlus2 = $(".p2");
    var $quantityNum2 = $(".n2");
    var $quantityArrowMinus3 = $(".m3");
    var $quantityArrowPlus3 = $(".p3");
    var $quantityNum3 = $(".n3");

    $quantityArrowMinus1.click(quantityMinus1);
    $quantityArrowPlus1.click(quantityPlus1);
    $quantityArrowMinus2.click(quantityMinus2);
    $quantityArrowPlus2.click(quantityPlus2);
    $quantityArrowMinus3.click(quantityMinus3);
    $quantityArrowPlus3.click(quantityPlus3);

    function quantityMinus1() {
      if ($quantityNum1.val() > 1) {
        $quantityNum1.val(+$quantityNum1.val() - 1);
    }

}
function quantityMinus2() {
  if ($quantityNum2.val() > 1) {
    $quantityNum2.val(+$quantityNum2.val() - 1);
}

}
function quantityMinus3() {
  if ($quantityNum3.val() > 1) {
    $quantityNum3.val(+$quantityNum3.val() - 1);
}

}

function quantityPlus1() {
  $quantityNum1.val(+$quantityNum1.val() + 1);
}
function quantityPlus2() {
  $quantityNum2.val(+$quantityNum2.val() + 1);
}
function quantityPlus3() {
  $quantityNum3.val(+$quantityNum3.val() + 1);
}
})();

});
