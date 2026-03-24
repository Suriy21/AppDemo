import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  Alert
} from 'react-native';

import CustomInput from './CustomInput';
import Dropdown from './Dropdown';
import CustomDatePicker from './Calender';
import CustomSwitch from './Switch';
import CustomButton from './Button';
import Loader from './Loader';
import useAgeEligibility from './AgeEligibility';

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState(new Date());

  const [maritalStatus, setMaritalStatus] = useState('');
  const [age, setAge] = useState('');
  const [isEligible, setIsEligible] = useState(false);

  const [loading, setLoading] = useState(false);

  useAgeEligibility(dob, setAge, setIsEligible);

  const handleSignup = () => {
    if (!name || !mobile || !maritalStatus || !age) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      Alert.alert(
        "Success",
        "Signup Successfully!",
        [
          {
            text: "OK",
            onPress: () => {
              navigation.navigate("Login");
            },
          },
        ],
        { cancelable: false }
      );

      console.log({
        name,
        mobile,
        dob,
        maritalStatus,
        age,
        isEligible
      });
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <Text style={styles.title}>Signup</Text>

        <CustomInput
          label="Name"
          value={name}
          onChangeText={setName}
        />

        <CustomDatePicker
          label="🗓️ DOB"
          value={dob}
          onChange={setDob}
        />

        <Dropdown
          label="Marital Status"
          items={[
            { label: 'Single', value: 'single' },
            { label: 'Married', value: 'married' },
          ]}
          value={maritalStatus}
          onValueChange={setMaritalStatus}
        />

        {/* ✅ AUTO AGE */}
        <Dropdown
          label="Age"
          items={[
            { label: 'Below 18', value: 'below18' },
            { label: 'Above 18', value: 'above18' },
          ]}
          value={age}
          onValueChange={() => {}}
          disabled={true}
        />

        {/* ✅ AUTO ELIGIBILITY */}
        <CustomSwitch
          label="Eligible for Voting"
          value={isEligible}
          onValueChange={() => {}}
        />

        <CustomInput
          label="Mobile Number"
          value={mobile}
          onChangeText={setMobile}
        />

        <CustomButton
          title="Signup"
          onPress={handleSignup}
          disabled={loading}
        />

      </ScrollView>

      <Loader visible={loading} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#c1c8cf'
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold'
  },
});