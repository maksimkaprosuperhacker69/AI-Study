import {Text, View} from 'react-native'
import React from 'react'
import {useLocalSearchParams} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import useAppwrite from "../../lib/useAppWrite";
import {getCoursesById} from "../../lib/appwrite";
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';


const Summarize = () => {
    const {summarize} = useLocalSearchParams();
    const {data, loading} = useAppwrite(() => getCoursesById(course))
    return (
        <SafeAreaView className="justify-center h-full items-center text-white">
            <View>
                <Bars size={10} color="#FDAAFF" />
            </View>
        </SafeAreaView>
    )
}
export default Summarize
