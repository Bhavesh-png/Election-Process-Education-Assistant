export const electionData = {
  timeline: [
    {
      id: 1,
      title: { en: "Voter Registration", hi: "मतदाता पंजीकरण" },
      description: {
        en: "Citizens aged 18 and above register to vote. The Election Commission updates the electoral roll.",
        hi: "18 वर्ष और उससे अधिक आयु के नागरिक मतदान के लिए पंजीकरण करते हैं। चुनाव आयोग मतदाता सूची को अपडेट करता है।"
      }
    },
    {
      id: 2,
      title: { en: "Announcement of Dates", hi: "तिथियों की घोषणा" },
      description: {
        en: "The Election Commission announces the polling dates and enforces the Model Code of Conduct.",
        hi: "चुनाव आयोग मतदान की तिथियों की घोषणा करता है और आदर्श आचार संहिता लागू करता है।"
      }
    },
    {
      id: 3,
      title: { en: "Nomination & Campaigning", hi: "नामांकन और चुनाव प्रचार" },
      description: {
        en: "Candidates file nominations and campaign to explain their promises to voters.",
        hi: "उम्मीदवार नामांकन दाखिल करते हैं और मतदाताओं को अपने वादों को समझाने के लिए प्रचार करते हैं।"
      }
    },
    {
      id: 4,
      title: { en: "Polling Day", hi: "मतदान का दिन" },
      description: {
        en: "Voters go to polling booths to cast their votes securely using EVMs (Electronic Voting Machines).",
        hi: "मतदाता ईवीएम (इलेक्ट्रॉनिक वोटिंग मशीन) का उपयोग करके सुरक्षित रूप से अपना वोट डालने के लिए मतदान केंद्रों पर जाते हैं।"
      }
    },
    {
      id: 5,
      title: { en: "Counting & Results", hi: "मतगणना और परिणाम" },
      description: {
        en: "Votes are counted under strict supervision, and the winner is declared.",
        hi: "सख्त निगरानी में वोटों की गिनती की जाती है, और विजेता घोषित किया जाता है।"
      }
    }
  ],
  glossary: [
    {
      term: { en: "EVM", hi: "ईवीएम" },
      definition: {
        en: "Electronic Voting Machine: A secure device used to record votes electronically instead of using paper ballots.",
        hi: "इलेक्ट्रॉनिक वोटिंग मशीन: एक सुरक्षित उपकरण जिसका उपयोग पेपर बैलेट के बजाय इलेक्ट्रॉनिक रूप से वोट रिकॉर्ड करने के लिए किया जाता है।"
      }
    },
    {
      term: { en: "NOTA", hi: "नोटा (NOTA)" },
      definition: {
        en: "None Of The Above: An option allowing voters to reject all candidates in an election if they find none suitable.",
        hi: "इनमें के कोई नहीं: एक विकल्प जो मतदाताओं को चुनाव में सभी उम्मीदवारों को अस्वीकार करने की अनुमति देता है यदि उन्हें कोई उपयुक्त नहीं लगता है।"
      }
    },
    {
      term: { en: "Constituency", hi: "निर्वाचन क्षेत्र" },
      definition: {
        en: "A specific geographical area that is represented by a member in the legislative body.",
        hi: "एक विशिष्ट भौगोलिक क्षेत्र जिसका प्रतिनिधित्व विधायी निकाय में एक सदस्य द्वारा किया जाता है।"
      }
    },
    {
      term: { en: "Voter ID / EPIC", hi: "वोटर आईडी / एपिक" },
      definition: {
        en: "Electors Photo Identity Card: An official document required to cast a vote.",
        hi: "मतदाता फोटो पहचान पत्र: वोट डालने के लिए आवश्यक एक आधिकारिक दस्तावेज।"
      }
    },
    {
      term: { en: "VVPAT", hi: "वीवीपैट (VVPAT)" },
      definition: {
        en: "Voter Verifiable Paper Audit Trail: A machine that provides feedback to voters using a paper slip.",
        hi: "वोटर वेरिफ़िएबल पेपर ऑडिट ट्रेल: एक मशीन जो पेपर स्लिप का उपयोग करके मतदाताओं को फीडबैक प्रदान करती है।"
      }
    }
  ],
  quiz: [
    {
      id: "QZ001",
      question: {
        en: "What is the minimum age required to vote in India?",
        hi: "भारत में मतदान करने के लिए आवश्यक न्यूनतम आयु क्या है?"
      },
      options: {
        en: ["16 years", "18 years", "21 years", "25 years"],
        hi: ["16 वर्ष", "18 वर्ष", "21 वर्ष", "25 वर्ष"]
      },
      correctAnswer: 1,
      explanation: {
        en: "Article 326 of the Constitution sets the minimum voting age at 18 years.",
        hi: "संविधान का अनुच्छेद 326 न्यूनतम मतदान आयु 18 वर्ष निर्धारित करता है।"
      }
    },
    {
      id: "QZ002",
      question: {
        en: "Which form is used for new voter registration in India?",
        hi: "भारत में नए मतदाता पंजीकरण के लिए किस फॉर्म का उपयोग किया जाता है?"
      },
      options: {
        en: ["Form 4", "Form 6", "Form 8", "Form 12"],
        hi: ["फॉर्म 4", "फॉर्म 6", "फॉर्म 8", "फॉर्म 12"]
      },
      correctAnswer: 1,
      explanation: {
        en: "Form 6 is the application for fresh inclusion in the Electoral Roll for first-time voters.",
        hi: "फॉर्म 6 पहली बार के मतदाताओं के लिए मतदाता सूची में नए शामिल होने का आवेदन है।"
      }
    },
    {
      id: "QZ003",
      question: {
        en: "Which form is used to change your address within the same constituency on the voter roll?",
        hi: "मतदाता सूची में उसी निर्वाचन क्षेत्र के भीतर अपना पता बदलने के लिए किस फॉर्म का उपयोग किया जाता है?"
      },
      options: {
        en: ["Form 6", "Form 7", "Form 8", "Form 8A"],
        hi: ["फॉर्म 6", "फॉर्म 7", "फॉर्म 8", "फॉर्म 8A"]
      },
      correctAnswer: 3,
      explanation: {
        en: "Form 8A is for transposition (address change within same constituency).",
        hi: "फॉर्म 8A स्थानांतरण (एक ही निर्वाचन क्षेत्र के भीतर पता परिवर्तन) के लिए है।"
      }
    },
    {
      id: "QZ005",
      question: {
        en: "NOTA stands for:",
        hi: "नोटा (NOTA) का मतलब है:"
      },
      options: {
        en: ["No Other Trusted Alternative", "None Of The Applicants", "None Of The Above", "Not On The Affidavit"],
        hi: ["कोई अन्य विश्वसनीय विकल्प नहीं", "आवेदकों में से कोई नहीं", "इनमें से कोई नहीं", "शपथ पत्र पर नहीं"]
      },
      correctAnswer: 2,
      explanation: {
        en: "NOTA (None Of The Above) was introduced in 2013 by Supreme Court order.",
        hi: "नोटा (इनमें से कोई नहीं) को 2013 में सुप्रीम कोर्ट के आदेश से पेश किया गया था।"
      }
    },
    {
      id: "QZ006",
      question: {
        en: "VVPAT slip is visible to the voter for how many seconds before it drops?",
        hi: "VVPAT पर्ची गिरने से पहले मतदाता को कितने सेकंड तक दिखाई देती है?"
      },
      options: {
        en: ["3 seconds", "5 seconds", "7 seconds", "10 seconds"],
        hi: ["3 सेकंड", "5 सेकंड", "7 सेकंड", "10 सेकंड"]
      },
      correctAnswer: 2,
      explanation: {
        en: "The VVPAT slip is displayed in a transparent window for exactly 7 seconds.",
        hi: "VVPAT पर्ची ठीक 7 सेकंड के लिए एक पारदर्शी खिड़की में प्रदर्शित की जाती है।"
      }
    },
    {
      id: "QZ011",
      question: {
        en: "Which article of the Indian Constitution establishes the Election Commission?",
        hi: "भारतीय संविधान का कौन सा अनुच्छेद चुनाव आयोग की स्थापना करता है?"
      },
      options: {
        en: ["Article 280", "Article 300", "Article 324", "Article 356"],
        hi: ["अनुच्छेद 280", "अनुच्छेद 300", "अनुच्छेद 324", "अनुच्छेद 356"]
      },
      correctAnswer: 2,
      explanation: {
        en: "Article 324 vests control of all elections in the Election Commission of India.",
        hi: "अनुच्छेद 324 भारत निर्वाचन आयोग में सभी चुनावों का नियंत्रण निहित करता है।"
      }
    },
    {
      id: "QZ012",
      question: {
        en: "How many elected seats are there in the Lok Sabha?",
        hi: "लोकसभा में कितनी निर्वाचित सीटें हैं?"
      },
      options: {
        en: ["500", "525", "543", "552"],
        hi: ["500", "525", "543", "552"]
      },
      correctAnswer: 2,
      explanation: {
        en: "Lok Sabha has 543 elected seats.",
        hi: "लोकसभा में 543 निर्वाचित सीटें हैं।"
      }
    },
    {
      id: "QZ013",
      question: {
        en: "Which electoral system is used for Lok Sabha elections in India?",
        hi: "भारत में लोकसभा चुनावों के लिए कौन सी चुनावी प्रणाली उपयोग की जाती है?"
      },
      options: {
        en: ["Proportional Representation", "First Past The Post (FPTP)", "Two-Round System", "Ranked Choice Voting"],
        hi: ["आनुपातिक प्रतिनिधित्व", "फर्स्ट पास्ट द पोस्ट (FPTP)", "दो-चरणीय प्रणाली", "रैंक च्वाइस वोटिंग"]
      },
      correctAnswer: 1,
      explanation: {
        en: "India uses the First Past The Post (FPTP) system.",
        hi: "भारत फर्स्ट पास्ट द पोस्ट (FPTP) प्रणाली का उपयोग करता है।"
      }
    },
    {
      id: "QZ015",
      question: {
        en: "The Model Code of Conduct (MCC) comes into effect from:",
        hi: "आदर्श आचार संहिता (MCC) कब से प्रभावी होती है?"
      },
      options: {
        en: ["Date of voting", "Date of election announcement", "Date of nomination", "Date of results"],
        hi: ["मतदान की तारीख", "चुनाव घोषणा की तारीख", "नामांकन की तारीख", "परिणाम की तारीख"]
      },
      correctAnswer: 1,
      explanation: {
        en: "MCC activates the moment ECI announces the election schedule.",
        hi: "ईसीआई द्वारा चुनाव कार्यक्रम की घोषणा करते ही एमसीसी सक्रिय हो जाता है।"
      }
    },
    {
      id: "QZ022",
      question: {
        en: "EVM stands for:",
        hi: "EVM का अर्थ है:"
      },
      options: {
        en: ["Electronic Voter Module", "Electoral Verification Machine", "Electronic Voting Machine", "Electro-Vote Monitor"],
        hi: ["इलेक्ट्रॉनिक वोटर मॉड्यूल", "इलेक्टोरल वेरिफिकेशन मशीन", "इलेक्ट्रॉनिक वोटिंग मशीन", "इलेक्ट्रो-वोट मॉनिटर"]
      },
      correctAnswer: 2,
      explanation: {
        en: "EVM = Electronic Voting Machine.",
        hi: "ईवीएम = इलेक्ट्रॉनिक वोटिंग मशीन।"
      }
    }
  ],
  intents: [
    {
      keywords: ["how to register", "new voter", "sign up", "enroll", "पंजीकरण", "नया मतदाता"],
      response: {
        en: "You can register online via voters.eci.gov.in using Form 6. You will need age and address proof. Alternatively, you can visit your local Booth Level Officer (BLO).",
        hi: "आप फॉर्म 6 का उपयोग करके voters.eci.gov.in के माध्यम से ऑनलाइन पंजीकरण कर सकते हैं। आपको आयु और पते के प्रमाण की आवश्यकता होगी। वैकल्पिक रूप से, आप अपने स्थानीय बूथ स्तर के अधिकारी (BLO) के पास जा सकते हैं।"
      }
    },
    {
      keywords: ["documents", "id proof", "address proof", "दस्तावेज", "पहचान पत्र"],
      response: {
        en: "Commonly accepted documents include Aadhaar Card, Passport, Driving Licence, Ration Card, or Bank Passbook as address proof.",
        hi: "सामान्य रूप से स्वीकार किए जाने वाले दस्तावेजों में आधार कार्ड, पासपोर्ट, ड्राइविंग लाइसेंस, राशन कार्ड या बैंक पासबुक पते के प्रमाण के रूप में शामिल हैं।"
      }
    },
    {
      keywords: ["moved", "new city", "address change", "स्थानांतरित", "पता बदलें"],
      response: {
        en: "If you move within the same constituency, use Form 8A. For a new constituency, use Form 6 for fresh registration.",
        hi: "यदि आप उसी निर्वाचन क्षेत्र के भीतर स्थानांतरित होते हैं, तो फॉर्म 8A का उपयोग करें। नए निर्वाचन क्षेत्र के लिए, नए पंजीकरण के लिए फॉर्म 6 का उपयोग करें।"
      }
    },
    {
      keywords: ["age", "eligibility", "18", "उम्र", "योग्यता"],
      response: {
        en: "The minimum age to vote is 18 years as of 1st January of the election year. This is guaranteed by Article 326 of the Indian Constitution.",
        hi: "मतदान करने की न्यूनतम आयु चुनाव वर्ष की 1 जनवरी तक 18 वर्ष है। यह भारतीय संविधान के अनुच्छेद 326 द्वारा गारंटीकृत है।"
      }
    },
    {
      keywords: ["voter list", "name search", "electoral roll", "मतदाता सूची", "नाम खोजें"],
      response: {
        en: "Check your name on voters.eci.gov.in, use the Voter Helpline App, or SMS your EPIC number to 1950.",
        hi: "voters.eci.gov.in पर अपना नाम जांचें, वोटर हेल्पलाइन ऐप का उपयोग करें, या अपना EPIC नंबर 1950 पर SMS करें।"
      }
    },
    {
      keywords: ["deadline", "cutoff", "last date", "अंतिम तिथि", "समय सीमा"],
      response: {
        en: "The registration deadline varies by election phase. Generally, you should register at least 3-4 weeks before the polling date.",
        hi: "पंजीकरण की समय सीमा चुनाव चरण के अनुसार भिन्न होती है। आम तौर पर, आपको मतदान की तारीख से कम से कम 3-4 सप्ताह पहले पंजीकरण करना चाहिए।"
      }
    },
    {
      keywords: ["nri", "overseas", "abroad", "एनआरआई", "विदेश"],
      response: {
        en: "NRIs with a valid Indian passport can register using Form 6A. However, they must visit their registered constituency in India to vote in person.",
        hi: "वैध भारतीय पासपोर्ट वाले एनआरआई फॉर्म 6A का उपयोग करके पंजीकरण कर सकते हैं। हालांकि, उन्हें व्यक्तिगत रूप से वोट डालने के लिए भारत में अपने पंजीकृत निर्वाचन क्षेत्र में जाना होगा।"
      }
    },
    {
      keywords: ["correction", "error", "name change", "सुधार", "नाम बदलें"],
      response: {
        en: "For corrections in name, photo, age, or address, submit Form 8 online at the ECI portal with supporting documents.",
        hi: "नाम, फोटो, आयु या पते में सुधार के लिए, सहायक दस्तावेजों के साथ ECI पोर्टल पर ऑनलाइन फॉर्म 8 जमा करें।"
      }
    },
    {
      keywords: ["blo", "booth level officer", "बीएलओ"],
      response: {
        en: "A BLO (Booth Level Officer) is a local official who handles voter registration, corrections, and deletions at the ground level.",
        hi: "बीएलओ (बूथ स्तर का अधिकारी) एक स्थानीय अधिकारी होता है जो जमीनी स्तर पर मतदाता पंजीकरण, सुधार और विलोपन का कार्य करता है।"
      }
    },
    {
      keywords: ["dual registration", "two places", "illegal", "दोहरा पंजीकरण", "अवैध"],
      response: {
        en: "No, dual registration is illegal under Section 17 of the Representation of the People Act, 1950. You can only be registered in one place.",
        hi: "नहीं, जनप्रतिनिधित्व अधिनियम, 1950 की धारा 17 के तहत दोहरा पंजीकरण अवैध है। आप केवल एक ही स्थान पर पंजीकृत हो सकते हैं।"
      }
    },
    {
      keywords: ["polling booth", "where to vote", "location", "मतदान केंद्र", "कहां वोट दें"],
      response: {
        en: "Locate your booth on voters.eci.gov.in, the Voter Helpline App, or call 1950 with your EPIC number.",
        hi: "voters.eci.gov.in, वोटर हेल्पलाइन ऐप पर अपना बूथ खोजें, या अपने EPIC नंबर के साथ 1950 पर कॉल करें।"
      }
    },
    {
      keywords: ["time", "hours", "open", "close", "समय", "कितने बजे"],
      response: {
        en: "Polling hours are generally 7 AM to 6 PM. Check the specific notification for your constituency for any variations.",
        hi: "मतदान का समय आम तौर पर सुबह 7 बजे से शाम 6 बजे तक होता है। किसी भी बदलाव के लिए अपने निर्वाचन क्षेत्र की विशिष्ट अधिसूचना देखें।"
      }
    },
    {
      keywords: ["no voter id", "lost card", "alternative id", "वोटर आईडी नहीं", "वैकल्पिक आईडी"],
      response: {
        en: "Yes, if your name is in the list, you can vote using Aadhaar, Passport, PAN Card, Driving Licence, or MNREGA job card.",
        hi: "हां, यदि आपका नाम सूची में है, तो आप आधार, पासपोर्ट, पैन कार्ड, ड्राइविंग लाइसेंस या मनरेगा जॉब कार्ड का उपयोग करके वोट दे सकते हैं।"
      }
    },
    {
      keywords: ["nota", "none of the above", "नोटा"],
      response: {
        en: "NOTA (None Of The Above) is the last button on the EVM. It allows you to express that you do not support any candidate.",
        hi: "नोटा (इनमें से कोई नहीं) EVM पर अंतिम बटन है। यह आपको यह व्यक्त करने की अनुमति देता है कि आप किसी भी उम्मीदवार का समर्थन नहीं करते हैं।"
      }
    },
    {
      keywords: ["evm", "voting machine", "ईवीएम"],
      response: {
        en: "EVM (Electronic Voting Machine) is a secure device consisting of a Control Unit and a Ballot Unit. It is air-gapped and not connected to the internet.",
        hi: "ईवीएम (इलेक्ट्रॉनिक वोटिंग मशीन) एक सुरक्षित उपकरण है जिसमें एक कंट्रोल यूनिट और एक बैलेट यूनिट होती है। यह एयर-गैप्ड है और इंटरनेट से जुड़ा नहीं है।"
      }
    },
    {
      keywords: ["vvpat", "paper trail", "audit", "वीवीपैट"],
      response: {
        en: "VVPAT (Voter Verifiable Paper Audit Trail) prints a slip showing your choice for 7 seconds to verify your vote.",
        hi: "वीवीपैट (वोटर वेरिफ़िएबल पेपर ऑडिट ट्रेल) आपके वोट को सत्यापित करने के लिए 7 सेकंड के लिए आपकी पसंद की एक पर्ची प्रिंट करता है।"
      }
    },
    {
      keywords: ["disabled", "wheelchair", "accessibility", "दिव्यांग", "व्हीलचेयर"],
      response: {
        en: "Polling stations provide priority queues, wheelchair ramps, companion assistance, and Braille EVM strips for differently abled voters.",
        hi: "मतदान केंद्रों पर दिव्यांग मतदाताओं के लिए प्राथमिकता वाली कतारें, व्हीलचेयर रैंप, साथी सहायता और ब्रेल ईवीएम स्ट्रिप्स प्रदान की जाती हैं।"
      }
    },
    {
      keywords: ["mistake", "wrong button", "गलती", "गलत बटन"],
      response: {
        en: "Once a button is pressed, the vote is recorded immediately. There is no option to undo or change your vote.",
        hi: "एक बार बटन दबाने के बाद, वोट तुरंत रिकॉर्ड हो जाता है। अपने वोट को पूर्ववत करने या बदलने का कोई विकल्प नहीं है।"
      }
    },
    {
      keywords: ["postal ballot", "mail vote", "home vote", "पोस्टल बैलेट", "घर से वोट"],
      response: {
        en: "Postal ballots are available for service voters, seniors 85+, and PwD voters who cannot visit the booth.",
        hi: "पोस्टल बैलेट सेवा मतदाताओं, 85 वर्ष से अधिक के वरिष्ठ नागरिकों और दिव्यांग मतदाताओं के लिए उपलब्ध हैं जो बूथ पर नहीं जा सकते।"
      }
    },
    {
      keywords: ["mock poll", "test", "मॉक पोल", "परीक्षण"],
      response: {
        en: "A mock poll is conducted before actual voting starts to verify machine accuracy in the presence of political agents.",
        hi: "राजनीतिक एजेंटों की उपस्थिति में मशीन की सटीकता को सत्यापित करने के लिए वास्तविक मतदान शुरू होने से पहले एक मॉक पोल आयोजित किया जाता है।"
      }
    },
    {
      keywords: ["who is running", "candidate list", "उम्मीदवारों की सूची"],
      response: {
        en: "You can find the list of candidates for your constituency on the ECI website or through the Voter Helpline App.",
        hi: "आप ECI की वेबसाइट पर या वोटर हेल्पलाइन ऐप के माध्यम से अपने निर्वाचन क्षेत्र के उम्मीदवारों की सूची पा सकते हैं।"
      }
    },
    {
      keywords: ["criminal", "assets", "affidavit", "अपराधिक रिकॉर्ड", "संपत्ति"],
      response: {
        en: "ECI mandates candidates to file affidavits detailing criminal records and assets. Check myneta.info or the ECI affidavit portal.",
        hi: "ECI उम्मीदवारों को आपराधिक रिकॉर्ड और संपत्ति का विवरण देते हुए हलफनामा दाखिल करना अनिवार्य करता है। myneta.info या ECI हलफनामा पोर्टल देखें।"
      }
    },
    {
      keywords: ["national party", "regional party", "राष्ट्रीय पार्टी", "क्षेत्रीय पार्टी"],
      response: {
        en: "National parties are recognized in 4+ states with 6% vote share. Regional parties meet criteria in only one state.",
        hi: "राष्ट्रीय पार्टियों को 4 से अधिक राज्यों में 6% वोट शेयर के साथ मान्यता प्राप्त है। क्षेत्रीय पार्टियाँ केवल एक राज्य में मानदंडों को पूरा करती हैं।"
      }
    },
    {
      keywords: ["symbol", "independent", "चुनाव चिह्न", "स्वतंत्र"],
      response: {
        en: "Recognized parties have reserved symbols. Independents choose from a list of free symbols provided by the ECI.",
        hi: "मान्यता प्राप्त दलों के पास आरक्षित चिह्न होते हैं। स्वतंत्र उम्मीदवार ECI द्वारा प्रदान किए गए मुफ्त प्रतीकों की सूची में से चुनते हैं।"
      }
    },
    {
      keywords: ["spending", "campaign limit", "खर्च", "प्रचार सीमा"],
      response: {
        en: "The expenditure limit is roughly ₹95 lakh for Lok Sabha and ₹40 lakh for State Assembly elections in large states.",
        hi: "बड़े राज्यों में लोकसभा के लिए खर्च की सीमा लगभग ₹95 लाख और विधानसभा चुनावों के लिए ₹40 लाख है।"
      }
    },
    {
      keywords: ["education", "qualification", "शिक्षा", "योग्यता"],
      response: {
        en: "There is no minimum educational qualification required to contest. Candidates must be 25+ for Lok Sabha.",
        hi: "चुनाव लड़ने के लिए किसी न्यूनतम शैक्षणिक योग्यता की आवश्यकता नहीं है। उम्मीदवारों की आयु लोकसभा के लिए 25+ होनी चाहिए।"
      }
    },
    {
      keywords: ["fptp", "voting system", "फर्स्ट पास्ट द पोस्ट"],
      response: {
        en: "First Past The Post means the candidate with the most votes wins, even if they don't have a majority (50%+).",
        hi: "फर्स्ट पास्ट द पोस्ट का मतलब है कि सबसे अधिक वोट पाने वाला उम्मीदवार जीतता है, भले ही उनके पास बहुमत (50%+) न हो।"
      }
    },
    {
      keywords: ["parliament", "lok sabha", "rajya sabha", "संसद", "लोकसभा"],
      response: {
        en: "Lok Sabha is the Lower House (directly elected), while Rajya Sabha is the Upper House (indirectly elected by MLAs).",
        hi: "लोकसभा निचला सदन है (सीधे निर्वाचित), जबकि राज्यसभा उच्च सदन है (विधायकों द्वारा अप्रत्यक्ष रूप से निर्वाचित)।"
      }
    },
    {
      keywords: ["mcc", "code of conduct", "आचार संहिता"],
      response: {
        en: "The Model Code of Conduct bans the government from announcing new schemes and using state resources for campaigning.",
        hi: "आदर्श आचार संहिता सरकार को नई योजनाओं की घोषणा करने और प्रचार के लिए राज्य के संसाधनों का उपयोग करने से रोकती है।"
      }
    },
    {
      keywords: ["delimitation", "constituency boundary", "परिसीमन"],
      response: {
        en: "Delimitation is the process of redrawing constituency boundaries based on the latest census data.",
        hi: "परिसीमन नवीनतम जनगणना डेटा के आधार पर निर्वाचन क्षेत्र की सीमाओं को फिर से खींचने की प्रक्रिया है।"
      }
    },
    {
      keywords: ["by-election", "upchunav", "उपचुनाव"],
      response: {
        en: "A by-election is held when a seat becomes vacant due to the death, resignation, or disqualification of an MP/MLA.",
        hi: "उपचुनाव तब आयोजित किया जाता है जब किसी सांसद/विधायक की मृत्यु, इस्तीफे या अयोग्यता के कारण कोई सीट खाली हो जाती है।"
      }
    },
    {
      keywords: ["exit poll", "prediction", "एग्जिट पोल"],
      response: {
        en: "Exit polls predict results based on voter interviews after they leave the booth. Results are only shown after all voting phases.",
        hi: "एग्जिट पोल बूथ छोड़ने के बाद मतदाताओं के साक्षात्कार के आधार पर परिणामों की भविष्यवाणी करते हैं। परिणाम सभी मतदान चरणों के बाद ही दिखाए जाते हैं।"
      }
    },
    {
      keywords: ["results", "counting day", "परिणाम", "गिनती का दिन"],
      response: {
        en: "Live results can be tracked on results.eci.gov.in, the Voter Helpline App, or news channels on counting day.",
        hi: "लाइव परिणाम मतगणना के दिन results.eci.gov.in, वोटर हेल्पलाइन ऐप या समाचार चैनलों पर देखे जा सकते हैं।"
      }
    },
    {
      keywords: ["vote counting", "segments", "मतगणना"],
      response: {
        en: "Counting is done segment-wise at secure centers under the observation of official agents and observers.",
        hi: "आधिकारिक एजेंटों और पर्यवेक्षकों की देखरेख में सुरक्षित केंद्रों पर खंडवार मतगणना की जाती है।"
      }
    },
    {
      keywords: ["tie", "equal votes", "टाई", "बराबर वोट"],
      response: {
        en: "In case of a tie, the Returning Officer decides the winner by a draw of lots (lottery).",
        hi: "टाई होने की स्थिति में, रिटर्निंग ऑफिसर लॉटरी द्वारा विजेता का फैसला करता है।"
      }
    },
    {
      keywords: ["petition", "court challenge", "चुनाव याचिका"],
      response: {
        en: "Election results can be challenged by filing an election petition in the High Court within 45 days.",
        hi: "चुनाव परिणामों को 45 दिनों के भीतर उच्च न्यायालय में चुनाव याचिका दायर करके चुनौती दी जा सकती है।"
      }
    },
    {
      keywords: ["mandatory", "compulsory", "अनिवार्य"],
      response: {
        en: "Voting is not compulsory at the national level in India, though it is encouraged as a civic duty.",
        hi: "भारत में राष्ट्रीय स्तर पर मतदान अनिवार्य नहीं है, हालांकि इसे नागरिक कर्तव्य के रूप में प्रोत्साहित किया जाता है।"
      }
    },
    {
      keywords: ["harassment", "complaint at booth", "उत्पीड़न", "शिकायत"],
      response: {
        en: "Report any harassment to the Presiding Officer at the booth or call the 1950 helpline immediately.",
        hi: "बूथ पर पीठासीन अधिकारी को किसी भी उत्पीड़न की रिपोर्ट करें या तुरंत 1950 हेल्पलाइन पर कॉल करें।"
      }
    },
    {
      keywords: ["selfie", "photography", "सेल्फी", "फोटो"],
      response: {
        en: "Photography or taking selfies inside the voting booth is strictly prohibited and illegal.",
        hi: "मतदान केंद्र के भीतर फोटोग्राफी या सेल्फी लेना सख्त मना है और अवैध है।"
      }
    },
    {
      keywords: ["bribery", "cash for votes", "रिश्वत", "वोट के लिए नकद"],
      response: {
        en: "Report bribery or distribution of cash/gifts via the cVIGIL app. Your identity will remain confidential.",
        hi: "cVIGIL ऐप के माध्यम से रिश्वत या नकद/उपहार के वितरण की रिपोर्ट करें। आपकी पहचान गोपनीय रहेगी।"
      }
    },
    {
      keywords: ["convict", "prison", "दोषी", "जेल"],
      response: {
        en: "Undertrials can vote, but convicted persons serving a sentence of 2+ years cannot contest elections.",
        hi: "विचाराधीन कैदी वोट दे सकते हैं, लेकिन 2+ साल की सजा काट रहे दोषी व्यक्ति चुनाव नहीं लड़ सकते।"
      }
    },
    {
      keywords: ["hacked", "tampered", "हैकिंग", "छेड़छाड़"],
      response: {
        en: "EVMs are standalone machines with no wireless tech, making them immune to remote hacking or internet-based tampering.",
        hi: "ईवीएम स्टैंडअलोन मशीनें हैं जिनमें कोई वायरलेस तकनीक नहीं है, जो उन्हें रिमोट हैकिंग या इंटरनेट आधारित छेड़छाड़ से सुरक्षित बनाती हैं।"
      }
    },
    {
      keywords: ["helpline app", "मोबाइल ऐप"],
      response: {
        en: "The Voter Helpline App is the official ECI app for registration, checking names, and finding booth info.",
        hi: "वोटर हेल्पलाइन ऐप पंजीकरण, नाम जांचने और बूथ की जानकारी प्राप्त करने के लिए आधिकारिक ECI ऐप है।"
      }
    },
    {
      keywords: ["cvigil", "सीविजिल"],
      response: {
        en: "cVIGIL is for reporting MCC violations. Take a photo or video and ECI will respond within 100 minutes.",
        hi: "सीविजिल (cVIGIL) आचार संहिता के उल्लंघन की रिपोर्ट करने के लिए है। फोटो या वीडियो लें और ECI 100 मिनट के भीतर जवाब देगा।"
      }
    },
    {
      keywords: ["kyc", "know your candidate", "केवाईसी"],
      response: {
        en: "The KYC feature on the Voter Helpline App shows criminal backgrounds and financial assets of candidates.",
        hi: "वोटर हेल्पलाइन ऐप पर केवाईसी (KYC) सुविधा उम्मीदवारों की आपराधिक पृष्ठभूमि और वित्तीय संपत्ति दिखाती है।"
      }
    },
    {
      keywords: ["senior", "elderly", "85+", "बुजुर्ग", "वरिष्ठ नागरिक"],
      response: {
        en: "Voters aged 85+ and PwD can apply for home voting via postal ballot through their local BLO.",
        hi: "85+ वर्ष के मतदाता और दिव्यांग अपने स्थानीय बीएलओ के माध्यम से पोस्टल बैलेट के माध्यम से घर बैठे मतदान के लिए आवेदन कर सकते हैं।"
      }
    },
    {
      keywords: ["army", "military", "service voter", "सेना", "फौजी"],
      response: {
        en: "Armed forces personnel are classified as service voters and can vote via postal ballots or proxy.",
        hi: "सशस्त्र बल के कर्मियों को सेवा मतदाताओं के रूप में वर्गीकृत किया गया है और वे पोस्टल बैलेट या प्रॉक्सी के माध्यम से वोट दे सकते हैं।"
      }
    },
    {
      keywords: ["transgender", "third gender", "ट्रांसजेंडर"],
      response: {
        en: "Transgender persons can register as the 'Third Gender' in the voter roll and have equal voting rights.",
        hi: "ट्रांसजेंडर व्यक्ति मतदाता सूची में 'तीसरे लिंग' के रूप में पंजीकरण कर सकते हैं और उन्हें समान मतदान अधिकार प्राप्त हैं।"
      }
    },
    {
      keywords: ["student", "hostel", "छात्र", "छात्रावास"],
      response: {
        en: "Students can register at their hostel address using their college ID and a bonafide certificate as address proof.",
        hi: "छात्र अपने कॉलेज आईडी और बोनाफाइड सर्टिफिकेट का उपयोग पते के प्रमाण के रूप में करके अपने छात्रावास के पते पर पंजीकरण कर सकते हैं।"
      }
    },
    {
      keywords: ["fake news", "misinformation", "फेक न्यूज", "गलत जानकारी"],
      response: {
        en: "Report fake news to ECI social media handles or the District Election Officer for investigation.",
        hi: "जांच के लिए ECI सोशल मीडिया हैंडल या जिला चुनाव अधिकारी को फेक न्यूज की रिपोर्ट करें।"
      }
    },
    {
      keywords: ["paid news", "MCMC", "सशुल्क समाचार"],
      response: {
        en: "Paid news is media content favoring a candidate for money. Report it to the Media Certification & Monitoring Committee (MCMC).",
        hi: "सशुल्क समाचार पैसे के लिए उम्मीदवार का पक्ष लेने वाला मीडिया कंटेंट है। इसकी रिपोर्ट मीडिया प्रमाणन और निगरानी समिति (MCMC) को करें।"
      }
    },
    {
      keywords: ["returning officer", "ro", "रिटर्निंग ऑफिसर"],
      response: {
        en: "The Returning Officer (RO) is responsible for overseeing the entire election process in a constituency.",
        hi: "रिटर्निंग ऑफिसर (RO) एक निर्वाचन क्षेत्र में पूरी चुनाव प्रक्रिया की देखरेख के लिए जिम्मेदार होता है।"
      }
    },
    {
      keywords: ["election observer", "monitoring", "चुनाव पर्यवेक्षक"],
      response: {
        en: "ECI Observers are senior officers sent to ensure that elections are conducted freely and fairly.",
        hi: "चुनाव पर्यवेक्षक वरिष्ठ अधिकारी होते हैं जिन्हें यह सुनिश्चित करने के लिए भेजा जाता है कि चुनाव स्वतंत्र और निष्पक्ष रूप से आयोजित हों।"
      }
    },
    {
      keywords: ["current cec", "chief election commissioner", "मुख्य चुनाव आयुक्त"],
      response: {
        en: "The current Chief Election Commissioner is appointed by the President. Check the ECI website for the latest appointee's name.",
        hi: "वर्तमान मुख्य चुनाव आयुक्त की नियुक्ति राष्ट्रपति द्वारा की जाती है। नवीनतम नियुक्त व्यक्ति के नाम के लिए ECI की वेबसाइट देखें।"
      }
    },
    {
      keywords: ["eci overview", "what is eci", "चुनाव आयोग क्या है"],
      response: {
        en: "The Election Commission of India (ECI) is an autonomous constitutional body that manages all national and state elections.",
        hi: "भारत निर्वाचन आयोग (ECI) एक स्वायत्त संवैधानिक निकाय है जो सभी राष्ट्रीय और राज्य चुनावों का प्रबंधन करता है।"
      }
    },
    {
      keywords: ["constituency count", "seats", "निर्वाचन क्षेत्रों की संख्या"],
      response: {
        en: "There are 543 elected constituencies in India for the Lok Sabha elections.",
        hi: "लोकसभा चुनाव के लिए भारत में 543 निर्वाचित निर्वाचन क्षेत्र हैं।"
      }
    },
    {
      keywords: ["national voters day", "january 25", "राष्ट्रीय मतदाता दिवस"],
      response: {
        en: "National Voters' Day is celebrated on January 25 every year to mark the founding of the ECI in 1950.",
        hi: "ECI की स्थापना (1950) के उपलक्ष्य में हर साल 25 जनवरी को राष्ट्रीय मतदाता दिवस मनाया जाता है।"
      }
    },
    {
      keywords: ["sveep", "awareness", "स्वीप"],
      response: {
        en: "SVEEP is ECI's flagship program for voter education, spreading awareness and increasing voter literacy in India.",
        hi: "स्वीप (SVEEP) मतदाता शिक्षा के लिए ECI का प्रमुख कार्यक्रम है, जो भारत में जागरूकता फैलाने और मतदाता साक्षरता बढ़ाने का काम करता है।"
      }
    },
    {
      keywords: ["president vs lok sabha", "difference", "राष्ट्रपति बनाम लोकसभा"],
      response: {
        en: "Lok Sabha members are directly elected by people. The President is elected indirectly by elected MPs and MLAs.",
        hi: "लोकसभा सदस्य सीधे जनता द्वारा चुने जाते हैं। राष्ट्रपति का चुनाव निर्वाचित सांसदों और विधायकों द्वारा अप्रत्यक्ष रूप से किया जाता है।"
      }
    },
    {
      keywords: ["hello", "hi", "hey", "नमस्ते"],
      response: {
        en: "Hello! I am your Election Guide AI. I can answer 60+ types of questions about Indian elections. Ask me anything!",
        hi: "नमस्ते! मैं आपका इलेक्शन गाइड एआई हूं। मैं भारतीय चुनावों के बारे में 60+ प्रकार के प्रश्नों के उत्तर दे सकता हूँ। मुझसे कुछ भी पूछें!"
      }
    }
  ]
};
