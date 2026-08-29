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
    ctaSolutions: string;
    ctaContact: string;
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
    downloadCat: string;
    tabBrushes: string;
    tabHolders: string;
    tabRings: string;
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
    };
  };
  capabilities: {
    kicker: string;
    title: string;
    desc: string;
    processKicker: string;
    processTitle: string;
    payLabel: string;
    payDesc: string;
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
      products: "Products",
      industries: "Industries",
      infrastructure: "Process & Sample",
      contact: "Contact",
      quote: "Send Enquiry",
      techQuote: "Get Specs Quote",
    },
    hero: {
      badge: "Established 2006 | Mumbai",
      title: "Custom Manufactured",
      subtitle: "Carbon Brushes",
      desc: "We manufacture high-grade carbon brushes, brush holders, and slip rings. Send us your sample—we build an exact matching replica.",
      tagline: "We care for your armatures, fulfilling the highest quality standards.",
      ctaSolutions: "Products",
      ctaContact: "Send Sample",
      h1: "High Thermal Tolerance",
      h2: "Sample Replication",
      h3: "Anti-Spark Materials",
    },
    about: {
      kicker: "01 / Who We Are",
      title: "Carbon Brush Specialists",
      desc1: "Since 2006, Crown Carbon Brush has manufactured replacements for worn-out industrial motor components in Mumbai. We serve plants across India directly.",
      desc2: "Ship us your used or broken brush/holder. We test the material compound in our laboratory and produce an exact functional replacement.",
      statYears: "20 Years",
      statYearsDesc: "Technical fabrication experience",
      statOem: "100+ Specs",
      statOemDesc: "Material grades matching standards",
      statUnits: "500k+ Units",
      statUnitsDesc: "Delivered directly to factories",
      statNetwork: "Pan-India",
      statNetworkDesc: "Direct supply and consultation",
      qaLabel: "Lab Testing",
      qaVal: "Grade Calibration",
    },
    products: {
      kicker: "02 / Product Range",
      title: "Send Your Sample for Exact Fit",
      desc: "We replicate parts to match your speed and conductivity requirements. Choose a category to inspect parameters.",
      downloadCat: "Download Catalog",
      tabBrushes: "Carbon Brushes",
      tabHolders: "Brush Holders",
      tabRings: "Slip Rings",
      specsTitle: "Technical Specification",
      specsSub: "Standard Ranges",
      advLabel: "Operational Benefits",
      gradesLabel: "Raw Material Options",
      opEnvLabel: "Industries Served",
      enquiryBtn: "Enquire About This Component",
      drawingBtn: "Request Specs Verification",
      brushesTitle: "Industrial Carbon Brushes",
      brushesSub: "Tailored grades for stable motor commutation",
      brushesDesc: "Custom-cut brushes engineered for low commutator wear. Available in electrographitic, copper-graphite, and silver-graphite.",
      brushesF1: "Low wear rate under extreme mechanical loads",
      brushesF2: "Pre-bevelled top angles and custom shunts",
      brushesF3: "Tamp-secured copper cables with insulated sleeves",
      brushesF4: "Calibrated density to prevent spark erosion",
      holdersTitle: "Constant-Force Brush Holders",
      holdersSub: "Bronze/brass castings with constant tension springs",
      holdersDesc: "Maintains uniform spring force throughout the brush lifespan to prevent brush bounce.",
      holdersF1: "Corrosion-resistant cast brass / bronze alloys",
      holdersF2: "Sandvik stainless steel constant-force springs",
      holdersF3: "Precise slot tolerances matching DIN standards",
      holdersF4: "Class H reinforced insulating washers",
      ringsTitle: "Precision Slip Rings",
      ringsSub: "Rotary joints for electrical transfer",
      ringsDesc: "Enables reliable transfer of electrical currents from stationary sources to rotating shafts.",
      ringsF1: "Mirror-polished copper or phosphor bronze tracks",
      ringsF2: "Phenolic molded cores for high voltage safety",
      ringsF3: "Split or solid layouts for quick installation",
      ringsF4: "Voltages from 24V DC up to 11kV AC",
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
        surface: "Surface Roughness",
        dielectric: "Dielectric Capacity",
        resistance: "Insulation Resistance",
      },
    },
    capabilities: {
      kicker: "03 / PROCESS & CAPABILITIES",
      title: "Sample-to-Production Stepper",
      desc: "Here is exactly how we copy and manufacture your custom carbon components. We keep the workflow transparent.",
      processKicker: "COMMERCIAL TERMS",
      processTitle: "Pricing & Dispatch Rules",
      payLabel: "Payment Terms",
      payDesc: "50% Advance Payment on order | 50% Remaining Payment before dispatch.",
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
      f1Title: "20 Years Work",
      f1Desc: "Direct manufacturing experience since 2006 in Mumbai.",
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
      catBrushes: "Carbon Brushes",
      catHolders: "Brush Holders",
      catRings: "Slip Rings",
      catCustom: "Custom Solution",
      placeholderMsg: "Describe pocket sizes, bevels, shunts, or note if you are shipping a sample to us...",
    },
    footer: {
      desc: "Crown Carbon Brush manufactures custom carbon brushes, holders, and slip rings to match industrial blueprints in Mumbai since 2006.",
      tagline: "We care for your armatures, fulfilling the highest quality standards.",
      navTitle: "Quick Links",
      catTitle: "Products",
      officeTitle: "Contact Info",
      officeVal: "Malad West, Mumbai, 400095, Maharashtra, India",
      madeInIndia: "Made in India",
    },
  },
  hi: {
    nav: {
      home: "मुख्य पृष्ठ",
      about: "हमारे बारे में",
      products: "उत्पाद",
      industries: "उद्योग",
      infrastructure: "प्रक्रिया और सैंपल",
      contact: "संपर्क",
      quote: "पूछताछ भेजें",
      techQuote: "स्पेक्स कोटेशन",
    },
    hero: {
      badge: "स्थापना 2006 | मुंबई",
      title: "कस्टम निर्मित",
      subtitle: "कार्बन ब्रश",
      desc: "हम उच्च गुणवत्ता वाले कार्बन ब्रश, होल्डर और स्लिप रिंग बनाते हैं। हमें सैंपल भेजें—हम बिल्कुल वैसा ही उत्पाद तैयार करेंगे।",
      tagline: "हम आपके आर्मेचर की सुरक्षा करते हैं, उच्चतम गुणवत्ता मानकों को पूरा करते हैं।",
      ctaSolutions: "उत्पाद श्रेणियां",
      ctaContact: "सैंपल भेजें",
      h1: "उच्च तापीय सहनशीलता",
      h2: "सैंपल रेप्लीकेशन",
      h3: "स्पार्क-रोधी सामग्री",
    },
    about: {
      kicker: "01 / हम कौन हैं",
      title: "कार्बन ब्रश विशेषज्ञ",
      desc1: "2006 से, क्राउन कार्बन ब्रश मुंबई में मोटर स्पेयर पार्ट्स के विनिर्माण में कार्यरत है। हम सीधे फैक्ट्रियों को आपूर्ति करते हैं।",
      desc2: "अपना पुराना या टूटा हुआ पार्ट हमें भेजें। हम लैब में ग्रेड की जांच करके बिल्कुल वैसा ही नया उत्पाद तैयार करते हैं।",
      statYears: "20 वर्ष",
      statYearsDesc: "सटीक विनिर्माण का लंबा अनुभव",
      statOem: "100+ ग्रेड्स",
      statOemDesc: "औद्योगिक मानकों के अनुकूल सामग्री",
      statUnits: "500k+ उत्पाद",
      statUnitsDesc: "प्रतिवर्ष फैक्ट्रियों को भेजे गए पार्ट्स",
      statNetwork: "अखिल भारतीय",
      statNetworkDesc: "सीधी आपूर्ति और तकनीकी सहायता",
      qaLabel: "लैब टेस्टिंग",
      qaVal: "ग्रेड अंशांकन",
    },
    products: {
      kicker: "02 / उत्पाद रेंज",
      title: "सटीक फिटिंग के लिए सैंपल भेजें",
      desc: "हम मशीन की गति और लोड के अनुसार उत्पाद बनाते हैं। विनिर्देशों को देखने के लिए श्रेणी चुनें।",
      downloadCat: "कैटलॉग डाउनलोड करें",
      tabBrushes: "कार्बन ब्रश",
      tabHolders: "ब्रश होल्डर्स",
      tabRings: "स्लिप रिंग्स",
      specsTitle: "तकनीकी विशिष्टता",
      specsSub: "मानक श्रेणियां",
      advLabel: "संचालन लाभ",
      gradesLabel: "उपलब्ध ग्रेड विकल्प",
      opEnvLabel: "लक्षित उद्योग क्षेत्र",
      enquiryBtn: "इस पुर्जे की पूछताछ भेजें",
      drawingBtn: "स्पेक्स सत्यापन का अनुरोध",
      brushesTitle: "औद्योगिक कार्बन ब्रश",
      brushesSub: "स्थिर मोटर कम्यूटेशन के लिए अनुकूलित उत्पाद",
      brushesDesc: "कम्यूटेटर की सुरक्षा के लिए डिज़ाइन किए गए कार्बन ब्रश। इलेक्ट्रो-ग्रेफाइट और तांबा-ग्रेफाइट में उपलब्ध।",
      brushesF1: "अधिक कंपन और लोड में भी कम घिसावट",
      brushesF2: "सटीक बेवलिंग और तांबे के शंट फिटिंग",
      brushesF3: "इंसुलेटेड स्लीव्स के साथ मजबूत शंट केबल",
      brushesF4: "स्पार्किंग रोकने के लिए सही डेंसिटी रेटिंग",
      holdersTitle: "स्थिर-दबाव ब्रश होल्डर्स",
      holdersSub: "कांस्य/पीतल के असेंबली और स्प्रिंग्स",
      holdersDesc: "ब्रश के घिसने पर भी समान दबाव बनाए रखता है जिससे घर्षण और स्पार्किंग नियंत्रित रहती है।",
      holdersF1: "जंग-प्रतिरोधी कांस्य या पीतल मिश्र धातु",
      holdersF2: "सैंडविक स्टेनलेस स्टील स्थिर-दबाव स्प्रिंग्स",
      holdersF3: "DIN मानकों के अनुकूल सटीक स्लॉट आकार",
      holdersF4: "Class H श्रेणी के मजबूत इंसुलेशन कम्पोनेंट्स",
      ringsTitle: "सटीक स्लिप रिंग्स",
      ringsSub: "विद्युत प्रवाह के लिए रोटरी जॉइंट्स",
      ringsDesc: "घूमते हुए शाफ्ट पर सुरक्षित और लगातार विद्युत प्रवाह प्रदान करने में सक्षम।",
      ringsF1: "पॉलिश किए गए तांबे या फास्फोरस कांस्य ट्रैक",
      ringsF2: "उच्च वोल्टेज सुरक्षा के लिए मोल्डेड कोर",
      ringsF3: "आसान स्थापना के लिए स्प्लिट या सॉलिड लेआउट",
      ringsF4: "24V DC से लेकर 11kV AC तक की वोल्टेज रेंज",
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
      },
    },
    capabilities: {
      kicker: "03 / प्रक्रिया और क्षमता",
      title: "सैंपल-से-उत्पादन प्रक्रिया",
      desc: "हम आपके सैंपल के आधार पर कार्बन पुर्जे तैयार करते हैं। हमारी पूरी प्रक्रिया स्पष्ट और सीधी है।",
      processKicker: "व्यावसायिक शर्तें",
      processTitle: "मूल्य निर्धारण और प्रेषण नियम",
      payLabel: "भुगतान शर्तें",
      payDesc: "ऑर्डर के समय 50% अग्रिम (Advance) भुगतान | प्रेषण (Dispatch) से पहले शेष 50% भुगतान।",
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
      f1Title: "20 वर्ष का काम",
      f1Desc: "मुंबई में 2006 से सीधे कार्बन पुर्जों के निर्माण का अनुभव।",
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
      catHolders: "ब्रश होल्डर्स",
      catRings: "स्लिप रिंग्स",
      catCustom: "कस्टम समाधान",
      placeholderMsg: "यहाँ पॉकेट का आकार, बेवल कोण, स्प्रिंग तनाव या शंट केबल का विवरण लिखें...",
    },
    footer: {
      desc: "क्राउन कार्बन ब्रश 2006 से मुंबई में उद्योगों के ब्लूप्रिंट और सैंपल के अनुसार भारी-शुल्क कार्बन पुर्जों का निर्माण करता है।",
      tagline: "हम आपके आर्मेचर की सुरक्षा करते हैं, उच्चतम गुणवत्ता मानकों को पूरा करते हैं।",
      navTitle: "त्वरित लिंक्स",
      catTitle: "उत्पाद",
      officeTitle: "संपर्क विवरण",
      officeVal: "मलाड वेस्ट, Mumbai, 400095, महाराष्ट्र, भारत",
      madeInIndia: "मेड इन इंडिया",
    },
  },
};
