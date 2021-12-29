import React from 'react';
import { StyleSheet, Text, View, Image, useWindowDimensions } from "react-native";

interface Props {
    titulo: string,
    parrafo: string
}

function Card({titulo, parrafo}:Props) {
    const {width} = useWindowDimensions();
    return ( 
        <View style={{...styles.container, width: width - 80, height: 8*((width-80)/5)}}>
            <View style={{flex:1, width: '100%', height:300}}>
                <Image
                    source={{
                        uri: 'https://w6h5a5r4.rocketcdn.me/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg'
                    }}
                    style={styles.img}
                />
            </View>
            <View style={{flex:1, width: '100%', backgroundColor: '#555'}}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.parrafo}>{parrafo} : {width}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden'
    },
    img: {
        flex:1,
    },
    parrafo: {
        color: '#fff',
        textAlign: 'center'
    },
    titulo:{
        color: '#fff',
        fontWeight: '900',
        fontSize: 24,
        marginVertical: 8,
        textAlign: 'center'
    }
})

export default Card;