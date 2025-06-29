import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'

export default function Dashboard() {
  const navigate = useNavigate()

  const handleLogout = () => {
    // 模拟登出，跳转回登录页面
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">AniLog 面板</h1>
            </div>
            <div className="flex items-center">
              <Button
                onClick={handleLogout}
                variant="outline"
                className="ml-4"
              >
                登出
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容区域 */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg p-8">
            {/* 欢迎区域 */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                欢迎来到 AniLog 管理面板
              </h2>
              <p className="text-lg text-gray-600">
                这里是您的动漫日志管理中心，您可以在此管理您的动漫收藏和观看记录。
              </p>
            </div>

            {/* 功能模块描述 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">动漫收藏</h3>
                <p className="text-gray-600">
                  管理您喜爱的动漫作品，添加到收藏列表，随时查看详细信息和评分。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">观看记录</h3>
                <p className="text-gray-600">
                  记录您的观看进度，标记已看完的剧集，追踪待看清单。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">评分系统</h3>
                <p className="text-gray-600">
                  为观看过的动漫打分和写评论，与其他用户分享您的观后感。
                </p>
              </div>
            </div>

            {/* 统计信息 */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">统计概览</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">42</div>
                  <div className="text-sm text-gray-500">总收藏数</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">28</div>
                  <div className="text-sm text-gray-500">已完成</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">14</div>
                  <div className="text-sm text-gray-500">观看中</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-600">8.5</div>
                  <div className="text-sm text-gray-500">平均评分</div>
                </div>
              </div>
            </div>

            {/* 功能说明 */}
            <div className="mt-8 text-center">
              <p className="text-gray-500">
                这是一个演示面板页面。在实际应用中，这里将显示真实的动漫数据和用户交互功能。
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
