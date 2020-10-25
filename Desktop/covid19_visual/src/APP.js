import React from "react";
import styles from "./APP.module.css";
import img from "./img/images.png";
import { Cards, Charts, Country } from "./components";
import { fetchData } from "./api";

class APP extends React.Component {
    state = {
        data: {},
        country: " ",
    }
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState( { data: fetchedData });
    }

    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
        
    }
    render () {
        const { data, country } = this.state;
        return (
            <div className = { styles.container }>
                <img className = { styles.img } src = { img } alt = "COVID19"/>
                <Cards data = { data }/>
                <Country handleCountryChange = {this.handleCountryChange} />
                <Charts data = { data } country = { country }/>
            </div>
        )
    }
};
export default APP;