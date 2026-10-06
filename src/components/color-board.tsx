import { StyleSheet, Text, View } from 'react-native';

import { COLORS } from '@/constants/colors';

type ColorBlockProps = {
  number: number;
  color: string;
  wide?: boolean;
};

function ColorBlock({ number, color, wide = false }: ColorBlockProps) {
  return (
    <View
      testID={`color-block-${number}`}
      style={[styles.block, { backgroundColor: color, flex: wide ? 2 : 1 }]}
    >
      <Text style={[styles.number, number === 3 && styles.blackNumber]}>{number}</Text>
    </View>
  );
}

export function ColorBoard() {
  return (
    <View style={styles.board}>
      <View style={styles.row}>
        <ColorBlock number={1} color={COLORS.blue} />
        <ColorBlock number={2} color={COLORS.red} />
      </View>
      <View style={styles.row}>
        <ColorBlock number={3} color={COLORS.yellow} />
        <ColorBlock number={4} color={COLORS.green} />
        <ColorBlock number={5} color={COLORS.purple} wide />
      </View>
      <View style={styles.bottomRow}>
        <ColorBlock number={6} color={COLORS.orange} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    width: '100%',
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    aspectRatio: 2.5,
    gap: 8,
  },
  bottomRow: {
    flexDirection: 'row',
    aspectRatio: 3,
  },
  block: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: COLORS.white,
    fontSize: 42,
    fontWeight: '700',
    includeFontPadding: false,
  },
  blackNumber: {
    color: COLORS.text,
  },
});
