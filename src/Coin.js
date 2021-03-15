import React from 'react';
import './Coin.css';

const Coin = ({ img, name, symbol, price, markerCap, per, volume }) => {
    return (
        <div className="container">
            <div className="row">

                <div className="coin">
                    <img src= {img} className="coinImg" alt="symbol" /> 
                    <h1 className="name">{name}</h1>
                </div>
                
                <div className="coinData">
                    <p className="symbol">{symbol.toUpperCase()}</p>
                    <p className="price">${price}</p>
                    <p className="marketCap">${markerCap.toLocaleString()}</p>

                    {per > 0 ? (
                        <p className="changePer plus">{per.toFixed(2)}%</p>
                    ) : (
                        <p className="changePer minus">{per.toFixed(2)}%</p>
                    )} 

                    <p className="volumn">Mkt Cap: ${volume.toLocaleString()}</p>
                </div>
            </div> 
        </div>
    );
};

export default Coin;
