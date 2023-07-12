import create from 'zustand'
import { EditedTask, EditedNotice } from './types/types'

type State = {
  editedTask: EditedTask
  editedNotice: EditedNotice
  updateEditedTask: (payload: EditedTask) => void
  updateEditedNotice: (payload: EditedNotice) => void
  resetEditedTask: () => void
  resetEditedNotice: () => void
}

export const useStore = create<State>((set) => ({
  editedTask: { id: '', title: '' },
  editedNotice: { id: '', content: '' },
  updateEditedTask: (payload) =>
    set({
      editedTask: {
        id: payload.id,
        title: payload.title,
      },
    }),
  resetEditedTask: () => set({ editedTask: { id: '', title: '' } }),
  updateEditedNotice: (pasyload) =>
    set({
      editedNotice: {
        id: pasyload.id,
        content: pasyload.content,
      },
    }),
  resetEditedNotice: () => set({ editedNotice: { id: '', content: '' } }),
}))
