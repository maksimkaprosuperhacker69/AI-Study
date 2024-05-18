import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'
import {router, useLocalSearchParams, usePathname} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import useAppwrite from "../../lib/useAppWrite";
import {getCoursesById, useApi} from "../../lib/appwrite";
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
import {useGlobalContext} from "../../context/GlobalProvider";
import {LinearGradient} from "expo-linear-gradient";
import {StatusBar} from "expo-status-bar";
import {icons} from "../../constants";
import LottieView from 'lottie-react-native';



const Summarize = () => {
    const {course} = useGlobalContext();

    const {data, loading} = useAppwrite(() => useApi('summarize',course.file,course.$id))


    return (
        !loading ?
            <SafeAreaView className=" items-center justify-center h-full ">

                <LinearGradient colors={["#CD36FF", "#5C0BD8", "#1F0453"]} style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    height: "115%",
                    flex: 1
                }} end={{x: 0, y: 1}} start={{x: 1, y: 0}} className="items-center">
                    <ScrollView className="w-full flex  min-h-[85vh] ">
                        <View className="w-full items-center  justify-center ">
                            <Text className='text-xl font-intro mt-20 text-white'>{data}</Text>

                        </View>

                    </ScrollView>

                </LinearGradient>
                <StatusBar style='light'/>
            </SafeAreaView>
            :
            <SafeAreaView className=" items-center justify-center h-full">
                <LinearGradient colors={["#CD36FF", "#5C0BD8", "#1F0453"]} style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    height: "115%",
                    flex: 1
                }} end={{x: 0, y: 1}} start={{x: 1, y: 0}} className="justify-center items-center">
                <View className="items-center justify-center" style={{height: 300}}>
            <LottieView style={{flex:1, aspectRatio: 1}} source={require('../../assets/loader.json')} autoPlay loop />
            </View>
                </LinearGradient>
            </SafeAreaView>
    )
}
export default Summarize
