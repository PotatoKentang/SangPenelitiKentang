import { create } from 'zustand'

export const useTextContentStore = create((set) => ({
  markdown: '',
  setContent: (markdown) =>
    set((state) => ({
      markdown: markdown,
    })),
}))


export const nutritionContentStore = create(set=>({
  nutritionContent: '',
  setNutritionContent: (nutritionContent) =>
    set((state) => ({
      nutritionContent: nutritionContent,
    })),
}))