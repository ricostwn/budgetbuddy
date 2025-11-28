import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import React from 'react'
import { StyleSheet } from 'react-native'

const home = () => {
    //const {user} = useAuth();
    //console.log('user:', user);
    //const handleLogout = async () => {
    //    await signOut(auth);
    //}
  return (
    <ScreenWrapper>
      <Typo>home</Typo>
      {/*<Button onPress={handleLogout}>
        <Typo color={colors.black}>
            Logout
        </Typo>
        </Button>*/}
    </ScreenWrapper>
  )
}

export default home

const styles = StyleSheet.create({})