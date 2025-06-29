import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  IconSearch,
  IconFileText,
} from "@tabler/icons-react";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const searchResults = [
    {
      id: 1,
      title: "API 文档 v2.1",
      description: "最新版本的 API 接口文档，包含所有端点的详细说明。",
      type: "文档",
      icon: IconFileText,
      category: "开发",
      lastModified: "2024-01-08",
    },
  ];

  const handleSearch = () => {
    setIsSearching(true);
    // 模拟搜索延迟
    setTimeout(() => {
      setIsSearching(false);
    }, 1000);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "文档":
        return "bg-blue-100 text-blue-800";
      case "数据库":
        return "bg-green-100 text-green-800";
      case "团队":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">搜索</h1>
        <p className="text-muted-foreground">搜索文档、数据和团队信息。</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>全局搜索</CardTitle>
          <CardDescription>在所有内容中查找您需要的信息。</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <div className="relative flex-1">
              <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="搜索文档、数据、团队..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>
            <Button onClick={handleSearch} disabled={isSearching}>
              {isSearching ? "搜索中..." : "搜索"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {searchQuery && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">搜索结果</h2>
            <span className="text-sm text-muted-foreground">
              找到 {searchResults.length} 个结果
            </span>
          </div>

          <div className="space-y-4">
            {searchResults.map((result) => {
              const IconComponent = result.icon;
              return (
                <Card
                  key={result.id}
                  className="cursor-pointer hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 rounded-lg bg-muted">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold hover:text-primary">
                            {result.title}
                          </h3>
                          <Badge
                            variant="secondary"
                            className={getTypeColor(result.type)}
                          >
                            {result.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {result.description}
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span>分类: {result.category}</span>
                          <span>•</span>
                          <span>修改时间: {result.lastModified}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {!searchQuery && (
        <Card>
          <CardContent className="p-12 text-center">
            <IconSearch className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">开始搜索</h3>
            <p className="text-muted-foreground">
              输入关键字来搜索文档、数据和团队信息。
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
