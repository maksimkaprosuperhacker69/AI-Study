import {Alert, FlatList, ScrollView, Text, View} from 'react-native'
import React from 'react'
import {router, useLocalSearchParams, usePathname} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import useAppwrite from "../../lib/useAppwrite";
import {createVideoPost, getCoursesById, useApi} from "../../lib/appwrite";
import {useGlobalContext} from "../../context/GlobalProvider";
import {LinearGradient} from "expo-linear-gradient";
import CustomButton from "../../components/CustomButton";
import {StatusBar} from "expo-status-bar";
import LottieView from "lottie-react-native";
import TestCard from "../../components/TestCard"

const Test = () => {
    const {course} = useGlobalContext();
    const pathname = usePathname();
    const submit = async () => {
        router.push('/course_tabs/results')
    };
    const {data, loading} = useAppwrite(() => useApi('test', course.file, course.$id))
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

                            <FlatList
                                data={JSON.parse(data).questions}
                                keyExtractor={(item) => item.number_question}
                                renderItem={({item}) => (
                                    <TestCard question={item.question} option_1={item.options[0]} option_2={item.options[1]} option_3={item.options[2]}/>
                                )}
                                ListFooterComponent={
                                <View className="items-center  justify-center">
                                    <CustomButton title='Submit' textStyles="font-intro text-xl" containerStyles="w-[200px] mb-10" handlePress={submit}/>
                                    </View>
                                }
                                ListHeaderComponent={
                                <View className="items-center  justify-center">
                                <Text className="font-intro text-white text-5xl mt-14 mb-6">Test</Text>
                                </View>
                            }


                            />
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
