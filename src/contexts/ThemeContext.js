import { createContext, useReducer } from 'react';
import themeList from '../data/themeList';
// 创建主题上下文
const ThemeContext = createContext();
const lightTheme = themeList.light; // 白天主题
const darkTheme = themeList.dark; // 黑夜主题

// 处理主题类型
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      localStorage.setItem(
        'theme',
        state.theme === lightTheme ? darkTheme : lightTheme
      );
      return {
        theme: state.theme === darkTheme ? lightTheme : darkTheme,
      };
    default:
      return state;
  }
};

// 提供主题上下文
const ThemeContextProvider = ({ children }) => {
  // 获取初始主题
  const getInitialTheme = () => {
    const theme = localStorage.getItem('theme');
    // prefers-color-scheme是CSS媒体特性【@media】
    // 用于检测用户是否有将操作系统的主题色设置为亮色【light】或者暗色【dark】
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (theme) {
      return theme;
    }
    if (prefersDark) {
      return darkTheme;
    }
    return lightTheme;
  };

  // 初始数据
  const initialState = {
    theme: getInitialTheme(),
  };

  // 管理主题状态
  const [state, dispatch] = useReducer(themeReducer, initialState);
  const value = {
    theme: state.theme,
    toggleTheme: () => dispatch({ type: 'TOGGLE_THEME' }),
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
export { ThemeContextProvider };
