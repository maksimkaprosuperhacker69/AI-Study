import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Input } from "@material-tailwind/react";

import { icons } from "../constants";


const FormCourse = ({
                       title,
                       value,
                       placeholder,
                       handleChangeText,
                       otherStyles,
                       ...props
                   }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className={` w-full flex items-center justify-center mt-8 ${otherStyles} `}>


            <View className={`w-[70%] justify-center`}>
                <TextInput
                    style={{textAlign: 'center'}}
                    className={`relative w-full p-5  border-white border-b-2 text-white text-xl font-rubikOne focus:border-b-4`}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#A7A7A7"

                    onChangeText={handleChangeText}
                    {...props}
                />
            </View>
        </View>
    );
};

export default FormCourse;
