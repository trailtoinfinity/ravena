import React from 'react'
import { Button, Text } from 'react-native'
export default ({ inc, dec }) => {
    return (
        <>
            <Text>
                <Button title='+' onPress={inc} />  <Button title='-' onPress={dec} />
            </Text>
        </>
    )
}