import axios from "axios";
import {GATSBY_FETCH_APY_URL,
    GATSBY_PRICE_FETCHER_URL,
    GATSBY_SENDGRID_TOKEN,
    GATSBY_SENDGRID_URL} from "./constants";
import changexSupportedTokens from './changexSupportedTokens'
import coinsPrices from './coinsPrices'
import changexAPY from './changexAPY'

export const fetchPrice = async () => {
     const url = `${GATSBY_PRICE_FETCHER_URL}coins/markets?ids=${changexSupportedTokens.join('%2C')}&vs_currency=usd`;

    if (changexSupportedTokens.length > 0 ) {
        try {
            await axios.get(url)
                .then((res)=> {
                    if(res.status === 200) {
                        coinsPrices = res.data;

                        return {prices: res.data}
                    }
                })
        } catch(err){
            throw new Error(err);
        }

    } else {
        try {
            await fetchCoins().then(()=> {
                fetchPrice()
            })
        } catch (err) {
            console.log("Fetch Coins failed");
        }

    }
}

export const fetchApy = async () => {
    try {
        await axios.get(GATSBY_FETCH_APY_URL)
            .then((res)=> {
                if(res.status === 200) {
                    changexAPY = res.data.inPercent;
                }
            })
    } catch (err) {
        throw new Error(err);
    }
}

export const fetchCoins = async () => {

    await axios.get(`${GATSBY_PRICE_FETCHER_URL}coins/all`)
        .then((res)=> {
            if(res.status === 200) {
                changexSupportedTokens = res.data;
            }
        })
        .catch(err => {
            throw new Error(err);
        });
}

export const sendSendGridWidgetData = ( formData ) => {

    try {
        return axios.post(GATSBY_SENDGRID_URL, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                email: formData,
                first_name: "",
                last_name: "",
                token: GATSBY_SENDGRID_TOKEN,
            })
        })

    } catch (err) {
        throw new Error(err);
    }

}
