import React from 'react';
import Animated from 'react-native-reanimated';

type TransitionContextType = {
  progress: Animated.Value<number>;
  index: number;
  inTransition: boolean;
  isForward: boolean;
  focused: boolean;
};

export default React.createContext<TransitionContextType | undefined>(
  undefined
);
