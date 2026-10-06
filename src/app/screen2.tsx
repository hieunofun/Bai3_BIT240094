import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { OrangeButton } from '@/components/orange-button';
import { COLORS } from '@/constants/colors';

export default function StudentDetailsScreen() {
  const { name, studentId } = useLocalSearchParams<{ name?: string; studentId?: string }>();

  function handleBack() {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/');
    }
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.centeredContent}>
          <Text style={styles.title}>Screen 2</Text>
          <Text style={styles.detail}>Name: {name ?? ''}</Text>
          <Text style={styles.detail}>Student ID: {studentId ?? ''}</Text>
        </ScrollView>
        <View style={styles.backButton}>
          <OrangeButton title="Back" onPress={handleBack} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 12,
  },
  centeredContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 80,
    gap: 10,
  },
  title: {
    marginBottom: 2,
    color: COLORS.text,
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '700',
    textAlign: 'center',
  },
  detail: {
    color: COLORS.secondaryText,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    maxWidth: '100%',
  },
});
