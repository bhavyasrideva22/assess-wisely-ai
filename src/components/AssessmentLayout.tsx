import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface AssessmentLayoutProps {
  children: ReactNode;
  currentStep: number;
  totalSteps: number;
  title: string;
  description?: string;
}

export const AssessmentLayout = ({ 
  children, 
  currentStep, 
  totalSteps, 
  title, 
  description 
}: AssessmentLayoutProps) => {
  const progressPercent = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Are You Ready to Become an E-commerce Specialist?
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover your psychological, technical, and practical readiness for a career in e-commerce
          </p>
        </div>

        {/* Progress Bar */}
        <Card className="p-6 mb-8 shadow-soft">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <span className="text-sm text-muted-foreground">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
          <Progress value={progressPercent} className="h-3 mb-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{Math.round(progressPercent)}% Complete</span>
            <span>~{Math.max(1, totalSteps - currentStep + 1) * 3} min remaining</span>
          </div>
          {description && (
            <p className="text-muted-foreground mt-4">{description}</p>
          )}
        </Card>

        {/* Content */}
        <div className="animate-scale-in">
          {children}
        </div>
      </div>
    </div>
  );
};