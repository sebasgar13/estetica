import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { tutorial2Spec } from '../assets/data/theme';
const {ITEM_HEIGHT, ITEM_WIDTH, RADIUS, SPACING, FULL_SIZE} = tutorial2Spec;


const TravelListDetailScreen = ({route}:any) => {
    const {item} = route.params;
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={[StyleSheet.absoluteFillObject, {flex:1}]}>
                <Image source={{uri: item.image}} 
                    style={[StyleSheet.absoluteFill, {
                        resizeMode: 'cover',
                        flex: 1
                    }]} 
                />
            </View>
            <Text style={[(styles.location)]}>{item.location}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    location: {
        fontSize: 30,
        color: "#fff",
        fontWeight: '800',
        width: ITEM_WIDTH * 0.8,
        textTransform: 'uppercase',
        position: 'absolute',
        top: SPACING,
        left: SPACING,
    }
});

// TravelListDetailScreen.sharedElements = (route, otherRoute, showing) => {
//     const {item} = route.params;
//     return[{
//         id: `item.${item.key}.photo`,
//     },
//     {
//         id: `item.${item.key}.location`
//     }]
// }

export default TravelListDetailScreen;