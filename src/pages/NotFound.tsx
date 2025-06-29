import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { IconHome, IconArrowLeft, IconExclamationCircle } from "@tabler/icons-react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="pb-4">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-destructive/10">
              <IconExclamationCircle className="h-12 w-12 text-destructive" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">页面未找到</CardTitle>
          <CardDescription className="text-base">
            抱歉，您访问的页面不存在或已被移动。
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-6xl font-bold text-muted-foreground/50 mb-4">
            404
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            请检查网址是否正确，或从下面的选项中选择一个。
          </p>
          <div className="space-y-2">
            <Button asChild className="w-full">
              <Link to="/dashboard">
                <IconHome className="mr-2 h-4 w-4" />
                返回首页
              </Link>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()} className="w-full">
              <IconArrowLeft className="mr-2 h-4 w-4" />
              返回上页
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
