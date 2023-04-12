import {
  popUpModalStore,
  toggleLoadingScreen,
} from '../../store/toggle-and-content-store'

const setModalVisible = popUpModalStore((state) => state.setActive)
const setModalLoading = toggleLoadingScreen((state) => state.setLoading)

export const setContent = popUpModalStore((state) => state.setContent)

export const isModalVisible = popUpModalStore((state) => state.isActive)

export const isLoading = toggleLoadingState((state) => state.isLoading)
//if true-> loading screen
//if false-> content screen
export const toggleModal =
  ((active) => {
    setModalVisible(true)
    setModalLoading(true)
    if (active) {
      setModalLoading(false)
    }
  },
  [setModalVisible, setModalLoading])
