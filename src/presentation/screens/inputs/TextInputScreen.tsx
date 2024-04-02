import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

import {Title, Card, CustomView} from '../../components';
import {globalStyles} from '../../../config/theme/theme';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView>
        <CustomView hasMargin>
          <Title text="Text Inputs" isSafe />
          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Complete Name"
              autoCapitalize={'words'}
              autoCorrect={false}
              onChangeText={value => setForm({...form, name: value})}
              onChange={() => console.log(form)}
            />

            <TextInput
              style={globalStyles.input}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize={'none'}
              autoCorrect={false}
              onChangeText={value => setForm({...form, email: value})}
            />

            <TextInput
              style={globalStyles.input}
              placeholder="Phone"
              keyboardType="phone-pad"
              onChangeText={value => setForm({...form, phone: value})}
            />
          </Card>

          <View style={{height: 10}} />
          <Card>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
          </Card>

          <View style={{height: 10}} />

          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Phone"
              keyboardType="phone-pad"
              onChangeText={value => setForm({...form, phone: value})}
            />
          </Card>
        </CustomView>

        <View style={{height: 50}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
