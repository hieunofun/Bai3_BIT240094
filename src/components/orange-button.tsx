import { Pressable, StyleSheet, Text } from 'react-native';

import { COLORS } from '@/constants/colors';

type OrangeButtonProps = {
  title: string;
  onPress: () => void;
};

export function OrangeButton({ title, onPress }: OrangeButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.label}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 40,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: COLORS.orange,
  },
  pressed: {
    opacity: 0.75,
  },
  label: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '500',
  },
});
