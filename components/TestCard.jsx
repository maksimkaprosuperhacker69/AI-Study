import {Text, TouchableOpacity, View} from 'react-native'
import React,{useState} from 'react'
import {router, usePathname} from "expo-router";
import { RadioButton } from 'react-native-paper';

const TestCard = (question) => {
    const pathname = usePathname();

    return (
            <View className="w-[350px] h-[104px] bg-white justify-start items-center rounded-[22px] mb-5" style={{
                shadowColor: '#323131',
                shadowOffset: {width: 0, height: 9},
                shadowOpacity: 0.7,
                shadowRadius: 1,
            }}>
                <Text className="font-rubikOne text-[16px] mt-2">{question}</Text>


            </View>
    )
}
export default TestCard
