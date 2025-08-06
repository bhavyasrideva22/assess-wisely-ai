import { Question } from "@/components/QuestionCard";

export const psychometricQuestions: Question[] = [
  {
    id: "interest_1",
    type: "likert",
    question: "I enjoy exploring how online stores work and what makes them successful",
    options: [
      { value: "1", label: "Strongly Disagree" },
      { value: "2", label: "Disagree" },
      { value: "3", label: "Neutral" },
      { value: "4", label: "Agree" },
      { value: "5", label: "Strongly Agree" }
    ]
  },
  {
    id: "motivation_1",
    type: "forced-choice",
    question: "What motivates you more when learning new skills?",
    options: [
      { 
        value: "internal", 
        label: "Internal Curiosity", 
        description: "I learn because I'm genuinely interested" 
      },
      { 
        value: "external", 
        label: "External Rewards", 
        description: "I learn to achieve specific goals or recognition" 
      }
    ]
  },
  {
    id: "personality_1",
    type: "multiple-choice",
    question: "You're asked to optimize a failing ad campaign. What's your first instinct?",
    options: [
      { value: "data", label: "Dive into the analytics to find patterns" },
      { value: "creative", label: "Brainstorm new creative approaches" },
      { value: "research", label: "Research what competitors are doing" },
      { value: "systematic", label: "Create a systematic testing plan" }
    ]
  },
  {
    id: "cognitive_1",
    type: "slider",
    question: "How do you prefer to approach problem-solving?",
    min: 0,
    max: 100,
    step: 10,
    leftLabel: "Structured & Methodical",
    rightLabel: "Creative & Intuitive"
  },
  {
    id: "grit_1",
    type: "likert",
    question: "I finish what I start, even when tasks become boring or difficult",
    options: [
      { value: "1", label: "Never" },
      { value: "2", label: "Rarely" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Often" },
      { value: "5", label: "Always" }
    ]
  },
  {
    id: "growth_mindset_1",
    type: "multiple-choice",
    question: "You failed to meet your monthly sales target. What's your reaction?",
    options: [
      { value: "analyze", label: "Analyze what went wrong and adjust strategy" },
      { value: "blame", label: "Consider external factors that affected results" },
      { value: "learn", label: "Seek feedback and additional training" },
      { value: "persist", label: "Double down on current efforts" }
    ]
  },
  {
    id: "interest_2",
    type: "likert",
    question: "I actively follow online marketing trends and e-commerce news",
    options: [
      { value: "1", label: "Never" },
      { value: "2", label: "Rarely" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Often" },
      { value: "5", label: "Always" }
    ]
  },
  {
    id: "personality_2",
    type: "forced-choice",
    question: "In a fast-paced work environment, you prefer:",
    options: [
      { 
        value: "multitask", 
        label: "Juggling Multiple Projects", 
        description: "I thrive with variety and switching between tasks" 
      },
      { 
        value: "focus", 
        label: "Deep Focus on One Thing", 
        description: "I prefer to complete projects before starting new ones" 
      }
    ]
  }
];

export const technicalQuestions: Question[] = [
  // General Aptitude
  {
    id: "logic_1",
    type: "multiple-choice",
    question: "If Product A costs $50 and has a 20% profit margin, what was the cost price?",
    options: [
      { value: "40", label: "$40" },
      { value: "41.67", label: "$41.67" },
      { value: "42.50", label: "$42.50" },
      { value: "45", label: "$45" }
    ]
  },
  {
    id: "data_interpretation_1",
    type: "multiple-choice",
    question: "Your website conversion rate dropped from 3% to 2.4%. What's the percentage decrease?",
    options: [
      { value: "0.6", label: "0.6%" },
      { value: "20", label: "20%" },
      { value: "25", label: "25%" },
      { value: "30", label: "30%" }
    ]
  },
  
  // Prerequisite Knowledge
  {
    id: "excel_1",
    type: "multiple-choice",
    question: "Which Excel function would you use to calculate the average of cells A1 through A10?",
    options: [
      { value: "sum", label: "=SUM(A1:A10)" },
      { value: "average", label: "=AVERAGE(A1:A10)" },
      { value: "mean", label: "=MEAN(A1:A10)" },
      { value: "calc", label: "=CALC(A1:A10)" }
    ]
  },
  {
    id: "digital_literacy_1",
    type: "multiple-choice",
    question: "What does 'CTR' stand for in digital marketing?",
    options: [
      { value: "cost_to_revenue", label: "Cost to Revenue" },
      { value: "click_through_rate", label: "Click Through Rate" },
      { value: "customer_retention_rate", label: "Customer Retention Rate" },
      { value: "conversion_tracking_rate", label: "Conversion Tracking Rate" }
    ]
  },
  
  // Domain-Specific E-commerce
  {
    id: "ecommerce_1",
    type: "multiple-choice",
    question: "What is ROAS in e-commerce advertising?",
    options: [
      { value: "return_on_ad_spend", label: "Return on Ad Spend" },
      { value: "rate_of_abandoned_sales", label: "Rate of Abandoned Sales" },
      { value: "revenue_optimization_analysis_system", label: "Revenue Optimization Analysis System" },
      { value: "real_time_order_analytics_system", label: "Real-time Order Analytics System" }
    ]
  },
  {
    id: "ecommerce_2",
    type: "multiple-choice",
    question: "Which metric is most important for measuring e-commerce success?",
    options: [
      { value: "traffic", label: "Website Traffic" },
      { value: "followers", label: "Social Media Followers" },
      { value: "lifetime_value", label: "Customer Lifetime Value" },
      { value: "page_views", label: "Page Views" }
    ]
  },
  {
    id: "platform_knowledge_1",
    type: "multiple-choice",
    question: "What is the main advantage of Shopify over building a custom e-commerce site?",
    options: [
      { value: "cheaper", label: "It's always cheaper" },
      { value: "faster_setup", label: "Faster setup and built-in features" },
      { value: "better_seo", label: "Better SEO capabilities" },
      { value: "unlimited_customization", label: "Unlimited customization options" }
    ]
  }
];

export const wiscarQuestions: Question[] = [
  // Will (Grit + Consistency)
  {
    id: "will_1",
    type: "likert",
    question: "When facing setbacks in a project, I persist until I find a solution",
    options: [
      { value: "1", label: "Never" },
      { value: "2", label: "Rarely" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Often" },
      { value: "5", label: "Always" }
    ]
  },
  {
    id: "will_2",
    type: "slider",
    question: "How consistent are you with long-term goals?",
    min: 0,
    max: 100,
    step: 5,
    leftLabel: "Often change direction",
    rightLabel: "Extremely consistent"
  },
  
  // Interest (Passion Alignment)
  {
    id: "interest_1",
    type: "multiple-choice",
    question: "Which of these activities sounds most appealing for your free time?",
    options: [
      { value: "analyze_trends", label: "Analyzing market trends and consumer behavior" },
      { value: "creative_content", label: "Creating marketing content and campaigns" },
      { value: "optimize_systems", label: "Optimizing systems and processes" },
      { value: "research_tools", label: "Researching new tools and technologies" }
    ]
  },
  
  // Skill (Self-assessed + validated)
  {
    id: "skill_1",
    type: "slider",
    question: "Rate your current Excel/Google Sheets proficiency",
    min: 0,
    max: 100,
    step: 10,
    leftLabel: "Beginner",
    rightLabel: "Expert"
  },
  {
    id: "skill_2",
    type: "slider",
    question: "Rate your understanding of digital marketing concepts",
    min: 0,
    max: 100,
    step: 10,
    leftLabel: "No knowledge",
    rightLabel: "Expert level"
  },
  
  // Cognitive Readiness
  {
    id: "cognitive_1",
    type: "multiple-choice",
    question: "You're given a new analytics dashboard with 20+ metrics. Your approach:",
    options: [
      { value: "overwhelmed", label: "Feel overwhelmed and need guidance" },
      { value: "systematic", label: "Systematically explore each section" },
      { value: "focus_key", label: "Focus on key metrics first" },
      { value: "excited", label: "Get excited to discover insights" }
    ]
  },
  
  // Ability to Learn
  {
    id: "learning_1",
    type: "forced-choice",
    question: "When you receive constructive criticism on your work:",
    options: [
      { 
        value: "defensive", 
        label: "I initially feel defensive", 
        description: "But I eventually consider the feedback" 
      },
      { 
        value: "eager", 
        label: "I'm eager to improve", 
        description: "I actively seek more specific feedback" 
      }
    ]
  },
  
  // Real-World Fit
  {
    id: "realworld_1",
    type: "multiple-choice",
    question: "Which aspect of e-commerce work excites you most?",
    options: [
      { value: "strategy", label: "Developing marketing strategies" },
      { value: "optimization", label: "Optimizing conversion rates" },
      { value: "analysis", label: "Analyzing customer data" },
      { value: "growth", label: "Scaling business growth" }
    ]
  }
];

// Mock scoring logic
export const calculateScores = (answers: Record<string, string | number>) => {
  // Psychometric scoring
  const psychometricTotal = Object.entries(answers)
    .filter(([key]) => key.startsWith('interest_') || key.startsWith('motivation_') || 
                       key.startsWith('personality_') || key.startsWith('cognitive_') || 
                       key.startsWith('grit_') || key.startsWith('growth_mindset_'))
    .reduce((sum, [, value]) => {
      const numValue = typeof value === 'string' ? parseInt(value) || 3 : value;
      return sum + (numValue / 5) * 20; // Normalize to 0-20 per question
    }, 0);

  // Technical scoring
  const technicalAnswers = Object.entries(answers)
    .filter(([key]) => key.startsWith('logic_') || key.startsWith('data_') || 
                       key.startsWith('excel_') || key.startsWith('digital_') || 
                       key.startsWith('ecommerce_') || key.startsWith('platform_'));
  
  const correctAnswers = {
    'logic_1': '41.67',
    'data_interpretation_1': '20',
    'excel_1': 'average',
    'digital_literacy_1': 'click_through_rate',
    'ecommerce_1': 'return_on_ad_spend',
    'ecommerce_2': 'lifetime_value',
    'platform_knowledge_1': 'faster_setup'
  };

  const technicalScore = technicalAnswers.reduce((score, [key, value]) => {
    return score + (correctAnswers[key as keyof typeof correctAnswers] === value ? 100 / technicalAnswers.length : 0);
  }, 0);

  // WISCAR scoring
  const wiscarScores = {
    will: Math.min(100, (parseInt(answers.will_1 as string) || 3) * 20 + (answers.will_2 as number || 50)),
    interest: Math.min(100, (answers.interest_1 === 'analyze_trends' ? 90 : 70) + (parseInt(answers.interest_2 as string) || 3) * 5),
    skill: Math.min(100, ((answers.skill_1 as number || 50) + (answers.skill_2 as number || 50)) / 2),
    cognitive: answers.cognitive_1 === 'excited' ? 90 : answers.cognitive_1 === 'focus_key' ? 80 : answers.cognitive_1 === 'systematic' ? 70 : 50,
    ability: answers.learning_1 === 'eager' ? 85 : 60,
    realWorld: answers.realworld_1 === 'analysis' ? 90 : answers.realworld_1 === 'optimization' ? 85 : 75
  };

  const overallScore = Math.round((psychometricTotal + technicalScore + 
    Object.values(wiscarScores).reduce((sum, score) => sum + score, 0) / 6) / 3);

  const recommendation: 'yes' | 'maybe' | 'no' = overallScore >= 70 ? 'yes' : overallScore >= 40 ? 'maybe' : 'no';

  return {
    psychometricScore: Math.round(psychometricTotal),
    technicalScore: Math.round(technicalScore),
    wiscarScores,
    overallScore,
    recommendation,
    reasons: generateReasons(overallScore, psychometricTotal, technicalScore, wiscarScores),
    nextSteps: generateNextSteps(recommendation, overallScore),
    alternativeCareers: recommendation === 'no' ? ['UI/UX Design', 'Business Analysis', 'Content Marketing'] : undefined,
    careerMatches: generateCareerMatches(wiscarScores, technicalScore)
  };
};

const generateReasons = (overall: number, psychometric: number, technical: number, wiscar: any): string[] => {
  const reasons = [];
  
  if (psychometric >= 70) reasons.push("Strong psychological alignment with e-commerce work patterns");
  if (technical >= 70) reasons.push("Solid technical foundation for e-commerce tools and concepts");
  if (wiscar.interest >= 80) reasons.push("High genuine interest in e-commerce domain");
  if (wiscar.will >= 80) reasons.push("Excellent persistence and consistency traits");
  
  if (overall < 40) {
    reasons.push("Significant gaps in multiple core competency areas");
  } else if (overall < 70) {
    reasons.push("Good potential with focused skill development needed");
  }
  
  return reasons.length > 0 ? reasons : ["Assessment shows mixed results requiring deeper evaluation"];
};

const generateNextSteps = (recommendation: string, score: number): string[] => {
  switch (recommendation) {
    case 'yes':
      return [
        "Start with Meta Ads 101 and Shopify Basics courses",
        "Practice with Google Analytics demo account",
        "Build a small test e-commerce store",
        "Join e-commerce communities and forums"
      ];
    case 'maybe':
      return [
        "Focus on improving Excel/data analysis skills",
        "Take a foundational digital marketing course",
        "Shadow an e-commerce professional",
        "Consider a marketing internship first"
      ];
    case 'no':
      return [
        "Explore your highlighted alternative career paths",
        "Consider roles that leverage your stronger competencies",
        "Develop foundational business skills",
        "Reassess after gaining more general business experience"
      ];
    default:
      return [];
  }
};

const generateCareerMatches = (wiscar: any, technical: number) => {
  return [
    {
      role: "E-commerce Manager",
      matchScore: Math.round((wiscar.cognitive + wiscar.realWorld + technical) / 3),
      requiredSkills: ["Google Analytics", "Campaign Management", "ROI Analysis"],
      userStrengths: wiscar.cognitive >= 70 ? ["Analytical thinking"] : [],
      gaps: technical < 70 ? ["Technical platform knowledge"] : []
    },
    {
      role: "Performance Marketing Specialist",
      matchScore: Math.round((wiscar.skill + technical + wiscar.will) / 3),
      requiredSkills: ["Meta Ads", "Excel", "ROI Metrics"],
      userStrengths: wiscar.will >= 80 ? ["Persistence with campaigns"] : [],
      gaps: wiscar.skill < 70 ? ["Platform-specific skills"] : []
    },
    {
      role: "Amazon Consultant",
      matchScore: Math.round((technical + wiscar.interest + wiscar.ability) / 3),
      requiredSkills: ["Amazon Seller Central", "PPC Management", "Product Optimization"],
      userStrengths: wiscar.interest >= 80 ? ["Strong domain interest"] : [],
      gaps: technical < 60 ? ["Amazon-specific knowledge"] : []
    }
  ];
};