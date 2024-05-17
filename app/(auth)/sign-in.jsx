 import {Alert, Image, ScrollView, Text, View} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {LinearGradient} from "expo-linear-gradient";
import {images} from "../../constants"
import FormField from "../../components/FormField"
import CustomButton from "../../components/CustomButton";
import {Link, router} from "expo-router";
import {getCurrentUser, signIn} from "../../lib/appwrite";
import {useGlobalContext} from "../../context/GlobalProvider";

const SignIn = () => {
    const {setUser, setIsLogged} = useGlobalContext();
    const [isSubmitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const submit = async () => {
        if (form.email === "" || form.password === "") {
            Alert.alert("Error", "Please fill in all fields");
        }

        setSubmitting(true);

        try {
            await signIn(form.email, form.password);
            const result = await getCurrentUser();
            setUser(result);
            setIsLogged(true);


            router.replace("/home");
        } catch (error) {
            Alert.alert("Error", error.message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <SafeAreaView className=" h-full">
            <LinearGradient colors={["#CD36FF", "#5C0BD8", "#1F0453"]} style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                height: "115%",
            }} end={{x: 0, y: 1}} start={{x: 1, y: 0}} className=" justify-center">
                <ScrollView>
                    <View
                        className="w-full flex justify-center min-h-[80vh] px-4 my-3"
                    >
                        <View className="w-full items-center  justify-center mt-12">
                            <View className="w-full items-center flex-row  justify-center">
                                <Image
                                    source={images.logo}
                                    resizeMode="contain"
                                    className="w-14 h-14"
                                />
                                <Text className=" ml-5 font-intro text-3xl text-white">AI study</Text>
                            </View>
                            <Text className="mt-10 font-intro text-xl text-white"> Log in to AI Study</Text>
                        </View>


                        <FormField title='Email'
                                   value={form.email}
                                   handleChangeText={(e) => setForm({...form, email: e})}
                                   otherStyles="mt-5"
                                   keyboardType="email-address"
                        />
                        <FormField title='Password'
                                   value={form.password}
                                   handleChangeText={(e) => setForm({...form, password: e})}
                                   otherStyles="mt-5"
                                   keyboardType="email-address"
                        />
                        <CustomButton
                            title="Sign in"
                            handlePress={submit}
                            containerStyles="mt-6"
                            textStyles="font-patua"
                            isLoading={isSubmitting}
                        />
                        <View className="flex justify-center pt-5 flex-row gap-2">
                            <Text className="text-lg text-third_grad font-patua">
                                Don't have an account?
                            </Text>
                            <Link
                                href="/sign-up"
                                className="text-lg font-patua text-white "
                            >
                                Sign up
                            </Link>
                        </View>

                    </View>

                </ScrollView>
            </LinearGradient>
        </SafeAreaView>

    )
}
export default SignIn




