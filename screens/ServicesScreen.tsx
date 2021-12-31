import React from 'react';
import { ScrollView, View } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import services from '../assets/data/services';
import { Header } from '../components/Header';
import { ListItems } from '../components/ListItems';


export default function ServicesScreen() {
    return (
        <View style={{flex:1}}>
            <Svg style={{position:'absolute', top:0, left:0}} width="100%" height="100%">
                <Defs>
                    <LinearGradient id="services" >
                        <Stop offset={1} stopColor="#d2e2f2" stopOpacity={1} />
                        <Stop offset={0} stopColor="#fff" stopOpacity={1} />
                    </LinearGradient>
                </Defs>
                <Rect x="0" y="0" width="100%" height="110%" fill="url(#services)" />
            </Svg>
            <ScrollView >
                <Header title='Mas comprados' top={20}/>
                <View style={{flex:1}}>
                    <ListItems data={services.filter((item) => item.categorias.includes('popular'))}/>
                </View>
                <Header title='Todos nuestros servicios' />
                <View style={{flex:1}}>
                    <ListItems data={services}/>
                </View>
                <Header title='Premium' />
                <View style={{flex:1}}>
                    <ListItems data={services.filter((item) => item.categorias.includes('premium'))}/>
                </View>
            </ScrollView>
        </View>
    );
}

