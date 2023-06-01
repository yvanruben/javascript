const { forms: [form] } = document;

form.addEventListener('submit', e => {
    e.preventDefault();
    calculateTotalCurrencyRate();
});

const calculateTotalCurrencyRate = async () => {
    const amount = parseFloat(form.amount.value);
    const curfrom = form.curfrom.value;
    const curto = form.curto.value;

    try {
        const apiKey = '0d6cf680aeccc1309ac85b53';
        const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${curfrom}/${curto}/${amount}`;
        const resp = await fetch(url);
        const data = await resp.json();
        const totalRate = data.conversion_result;

        form.result.value = totalRate;
    } catch (err) {
        console.error(err);
    }
};

const start = async () => {
    try {
        const apiKey = '0d6cf680aeccc1309ac85b53';
        const resp = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`);
        const { supported_codes } = await resp.json();

        const innerHtml = supported_codes.map(([key, value]) => {
            return `<option ${key === 'MUR' ? 'selected' : ''} value="${key}">${key} - ${value}</option>`;
        }).join('');

        form.curfrom.innerHTML = innerHtml;
        form.curto.innerHTML = innerHtml;
    } catch (err) {
        console.error(err);
    }
};

start();