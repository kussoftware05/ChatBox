/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#24786D';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#000E08',
    background: '#fff',
    pageBackground: '#363F3B',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#797C7B',
    tabIconSelected: tintColorLight,
    notificationBadge: '#F04A4C',
    callIconOut: '#5F40DC',
    callIconReject: '#EA3736',
    borderBottom : '#F5F6F6',
    iconBackground: '#F2F8F7',
    chatBackground : '#EEFAF8',
    chatBoxOwn : '#20A090',
    chatBoxUser: '#F2F7FB',
    chatBoxInput : '#F3F6F6'
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
