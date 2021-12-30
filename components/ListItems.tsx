import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { tutorial2Spec } from '../assets/data/theme';
const {ITEM_HEIGHT, ITEM_WIDTH, RADIUS, SPACING, FULL_SIZE} = tutorial2Spec;

interface Props {
    data: Item[],
}
interface Item {
    key: string,
    service: string,
    image:string,
    price: number,
    color: string,
    categorias: string,
    description: string,
}

export const ListItems = ({data}:Props) => {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();
    return (
        <Animated.FlatList 
        data={data}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={FULL_SIZE}
        decelerationRate='fast'
        onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: true}
        )}
        renderItem={({item, index}) => {
            const inputRange = [
                (index - 1) * FULL_SIZE, 
                index * FULL_SIZE, 
                (index + 1) * FULL_SIZE,
            ];
            
            const translateX = scrollX.interpolate({
                inputRange,
                outputRange: [ITEM_WIDTH, 0, -ITEM_WIDTH]
            })

            const scale = scrollX.interpolate({
                inputRange,
                outputRange: [ 1, 1.1, 1]
            })
            return(
            <TouchableOpacity onPress={() => {
                navigation.push('Detail', {item})
            }} style={styles.itemContainer}>
                <View style={[StyleSheet.absoluteFillObject, {overflow: 'hidden', borderRadius: RADIUS}]}>
                    <Animated.Image source={{uri: item.image}} 
                        style={[StyleSheet.absoluteFill, {
                            resizeMode: 'cover',
                            transform: [{scale}]
                        }]} 
                    />
                </View>
                <Animated.Text 
                    style={[(styles.service), {transform: [{translateX}]}]}>
                        {item.service}
                </Animated.Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceValue}>{item.price}</Text>
                    <Text style={styles.priceLabel}>$ MX</Text>
                </View>
            </TouchableOpacity>
            )
        }}
    />
    )
}

const styles = StyleSheet.create({
    itemContainer:{
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        margin: SPACING
    },
    service: {
        fontSize: 30,
        color: "#fff",
        fontWeight: '800',
        width: ITEM_WIDTH * 0.8,
        textTransform: 'uppercase',
        position: 'absolute',
        top: SPACING,
        left: SPACING,
    },
    priceContainer: {
        position: 'absolute',
        bottom: SPACING,
        left: SPACING,
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center'
    },
    priceValue: {
        color: '#fff',
        fontWeight: '800',
        fontSize: 18,
    },
    priceLabel: {
        color: '#fff',
        fontSize: 10,
    }
});