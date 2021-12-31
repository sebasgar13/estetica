import React from 'react'
import { StyleSheet, Text } from 'react-native'

interface Props {
    title: string,
    color?: string,
    top?: number,
}

export const Header = ({title, top=16, color="#000"}: Props) => {
    return (
        <Text style={{...styles.title, marginTop: top, color}}>{title}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center', 
        marginBottom: 16,  
        fontWeight: 'bold', 
        fontSize: 30, 
        paddingHorizontal:8
    }
})
