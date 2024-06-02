import {FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {LinearGradient} from "expo-linear-gradient";
import {StatusBar} from "expo-status-bar";
import {useGlobalContext} from "../../context/GlobalProvider";
import DayCircle from "../../components/DayCircle";
import StreakTracker from "../../context/StreakTracker";
import CourseCard from "../../components/CourseCard";
import useAppwrite from "../../lib/useAppwrite";
import {getUserCourses} from "../../lib/appwrite";
import EmptyState from "../../components/EmptyState";
import {ScrollView} from 'react-native-virtualized-view';


const Home = () => {
    const {user} = useGlobalContext();
    const {data: posts, loading, refetch} = useAppwrite(() => getUserCourses(user.$id));

    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = async () => {
        setRefreshing(true);
        await refetch();
        setRefreshing(false);
    };

    const currentStreak = StreakTracker();
    const currentDate = new Date();
    const dayIndex = currentDate.getDay() + 1;

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
                <ScrollView className="w-full flex  min-h-[85vh] " refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#fff"/>
                }>
                    <View className="w-full items-center  justify-center ">
                        <Text className="font-monoton text-5xl mt-16 pt-5 text-white">Hi, {user?.username}!</Text>
                        <View className="items-center justify-center mt-8">
                            <Text className="text-white font-intro text-2xl ">{currentStreak} days streak</Text>

                            <View className="flex-row mt-4">
                                <DayCircle text='Mn'
                                           otherStylesCircle={`ml-[0px] ${dayIndex - currentStreak + 1 <= 2 && dayIndex >= 2 ? "bg-first_grad" : ""}`}
                                           otherStylesText={` ${dayIndex - currentStreak + 1 <= 2 && dayIndex >= 2 ? "text-white" : ""}`}/>
                                <DayCircle text='Tu'
                                           otherStylesCircle={`${dayIndex - currentStreak + 1 <= 3 && dayIndex >= 3 ? "bg-first_grad" : ""}`}
                                           otherStylesText={` ${dayIndex - currentStreak + 1 <= 3 && dayIndex >= 3 ? "text-white" : ""}`}/>
                                <DayCircle text='Wd'
                                           otherStylesCircle={`${dayIndex - currentStreak + 1 <= 4 && dayIndex >= 4 ? "bg-first_grad" : ""}`}
                                           otherStylesText={` ${dayIndex - currentStreak + 1 <= 4 && dayIndex >= 4 ? "text-white" : ""}`}/>
                                <DayCircle text='Th'
                                           otherStylesCircle={`${dayIndex - currentStreak + 1 <= 5 && dayIndex >= 5 ? "bg-first_grad" : ""}`}
                                           otherStylesText={` ${dayIndex - currentStreak + 1 <= 5 && dayIndex >= 5 ? "text-white" : ""}`}/>
                                <DayCircle text='Fr'
                                           otherStylesCircle={`${dayIndex - currentStreak + 1 <= 6 && dayIndex >= 6 ? "bg-first_grad" : ""}`}
                                           otherStylesText={` ${dayIndex - currentStreak + 1 <= 6 && dayIndex >= 6 ? "text-white" : ""}`}/>
                                <DayCircle text='Sa'
                                           otherStylesCircle={`${dayIndex - currentStreak + 1 <= 7 && dayIndex >= 7 ? "bg-first_grad" : ""}`}
                                           otherStylesText={` ${dayIndex - currentStreak + 1 <= 7 && dayIndex >= 7 ? "text-white" : ""}`}/>
                                <DayCircle text='Sn'
                                           otherStylesCircle={`${dayIndex - currentStreak + 1 <= 1 && dayIndex >= 1 ? "bg-first_grad" : ""}`}
                                           otherStylesText={` ${dayIndex - currentStreak + 1 <= 1 && dayIndex >= 1 ? "text-white" : ""}`}/>
                            </View>
                        </View>
                        <Text className="font-patua text-[32px] text-white mt-10 mb-2 ">YOUR COURSES</Text>


                        {loading ?
                            <View>
                                <View
                                    className="w-[350px] h-[104px] bg-white justify-start items-center rounded-[22px] mb-5 opacity-50">
                                </View>
                                <View
                                    className="w-[350px] h-[104px] bg-white justify-start items-center rounded-[22px] mb-5 opacity-50">
                                </View>
                                <View
                                    className="w-[350px] h-[104px] bg-white justify-start items-center rounded-[22px] mb-5 opacity-50">
                                </View>
                                <View
                                    className="w-[350px] h-[104px] bg-white justify-start items-center rounded-[22px] mb-5 opacity-50">
                                </View>
                                
                            </View>
                            :
                            <FlatList
                                data={posts}
                                keyExtractor={(item) => item.$id}
                                renderItem={({item}) => (
                                    <CourseCard date={item.date} name={item.title} id={item.$id}/>
                                )}
                                ListEmptyComponent={() => (
                                    <EmptyState
                                        subtitle="No videos found for this profile"
                                    />
                                )}
                            />
                        }
                    </View>

                </ScrollView>

            </LinearGradient>
            <StatusBar style='light'/>
        </SafeAreaView>

    )
}
export default Home
const styles = StyleSheet.create({})
