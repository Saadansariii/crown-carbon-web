export interface TranslationContent {
  nav: {
    home: string;
    about: string;
    products: string;
    industries: string;
    infrastructure: string;
    contact: string;
    quote: string;
    techQuote: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    desc: string;
    tagline: string;
    ctaQuote: string;
    h1: string;
    h2: string;
    h3: string;
  };
  about: {
    kicker: string;
    title: string;
    desc1: string;
    desc2: string;
    statYears: string;
    statYearsDesc: string;
    statOem: string;
    statOemDesc: string;
    statUnits: string;
    statUnitsDesc: string;
    statNetwork: string;
    statNetworkDesc: string;
    qaLabel: string;
    qaVal: string;
  };
  products: {
    kicker: string;
    title: string;
    desc: string;
    tabBrushes: string;
    tabHolders: string;
    tabRings: string;
    tabSprings: string;
    specsTitle: string;
    specsSub: string;
    advLabel: string;
    gradesLabel: string;
    opEnvLabel: string;
    enquiryBtn: string;
    drawingBtn: string;
    brushesTitle: string;
    brushesSub: string;
    brushesDesc: string;
    brushesF1: string;
    brushesF2: string;
    brushesF3: string;
    brushesF4: string;
    holdersTitle: string;
    holdersSub: string;
    holdersDesc: string;
    holdersF1: string;
    holdersF2: string;
    holdersF3: string;
    holdersF4: string;
    ringsTitle: string;
    ringsSub: string;
    ringsDesc: string;
    ringsF1: string;
    ringsF2: string;
    ringsF3: string;
    ringsF4: string;
    springsTitle: string;
    springsSub: string;
    springsDesc: string;
    springsF1: string;
    springsF2: string;
    springsF3: string;
    springsF4: string;
    specLabels: {
      grades: string;
      current: string;
      speed: string;
      resistivity: string;
      friction: string;
      tolerance: string;
      tension: string;
      primaryMat: string;
      springMat: string;
      insulation: string;
      voltage: string;
      circuits: string;
      surface: string;
      dielectric: string;
      resistance: string;
      material: string;
      fatigue: string;
      thickness: string;
    };
  };
  capabilities: {
    kicker: string;
    title: string;
    desc: string;
    cap1Title: string;
    cap1Desc: string;
    cap2Title: string;
    cap2Desc: string;
    cap3Title: string;
    cap3Desc: string;
    cap4Title: string;
    cap4Desc: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
  };
  whyUs: {
    kicker: string;
    title: string;
    desc: string;
    f1Title: string;
    f1Desc: string;
    f2Title: string;
    f2Desc: string;
    f3Title: string;
    f3Desc: string;
    f4Title: string;
    f4Desc: string;
  };
  ongoing: {
    indKicker: string;
    indTitle: string;
    indDesc: string;
    ind1Title: string;
    ind1Desc: string;
    ind2Title: string;
    ind2Desc: string;
    ind3Title: string;
    ind3Desc: string;
    ind4Title: string;
    ind4Desc: string;
    ind5Title: string;
    ind5Desc: string;
    qaKicker: string;
    qaTitle: string;
    qaDesc: string;
    qaBoxTitle: string;
    qaBoxDesc: string;
    qaCheck1Title: string;
    qaCheck1Desc: string;
    qaCheck2Title: string;
    qaCheck2Desc: string;
    qaCheck3Title: string;
    qaCheck3Desc: string;
  };
  contact: {
    kicker: string;
    title: string;
    desc: string;
    officeLabel: string;
    officeVal: string;
    phoneLabel: string;
    emailLabel: string;
    responseLabel: string;
    responseVal: string;
    formTitle: string;
    formName: string;
    formCompany: string;
    formEmail: string;
    formPhone: string;
    formCat: string;
    formMsg: string;
    formSubmit: string;
    formSubmitting: string;
    requiredMsg: string;
    successMsg: string;
    errorMsg: string;
    catBrushes: string;
    catHolders: string;
    catRings: string;
    catSprings: string;
    catCustom: string;
    placeholderMsg: string;
  };
  footer: {
    desc: string;
    tagline: string;
    navTitle: string;
    catTitle: string;
    officeTitle: string;
    officeVal: string;
    madeInIndia: string;
  };
}

