import {ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import CustomButton from "../../components/CustomButton";
import {router, usePathname} from "expo-router";
import {useGlobalContext} from "../../context/GlobalProvider";
import {LinearGradient} from "expo-linear-gradient";
import {StatusBar} from "expo-status-bar";
import {SafeAreaView} from "react-native-safe-area-context";

const Results = () => {
    const {course} = useGlobalContext();
    const pathname = usePathname();
    return (
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
                    <View className="w-full items-center  justify-center bg">
                        <View className="w-full items-center  justify-center ">
                            <Text className='text-4xl font-intro mt-24 text-white text-center mb-20'> Results</Text>
                            <View
                                className=" py-6 items-center  justify-center">
                                <Text className='text-[40px] font-rubikOne  text-white  mx-4 mb-10'>6/10  ||  60%</Text>
                            </View>
                        </View>
                        <CustomButton title='Back' containerStyles='w-[60%]  rounded-2xl' textStyles='font-intro'
                                      handlePress={() => {
                                          if (pathname.startsWith("/courses")) {
                                              router.setParams({course})
                                          } else {
                                              router.push(`/courses/${course.$id}`)
                                          }
                                      }}/>
                    </View>
                </ScrollView>

            </LinearGradient>
            <StatusBar style='light'/>
        </SafeAreaView>
    )
}
export default Results
