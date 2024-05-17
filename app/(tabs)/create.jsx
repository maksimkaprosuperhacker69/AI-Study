import {Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'
import * as DocumentPicker from "expo-document-picker";
import {LinearGradient} from "expo-linear-gradient";
import icons from "../../constants/icons";
import {StatusBar} from "expo-status-bar";
import {SafeAreaView} from "react-native-safe-area-context";
import FormCourse from "../../components/FormCourse";
import CustomButton from "../../components/CustomButton";
import {useGlobalContext} from "../../context/GlobalProvider";
import {router} from "expo-router";
import {createVideoPost} from "../../lib/appwrite";

const Create = () => {
    const {user} = useGlobalContext();
    const [uploading, setUploading] = useState(false);
    const [form, setForm] = useState({
        title: "",
        description: "",
        file: null

    });

    const openPicker = async (selectType) => {
        const result = await DocumentPicker.getDocumentAsync({
            type:
                selectType === "image"
                    ? ["image/png", "image/jpg"]
                    : ["application/pdf", "application/txt"],
        });

        if (!result.canceled) {
            setForm({
                ...form,
                file: result.assets[0],

            });
        }
    };

    const submit = async () => {
        if (
            (form.title === "") |
            (form.description === "") |
            !form.file
        ) {
            return Alert.alert("Please provide all fields");
        }

        setUploading(true);
        try {
            console.log(44323)
            await createVideoPost({
                ...form,
                userId: user.$id,
            });

            Alert.alert("Success", "Course uploaded successfully");
            router.push("/home");
        } catch (error) {
            console.log(error);
            Alert.alert("Error", error.message);
        } finally {
            setForm({
                title: "",
                description: "",
                file: null,
            });
            console.log(99);

            setUploading(false);
        }
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
                    <View className="w-full items-center  justify-center bg">
                        <Text className="font-intro text-2xl text-white mt-16">Create course</Text>
                        <FormCourse title='Name' placeholder="Title"
                                    handleChangeText={(e) => setForm({...form, title: e})}/>
                        <FormCourse title='Discription' placeholder="Description"
                                    handleChangeText={(e) => setForm({...form, description: e})}/>
                        <Text className="font-intro text-white text-[14px] mt-12 mb-6">upload file with study
                            information</Text>
                        {!form.file ?
                            <View className="w-[90%] flex-row justify-between items-center mb-16">
                                <TouchableOpacity onPress={() => openPicker('file')}>
                                    <View
                                        className="w-[143px] h-[143px] bg-white rounded-[18px] justify-center items-center ">
                                        <Image source={icons.newFile} resizeMode="contain"/>
                                        <Text className="font-patua text-[16px] mt-2 text-[#540BC5]">
                                            PDF file
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <Text className="text-white font-patua text-[20px] ">
                                    or
                                </Text>
                                <TouchableOpacity onPress={() => openPicker('image')}>
                                    <View
                                        className="w-[143px] h-[143px] bg-white rounded-[18px] justify-center items-center">
                                        <Image source={icons.photo}/>
                                        <Text className="font-patua text-[16px] mt-2 text-[#540BC5]">
                                            Image
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            : <View className="w-[90%] justify-between items-center mb-16">
                                <TouchableOpacity onPress={() => openPicker('image')}>
                                    <View
                                        className="w-[143px] h-[143px] bg-white rounded-[18px] justify-center items-center ">
                                        <Image source={icons.check} resizeMode="contain"
                                               className='w-16 h-16 mb-2 mt-3'/>
                                        <Text className="font-rubikOne text-[12px] mt-2 text-[#540BC5]">
                                            {form.file.name}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>}

                        <CustomButton title="create" handlePress={submit}
                                      textStyles='font-intro text-2xl text-[#540BC5]'
                                      containerStyles='py-[13px] px-20 rounded-[20px]'/>
                    </View>
                </ScrollView>

            </LinearGradient>
            <StatusBar style='light'/>
        </SafeAreaView>
    )
}
export default Create
const styles = StyleSheet.create({})