export const translations: Record<"en" | "hi", TranslationContent> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      products: "Our Products",
      industries: "Industries",
      infrastructure: "Process & Sample",
      contact: "Contact",
      quote: "Request a Quote",
      techQuote: "Request a Quote",
    },
    hero: {
      badge: "TRUSTED CARBON BRUSH MANUFACTURER WITH 25+ YEARS OF EXPERIENCE",
      title: "PRECISION CARBON BRUSHES,",
      subtitle: "BUILT TO LAST.",
      desc: "Manufacturing premium carbon brushes for electric motors, generators and industrial equipment with consistent quality.",
      tagline: "We care for your armatures, fulfilling the highest quality standards.",
      ctaQuote: "Request a Quote",
      h1: "High Thermal Tolerance",
      h2: "Sample Replication",
      h3: "Anti-Spark Materials",
    },
    about: {
      kicker: "01 / WHO WE ARE",
      title: "Precision Carbon Brush Specialists",
      desc1: "With over 25 years of technical manufacturing experience, Crown Carbon Brush produces high-grade carbon brushes, brush holders, slip rings, and springs in Mumbai. We serve industrial plants across India directly.",
      desc2: "Ship us your sample or motor specifications. We analyze the material compound in our laboratory and manufacture exact functional replacements.",
      statYears: "25+ Years",
      statYearsDesc: "Technical manufacturing experience",
      statOem: "100+ Specs",
      statOemDesc: "Material grades matching standards",
      statUnits: "500k+ Units",
      statUnitsDesc: "Delivered directly to factories",
      statNetwork: "Pan-India",
      statNetworkDesc: "Direct supply and technical consultation",
      qaLabel: "Lab Testing",
      qaVal: "Grade Calibration",
    },
    products: {
      kicker: "02 / OUR PRODUCTS",
      title: "Precision Engineered Industrial Components",
      desc: "We manufacture custom-engineered carbon brushes, holders, slip rings, and constant-force springs for demanding applications. Select a category below.",
      tabBrushes: "Carbon Brush",
      tabHolders: "Carbon Brush Holder",
      tabRings: "Slip Ring Units",
      tabSprings: "Springs",
      specsTitle: "Technical Specification",
      specsSub: "Standard Ranges",
      advLabel: "Key Advantages",
      gradesLabel: "Raw Material Options",
      opEnvLabel: "Applications",
      enquiryBtn: "Enquire About This Component",
      drawingBtn: "Request Specs Verification",
      brushesTitle: "Carbon Brush",
      brushesSub: "Tailored electrographitic & metal-graphite grades",
      brushesDesc: "Precision-cut brushes engineered for low commutator wear and high conductivity in AC/DC motors and generators.",
      brushesF1: "Low wear rate under extreme mechanical & thermal loads",
      brushesF2: "Pre-bevelled top angles and custom copper shunts",
      brushesF3: "Tamp-secured copper cables with insulated sleeves",
      brushesF4: "Calibrated density to prevent spark erosion",
      holdersTitle: "Carbon Brush Holder",
      holdersSub: "Cast brass & bronze holders with constant tension",
      holdersDesc: "Precision-machined brush holders designed to maintain uniform brush positioning and alignment throughout operations.",
      holdersF1: "Corrosion-resistant cast brass and bronze alloys",
      holdersF2: "Sandvik stainless steel constant-force springs",
      holdersF3: "Precise slot tolerances matching DIN standards",
      holdersF4: "Class H reinforced insulating washers and bushes",
      ringsTitle: "Slip Ring Units",
      ringsSub: "Precision rotary joints for power & signal transfer",
      ringsDesc: "High-integrity slip ring assemblies enabling continuous electrical transfer from stationary sources to rotating shafts.",
      ringsF1: "Mirror-polished copper or phosphor bronze tracks",
      ringsF2: "Phenolic molded cores for high voltage safety",
      ringsF3: "Split or solid layouts for quick installation",
      ringsF4: "Voltages from 24V DC up to 11kV AC",
      springsTitle: "Springs",
      springsSub: "Constant force springs for uniform contact pressure",
      springsDesc: "High-tensile coiled springs engineered to deliver steady pressure, preventing brush bounce and commutator damage.",
      springsF1: "Maintains uniform pressure across full brush wear lifespan",
      springsF2: "High-grade SUS301 stainless steel spring strips",
      springsF3: "Prevents micro-sparking and commutator surface pitting",
      springsF4: "Custom force ratings calibrated to holder dimensions",
      specLabels: {
        grades: "Grades",
        current: "Current Density",
        speed: "Max Linear Speed",
        resistivity: "Resistivity",
        friction: "Friction Coeff.",
        tolerance: "Slot Tolerance",
        tension: "Spring Pressure",
        primaryMat: "Cast Material",
        springMat: "Spring Steel",
        insulation: "Insulation Class",
        voltage: "Voltage Range",
        circuits: "Circuit Poles",
        surface: "Surface Finish",
        dielectric: "Dielectric Capacity",
        resistance: "Insulation Resistance",
        material: "Material",
        fatigue: "Fatigue Life",
        thickness: "Strip Thickness",
      },
    },
    capabilities: {
      kicker: "03 / PROCESS & CAPABILITIES",
      title: "Sample-to-Production Stepper",
      desc: "Here is exactly how we copy and manufacture your custom carbon components with high precision.",
      cap1Title: "CNC Machining",
      cap1Desc: "Bevels and profiles milled to exact slot tolerances of ±0.05mm.",
      cap2Title: "Copper Shunts",
      cap2Desc: "High-conductivity copper braids with ring, flag, or spade terminals.",
      cap3Title: "Wear Sensors",
      cap3Desc: "Alert pins embedded in the carbon warn when replacement is due.",
      cap4Title: "Pressure Springs",
      cap4Desc: "Custom spring assemblies calibrated to maintain constant surface contact.",
      step1Title: "01 / Send Sample",
      step1Desc: "Ship your used or broken component to our Malad, Mumbai facility.",
      step2Title: "02 / Material Testing",
      step2Desc: "Our lab analyzes the carbon compound grade, dimensions, and shunts.",
      step3Title: "03 / Replication",
      step3Desc: "We manufacture exact replicas matching all physical parameters.",
      step4Title: "04 / Secure Delivery",
      step4Desc: "Final testing followed by prompt logistics dispatch across India.",
    },
    whyUs: {
      kicker: "04 / OUR VALUES",
      title: "Direct B2B Supply Benefits",
      desc: "No middlemen. We work directly with engineers and purchase departments.",
      f1Title: "25+ Years Experience",
      f1Desc: "Over 25 years of direct technical manufacturing experience in Mumbai.",
      f2Title: "Fast Replication",
      f2Desc: "Send your sample, we prepare CAD drawings and sinters quickly.",
      f3Title: "Custom Specifications",
      f3Desc: "Every detail matched to your machinery requirements.",
      f4Title: "Tested Batches",
      f4Desc: "Every batch verified for density and pulling strength.",
    },
    ongoing: {
      indKicker: "05 / TARGET SECTORS",
      indTitle: "Industries We Serve",
      indDesc: "Our carbon components operate continuously in demanding environments.",
      ind1Title: "Steel & Power",
      ind1Desc: "Brushes for rolling mills and alternator slip rings.",
      ind2Title: "Cement & Mining",
      ind2Desc: "Dust-tolerant blocks for crushers and rotary kilns.",
      ind3Title: "Locomotives",
      ind3Desc: "Vibration-stable brushes for railway traction motors.",
      ind4Title: "Paper & Printing",
      ind4Desc: "Conductive brushes for continuous rollers.",
      ind5Title: "Wind Turbines",
      ind5Desc: "Grounding and pitch-control carbon contacts.",
      qaKicker: "06 / QUALITY CHECKS",
      qaTitle: "Rotor Safety Standards",
      qaDesc: "Poor carbon components cause spark damage. We verify dispatches to keep your rotors safe.",
      qaBoxTitle: "Audited Compounds",
      qaBoxDesc: "Carbon raw materials sourced from certified global labs.",
      qaCheck1Title: "Dimensional Check",
      qaCheck1Desc: "Pocket fit verify using digital calipers.",
      qaCheck2Title: "Resistance Test",
      qaCheck2Desc: "Insulated cables and carbon check to prevent hot spots.",
      qaCheck3Title: "Pull Testing",
      qaCheck3Desc: "Verifying shunt-to-carbon tamp strength under load.",
    },
    contact: {
      kicker: "07 / INQUIRY CENTER",
      title: "Send Inquiry or Drawing",
      desc: "Fill details below or let us know if you are shipping a sample to our Malad office.",
      officeLabel: "Workshop Address",
      officeVal: "Malad West, Mumbai, 400095, Maharashtra, India",
      phoneLabel: "Phone",
      emailLabel: "Email",
      responseLabel: "Reply Window",
      responseVal: "Within 24 business hours",
      formTitle: "Component Inquiry Form",
      formName: "Name *",
      formCompany: "Company Name",
      formEmail: "Email *",
      formPhone: "Phone",
      formCat: "Spare Category",
      formMsg: "Requirement details or sample details *",
      formSubmit: "Submit Technical Inquiry",
      formSubmitting: "Submitting...",
      requiredMsg: "Please fill in all required fields (*).",
      successMsg: "Inquiry received. We will contact you soon.",
      errorMsg: "Failed to submit. Please try again.",
      catBrushes: "Carbon Brush",
      catHolders: "Carbon Brush Holder",
      catRings: "Slip Ring Units",
      catSprings: "Springs",
      catCustom: "Custom Requirement",
      placeholderMsg: "Describe pocket sizes, bevels, shunts, springs or note if you are shipping a sample...",
    },
    footer: {
      desc: "Crown Carbon Brush manufactures custom carbon brushes, brush holders, slip rings, and springs with over 25 years of technical manufacturing experience in Mumbai.",
      tagline: "We care for your armatures, fulfilling the highest quality standards.",
      navTitle: "Quick Links",
      catTitle: "Our Products",
      officeTitle: "Contact Info",
      officeVal: "Malad West, Mumbai, 400095, Maharashtra, India",
      madeInIndia: "Made in India",
    },
  },
  hi: {
    nav: {
      home: "मुख्य पृष्ठ",
      about: "हमारे बारे में",
      products: "हमारे उत्पाद",
      industries: "उद्योग",
      infrastructure: "प्रक्रिया और सैंपल",
      contact: "संपर्क",
      quote: "कोटेशन प्राप्त करें",
      techQuote: "कोटेशन प्राप्त करें",
    },
    hero: {
      badge: "25+ से अधिक वर्षों के अनुभव के साथ विश्वसनीय कार्बन ब्रश निर्माता",
      title: "सटीक कार्बन ब्रश,",
      subtitle: "लंबे समय तक चलने के लिए निर्मित।",
      desc: "इलेक्ट्रिक मोटर, जनरेटर और औद्योगिक उपकरणों के लिए निरंतर गुणवत्ता के साथ प्रीमियम कार्बन ब्रश का निर्माण।",
      tagline: "हम आपके आर्मेचर की सुरक्षा करते हैं, उच्चतम गुणवत्ता मानकों को पूरा करते हैं।",
      ctaQuote: "कोटेशन प्राप्त करें",
      h1: "उच्च तापीय सहनशीलता",
      h2: "सैंपल रेप्लीकेशन",
      h3: "स्पार्क-रोधी सामग्री",
    },
    about: {
      kicker: "01 / हम कौन हैं",
      title: "सटीक कार्बन ब्रश विशेषज्ञ",
      desc1: "25 से अधिक वर्षों के तकनीकी विनिर्माण अनुभव के साथ, क्राउन कार्बन ब्रश मुंबई में उच्च श्रेणी के कार्बन ब्रश, ब्रश होल्डर, स्लिप रिंग और स्प्रिंग्स का निर्माण करता है। हम सीधे पूरे भारत में औद्योगिक संयंत्रों को आपूर्ति करते हैं।",
      desc2: "हमें अपना सैंपल या मोटर विवरण भेजें। हम अपनी प्रयोगशाला में सामग्री का विश्लेषण करते हैं और बिल्कुल वैसा ही नया उत्पाद तैयार करते हैं।",
      statYears: "25+ वर्ष",
      statYearsDesc: "तकनीकी विनिर्माण का अनुभव",
      statOem: "100+ ग्रेड्स",
      statOemDesc: "मानकों के अनुकूल सामग्री",
      statUnits: "500k+ उत्पाद",
      statUnitsDesc: "सीधे फैक्ट्रियों को आपूर्ति",
      statNetwork: "अखिल भारतीय",
      statNetworkDesc: "सीधी आपूर्ति और तकनीकी सहायता",
      qaLabel: "लैब टेस्टिंग",
      qaVal: "ग्रेड अंशांकन",
    },
    products: {
      kicker: "02 / हमारे उत्पाद",
      title: "सटीक रूप से निर्मित औद्योगिक कंपोनेंट्स",
      desc: "हम मांग वाली अनुप्रयोगों के लिए कस्टम-निर्मित कार्बन ब्रश, होल्डर, स्लिप रिंग और स्प्रिंग्स का निर्माण करते हैं। नीचे एक श्रेणी चुनें।",
      tabBrushes: "कार्बन ब्रश",
      tabHolders: "कार्बन ब्रश होल्डर",
      tabRings: "स्लिप रिंग यूनिट्स",
      tabSprings: "स्प्रिंग्स",
      specsTitle: "तकनीकी विशिष्टता",
      specsSub: "मानक श्रेणियां",
      advLabel: "प्रमुख लाभ",
      gradesLabel: "उपलब्ध सामग्री विकल्प",
      opEnvLabel: "लक्षित अनुप्रयोग",
      enquiryBtn: "इस कंपोनेंट की पूछताछ भेजें",
      drawingBtn: "स्पेक्स सत्यापन का अनुरोध",
      brushesTitle: "कार्बन ब्रश",
      brushesSub: "अनुकूलित इलेक्ट्रो-ग्रेफाइट और मेटल-ग्रेफाइट ग्रेड",
      brushesDesc: "AC/DC मोटरों और जनरेटरों में कम कम्यूटेटर घिसावट और उच्च चालकता के लिए डिज़ाइन किए गए कार्बन ब्रश।",
      brushesF1: "अत्यधिक यांत्रिक और तापीय लोड के तहत कम घिसावट",
      brushesF2: "सटीक बेवलिंग कोण और अनुकूलित कॉपर शंट",
      brushesF3: "इंसुलेटेड स्लीव्स के साथ मजबूत तांबे के केबल",
      brushesF4: "स्पार्किंग रोकने के लिए सटीक कैलिब्रेटेड डेंसिटी",
      holdersTitle: "कार्बन ब्रश होल्डर",
      holdersSub: "स्थिर-दबाव के साथ कांस्य और पीतल के होल्डर्स",
      holdersDesc: "संचालन के दौरान समान ब्रश स्थिति और अलाइनमेंट बनाए रखने के लिए डिज़ाइन किए गए होल्डर्स।",
      holdersF1: "जंग-प्रतिरोधी कांस्य और पीतल मिश्र धातु",
      holdersF2: "सैंडविक स्टेनलेस स्टील स्थिर-दबाव स्प्रिंग्स",
      holdersF3: "DIN मानकों के अनुकूल सटीक पॉकेट स्लॉट आकार",
      holdersF4: "Class H श्रेणी के मजबूत इंसुलेशन कम्पोनेंट्स",
      ringsTitle: "स्लिप रिंग यूनिट्स",
      ringsSub: "विद्युत प्रवाह और सिग्नल ट्रांसफर के लिए रोटरी जॉइंट्स",
      ringsDesc: "स्थिर स्रोतों से घूमते हुए शाफ्ट में निरंतर विद्युत प्रवाह प्रदान करने वाली स्लिप रिंग असेंबली।",
      ringsF1: "पॉलिश किए गए तांबे या फास्फोरस कांस्य ट्रैक",
      ringsF2: "उच्च वोल्टेज सुरक्षा के लिए मोल्डेड कोर",
      ringsF3: "आसान स्थापना के लिए स्प्लिट या सॉलिड लेआउट",
      ringsF4: "24V DC से लेकर 11kV AC तक की वोल्टेज रेंज",
      springsTitle: "स्प्रिंग्स",
      springsSub: "समान संपर्क दबाव के लिए कांस्टेंट फोर्स स्प्रिंग्स",
      springsDesc: "समान दबाव प्रदान करने और ब्रश बाउंस को रोकने के लिए उच्च-तन्यता स्टेनलेस स्टील स्प्रिंग्स।",
      springsF1: "ब्रश की पूरी घिसावट सीमा में समान दबाव बनाए रखता है",
      springsF2: "उच्च श्रेणी SUS301 स्टेनलेस स्टील निर्माण",
      springsF3: "मायक्रो-स्पार्किंग और कम्यूटेटर क्षति को रोकता है",
      springsF4: "विशिष्ट होल्डर आकारों के लिए कैलिब्रेटेड दबाव रेटिंग",
      specLabels: {
        grades: "ग्रेड्स",
        current: "करंट डेंसिटी",
        speed: "अधिकतम गति",
        resistivity: "प्रतिरोधकता",
        friction: "घर्षण गुणांक",
        tolerance: "पॉकेट टॉलरेंस",
        tension: "स्प्रिंग दबाव",
        primaryMat: "मुख्य धातु",
        springMat: "स्प्रिंग स्टील",
        insulation: "इंसुलेशन क्लास",
        voltage: "वोल्टेज रेंज",
        circuits: "सर्किट पोल",
        surface: "सतह की फिनिश",
        dielectric: "डाइलेक्ट्रिक स्ट्रेंथ",
        resistance: "इंसुलेशन प्रतिरोध",
        material: "सामग्री",
        fatigue: "साइकिल लाइफ",
        thickness: "पट्टी मोटाई",
      },
    },
    capabilities: {
      kicker: "03 / प्रक्रिया और क्षमता",
      title: "सैंपल-से-उत्पादन प्रक्रिया",
      desc: "हम आपके सैंपल के आधार पर सटीक कार्बन पुर्जे तैयार करते हैं। हमारी पूरी प्रक्रिया स्पष्ट और सीधी है।",
      cap1Title: "CNC मशीनिंग",
      cap1Desc: "सटीक फिटिंग के लिए ±0.05mm की टॉलरेंस पर बेवल कोण की मिलिंग।",
      cap2Title: "तांबे के शंट केबल",
      cap2Desc: "रिंग या फ्लैग टर्मिनलों के साथ उच्च चालकता वाले कॉपर शंट केबल्स।",
      cap3Title: "घिसावट सेंसर",
      cap3Desc: "घिसने की सीमा बताने के लिए कार्बन में वियर सेंसर लगाने की सुविधा।",
      cap4Title: "प्रेशर स्प्रिंग्स",
      cap4Desc: "समान दबाव बनाए रखने के लिए अनुकूलित स्प्रिंग फिटिंग्स।",
      step1Title: "01 / सैंपल भेजें",
      step1Desc: "अपना पुराना या टूटा हुआ पार्ट हमारे मुंबई मालाड केंद्र पर भेजें।",
      step2Title: "02 / ग्रेड परीक्षण",
      step2Desc: "हमारी लैब कार्बन ग्रेड, आकार और केबल प्रकार का विश्लेषण करती है।",
      step3Title: "03 / सटीक निर्माण",
      step3Desc: "हम सैंपल के आकार और विशिष्टताओं के अनुकूल बिल्कुल वैसा ही नया पार्ट बनाते हैं।",
      step4Title: "04 / सुरक्षित डिलीवरी",
      step4Desc: "अंतिम गुणवत्ता परीक्षण के बाद पूरे भारत में त्वरित डिलीवरी की जाती है।",
    },
    whyUs: {
      kicker: "04 / हमारे मूल्य",
      title: "सीधे B2B आपूर्ति के लाभ",
      desc: "कोई बिचौलिया नहीं। हम सीधे इंजीनियरों और खरीद विभागों के साथ काम करते हैं।",
      f1Title: "25+ वर्षों का अनुभव",
      f1Desc: "मुंबई में 25 से अधिक वर्षों का प्रत्यक्ष निर्माण अनुभव।",
      f2Title: "त्वरित निर्माण",
      f2Desc: "सैंपल मिलने पर हम तुरंत CAD डिज़ाइन और निर्माण शुरू करते हैं।",
      f3Title: "कस्टम विनिर्देश",
      f3Desc: "आपकी मशीन की जरूरतों के अनुसार हर विवरण तैयार किया जाता है।",
      f4Title: "जांचे गए बैच",
      f4Desc: "गुणवत्ता सुनिश्चित करने के लिए हर बैच के घनत्व और मजबूती की जांच।",
    },
    ongoing: {
      indKicker: "05 / लक्षित उद्योग",
      indTitle: "मुख्य उद्योग क्षेत्र",
      indDesc: "हमारे कार्बन पुर्जे भारी उद्योगों के कठिन वातावरण में निरंतर काम करते हैं।",
      ind1Title: "स्टील और पावर",
      ind1Desc: "रोलिंग मिलों और अल्टरनेटर स्लिप रिंग के लिए ब्रश।",
      ind2Title: "सीमेंट और खनन",
      ind2Desc: "क्रशर और भट्टियों के लिए धूल-प्रतिरोधी कार्बन पुर्जे।",
      ind3Title: "रेलवे लोकोमोटिव",
      ind3Desc: "ट्रेक्शन मोटर्स के लिए कंपन-प्रतिरोधी कार्बन ब्रश।",
      ind4Title: "कागज और प्रिंटिंग",
      ind4Desc: "लगातार चलने वाले रोलर्स के लिए अर्थिंग कार्बन ब्रश।",
      ind5Title: "पवन चक्कियां",
      ind5Desc: "टर्बाइनों के लिए अर्थिंग और पिच-कंट्रोल संपर्क।",
      qaKicker: "06 / गुणवत्ता जांच",
      qaTitle: "रोटर सुरक्षा मानक",
      qaDesc: "खराब ब्रश रोटर को नष्ट कर सकता है। हम रोटर की सुरक्षा के लिए हर बैच की जांच करते हैं।",
      qaBoxTitle: "सत्यापित सामग्री",
      qaBoxDesc: "कार्बन कच्चा माल केवल प्रमाणित वैश्विक लैब से लिया जाता है।",
      qaCheck1Title: "आकार की जांच",
      qaCheck1Desc: "गेज कैलपर्स का उपयोग करके पॉकेट फिटिंग की जांच।",
      qaCheck2Title: "प्रतिरोध परीक्षण",
      qaCheck2Desc: "विद्युत प्रतिरोध और इंसुलेटेड केबल की जांच ताकि स्पार्किंग न हो।",
      qaCheck3Title: "मजबूती परीक्षण",
      qaCheck3Desc: "केबल टूटने से रोकने के लिए शंट-टू-कार्बन बॉन्डिंग की जांच।",
    },
    contact: {
      kicker: "07 / पूछताछ केंद्र",
      title: "पूछताछ या ड्राइंग भेजें",
      desc: "नीचे विवरण भरें या हमें सूचित करें कि क्या आप हमारे मलाड कार्यालय में सैंपल भेज रहे हैं।",
      officeLabel: "कार्यशाला का पता",
      officeVal: "मलाड वेस्ट, मुंबई, 400095, महाराष्ट्र, भारत",
      phoneLabel: "फ़ोन",
      emailLabel: "ईमेल",
      responseLabel: "उत्तर की समयसीमा",
      responseVal: "24 व्यावसायिक घंटों के भीतर",
      formTitle: "पुर्जा पूछताछ फॉर्म",
      formName: "नाम *",
      formCompany: "कंपनी का नाम",
      formEmail: "ईमेल *",
      formPhone: "फ़ोन",
      formCat: "पुर्जे की श्रेणी",
      formMsg: "आवश्यकता या सैंपल का विवरण *",
      formSubmit: "पूछताछ विवरण भेजें",
      formSubmitting: "भेजा जा रहा है...",
      requiredMsg: "कृपया सभी आवश्यक फ़ील्ड (*) भरें।",
      successMsg: "पूछताछ प्राप्त हुई। हम जल्द ही आपसे संपर्क करेंगे।",
      errorMsg: "भेजने में विफल। कृपया पुन: प्रयास करें।",
      catBrushes: "कार्बन ब्रश",
      catHolders: "कार्बन ब्रश होल्डर",
      catRings: "स्लिप रिंग यूनिट्स",
      catSprings: "स्प्रिंग्स",
      catCustom: "कस्टम आवश्यकता",
      placeholderMsg: "यहाँ पॉकेट का आकार, बेवल कोण, स्प्रिंग तनाव या शंट केबल का विवरण लिखें...",
    },
    footer: {
      desc: "क्राउन कार्बन ब्रश 25 से अधिक वर्षों के तकनीकी विनिर्माण अनुभव के साथ मुंबई में कस्टम कार्बन ब्रश, होल्डर, स्लिप रिंग और स्प्रिंग्स का निर्माण करता है।",
      tagline: "हम आपके आर्मेचर की सुरक्षा करते हैं, उच्चतम गुणवत्ता मानकों को पूरा करते हैं।",
      navTitle: "त्वरित लिंक्स",
      catTitle: "हमारे उत्पाद",
      officeTitle: "संपर्क विवरण",
      officeVal: "मलाड वेस्ट, मुंबई, 400095, महाराष्ट्र, भारत",
      madeInIndia: "मेड इन इंडिया",
    },
  },
};
