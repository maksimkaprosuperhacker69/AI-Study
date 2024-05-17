import {StatusBar} from 'expo-status-bar';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {Redirect, router} from "expo-router";
import {LinearGradient} from 'expo-linear-gradient';
import {SafeAreaView} from "react-native-safe-area-context";
import {images} from "../constants"
import CustomButton from "../components/CustomButton";
import {useGlobalContext} from "../context/GlobalProvider";


export default function App() {
    const {loading, isLogged} = useGlobalContext();

    if (!loading && isLogged) return <Redirect href="/home"/>;

    return (
        <SafeAreaView className=" items-center justify-center h-full ">
            <LinearGradient colors={["#CD36FF", "#5C0BD8", "#1F0453"]} style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                height: "115%",
            }} end={{x: 0, y: 1}} start={{x: 1, y: 0}} className="items-center justify-start">
                <Image className="w-64 h-64 mt-48" source={images.logo} resizeMode="contain"/>
                <Text className="font-intro mt-10 text-5xl text-white">AI Study</Text>
                <CustomButton title="Continue with Email"
                              containerStyles='w-5/6 mt-12'
                              textStyles='font-intro'
                              handlePress={() => router.push('sign-in')}
                />


            </LinearGradient>
            <StatusBar style='light'/>
        </SafeAreaView>

    );
}


