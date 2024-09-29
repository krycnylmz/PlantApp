import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import React from 'react';
// import PremiumBox from '@/app/components/PremiumBox';
import QuestionCard from '@/app/components/QuestionCard';
import CategoryCard from './CategoryCard';

const Content = () => {
  const questions = [
    { id: '1', title: 'How to identify plants?' },
    { id: '2', title: 'Differences Between Species and Varieties?' },
    { id: '3', title: 'The reasons why the same plant can look different?' },
  ];

  const categories = [
    { id: 11, title: 'Ferns' },
    { id: 10, title: 'Cacti and Succulents' },
    { id: 4, title: 'Flowering Plants' },
    { id: 7, title: 'Vegetables and Fruits' },
    { id: 8, title: 'Herbs' },
    { id: 5, title: 'Trees' },
    { id: 6, title: 'Shrubs' },
    { id: 9, title: 'Groundcover' },
    { id: 12, title: 'Edible Plants' }
  ];

  return (
    <ScrollView contentContainerStyle={contentStyles.scrollContent}>
      <View style={contentStyles.content}>
        {/* TODO:<PremiumBox /> */}

        {/* Questions Part */}
        <View style={contentStyles.questionsWrapper}>
          <Text style={contentStyles.questionsHeadTitle}>Get Started</Text>
          <FlatList
            style={contentStyles.questions}
            data={questions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <QuestionCard title={item.title} />}
            horizontal
            contentContainerStyle={contentStyles.questionsContainerStyle}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />} // space between items
          />
        </View>

        {/* Categories Part */}
        <View style={contentStyles.categoriesWrapper}>
          {categories.map((item) => (
            <View key={item.id} style={contentStyles.categoryItem}>
              <CategoryCard title={item.title} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const contentStyles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 16, // Add 16px end of the scrool content 
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    flexDirection:"column",
    gap:24
  },
  questionsWrapper: {
    flexDirection: 'column',
    gap: 16,
  },
  questionsHeadTitle: {
    fontSize: 15,
    fontFamily: 'Rubik_500Medium',
    lineHeight: 20,
    letterSpacing: -0.24,
    color: 'rgba(19, 35, 27, 1)',
  },
  questions: {
    marginHorizontal: -24,
  },
  questionsContainerStyle: {
    paddingHorizontal: 24,
  },
  categoriesWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  categoryItem: {
    width: '48%',
    marginBottom: 16,
  },
});

export default Content;
