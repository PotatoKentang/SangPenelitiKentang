import { create } from 'zustand'

export const toggleSettings = create((set) => ({
  toggleOn:false,
  setToggle: () => set((state) => ({ toggleOn: !state.toggleOn })),
}))

export const toggleNutrientsPopUpModal = create((set) => ({
  toggleOn:false,
  setToggle: () => set((state) => ({ toggleOn: !state.toggleOn })),
}))