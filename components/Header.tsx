import React from 'react'
import { StyleSheet, Text } from 'react-native'

interface Props {
    title: string,
    top?: number,
}

export const Header = ({title, top=16}: Props) => {
    return (
        <Text style={{...styles.title, marginTop: top}}>{title}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center', 
        marginBottom: 16, 
        color: '#161616', 
        fontWeight: 'bold', 
        fontSize: 30, 
        paddingHorizontal:8
    }
})
