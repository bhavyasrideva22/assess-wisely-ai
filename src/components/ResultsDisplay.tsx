import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { SimpleRadarChart } from "./SimpleRadarChart";
import { CheckCircle, AlertCircle, XCircle, TrendingUp, BookOpen, Target } from "lucide-react";

export interface AssessmentResults {
  psychometricScore: number;
  technicalScore: number;
  wiscarScores: {
    will: number;
    interest: number;
    skill: number;
    cognitive: number;
    ability: number;
    realWorld: number;
  };
  overallScore: number;
  recommendation: 'yes' | 'no' | 'maybe';
  reasons: string[];
  nextSteps: string[];
  alternativeCareers?: string[];
  careerMatches: Array<{
    role: string;
    matchScore: number;
    requiredSkills: string[];
    userStrengths: string[];
    gaps: string[];
  }>;
}

interface ResultsDisplayProps {
  results: AssessmentResults;
  onRestart: () => void;
}

export const ResultsDisplay = ({ results, onRestart }: ResultsDisplayProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 70) return "text-success";
    if (score >= 40) return "text-warning";
    return "text-destructive";
  };

  const getScoreBadge = (score: number) => {
    if (score >= 70) return <Badge className="bg-success text-success-foreground">High Fit</Badge>;
    if (score >= 40) return <Badge className="bg-warning text-warning-foreground">Medium Fit</Badge>;
    return <Badge variant="destructive">Low Fit</Badge>;
  };

  const getRecommendationIcon = () => {
    switch (results.recommendation) {
      case 'yes': return <CheckCircle className="w-8 h-8 text-success" />;
      case 'maybe': return <AlertCircle className="w-8 h-8 text-warning" />;
      case 'no': return <XCircle className="w-8 h-8 text-destructive" />;
    }
  };

  const radarData = [
    { subject: 'Will', score: results.wiscarScores.will, fullMark: 100 },
    { subject: 'Interest', score: results.wiscarScores.interest, fullMark: 100 },
    { subject: 'Skill', score: results.wiscarScores.skill, fullMark: 100 },
    { subject: 'Cognitive', score: results.wiscarScores.cognitive, fullMark: 100 },
    { subject: 'Ability', score: results.wiscarScores.ability, fullMark: 100 },
    { subject: 'Real-World', score: results.wiscarScores.realWorld, fullMark: 100 },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Overall Results Header */}
      <Card className="p-8 text-center shadow-glow">
        <div className="flex items-center justify-center mb-4">
          {getRecommendationIcon()}
        </div>
        <h2 className="text-3xl font-bold mb-4">
          Your E-commerce Readiness Score: {results.overallScore}%
        </h2>
        <div className="mb-6">
          {getScoreBadge(results.overallScore)}
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {results.recommendation === 'yes' && "You show strong potential for a successful career in e-commerce!"}
          {results.recommendation === 'maybe' && "You have potential, but some areas need development before diving in."}
          {results.recommendation === 'no' && "E-commerce may not be the best fit, but we've identified some great alternatives."}
        </p>
      </Card>

      {/* Detailed Scores */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="text-center">
            <h3 className="font-semibold mb-3">Psychological Fit</h3>
            <div className={`text-3xl font-bold mb-2 ${getScoreColor(results.psychometricScore)}`}>
              {results.psychometricScore}%
            </div>
            <Progress value={results.psychometricScore} className="h-2" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="text-center">
            <h3 className="font-semibold mb-3">Technical Readiness</h3>
            <div className={`text-3xl font-bold mb-2 ${getScoreColor(results.technicalScore)}`}>
              {results.technicalScore}%
            </div>
            <Progress value={results.technicalScore} className="h-2" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="text-center">
            <h3 className="font-semibold mb-3">WISCAR Confidence</h3>
            <div className={`text-3xl font-bold mb-2 ${getScoreColor(results.overallScore)}`}>
              {results.overallScore}%
            </div>
            <Progress value={results.overallScore} className="h-2" />
          </div>
        </Card>
      </div>

      {/* WISCAR Radar Chart */}
      <Card className="p-8">
        <h3 className="text-xl font-semibold mb-6 text-center">WISCAR Framework Analysis</h3>
        <div className="h-96">
          <SimpleRadarChart data={radarData} />
        </div>
      </Card>

      {/* Insights and Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center mb-4">
            <Target className="w-5 h-5 mr-2 text-primary" />
            <h3 className="font-semibold">Why This Recommendation?</h3>
          </div>
          <ul className="space-y-2">
            {results.reasons.map((reason, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="text-sm">{reason}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-5 h-5 mr-2 text-accent" />
            <h3 className="font-semibold">Next Steps</h3>
          </div>
          <ul className="space-y-2">
            {results.nextSteps.map((step, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="text-sm">{step}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Career Matches */}
      <Card className="p-8">
        <h3 className="text-xl font-semibold mb-6">E-commerce Career Opportunities</h3>
        <div className="space-y-6">
          {results.careerMatches.map((career, index) => (
            <div key={index} className="border rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-semibold text-lg">{career.role}</h4>
                <Badge variant={career.matchScore >= 70 ? "default" : career.matchScore >= 40 ? "secondary" : "outline"}>
                  {career.matchScore}% Match
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h5 className="font-medium mb-2 text-success">Your Strengths</h5>
                  <ul className="space-y-1">
                    {career.userStrengths.map((strength, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="w-3 h-3 mr-2 text-success" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium mb-2">Required Skills</h5>
                  <ul className="space-y-1">
                    {career.requiredSkills.map((skill, i) => (
                      <li key={i} className="text-muted-foreground">• {skill}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium mb-2 text-warning">Development Areas</h5>
                  <ul className="space-y-1">
                    {career.gaps.map((gap, i) => (
                      <li key={i} className="flex items-center">
                        <AlertCircle className="w-3 h-3 mr-2 text-warning" />
                        {gap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Alternative Careers (if recommendation is no) */}
      {results.recommendation === 'no' && results.alternativeCareers && (
        <Card className="p-6">
          <div className="flex items-center mb-4">
            <BookOpen className="w-5 h-5 mr-2 text-primary" />
            <h3 className="font-semibold">Consider These Alternatives</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {results.alternativeCareers.map((career, index) => (
              <Badge key={index} variant="secondary" className="p-3 justify-center">
                {career}
              </Badge>
            ))}
          </div>
        </Card>
      )}

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        <Button onClick={onRestart} variant="outline">
          Retake Assessment
        </Button>
        <Button className="bg-gradient-primary">
          Download Full Report
        </Button>
      </div>
    </div>
  );
};