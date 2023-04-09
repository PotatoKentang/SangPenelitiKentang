import { create } from 'zustand'

export const toggleSettings = create((set) => ({
  isActive:false,
  setActive: () => set((state) => ({ isActive: !state.isActive })),
}))

export const toggleNutrientsPopUpModal = create((set) => ({
  isActive:true,
  setActive: () => set((state) => ({ isActive: !state.isActive })),
}))