import React, { useState } from 'react';

interface EmployeeRole {
  id: string;
  role: string;
  count: number;
  hourlyRate: number;
  description: string;
  icon: string;
}

interface CalculatorInputs {
  roles: EmployeeRole[];
  winRatio: number;
  averageDealSize: number;
  manualOutreachHours: number;
  customerSupportHours: number;
  documentProcessingHours: number;
  // New configuration elements
  currentDealsPerMonth: number;
  averageResponseTime: number;
  customerSatisfactionScore: number;
  dataProcessingAccuracy: number;
  employeeProductivityLoss: number;
}

interface ROIResults {
  timeReclaimed: number;
  annualROI: number;
  revenueImpact: number;
  paybackPeriodDays: number;
  fteEquivalent: number;
  timeSavingsBreakdown: {
    customerSupport: number;
    outreach: number;
    documentProcessing: number;
  };
  revenueImpactDetails: {
    totalAnnualImpact: number;
    dealAcceleration: number;
    retention: number;
    winRate: number;
    activityFocus: number;
    dealCycleReduction: number;
    winRateImprovement: number;
    moreDealsPerYear: number;
    moreWinsPerYear: number;
  };
  productivityTransformation: {
    timeValueRecaptured: number;
    dataQualityEnhancement: number;
    communicationAcceleration: number;
    processAutomation: number;
    accuracyImprovement: number;
    fasterCycles: number;
    lessChurn: number;
  };
  revenueGeneratingActivity: {
    currentActivityTime: number;
    afterMomentum: number;
    revenueImpactPercent: number;
    annualRevenueIncrease: number;
  };
  recommendations: string[];
}

