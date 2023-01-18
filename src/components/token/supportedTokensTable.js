import * as React from "react";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";

import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import coinsPrices from "../../../static/assets/js/coinsPrices";


export default function SupportedTokensTable() {
    const [coins, setCoinsData] = useState([]);

    useEffect(() => {
        setPrice();

        setTimeout(() => {
            setPrice();
        }, 1000);
    }, []);

    function setPrice() {
        if (coinsPrices) {
            setCoinsData(coinsPrices);
        }
    }

    return (
        <TableContainer
            sx={{ maxHeight: 600 }}
            className="background-color-white margin-auto-large"
            component={Paper}
        >
            <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell
                            className="text-weight-xsmall font-paragraph"
                            align="center"
                        >
                            NAME
                        </TableCell>
                        <TableCell
                            className="text-weight-xsmall font-paragraph"
                            align="center"
                        >
                            CURRENT PRICE
                        </TableCell>
                        <TableCell
                            className="text-weight-xsmall font-paragraph"
                            align="center"
                        >
                            24H CHANGE
                        </TableCell>
                        <TableCell
                            className="text-weight-xsmall font-paragraph"
                            align="center"
                        >
                            MARKER CAP
                        </TableCell>
                        <TableCell
                            className="text-weight-xsmall font-paragraph"
                            align="center"
                        >
                            CIRCULATING SUPPLY
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {coins.map((item, index) => (
                        <TableRow
                            key={index}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell
                                className="tableCellIcon"
                                component="th"
                                sx={{ width: 200 }}
                                scope="row"
                            >
                                <IconButton>
                                    <img
                                        src={`/images/token/${item.symbol}.svg`}
                                        loading="lazy"
                                        alt={item.symbol}
                                        className="crawlImg"
                                    ></img>
                                </IconButton>
                                {item.name}
                            </TableCell>
                            <TableCell
                                align="center"
                                className="tableCell"
                                component="th"
                                scope="row"
                            >
                                <NumericFormat
                                    value={item.current_price}
                                    displayType={"text"}
                                    prefix={"$"}
                                />
                            </TableCell>
                            <TableCell
                                align="center"
                                className="tableCell"
                                component="th"
                                scope="row"
                            >
                                <NumericFormat
                                    className={`${
                                        item.price_change_percentage_24h < 0 ? "is-red" : "is-green"
                                    }`}
                                    allowNegative={true}
                                    value={item.price_change_percentage_24h}
                                    displayType={"text"}
                                    suffix={"%"}
                                />
                            </TableCell>
                            <TableCell
                                align="center"
                                className="tableCell"
                                component="th"
                                scope="row"
                            >
                                <NumericFormat
                                    value={item.market_cap}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                            </TableCell>
                            <TableCell
                                align="center"
                                className="tableCell"
                                component="th"
                                scope="row"
                            >
                                <NumericFormat
                                    value={item.circulating_supply}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
