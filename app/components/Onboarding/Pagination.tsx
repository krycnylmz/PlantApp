import React from 'react';
import { View, StyleSheet } from 'react-native';
import CircleSvg from './CircleSvg';

interface PaginationProps {
  totalStep: number;
  currentStep: number;
}

const Pagination: React.FC<PaginationProps> = ({
  totalStep = 3,
  currentStep = 0,
}) => {
  return (
    <View style={styles.container}>
      {/* Inline style for dynamic width */}
      <View style={[styles.pagination, { width: totalStep * 15 }]}>
        {Array.from({ length: totalStep }).map((_, index) => (
          <CircleSvg
            key={index}
            size={index === currentStep ? 10 : 6}
            fillOpacity={index === currentStep ? 1 : 0.25}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    top: 33,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Pagination;