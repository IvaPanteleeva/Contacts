export interface State {
  isSidebarOpen: boolean;
  title: string;
}

export const initialSidebarVisibility = true;

export const initialTitle = '';

export const initialState: State = {
  isSidebarOpen: initialSidebarVisibility,
  title: initialTitle,
};
