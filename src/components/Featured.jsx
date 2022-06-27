import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import BTC from '../assets/btc-img.png'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import './Featured.css'

const Featured = () => {

    const [data1, setData1] = useState(null)
    const [data2, setData2] = useState(null)

    const url1 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'
    const url2 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&page=2&sparkline=false'


    useEffect(() => {
        axios.get(url1).then((response) => {
            setData1(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    useEffect(() => {
        axios.get(url2).then((response) => {
            setData2(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])


    if (!data1||!data2) return null

    return (
        <div className='featured' id='featured'>
            <div className='container'>
                {/* Left */}
                <div className='left'>
                    <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
                    <p>See all available assets: Cryptocurrencies and NFT's</p>
                    <button className='btn'>See More Coins</button>
                </div>

                {/* Right */}

                <div className='right'>
                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/' /> */}
                            <img src={data1[0].image} alt='' />
                        </div>
                        <div>
                            <h5>{data1[0].name}</h5>
                            <p>${data1[0].current_price.toLocaleString()}</p>
                        </div>

                        {data1[0].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data1[0].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data1[0].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data1[1].image} alt='' />
                        </div>
                        <div>
                            <h5>{data1[1].name}</h5>
                            <p>${data1[1].current_price.toLocaleString()}</p>
                        </div>

                        {data1[1].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data1[1].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data1[1].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data1[2].image} alt='' />
                        </div>
                        <div>
                            <h5>{data1[2].name}</h5>
                            <p>${data1[2].current_price.toLocaleString()}</p>
                        </div>

                        {data1[2].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data1[2].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data1[2].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data1[3].image} alt='' />
                        </div>
                        <div>
                            <h5>{data1[3].name}</h5>
                            <p>${data1[3].current_price.toLocaleString()}</p>
                        </div>

                        {data1[3].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data1[3].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data1[3].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data1[4].image} alt='' />
                        </div>
                        <div>
                            <h5>{data1[4].name}</h5>
                            <p>${data1[4].current_price.toLocaleString()}</p>
                        </div>

                        {data1[4].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data1[4].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data1[4].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data1[5].image} alt='' />
                        </div>
                        <div>
                            <h5>{data1[5].name}</h5>
                            <p>${data1[5].current_price.toLocaleString()}</p>
                        </div>

                        {data1[5].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data1[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data1[5].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                </div>

                
        <div className='right' id='more-cards'>
                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/' /> */}
                            <img src={data2[0].image} alt='' />
                        </div>
                        <div>
                            <h5>{data2[0].name}</h5>
                            <p>${data2[0].current_price.toLocaleString()}</p>
                        </div>

                        {data2[0].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data2[0].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data2[0].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data2[1].image} alt='' />
                        </div>
                        <div>
                            <h5>{data2[1].name}</h5>
                            <p>${data2[1].current_price.toLocaleString()}</p>
                        </div>

                        {data2[1].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data2[1].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data2[1].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data2[2].image} alt='' />
                        </div>
                        <div>
                            <h5>{data2[2].name}</h5>
                            <p>${data2[2].current_price.toLocaleString()}</p>
                        </div>

                        {data2[2].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data2[2].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data2[2].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data2[3].image} alt='' />
                        </div>
                        <div>
                            <h5>{data2[3].name}</h5>
                            <p>${data2[3].current_price.toLocaleString()}</p>
                        </div>

                        {data2[3].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data2[3].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data2[3].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data2[4].image} alt='' />
                        </div>
                        <div>
                            <h5>{data2[4].name}</h5>
                            <p>${data2[4].current_price.toLocaleString()}</p>
                        </div>

                        {data2[4].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data2[4].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data2[4].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data2[5].image} alt='' />
                        </div>
                        <div>
                            <h5>{data2[5].name}</h5>
                            <p>${data2[5].current_price.toLocaleString()}</p>
                        </div>

                        {data2[5].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data2[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data2[5].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>


                    <div className='card'>
                        <div className='top'>
                            <img src={data2[6].image} alt='' />
                        </div>
                        <div>
                            <h5>{data2[6].name}</h5>
                            <p>${data2[6].current_price.toLocaleString()}</p>
                        </div>

                        {data2[6].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data2[6].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data2[6].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            <img src={data2[7].image} alt='' />
                        </div>
                        <div>
                            <h5>{data2[7].name}</h5>
                            <p>${data2[7].current_price.toLocaleString()}</p>
                        </div>

                        {data2[7].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data2[7].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data2[7].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>

                    <div className='card'>
                        <div className='top'>
                            <img src={data2[8].image} alt='' />
                        </div>
                        <div>
                            <h5>{data2[8].name}</h5>
                            <p>${data2[8].current_price.toLocaleString()}</p>
                        </div>

                        {data2[7].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data2[8].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data2[8].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                </div>



            </div>

        </div>
    )
}

export default Featured
