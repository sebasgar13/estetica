import React from 'react';
import { ScrollView, View } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import products from '../assets/data/products';
import { Header } from '../components/Header';
import { ListItems } from '../components/ListItems';


export default function ProductsScreen() {
    return (
        <View style={{flex:1}}>
            <Svg style={{position:'absolute', top:0, left:0}} width="100%" height="100%">
                <Defs>
                    <LinearGradient id="products" gradientTransform='rotate(45)'>
                        <Stop offset={0} stopColor="#fff" stopOpacity={1} />
                        <Stop offset={1} stopColor="#d3e3f3" stopOpacity={1} />
                    </LinearGradient>
                </Defs>
                <Rect x="0" y="0" width="100%" height="110%" fill="url(#products)" />
            </Svg>
            <ScrollView >
                <Header title='Más comprados' top={20} color='#555'/>
                <View style={{flex:1}}>
                    <ListItems data={products.filter((item) => item.categorias.includes('popular'))}/>
                </View>
                <Header title='Todos nuestros productos' color='#555'/>
                <View style={{flex:1}}>
                    <ListItems data={products}/>
                </View>
                <Header title='Tintes' color='#555'/>
                <View style={{flex:1}}>
                    <ListItems data={products.filter((item) => item.categorias.includes('tinte'))}/>
                </View>
                <Header title='Tratamientos' color='#555'/>
                <View style={{flex:1}}>
                    <ListItems data={products.filter((item) => item.categorias.includes('tratamiento'))}/>
                </View>
            </ScrollView>
        </View>
    );
}

