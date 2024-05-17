import {SplashScreen, Stack} from "expo-router"
import {React, useEffect} from 'react'
import {useFonts} from 'expo-font'
import GlobalProvider from "../context/GlobalProvider";

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        "intro": require('../assets/fonts/IntroDemo-BlackCAPS.otf'),
        "monoton": require('../assets/fonts/Monoton-Regular.ttf'),
        "patua": require('../assets/fonts/PatuaOne-Regular.ttf'),
        "rubik": require('../assets/fonts/Rubik-VariableFont_wght.ttf'),
        "rubikOne": require('../assets/fonts/RubikOne-Regular.ttf')
    });
    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) return null;
    return (
        <GlobalProvider>
            <Stack>
                <Stack.Screen name="index" options={{headerShown: false}}/>
                <Stack.Screen name="(auth)" options={{headerShown: false}}/>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                <Stack.Screen name="courses/[course]" options={{headerShown: false}}/>
                <Stack.Screen name="summarizes/[summarize]" options={{headerShown: false}}/>
                <Stack.Screen name="test/[test]" options={{headerShown: false}}/>
                <Stack.Screen name="terms/[terms]" options={{headerShown: false}}/>

            </Stack>
        </GlobalProvider>
    )
}
export default RootLayout