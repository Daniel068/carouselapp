import * as React from 'react';
import { StyleSheet, View, ScrollView, Dimensions, Image } from 'react-native';


const Device_width = Dimensions.get('window').width;

class BackgroundCarousel extends React.Component {
   scrollRef = React.createRef()
    constructor(props) {
       super(props);
       
       this.state ={
        selectedIndex: 0
       };
    }

    componentDidMount = () =>{
        setInterval(() => {
           this.setState(
            prev => ({selectedIndex: 
                prev.selectedIndex === this.props.images.length - 1? 
                0: prev.selectedIndex + 1  } ),
           () => {
                this.scrollRef.current.scrollTo({
                    animated: true,
                    y: 0,
                    x: Device_width * this.state.selectedIndex
                });
           }) 
        }, 3000);
    }

    setSelectedIndex = event =>{
        //width of the view size
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        // get current position of the scrollview
        const contentOffset = event.nativeEvent.contentOffset.x;

        const selectedIndex = Math.floor(contentOffset/viewSize)
        this.setState({selectedIndex});
    };

    render() {
        const{images}=this.props
        const{selectedIndex}=this.state
        return(
            <View style ={{height:'100%', width:'100%'}}>
                <ScrollView 
                horizontal 
                pagingEnabled 
                onMomentumScrollEnd={this.setSelectedIndex} 
                ref={this.scrollRef}
                >
                    {images.map(image =>(
                        <Image 
                        key={image}
                        source={{uri: image}}
                        style={styles.BackgroundImage}
                        />
                    ))}
                </ScrollView>
                <View style={styles.circleDiv}>
                   {images.map((image, i) =>(
                    <View 
                        key={image}
                        style={[styles.whiteCircle, {opacity: i === selectedIndex? 0.5 : 1}]}
                    />
                   ))} 
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    BackgroundImage:{
        height:'100%',
        width: Device_width
    },
    circleDiv:{
        position:"absolute",
        bottom:15,
        height:10,
        width:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    whiteCircle:{
        width:6,
        height:6,
        borderRadius:3,
        margin:5,
        backgroundColor:"#fff"

    }
});

export {BackgroundCarousel} ;