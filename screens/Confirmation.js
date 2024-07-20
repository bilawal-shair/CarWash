import { View, Text, TouchableOpacity, Image, Modal, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import location from "../assets/location.png"
import Star from "../assets/Star.png"
import SelectArrow from "../assets/SelectArrow.svg"
import Calender from "../assets/Calender.svg"
import Km from "../assets/Km.svg"
import Time from "../assets/Time.svg"
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
// import RNDateTimeSelector from "react-native-date-time-scroll-picker";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';

const Confirmation = () => {

    const navigation = useNavigation();
    const [sheetData, setSheetData] = useState([]);

    const [starRating, setStarRating] = useState(0);
    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    const [selectedDate, setSelectedDate] = useState(''); // 
    const [isTimerVisible, setTimerVisible] = useState(false);
    const [selectedTime, setSelectedTime] = useState(null); // State to hold the selected time
    const [selectedItem, setSelectedItem] = useState("Date");
    const [modalVisible, setModalVisible] = useState(false);

    //client Td  68117542352-oqlico3s1uftldgtbrmb2i2rh7vms7l4.apps.googleusercontent.com
    // client secret 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


    useEffect(() => {
        const fetchData = async () => {
            try {
                const spreadsheetId = '1afPl-_PqFI0k8R-BtaP1UA9sjRjvBMCSvwFUR7ZBskw'; // Extracted from URL
                const sheetName = 'UserData'; // Replace 'UserData' with the name of your sheet
                const apiKey = 'AIzaSyAJkVFPFmBgXe-V_nM09p2wBY2hPH7u31s'; // Replace 'YOUR_API_KEY' with your actual API key

                const response = await axios.get(
                    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`
                );

                // Assuming the response data is in JSON format
                setSheetData(response.data.values);
                console.log('Data:', response.data.values);
            } catch (error) {
                if (error.response && error.response.status === 403) {
                    console.error('Access to Google Sheets API is forbidden. Check API key permissions and spreadsheet access.');
                } else {
                    console.error('Error fetching data:', error);
                }
            }
        };

        fetchData();
    }, []);
   
    const handleSelectItem = (item) => {
        setSelectedItem(item === selectedItem ? null : item);
    };


    const toggle1Modal = () => {
        setShowModal(!showModal);
    };

    const toggle2Modal = () => {
        setModalVisible(!modalVisible);
    };

    const handleDayPress = (day) => {
        setSelectedDate(day.dateString); // Update selected date
        setShowModal(false); // Hide modal after selecting date
    };
    const handleStarPress = (rating) => {
        setStarRating(rating);
    };

    // const handleSelectTime = (value) => {
    //     // Format the selected time
    //     const hours = parseInt(value.split(':')[0], 10);
    //     const minutes = parseInt(value.split(':')[1], 10);
    //     const ampm = hours >= 12 ? 'PM' : 'AM';
    //     const formattedHours = hours % 12 || 12; // Convert hours to 12-hour format
    //     const formattedMinutes = addZeroToDigits(minutes); // Utilize the function to add zero to single-digit minutes
    //     const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;

    //     // Update the state with the selected time
    //     setSelectedTime(formattedTime);
    // };
    // const borderWidth = 3;
    // const setTimerWidthHeight = 75;
    // const selectedItemTextSize = 18;
    // const wrapperHeight = setTimerWidthHeight - (borderWidth * 2);

    // const addZeroToDigits = (digit) => {
    //     if (digit) {
    //         let zeroAdded = `0${digit}`;
    //         return zeroAdded.substring(zeroAdded.length - 2);
    //     } else {
    //         return `00`;
    //     }
    // }

    // const dataSet = {
    //     data: {
    //         firstColumn: [...Array(13).keys()].map((item, idx) => { return { value: addZeroToDigits(item), index: idx } }),
    //         secondColumn: [...Array(60).keys()].map((item, idx) => { return { value: addZeroToDigits(item), index: idx } }),
    //         thirdColumn: [
    //             { value: 'AM', index: 0 },
    //             { value: 'PM', index: 1 }
    //         ],
    //     },
    //     initials: [8, 25, 0]
    // }

    // const seperatorComponentRendererOne = () => {
    //     return <Text style={{ fontSize: selectedItemTextSize, lineHeight: setTimerWidthHeight * 0.15 }}>:</Text>
    // }
    // const seperatorComponentRendererTwo = () => {
    //     return <Text style={{ fontSize: selectedItemTextSize, lineHeight: setTimerWidthHeight * 0.15 }}></Text>
    // }
    // console.log("Selected Time:", selectedTime);

    return (

        <View style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
        <View style={{ backgroundColor: "white" }}>
            {sheetData && sheetData.map((row, index) => (
                <View key={index}>
                    {index === 0 ? ( // Check if it's the first row (heading)
                        <View style={{ flexDirection: "row" }}>
                            {row.map((cell, cellIndex) => (
                                <Text style={{ color: "black", fontSize: 20, fontWeight: "900", margin: 30 }} key={cellIndex}>{cell}</Text>
                            ))}
                        </View>
                    ) : ( // For data rows
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            {row.map((cell, cellIndex) => (
                                <Text style={{ color: "black", fontSize:15, fontWeight: "400", margin:7,marginLeft:30 }} key={cellIndex}>{cell}</Text>
                            ))}
                        </View>
                    )}
                </View>
            ))}
        </View>
    </View>
    
        // <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        //     <View style={{ width: "98%", height: "100%", alignSelf: "center" }}>
        //         <View style={{ borderRadius: 35, flexDirection: 'row', justifyContent: 'space-between', paddingTop: hp("4%") }}>
        //             <TouchableOpacity onPress={() => navigation.navigate('service')} style={{ marginLeft: wp("8%"), width: wp("7%"), height: hp("4%"), borderRadius: 2, borderWidth: 0.1, borderColor: '#717171' }}>
        //                 <SelectArrow style={{ alignSelf: "center", top: hp("1%") }} size={30} />
        //             </TouchableOpacity>
        //             <View style={{ right: wp("30%") }}>
        //                 <Text style={{ fontSize: 20, fontWeight: '900', color: '#242424' }}>Confirmation</Text>
        //             </View>
        //         </View>

        //         <View style={{
        //             alignSelf: "center", flexDirection: 'row',
        //             width: '90%', height: 160, backgroundColor: '#FFF',
        //             marginTop: hp("4%"), borderRadius: 9, elevation: 3, shadowColor: "gray"
        //         }}>
        //             <View style={{ width: 129, height: 137, borderRadius: 9 }}>
        //                 <Image source={{ uri: "https://img.freepik.com/free-photo/man-washing-his-car-garage_1157-26046.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais" }} style={{ width: 129, height: 137, borderRadius: 9, top: 10, left: 5 }} />
        //             </View>
        //             <View>
        //                 <View style={{ flexDirection: 'row', marginTop: hp("1%") }}>
        //                     <Text style={{ fontSize: 14, fontWeight: '900', color: '#242424', marginLeft: wp("3%") }} >
        //                         Rahim chacha car wash
        //                     </Text>

        //                 </View>

        //                 <View style={{ flexDirection: 'row', marginTop: hp("1%") }}>
        //                     <Image source={location} style={{ width: 13, height: 15, borderRadius: 10, marginLeft: wp("3%") }} />
        //                     <Text style={{ fontSize: 10, fontWeight: '700', color: '#242424', marginLeft: wp("1%") }}>Chaklala Can’tt, Rawalpindi</Text>
        //                 </View>

        //                 <View style={{ flexDirection: 'row', marginLeft: wp("3%"), alignItems: 'center', marginTop: hp("1%") }}>
        //                     <Text style={{ fontSize: 10, fontWeight: '900', color: 'black' }}>Rating:</Text>
        //                     <Image source={Star} style={{ width: 55, height: 9, marginLeft: wp("1%"), marginRight: wp("1%") }} />

        //                     <Text style={{ fontSize: 11, fontWeight: 'bold', color: 'black', marginLeft: wp("1%"), marginTop: hp("1%") }}>4.5</Text>
        //                 </View>
        //                 <View style={{ flexDirection: 'row', marginTop: hp("1.5%") }}>
        //                     <View style={{ flexDirection: 'row', left: wp("3%") }}>

        //                         <Km style={{}} />
        //                         <Text style={{ fontSize: 9, fontWeight: '900', color: '#242424', marginLeft: wp("1%") }}>
        //                             0.5 km
        //                         </Text>
        //                         <Time style={{ left: 5 }} />

        //                         <Text style={{ fontSize: 9, fontWeight: '900', color: '#242424', left: wp("2%") }}>
        //                             03 minute
        //                         </Text>
        //                     </View>

        //                 </View>
        //             </View>
        //         </View>
        //         <View style={{ marginLeft: 25, marginTop: hp("4%") }}>
        //             <Text style={{ fontSize: 15, fontWeight: "900", color: "#242424" }}> Select DATE & TIME</Text>
        //         </View>
        //         <View style={{ flexDirection: "row", marginTop: hp("1.6%"), justifyContent: "space-evenly" }}>
        //             <TouchableOpacity onPress={() => { toggle1Modal(); handleSelectItem("Date"); }} style={{ width: wp("40%"), height: hp("9%"), borderRadius: 12, borderColor: selectedItem === 'Date' ? "#2B91DB" : "#FBFBFB", borderWidth: 1, backgroundColor: "#FBFBFB" }}>
        //                 <View style={{ flexDirection: "row", top: hp("1.5%") }}>
        //                     {/* <Image source={Date} style={{ width: 15, height: 15, marginLeft: 20 }} /> */}
        //                     <Calender style={{ left: wp("3%") }} size={30} />
        //                     <Text style={{ fontSize: 12, fontWeight: "900", color: "#2B91DB", left: wp("5%") }}>DATE</Text>
        //                 </View>
        //                 <View style={{ marginTop: hp("1%"), alignItems: "center", marginLeft: wp("6%") }}>
        //                     <View style={{ marginTop: hp("1%") }}>
        //                         <Text style={{ fontSize: 14, fontWeight: "700", color: "#2B91DB", left: wp("1%") }}>{selectedDate ? selectedDate : "Select Date"}</Text>
        //                     </View>
        //                 </View>
        //             </TouchableOpacity>

        //             {/* Modal */}
        //             <Modal
        //                 visible={showModal}
        //                 transparent={true}
        //                 onRequestClose={() => setShowModal(false)}
        //             >
        //                 <View style={{ justifyContent: 'center', alignItems: 'center', top: hp("2%") }}>
        //                     <View style={{ width: wp("80%"), borderRadius: 15 }}>
        //                         <Calendar
        //                             onDayPress={handleDayPress}
        //                             markedDates={{
        //                                 [selectedDate]: { selected: true, marked: true, selectedColor: '#2B91DB' }, // Mark selected date
        //                                 '2024-02-22': { marked: true, dotColor: 'red', backgroundColor: 'yellow' }, // Example of custom styling for a specific date
        //                                 '2024-02-23': { marked: true, dotColor: 'green', backgroundColor: 'blue' } // Another example
        //                                 // Add more dates and customize their styles as needed
        //                             }}
        //                             style={{
        //                                 // Add your custom styles here
        //                                 backgroundColor: '#FBFBFB', // Set background color
        //                                 borderTopRightRadius: 15, // Set border radius
        //                                 borderBottomLeftRadius: 15,
        //                                 borderBottomRightRadius: 15,
        //                                 padding: 10,
        //                                 elevation: 4
        //                                 // Set padding
        //                                 // Add more styles as needed
        //                             }}
        //                             theme={{
        //                                 // You can customize the appearance of the calendar further using the theme object
        //                                 // For example:
        //                                 arrowColor: 'black', // Color of the arrow buttons
        //                                 todayTextColor: 'green', // Color of today's date
        //                                 dayTextColor: 'black', // Color of the day text
        //                                 textDisabledColor: 'gray', // Color of disabled dates
        //                                 monthTextColor: 'black', // Color of the month text
        //                                 textDayFontWeight: 'bold' // Font weight of the day text
        //                                 // Add more theme properties as needed
        //                             }}
        //                         />

        //                     </View>
        //                 </View>
        //             </Modal>
        //             <View>
        //                 <TouchableOpacity
        //                     style={{
        //                         width: wp("40%"), height: hp("9%"), borderRadius: 12,
        //                         borderColor: selectedItem === 'Time' ? "#2B91DB" : "#FBFBFB",
        //                         borderWidth: 1,
        //                         justifyContent: 'center',
        //                         alignItems: 'center',
        //                         backgroundColor: "#FBFBFB"
        //                     }}
        //                 // onPress={() => { toggle2Modal(); handleSelectTime("Time"); handleSelectItem("Time")}}
        //                 >
        //                     <View style={{ flexDirection: "row" }}>
        //                         {/* <Image source={Date} style={{ width: 15, height: 15, marginLeft: 20 }} /> */}
        //                         <Time style={{ right: wp("11%") }} size={30} />
        //                         <Text style={{ fontSize: 12, fontWeight: "900", color: "#2B91DB", right: wp("9%") }}>Time</Text>
        //                     </View>
        //                     <Text style={{ left: wp("4%"), fontSize: 14, fontWeight: '700', color: '#2B91DB', marginTop: hp("1%") }}>
        //                         {selectedTime ? selectedTime : 'Select Time'}
        //                     </Text>
        //                 </TouchableOpacity>
        //                 {/* <Modal
        //                 visible={modalVisible}
        //                 transparent={true}
        //                 onRequestClose={() => setModalVisible(false)}>
        //                 <View style={{ flex: 1, alignItems: 'center', top: hp("13%") }}>
        //                     <View style={{ backgroundColor: 'white', borderRadius: 4, padding: 20, elevation: 5 }}>
        //                         <RNDateTimeSelector
        //                              dataSet={dataSet}
        //                              onValueChange={(value) => {
        //                                  const hours = addZeroToDigits(value[0].value); // Extract value from the object
        //                                  const minutes = addZeroToDigits(value[1].value); // Extract value from the object
        //                                  const ampm = value[2].value; // Extract value from the object
        //                                  const formattedTime = `${hours}:${minutes} ${ampm}`;
        //                                  setSelectedTime(formattedTime);
        //                              }}
        //                             containerStyle={{
        //                                 alignSelf: 'center',
        //                                 borderWidth: 0,
        //                                 borderColor: 'transparent',
        //                                 borderRadius: 0,
        //                                 height: wrapperHeight
        //                             }}
        //                             scrollPickerOptions={{
        //                                 itemHeight: 27,
        //                                 wrapperHeight: wrapperHeight - (borderWidth * 2),
        //                                 wrapperColor: "rgba(0,0,0,0)",
        //                                 highlightColor: "rgba(0,0,0,0.9)"
        //                             }}
        //                             textStyle={{
        //                                 fontSize: selectedItemTextSize,
        //                                 fontFamily: null
        //                             }}
        //                             textColor={{
        //                                 primary: 'rgba(0,0,0,1.0)',
        //                                 secondary: 'rgba(0,0,0,0.5)',
        //                                 other: 'rgba(0,0,0,0.15)',
        //                             }}
        //                             firstSeperatorComponent={seperatorComponentRendererOne}
        //                             secondSeperatorComponent={seperatorComponentRendererTwo}
        //                         />
        //                         <TouchableOpacity onPress={() => setModalVisible(false)} style={{ marginTop: hp("1%") }}>
        //                             <Text style={{ color: '#2B91DB', fontSize: 14 }}>Close</Text>
        //                         </TouchableOpacity>
        //                     </View>
        //                 </View>
        //             </Modal> */}
        //             </View>
        //         </View>


        //         <View style={{ marginTop: hp("3%") }}>
        //             <Text style={{ fontSize: 16, fontWeight: "900", color: "#242424", left: wp("7%") }}>Booking Confirmation</Text>
        //         </View>

        //         <View style={{ flex: 1, top: hp("1%") }}>
        //             <ScrollView style={{ bottom: 5 }}>

        //                 <View style={{ width: wp("90%"), height: hp("6%"), borderRadius: 12, backgroundColor: "#FBFBFB", elevation: 3, alignSelf: "center", marginTop: hp("1%") }}>
        //                     <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: hp("2%") }}>
        //                         <Text style={{ fontSize: 12, fontWeight: "400", color: "#8A8A8A", marginLeft: wp("1.5%") }}>Booking Date & Time</Text>

        //                         <View style={{ flexDirection: "row", marginRight: wp("1.5%") }}>
        //                             <Text style={{ fontSize: 14, fontWeight: "900", color: "#2B91DB", marginRight: wp("1%") }}>06 Nov, 2024</Text>
        //                             <View style={{ width: 0.94, height: 30, backgroundColor: '#D6D6D6', alignSelf: "center" }}></View>
        //                             <Text style={{ fontSize: 14, fontWeight: "900", color: "#2B91DB", marginLeft: wp("1%") }}>09:00 am</Text>
        //                         </View>
        //                     </View>
        //                 </View>


        //                 {/* <View style={{ width: 380, height: 54, borderRadius: 12, backgroundColor: "#FBFBFB", alignSelf: "center", marginTop: 18 }}>
        //         <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
        //             <Text style={{ fontSize: 12, fontWeight: "400", color: "#8A8A8A", marginLeft: 15 }}>Car Model & Name</Text>

        //             <View style={{ flexDirection: "row", marginRight: 15 }}>
        //                 <Text style={{ fontSize: 14, fontWeight: "900", color: "#2B91DB", marginRight: 10 }}>Honda</Text>
        //                 <View style={{ width: 0.94, height: 28, backgroundColor: '#D6D6D6', alignSelf: "center", marginBottom: 20 }}></View>
        //                 <Text style={{ fontSize: 14, fontWeight: "900", color: "#2B91DB", marginLeft: 10 }}>Civic</Text>
        //             </View>
        //         </View>
        //         </View> */}

        //                 <View style={{ width: wp("90%"), height: hp("6%"), borderRadius: 12, backgroundColor: "#FBFBFB", elevation: 3, alignSelf: "center", marginTop: hp("1.8%") }}>
        //                     <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: hp("1.5%") }}>
        //                         <Text style={{ fontSize: 12, fontWeight: "400", color: "#8A8A8A", marginLeft: wp("1.5%") }}>Service Type</Text>
        //                         <View style={{ marginRight: wp("1.5%") }}>
        //                             <Text style={{ fontSize: 14, fontWeight: "900", color: "#2B91DB", marginRight: wp("1%") }}>Service Station</Text>
        //                         </View>
        //                     </View>
        //                 </View>
        //                 <View style={{ width: wp("90%"), height: hp("6%"), borderRadius: 12, backgroundColor: "#FBFBFB", elevation: 3, alignSelf: "center", marginTop: hp("1.8%") }}>
        //                     <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: hp("1.5%") }}>
        //                         <Text style={{ fontSize: 12, fontWeight: "400", color: "#8A8A8A", marginLeft: wp("2%") }}>Service</Text>
        //                         <View style={{ marginRight: 15 }}>
        //                             <Text style={{ fontSize: 14, fontWeight: "900", color: "#2B91DB", marginRight: wp("1%") }}>Exterior Washing</Text>
        //                         </View>
        //                     </View>
        //                 </View>
        //                 <View style={{ width: wp("90%"), height: hp("6%"), bottom: 5, borderRadius: 12, backgroundColor: "#FBFBFB", elevation: 3, alignSelf: "center", marginTop: hp("1.6%") }}>
        //                     <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: hp("1.5%") }}>
        //                         <Text style={{ fontSize: 12, fontWeight: "400", color: "#8A8A8A", marginLeft: wp("1.5%") }}>Service Charges</Text>
        //                         <View style={{ marginRight: wp("1.5%") }}>
        //                             <Text style={{ fontSize: 14, fontWeight: "900", color: "#2B91DB", marginRight: wp("1%") }}>250 PKR</Text>
        //                         </View>
        //                     </View>
        //                 </View>
        //             </ScrollView>

                
                  

        //             {/* <TouchableOpacity onPress={() => navigation.navigate("submitted")} style={{ width: wp("96%"), height: hp("8%"), backgroundColor: '#A6A6A6', borderRadius: 12, alignSelf: "center", bottom: hp("3%") }}>
        //                 <Text style={{ fontSize: 16, fontWeight: "900", color: "#FFF", alignSelf: "center", marginTop: hp("2.5%") }}>SUBMIT</Text>
        //             </TouchableOpacity> */}
        //         </View>
        //     </View>

        // </View>
    )
}
export default Confirmation