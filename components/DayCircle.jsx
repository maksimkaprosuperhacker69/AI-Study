import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

const DayCircle = ({otherStylesCircle,otherStylesText,text}) => {
    return (
        <View>
            <View className={`w-[28px] h-[28px] bg-white rounded-[22px] items-center justify-center ml-[24px] ${otherStylesCircle}`}>
                <Text className={`font-patua text-black text-[14px] ${otherStylesText}`}>{text}</Text>
            </View>
        </View>
    )
}
export default DayCircle;