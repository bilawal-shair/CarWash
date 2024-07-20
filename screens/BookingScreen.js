import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import arrow2 from "../assets/arrow2.png"
import location from "../assets/location.png"
import Star from "../assets/Star.png"
import time from "../assets/time.png"
import Minut from "../assets/Minut.png"
import Group18 from "../assets/Group18.png"
import Ellipse from "../assets/Ellipse.png"
import { useNavigation } from '@react-navigation/native'
import SelectArrow from "../assets/SelectArrow.svg"
import Km from "../assets/Km.svg"
import Time from "../assets/Time.svg"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BookingScreen = () => {
  const [selectedTab, setSelectedTab] = useState('active');
  const navigation = useNavigation();

  const renderContent = () => {
    switch (selectedTab) {
      case 'active':
        return (
          // Content for 'services' tab
          <View>
            {/* ////////////Pending///////////// */}
            <View style={{
              alignSelf: "center",
              width: '96%', height: hp("23%"), backgroundColor: '#FFF',
              marginTop: hp("4%"), borderRadius: 9, elevation: 1, shadowColor: "gray", borderWidth: 0.5, borderColor: "#FFFFFF"
            }}>

                <View style={{ flexDirection: "row" }}>
                <View style={{  marginLeft: wp("2%"), marginTop: hp("1%") }}>
                  <Image source={{ uri: "https://img.freepik.com/free-photo/man-washing-his-car-garage_1157-26046.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais" }} style={{ width: wp("25%"), height: hp("13%"), borderRadius: 9 }} />
                 </View>
                 <View style={{ marginLeft: -wp("3%") }}>
                  <View style={{ flexDirection: 'row', marginTop: hp("1%") }}>
                    <Text style={{ fontSize: 14, fontWeight: '900', color: '#242424', marginLeft: wp("6%") }} >
                      Ramo kaka car wash
                    </Text>
                  </View>
                  <View style={{ width: wp("40%"), height: hp("4%"), backgroundColor: "#EAF4FB", borderRadius: 41, marginLeft: wp("6%"), marginTop: hp("1.2%") }}>
                    <View style={{ flexDirection: "row", marginTop: hp("1%") }}>
                      <Text style={{ fontSize: 10, fontWeight: "500", color: "#2B91DB", marginLeft: wp("1%") }}>Chaklala Can’tt, Rawalpindi</Text>
                      <TouchableOpacity style={{ marginLeft: wp("1.2%"), position: 'relative' }}>
                        <Image source={Ellipse} style={{ width: 22, height: 22, borderRadius: 10 }} />
                        <View style={{ position: "absolute", top: hp("0.7%"), left: wp("1%") }}>
                          <Image source={Group18} style={{ width: 12, height: 10 }} />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>


                  <View style={{ flexDirection: 'row', marginTop: hp("1%"),marginLeft:wp("5%") }}>
                    <View style={{ flexDirection: 'row' }}>
                      {/* <Image source={Minut} style={{ width: 16, height: 16, marginLeft: wp("2%") }} /> */}
                      <Km style={{ marginLeft: wp("2%") }}/>
                      <Text style={{ fontSize: 9, fontWeight: '900', color: '#242424', marginLeft: wp("1%") }}>
                        0.5 km
                      </Text>
                      {/* <Image source={time} style={{ width: 12, height: 13, borderRadius: 8, marginLeft: wp("2%") }} /> */}
                      <Time style={{ marginLeft: wp("2%") }}/>
                      <Text style={{ fontSize: 9, fontWeight: '900', color: '#242424', marginLeft: wp("1%") }}>
                        03 minute
                      </Text>
                    </View>
                   </View>
                </View>
                <View style={{left:wp("5%"), width: wp("15%"), height: hp("3%"), backgroundColor: "rgba(255, 164, 82, 0.10)", borderRadius: 6, marginTop: hp("1%") }}>
                  <Text style={{ alignSelf: "center", fontSize: 10, fontWeight: "900", color: "#FFA452", marginTop: hp("0.5%") }}>PENDING</Text>
                </View>
              </View>

              <View style={{ width: "90%", height: 1, backgroundColor: "#D6D6D6", alignSelf: "center", top: hp("2%") }}
              ></View>

              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                <View style={{ marginLeft: wp("4%"),top:hp("3%") }}>
                  <Text style={{ fontSize: 8, fontWeight: "500", color: "#C2C2C2" }}>Order ID</Text>
                  <Text style={{ fontSize: 12, fontWeight: "600", color: "#242424", marginTop: 2 }}>#0123456764</Text>
                </View>
                <View style={{ width: 1, height: 27, backgroundColor: '#D6D6D6',top: hp("3%") }}></View>
                <View  style={{ marginLeft: wp("4%"),top:hp("3%")}}>
                  <Text style={{ fontSize: 8, fontWeight: "500", color: "#C2C2C2" }}>Order Date</Text>
                  <Text style={{ fontSize: 12, fontWeight: "600", color: "#242424", marginTop: 2 }}>06 Nov, 2024</Text>
                </View>
                <View style={{ width: 1, height: 27, backgroundColor: '#D6D6D6',top: hp("3%") }}></View>
                <View  style={{ marginLeft: wp("4%"),top:hp("3%") }} >
                  <Text style={{ fontSize: 8, fontWeight: "500", color: "#C2C2C2" }}>Order Time</Text>
                  <Text style={{ fontSize: 12, fontWeight: "600", color: "#242424", marginTop: 2 }}>09:00 am</Text>
                </View>

                <View style={{ width: wp("23%"), height: hp("4%"), backgroundColor: "#2B91DB", borderRadius: 4, marginRight: 20,top:hp("3%"),left:wp("1%") }}>
                  <View style={{ alignSelf: "center", marginTop: hp("0.5%") }}>
                    <Text style={{ fontSize: 8, fontWeight: "600", color: "#FFF" }}>Total Payment:</Text>
                    <Text style={{ fontSize: 11, fontWeight: "900", color: "#FFF" }}>250 PKR</Text>
                   </View>
                </View>

              </View>

            </View>
            {/* ///////Accepted/////////////////// */}
            <View style={{
              alignSelf: "center",
              width: '96%', height: hp("23%"), backgroundColor: '#FFF',
              marginTop: hp("4%"), borderRadius: 9, elevation: 1, shadowColor: "gray", borderWidth: 0.5, borderColor: "#FFFFFF"
            }}>

                <View style={{ flexDirection: "row" }}>
                <View style={{  marginLeft: wp("2%"), marginTop: hp("1%") }}>
                  <Image source={{ uri: "https://img.freepik.com/free-photo/man-washing-his-car-garage_1157-26046.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais" }} style={{ width: wp("25%"), height: hp("13%"), borderRadius: 9 }} />
                 </View>
                 <View style={{ marginLeft: -wp("3%") }}>
                  <View style={{ flexDirection: 'row', marginTop: hp("1%") }}>
                    <Text style={{ fontSize: 14, fontWeight: '900', color: '#242424', marginLeft: wp("6%") }} >
                      Ramo kaka car wash
                    </Text>
                  </View>
                  <View style={{ width: wp("40%"), height: hp("4%"), backgroundColor: "#EAF4FB", borderRadius: 41, marginLeft: wp("6%"), marginTop: hp("1.2%") }}>
                    <View style={{ flexDirection: "row", marginTop: hp("1%") }}>
                      <Text style={{ fontSize: 10, fontWeight: "500", color: "#2B91DB", marginLeft: wp("1%") }}>Chaklala Can’tt, Rawalpindi</Text>
                      <TouchableOpacity style={{ marginLeft: wp("1.2%"), position: 'relative' }}>
                        <Image source={Ellipse} style={{ width: 22, height: 22, borderRadius: 10 }} />
                        <View style={{ position: "absolute", top: hp("0.7%"), left: wp("1%") }}>
                          <Image source={Group18} style={{ width: 12, height: 10 }} />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>


                  <View style={{ flexDirection: 'row', marginTop: hp("1%"),marginLeft:wp("5%") }}>
                    <View style={{ flexDirection: 'row' }}>
                      {/* <Image source={Minut} style={{ width: 16, height: 16, marginLeft: wp("2%") }} /> */}
                      <Km style={{ marginLeft: wp("2%") }}/>
                      <Text style={{ fontSize: 9, fontWeight: '900', color: '#242424', marginLeft: wp("1%") }}>
                        0.5 km
                      </Text>
                      {/* <Image source={time} style={{ width: 12, height: 13, borderRadius: 8, marginLeft: wp("2%") }} /> */}
                      <Time style={{ marginLeft: wp("2%") }}/>
                      <Text style={{ fontSize: 9, fontWeight: '900', color: '#242424', marginLeft: wp("1%") }}>
                        03 minute
                      </Text>
                    </View>
                   </View>
                </View>
                <View style={{left:wp("5%"), width: wp("15%"), height: hp("3%"),  backgroundColor: "#EAF4FB", borderRadius: 6, marginTop: hp("1%") }}>
                  <Text style={{ alignSelf: "center", fontSize: 10, fontWeight: "900", color: "#2B91DB", marginTop: hp("0.5%") }}>ACCEPTED</Text>
                </View>
              </View>

              <View style={{ width: "90%", height: 1, backgroundColor: "#D6D6D6", alignSelf: "center", top: hp("2%") }}
              ></View>

              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                <View style={{ marginLeft: wp("4%"),top:hp("3%") }}>
                  <Text style={{ fontSize: 8, fontWeight: "500", color: "#C2C2C2" }}>Order ID</Text>
                  <Text style={{ fontSize: 12, fontWeight: "600", color: "#242424", marginTop: 2 }}>#0123456764</Text>
                </View>
                <View style={{ width: 1, height: 27, backgroundColor: '#D6D6D6',top: hp("3%") }}></View>
                <View  style={{ marginLeft: wp("4%"),top:hp("3%")}}>
                  <Text style={{ fontSize: 8, fontWeight: "500", color: "#C2C2C2" }}>Order Date</Text>
                  <Text style={{ fontSize: 12, fontWeight: "600", color: "#242424", marginTop: 2 }}>06 Nov, 2024</Text>
                </View>
                <View style={{ width: 1, height: 27, backgroundColor: '#D6D6D6',top: hp("3%") }}></View>
                <View  style={{ marginLeft: wp("4%"),top:hp("3%") }} >
                  <Text style={{ fontSize: 8, fontWeight: "500", color: "#C2C2C2" }}>Order Time</Text>
                  <Text style={{ fontSize: 12, fontWeight: "600", color: "#242424", marginTop: 2 }}>09:00 am</Text>
                </View>

                <View style={{ width: wp("23%"), height: hp("4%"), backgroundColor: "#2B91DB", borderRadius: 4, marginRight: 20,top:hp("3%"),left:wp("1%") }}>
                  <View style={{ alignSelf: "center", marginTop: hp("0.5%") }}>
                    <Text style={{ fontSize: 8, fontWeight: "600", color: "#FFF" }}>Total Payment:</Text>
                    <Text style={{ fontSize: 11, fontWeight: "900", color: "#FFF" }}>250 PKR</Text>
                   </View>
                </View>

              </View>

            </View>
          </View>
        );
      case 'completed':
        return (
          <View>
            <View style={{
              alignSelf: "center",
              width: '96%', height: hp("23%"), backgroundColor: '#FFF',
              marginTop: hp("4%"), borderRadius: 9, elevation: 1, shadowColor: "gray", borderWidth: 0.5, borderColor: "#FFFFFF"
            }}>

                <View style={{ flexDirection: "row" }}>
                <View style={{  marginLeft: wp("2%"), marginTop: hp("1%") }}>
                  <Image source={{ uri: "https://img.freepik.com/free-photo/man-washing-his-car-garage_1157-26046.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais" }} style={{ width: wp("25%"), height: hp("13%"), borderRadius: 9 }} />
                 </View>
                 <View style={{ marginLeft: -wp("3%") }}>
                  <View style={{ flexDirection: 'row', marginTop: hp("1%") }}>
                    <Text style={{ fontSize: 14, fontWeight: '900', color: '#242424', marginLeft: wp("6%") }} >
                      Ramo kaka car wash
                    </Text>
                  </View>
                  <View style={{ width: wp("40%"), height: hp("4%"), backgroundColor: "#EAF4FB", borderRadius: 41, marginLeft: wp("6%"), marginTop: hp("1.2%") }}>
                    <View style={{ flexDirection: "row", marginTop: hp("1%") }}>
                      <Text style={{ fontSize: 10, fontWeight: "500", color: "#2B91DB", marginLeft: wp("1%") }}>Chaklala Can’tt, Rawalpindi</Text>
                      <TouchableOpacity style={{ marginLeft: wp("1.2%"), position: 'relative' }}>
                        <Image source={Ellipse} style={{ width: 22, height: 22, borderRadius: 10 }} />
                        <View style={{ position: "absolute", top: hp("0.7%"), left: wp("1%") }}>
                          <Image source={Group18} style={{ width: 12, height: 10 }} />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>


                  <View style={{ flexDirection: 'row', marginTop: hp("1%"),marginLeft:wp("5%") }}>
                    <View style={{ flexDirection: 'row' }}>
                      {/* <Image source={Minut} style={{ width: 16, height: 16, marginLeft: wp("2%") }} /> */}
                      <Km style={{ marginLeft: wp("2%") }}/>
                      <Text style={{ fontSize: 9, fontWeight: '900', color: '#242424', marginLeft: wp("1%") }}>
                        0.5 km
                      </Text>
                      {/* <Image source={time} style={{ width: 12, height: 13, borderRadius: 8, marginLeft: wp("2%") }} /> */}
                      <Time style={{ marginLeft: wp("2%") }}/>
                      <Text style={{ fontSize: 9, fontWeight: '900', color: '#242424', marginLeft: wp("1%") }}>
                        03 minute
                      </Text>
                    </View>
                   </View>
                </View>
                <View style={{left:wp("5%"), width: wp("17%"), height: hp("3%"), backgroundColor: "rgba(0, 255, 56, 0.10)", borderRadius: 6, marginTop: hp("1%") }}>
                  <Text style={{ alignSelf: "center", fontSize: 10, fontWeight: "900",  color: "#00BD13", marginTop: hp("0.5%") }}>COMPLETED</Text>
                </View>
              </View>

              <View style={{ width: "90%", height: 1, backgroundColor: "#D6D6D6", alignSelf: "center", top: hp("2%") }}
              ></View>

              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                <View style={{ marginLeft: wp("4%"),top:hp("3%") }}>
                  <Text style={{ fontSize: 8, fontWeight: "500", color: "#C2C2C2" }}>Order ID</Text>
                  <Text style={{ fontSize: 12, fontWeight: "600", color: "#242424", marginTop: 2 }}>#0123456764</Text>
                </View>
                <View style={{ width: 1, height: 27, backgroundColor: '#D6D6D6',top: hp("3%") }}></View>
                <View  style={{ marginLeft: wp("4%"),top:hp("3%")}}>
                  <Text style={{ fontSize: 8, fontWeight: "500", color: "#C2C2C2" }}>Order Date</Text>
                  <Text style={{ fontSize: 12, fontWeight: "600", color: "#242424", marginTop: 2 }}>06 Nov, 2024</Text>
                </View>
                <View style={{ width: 1, height: 27, backgroundColor: '#D6D6D6',top: hp("3%") }}></View>
                <View  style={{ marginLeft: wp("4%"),top:hp("3%") }} >
                  <Text style={{ fontSize: 8, fontWeight: "500", color: "#C2C2C2" }}>Order Time</Text>
                  <Text style={{ fontSize: 12, fontWeight: "600", color: "#242424", marginTop: 2 }}>09:00 am</Text>
                </View>

                <View style={{ width: wp("23%"), height: hp("4%"), backgroundColor: "#00BD13", borderRadius: 4, marginRight: 20,top:hp("3%"),left:wp("1%") }}>
                  <View style={{ alignSelf: "center", marginTop: hp("0.5%") }}>
                    <Text style={{ fontSize: 8, fontWeight: "600", color: "#FFF" }}>Total Payment:</Text>
                    <Text style={{ fontSize: 11, fontWeight: "900", color: "#FFF" }}>250 PKR</Text>
                   </View>
                </View>

              </View>

            </View>
            {/* /////////Completed/////////////////////// */}
            <View style={{
              alignSelf: "center",
              width: '96%', height: hp("23%"), backgroundColor: '#FFF',
              marginTop: hp("4%"), borderRadius: 9, elevation: 1, shadowColor: "gray", borderWidth: 0.5, borderColor: "#FFFFFF"
            }}>

                <View style={{ flexDirection: "row" }}>
                <View style={{  marginLeft: wp("2%"), marginTop: hp("1%") }}>
                  <Image source={{ uri: "https://img.freepik.com/free-photo/man-washing-his-car-garage_1157-26046.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais" }} style={{ width: wp("25%"), height: hp("13%"), borderRadius: 9 }} />
                 </View>
                 <View style={{ marginLeft: -wp("3%") }}>
                  <View style={{ flexDirection: 'row', marginTop: hp("1%") }}>
                    <Text style={{ fontSize: 14, fontWeight: '900', color: '#242424', marginLeft: wp("6%") }} >
                      Ramo kaka car wash
                    </Text>
                  </View>
                  <View style={{ width: wp("40%"), height: hp("4%"), backgroundColor: "#EAF4FB", borderRadius: 41, marginLeft: wp("6%"), marginTop: hp("1.2%") }}>
                    <View style={{ flexDirection: "row", marginTop: hp("1%") }}>
                      <Text style={{ fontSize: 10, fontWeight: "500", color: "#2B91DB", marginLeft: wp("1%") }}>Chaklala Can’tt, Rawalpindi</Text>
                      <TouchableOpacity style={{ marginLeft: wp("1.2%"), position: 'relative' }}>
                        <Image source={Ellipse} style={{ width: 22, height: 22, borderRadius: 10 }} />
                        <View style={{ position: "absolute", top: hp("0.7%"), left: wp("1%") }}>
                          <Image source={Group18} style={{ width: 12, height: 10 }} />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>


                  <View style={{ flexDirection: 'row', marginTop: hp("1%"),marginLeft:wp("5%") }}>
                    <View style={{ flexDirection: 'row' }}>
                      {/* <Image source={Minut} style={{ width: 16, height: 16, marginLeft: wp("2%") }} /> */}
                      <Km style={{ marginLeft: wp("2%") }}/>
                      <Text style={{ fontSize: 9, fontWeight: '900', color: '#242424', marginLeft: wp("1%") }}>
                        0.5 km
                      </Text>
                      {/* <Image source={time} style={{ width: 12, height: 13, borderRadius: 8, marginLeft: wp("2%") }} /> */}
                      <Time style={{ marginLeft: wp("2%") }}/>
                      <Text style={{ fontSize: 9, fontWeight: '900', color: '#242424', marginLeft: wp("1%") }}>
                        03 minute
                      </Text>
                    </View>
                   </View>
                </View>
                <View style={{left:wp("5%"), width: wp("17%"), height: hp("3%"), backgroundColor: "rgba(0, 255, 56, 0.10)", borderRadius: 6, marginTop: hp("1%") }}>
                  <Text style={{ alignSelf: "center", fontSize: 10, fontWeight: "900",  color: "#00BD13", marginTop: hp("0.5%") }}>COMPLETED</Text>
                </View>
              </View>

              <View style={{ width: "90%", height: 1, backgroundColor: "#D6D6D6", alignSelf: "center", top: hp("2%") }}
              ></View>

              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                <View style={{ marginLeft: wp("4%"),top:hp("3%") }}>
                  <Text style={{ fontSize: 8, fontWeight: "500", color: "#C2C2C2" }}>Order ID</Text>
                  <Text style={{ fontSize: 12, fontWeight: "600", color: "#242424", marginTop: 2 }}>#0123456764</Text>
                </View>
                <View style={{ width: 1, height: 27, backgroundColor: '#D6D6D6',top: hp("3%") }}></View>
                <View  style={{ marginLeft: wp("4%"),top:hp("3%")}}>
                  <Text style={{ fontSize: 8, fontWeight: "500", color: "#C2C2C2" }}>Order Date</Text>
                  <Text style={{ fontSize: 12, fontWeight: "600", color: "#242424", marginTop: 2 }}>06 Nov, 2024</Text>
                </View>
                <View style={{ width: 1, height: 27, backgroundColor: '#D6D6D6',top: hp("3%") }}></View>
                <View  style={{ marginLeft: wp("4%"),top:hp("3%") }} >
                  <Text style={{ fontSize: 8, fontWeight: "500", color: "#C2C2C2" }}>Order Time</Text>
                  <Text style={{ fontSize: 12, fontWeight: "600", color: "#242424", marginTop: 2 }}>09:00 am</Text>
                </View>

                <View style={{ width: wp("23%"), height: hp("4%"), backgroundColor: "#00BD13", borderRadius: 4, marginRight: 20,top:hp("3%"),left:wp("1%") }}>
                  <View style={{ alignSelf: "center", marginTop: hp("0.5%") }}>
                    <Text style={{ fontSize: 8, fontWeight: "600", color: "#FFF" }}>Total Payment:</Text>
                    <Text style={{ fontSize: 11, fontWeight: "900", color: "#FFF" }}>250 PKR</Text>
                   </View>
                </View>

              </View>

            </View>
          
          </View>
        );
      case 'cancelled':
        return (
          <View>
             <View style={{
              alignSelf: "center",
              width: '96%', height: hp("23%"), backgroundColor: '#FFF',
              marginTop: hp("4%"), borderRadius: 9, elevation: 1, shadowColor: "gray", borderWidth: 0.5, borderColor: "#FFFFFF"
            }}>

                <View style={{ flexDirection: "row" }}>
                <View style={{  marginLeft: wp("2%"), marginTop: hp("1%") }}>
                  <Image source={{ uri: "https://img.freepik.com/free-photo/man-washing-his-car-garage_1157-26046.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais" }} style={{ width: wp("25%"), height: hp("13%"), borderRadius: 9 }} />
                 </View>
                 <View style={{ marginLeft: -wp("3%") }}>
                  <View style={{ flexDirection: 'row', marginTop: hp("1%") }}>
                    <Text style={{ fontSize: 14, fontWeight: '900', color: '#242424', marginLeft: wp("6%") }} >
                      Ramo kaka car wash
                    </Text>
                  </View>
                  <View style={{ width: wp("40%"), height: hp("4%"), backgroundColor: "#EAF4FB", borderRadius: 41, marginLeft: wp("6%"), marginTop: hp("1.2%") }}>
                    <View style={{ flexDirection: "row", marginTop: hp("1%") }}>
                      <Text style={{ fontSize: 10, fontWeight: "500", color: "#2B91DB", marginLeft: wp("1%") }}>Chaklala Can’tt, Rawalpindi</Text>
                      <TouchableOpacity style={{ marginLeft: wp("1.2%"), position: 'relative' }}>
                        <Image source={Ellipse} style={{ width: 22, height: 22, borderRadius: 10 }} />
                        <View style={{ position: "absolute", top: hp("0.7%"), left: wp("1%") }}>
                          <Image source={Group18} style={{ width: 12, height: 10 }} />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>


                  <View style={{ flexDirection: 'row', marginTop: hp("1%"),marginLeft:wp("5%") }}>
                    <View style={{ flexDirection: 'row' }}>
                      {/* <Image source={Minut} style={{ width: 16, height: 16, marginLeft: wp("2%") }} /> */}
                      <Km style={{ marginLeft: wp("2%") }}/>
                      <Text style={{ fontSize: 9, fontWeight: '900', color: '#242424', marginLeft: wp("1%") }}>
                        0.5 km
                      </Text>
                      {/* <Image source={time} style={{ width: 12, height: 13, borderRadius: 8, marginLeft: wp("2%") }} /> */}
                      <Time style={{ marginLeft: wp("2%") }}/>
                      <Text style={{ fontSize: 9, fontWeight: '900', color: '#242424', marginLeft: wp("1%") }}>
                        03 minute
                      </Text>
                    </View>
                   </View>
                </View>
                <View style={{left:wp("5%"), width: wp("17%"), height: hp("3%"), backgroundColor: "rgba(236, 17, 16, 0.10)", borderRadius: 6, marginTop: hp("1%") }}>
                  <Text style={{ alignSelf: "center", fontSize: 10, fontWeight: "900",  color: "#EC1110", marginTop: hp("0.5%") }}>CANCELLED</Text>
                </View>
              </View>

              <View style={{ width: "90%", height: 1, backgroundColor: "#D6D6D6", alignSelf: "center", top: hp("2%") }}
              ></View>

              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                <View style={{ marginLeft: wp("4%"),top:hp("3%") }}>
                  <Text style={{ fontSize: 8, fontWeight: "500", color: "#C2C2C2" }}>Order ID</Text>
                  <Text style={{ fontSize: 12, fontWeight: "600", color: "#242424", marginTop: 2 }}>#0123456764</Text>
                </View>
                <View style={{ width: 1, height: 27, backgroundColor: '#D6D6D6',top: hp("3%") }}></View>
                <View  style={{ marginLeft: wp("4%"),top:hp("3%")}}>
                  <Text style={{ fontSize: 8, fontWeight: "500", color: "#C2C2C2" }}>Order Date</Text>
                  <Text style={{ fontSize: 12, fontWeight: "600", color: "#242424", marginTop: 2 }}>06 Nov, 2024</Text>
                </View>
                <View style={{ width: 1, height: 27, backgroundColor: '#D6D6D6',top: hp("3%") }}></View>
                <View  style={{ marginLeft: wp("4%"),top:hp("3%") }} >
                  <Text style={{ fontSize: 8, fontWeight: "500", color: "#C2C2C2" }}>Order Time</Text>
                  <Text style={{ fontSize: 12, fontWeight: "600", color: "#242424", marginTop: 2 }}>09:00 am</Text>
                </View>

                <View style={{ width: wp("23%"), height: hp("4%"), backgroundColor: "#EC1110", borderRadius: 4, marginRight: 20,top:hp("3%"),left:wp("1%") }}>
                  <View style={{ alignSelf: "center", marginTop: hp("0.5%") }}>
                    <Text style={{ fontSize: 8, fontWeight: "600", color: "#FFF" }}>Total Payment:</Text>
                    <Text style={{ fontSize: 11, fontWeight: "900", color: "#FFF" }}>250 PKR</Text>
                   </View>
                </View>

              </View>

            </View>
            {/* ///////CANCELLED//////////////////// */}
            <View style={{
              alignSelf: "center",
              width: '96%', height: hp("23%"), backgroundColor: '#FFF',
              marginTop: hp("4%"), borderRadius: 9, elevation: 1, shadowColor: "gray", borderWidth: 0.5, borderColor: "#FFFFFF"
            }}>

                <View style={{ flexDirection: "row" }}>
                <View style={{  marginLeft: wp("2%"), marginTop: hp("1%") }}>
                  <Image source={{ uri: "https://img.freepik.com/free-photo/man-washing-his-car-garage_1157-26046.jpg?size=626&ext=jpg&ga=GA1.1.1155509870.1697629433&semt=ais" }} style={{ width: wp("25%"), height: hp("13%"), borderRadius: 9 }} />
                 </View>
                 <View style={{ marginLeft: -wp("3%") }}>
                  <View style={{ flexDirection: 'row', marginTop: hp("1%") }}>
                    <Text style={{ fontSize: 14, fontWeight: '900', color: '#242424', marginLeft: wp("6%") }} >
                      Ramo kaka car wash
                    </Text>
                  </View>
                  <View style={{ width: wp("40%"), height: hp("4%"), backgroundColor: "#EAF4FB", borderRadius: 41, marginLeft: wp("6%"), marginTop: hp("1.2%") }}>
                    <View style={{ flexDirection: "row", marginTop: hp("1%") }}>
                      <Text style={{ fontSize: 10, fontWeight: "500", color: "#2B91DB", marginLeft: wp("1%") }}>Chaklala Can’tt, Rawalpindi</Text>
                      <TouchableOpacity style={{ marginLeft: wp("1.2%"), position: 'relative' }}>
                        <Image source={Ellipse} style={{ width: 22, height: 22, borderRadius: 10 }} />
                        <View style={{ position: "absolute", top: hp("0.7%"), left: wp("1%") }}>
                          <Image source={Group18} style={{ width: 12, height: 10 }} />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>


                  <View style={{ flexDirection: 'row', marginTop: hp("1%"),marginLeft:wp("5%") }}>
                    <View style={{ flexDirection: 'row' }}>
                      {/* <Image source={Minut} style={{ width: 16, height: 16, marginLeft: wp("2%") }} /> */}
                      <Km style={{ marginLeft: wp("2%") }}/>
                      <Text style={{ fontSize: 9, fontWeight: '900', color: '#242424', marginLeft: wp("1%") }}>
                        0.5 km
                      </Text>
                      {/* <Image source={time} style={{ width: 12, height: 13, borderRadius: 8, marginLeft: wp("2%") }} /> */}
                      <Time style={{ marginLeft: wp("2%") }}/>
                      <Text style={{ fontSize: 9, fontWeight: '900', color: '#242424', marginLeft: wp("1%") }}>
                        03 minute
                      </Text>
                    </View>
                   </View>
                </View>
                <View style={{left:wp("5%"), width: wp("17%"), height: hp("3%"), backgroundColor: "rgba(236, 17, 16, 0.10)", borderRadius: 6, marginTop: hp("1%") }}>
                  <Text style={{ alignSelf: "center", fontSize: 10, fontWeight: "900",  color: "#EC1110", marginTop: hp("0.5%") }}>CANCELLED</Text>
                </View>
              </View>

              <View style={{ width: "90%", height: 1, backgroundColor: "#D6D6D6", alignSelf: "center", top: hp("2%") }}
              ></View>

              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                <View style={{ marginLeft: wp("4%"),top:hp("3%") }}>
                  <Text style={{ fontSize: 8, fontWeight: "500", color: "#C2C2C2" }}>Order ID</Text>
                  <Text style={{ fontSize: 12, fontWeight: "600", color: "#242424", marginTop: 2 }}>#0123456764</Text>
                </View>
                <View style={{ width: 1, height: 27, backgroundColor: '#D6D6D6',top: hp("3%") }}></View>
                <View  style={{ marginLeft: wp("4%"),top:hp("3%")}}>
                  <Text style={{ fontSize: 8, fontWeight: "500", color: "#C2C2C2" }}>Order Date</Text>
                  <Text style={{ fontSize: 12, fontWeight: "600", color: "#242424", marginTop: 2 }}>06 Nov, 2024</Text>
                </View>
                <View style={{ width: 1, height: 27, backgroundColor: '#D6D6D6',top: hp("3%") }}></View>
                <View  style={{ marginLeft: wp("4%"),top:hp("3%") }} >
                  <Text style={{ fontSize: 8, fontWeight: "500", color: "#C2C2C2" }}>Order Time</Text>
                  <Text style={{ fontSize: 12, fontWeight: "600", color: "#242424", marginTop: 2 }}>09:00 am</Text>
                </View>

                <View style={{ width: wp("23%"), height: hp("4%"), backgroundColor: "#EC1110", borderRadius: 4, marginRight: 20,top:hp("3%"),left:wp("1%") }}>
                  <View style={{ alignSelf: "center", marginTop: hp("0.5%") }}>
                    <Text style={{ fontSize: 8, fontWeight: "600", color: "#FFF" }}>Total Payment:</Text>
                    <Text style={{ fontSize: 11, fontWeight: "900", color: "#FFF" }}>250 PKR</Text>
                   </View>
                </View>
              </View> 
            </View>
          </View>
        );

      default:
        return null;
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <View style= {{width:"98%",height:"100%",alignSelf:"center"}}>
      <View style={{ borderRadius: 35, flexDirection: 'row', justifyContent: 'space-between', paddingTop: hp("6%") }}>
        <TouchableOpacity onPress={() => navigation.navigate('home')} style={{ marginLeft: wp("3%"), width: wp("7%"), height: hp("4%"), borderRadius: 2, borderWidth: 0.1, borderColor: '#717171' }}>
          <SelectArrow style = {{alignSelf:"center",top: hp("1%")}} size= {30}/>
        </TouchableOpacity>
        <View style={{ marginRight: hp("15%") }}>
          <Text style={{ fontSize: 20, fontWeight: '900', color: '#242424' }}>My Booking</Text>
        </View>
      </View>


      <View style={{ width: 430, height: 31, alignSelf: "center", marginTop: hp("2.5%") }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: hp("1%") }}>
          <TouchableOpacity onPress={() => setSelectedTab('active')}>
            <Text style={{ fontSize: 14, fontWeight: "900", color: selectedTab === 'active' ? "#2B91DB" : "#9C9C9C", textTransform: "uppercase", marginLeft: wp("3%") }}>Active</Text>
            {selectedTab === 'active' && <View style={{ marginLeft: wp("2%"), width: 80, height: 3, backgroundColor: "#2B91DB", alignSelf: "center", marginTop: hp("1.2%") }} />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab('completed')}>
            <Text style={{ fontSize: 14, fontWeight: "900", color: selectedTab === 'completed' ? "#2B91DB" : "#9C9C9C", textTransform: "uppercase" }}>Completed</Text>
            {selectedTab === 'completed' && <View style={{ width: 80, height: 3, backgroundColor: "#2B91DB", alignSelf: "center", marginTop: hp("1.2%") }} />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab('cancelled')}>
            <Text style={{ fontSize: 14, fontWeight: "900", color: selectedTab === 'cancelled' ? "#2B91DB" : "#9C9C9C", textTransform: "uppercase", marginRight: wp("3%") }}>Cancelled</Text>
            {selectedTab === 'cancelled' && <View style={{ width: 90, height: 3, backgroundColor: "#2B91DB", alignSelf: "center", marginTop: hp("1.2%"), marginRight: wp("3%") }} />}
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ width: "100%", height: "100%", marginTop: hp("1%") }}>
        <View style={{ width: "100%", height: 1, backgroundColor: "#9C9C9C", alignSelf: "center" }}
        ></View>
        {renderContent()}
        {/* Selected tab indicator */}

      </View>
      </View>
    </View>
  )
}

export default BookingScreen