import { useLocation, Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ModeToggle } from "@/components/ModeToggle";

// 路由到标题的映射
const routeTitles: Record<string, string> = {
  "/": "仪表盘",
  "/dashboard": "仪表盘",
  "/team": "团队管理",
  "/settings": "系统设置",
  "/search": "全局搜索",
  "/help": "帮助中心",
};

export function SiteHeader() {
  const location = useLocation();
  const currentPath = location.pathname;
  const currentTitle = routeTitles[currentPath] || "页面";

  // 生成面包屑路径
  const generateBreadcrumbs = () => {
    const pathSegments = currentPath.split("/").filter(Boolean);
    const breadcrumbs = [{ name: "首页", path: "/" }];

    if (pathSegments.length > 0 && currentPath !== "/") {
      breadcrumbs.push({
        name: currentTitle,
        path: currentPath,
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />

        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((breadcrumb, index) => (
              <div key={breadcrumb.path} className="flex items-center">
                <BreadcrumbItem>
                  {index === breadcrumbs.length - 1 ? (
                    <BreadcrumbPage className="text-base font-medium">
                      {breadcrumb.name}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link
                        to={breadcrumb.path}
                        className="text-base font-medium"
                      >
                        {breadcrumb.name}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>

        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
