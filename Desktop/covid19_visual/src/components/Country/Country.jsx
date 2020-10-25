import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./Country.module.css";
import { fetchCountries } from "../../api";

const Countries = ({ handleCountryChange }) => {
    const [ countries, setFetchedCountries ] = useState([ ]);
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries]);
    return (
        <FormControl className = { styles.formControl }>
            <NativeSelect defaultValue = "" onChange = {(e) => handleCountryChange(e.target.value)}>
                <option value = "">Global</option>
                {countries.map((country, i) => <option key = {i} value = {country}>{ country }</option>)}
            </NativeSelect>
        </FormControl>
    )
};

export default Countries;