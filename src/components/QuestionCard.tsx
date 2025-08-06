import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export interface QuestionOption {
  value: string;
  label: string;
  description?: string;
}

export interface Question {
  id: string;
  type: 'likert' | 'multiple-choice' | 'slider' | 'forced-choice';
  question: string;
  description?: string;
  options?: QuestionOption[];
  min?: number;
  max?: number;
  step?: number;
  leftLabel?: string;
  rightLabel?: string;
}

interface QuestionCardProps {
  question: Question;
  value: string | number;
  onChange: (value: string | number) => void;
  onNext: () => void;
  onPrevious?: () => void;
  isLast?: boolean;
  canProceed: boolean;
}

export const QuestionCard = ({
  question,
  value,
  onChange,
  onNext,
  onPrevious,
  isLast = false,
  canProceed
}: QuestionCardProps) => {
  const renderQuestionInput = () => {
    switch (question.type) {
      case 'likert':
      case 'multiple-choice':
        return (
          <RadioGroup
            value={value as string}
            onValueChange={onChange}
            className="space-y-3"
          >
            {question.options?.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label 
                  htmlFor={option.value} 
                  className="flex-1 cursor-pointer p-3 rounded-lg border hover:bg-secondary/50 transition-colors"
                >
                  <div className="font-medium">{option.label}</div>
                  {option.description && (
                    <div className="text-sm text-muted-foreground mt-1">
                      {option.description}
                    </div>
                  )}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );

      case 'slider':
        return (
          <div className="space-y-6">
            <div className="px-4">
              <Slider
                value={[value as number]}
                onValueChange={(newValue) => onChange(newValue[0])}
                min={question.min || 0}
                max={question.max || 100}
                step={question.step || 1}
                className="w-full"
              />
              <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                <span>{question.leftLabel || question.min}</span>
                <span className="font-medium text-primary">{value}</span>
                <span>{question.rightLabel || question.max}</span>
              </div>
            </div>
          </div>
        );

      case 'forced-choice':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question.options?.map((option) => (
              <Button
                key={option.value}
                variant={value === option.value ? "default" : "outline"}
                className="h-auto p-6 text-left justify-start"
                onClick={() => onChange(option.value)}
              >
                <div>
                  <div className="font-medium mb-2">{option.label}</div>
                  {option.description && (
                    <div className="text-sm opacity-80">{option.description}</div>
                  )}
                </div>
              </Button>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="p-8 shadow-soft">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">{question.question}</h3>
          {question.description && (
            <p className="text-muted-foreground">{question.description}</p>
          )}
        </div>

        {renderQuestionInput()}

        <div className="flex justify-between pt-6">
          {onPrevious ? (
            <Button variant="outline" onClick={onPrevious}>
              Previous
            </Button>
          ) : (
            <div />
          )}
          
          <Button 
            onClick={onNext}
            disabled={!canProceed}
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            {isLast ? "Complete Assessment" : "Next Question"}
          </Button>
        </div>
      </div>
    </Card>
  );
};