import {useState,useEffect} from 'react';
import { Text,View,StyleSheet,ScrollView,Dimensions,Image,Modal, Pressable,StatusBar,ToastAndroid } from "react-native";
import { ImageBackground } from "react-native";
import Data from "./components/data";
import * as Location from 'expo-location';
import axios from 'axios';
import { DataTable } from 'react-native-paper';
import * as SplashScreen from 'expo-splash-screen';
import NetInfo from '@react-native-community/netinfo';

export default function App(){


  SplashScreen.preventAutoHideAsync();

  const [connectionStatus,setConnectionStatus] = useState(null);
  const [badrequest1,setbadrequest1] = useState(null);
  const [badrequest2,setbadrequest2] = useState(null);

  if(badrequest1 === false){
    console.log("badrequest1 is false");
  }

  var [i,seti] = useState(1);

  const unsubscribe = NetInfo.addEventListener(state => {

    if(state.isConnected === false){
      console.log("false");

      ToastAndroid.showWithGravity('No Internet, Please Check Your Internet Connection',ToastAndroid.SHORT, ToastAndroid.BOTTOM);
    }

    if(connectionStatus === false){
      if(state.isConnected === true){
        console.log("true");
        ToastAndroid.showWithGravity("You are Online, please wait fetching the weather data",ToastAndroid.LONG,ToastAndroid.BOTTOM);
        setConnectionStatus(null);
      }
    }
    }
  ); 

  useEffect(() => {
    (async() => {setTimeout(() => {
    // console.log("inside set time out");
  SplashScreen.hideAsync();
  timebool = false;
  },5000)
  })();
},[])

  const [modalvisible, setmodalvisible] = useState(false);

  const [location,setlocation] = useState(null);
  const [errorMsg,seterrorMsg] = useState(null);

  const [error1,seterror1] = useState("");
  const [error2,seterror2] = useState(false);


  let lat = "";
  let lon = "";
  
  const [city,setcity] = useState(null);
  const [temp,settemp] = useState(null);
  const [icon, seticon] = useState("");
  const [desc,setdesc] = useState("");
  const [modaldate,setmodaldate] = useState(null);
  const [feelslike,setfeelslike] = useState(null);
  const [mintemp,setmintemp] = useState(null);
  const [maxtemp,setmaxtemp] = useState(null);
  const [pressure,setpressure] = useState(null);
  const [humidity,sethumidity] = useState(null);
  const [windspeed,setwindspeed] = useState(null);

  const [datatemp1,setdatatemp1] = useState(null);
  const [datatemp2,setdatatemp2] = useState(null);
  const [datatemp3,setdatatemp3] = useState(null);
  const [datatemp4,setdatatemp4] = useState(null);
  const [datatemp5,setdatatemp5] = useState(null);

  const [dataicon1,setdataicon1] = useState(null);
  const [dataicon2,setdataicon2] = useState(null);
  const [dataicon3,setdataicon3] = useState(null);
  const [dataicon4,setdataicon4] = useState(null);
  const [dataicon5,setdataicon5] = useState(null);

  const [datadesc1, setdatadesc1] = useState(null);
  const [datadesc2, setdatadesc2] = useState(null);
  const [datadesc3, setdatadesc3] = useState(null);
  const [datadesc4, setdatadesc4] = useState(null);
  const [datadesc5, setdatadesc5] = useState(null);

  const [datadate1, setdatadate1] = useState(null);
  const [datadate2, setdatadate2] = useState(null);
  const [datadate3, setdatadate3] = useState(null);
  const [datadate4, setdatadate4] = useState(null);
  const [datadate5, setdatadate5] = useState(null);

  // console.log(temp,icon,desc,pressure,humidity,windspeed);

  

  const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  let width = Dimensions.get('window').width;


  const [modaltemp,setmodaltemp] = useState(null);
  const [modalfeels,setmodalfeels] = useState(null);
  const [modalmintemp,setmodalmintemp] = useState(null);
  const [modalmaxtemp,setmodalmaxtemp] = useState(null);
  const[modalhumidity,setmodalhumidity] = useState(null);
  const [modaldesc,setmodaldesc] = useState("");
  const [modalpressure, setmodalpressure] = useState(null);
  const [modalicon,setmodalicon] = useState("");

  const [modalbool,setmodalbool] = useState(false);
  const [mainbool, setmainbool] = useState(false);

  // console.log("Main Bool = ",mainbool);

  const date1 = new Date();

  const date2 = new Date(modaldate);

    

  useEffect(() => {
    // console.log("inside use effect 1");
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if(status !== 'granted'){
        seterrorMsg("permission to access location was denied");
        return;
      } else{
        let location = await Location.getCurrentPositionAsync({});
        setlocation(location);
      }
      
    })();
  },[]);

  if(errorMsg){
    // console.log(errorMsg);
    ToastAndroid.showWithGravity('Please turn on your location', ToastAndroid.LONG,ToastAndroid.BOTTOM);
  } else if(location){
    lat = location["coords"]["latitude"];
    lon = location["coords"]["longitude"];
  }

  // console.log("city = ",city);

  // if(city === null){
  // axios.get("https://api.openweathermap.org/geo/1.0/reverse?lat="+lat+"&lon="+lon+"&limit=1&appid=3c79fbd12d1e34cd76c9cf73cd27a8d7")
  // .then((data) => {
  //   // console.log("inside 1st axios");
  //   setcity(data["data"][0]["name"]);
  // })
  // .catch((err)=>{
  //   console.log("inside axios error 1");

  //   // console.log(err.code);
  //   if(err.code === 'ERR_NETWORK'){
  //   // console.log("inside axios error 1 1");
  //   //   // seterror1("no internet");
  //     setConnectionStatus(false);
  //   //   ToastAndroid.showWithGravity('No Internet, Please Check Your Internet Connection',ToastAndroid.LONG, ToastAndroid.BOTTOM);
  //   }
  //   else if(err.code === 'ERR_BAD_REQUEST'){
  //   console.log("inside axios error 1 2");

  //   // ToastAndroid.showWithGravity('Please wait, fetching the latest weather data',ToastAndroid.LONG, ToastAndroid.BOTTOM); 
  //   // setbadrequest2(false);
  //   }else{
  //   console.log("inside axios error 1 3");

  //     ToastAndroid.showWithGravity('Heavy Traffic, Try again Later',ToastAndroid.LONG, ToastAndroid.BOTTOM);
  //   }
  // })
  // }


  // if(mainbool === true){
  //   console.log("mainbool is true, second axios get method can execute");
  // }
  // else{
  //   console.log("mainbool is false, second axios get method cannot execute");
  // }

  if(temp === null && datadesc1 === null && datadesc2 === null && datadesc3 === null && datadesc4 === null && datadesc5 === null &&dataicon1 === null && dataicon2 === null && dataicon3 === null && dataicon4 === null && dataicon5 === null && datatemp1 === null && datatemp2 === null && datatemp3 === null && datatemp4 === null && datatemp5 === null && windspeed === null && icon==="" && desc==="" && mintemp === null && maxtemp === null && pressure === null && humidity === null && feelslike === null && datadate1 === null && datadate2 === null && datadate3 === null && datadate4 === null && datadate5 === null){
    // console.log("before second axios get method");
  axios.get("https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=3c79fbd12d1e34cd76c9cf73cd27a8d7")
  .then((data) => {
      console.log("inside axios 2");
    // console.log("inside second axios");
    let bool1 = false;
    let bool2 = false;
    let bool3 = false;
    let bool4 = false;
    let bool5 = false;
    let bool6 = false;
    let bool7 = false;
    let bool8 = false;
    let bool9 = false;
    let bool10 = false;
    let bool11 = false;
    let bool12 = false;
    let bool13 = false;

      
    
    // console.log("made the get request");
  if(temp === null){
    // console.log("inside 1",bool1);
    settemp(eval(JSON.stringify(data["data"]["list"][0]["main"]["temp"] - 273.15)).toFixed(2));
    bool1 = true;
  }
  if(icon === "" && bool1 == true){
    // console.log("inside 2");
    // console.log(bool1);
    seticon(JSON.stringify(data["data"]["list"][0]["weather"][0]["icon"]).replaceAll("\"", ""));
    bool2 = true;
  }
  if(desc === "" && bool2 == true){
    // console.log("inside 3");
    setdesc(JSON.stringify(data["data"]["list"][0]["weather"][0]["description"]))
    bool3 = true;
  }
   
  if(feelslike === null && bool3 == true){
    // console.log("inside 4");
    setfeelslike((JSON.stringify(data["data"]["list"][0]["main"]["feels_like"])-273.15).toFixed(2));
    bool4 = true;
  }
  
  if(mintemp === null && bool4 == true){
    // console.log("inside 5");
    setmintemp((JSON.stringify(data["data"]["list"][0]["main"]["temp_min"])-273.15).toFixed(2))
    bool5 = true;
  }

  if(maxtemp === null && bool5 == true){
    // console.log("inside 6");
    setmaxtemp((JSON.stringify(data["data"]["list"][0]["main"]["temp_max"])-273.15).toFixed(2))
    bool6 = true;
  }

  if(pressure === null && bool6 == true){
    // console.log("inside 7");
    setpressure(JSON.stringify(data["data"]["list"][0]["main"]["pressure"]))
    bool7 = true;
  }

  if(humidity === null && bool7 == true){
    // console.log("inside 8");
    sethumidity(JSON.stringify(data["data"]["list"][0]["main"]["humidity"]))
    bool8 = true;
  }

  if(windspeed === null && bool8 == true){
    // console.log("inside 9");
    setwindspeed(JSON.stringify(data["data"]["list"][0]["wind"]["speed"]))
    bool9 = true;
  }

  // console.log(JSON.stringify(data["data"]["list"][38]));
  // console.log(JSON.stringify(data["data"]["list"][39]));


    if(datatemp1 === null && datatemp2 === null && datatemp3 === null && datatemp4 === null && datatemp5 === null && bool9 == true){
      // console.log("inside 10");
    setdatatemp1((JSON.stringify(data["data"]["list"][8]["main"]["temp"])-273.15).toFixed(2));
    setdatatemp2((JSON.stringify(data["data"]["list"][16]["main"]["temp"])-273.15).toFixed(2));
    setdatatemp3((JSON.stringify(data["data"]["list"][24]["main"]["temp"])-273.15).toFixed(2));
    setdatatemp4((JSON.stringify(data["data"]["list"][32]["main"]["temp"])-273.15).toFixed(2));
    setdatatemp5((JSON.stringify(data["data"]["list"][39]["main"]["temp"])-273.15).toFixed(2));
    bool10 = true;
    }

    if(dataicon1 === null && dataicon2 === null && dataicon3 === null && dataicon4 === null && dataicon5 === null && bool10 == true){
      // console.log("inside 11");
    setdataicon1(JSON.stringify(data["data"]["list"][8]["weather"][0]["icon"]).replaceAll("\"", ""))
    setdataicon2(JSON.stringify(data["data"]["list"][16]["weather"][0]["icon"]).replaceAll("\"", ""))
    setdataicon3(JSON.stringify(data["data"]["list"][24]["weather"][0]["icon"]).replaceAll("\"", ""))
    setdataicon4(JSON.stringify(data["data"]["list"][32]["weather"][0]["icon"]).replaceAll("\"", ""))
    setdataicon5(JSON.stringify(data["data"]["list"][39]["weather"][0]["icon"]).replaceAll("\"", ""))
    bool11 = true;
    }

    if(datadesc1 === null && datadesc2 === null && datadesc3 === null && datadesc4 === null && datadesc5 === null && bool11 == true){
      // console.log("inside 12");
    setdatadesc1(JSON.stringify(data["data"]["list"][8]["weather"][0]["description"]).replaceAll("\"",""))
    setdatadesc2(JSON.stringify(data["data"]["list"][16]["weather"][0]["description"]).replaceAll("\"",""))
    setdatadesc3(JSON.stringify(data["data"]["list"][24]["weather"][0]["description"]).replaceAll("\"",""))
    setdatadesc4(JSON.stringify(data["data"]["list"][32]["weather"][0]["description"]).replaceAll("\"",""))
    setdatadesc5(JSON.stringify(data["data"]["list"][39]["weather"][0]["description"]).replaceAll("\"",""))
    bool12 = true;
    }

    if(datadate1 === null && datadate2 === null && datadate3 === null && datadate4 === null && datadate5 === null && bool12 == true){
      // console.log("inside 13");
    const date1 = new Date(((JSON.stringify(data["data"]["list"][8]["dt_txt"])).replaceAll("\"","")).substring(0, ((JSON.stringify(data["data"]["list"][8]["dt_txt"])).replaceAll("\"","")).indexOf(' ')));
    setdatadate1(date1.toLocaleDateString('en-US', {weekday: "short"}).substring(0, date1.toLocaleDateString('en-US',{weekday: "short"}).indexOf(',')));
    const date2 = new Date(((JSON.stringify(data["data"]["list"][16]["dt_txt"])).replaceAll("\"","")).substring(0, ((JSON.stringify(data["data"]["list"][16]["dt_txt"])).replaceAll("\"","")).indexOf(' ')));
    setdatadate2(date2.toLocaleDateString('en-US', {weekday: "short"}).substring(0, date2.toLocaleDateString('en-US',{weekday: "short"}).indexOf(',')));
    const date3 = new Date(((JSON.stringify(data["data"]["list"][24]["dt_txt"])).replaceAll("\"","")).substring(0, ((JSON.stringify(data["data"]["list"][24]["dt_txt"])).replaceAll("\"","")).indexOf(' ')));
    setdatadate3(date3.toLocaleDateString('en-US', {weekday: "short"}).substring(0, date3.toLocaleDateString('en-US',{weekday: "short"}).indexOf(',')));
    const date4 = new Date(((JSON.stringify(data["data"]["list"][32]["dt_txt"])).replaceAll("\"","")).substring(0, ((JSON.stringify(data["data"]["list"][32]["dt_txt"])).replaceAll("\"","")).indexOf(' ')));
    setdatadate4(date4.toLocaleDateString('en-US', {weekday: "short"}).substring(0, date4.toLocaleDateString('en-US',{weekday: "short"}).indexOf(',')));   
    const date5 = new Date(((JSON.stringify(data["data"]["list"][39]["dt_txt"])).replaceAll("\"","")).substring(0, ((JSON.stringify(data["data"]["list"][38]["dt_txt"])).replaceAll("\"","")).indexOf(' ')));
    setdatadate5(date5.toLocaleDateString('en-US', {weekday: "short"}).substring(0, date5.toLocaleDateString('en-US',{weekday: "short"}).indexOf(',')));
    bool13 = true;
    setbadrequest1(null);
    }
  })
  .catch((err) => {
    // console.log("inside axios error 2");
    // console.log(err);
    if(badrequest1 === false){
      console.log("inside badrequest1 error");
      setbadrequest1(false);
    }
    if(err.code === 'ERR_NETWORK'){
    // console.log("inside axios error 2 1");
      setConnectionStatus(false);
    //   ToastAndroid.showWithGravity('No Internet, Please Check Your Internet Connection',ToastAndroid.LONG, ToastAndroid.BOTTOM);
    }
    else if(err.code === 'ERR_BAD_REQUEST'){
      console.log("inside axios error 2 2");
      setbadrequest1(false);
      
        // ToastAndroid.showWithGravity('Low Connectivity/No Internet',ToastAndroid.LONG, ToastAndroid.BOTTOM); 
      }else{
    console.log("inside axios error 2 3");

        ToastAndroid.showWithGravity('Heavy Traffic, Try again Later',ToastAndroid.LONG, ToastAndroid.BOTTOM);
      }
    // ToastAndroid.showWithGravity('Low Connectivity/No Internet',ToastAndroid.LONG, ToastAndroid.BOTTOM);
  })
}

  function modalrender(value){

    axios.get("https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=3c79fbd12d1e34cd76c9cf73cd27a8d7")
    .then((data) => {
      // console.log("inside modal render");
      setmodalbool(true);
      setmodaltemp((JSON.stringify(data["data"]["list"][value]["main"]["temp"])-273.15).toFixed(2))
      setmodalfeels((JSON.stringify(data["data"]["list"][value]["main"]["feels_like"])-273.15).toFixed(2))
      let m1 = ((JSON.stringify(data["data"]["list"][value]["dt_txt"])).replaceAll("\"",""))
      setmodaldate(m1.substring(0, m1.indexOf(' ')))

      setmodalmintemp((JSON.stringify(data["data"]["list"][value]["main"]["temp_min"])-273.15).toFixed(2));
      setmodalmaxtemp((JSON.stringify(data["data"]["list"][value]["main"]["temp_max"])-273.15).toFixed(2));
      setmodalhumidity(JSON.stringify(data["data"]["list"][value]["main"]["humidity"]));
      setmodaldesc(JSON.stringify(data["data"]["list"][value]["weather"][0]["description"]));
      setmodalpressure(JSON.stringify(data["data"]["list"][value]["main"]["pressure"]));
      setmodalicon(JSON.stringify(data["data"]["list"][value]["weather"][0]["icon"]).replaceAll("\"", ""));
      
    })
    .catch((err) => {
      console.log(err);
      if(err.code === 'ERR_NETWORK'){
        ToastAndroid.showWithGravity('No Internet, Please Check Your Internet Connection',ToastAndroid.LONG, ToastAndroid.BOTTOM);
      }
      else if(err.code === 'ERR_BAD_REQUEST'){
        ToastAndroid.showWithGravity('Please wait, fetching the latest weather data',ToastAndroid.LONG, ToastAndroid.BOTTOM); 
        }
        else{
          ToastAndroid.showWithGravity('Heavy Traffic, Try again Later',ToastAndroid.LONG, ToastAndroid.BOTTOM);
        }
    // ToastAndroid.showWithGravity('Low Connectivity/No Internet',ToastAndroid.LONG, ToastAndroid.BOTTOM);

    })
  }


  return(
    <View style={[styles.view, {height: "100%"}]}>
    <ImageBackground source={date1.getHours()>=5 && date1.getHours() < 12 ? require('./b1.jpeg') : date1.getHours() >=12 && date1.getHours() < 18 ? require('./c1.jpg') : require('./a1.jpg')} resizeMode="stretch" style={{height: "100%"}}>
    <ScrollView >
    <View style={styles.mainView}>
    <View style={[{width: width,height: '50%'},styles.firstblock]}>
      <View style={[{}]}>
        <Text style={styles.textcolor}>{city}</Text>
      </View>
      <View style={[styles.firstsubblock,{}]}>
          <View style={[{width: width/2}]}>
            <Text style={styles.textcolor}>{date1.toLocaleDateString()}</Text>    
            <Text style={styles.textcolor}>{day[date1.getDay()]}</Text>
            <Text style={styles.textcolor}>{temp}°C</Text>
          </View>
          <View style={[{width: width/2}]}>
            <Image source={{uri: `https://openweathermap.org/img/wn/${icon}@4x.png`}}  style={{height: "100%",width: "100%"}}/>
          </View>
      </View>
      <View style={[{width: width}]}>
            <Text style={styles.textcolor}>{desc.replaceAll("\"","")}</Text>
        </View>
    </View>
    {/* <View style={{width: width/2}}>
      </View> */}
      </View>

      <View style={styles.maindesc}>
        <View style={styles.main1}>
          <Text style={styles.maintext}>Feels Like</Text>
          <Text style={styles.maintext1}>{feelslike}°C</Text>
        </View>
        <View style={styles.main1}>
          <Text style={styles.maintext}>Min Temp</Text>
          <Text style={styles.maintext1}>{mintemp}°C</Text>
        </View>
        <View style={styles.main1}>
          <Text style={styles.maintext}>Max Temp</Text>
          <Text style={styles.maintext1}>{maxtemp}°C</Text>
        </View>
        <View style={styles.main2}>
          <Text style={styles.maintext}>Pressure</Text>
          <Text style={styles.maintext1}>{pressure} hPa</Text>
        </View>
        <View style={styles.main2}>
          <Text style={styles.maintext}>Humidity</Text>
          <Text style={styles.maintext1}>{humidity} %</Text>
        </View>
        <View style={styles.main2}>
          <Text style={styles.maintext}>Wind Speed</Text>
          <Text style={styles.maintext1}>{windspeed} m/s</Text>
        </View>
      </View>


      <Modal style={styles.modalview} visible={modalvisible} animationType='slide' transparent>
          <View style={styles.modalview}>
              <View style={{width: "100%",height: '7%',display: "flex",alignItems: "flex-end"}}>
                <Pressable onPress={()=>setmodalvisible(false)} >
                  <Image source={require('./close.png')}/>
                </Pressable>
              </View>

      <DataTable style={[{height: 100,width: "100%"},styles.table]}>
        <DataTable.Row>
          
          <DataTable.Cell >
          <View style={[{display: "flex",justifyContent: "center",alignItems: "center",width: "100%"}]}>
          <Text style={[{fontSize: 25,color: "white"}]}>Date:</Text>
          </View>
          </DataTable.Cell>
          
          <DataTable.Cell>
          <View style={[{display: "flex",justifyContent: "center",alignItems: "center",width: "100%"}]}>
          <Text style={[{fontSize: 25,color: "white"}]}>{modaldate}</Text>
          </View>
          </DataTable.Cell>
        
        </DataTable.Row>

        <DataTable.Row style={[{display:"flex",justifyContent: "center",alignItems: "center"}]}>
          <DataTable.Cell >
          <View style={[{display: "flex",justifyContent: "center",alignItems: "center",width: "100%"}]}>
          <Text style={[{fontSize: 25,color: "white"}]}>Day:</Text>
          </View>
          </DataTable.Cell>

          <DataTable.Cell >
          <View style={[{display: "flex",justifyContent: "center",alignItems: "center",width: "100%"}]}>
          <Text style={[{fontSize: 25,color: "white"}]}>{(date2.toLocaleDateString('en-US',{weekday: "long"})).substring(0, date2.toLocaleDateString('en-US',{weekday: "long"}).indexOf(','))}</Text>
          </View>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={[{display:"flex",justifyContent: "center",alignItems: "center"}]}>
          <DataTable.Cell >
          <View style={[{display: "flex",justifyContent: "center",alignItems: "center",width: "100%"}]}>
          <Text style={[{fontSize: 25,color: "white"}]}>Temperature:</Text>
          </View>
          </DataTable.Cell>

          <DataTable.Cell >
          <View style={[{display: "flex",justifyContent: "center",alignItems: "center",width: "100%"}]}>
          <Text style={[{fontSize: 25,color: "white"}]}>{modaltemp}°C</Text>
          </View>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={[{display:"flex",justifyContent: "center",alignItems: "center"}]}>
          <DataTable.Cell >
          <View style={[{display: "flex",justifyContent: "center",alignItems: "center",width: "100%"}]}>
          <Text style={[{fontSize: 25,color: "white"}]}>Feels Like:</Text>
          </View>
          </DataTable.Cell>

          <DataTable.Cell >
          <View style={[{display: "flex",justifyContent: "center",alignItems: "center",width: "100%"}]}>
          <Text style={[{fontSize: 25,color: "white"}]}>{modalfeels}°C</Text>
          </View>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={[{display:"flex",justifyContent: "center",alignItems: "center"}]}>
          <DataTable.Cell >
          <View style={[{display: "flex",justifyContent: "center",alignItems: "center",width: "100%"}]}>
          <Text style={[{fontSize: 25,color: "white"}]}>Min Temp:</Text>
          </View>
          </DataTable.Cell>

          <DataTable.Cell >
          <View style={[{display: "flex",justifyContent: "center",alignItems: "center",width: "100%"}]}>
          <Text style={[{fontSize: 25,color: "white"}]}>{modalmintemp}°C</Text>
          </View>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={[{display:"flex",justifyContent: "center",alignItems: "center"}]}>
          <DataTable.Cell >
          <View style={[{display: "flex",justifyContent: "center",alignItems: "center",width: "100%"}]}>
          <Text style={[{fontSize: 25,color: "white"}]}>Max Temp:</Text>
          </View>
          </DataTable.Cell>

          <DataTable.Cell >
          <View style={[{display: "flex",justifyContent: "center",alignItems: "center",width: "100%"}]}>
          <Text style={[{fontSize: 25,color: "white"}]}>{modalmaxtemp}°C</Text>
          </View>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={[{display:"flex",justifyContent: "center",alignItems: "center"}]}>
          <DataTable.Cell >
          <View style={[{display: "flex",justifyContent: "center",alignItems: "center",width: "100%"}]}>
          <Text style={[{fontSize: 25,color: "white"}]}>Humidity:</Text>
          </View>
          </DataTable.Cell>

          <DataTable.Cell >
          <View style={[{display: "flex",justifyContent: "center",alignItems: "center",width: "100%"}]}>
          <Text style={[{fontSize: 25,color: "white"}]}>{modalhumidity} %</Text>
          </View>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={[{display:"flex",justifyContent: "center",alignItems: "center"}]}>
          <DataTable.Cell >
          <View style={[{display: "flex",justifyContent: "center",alignItems: "center",width: "100%"}]}>
          <Text style={[{fontSize: 25,color: "white"}]}>Pressure:</Text>
          </View>
          </DataTable.Cell>

          <DataTable.Cell >
          <View style={[{display: "flex",justifyContent: "center",alignItems: "center",width: "100%"}]}>
          <Text style={[{fontSize: 25,color: "white"}]}>{modalpressure} hPa</Text>
          </View>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={[{display:"flex",justifyContent: "center",alignItems: "center",height: 100}]}>
          <DataTable.Cell >
          <View style={[{display: "flex",justifyContent: "center",alignItems: "center",width: "100%"}]}>
          <Text style={[{fontSize: 25,color: "white"}]}>Description:</Text>
          </View>
          </DataTable.Cell>

          <DataTable.Cell >
          <View style={[{display: "flex",justifyContent: "center",alignItems: "center",width: "100%"}]}>
          <Text style={[{fontSize: 25,color: "white"}]}>{modaldesc.replaceAll("\"","")}</Text>
          </View>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={[{display:"flex",justifyContent: "center",alignItems: "center",height: 150}]}>

        <DataTable.Cell>
          <View style={[{display: "flex",justifyContent: "center",alignItems: "center",width: "100%",height: 150}]}>
          <Image source={{uri: `https://openweathermap.org/img/wn/${modalicon}@4x.png`}} style={{height: 250,width: 250}}/>
          </View>
          </DataTable.Cell>

        </DataTable.Row>

      </DataTable>

              <View style={[{columnGap: 0,display: "flex"}]}>
              </View>

          </View>          
          <StatusBar backgroundColor={'black'} />    
      </Modal>
      
      
      <Pressable onPress={() => {setmodalvisible(true); modalrender(8)}}><Data temp={datatemp1} icon={dataicon1} desc={datadesc1} date={datadate1}/></Pressable>
      <Pressable onPress={() => {setmodalvisible(true); modalrender(16)}} ><Data temp={datatemp2} icon={dataicon2} desc={datadesc2} date={datadate2}/></Pressable>
      <Pressable onPress={() => {setmodalvisible(true); modalrender(24)}} ><Data temp={datatemp3} icon={dataicon3} desc={datadesc3} date={datadate3}/></Pressable>
      <Pressable onPress={() => {setmodalvisible(true); modalrender(32)}} ><Data temp={datatemp4} icon={dataicon4} desc={datadesc4} date={datadate4}/></Pressable>
      <Pressable onPress={() => {setmodalvisible(true); modalrender(39)}} ><Data temp={datatemp5} icon={dataicon5} desc={datadesc5} date={datadate5}/></Pressable>
      </ScrollView>
    </ImageBackground>
    <StatusBar translucent={true} backgroundColor={'transparent'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  textcolor: {
    color: "white",    
    fontSize: 27,
    opacity: 1,
  },
  view: {
    backgroundColor: "lightblue",
  },
  mainView: {
    marginTop: 100,
    height: 200,
    opacity: 0.7,
    width: '100%',
    margin: 10,
    borderRadius: 20,
    display: "flex",
    marginBottom: 50,
    flexDirection: "row",
  },
  modalview: {
    display: "flex",

    backgroundColor: "black",
    opacity: 0.8,
    height: "100%",
    alignItems: "center",
    
  },
  modal1: {
    display:"flex",
    width: "auto",
  },
  textcolor1: {
    color: "white",    
    fontSize: 27,
    opacity: 1,
    
  },
  maindesc: {
    backgroundColor: "black",
    height: 150,
    margin: 5,
    marginBottom: 40,
    opacity: 0.7,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30
  },
  main1: {
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    marginTop: 30
  },
  main2: {
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    marginTop: -30
  },
  maintext: {
    color: "white",
    fontSize: 20
  },
  maintext1: {
    color: "white",
    fontSize: 15,
  },
  table: {
    borderColor: "green",
    padding: 15
  },
  firstblock: {
    display: "flex",
    flexDirection: "column"
  },
  firstsubblock: {
    display: "flex",
    flexDirection: "row"
  }
})