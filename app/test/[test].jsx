import {Text, View} from 'react-native'
import React from 'react'
import {useLocalSearchParams} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import useAppwrite from "../../lib/useAppWrite";
import {getCoursesById} from "../../lib/appwrite";

const Test = () => {
    const {courseId} = useLocalSearchParams();
    const {data, loading} = useAppwrite(() => getCoursesById(course))
    return (
        <SafeAreaView className="justify-center h-full items-center text-white">
            <View>
                <Text>{courseId}</Text>
            </View>
        </SafeAreaView>
    )
}
export default Test
