import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Linking } from 'react-native';

interface PurchaseOptionProps {
  title: string;
  description: string;
  isSelected: boolean;
  onSelect: () => void;
  isBestOption?: boolean;
  discount?: string;
  mountlyPrice?: string;
}

const PurchaseOption: React.FC<PurchaseOptionProps> = ({ title, description, isSelected, onSelect, isBestOption = false, discount, mountlyPrice }) => {
  return (
    <TouchableOpacity style={[styles.optionContainer, isBestOption && styles.isBestOption]} onPress={onSelect} activeOpacity={0.5}>
      <View style={styles.circle}>
        {isSelected && <View style={styles.selectedCircle} />}
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          {mountlyPrice && (
            <Text style={styles.descriptionLight}>{`${mountlyPrice}/month, `}</Text>
          )}
          {description}
        </Text>
      </View>
      {discount &&
        <View style={styles.discountWrapper}>
          <Text style={styles.discountText}> {discount && discount} </Text>
        </View>
      }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    gap:12,
    alignItems: 'center',
    padding: 12,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 0.3)",
    position: "relative",
  },
  isBestOption: {
    borderColor: 'rgba(40, 175, 110, 1)',
    borderWidth: 1.5,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 24,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedCircle: {
    width: 24,
    height: 24,
    borderRadius: 24,
    borderColor: 'rgba(40, 175, 110, 1)',
    borderWidth: 8,
    backgroundColor: 'white',

  },
  textWrapper: {
    flex: 1,
    flexDirection:"column",
    gap:1,
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'Rubik_500Medium',
    fontSize: 16,
    lineHeight:18.96,
  },
  description: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontFamily: 'Rubik_400Regular',
    fontSize: 12,
    lineHeight:14.22
  },
  descriptionLight:{
    fontFamily: 'Rubik_300Light',
    fontSize: 12,
    lineHeight:14.22
  },
  discountWrapper: {
    width: 77,
    height: 26,
    backgroundColor: 'rgba(40, 175, 110, 1)',
    borderTopEndRadius: 14,
    borderBottomStartRadius: 20,
    position: "absolute",
    right: 0,
    top: -0.7,
    alignItems: "center",
    justifyContent: "center"
  },
  discountText: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Rubik_500Medium"
  },
});

export default PurchaseOption;
