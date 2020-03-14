import * as React from 'react';

const acceptModes = ['light', 'dark'];
const defaultMode = acceptModes[0];

export const useDarkMode = (
  initialValue: string = defaultMode,
): [string, React.Dispatch<void>] => {
  const [mode, setMode] = React.useState(
    () => window.localStorage.getItem('mode') || initialValue,
  );

  const toggleMode = () => {
    const nextMode = mode === 'light' ? acceptModes[1] : acceptModes[0];
    setMode(nextMode);
  };

  React.useEffect(() => {
    window.localStorage.setItem('mode', mode);
  }, [mode]);

  return [mode, toggleMode];
};
