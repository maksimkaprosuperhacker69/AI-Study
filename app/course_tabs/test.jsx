import {FlatList, ScrollView, Text, View} from 'react-native'
import React from 'react'
import {router, useLocalSearchParams, usePathname} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import useAppwrite from "../../lib/useAppwrite";
import {getCoursesById, useApi} from "../../lib/appwrite";
import {useGlobalContext} from "../../context/GlobalProvider";
import {LinearGradient} from "expo-linear-gradient";
import CustomButton from "../../components/CustomButton";
import {StatusBar} from "expo-status-bar";
import LottieView from "lottie-react-native";
import TestCard from "../../components/TestCard"

const Test = () => {
    const {course} = useGlobalContext();
    const pathname = usePathname();
    const {data, loading} = useAppwrite(() => useApi('test', course.file, course.$id))
    console.log(data)
    return (!loading ?
            <SafeAreaView className=" items-center justify-center h-full ">

                <LinearGradient colors={["#CD36FF", "#5C0BD8", "#1F0453"]} style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    height: "115%",
                    flex: 1
                }} end={{x: 0, y: 1}} start={{x: 1, y: 0}} className="items-center">
                        <View className="w-full items-center  justify-center ">
                            <Text className='text-4xl font-intro mt-16 text-white text-center'>{data[0].question}</Text>
                            <CustomButton title='Back' containerStyles='w-[60%]  rounded-2xl'
                                          textStyles='font-intro'
                                          handlePress={() => {
                                              if (pathname.startsWith("/courses")) {
                                                  router.setParams({course})
                                              } else {
                                                  router.push(`/courses/${course.$id}`)
                                              }
                                          }}/>
                        </View>


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
                        <LottieView style={{flex: 1, aspectRatio: 1}} source={require('../../assets/loader.json')}
                                    autoPlay loop/>
                    </View>
                </LinearGradient>
            </SafeAreaView>
    )
}
export default Test
