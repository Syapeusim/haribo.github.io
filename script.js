function formatCurrency(amount) {
    return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(amount);
}

function calculate() {
    var amount = parseFloat(document.getElementById('amount').value);
    var ticketType = document.getElementById('ticketType').value;

    var baseValue;

    if (ticketType === 'lottery') {
        baseValue = 1500000;
    } else if (ticketType === 'ticket') {
        baseValue = 3000000;
    } else {
        alert('올바른 항목을 선택하세요.');
        return;
    }

    var multipliedResult = baseValue * amount;
    var resultString = '곱하기 결과: ' + formatCurrency(multipliedResult);

    var dividedResult = multipliedResult / 2;
    resultString += ', 나누기 결과: ' + formatCurrency(dividedResult);

    document.getElementById('result').innerText = '결과: ' + resultString;
}
