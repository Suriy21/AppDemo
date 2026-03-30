import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  View
} from 'react-native';

import CustomInput from './CustomInput';
import Dropdown from './Dropdown';
import CustomDatePicker from './Calender';
import CustomSwitch from './Switch';
import Loader from './Loader';
import useAgeEligibility from './AgeEligibility';
import VectorIcon from './VectorIcon';
import AnimatedButton from './AnimatedButton';

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState(null);
  const [maritalStatus, setMaritalStatus] = useState('');
  const [age, setAge] = useState('');
  const [isEligible, setIsEligible] = useState(false);
  const [loading, setLoading] = useState(false);

  useAgeEligibility(dob, setAge, setIsEligible);

  // 🔥 Fetch Random User
  const fetchRandomUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        const user = data.results[0];
        setName(user.name.first + " " + user.name.last);
        setMobile(user.phone);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  // ✅ FINAL SIGNUP FUNCTION
  const handleSignup = () => {
    if (!name || !mobile || !maritalStatus || !age) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      // 🔥 Navigate to Dashboard with data
      navigation.replace("Dashboard", {
        user: {
          name,
          mobile,
          age
        }
      });

    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.card}>

          {/* Name */}
          <View style={styles.inputBox}>
            <VectorIcon name="account" size={22} color="#666" />
            <CustomInput
              label="Name"
              value={name}
              onChangeText={setName}
            />
          </View>

          {/* DOB */}
          <View style={styles.inputBox}>
            <VectorIcon name="calendar" size={22} color="#666" />
            <CustomDatePicker value={dob} onChange={setDob} />
          </View>

          {/* Marital Status */}
          <View style={styles.inputBox}>
            <VectorIcon name="heart" size={22} color="#666" />
            <Dropdown
              label="Marital Status"
              items={[
                { label: 'Single', value: 'single' },
                { label: 'Married', value: 'married' },
              ]}
              value={maritalStatus}
              onValueChange={setMaritalStatus}
            />
          </View>

          {/* Age */}
          <View style={styles.inputBox}>
            <VectorIcon name="account-clock" size={22} color="#666" />
            <Text style={styles.ageText}>
              {age
                ? age === 'above18'
                  ? 'Above 18'
                  : 'Below 18'
                : 'Select DOB first'}
            </Text>
          </View>

          {/* Eligibility */}
          <View style={styles.switchRow}>
            <VectorIcon name="check-circle" size={22} color="#666" />
            <Text style={styles.switchText}>Eligible for Voting</Text>
            <CustomSwitch value={isEligible} onValueChange={() => {}} />
          </View>

          {/* Mobile */}
          <View style={styles.inputBox}>
            <VectorIcon name="phone" size={22} color="#666" />
            <CustomInput
              label="Mobile Number"
              value={mobile}
              onChangeText={setMobile}
            />
          </View>

          {/* Signup Button */}
          <AnimatedButton
            title="Signup"
            onPress={handleSignup}
            loading={loading}
          />

        </View>

      </ScrollView>

      <Loader visible={loading} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaf0f6'
  },
  card: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 15,
    elevation: 5
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15
  },
  ageText: {
    fontSize: 16,
    padding: 12,
    color: '#333'
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  switchText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16
  }
});