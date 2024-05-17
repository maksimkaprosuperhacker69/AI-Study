import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {Tabs} from "expo-router";
import {icons} from "../../constants";
import {LinearGradient} from "expo-linear-gradient";


const TabIcon = ({icon, color, name, focused, classNames}) => {
    return (
        <View className={`justify-center items-center gap-1 ${classNames}`}>
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-9 h-9"
            />
            <Text className={`${focused ? 'font-patua text-main' : 'font-patua text-black'} text-xs`}>{name}</Text>
        </View>
    )
}

const TabPlusBut = ({focused}) => {
    const colors = focused ? ["#1F0453", "#5C0BD8", "#CD36FF"] : ['#5E5E5E', '#9D9D9D']
    return (
        <View className="justify-center items-center gap-2 b">
            <LinearGradient colors={colors}
                            style={{width: 70, height: 70, borderRadius: 13}}
                            className=" justify-center items-center ">
                <Image
                    source={icons.plus}
                    className="w-9 h-9 "

                    resizeMode="contain"

                />

            </LinearGradient>

        </View>
    )
}
const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#5C0BD8",
                    tabBarInactiveTintColor: "#CDCDE0",
                    tabBarStyle: {
                        position: "relative",
                        left: '-1%',
                        paddingTop: "4%",
                        borderTopWidth: 4,
                        borderLeftWidth: 4,
                        borderRightWidth: 4,
                        borderTopColor: '#6C12DE',
                        borderColor: '#6C12DE',
                        width: '102%',
                        height: "12%",
                        backgroundColor: 'white',

                    }
                }}>
                <Tabs.Screen
                    name="home"
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => (
                            <TabIcon
                                icon={icons.home}
                                name="Home"
                                color={color}
                                focused={focused}
                                classNames="ml-4"
                            />

                        )
                    }}
                />
                <Tabs.Screen
                    name="create"
                    options={{
                        title: '',
                        headerShown: false,
                        tabBarIcon: ({focused}) => (
                            <TabPlusBut focused={focused}/>
                        )
                    }}
                />
                <Tabs.Screen
                    name="settings"
                    options={{
                        title: 'Settings',
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => (
                            <TabIcon
                                icon={icons.settings}
                                name="Settings"
                                color={color}
                                focused={focused}
                                classNames="mr-4 "
                            />

                        )
                    }}
                />

            </Tabs>
        </>
    )
}
export default TabsLayout
const styles = StyleSheet.create({})
