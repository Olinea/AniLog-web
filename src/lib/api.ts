/**
 * API配置和工具函数
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

/**
 * API响应接口
 */
export interface ApiResponse<T = unknown> {
  data?: T;
  message?: string;
  error?: string;
}

/**
 * 用户登录响应接口
 */
export interface LoginResponse {
  access_token: string;
  token_type: string;
  user: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
  };
}

/**
 * 用户信息接口
 */
export interface UserInfo {
  user: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
  };
}

/**
 * 创建API请求的封装函数
 */
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  // 默认配置
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    credentials: 'include', // 包含cookies
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      let errorMessage = `HTTP错误: ${response.status}`;
      
      try {
        const errorData = await response.json();
        errorMessage = errorData.detail || errorData.message || errorMessage;
      } catch {
        // 如果响应不是JSON，使用状态文本
        errorMessage = response.statusText || errorMessage;
      }
      
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('网络请求失败');
  }
}

/**
 * 用户登录API
 */
export async function loginApi(email: string, password: string): Promise<LoginResponse> {
  return apiRequest<LoginResponse>('/api/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
}

/**
 * 用户登出API
 */
export async function logoutApi(): Promise<{ message: string }> {
  return apiRequest<{ message: string }>('/api/logout', {
    method: 'POST',
  });
}

/**
 * 获取当前用户信息API
 */
export async function getCurrentUserApi(): Promise<UserInfo> {
  return apiRequest<UserInfo>('/api/me');
}

/**
 * 检查用户是否已登录
 */
export async function checkAuthStatus(): Promise<UserInfo | null> {
  try {
    return await getCurrentUserApi();
  } catch {
    // 如果获取用户信息失败，说明未登录或token过期
    return null;
  }
}
