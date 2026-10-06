import { router } from 'expo-router';
import { useRef, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ColorBoard } from '@/components/color-board';
import { OrangeButton } from '@/components/orange-button';
import { COLORS } from '@/constants/colors';

export default function StudentFormScreen() {
  const [studentName, setStudentName] = useState('Phan Văn Hiếu');
  const [studentId, setStudentId] = useState('BIT240094');
  const [errorMessage, setErrorMessage] = useState('');
  const studentIdInput = useRef<TextInput>(null);

  function handleSubmit() {
    const trimmedName = studentName.trim();
    const trimmedStudentId = studentId.trim();

    if (!trimmedName || !trimmedStudentId) {
      setErrorMessage('Vui lòng nhập đầy đủ họ tên và mã số sinh viên.');
      return;
    }

    setErrorMessage('');
    Keyboard.dismiss();
    router.push({
      pathname: '/screen2',
      params: { name: trimmedName, studentId: trimmedStudentId },
    });
  }

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            <ColorBoard />
            <View style={styles.spacer} />
            <View style={styles.form}>
              <Text style={styles.title}>Nhap thong tin sinh vien</Text>
              <TextInput
                accessibilityLabel="Họ tên sinh viên"
                placeholder="Enter your name"
                placeholderTextColor={COLORS.secondaryText}
                style={styles.input}
                value={studentName}
                onChangeText={(value) => {
                  setStudentName(value);
                  setErrorMessage('');
                }}
                autoCapitalize="words"
                autoCorrect={false}
                returnKeyType="next"
                onSubmitEditing={() => studentIdInput.current?.focus()}
                submitBehavior="submit"
              />
              <TextInput
                ref={studentIdInput}
                accessibilityLabel="Mã số sinh viên"
                placeholder="Enter your student ID"
                placeholderTextColor={COLORS.secondaryText}
                style={styles.input}
                value={studentId}
                onChangeText={(value) => {
                  setStudentId(value);
                  setErrorMessage('');
                }}
                autoCapitalize="characters"
                autoCorrect={false}
                returnKeyType="done"
                onSubmitEditing={handleSubmit}
              />
              {errorMessage ? (
                <Text accessibilityRole="alert" accessibilityLiveRegion="polite" style={styles.error}>
                  {errorMessage}
                </Text>
              ) : null}
              <View style={styles.submitButton}>
                <OrangeButton title="Click me" onPress={handleSubmit} />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  keyboardContainer: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 16,
  },
  content: {
    flexGrow: 1,
    width: '100%',
    maxWidth: 480,
  },
  spacer: {
    flexGrow: 1,
    minHeight: 80,
  },
  form: {
    gap: 8,
  },
  title: {
    marginBottom: 8,
    textAlign: 'center',
    color: COLORS.text,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '500',
  },
  input: {
    minHeight: 36,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 3,
    backgroundColor: COLORS.white,
    color: COLORS.text,
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  error: {
    color: COLORS.error,
    fontSize: 13,
    lineHeight: 18,
  },
  submitButton: {
    alignSelf: 'center',
    marginTop: 16,
  },
});
