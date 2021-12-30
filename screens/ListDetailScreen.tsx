import React from 'react'
import { Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { tutorial2Spec } from '../assets/data/theme';
const {ITEM_HEIGHT, ITEM_WIDTH, RADIUS, SPACING, FULL_SIZE} = tutorial2Spec;


const ListDetailScreen = ({route}:any) => {
    const {height} = useWindowDimensions();
    const {item} = route.params;
    return (
        <View style={{flex:1}}>
            <Image source={{uri: item.image}} 
                style={{
                    resizeMode: 'cover',
                    flex: 1,
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0
                }} 
            />
            <ScrollView style={{flex:1}}>
                <Text style={[(styles.location)]}>{item.service}</Text>
                <View style={{flex: 1, minHeight: 300 , marginTop: height-300, backgroundColor: 'white', padding: 16, borderTopStartRadius:16, borderTopEndRadius: 16}}>
                    <Text style={{color:"#444", fontSize:16, fontWeight: 'bold'}}>Precio: {item.price} $MX</Text>
                    <Text style={{marginTop: 16, marginBottom: 8, fontWeight: '800', fontSize: 20}}>Descripción:</Text>
                    <Text style={{color: "#777"}}>{item.description}</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    location: {
        fontSize: 30,
        color: "#fff",
        fontWeight: '800',
        width: ITEM_WIDTH * 0.8,
        height: 500,
        textTransform: 'uppercase',
        position: 'absolute',
        top: SPACING,
        left: SPACING,
    }
});

export default ListDetailScreen;