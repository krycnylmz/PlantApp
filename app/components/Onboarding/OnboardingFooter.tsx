import { View, StyleSheet } from 'react-native';
import React, { ReactNode } from 'react';

interface OnboardingFooterProps {
  children: ReactNode;
}

const OnboardingFooter: React.FC<OnboardingFooterProps> = ({ children }) => {
  return (
    <View style={styles.footer}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width:"100%",
    height: 145,        
    zIndex: 999,        
    position: 'absolute',
    bottom:0,
  },
});

export default OnboardingFooter;