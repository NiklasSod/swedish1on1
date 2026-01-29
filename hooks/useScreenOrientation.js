import { useCallback } from "react";
import { useFocusEffect } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";

/**
 * Locks the screens orientation to the specified mode for use on a Page.
 *
 * @param {string} orientation - Vilket läge som ska låsas.
 * Alternativ: 'PORTRAIT', 'LANDSCAPE'. Standard är 'PORTRAIT'.
 *
 * @example
 * useScreenOrientation('LANDSCAPE');
 */

export function useScreenOrientation(orientation = "PORTRAIT") {
  useFocusEffect(
    useCallback(() => {
      let isFocused = true;
      const lock = async () => {
        if (!isFocused) return;
        if (orientation === "LANDSCAPE") {
          await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.LANDSCAPE,
          );
        } else {
          await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.PORTRAIT_UP,
          );
        }
      };
      lock();

      return () => {
        isFocused = false;
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
      };
    }, [orientation]),
  );
}
