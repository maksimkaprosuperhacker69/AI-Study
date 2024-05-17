import {Text, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'
import {router, usePathname} from "expo-router";

const CourseCard = ({date, name, id}) => {
    const pathname = usePathname();
    const [course, setQuery] = useState(id || "");

    return (
        <TouchableOpacity onPress={() => {
            if (pathname.startsWith("/courses")) {
                router.setParams({course})
            } else {
                router.push(`/courses/${course}`)
            }
        }}
                          activeOpacity={0.7}>
            <View className="w-[350px] h-[104px] bg-white justify-start items-center rounded-[22px] mb-5" style={{
                shadowColor: '#323131',
                shadowOffset: {width: 0, height: 9},
                shadowOpacity: 0.7,
                shadowRadius: 1,
            }}>
                <Text className="font-rubikOne text-[16px] mt-2">{date}</Text>
                <Text className="font-intro text-[32px] mt-2">{name}</Text>

            </View>
        </TouchableOpacity>
    )
}
export default CourseCard

