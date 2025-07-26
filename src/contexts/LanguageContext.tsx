import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (language: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.explore': 'Explore',
    'nav.howItWorks': 'How it works',
    'nav.faqs': 'FAQs',
    'nav.contact': 'Contact us',
    'nav.asFreelancer': 'As a Freelancer',
    'nav.asClient': 'As a Client',
    'nav.productDemo': 'Product Demo',
    'nav.testimonials': 'Testimonials',
    'nav.support': 'Support',
    'nav.roadmap': 'Roadmap',
    'nav.blog': 'Blog',
    'nav.login': 'Login',
    'nav.changeLanguage': 'Change Language',
    
    // Hero Section
    'hero.title': "India's First AI-Powered Escrow Platform for Freelancers & Clients",
    'hero.subtitle': 'Protect your work. Pursue your worth.',
    'hero.startTrial': 'Start Free Trial',
    'hero.watchDemo': 'Watch Demo',
    'hero.happyCustomers': 'Happy Customers',
    'hero.successfulClosures': 'Successful Closures',
    
    // Onboarding
    'onboarding.welcome': 'Welcome to SecureServe!',
    'onboarding.getStarted': 'Get Started',
    'onboarding.skipTour': 'Skip Tour',
    'onboarding.next': 'Next',
    'onboarding.previous': 'Previous',
    'onboarding.finish': 'Finish',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.confirm': 'Confirm',
    
    // Contact Us Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with our team for support, partnerships, or general inquiries',
    'contact.backToHome': 'Back to Home',
    'contact.sendMessage': 'Send us a Message',
    'contact.userType': 'I am a',
    'contact.client': 'Client',
    'contact.freelancer': 'Freelancer',
    'contact.fullName': 'Full Name',
    'contact.email': 'Email Address',
    'contact.company': 'Company/Organization',
    'contact.phone': 'Phone Number',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.submit': 'Send Message',
    'contact.getInTouch': 'Get in Touch',
    'contact.ourOffices': 'Our Offices',
    'contact.businessHours': 'Business Hours',
    'contact.phoneSupport': 'Phone Support',
    'contact.emailSupport': 'Email Support',
    'contact.liveChat': 'Live Chat',
    'contact.successMessage': 'Thank you! Your message has been sent successfully. We\'ll get back to you within 4-6 hours.',
    
    // Benefits Section
    'benefits.title': 'Say goodbye to...',
    'benefits.subjectiveDisputes': 'Subjective quality disputes',
    'benefits.endlessRevisions': 'Endless revision delaying your payment',
    'benefits.unpredictablePayments': 'Unpredictable payment schedules',
    
    // SecureServe Benefits
    'secureServe.title': 'Switch to SecureServe',
    'secureServe.subtitle': 'Your AI-Powered Payment Guardian',
    'secureServe.smartContracts': 'Smart Contracts',
    'secureServe.smartContractsDesc': 'AI helps create clear, detailed project specifications that protect both parties and set clear expectations from the start.',
    'secureServe.secureEscrow': 'Secure Escrow System',
    'secureServe.secureEscrowDesc': 'Money is held safely in escrow until work is approved. Complete protection for both freelancers and clients throughout the project.',
    'secureServe.aiVerified': 'AI-Verified Deliverables',
    'secureServe.aiVerifiedDesc': 'Advanced AI instantly verifies if your work matches client requirements, eliminating subjective disputes and ensuring fair evaluation.',
    'secureServe.instantPayments': 'Instant Payments',
    'secureServe.instantPaymentsDesc': 'Once AI confirms work quality meets specifications, payments are transferred instantly to your account without delays.',
    
    // How It Works
    'howItWorks.title': 'How SecureServe Works',
    'howItWorks.subtitle': 'Simple, secure, and powered by AI to protect both freelancers and clients',
    
    // FAQs
    'faqs.title': 'Everything you need to know',
    'faqs.subtitle': 'Got questions? We\'ve got answers. Learn more about how SecureServe works and how it can benefit you.',
    
    // Footer
    'footer.company': 'SecureServe',
    'footer.description': 'India\'s first AI-powered escrow platform for freelancers and clients. Secure payments, verified deliverables.',
    'footer.contactUs': 'Contact Us',
    'footer.businessHours': 'Business Hours',
    'footer.copyright': '© 2025 SecureServe. Built for Indian freelancers, by Indian freelancers.',
  },
  es: {
    // Navigation
    'nav.explore': 'Explorar',
    'nav.howItWorks': 'Cómo funciona',
    'nav.faqs': 'Preguntas frecuentes',
    'nav.contact': 'Contáctanos',
    'nav.asFreelancer': 'Como Freelancer',
    'nav.asClient': 'Como Cliente',
    'nav.productDemo': 'Demo del Producto',
    'nav.testimonials': 'Testimonios',
    'nav.support': 'Soporte',
    'nav.roadmap': 'Hoja de Ruta',
    'nav.blog': 'Blog',
    'nav.login': 'Iniciar Sesión',
    'nav.changeLanguage': 'Cambiar Idioma',
    
    // Hero Section
    'hero.title': 'La Primera Plataforma de Depósito en Garantía con IA de India para Freelancers y Clientes',
    'hero.subtitle': 'Protege tu trabajo. Persigue tu valor.',
    'hero.startTrial': 'Comenzar Prueba Gratuita',
    'hero.watchDemo': 'Ver Demo',
    'hero.happyCustomers': 'Clientes Felices',
    'hero.successfulClosures': 'Cierres Exitosos',
    
    // Benefits Section
    'benefits.title': 'Despídete de...',
    'benefits.subjectiveDisputes': 'Disputas subjetivas de calidad',
    'benefits.endlessRevisions': 'Revisiones infinitas que retrasan tu pago',
    'benefits.unpredictablePayments': 'Horarios de pago impredecibles',
    
    // SecureServe Benefits
    'secureServe.title': 'Cambia a SecureServe',
    'secureServe.subtitle': 'Tu Guardián de Pagos Impulsado por IA',
    'secureServe.smartContracts': 'Contratos Inteligentes',
    'secureServe.smartContractsDesc': 'La IA ayuda a crear especificaciones de proyecto claras y detalladas que protegen a ambas partes y establecen expectativas claras desde el inicio.',
    'secureServe.secureEscrow': 'Sistema de Depósito Seguro',
    'secureServe.secureEscrowDesc': 'El dinero se mantiene seguro en depósito hasta que el trabajo sea aprobado. Protección completa para freelancers y clientes durante todo el proyecto.',
    'secureServe.aiVerified': 'Entregables Verificados por IA',
    'secureServe.aiVerifiedDesc': 'La IA avanzada verifica instantáneamente si tu trabajo coincide con los requisitos del cliente, eliminando disputas subjetivas y asegurando una evaluación justa.',
    'secureServe.instantPayments': 'Pagos Instantáneos',
    'secureServe.instantPaymentsDesc': 'Una vez que la IA confirma que la calidad del trabajo cumple con las especificaciones, los pagos se transfieren instantáneamente a tu cuenta sin demoras.',
    
    // How It Works
    'howItWorks.title': 'Cómo Funciona SecureServe',
    'howItWorks.subtitle': 'Simple, seguro y potenciado por IA para proteger tanto a freelancers como a clientes',
    
    // FAQs
    'faqs.title': 'Todo lo que necesitas saber',
    'faqs.subtitle': '¿Tienes preguntas? Tenemos respuestas. Aprende más sobre cómo funciona SecureServe y cómo puede beneficiarte.',
    
    // Contact Us Page
    'contact.title': 'Contáctanos',
    'contact.subtitle': 'Ponte en contacto con nuestro equipo para soporte, asociaciones o consultas generales',
    'contact.backToHome': 'Volver al Inicio',
    'contact.sendMessage': 'Envíanos un Mensaje',
    'contact.userType': 'Soy un',
    'contact.client': 'Cliente',
    'contact.freelancer': 'Freelancer',
    'contact.fullName': 'Nombre Completo',
    'contact.email': 'Dirección de Email',
    'contact.company': 'Empresa/Organización',
    'contact.phone': 'Número de Teléfono',
    'contact.subject': 'Asunto',
    'contact.message': 'Mensaje',
    'contact.submit': 'Enviar Mensaje',
    'contact.getInTouch': 'Ponte en Contacto',
    'contact.ourOffices': 'Nuestras Oficinas',
    'contact.businessHours': 'Horario Comercial',
    'contact.phoneSupport': 'Soporte Telefónico',
    'contact.emailSupport': 'Soporte por Email',
    'contact.liveChat': 'Chat en Vivo',
    'contact.successMessage': '¡Gracias! Tu mensaje ha sido enviado exitosamente. Te responderemos dentro de 4-6 horas.',
    
    // Footer
    'footer.company': 'SecureServe',
    'footer.description': 'La primera plataforma de depósito en garantía con IA de India para freelancers y clientes. Pagos seguros, entregables verificados.',
    'footer.contactUs': 'Contáctanos',
    'footer.businessHours': 'Horario Comercial',
    'footer.copyright': '© 2025 SecureServe. Construido para freelancers indios, por freelancers indios.',
  },
  fr: {
    // Navigation
    'nav.explore': 'Explorer',
    'nav.howItWorks': 'Comment ça marche',
    'nav.faqs': 'FAQ',
    'nav.contact': 'Nous contacter',
    'nav.asFreelancer': 'En tant que Freelancer',
    'nav.asClient': 'En tant que Client',
    'nav.productDemo': 'Démo du Produit',
    'nav.testimonials': 'Témoignages',
    'nav.support': 'Support',
    'nav.roadmap': 'Feuille de Route',
    'nav.blog': 'Blog',
    'nav.login': 'Se Connecter',
    'nav.changeLanguage': 'Changer de Langue',
    
    // Hero Section
    'hero.title': 'La Première Plateforme d\'Entiercement Alimentée par IA d\'Inde pour Freelancers et Clients',
    'hero.subtitle': 'Protégez votre travail. Poursuivez votre valeur.',
    'hero.startTrial': 'Commencer l\'Essai Gratuit',
    'hero.watchDemo': 'Voir la Démo',
    'hero.happyCustomers': 'Clients Satisfaits',
    'hero.successfulClosures': 'Clôtures Réussies',
    
    // Benefits Section
    'benefits.title': 'Dites adieu à...',
    'benefits.subjectiveDisputes': 'Disputes subjectives de qualité',
    'benefits.endlessRevisions': 'Révisions infinies retardant votre paiement',
    'benefits.unpredictablePayments': 'Horaires de paiement imprévisibles',
    
    // SecureServe Benefits
    'secureServe.title': 'Passez à SecureServe',
    'secureServe.subtitle': 'Votre Gardien de Paiements Alimenté par IA',
    'secureServe.smartContracts': 'Contrats Intelligents',
    'secureServe.smartContractsDesc': 'L\'IA aide à créer des spécifications de projet claires et détaillées qui protègent les deux parties et établissent des attentes claires dès le début.',
    'secureServe.secureEscrow': 'Système d\'Entiercement Sécurisé',
    'secureServe.secureEscrowDesc': 'L\'argent est conservé en sécurité en entiercement jusqu\'à ce que le travail soit approuvé. Protection complète pour les freelancers et les clients tout au long du projet.',
    'secureServe.aiVerified': 'Livrables Vérifiés par IA',
    'secureServe.aiVerifiedDesc': 'L\'IA avancée vérifie instantanément si votre travail correspond aux exigences du client, éliminant les disputes subjectives et assurant une évaluation équitable.',
    'secureServe.instantPayments': 'Paiements Instantanés',
    'secureServe.instantPaymentsDesc': 'Une fois que l\'IA confirme que la qualité du travail répond aux spécifications, les paiements sont transférés instantanément sur votre compte sans délais.',
    
    // How It Works
    'howItWorks.title': 'Comment Fonctionne SecureServe',
    'howItWorks.subtitle': 'Simple, sécurisé et alimenté par IA pour protéger à la fois les freelancers et les clients',
    
    // FAQs
    'faqs.title': 'Tout ce que vous devez savoir',
    'faqs.subtitle': 'Vous avez des questions ? Nous avons des réponses. Apprenez-en plus sur le fonctionnement de SecureServe et comment cela peut vous bénéficier.',
    
    // Contact Us Page
    'contact.title': 'Nous Contacter',
    'contact.subtitle': 'Contactez notre équipe pour le support, les partenariats ou les demandes générales',
    'contact.backToHome': 'Retour à l\'Accueil',
    'contact.sendMessage': 'Envoyez-nous un Message',
    'contact.userType': 'Je suis un',
    'contact.client': 'Client',
    'contact.freelancer': 'Freelancer',
    'contact.fullName': 'Nom Complet',
    'contact.email': 'Adresse Email',
    'contact.company': 'Entreprise/Organisation',
    'contact.phone': 'Numéro de Téléphone',
    'contact.subject': 'Sujet',
    'contact.message': 'Message',
    'contact.submit': 'Envoyer le Message',
    'contact.getInTouch': 'Entrer en Contact',
    'contact.ourOffices': 'Nos Bureaux',
    'contact.businessHours': 'Heures d\'Ouverture',
    'contact.phoneSupport': 'Support Téléphonique',
    'contact.emailSupport': 'Support par Email',
    'contact.liveChat': 'Chat en Direct',
    'contact.successMessage': 'Merci ! Votre message a été envoyé avec succès. Nous vous répondrons dans les 4-6 heures.',
    
    // Footer
    'footer.company': 'SecureServe',
    'footer.description': 'La première plateforme d\'entiercement alimentée par IA d\'Inde pour freelancers et clients. Paiements sécurisés, livrables vérifiés.',
    'footer.contactUs': 'Nous Contacter',
    'footer.businessHours': 'Heures d\'Ouverture',
    'footer.copyright': '© 2025 SecureServe. Construit pour les freelancers indiens, par les freelancers indiens.',
    
    // Support
    'support.title': 'Centre de Support et d\'Aide',
    'support.subtitle': 'Obtenez de l\'aide quand vous en avez besoin avec plusieurs canaux de support et des voies d\'escalade claires',
    
    // Roadmap
    'roadmap.title': '製品ロードマップ',
    'roadmap.subtitle': '次に何が来るかを見て、ワークフローの機能をリクエスト',
    
    // Roadmap
    'roadmap.title': 'उत्पाद रोडमैप',
    'roadmap.subtitle': 'देखें कि आगे क्या आ रहा है और अपने वर्कफ़्लो के लिए सुविधाओं का अनुरोध करें',
    
    // Roadmap
    'roadmap.title': '产品路线图',
    'roadmap.subtitle': '查看即将推出的功能并为您的工作流程请求功能',
    
    // Roadmap
    'roadmap.title': 'Produkt-Roadmap',
    'roadmap.subtitle': 'Sehen Sie, was als nächstes kommt und fordern Sie Funktionen für Ihren Workflow an',
    
    // Roadmap
    'roadmap.title': 'Feuille de Route du Produit',
    'roadmap.subtitle': 'Voyez ce qui arrive ensuite et demandez des fonctionnalités pour votre flux de travail',
    
    // Roadmap
    'roadmap.title': 'Hoja de Ruta del Producto',
    'roadmap.subtitle': 'Ve lo que viene a continuación y solicita características para tu flujo de trabajo',
    
    // Roadmap
    'roadmap.title': 'Product Roadmap',
    'roadmap.subtitle': 'See what\'s coming next and request features for your workflow',
  },
  de: {
    // Navigation
    'nav.explore': 'Erkunden',
    'nav.howItWorks': 'Wie es funktioniert',
    'nav.faqs': 'FAQ',
    'nav.contact': 'Kontakt',
    'nav.asFreelancer': 'Als Freelancer',
    'nav.asClient': 'Als Kunde',
    'nav.productDemo': 'Produktdemo',
    'nav.testimonials': 'Testimonials',
    'nav.support': 'Support',
    'nav.roadmap': 'Roadmap',
    'nav.blog': 'Blog',
    'nav.login': 'Anmelden',
    'nav.changeLanguage': 'Sprache ändern',
    
    // Hero Section
    'hero.title': 'Indiens Erste KI-Gestützte Treuhand-Plattform für Freelancer und Kunden',
    'hero.subtitle': 'Schützen Sie Ihre Arbeit. Verfolgen Sie Ihren Wert.',
    'hero.startTrial': 'Kostenlose Testversion Starten',
    'hero.watchDemo': 'Demo Ansehen',
    'hero.happyCustomers': 'Zufriedene Kunden',
    'hero.successfulClosures': 'Erfolgreiche Abschlüsse',
    
    // Benefits Section
    'benefits.title': 'Verabschieden Sie sich von...',
    'benefits.subjectiveDisputes': 'Subjektive Qualitätsstreitigkeiten',
    'benefits.endlessRevisions': 'Endlose Überarbeitungen, die Ihre Zahlung verzögern',
    'benefits.unpredictablePayments': 'Unvorhersagbare Zahlungspläne',
    
    // SecureServe Benefits
    'secureServe.title': 'Wechseln Sie zu SecureServe',
    'secureServe.subtitle': 'Ihr KI-Gestützter Zahlungswächter',
    'secureServe.smartContracts': 'Intelligente Verträge',
    'secureServe.smartContractsDesc': 'KI hilft dabei, klare, detaillierte Projektspezifikationen zu erstellen, die beide Parteien schützen und von Anfang an klare Erwartungen setzen.',
    'secureServe.secureEscrow': 'Sicheres Treuhandsystem',
    'secureServe.secureEscrowDesc': 'Geld wird sicher in Treuhand gehalten, bis die Arbeit genehmigt wird. Vollständiger Schutz für Freelancer und Kunden während des gesamten Projekts.',
    'secureServe.aiVerified': 'KI-Verifizierte Lieferungen',
    'secureServe.aiVerifiedDesc': 'Fortgeschrittene KI überprüft sofort, ob Ihre Arbeit den Kundenanforderungen entspricht, eliminiert subjektive Streitigkeiten und gewährleistet faire Bewertung.',
    'secureServe.instantPayments': 'Sofortige Zahlungen',
    'secureServe.instantPaymentsDesc': 'Sobald die KI bestätigt, dass die Arbeitsqualität den Spezifikationen entspricht, werden Zahlungen sofort auf Ihr Konto ohne Verzögerungen übertragen.',
    
    // How It Works
    'howItWorks.title': 'Wie SecureServe Funktioniert',
    'howItWorks.subtitle': 'Einfach, sicher und KI-gestützt zum Schutz von Freelancern und Kunden',
    
    // FAQs
    'faqs.title': 'Alles was Sie wissen müssen',
    'faqs.subtitle': 'Haben Sie Fragen? Wir haben Antworten. Erfahren Sie mehr darüber, wie SecureServe funktioniert und wie es Ihnen nützen kann.',
    
    // Contact Us Page
    'contact.title': 'Kontaktieren Sie Uns',
    'contact.subtitle': 'Kontaktieren Sie unser Team für Support, Partnerschaften oder allgemeine Anfragen',
    'contact.backToHome': 'Zurück zur Startseite',
    'contact.sendMessage': 'Senden Sie uns eine Nachricht',
    'contact.userType': 'Ich bin ein',
    'contact.client': 'Kunde',
    'contact.freelancer': 'Freelancer',
    'contact.fullName': 'Vollständiger Name',
    'contact.email': 'E-Mail-Adresse',
    'contact.company': 'Unternehmen/Organisation',
    'contact.phone': 'Telefonnummer',
    'contact.subject': 'Betreff',
    'contact.message': 'Nachricht',
    'contact.submit': 'Nachricht Senden',
    'contact.getInTouch': 'Kontakt Aufnehmen',
    'contact.ourOffices': 'Unsere Büros',
    'contact.businessHours': 'Geschäftszeiten',
    'contact.phoneSupport': 'Telefon-Support',
    'contact.emailSupport': 'E-Mail-Support',
    'contact.liveChat': 'Live-Chat',
    'contact.successMessage': 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir werden Ihnen innerhalb von 4-6 Stunden antworten.',
    
    // Footer
    'footer.company': 'SecureServe',
    'footer.description': 'Indiens erste KI-gestützte Treuhand-Plattform für Freelancer und Kunden. Sichere Zahlungen, verifizierte Lieferungen.',
    'footer.contactUs': 'Kontaktieren Sie Uns',
    'footer.businessHours': 'Geschäftszeiten',
    'footer.copyright': '© 2025 SecureServe. Gebaut für indische Freelancer, von indischen Freelancern.',
  },
  zh: {
    // Navigation
    'nav.explore': '探索',
    'nav.howItWorks': '工作原理',
    'nav.faqs': '常见问题',
    'nav.contact': '联系我们',
    'nav.asFreelancer': '作为自由职业者',
    'nav.asClient': '作为客户',
    'nav.productDemo': '产品演示',
    'nav.testimonials': '推荐',
    'nav.support': '支持',
    'nav.roadmap': '路线图',
    'nav.blog': '博客',
    'nav.login': '登录',
    'nav.changeLanguage': '更改语言',
    
    // Hero Section
    'hero.title': '印度首个AI驱动的自由职业者和客户托管平台',
    'hero.subtitle': '保护您的工作。追求您的价值。',
    'hero.startTrial': '开始免费试用',
    'hero.watchDemo': '观看演示',
    'hero.happyCustomers': '满意客户',
    'hero.successfulClosures': '成功完成',
    
    // Benefits Section
    'benefits.title': '告别...',
    'benefits.subjectiveDisputes': '主观质量争议',
    'benefits.endlessRevisions': '延迟付款的无休止修订',
    'benefits.unpredictablePayments': '不可预测的付款时间表',
    
    // SecureServe Benefits
    'secureServe.title': '切换到SecureServe',
    'secureServe.subtitle': '您的AI驱动支付守护者',
    'secureServe.smartContracts': '智能合约',
    'secureServe.smartContractsDesc': 'AI帮助创建清晰、详细的项目规范，保护双方并从一开始就设定明确的期望。',
    'secureServe.secureEscrow': '安全托管系统',
    'secureServe.secureEscrowDesc': '资金安全地保存在托管中，直到工作获得批准。在整个项目期间为自由职业者和客户提供完整保护。',
    'secureServe.aiVerified': 'AI验证的交付成果',
    'secureServe.aiVerifiedDesc': '先进的AI立即验证您的工作是否符合客户要求，消除主观争议并确保公平评估。',
    'secureServe.instantPayments': '即时付款',
    'secureServe.instantPaymentsDesc': '一旦AI确认工作质量符合规范，付款将立即转入您的账户，无延迟。',
    
    // How It Works
    'howItWorks.title': 'SecureServe如何工作',
    'howItWorks.subtitle': '简单、安全，由AI驱动，保护自由职业者和客户',
    
    // FAQs
    'faqs.title': '您需要了解的一切',
    'faqs.subtitle': '有问题吗？我们有答案。了解更多关于SecureServe如何工作以及如何使您受益。',
    
    // Contact Us Page
    'contact.title': '联系我们',
    'contact.subtitle': '联系我们的团队获取支持、合作伙伴关系或一般咨询',
    'contact.backToHome': '返回首页',
    'contact.sendMessage': '给我们发消息',
    'contact.userType': '我是',
    'contact.client': '客户',
    'contact.freelancer': '自由职业者',
    'contact.fullName': '全名',
    'contact.email': '电子邮件地址',
    'contact.company': '公司/组织',
    'contact.phone': '电话号码',
    'contact.subject': '主题',
    'contact.message': '消息',
    'contact.submit': '发送消息',
    'contact.getInTouch': '联系',
    'contact.ourOffices': '我们的办公室',
    'contact.businessHours': '营业时间',
    'contact.phoneSupport': '电话支持',
    'contact.emailSupport': '电子邮件支持',
    'contact.liveChat': '在线聊天',
    'contact.successMessage': '谢谢！您的消息已成功发送。我们将在4-6小时内回复您。',
    
    // Footer
    'footer.company': 'SecureServe',
    'footer.description': '印度首个AI驱动的自由职业者和客户托管平台。安全付款，验证交付成果。',
    'footer.contactUs': '联系我们',
    'footer.businessHours': '营业时间',
    'footer.copyright': '© 2025 SecureServe。为印度自由职业者而建，由印度自由职业者建造。',
  },
  hi: {
    // Navigation
    'nav.explore': 'एक्सप्लोर करें',
    'nav.howItWorks': 'यह कैसे काम करता है',
    'nav.faqs': 'सामान्य प्रश्न',
    'nav.contact': 'संपर्क करें',
    'nav.asFreelancer': 'फ्रीलांसर के रूप में',
    'nav.asClient': 'क्लाइंट के रूप में',
    'nav.productDemo': 'प्रोडक्ट डेमो',
    'nav.testimonials': 'प्रशंसापत्र',
    'nav.support': 'सहायता',
    'nav.roadmap': 'रोडमैप',
    'nav.blog': 'ब्लॉग',
    'nav.login': 'लॉगिन',
    'nav.changeLanguage': 'भाषा बदलें',
    
    // Hero Section
    'hero.title': 'भारत का पहला AI-संचालित एस्क्रो प्लेटफॉर्म फ्रीलांसरों और क्लाइंट्स के लिए',
    'hero.subtitle': 'अपने काम की सुरक्षा करें। अपनी कीमत पाएं।',
    'hero.startTrial': 'मुफ्त ट्रायल शुरू करें',
    'hero.watchDemo': 'डेमो देखें',
    'hero.happyCustomers': 'खुश ग्राहक',
    'hero.successfulClosures': 'सफल समापन',
    
    // Onboarding
    'onboarding.welcome': 'SecureServe में आपका स्वागत है!',
    'onboarding.getStarted': 'शुरू करें',
    'onboarding.skipTour': 'टूर छोड़ें',
    'onboarding.next': 'अगला',
    'onboarding.previous': 'पिछला',
    'onboarding.finish': 'समाप्त',
    
    // Common
    'common.loading': 'लोड हो रहा है...',
    'common.error': 'त्रुटि',
    'common.success': 'सफलता',
    'common.cancel': 'रद्द करें',
    'common.save': 'सेव करें',
    'common.edit': 'संपादित करें',
    'common.delete': 'हटाएं',
    'common.confirm': 'पुष्टि करें',
    
    // Contact Us Page
    'contact.title': 'संपर्क करें',
    'contact.subtitle': 'सहायता, साझेदारी या सामान्य पूछताछ के लिए हमारी टीम से संपर्क करें',
    'contact.backToHome': 'होम पर वापस जाएं',
    'contact.sendMessage': 'हमें संदेश भेजें',
    'contact.userType': 'मैं हूं',
    'contact.client': 'क्लाइंट',
    'contact.freelancer': 'फ्रीलांसर',
    'contact.fullName': 'पूरा नाम',
    'contact.email': 'ईमेल पता',
    'contact.company': 'कंपनी/संगठन',
    'contact.phone': 'फोन नंबर',
    'contact.subject': 'विषय',
    'contact.message': 'संदेश',
    'contact.submit': 'संदेश भेजें',
    'contact.getInTouch': 'संपर्क में रहें',
    'contact.ourOffices': 'हमारे कार्यालय',
    'contact.businessHours': 'व्यावसायिक समय',
    'contact.phoneSupport': 'फोन सहायता',
    'contact.emailSupport': 'ईमेल सहायता',
    'contact.liveChat': 'लाइव चैट',
    'contact.successMessage': 'धन्यवाद! आपका संदेश सफलतापूर्वक भेजा गया है। हम 4-6 घंटों के भीतर आपसे संपर्क करेंगे।',
    
    // Benefits Section
    'benefits.title': 'अलविदा कहें...',
    'benefits.subjectiveDisputes': 'व्यक्तिगत गुणवत्ता विवाद',
    'benefits.endlessRevisions': 'अंतहीन संशोधन जो आपके भुगतान में देरी करते हैं',
    'benefits.unpredictablePayments': 'अप्रत्याशित भुगतान कार्यक्रम',
    
    // SecureServe Benefits
    'secureServe.title': 'SecureServe पर स्विच करें',
    'secureServe.subtitle': 'आपका AI-संचालित भुगतान संरक्षक',
    'secureServe.smartContracts': 'स्मार्ट कॉन्ट्रैक्ट्स',
    'secureServe.smartContractsDesc': 'AI स्पष्ट, विस्तृत परियोजना विनिर्देश बनाने में मदद करता है जो दोनों पक्षों की सुरक्षा करता है और शुरुआत से ही स्पष्ट अपेक्षाएं निर्धारित करता है।',
    'secureServe.secureEscrow': 'सुरक्षित एस्क्रो सिस्टम',
    'secureServe.secureEscrowDesc': 'काम स्वीकृत होने तक पैसा एस्क्रो में सुरक्षित रूप से रखा जाता है। पूरी परियोजना के दौरान फ्रीलांसरों और क्लाइंट्स दोनों के लिए पूर्ण सुरक्षा।',
    'secureServe.aiVerified': 'AI-सत्यापित डिलिवरेबल्स',
    'secureServe.aiVerifiedDesc': 'उन्नत AI तुरंत सत्यापित करता है कि आपका काम क्लाइंट की आवश्यकताओं से मेल खाता है, व्यक्तिगत विवादों को समाप्त करता है और निष्पक्ष मूल्यांकन सुनिश्चित करता है।',
    'secureServe.instantPayments': 'तत्काल भुगतान',
    'secureServe.instantPaymentsDesc': 'एक बार AI काम की गुणवत्ता की पुष्टि करता है कि यह विनिर्देशों को पूरा करता है, भुगतान तुरंत आपके खाते में स्थानांतरित हो जाता है।',
    
    // How It Works
    'howItWorks.title': 'SecureServe कैसे काम करता है',
    'howItWorks.subtitle': 'सरल, सुरक्षित, और AI द्वारा संचालित फ्रीलांसरों और क्लाइंट्स दोनों की सुरक्षा के लिए',
    
    // FAQs
    'faqs.title': 'आपको जो कुछ जानना चाहिए',
    'faqs.subtitle': 'प्रश्न हैं? हमारे पास उत्तर हैं। SecureServe कैसे काम करता है और यह आपको कैसे लाभ पहुंचा सकता है, इसके बारे में और जानें।',
    
    // Footer
    'footer.company': 'SecureServe',
    'footer.description': 'भारत का पहला AI-संचालित एस्क्रो प्लेटफॉर्म फ्रीलांसरों और क्लाइंट्स के लिए। सुरक्षित भुगतान, सत्यापित डिलिवरेबल्स।',
    'footer.contactUs': 'संपर्क करें',
    'footer.businessHours': 'व्यावसायिक समय',
    'footer.copyright': '© 2025 SecureServe। भारतीय फ्रीलांसरों के लिए, भारतीय फ्रीलांसरों द्वारा निर्मित।',
  },
  ja: {
    // Navigation
    'nav.explore': '探索',
    'nav.howItWorks': '仕組み',
    'nav.faqs': 'よくある質問',
    'nav.contact': 'お問い合わせ',
    'nav.asFreelancer': 'フリーランサーとして',
    'nav.asClient': 'クライアントとして',
    'nav.productDemo': '製品デモ',
    'nav.testimonials': 'お客様の声',
    'nav.support': 'サポート',
    'nav.roadmap': 'ロードマップ',
    'nav.blog': 'ブログ',
    'nav.login': 'ログイン',
    'nav.changeLanguage': '言語を変更',
    
    // Hero Section
    'hero.title': 'インド初のAI搭載フリーランサー・クライアント向けエスクロープラットフォーム',
    'hero.subtitle': 'あなたの仕事を守る。あなたの価値を追求する。',
    'hero.startTrial': '無料トライアルを開始',
    'hero.watchDemo': 'デモを見る',
    'hero.happyCustomers': '満足顧客',
    'hero.successfulClosures': '成功完了',
    
    // Benefits Section
    'benefits.title': 'さようなら...',
    'benefits.subjectiveDisputes': '主観的品質争議',
    'benefits.endlessRevisions': '支払いを遅らせる無限の修正',
    'benefits.unpredictablePayments': '予測不可能な支払いスケジュール',
    
    // SecureServe Benefits
    'secureServe.title': 'SecureServeに切り替え',
    'secureServe.subtitle': 'あなたのAI搭載支払いガーディアン',
    'secureServe.smartContracts': 'スマートコントラクト',
    'secureServe.smartContractsDesc': 'AIが明確で詳細なプロジェクト仕様の作成を支援し、両当事者を保護し、最初から明確な期待を設定します。',
    'secureServe.secureEscrow': '安全なエスクローシステム',
    'secureServe.secureEscrowDesc': '作業が承認されるまで、お金は安全にエスクローに保管されます。プロジェクト全体を通じてフリーランサーとクライアントの両方を完全に保護します。',
    'secureServe.aiVerified': 'AI検証済み成果物',
    'secureServe.aiVerifiedDesc': '高度なAIがあなたの作業がクライアントの要件に一致するかを即座に検証し、主観的な争議を排除し、公正な評価を保証します。',
    'secureServe.instantPayments': '即時支払い',
    'secureServe.instantPaymentsDesc': 'AIが作業品質が仕様を満たすことを確認すると、支払いは遅延なく即座にあなたのアカウントに転送されます。',
    
    // How It Works
    'howItWorks.title': 'SecureServeの仕組み',
    'howItWorks.subtitle': 'シンプル、安全、AI搭載でフリーランサーとクライアントの両方を保護',
    
    // FAQs
    'faqs.title': '知っておくべきすべて',
    'faqs.subtitle': '質問がありますか？答えがあります。SecureServeの仕組みとそれがどのようにあなたに利益をもたらすかについて詳しく学んでください。',
    
    // Contact Us Page
    'contact.title': 'お問い合わせ',
    'contact.subtitle': 'サポート、パートナーシップ、または一般的なお問い合わせについて、私たちのチームにご連絡ください',
    'contact.backToHome': 'ホームに戻る',
    'contact.sendMessage': 'メッセージを送信',
    'contact.userType': '私は',
    'contact.client': 'クライアント',
    'contact.freelancer': 'フリーランサー',
    'contact.fullName': 'フルネーム',
    'contact.email': 'メールアドレス',
    'contact.company': '会社/組織',
    'contact.phone': '電話番号',
    'contact.subject': '件名',
    'contact.message': 'メッセージ',
    'contact.submit': 'メッセージを送信',
    'contact.getInTouch': '連絡を取る',
    'contact.ourOffices': '私たちのオフィス',
    'contact.businessHours': '営業時間',
    'contact.phoneSupport': '電話サポート',
    'contact.emailSupport': 'メールサポート',
    'contact.liveChat': 'ライブチャット',
    'contact.successMessage': 'ありがとうございます！メッセージが正常に送信されました。4-6時間以内にご返信いたします。',
    
    // Footer
    'footer.company': 'SecureServe',
    'footer.description': 'インド初のAI搭載フリーランサー・クライアント向けエスクロープラットフォーム。安全な支払い、検証済み成果物。',
    'footer.contactUs': 'お問い合わせ',
    'footer.businessHours': '営業時間',
    'footer.copyright': '© 2025 SecureServe。インドのフリーランサーのために、インドのフリーランサーによって構築。',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Load saved language from localStorage or default to 'en'
    return localStorage.getItem('selectedLanguage') || 'en';
  });

  const changeLanguage = (language: string) => {
    setCurrentLanguage(language);
    localStorage.setItem('selectedLanguage', language);
  };

  const t = (key: string): string => {
    const languageTranslations = translations[currentLanguage as keyof typeof translations] || translations.en;
    return languageTranslations[key as keyof typeof languageTranslations] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};