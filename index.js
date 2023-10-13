const formData = document.querySelector("#searchForm");
const result = document.querySelector("#tableresult");
var upd;
formData.addEventListener('submit', (e) => {

    e.preventDefault();
    const cType = formData.elements.coinType.value;
    fetchPrice(cType);
});

const fetchPrice = async (cType) => {

    const res = await axios.get(`https://api.coinstats.app/public/v1/coins/${cType}?currency=INR`);
    const price = res.data.coin.price;
    const volume = res.data.coin.volume;
    const name = res.data.coin.name;

    result.innerHTML = `<thead>
    <tr>
        <th scope="col">Property</th>
        <th scope="col">Value</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">${name}</th>
        <td>${price}</td>
       
    </tr>
    <tr>
        <th scope="row">Volume</th>
        <td>${volume}</td>
        
    </tr>
    </tbody>`;
    upd =setTimeout(()=>fetchPrice(cType),5000);
}