import {router} from "expo-router";
import {View, Text, Image} from "react-native";

import {icons} from "../constants";
import CustomButton from "./CustomButton";

const EmptyState = ({subtitle}) => {
    return (
        <View className="flex justify-center items-center px-4">
            <Image
                source={icons.notFound}
                resizeMode="contain"
                className="w-[150px] h-[150px] "
            />


            <Text className="text-xl text-center font-patua text-white mt-4">
                {subtitle}
            </Text>

            <CustomButton
                title="Create"
                handlePress={() => router.push("/create")}
                containerStyles="w-full my-5"
            />
        </View>
    );
};

export default EmptyState;