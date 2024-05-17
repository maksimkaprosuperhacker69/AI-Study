import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {LinearGradient} from "expo-linear-gradient";
import {StatusBar} from "expo-status-bar";
import {SafeAreaView} from "react-native-safe-area-context";
import {useGlobalContext} from "../../context/GlobalProvider";
import icons from "../../constants/icons";
import {router} from "expo-router";
import {signOut} from "../../lib/appwrite";

const Settings = () => {
    const {user, setUser, setIsLogged} = useGlobalContext();

    const logout = async () => {
        await signOut();
        setUser(null);
        setIsLogged(false);

        router.replace("/sign-in");
    };
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
                    <View className="w-full items-center  justify-center ">
                        <Text className="font-intro text-5xl mt-20 text-white">AI STUDY</Text>
                        <Text className="font-intro text-2xl mt-10 text-white">user information</Text>
                        <View className="w-[340px] h-[200px] border-[3px] border-white rounded-[19px] mt-4">
                            <TouchableOpacity>
                                <View className="border-b-[3px] border-white h-[66px] flex-row justify-between">
                                    <View className="ml-4 mt-3 ">
                                        <Text className="font-intro text-[13px] text-white">username</Text>
                                        <Text className="font-rubik text-[13px] text-white">{user?.username}</Text>
                                    </View>
                                    <Image source={icons.arrow} className="mt-2"/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View className="border-b-[3px] border-white h-[66px] flex-row justify-between">
                                    <View className="ml-4 mt-3 ">
                                        <Text className="font-intro text-[13px] text-white">Email</Text>
                                        <Text className="font-rubik text-[13px] text-white">{user?.email}</Text>
                                    </View>
                                    <Image source={icons.arrow} className="mt-2"/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View className=" h-[66px] flex-row justify-between">
                                    <View className="ml-4 mt-3 ">
                                        <Text className="font-intro text-[13px] text-white">school</Text>
                                        <Text className="font-rubik text-[13px] text-white">Phystech School</Text>
                                    </View>
                                    <Image source={icons.arrow} className="mt-2"/>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <Text className="font-intro text-3xl mt-10 text-white">AI Model</Text>
                        <TouchableOpacity>
                            <View
                                className="w-[340px] h-[70px] border-[3px] border-white rounded-[19px] flex-row items-center justify-between mt-4">
                                <Text className="font-intro text-[15px] text-white ml-10">Gpt-4-turbo</Text>
                                <Image source={icons.arrow}/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={logout}>
                            <View
                                className="w-[200px] h-[45px] border-[3px] border-red-600  mt-20 rounded-[14px] flex-row items-center justify-center ">
                                <Text className="font-intro text-[15px] text-red-600 ">Log out</Text>
                            </View>
                        </TouchableOpacity>
                        <Text className="font-intro text-[12px] mt-4 text-[#CAC8C8]">special for Phystech 05.2024</Text>


                    </View>
                </ScrollView>

            </LinearGradient>
            <StatusBar style='light'/>
        </SafeAreaView>
    )
}
export default Settings
const styles = StyleSheet.create({})
