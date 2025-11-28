import Button from '@/components/Button'
import Typo from '@/components/Typo'
import { auth } from '@/config/firebase'
import { colors } from '@/constants/theme'
import { useAuth } from '@/contexts/authContext'
import { signOut } from 'firebase/auth'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const home = () => {
    const {user} = useAuth();
    console.log('user:', user);
    const handleLogout = async () => {
        await signOut(auth);
    }
  return (
    <View>
      <Text>home</Text>
      <Button onPress={handleLogout}>
        <Typo color={colors.black}>
            Logout
        </Typo>
      </Button>
    </View>
  )
}

export default home

const styles = StyleSheet.create({})