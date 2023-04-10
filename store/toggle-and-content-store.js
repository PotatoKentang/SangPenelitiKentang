import { create } from 'zustand'

export const BottomSheetStore = create((set) => ({
  isActive:false,
  content:[],
  setActive: (active) => set((state) => ({ isActive: active })),
  setContent: (content) => set((state) => ({ content: content })),
}))

export const NutrientsPopUpModalStore = create((set) => ({
  isActive:false,
  setActive: (active) => set((state) => ({ isActive: active })),
  nutritionContent: '',
  setNutritionContent: (nutritionContent) =>
    set((state) => ({
      nutritionContent: nutritionContent,
    })),
}))
export const toggleLoadingScreen = create((set) => ({
  isLoading:false,
  setLoading: (loading) => set((state) => ({ isLoading: loading })),
}))