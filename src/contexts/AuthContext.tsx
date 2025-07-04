import React, { createContext, useState, useEffect } from 'react';
import { loginApi, logoutApi, checkAuthStatus } from '@/lib/api';

interface User {
  id: number;
  username: string;
  email: string;
  openid: string | null;
  avatarUrl: string | null;
  manager: number;
  created_at: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  isLoading: boolean;
  isLoginLoading: boolean;
  error: string | null;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 检查认证状态
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authData = await checkAuthStatus();
        if (authData?.user) {
          setUser(authData.user);
        }
      } catch (err) {
        console.error('Auth check failed:', err);
        // 清除可能存在的无效token
        await logoutApi().catch(() => {
          // 忽略登出错误，可能是网络问题
        });
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoginLoading(true);
    setError(null);
    
    try {
      const response = await loginApi(email, password);
      
      if (response.user) {
        setUser(response.user);
        return true;
      }
      
      setError('登录失败：服务器响应异常');
      return false;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '登录失败：未知错误';
      setError(errorMessage);
      return false;
    } finally {
      setIsLoginLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await logoutApi();
    } catch (err) {
      console.error('Logout API failed:', err);
      // 即使API调用失败，也要清除本地状态
    } finally {
      setUser(null);
      setError(null);
    }
  };

  const value = {
    user,
    login,
    logout,
    isLoading,
    isLoginLoading,
    error
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
