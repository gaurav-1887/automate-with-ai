import {
  Cpu,
  Globe,
  Sparkles,
  Terminal,
  Database,
  Shield,
} from "lucide-react";

export const servicesData = [
  {
    id: 'ai-automation',
    title: 'AI & AUTOMATION',
    icon: <Cpu style={{ width: '28px', height: '28px', color: '#1e50ff' }} />,
    points: [
      'AI Automation',
      'Chatbot Development',
      'Workflow Automation',
      'AI Tools Setup',
      'API Integrations'
    ],
    projects: [
      {
        title: 'Automated Invoice Processing Bot',
        desc: 'An AI engine that extracts data from PDF receipts and updates accounting software instantly.',
        tags: ['Python', 'OpenAI API']
      },
      {
        title: 'Customer Support Lead Generator',
        desc: 'Smart AI agent deployed on WhatsApp converting cold queries into booked calendar meetings.',
        tags: ['Chatbot', 'Node.js']
      }
    ]
  },

  {
    id: 'web-dashboards',
    title: 'WEBSITE & DASHBOARDS',
    icon: <Globe style={{ width: '28px', height: '28px', color: '#1e50ff' }} />,
    points: [
      'Website Development',
      'Custom Web Applications',
      'Dashboard Development',
      'Admin Panels',
      'E-Commerce Solutions'
    ],
    projects: [
      {
        title: 'Crypto Portfolio Tracking Dashboard',
        desc: 'A real-time metrics tracking dashboard with high-fidelity analytics viewports.',
        tags: ['React.js', 'Tailwind']
      },
      {
        title: 'Premium SaaS Landing Page Template',
        desc: 'SEO-optimized, ultra-fast tech agency promotional single-page application.',
        tags: ['Vite', 'SEO Optimized']
      }
    ]
  },

  {
    id: 'content-design',
    title: 'CONTENT & DESIGN',
    icon: <Sparkles style={{ width: '28px', height: '28px', color: '#1e50ff' }} />,
    points: [
      'AI Content Creation',
      'Social Media Design',
      'Logo & Branding',
      'Tech Reels Editing',
      'Presentation Design'
    ],
    projects: [
      {
        title: 'Brand Identity Pack',
        desc: 'High-fidelity logo variants, custom graphic assets, and short-form video master setups.',
        tags: ['Branding', 'Graphics']
      }
    ]
  },

  {
    id: 'python-services',
    title: 'PYTHON SERVICES',
    icon: <Terminal style={{ width: '28px', height: '28px', color: '#1e50ff' }} />,
    points: [
      'Python Automation',
      'Web Scraping',
      'Data Processing',
      'Bot Development',
      'API Development'
    ],
    projects: [
      {
        title: 'Real Estate Price Scraper Engine',
        desc: 'Automated data pipeline scraping commercial listings hourly and compiling them into clean sheets.',
        tags: ['Python', 'BeautifulSoup']
      }
    ]
  },

  {
    id: 'data-science',
    title: 'DATA SCIENCE',
    icon: <Database style={{ width: '28px', height: '28px', color: '#1e50ff' }} />,
    points: [
      'Machine Learning (ML)',
      'Data Analysis',
      'Predictive Modeling',
      'Data Visualization',
      'Deep Learning',
      'AI Model Development'
    ],
    projects: [
      {
        title: 'E-Commerce Churn Prediction System',
        desc: 'Machine Learning algorithm forecasting buyer drop-offs based on navigation habits.',
        tags: ['ML', 'Scikit-Learn']
      }
    ]
  },

  {
    id: 'salesforce-crm',
    title: 'SALESFORCE CRM SOLUTIONS',
    icon: <Shield style={{ width: '28px', height: '28px', color: '#1e50ff' }} />,
    points: [
      'Salesforce CRM Setup',
      'Customization & Configuration',
      'Workflow Automation',
      'Integration & API Setup',
      'Reports & Dashboards',
      'Sales & Customer Support',
      'Data Management'
    ],
    projects: [
      {
        title: 'Enterprise Hub CRM Optimization',
        desc: 'Configured deep sales metrics pipeline, customized objects, and linked automated team alert relays.',
        tags: ['Salesforce', 'API Setup']
      }
    ]
  }
];