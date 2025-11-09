import { AntDesign, EvilIcons, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import "../../styles/global.css"
type colorType = {
    color: string;
}

const HomeRootLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#34967C',
            headerShown: false
        }} >
            <Tabs.Screen name="index" options={{
                title: 'Home',
                tabBarIcon: ({ color }: colorType) => <AntDesign name="home" size={24} color={color} />,
            }} />
            <Tabs.Screen name="search" options={{
                title: 'Search',
                headerShown: true,
                tabBarIcon: ({ color }: colorType) => <Feather name="search" size={24} color={color} />,
            }} />
            <Tabs.Screen name="saved" options={{
                title: 'Saved',
                headerShown: true,
                tabBarIcon: ({ color }: colorType) => <EvilIcons name="heart" size={27} color={color} />
            }} />
            <Tabs.Screen name="inbox" options={{
                title: 'Inbox',
                headerShown: true,
                tabBarIcon: ({ color }: colorType) => <Ionicons name="chatbubbles-outline" size={24} color={color} />
            }} />
            <Tabs.Screen name="profile" options={{
                title: 'Profile',
                tabBarIcon: ({ color }: colorType) => <FontAwesome name="user-o" size={24} color="black" />
            }} />
        </Tabs>
    )
}

export default HomeRootLayout;