import { Progress } from "@/components/ui/progress";

interface RadarChartData {
  subject: string;
  score: number;
  fullMark: number;
}

interface SimpleRadarChartProps {
  data: RadarChartData[];
}

export const SimpleRadarChart = ({ data }: SimpleRadarChartProps) => {
  return (
    <div className="space-y-6">
      {data.map((item) => (
        <div key={item.subject} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-medium">{item.subject}</span>
            <span className="text-primary font-bold">{item.score}%</span>
          </div>
          <Progress value={item.score} className="h-3" />
        </div>
      ))}
    </div>
  );
};