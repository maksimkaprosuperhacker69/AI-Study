import {Text, TouchableOpacity, View} from 'react-native'
import React,{useState} from 'react'
import {router, usePathname} from "expo-router";
import { Radio } from "@material-tailwind/react";
import { RadioButton } from 'react-native-paper';

const TestCard = ({question, option_1, option_2, option_3}) => {
    const pathname = usePathname();
    const [checked, setChecked] = React.useState(1);
    return (
            <View className="w-[350px] bg-white  rounded-[22px] mb-5 justify-center items-center" style={{
                shadowColor: '#323131',
                shadowOffset: {width: 0, height: 9},
                shadowOpacity: 0.7,
                shadowRadius: 1,
            }}><View className="w-[320px] ">
                <Text className="font-rubikOne text-[20px] mx-2 mb-4 mt-6 text-center">{question}</Text>
                </View>
                <View className="w-[360px] h-[10px] bg-second_grad rounded-3xl">
                </View>
                <View className="justify-center items-center  mb-6 w-[350px] ">
                    <View className="ml-4 flex-row items-center justify-between w-[300px] my-4">
                        <Text className='font-rubikOne text-xl float-left w-[250px]'>{option_1}</Text>
                        <RadioButton.Android
                            value="first"
                            status={ checked === 0 ? 'checked' : 'unchecked' }
                            onPress={() => setChecked(0)}
                            className='float-right '

                        />
                    </View>
                    <View className="w-[360px] h-[10px] bg-second_grad rounded-3xl">
                    </View>
                    <View className="ml-4 flex-row items-center  justify-between w-[300px]  my-4">
                        <Text className='font-rubikOne text-xl w-[250px]'>{option_2}</Text>
                        <RadioButton.Android
                            value="second"
                            status={ checked === 1 ? 'checked' : 'unchecked' }
                            onPress={() => setChecked(1)}
                            className='float-right '

                        />
                    </View>
                    <View className="w-[360px] h-[10px] bg-second_grad rounded-3xl">
                    </View>
                    <View className="ml-4 flex-row items-center  justify-between w-[300px]  my-4">
                        <Text className='font-rubikOne text-xl w-[250px]'>{option_3}</Text>
                        <RadioButton.Android
                            value="third"
                            status={ checked === 2 ? 'checked' : 'unchecked' }
                            onPress={() => setChecked(2)}
                            className='float-right '

                        />
                    </View>
                </View>
            </View>
    )
}
export default TestCard
