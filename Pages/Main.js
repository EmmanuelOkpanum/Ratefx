import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import styles from "../styling/styles";

const logo = require("../assets/arrow.png");

const Main = ({ navigation }) => {
  const [currency, setCurrency] = useState([]);
  const [conversionRates, setConversionRates] = useState({});
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://v6.exchangerate-api.com/v6/afc8c59d3755c70d7edc43da/latest/USD"
      );

      const data = await response.json();
      const conversionRates = data.conversion_rates;

      let currencies = [...Object.keys(conversionRates)]; // Create a mutable copy of the array

      // Remove "USD" from the array
      currencies = currencies.filter((currency) => currency !== "USD");

      // Ensure NGN appears first, EUR second, and GBP third
      const priorityCurrencies = ["NGN", "EUR", "GBP"];
      priorityCurrencies.forEach((currency) => {
        //this is used to handle multiple arrays
        const index = currencies.indexOf(currency);
        if (index !== -1) {
          currencies.splice(index, 1); // Remove the currency from its current position
        }
      });

      // Add the priority currencies back in the correct order
      currencies = [...priorityCurrencies, ...currencies];

      setCurrency(currencies);
      setConversionRates(conversionRates); // Store conversion rates in state
      setLoading(false);
    } catch (error) {
      console.error("Error fetching currency list:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <View
        style={[
          styles.container,
          { flex: 1, justifyContent: "center", alignItems: "center" },
        ]}
      >
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <View style={styles.mainHeader}>
        <View style={styles.headerLogo}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
        </View>
      </View>

      <View style={styles.rateContainer}>

        <FlatList
          data={currency}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setSelectedCurrency(item)}>
              <View style={styles.item}>
                <Text style={styles.text}>{item}</Text>
                {selectedCurrency === item && (
                  <View style={styles.indicator} />
                )}
              </View>
            </TouchableOpacity>
          )}
          horizontal
          keyExtractor={(item) => item}
          ItemSeparatorComponent={() => (
            <View
              style={{
                width: 20,
              }}
            />
          )}
        />

        <View style={styles.currencies}>
          {selectedCurrency && (
            <View style={styles.selectedCurrencyBox}> 
             <Text style = {styles.ToRate}>
                  Today's Rate
                </Text>
              <Text style={styles.selectedCurrencyText}>
              
                {conversionRates[selectedCurrency]} {selectedCurrency}
              </Text>
            </View>
          )}
        </View>
      </View>

      {/* <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>Main Page</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Main;
