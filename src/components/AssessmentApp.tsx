import { useState } from "react";
import { AssessmentLayout } from "./AssessmentLayout";
import { QuestionCard, Question } from "./QuestionCard";
import { ResultsDisplay, AssessmentResults } from "./ResultsDisplay";
import { psychometricQuestions, technicalQuestions, wiscarQuestions, calculateScores } from "@/data/assessmentData";

type AssessmentSection = 'intro' | 'psychometric' | 'technical' | 'wiscar' | 'results';

export const AssessmentApp = () => {
  const [currentSection, setCurrentSection] = useState<AssessmentSection>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [results, setResults] = useState<AssessmentResults | null>(null);

  const allQuestions: { [K in AssessmentSection]?: Question[] } = {
    psychometric: psychometricQuestions,
    technical: technicalQuestions,
    wiscar: wiscarQuestions
  };

  const sectionTitles = {
    intro: "Assessment Introduction",
    psychometric: "Psychometric Evaluation",
    technical: "Technical & Aptitude Assessment", 
    wiscar: "WISCAR Framework Analysis",
    results: "Your Results"
  };

  const sectionDescriptions = {
    intro: "Learn about the assessment and what to expect",
    psychometric: "Evaluating your personality, motivation, and cognitive fit for e-commerce",
    technical: "Testing your aptitude and domain knowledge",
    wiscar: "Comprehensive readiness analysis across 6 key dimensions",
    results: "Your personalized career readiness report"
  };

  const getCurrentQuestions = (): Question[] => {
    return allQuestions[currentSection] || [];
  };

  const getCurrentQuestion = (): Question | null => {
    const questions = getCurrentQuestions();
    return questions[currentQuestionIndex] || null;
  };

  const getTotalSteps = () => {
    return 1 + psychometricQuestions.length + technicalQuestions.length + wiscarQuestions.length + 1;
  };

  const getCurrentStep = () => {
    let step = 1; // intro
    if (currentSection === 'psychometric') step += currentQuestionIndex + 1;
    else if (currentSection === 'technical') step += psychometricQuestions.length + currentQuestionIndex + 1;
    else if (currentSection === 'wiscar') step += psychometricQuestions.length + technicalQuestions.length + currentQuestionIndex + 1;
    else if (currentSection === 'results') step = getTotalSteps();
    return step;
  };

  const handleAnswer = (value: string | number) => {
    const question = getCurrentQuestion();
    if (question) {
      setAnswers(prev => ({ ...prev, [question.id]: value }));
    }
  };

  const handleNext = () => {
    const questions = getCurrentQuestions();
    
    if (currentSection === 'intro') {
      setCurrentSection('psychometric');
      setCurrentQuestionIndex(0);
    } else if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Move to next section
      setCurrentQuestionIndex(0);
      switch (currentSection) {
        case 'psychometric':
          setCurrentSection('technical');
          break;
        case 'technical':
          setCurrentSection('wiscar');
          break;
        case 'wiscar':
          // Calculate results
          const calculatedResults = calculateScores(answers);
          setResults(calculatedResults);
          setCurrentSection('results');
          break;
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else {
      // Move to previous section
      switch (currentSection) {
        case 'technical':
          setCurrentSection('psychometric');
          setCurrentQuestionIndex(psychometricQuestions.length - 1);
          break;
        case 'wiscar':
          setCurrentSection('technical');
          setCurrentQuestionIndex(technicalQuestions.length - 1);
          break;
        case 'psychometric':
          setCurrentSection('intro');
          setCurrentQuestionIndex(0);
          break;
      }
    }
  };

  const handleRestart = () => {
    setCurrentSection('intro');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setResults(null);
  };

  const canProceed = () => {
    if (currentSection === 'intro') return true;
    const question = getCurrentQuestion();
    if (!question) return false;
    return answers[question.id] !== undefined;
  };

  const renderIntroduction = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-primary">🎯 Purpose of the Assessment</h2>
            <p className="text-muted-foreground">
              This assessment evaluates your psychological, technical, and practical readiness to pursue 
              a career as an E-commerce Specialist. It identifies how well your interests, aptitudes, 
              current skills, and personality align with the competencies required in the field.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">🧰 What is E-commerce?</h3>
            <p className="text-muted-foreground text-sm">
              E-commerce Specialists manage online sales strategies, marketplaces (Amazon, Shopify), 
              digital marketing (SEO, email, PPC), customer acquisition, and analytics. They work with 
              tools like Google Analytics, Meta Ads, Shopify, WooCommerce, and CRMs.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">👔 Careers You Could Enter</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                E-commerce Manager
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                Amazon Seller Consultant
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Shopify Store Manager
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                Performance Marketing Specialist
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Digital Merchandiser
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                Growth Marketing Analyst
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">🧠 Who Succeeds in E-commerce?</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-success rounded-full mr-3" />
                Data-driven thinkers
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-success rounded-full mr-3" />
                Analytical & creative marketers
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-success rounded-full mr-3" />
                People who enjoy systems & dashboards
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-success rounded-full mr-3" />
                Fast learners & tool-savvy professionals
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-primary/10 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold mb-2">⏱️ Assessment Duration</h3>
        <p className="text-muted-foreground">
          This comprehensive assessment takes approximately 20-30 minutes to complete. 
          You'll go through psychometric evaluation, technical testing, and WISCAR framework analysis.
        </p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleNext}
          className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-glow transition-all duration-300"
        >
          Begin Assessment
        </button>
      </div>
    </div>
  );

  if (currentSection === 'results' && results) {
    return (
      <AssessmentLayout
        currentStep={getCurrentStep()}
        totalSteps={getTotalSteps()}
        title={sectionTitles[currentSection]}
        description={sectionDescriptions[currentSection]}
      >
        <ResultsDisplay results={results} onRestart={handleRestart} />
      </AssessmentLayout>
    );
  }

  return (
    <AssessmentLayout
      currentStep={getCurrentStep()}
      totalSteps={getTotalSteps()}
      title={sectionTitles[currentSection]}
      description={sectionDescriptions[currentSection]}
    >
      {currentSection === 'intro' ? (
        renderIntroduction()
      ) : (
        getCurrentQuestion() && (
          <QuestionCard
            question={getCurrentQuestion()!}
            value={answers[getCurrentQuestion()!.id] || (getCurrentQuestion()!.type === 'slider' ? 50 : '')}
            onChange={handleAnswer}
            onNext={handleNext}
            onPrevious={currentSection !== 'psychometric' || currentQuestionIndex > 0 ? handlePrevious : undefined}
            isLast={currentSection === 'wiscar' && currentQuestionIndex === wiscarQuestions.length - 1}
            canProceed={canProceed()}
          />
        )
      )}
    </AssessmentLayout>
  );
};