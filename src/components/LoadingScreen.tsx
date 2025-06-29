import { Card, CardContent } from "@/components/ui/card";
import { IconLoader2, IconInnerShadowTop } from "@tabler/icons-react";

export default function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50">
      <Card className="w-full max-w-md">
        <CardContent className="p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 rounded-full bg-primary/10">
              <IconInnerShadowTop className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2">Acme Inc.</h2>
          <p className="text-muted-foreground mb-6">正在加载应用...</p>
          <div className="flex justify-center">
            <IconLoader2 className="h-6 w-6 animate-spin text-primary" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
