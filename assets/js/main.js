let txtStock = document.getElementById("txtStock")
let searchButton = document.getElementById("searchButton")
let stockData = document.getElementById("stockData")
let mainStocks = document.getElementById("stocksMain")
let cardStocks = document.getElementById("cardStocks")
let watchListArray = []

searchButton.addEventListener("click", function () {
    fetch(`https://sandbox.iexapis.com/stable/stock/${stocks[i]}/previous?token=Tpk_4aa9dbaa5e0d48d497c96a35ce0d7493`)
        .then(response => response.json())
        .then(allInfo => {
            console.log(allInfo)

            cardStocks.innerHTML += `<div class="card" style="width: 18rem; display: inline-block;">
                                            <img src="https://c1.wallpaperflare.com/preview/297/171/764/chart-trading-courses-analysis.jpg" class="card-img-top" alt="logo" border-radius: "25px 10px 0px 0px">
                                            <div class="card text-white bg-dark mb-3" style="margin-bottom: 0px!important; max-width: 18rem;">
                                                <p class="card-text">
                                                    <ul id='cardText' style="text-align: left;">
                                                    <button class="buttons" onclick="addToWatchlist('${stocks[i]}')">+</button> 
                                                    <li><b> ${stocks[i]}</b> (Today's Latest Data)<p id="percentage" style="${allInfo.change > 0 ? 'color:rgb(88, 212, 88' : 'color:red'}">${allInfo.change > 0 ? `+${parseFloat(allInfo.change).toFixed(2)}(${allInfo.changePercent}%)` : `${parseFloat(allInfo.change).toFixed(2)}(${allInfo.changePercent}%)`}</p></li>
                                                    
                                                <p>Today's High: ${allInfo.high}</p>
                                                <p>Today's Low: ${allInfo.low}</p>
                                                <p>Recent Closing: ${allInfo.close}</p>
                                                <p>Opening Price: ${allInfo.open}</p>
                                                <p>Volume: ${allInfo.volume} Shares</p>   
                                                <p>Date: ${allInfo.date}</p>
                                                </ul>
            
                                                <a href="stock-info.html"><button onclick="grabInfo('${allInfo.symbol}')" class="btn btn-primary">See more about this stock</button></a>
                                            </div>
                                        </div>`
        })
})
//  STOCKS RAN ON HOME PAGE AUTOMATICALLY 
let stocks = ['AAPL', 'FB', 'NFLX']

for (let i = 0; i < stocks.length; i++) {
    fetch(`https://sandbox.iexapis.com/stable/stock/${stocks[i]}/previous?token=Tpk_4aa9dbaa5e0d48d497c96a35ce0d7493`)
        .then(response => response.json())
        .then(allInfo => {
            console.log(allInfo)

            cardStocks.innerHTML += `
                <div class="card" style="width: 18rem; display: inline-block;">
                                            <img src="https://c1.wallpaperflare.com/preview/297/171/764/chart-trading-courses-analysis.jpg" class="card-img-top" alt="logo" border-radius: "25px 10px 0px 0px">
                                            <div class="card text-white bg-dark mb-3" style="margin-bottom: 0px!important; max-width: 18rem;">
                                                <p class="card-text">
                                                    <ul id='cardText' style="text-align: left;">
                                                    <button class="buttons" onclick="addToWatchlist('${stocks[i]}')">+</button> 
                                                    <li><b> ${stocks[i]}</b> (Today's Latest Data)<p id="percentage" style="${allInfo.change > 0 ? 'color:rgb(88, 212, 88' : 'color:red'}">${allInfo.change > 0 ? `+${parseFloat(allInfo.change).toFixed(2)}(${parseFloat(allInfo.changePercent).toFixed(2)}%)` : `${parseFloat(allInfo.change).toFixed(2)}(${parseFloat(allInfo.changePercent).toFixed(2)}%)`}</p></li>
                                                    
                                                <p>Today's High: ${allInfo.high}</p>
                                                <p>Today's Low: ${allInfo.low}</p>
                                                <p>Recent Closing: ${allInfo.close}</p>
                                                <p>Opening Price: ${allInfo.open}</p>
                                                <p>Volume: ${allInfo.volume} Shares</p>  
                                                <p>Date: ${allInfo.date}</p> 
                                                </ul>
            
                                            <a href="stock-info.html" style="text-align: center;">
                                                <button onclick="grabInfo('${allInfo.symbol}')" class="btn btn-primary">
                                                    See more about this stock
                                                </button>
                                            </a>
                                            
                                            </div>
                                        </div>`
                                        console.log(allInfo.symbol)
        })
}

function grabInfo(symbol) {
    sessionStorage.mySymbol = (symbol.toString())
    console.log(symbol)
}