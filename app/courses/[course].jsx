import {router, useLocalSearchParams, usePathname} from "expo-router";
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {LinearGradient} from "expo-linear-gradient";
import {StatusBar} from "expo-status-bar";
import {useGlobalContext} from "../../context/GlobalProvider";
import useAppwrite from "../../lib/useAppWrite";
import {getCoursesById} from "../../lib/appwrite";
import {icons} from "../../constants";
import CustomButton from "../../components/CustomButton";


const Course = () => {
    const pathname = usePathname();

    const {course} = useLocalSearchParams();
    const {data, loading} = useAppwrite(() => getCoursesById(course))
    const [courseId, setcourseId] = useState(course || "");
    const {setCourse} = useGlobalContext();


    return (loading ?
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

                            <View className=' w-32 h-7 bg-[#E1E1E1] rounded-[12px] opacity-60 mt-20'></View>
                            <View className=' w-60 h-7 bg-[#E1E1E1] rounded-[12px] opacity-60 mt-4'></View>
                            <View className=' w-80 h-20 bg-[#E1E1E1] rounded-[24px] opacity-60 mt-4'></View>


                            <View
                                className="w-[350px] h-[104px] bg-[#E1E1E1] opacity-60  rounded-[22px]  mt-10 mb-5"></View>
                            <View
                                className="w-[350px] h-[104px] bg-[#E1E1E1] opacity-60  rounded-[22px]   mt-6 mb-5"></View>

                            <View
                                className="w-[350px] h-[104px] bg-[#E1E1E1] opacity-60  rounded-[22px]  mt-6 mb-5"></View>


                        </View>

                    </ScrollView>

                </LinearGradient>
                <StatusBar style='light'/>
            </SafeAreaView>
            : <SafeAreaView className=" items-center justify-center h-full ">
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

                            <Text className='text-xl font-intro mt-20 text-white'>{data.date}</Text>
                            <Text className='text-4xl font-intro mt-4 text-white'>{data.title}</Text>
                            <Text
                                className='text-xl font-intro mt-4 text-white text-center mx-2'>{data.description}</Text>

                            <TouchableOpacity activeOpacity={0.7} onPress={() => {
                                setCourse(data)
                                router.push('/course_tabs/summarize')
                            }}>
                                <View
                                    className="w-[350px] h-[104px] bg-white justify-center items-center rounded-[22px] flex-row mt-10 mb-5"
                                    style={{
                                        shadowColor: '#323131',
                                        shadowOffset: {width: 0, height: 9},
                                        shadowRadius: 1,
                                    }}>
                                    <Image source={icons.book}/>
                                    <Text className="font-intro text-[32px] ml-4 text-second_grad">Summarise</Text>

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => {
                                setCourse(data)
                                router.push('/course_tabs/test')
                            }}>
                                <View
                                    className="w-[350px] h-[104px] bg-white justify-center items-center rounded-[22px] flex-row mt-6 mb-5"
                                    style={{
                                        shadowColor: '#323131',
                                        shadowOffset: {width: 0, height: 9},
                                        shadowRadius: 1,
                                    }}>
                                    <Image source={icons.circle}/>
                                    <Text className="font-intro text-[32px] ml-4 text-second_grad">test</Text>

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => {
                                setCourse(data)
                                router.push('/course_tabs/terms')
                            }}>
                                <View
                                    className="w-[350px] h-[104px] bg-white justify-center items-center rounded-[22px] flex-row mt-6 mb-5"
                                    style={{
                                        shadowColor: '#323131',
                                        shadowOffset: {width: 0, height: 9},
                                        shadowRadius: 1,
                                    }}>
                                    <Image source={icons.turn}/>
                                    <Text className="font-intro text-[32px] ml-4 text-second_grad">terms</Text>

                                </View>
                            </TouchableOpacity>
                            <CustomButton title='Back' containerStyles='w-[60%]  rounded-2xl mt-10'
                                          textStyles='font-intro text-second_grad'
                                          handlePress={() => {
                                              router.push("../(tabs)/home")
                                          }}/>

                        </View>

                    </ScrollView>

                </LinearGradient>
                <StatusBar style='light'/>
            </SafeAreaView>


    );
};

export default Course;