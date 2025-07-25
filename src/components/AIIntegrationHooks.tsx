import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AIService {
  generateSuggestions: (context: string, userInput: string) => Promise<string[]>;
  explainQuality: (deliverable: any, requirements: string) => Promise<string>;
  chatAssistant: (message: string, context?: any) => Promise<string>;
}

interface AIContextType {
  aiService: AIService | null;
  isAIEnabled: boolean;
  enableAI: (service: AIService) => void;
  disableAI: () => void;
}

const AIContext = createContext<AIContextType | undefined>(undefined);

// Mock AI Service for demonstration
const mockAIService: AIService = {
  generateSuggestions: async (context: string, userInput: string) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const suggestions = {
      'video-review': [
        'Check video resolution matches specification (1080p)',
        'Verify audio quality and synchronization',
        'Ensure no unauthorized watermarks are present',
        'Confirm video duration meets requirements',
        'Review content against original brief'
      ],
      'project-requirements': [
        'Define clear deliverable specifications',
        'Set realistic timeline expectations',
        'Include quality benchmarks',
        'Specify file formats and technical requirements'
      ],
      'dispute-resolution': [
        'Document specific issues with evidence',
        'Reference original project requirements',
        'Provide constructive feedback for resolution',
        'Consider partial approval for completed elements'
      ]
    };
    
    return suggestions[context as keyof typeof suggestions] || [
      'AI suggestion based on your input',
      'Consider reviewing the requirements',
      'Check for quality standards compliance'
    ];
  },

  explainQuality: async (deliverable: any, requirements: string) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return `Based on the analysis of your deliverable against the specified requirements, here are the key quality indicators:

• **Technical Compliance**: The video meets the specified format and resolution requirements
• **Content Alignment**: The deliverable aligns well with the project brief and objectives
• **Quality Standards**: Audio and visual quality are within acceptable parameters
• **Completeness**: All requested elements appear to be included

Recommendation: The deliverable meets the quality standards for approval. Consider any minor revisions if needed before final approval.`;
  },

  chatAssistant: async (message: string, context?: any) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const responses = [
      "I can help you with that. Based on your project requirements, here's what I recommend...",
      "Let me analyze your situation and provide some guidance...",
      "That's a great question. Here's how you can approach this...",
      "I understand your concern. Let me help you resolve this..."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  }
};

export const AIProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [aiService, setAIService] = useState<AIService | null>(mockAIService);
  const [isAIEnabled, setIsAIEnabled] = useState(true);

  const enableAI = (service: AIService) => {
    setAIService(service);
    setIsAIEnabled(true);
  };

  const disableAI = () => {
    setIsAIEnabled(false);
  };

  return (
    <AIContext.Provider value={{ aiService, isAIEnabled, enableAI, disableAI }}>
      {children}
    </AIContext.Provider>
  );
};

export const useAI = () => {
  const context = useContext(AIContext);
  if (context === undefined) {
    throw new Error('useAI must be used within an AIProvider');
  }
  return context;
};

// Hook for AI-powered suggestions
export const useAISuggestions = () => {
  const { aiService, isAIEnabled } = useAI();
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const generateSuggestions = async (context: string, userInput: string) => {
    if (!aiService || !isAIEnabled) return [];
    
    setIsLoading(true);
    try {
      const result = await aiService.generateSuggestions(context, userInput);
      setSuggestions(result);
      return result;
    } catch (error) {
      console.error('AI suggestion error:', error);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  return { generateSuggestions, suggestions, isLoading };
};

// Hook for AI quality explanation
export const useAIQualityExplainer = () => {
  const { aiService, isAIEnabled } = useAI();
  const [isLoading, setIsLoading] = useState(false);
  const [explanation, setExplanation] = useState<string>('');

  const explainQuality = async (deliverable: any, requirements: string) => {
    if (!aiService || !isAIEnabled) return '';
    
    setIsLoading(true);
    try {
      const result = await aiService.explainQuality(deliverable, requirements);
      setExplanation(result);
      return result;
    } catch (error) {
      console.error('AI quality explanation error:', error);
      return '';
    } finally {
      setIsLoading(false);
    }
  };

  return { explainQuality, explanation, isLoading };
};

// Hook for AI chat assistant
export const useAIChatAssistant = () => {
  const { aiService, isAIEnabled } = useAI();
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Array<{id: string, text: string, sender: 'user' | 'ai'}>>([]);

  const sendMessage = async (message: string, context?: any) => {
    if (!aiService || !isAIEnabled) return;
    
    const userMessage = {
      id: Date.now().toString(),
      text: message,
      sender: 'user' as const
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    try {
      const response = await aiService.chatAssistant(message, context);
      const aiMessage = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'ai' as const
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('AI chat error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { sendMessage, messages, isLoading };
};

export default AIProvider;