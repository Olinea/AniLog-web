import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { useAuth } from "@/hooks/useAuth";
import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { SiteHeader } from "@/components/SiteHeader";
import LoadingScreen from "@/components/LoadingScreen";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

// 导入页面组件
import Dashboard from "@/pages/dashboard/Dashboard";
import Team from "@/pages/dashboard/Team";
import Settings from "@/pages/dashboard/Settings";
import Search from "@/pages/dashboard/Search";
import Help from "@/pages/dashboard/Help";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/Login";
import { ThemeProvider } from "@/contexts/ThemeProvider";

// 主应用组件 - 需要认证状态
function MainApp() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <Login />;
  }

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="px-4 lg:px-6">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/help" element={<Help />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <MainApp />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}
