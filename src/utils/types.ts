export type RootStackParamList = {
  Home: undefined;
  AddTask: undefined;
  Details: undefined;
}

export type TaskProps = {
  id: number;
  title: string;
  date: string;
  description: string;
  status: boolean;
  onCheck?: () => void;
  onRemove?: () => void;
};