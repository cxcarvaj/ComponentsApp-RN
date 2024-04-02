import prompt from 'react-native-prompt-android';

interface PromptOptions {
  title: string;
  subtitle: string;
  buttons: PromptButton[];
  promptType: 'secure-text' | 'plain-text';
  placeholder?: string;
  defaultValue?: string;
}

interface PromptButton {
  text: string;
  onPress: () => void;
  style?: 'cancel' | 'destructive' | 'default';
}

export const showPrompt = ({
  title,
  subtitle,
  buttons,
  promptType = 'plain-text',
  defaultValue,
  placeholder,
}: PromptOptions) => {
  prompt(title, subtitle, buttons, {
    type: promptType,
    cancelable: false,
    defaultValue: defaultValue,
    placeholder: placeholder,
  });
};
