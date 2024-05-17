import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const StreakTracker = () => {
    const [streak, setStreak] = useState(0);

    useEffect(() => {
        const checkStreak = async () => {
            try {
                const lastLogin = await AsyncStorage.getItem('lastLogin');
                if (!lastLogin) {
                    setStreak(0);
                    return;
                }

                const lastLoginDate = new Date(lastLogin);
                const today = new Date();
                const yesterday = new Date(today);
                yesterday.setDate(yesterday.getDate() - 1);

                if (lastLoginDate >= yesterday && lastLoginDate <= today) {
                    setStreak((prevStreak) => prevStreak + 1);
                } else {
                    setStreak(0);
                }
            } catch (error) {
                console.error('Error checking streak:', error);
            }
        };

        checkStreak();
    }, []);

    return streak + 1;
};

export default StreakTracker; // Экспортируем компонент StreakTracker
