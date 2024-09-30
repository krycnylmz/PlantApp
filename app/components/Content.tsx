import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { useGetQuestionsQuery } from '@/app/services/questionsApi';
import { useGetCategoriesQuery } from '@/app/services/categoriesApi';
import PremiumBox from '@/app/components/PremiumBox';
import QuestionCard from '@/app/components/QuestionCard';
import CategoryCard from './CategoryCard';

interface CategoryImage {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: any | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
}

interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  rank: number;
  image: CategoryImage;
}


interface Question {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
}



const Content = () => {
  const { data: categoriesData, isLoading: isLoadingCategories } = useGetCategoriesQuery({});
  const { data: questionsData, isLoading: isLoadingQuestions } = useGetQuestionsQuery({});

  if (isLoadingCategories || isLoadingQuestions) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView contentContainerStyle={contentStyles.scrollContent}>
      <View style={contentStyles.content}>
        {/* PremiumBox */}
        <PremiumBox />

        {/* Questions Part */}
        <View style={contentStyles.questionsWrapper}>
          <Text style={contentStyles.questionsHeadTitle}>Get Started</Text>
          <FlatList
            style={contentStyles.questions}
            data={questionsData}
            keyExtractor={(item: Question) => item.id.toString()}
            renderItem={({ item }) => <QuestionCard title={item.title} image_uri={item.image_uri} />}
            horizontal
            contentContainerStyle={contentStyles.questionsContainerStyle}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />} // space between items
          />
        </View>

        {/* Categories Part */}
        <View style={contentStyles.categoriesWrapper}>
          {categoriesData && categoriesData.data && categoriesData.data.map((item: Category) => (
            <View key={item.id} style={contentStyles.categoryItem}>
              <CategoryCard title={item.title} imageUrl={item.image.url} />
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
    flexDirection: "column",
    gap: 24
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
