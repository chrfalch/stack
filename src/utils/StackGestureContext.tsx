import * as React from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

export default React.createContext<React.Ref<PanGestureHandler> | undefined>(
  undefined
);

type TransitionContextType = {
  progress: Animated.Value<number>;
  index: number;
  isForward: boolean;
  inTransition: boolean;
  active: boolean;
};

export const TransitionContext = React.createContext<
  TransitionContextType | undefined
>(undefined);
