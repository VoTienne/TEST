import react, { useEffect,useState,useRef } from "react";
import { View,Text,Image,Dimensions, TouchableOpacity} from "react-native";
//import { Styles } from "react-native-svg/lib/typescript/xml";
import { ScrollView, TextInput } from "react-native-gesture-handler";
const {width:screenWidth} = Dimensions.get('window');
export default Home = () => {
  const [imageList,setImageList] = useState([]);
  const stepCarousel = useRef(null);
    useEffect(() => {
      const data = [
        { image: <Image source={require('../img/banner1.png')} style={{borderRadius:30, width:screenWidth,height:'100%', resizeMode:'contain'}} /> },
        { image: <Image source={require('../img/banner2.png')} style={{borderRadius:30,width:screenWidth,height:'100%', resizeMode:'stretch'}}  /> },
        { image: <Image source={require('../img/banner3.png')} style={{borderRadius:30,width:screenWidth,height:'100%', resizeMode:'cover'}} /> },
      ];
      setImageList(data);
    }, [])

    useEffect(()=>{
      if(imageList.length > 0) {
        let index=0;
        setInterval(() => {
         stepCarousel.current.scrollTo({x: index*screenWidth, y:0,animated:true});
         index +=1;
         if(index === imageList.length){
          index=0;
         }
        },3000);
      }
    },[imageList])
    const handleScroll = (e) => {
      if(!e){
        return;
      }
      const { nativeEvent } = e;
      if ( nativeEvent && nativeEvent.contentOffset){
        const currentOffset = nativeEvent.contentOffset.x;
        let imageIndex = 0;
        if(nativeEvent.contentOffset.x >0){
          imageIndex = Math.floor((nativeEvent.contentOffset.x + screenWidth / 2) / screenWidth);
        }
        //console.log('index ',imageIndex);
      }   
    }
  
    return (
      <View style={{flex:1,}}>
        <View style={{alignItems:'flex-end',justifyContent:'center', flexDirection:'row',height:90,width:'100%',backgroundColor:'#1e90ff'}}>
        <View style={{justifyContent:'center', borderRadius:30, marginBottom:15, height:45, width:'80%',borderColor:'black',borderWidth:0,backgroundColor:'white'}}>
          <TextInput style={{left:20}} placeholder="Search" ></TextInput>
        </View>
        
        </View>
        <View style={{marginTop:25,alignItems:'center',width:screenWidth,height:200}}>
          
        <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        pagingEnabled
        horizontal
        ref={stepCarousel}
        contentContainerStyle={{ borderRadius:30, width: screenWidth*imageList.length , height:200}}
        >
          {imageList.map((e,index) =>
            <View key={index.toString()}> 
              {e.image}
            </View>
            )}

        </ScrollView>
        </View>
      </View>
    );

}