const ROICalculatorPage: React.FC = () => {
  const [showResults, setShowResults] = useState(false);
  const [inputs, setInputs] = useState<CalculatorInputs>({
    roles: [
      { 
        id: '1', 
        role: 'Sales Representative', 
        count: 5, 
        hourlyRate: 50,
        description: 'Handles lead generation, client outreach, and deal closing',
        icon: '💼'
      },
      { 
        id: '2', 
        role: 'Customer Support Agent', 
        count: 3, 
        hourlyRate: 35,
        description: 'Manages customer inquiries, support tickets, and issue resolution',
        icon: '🎧'
      },
      { 
        id: '3', 
        role: 'Office Clerk', 
        count: 2, 
        hourlyRate: 25,
        description: 'Processes documents, data entry, and administrative tasks',
        icon: '📋'
      }
    ],
    winRatio: 20,
    averageDealSize: 10000,
    manualOutreachHours: 4,
    customerSupportHours: 3,
    documentProcessingHours: 2,
    currentDealsPerMonth: 25,
    averageResponseTime: 24,
    customerSatisfactionScore: 75,
    dataProcessingAccuracy: 85,
    employeeProductivityLoss: 30,
  });
  const [results, setResults] = useState<ROIResults | null>(null);

  const updateRole = (id: string, field: keyof EmployeeRole, value: string | number) => {
    setInputs(prev => ({
      ...prev,
      roles: prev.roles.map(role => 
        role.id === id ? { ...role, [field]: value } : role
      )
    }));
  };

  const calculateROI = () => {
    // Calculate total employees and average hourly rate
    const totalEmployees = inputs.roles.reduce((sum, role) => sum + role.count, 0);
    const avgHourlyRate = inputs.roles.reduce((sum, role) => sum + (role.hourlyRate * role.count), 0) / totalEmployees;

    // Enhanced time reclaimed calculations (52 weeks, 75% automation efficiency)
    const automationEfficiency = 0.75;
    const customerSupportTimeSaved = (inputs.customerSupportHours * 52) * totalEmployees * automationEfficiency;
    const outreachTimeSaved = (inputs.manualOutreachHours * 52) * totalEmployees * automationEfficiency;
    const documentTimeSaved = (inputs.documentProcessingHours * 52) * totalEmployees * automationEfficiency;
    const totalTimeReclaimed = customerSupportTimeSaved + outreachTimeSaved + documentTimeSaved;

    // FTE Equivalent calculation (2080 hours per year per FTE)
    const fteEquivalent = totalTimeReclaimed / 2080;

    // Cost savings from reclaimed time
    const costSavings = totalTimeReclaimed * avgHourlyRate;

    // Enhanced revenue impact calculations
    const newWinRatio = Math.min(inputs.winRatio + 15, 85);
    const dealsPerYear = inputs.currentDealsPerMonth * 12;
    const baseRevenueImpact = (inputs.averageDealSize * ((newWinRatio - inputs.winRatio) / 100)) * dealsPerYear;

    // Detailed revenue impact breakdown
    const dealAcceleration = baseRevenueImpact * 0.28; // 28% from deal acceleration
    const retention = baseRevenueImpact * 0.25; // 25% from retention
    const winRateBonus = baseRevenueImpact * 0.14; // 14% from win rate
    const activityFocus = baseRevenueImpact * 0.33; // 33% from activity focus
    const totalAnnualImpact = dealAcceleration + retention + winRateBonus + activityFocus;

    // Deal cycle and win rate improvements
    const dealCycleReduction = 14; // days
    const winRateImprovement = 5; // percentage points
    const moreDealsPerYear = 12;
    const moreWinsPerYear = 6;

    // Productivity transformation calculations
    const timeValueRecaptured = costSavings;
    const dataQualityEnhancement = 440000; // Fixed value from image
    const communicationAcceleration = 330000; // Fixed value from image
    const processAutomation = 550000; // Fixed value from image
    const accuracyImprovement = 30; // percentage
    const fasterCycles = 20; // percentage
    const lessChurn = 8; // percentage

    // Revenue generating activity calculations
    const currentActivityTime = 36; // percentage from image
    const afterMomentum = 66; // percentage from image
    const revenueImpactPercent = 12; // percentage from image
    const annualRevenueIncrease = 504000; // from image

    // Additional cost savings from efficiency gains
    const productivityIncrease = Math.min(inputs.employeeProductivityLoss * 0.7, 25);
    const efficiencySavings = (productivityIncrease / 100) * totalEmployees * avgHourlyRate * 2080;

    // Total financial gain
    const totalGain = costSavings + totalAnnualImpact + efficiencySavings;

    // Estimated annual cost of AI solutions
    const aiSolutionCost = totalEmployees * 2500;

    // ROI calculation
    const annualROI = ((totalGain - aiSolutionCost) / aiSolutionCost) * 100;

    // Payback period in days
    const paybackPeriodDays = Math.round((aiSolutionCost / (totalGain / 365)));

    // Enhanced recommendations
    const recommendations = [];
    if (inputs.customerSupportHours > 2 || inputs.customerSatisfactionScore < 80) {
      recommendations.push('Customer Support Chatbot & CRM Automation');
    }
    if (inputs.manualOutreachHours > 3 || inputs.winRatio < 30) {
      recommendations.push('Marketing Automation System');
    }
    if (inputs.documentProcessingHours > 1.5 || inputs.dataProcessingAccuracy < 90) {
      recommendations.push('Document Understanding Pipelines & Internal Workflow Copilot');
    }
    if (totalEmployees > 20 || inputs.employeeProductivityLoss > 25) {
      recommendations.push('Custom LLMs & Retrieval-Augmented Generation (RAG)');
    }
    if (inputs.averageResponseTime > 12) {
      recommendations.push('Intelligent Response System');
    }

    const calculatedResults: ROIResults = {
      timeReclaimed: Math.round(totalTimeReclaimed),
      annualROI: Math.round(annualROI),
      revenueImpact: Math.round(totalAnnualImpact),
      paybackPeriodDays: paybackPeriodDays,
      fteEquivalent: Math.round(fteEquivalent * 10) / 10,
      timeSavingsBreakdown: {
        customerSupport: Math.round(customerSupportTimeSaved),
        outreach: Math.round(outreachTimeSaved),
        documentProcessing: Math.round(documentTimeSaved),
      },
      revenueImpactDetails: {
        totalAnnualImpact: Math.round(totalAnnualImpact),
        dealAcceleration: Math.round(dealAcceleration),
        retention: Math.round(retention),
        winRate: Math.round(winRateBonus),
        activityFocus: Math.round(activityFocus),
        dealCycleReduction,
        winRateImprovement,
        moreDealsPerYear,
        moreWinsPerYear,
      },
      productivityTransformation: {
        timeValueRecaptured: Math.round(timeValueRecaptured),
        dataQualityEnhancement,
        communicationAcceleration,
        processAutomation,
        accuracyImprovement,
        fasterCycles,
        lessChurn,
      },
      revenueGeneratingActivity: {
        currentActivityTime,
        afterMomentum,
        revenueImpactPercent,
        annualRevenueIncrease,
      },
      recommendations,
    };

    setResults(calculatedResults);
    setShowResults(true);
  };

  const resetCalculator = () => {
    setShowResults(false);
    setResults(null);
  };

  const styles = `
    .roi-calculator {
      min-height: 100vh;
      background: linear-gradient(135deg, #1a1d29 0%, #2d3748 100%);
      padding-top: 6rem;
    }
    .calculator-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 2rem;
    }
    .calculator-header {
      text-align: center;
      margin-bottom: 3rem;
    }
    .calculator-title {
      font-size: 3rem;
      font-weight: 700;
      background: linear-gradient(135deg, var(--accent-color), var(--accent-hover));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 1rem;
    }
    .calculator-subtitle {
      font-size: 1.2rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto;
    }
    .input-section {
      background: var(--secondary-bg);
      border-radius: 20px;
      padding: 3rem;
      margin-bottom: 2rem;
      border: 1px solid var(--border-color);
      position: relative;
      overflow: hidden;
    }
    .input-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #4B73FF, #FF66F4, #FF0105, #FE7B02);
      border-radius: 20px 20px 0 0;
    }
    .section-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .roles-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }
    .role-card {
      background: linear-gradient(135deg, var(--primary-bg) 0%, rgba(75, 115, 255, 0.05) 100%);
      border-radius: 15px;
      padding: 1.5rem;
      border: 1px solid var(--border-color);
      position: relative;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
    .role-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(75, 115, 255, 0.15);
    }
    .role-header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
    .role-title {
      margin: 0;
      color: var(--text-primary);
      font-size: 1.2rem;
      font-weight: 600;
    }
    .role-icon {
      font-size: 1.5rem;
    }
    .role-description {
      font-size: 0.9rem;
      color: var(--text-secondary);
      margin: 0.5rem 0 1rem 0;
      font-style: italic;
    }
    .role-inputs {
      display: flex;
      gap: 1rem;
      align-items: flex-end;
    }
    .input-group {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      min-height: 80px;
    }
    .input-label {
      font-size: 0.9rem;
      color: var(--text-secondary);
      margin-bottom: 0.5rem;
      font-weight: 500;
      min-height: 1.2rem;
    }
    .input-field, .select-field {
      padding: 0.75rem;
      border: 2px solid var(--border-color);
      border-radius: 12px;
      background: var(--primary-bg);
      color: var(--text-primary);
      font-size: 1rem;
      transition: all 0.3s ease;
      width: 100%;
      box-sizing: border-box;
      max-width: 100%;
    }
    .input-field:focus, .select-field:focus {
      outline: none;
      border-color: var(--accent-color);
      box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
      transform: translateY(-1px);
    }
    .general-inputs {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }
    .slider-group {
      display: flex;
      flex-direction: column;
      background: linear-gradient(135deg, rgba(75, 115, 255, 0.05), rgba(255, 102, 244, 0.05));
      padding: 1.5rem;
      border-radius: 15px;
      border: 1px solid var(--border-color);
      transition: all 0.3s ease;
    }
    .slider-group:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    }
    .slider {
      -webkit-appearance: none;
      appearance: none;
      height: 8px;
      border-radius: 4px;
      background: linear-gradient(90deg, var(--border-color), var(--accent-color));
      outline: none;
      margin: 0.5rem 0;
      transition: all 0.3s ease;
    }
    .slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--accent-color), var(--accent-hover));
      cursor: pointer;
      box-shadow: 0 2px 10px rgba(59, 130, 246, 0.3);
      transition: all 0.3s ease;
    }
    .slider::-webkit-slider-thumb:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 15px rgba(59, 130, 246, 0.5);
    }
    .slider::-moz-range-thumb {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--accent-color), var(--accent-hover));
      cursor: pointer;
      border: none;
      box-shadow: 0 2px 10px rgba(59, 130, 246, 0.3);
    }
    .slider-value {
      font-weight: 700;
      font-size: 1.1rem;
      color: var(--accent-color);
      text-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
    }
    .calculate-btn {
      background: linear-gradient(135deg, var(--accent-color), var(--accent-hover), #8b5cf6);
      color: white;
      border: none;
      border-radius: 20px;
      padding: 1.5rem 3rem;
      cursor: pointer;
      font-size: 1.3rem;
      font-weight: 700;
      transition: all 0.3s ease;
      display: block;
      margin: 3rem auto 0;
      min-width: 300px;
      box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
      position: relative;
      overflow: hidden;
    }
    .calculate-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: all 0.6s ease;
    }
    .calculate-btn:hover::before {
      left: 100%;
    }
    .calculate-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4);
    }
    .results-section {
      animation: fadeIn 0.6s ease-in-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    /* KPI Cards - Top Row */
    .kpi-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }
    .kpi-card {
      border-radius: 20px;
      padding: 2rem;
      text-align: left;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      color: white;
      font-weight: 500;
    }
    .kpi-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
    }
    .kpi-card.time-reclaimed {
      background: linear-gradient(135deg, #4fd1c7, #38b2ac);
    }
    .kpi-card.fte-equivalent {
      background: linear-gradient(135deg, #68d391, #38a169);
    }
    .kpi-card.roi {
      background: linear-gradient(135deg, #9f7aea, #805ad5);
    }
    .kpi-card.payback {
      background: linear-gradient(135deg, #f6ad55, #ed8936);
    }
    .kpi-icon {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      opacity: 0.9;
    }
    .kpi-label {
      font-size: 0.9rem;
      opacity: 0.9;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }
    .kpi-value {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 0.25rem;
    }
    .kpi-description {
      font-size: 0.9rem;
      opacity: 0.8;
      font-weight: 400;
    }

    /* Analysis Sections */
    .analysis-section {
      margin-bottom: 3rem;
    }
    .analysis-section-title {
      font-size: 1.8rem;
      font-weight: 600;
      color: white;
      margin-bottom: 2rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .analysis-cards-grid {
      display: grid;
      gap: 2rem;
    }
    
    /* Revenue Impact Section */
    .revenue-impact-grid {
      grid-template-columns: 2fr 1fr;
      gap: 2rem;
    }
    .revenue-main-card {
      background: linear-gradient(135deg, #2d3748, #1a202c);
      border-radius: 20px;
      padding: 2rem;
      border: 1px solid #4a5568;
    }
    .revenue-total {
      background: linear-gradient(135deg, #38a169, #2f855a);
      border-radius: 15px;
      padding: 2rem;
      text-align: center;
      color: white;
      margin-bottom: 2rem;
    }
    .revenue-total-label {
      font-size: 1rem;
      opacity: 0.9;
      margin-bottom: 0.5rem;
    }
    .revenue-total-value {
      font-size: 2.5rem;
      font-weight: 700;
    }
    .revenue-breakdown {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
    .revenue-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 0;
      border-bottom: 1px solid #4a5568;
      color: #e2e8f0;
    }
    .revenue-item:last-child {
      border-bottom: none;
    }
    .revenue-metrics-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
    .revenue-metric-card {
      background: linear-gradient(135deg, #2d3748, #1a202c);
      border-radius: 15px;
      padding: 1.5rem;
      text-align: center;
      color: white;
      border: 1px solid #4a5568;
    }
    .metric-label {
      font-size: 0.9rem;
      opacity: 0.8;
      margin-bottom: 0.5rem;
    }
    .metric-value {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 0.25rem;
    }
    .metric-description {
      font-size: 0.8rem;
      opacity: 0.7;
    }

    /* Productivity Transformation */
    .productivity-grid {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
    }
    .productivity-card {
      background: linear-gradient(135deg, #2d3748, #1a202c);
      border-radius: 20px;
      padding: 2rem;
      border: 1px solid #4a5568;
      color: white;
    }
    .productivity-card.time-value {
      border-left: 4px solid #4fd1c7;
    }
    .productivity-card.data-quality {
      border-left: 4px solid #9f7aea;
    }
    .productivity-card.communication {
      border-left: 4px solid #f6ad55;
    }
    .productivity-card.process-automation {
      border-left: 4px solid #68d391;
    }
    .productivity-title {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    .productivity-value {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: #4fd1c7;
    }
    .productivity-description {
      font-size: 0.9rem;
      opacity: 0.8;
      margin-bottom: 1rem;
    }
    .productivity-metric {
      font-size: 1.2rem;
      font-weight: 600;
      color: #f6ad55;
    }

    /* Revenue Generating Activity */
    .activity-grid {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    .activity-card {
      background: linear-gradient(135deg, #2d3748, #1a202c);
      border-radius: 20px;
      padding: 2rem;
      text-align: center;
      color: white;
      border: 1px solid #4a5568;
    }
    .activity-card.current {
      background: linear-gradient(135deg, #9f7aea, #805ad5);
    }
    .activity-card.after {
      background: linear-gradient(135deg, #38a169, #2f855a);
    }
    .activity-card.impact {
      background: linear-gradient(135deg, #f6ad55, #ed8936);
    }
    .activity-title {
      font-size: 1rem;
      opacity: 0.9;
      margin-bottom: 1rem;
    }
    .activity-value {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
    .activity-description {
      font-size: 0.9rem;
      opacity: 0.8;
    }
    .impact-formula {
      background: linear-gradient(135deg, #1a202c, #2d3748);
      border-radius: 15px;
      padding: 1.5rem;
      margin-top: 2rem;
      color: #e2e8f0;
      font-size: 0.9rem;
      line-height: 1.6;
    }

    .cta-section {
      text-align: center;
      background: linear-gradient(135deg, var(--accent-color), var(--accent-hover), #8b5cf6);
      border-radius: 20px;
      padding: 3rem;
      color: white;
      position: relative;
      overflow: hidden;
    }
    .cta-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%), 
                  linear-gradient(-45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%);
      background-size: 30px 30px;
      opacity: 0.1;
    }
    .cta-title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
      position: relative;
      z-index: 1;
    }
    .cta-text {
      font-size: 1.1rem;
      margin-bottom: 2rem;
      opacity: 0.9;
      position: relative;
      z-index: 1;
    }
    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
      position: relative;
      z-index: 1;
    }
    .cta-btn {
      background: white;
      color: var(--accent-color);
      border: none;
      border-radius: 12px;
      padding: 1rem 2rem;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
    .cta-btn:hover {
      background: var(--primary-bg);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }
    .back-btn {
      background: transparent;
      color: white;
      border: 2px solid white;
    }
    .back-btn:hover {
      background: white;
      color: var(--accent-color);
    }
    
    @media (max-width: 1024px) {
      .revenue-impact-grid {
        grid-template-columns: 1fr;
      }
      .productivity-grid {
        grid-template-columns: 1fr 1fr;
      }
      .revenue-breakdown {
        grid-template-columns: 1fr;
      }
      .revenue-metrics-grid {
        grid-template-columns: 1fr;
      }
    }
    @media (max-width: 768px) {
      .calculator-title {
        font-size: 2rem;
      }
      .roles-grid {
        grid-template-columns: 1fr;
      }
      .role-inputs {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
      .general-inputs {
        grid-template-columns: 1fr;
      }
      .kpi-grid {
        grid-template-columns: 1fr;
      }
      .productivity-grid {
        grid-template-columns: 1fr;
      }
      .activity-grid {
        grid-template-columns: 1fr;
      }
      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }
    }
  `;

  if (showResults && results) {
    return (
      <div className="roi-calculator">
        <style>{styles}</style>
        <div className="calculator-container">
          <div className="calculator-header">
            <h1 className="calculator-title">Your AI-Powered Future</h1>
            <p className="calculator-subtitle">
              Here's how Straits solutions can transform your business operations and drive significant ROI.
            </p>
          </div>

          <div className="results-section">
            {/* KPI Cards - Top Row */}
            <div className="kpi-grid">
              <div className="kpi-card time-reclaimed">
                <div className="kpi-icon">⏰</div>
                <div className="kpi-label">Time Reclaimed</div>
                <div className="kpi-value">{results.timeReclaimed.toLocaleString()}</div>
                <div className="kpi-description">hours annually</div>
              </div>
              <div className="kpi-card fte-equivalent">
                <div className="kpi-icon">👥</div>
                <div className="kpi-label">FTE Equivalent</div>
                <div className="kpi-value">{results.fteEquivalent}</div>
                <div className="kpi-description">full-time employees</div>
              </div>
              <div className="kpi-card roi">
                <div className="kpi-icon">📈</div>
                <div className="kpi-label">ROI</div>
                <div className="kpi-value">{results.annualROI}%</div>
                <div className="kpi-description">return on investment</div>
              </div>
              <div className="kpi-card payback">
                <div className="kpi-icon">⚡</div>
                <div className="kpi-label">Payback</div>
                <div className="kpi-value">{results.paybackPeriodDays}</div>
                <div className="kpi-description">days to payback</div>
              </div>
            </div>

            {/* Revenue Impact Section */}
            <div className="analysis-section">
              <h2 className="analysis-section-title">💰 Revenue Impact</h2>
              <div className="analysis-cards-grid revenue-impact-grid">
                <div className="revenue-main-card">
                  <div className="revenue-total">
                    <div className="revenue-total-label">Total Annual Impact</div>
                    <div className="revenue-total-value">RM{results.revenueImpactDetails.totalAnnualImpact.toLocaleString()}</div>
                  </div>
                  <div className="revenue-breakdown">
                    <div className="revenue-item">
                      <span>Deal Acceleration</span>
                      <span>RM{results.revenueImpactDetails.dealAcceleration.toLocaleString()}</span>
                    </div>
                    <div className="revenue-item">
                      <span>Win Rate</span>
                      <span>RM{results.revenueImpactDetails.winRate.toLocaleString()}</span>
                    </div>
                    <div className="revenue-item">
                      <span>Retention</span>
                      <span>RM{results.revenueImpactDetails.retention.toLocaleString()}</span>
                    </div>
                    <div className="revenue-item">
                      <span>Activity Focus</span>
                      <span>RM{results.revenueImpactDetails.activityFocus.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <div className="revenue-metrics-grid">
                  <div className="revenue-metric-card">
                    <div className="metric-label">Deal Cycle Reduction</div>
                    <div className="metric-value">{results.revenueImpactDetails.dealCycleReduction} days</div>
                    <div className="metric-description">{results.revenueImpactDetails.moreDealsPerYear} more deals/year</div>
                  </div>
                  <div className="revenue-metric-card">
                    <div className="metric-label">Win Rate Improvement</div>
                    <div className="metric-value">+{results.revenueImpactDetails.winRateImprovement}%</div>
                    <div className="metric-description">{results.revenueImpactDetails.moreWinsPerYear} more wins/year</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Productivity Transformation Section */}
            <div className="analysis-section">
              <h2 className="analysis-section-title">⏰ Productivity Transformation</h2>
              <div className="analysis-cards-grid productivity-grid">
                <div className="productivity-card time-value">
                  <div className="productivity-title">Time Value Recaptured</div>
                  <div className="productivity-value">RM{results.productivityTransformation.timeValueRecaptured.toLocaleString()}</div>
                  <div className="productivity-description">annually across your team</div>
                </div>
                <div className="productivity-card data-quality">
                  <div className="productivity-title">Data Quality Enhancement</div>
                  <div className="productivity-value">RM{results.productivityTransformation.dataQualityEnhancement.toLocaleString()}</div>
                  <div className="productivity-description">Automated CRM & data processes</div>
                  <div className="productivity-metric">+{results.productivityTransformation.accuracyImprovement}% accuracy</div>
                </div>
                <div className="productivity-card communication">
                  <div className="productivity-title">Communication Acceleration</div>
                  <div className="productivity-value">RM{results.productivityTransformation.communicationAcceleration.toLocaleString()}</div>
                  <div className="productivity-description">Automated workflows & alerts</div>
                  <div className="productivity-metric">{results.productivityTransformation.fasterCycles}% faster cycles</div>
                </div>
                <div className="productivity-card process-automation">
                  <div className="productivity-title">Process Automation</div>
                  <div className="productivity-value">RM{results.productivityTransformation.processAutomation.toLocaleString()}</div>
                  <div className="productivity-description">Intelligent task management</div>
                  <div className="productivity-metric">{results.productivityTransformation.lessChurn}% less churn</div>
                </div>
              </div>
            </div>

            {/* Revenue Generating Activity Enhancement */}
            <div className="analysis-section">
              <h2 className="analysis-section-title">🎯 Revenue Generating Activity Enhancement</h2>
              <div className="analysis-cards-grid activity-grid">
                <div className="activity-card current">
                  <div className="activity-title">Current Activity Time</div>
                  <div className="activity-value">{results.revenueGeneratingActivity.currentActivityTime}%</div>
                  <div className="activity-description">of work time</div>
                </div>
                <div className="activity-card after">
                  <div className="activity-title">After Momentum</div>
                  <div className="activity-value">{results.revenueGeneratingActivity.afterMomentum}%</div>
                  <div className="activity-description">conservative estimate</div>
                </div>
                <div className="activity-card impact">
                  <div className="activity-title">Revenue Impact</div>
                  <div className="activity-value">+{results.revenueGeneratingActivity.revenueImpactPercent}%</div>
                  <div className="activity-description">RM{results.revenueGeneratingActivity.annualRevenueIncrease.toLocaleString()} annually</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="cta-section">
              <h2 className="cta-title">Ready to Start Your AI Journey?</h2>
              <p className="cta-text">
                Transform these projections into reality with Straits AI. Our expert team is ready to help you implement 
                these solutions and achieve the ROI you've just calculated.
              </p>
              <div className="cta-buttons">
                <button className="cta-btn">Schedule Free Consultation</button>
                <button className="cta-btn">Request Personalized Demo</button>
                <button className="cta-btn back-btn" onClick={resetCalculator}>
                  Calculate Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="roi-calculator">
      <style>{styles}</style>
      <div className="calculator-container">
        <div className="calculator-header">
          <h1 className="calculator-title">Discover Your AI Potential</h1>
          <p className="calculator-subtitle">
            Calculate the potential return on investment from implementing Straits AI solutions in your organization.
          </p>
        </div>

        {/* Employee Roles Section - Fixed Three Roles */}
        <div className="input-section">
          <h2 className="section-title">👥 Employee Configuration</h2>
          <div className="roles-grid">
            {inputs.roles.map((role) => (
              <div key={role.id} className="role-card">
                <div className="role-header">
                  <span className="role-icon">{role.icon}</span>
                  <h3 className="role-title">{role.role}</h3>
                </div>
                <p className="role-description">{role.description}</p>
                <div className="role-inputs">
                  <div className="input-group">
                    <label className="input-label">Number of Employees</label>
                    <input
                      type="number"
                      className="input-field"
                      value={role.count}
                      min="1"
                      onChange={(e) => updateRole(role.id, 'count', parseInt(e.target.value) || 1)}
                    />
                  </div>
                  <div className="input-group">
                    <label className="input-label">Average Hourly Rate (MYR)</label>
                    <input
                      type="number"
                      className="input-field"
                      value={role.hourlyRate}
                      min="0"
                      onChange={(e) => updateRole(role.id, 'hourlyRate', parseFloat(e.target.value) || 0)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Business Metrics */}
        <div className="input-section">
          <h2 className="section-title">📊 Business Metrics</h2>
          <div className="general-inputs">
            <div className="slider-group">
              <label className="input-label">
                Win Ratio: <span className="slider-value">{inputs.winRatio}%</span>
              </label>
              <input
                type="range"
                className="slider"
                min="5"
                max="80"
                value={inputs.winRatio}
                onChange={(e) => setInputs(prev => ({ ...prev, winRatio: parseInt(e.target.value) }))}
              />
            </div>
            <div className="input-group">
              <label className="input-label">Average Deal Size (MYR)</label>
              <input
                type="number"
                className="input-field"
                value={inputs.averageDealSize}
                min="0"
                onChange={(e) => setInputs(prev => ({ ...prev, averageDealSize: parseFloat(e.target.value) || 0 }))}
              />
            </div>
            <div className="input-group">
              <label className="input-label">Current Deals Per Month</label>
              <input
                type="number"
                className="input-field"
                value={inputs.currentDealsPerMonth}
                min="0"
                onChange={(e) => setInputs(prev => ({ ...prev, currentDealsPerMonth: parseInt(e.target.value) || 0 }))}
              />
            </div>
          </div>
        </div>

        {/* Time Allocation Section - Per Staff */}
        <div className="input-section">
          <h2 className="section-title">⏱️ Weekly Time Allocation (Per Staff)</h2>
          <div className="general-inputs">
            <div className="slider-group">
              <label className="input-label">
                Manual Outreach: <span className="slider-value">{inputs.manualOutreachHours} hrs/week</span>
              </label>
              <input
                type="range"
                className="slider"
                min="0"
                max="30"
                value={inputs.manualOutreachHours}
                onChange={(e) => setInputs(prev => ({ ...prev, manualOutreachHours: parseInt(e.target.value) }))}
              />
            </div>
            <div className="slider-group">
              <label className="input-label">
                Customer Support: <span className="slider-value">{inputs.customerSupportHours} hrs/week</span>
              </label>
              <input
                type="range"
                className="slider"
                min="0"
                max="30"
                value={inputs.customerSupportHours}
                onChange={(e) => setInputs(prev => ({ ...prev, customerSupportHours: parseInt(e.target.value) }))}
              />
            </div>
            <div className="slider-group">
              <label className="input-label">
                Document Processing: <span className="slider-value">{inputs.documentProcessingHours} hrs/week</span>
              </label>
              <input
                type="range"
                className="slider"
                min="0"
                max="30"
                value={inputs.documentProcessingHours}
                onChange={(e) => setInputs(prev => ({ ...prev, documentProcessingHours: parseInt(e.target.value) }))}
              />
            </div>
          </div>
        </div>

        {/* Enhanced Performance Metrics */}
        <div className="input-section">
          <h2 className="section-title">🎯 Current Performance Metrics</h2>
          <div className="general-inputs">
            <div className="slider-group">
              <label className="input-label">
                Average Response Time: <span className="slider-value">{inputs.averageResponseTime} hours</span>
              </label>
              <input
                type="range"
                className="slider"
                min="1"
                max="72"
                value={inputs.averageResponseTime}
                onChange={(e) => setInputs(prev => ({ ...prev, averageResponseTime: parseInt(e.target.value) }))}
              />
            </div>
            <div className="slider-group">
              <label className="input-label">
                Customer Satisfaction: <span className="slider-value">{inputs.customerSatisfactionScore}%</span>
              </label>
              <input
                type="range"
                className="slider"
                min="30"
                max="100"
                value={inputs.customerSatisfactionScore}
                onChange={(e) => setInputs(prev => ({ ...prev, customerSatisfactionScore: parseInt(e.target.value) }))}
              />
            </div>
            <div className="slider-group">
              <label className="input-label">
                Data Processing Accuracy: <span className="slider-value">{inputs.dataProcessingAccuracy}%</span>
              </label>
              <input
                type="range"
                className="slider"
                min="50"
                max="100"
                value={inputs.dataProcessingAccuracy}
                onChange={(e) => setInputs(prev => ({ ...prev, dataProcessingAccuracy: parseInt(e.target.value) }))}
              />
            </div>
            <div className="slider-group">
              <label className="input-label">
                Employee Productivity Loss: <span className="slider-value">{inputs.employeeProductivityLoss}%</span>
              </label>
              <input
                type="range"
                className="slider"
                min="0"
                max="50"
                value={inputs.employeeProductivityLoss}
                onChange={(e) => setInputs(prev => ({ ...prev, employeeProductivityLoss: parseInt(e.target.value) }))}
              />
            </div>
          </div>
        </div>

        <button className="calculate-btn" onClick={calculateROI}>
          Calculate Your Impact 🚀
        </button>
      </div>
    </div>
  );
};

export default ROICalculatorPage; 