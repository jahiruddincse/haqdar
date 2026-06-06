/* ============================================
   Haqqdar — Application Logic
   ============================================ */

// ============================================
// Legal Data Store
// ============================================

const LEGAL_DATA = {
    fir: {
        title: "FIR Refused by Police",
        title_hi: "पुलिस ने FIR दर्ज करने से इनकार किया",
        law: "Section 173 BNSS (formerly Section 154 CrPC)",
        rights: [
            "Police are LEGALLY REQUIRED to register FIR for any cognizable offence (Sec 173 BNSS)",
            "You can file a Zero FIR at ANY police station — they cannot refuse on jurisdiction grounds",
            "Refusal to register FIR (especially for crimes against women) makes the officer liable for disciplinary action",
            "You can file an e-FIR online for certain offences in most states"
        ],
        rights_hi: [
            "पुलिस कानूनी रूप से किसी भी संज्ञेय अपराध के लिए FIR दर्ज करने के लिए बाध्य है (धारा 173 BNSS)",
            "आप किसी भी पुलिस स्टेशन में Zero FIR दर्ज करा सकते हैं — वे क्षेत्राधिकार के आधार पर मना नहीं कर सकते",
            "FIR दर्ज करने से इनकार करना (विशेषकर महिलाओं के खिलाफ अपराधों में) अधिकारी को अनुशासनात्मक कार्रवाई के लिए उत्तरदायी बनाता है",
            "आप अधिकांश राज्यों में कुछ अपराधों के लिए ऑनलाइन e-FIR दर्ज कर सकते हैं"
        ],
        escalation: [
            {
                level: 1,
                title: "Submit Written Complaint to SHO",
                title_hi: "SHO को लिखित शिकायत दें",
                desc: "Give a written complaint at the police station and get an acknowledgment receipt. Keep a copy.",
                desc_hi: "पुलिस स्टेशन में लिखित शिकायत दें और पावती रसीद लें। एक प्रति अपने पास रखें।"
            },
            {
                level: 2,
                title: "Complaint to Superintendent of Police (SP)",
                title_hi: "पुलिस अधीक्षक (SP) को शिकायत",
                desc: "Under Sec 173(4) BNSS, send written complaint to SP of your district. They are bound to look into it.",
                desc_hi: "धारा 173(4) BNSS के तहत, अपने जिले के SP को लिखित शिकायत भेजें। वे इसकी जांच करने के लिए बाध्य हैं।",
                link: "https://digitalpolice.gov.in"
            },
            {
                level: 3,
                title: "File e-FIR Online",
                title_hi: "ऑनलाइन e-FIR दर्ज करें",
                desc: "Most states allow online FIR filing. Visit your state police portal.",
                desc_hi: "अधिकांश राज्य ऑनलाइन FIR दर्ज करने की अनुमति देते हैं।"
            },
            {
                level: 4,
                title: "Application to Magistrate (Sec 175(3) BNSS)",
                title_hi: "मजिस्ट्रेट को आवेदन (धारा 175(3) BNSS)",
                desc: "If police still refuse, file an application before the Chief Judicial Magistrate directing police to register FIR.",
                desc_hi: "यदि पुलिस फिर भी मना करती है, तो मुख्य न्यायिक मजिस्ट्रेट के समक्ष आवेदन दायर करें।"
            }
        ],
        portals: {
            "National": "https://digitalpolice.gov.in",
            "UP": "https://uppolice.gov.in",
            "Delhi": "https://delhipolice.gov.in",
            "Maharashtra": "https://www.mahapolice.gov.in",
            "Bihar": "https://biharpolice.gov.in",
            "Assam": "https://police.assam.gov.in"
        },
        document_template: `To,
The Superintendent of Police,
[DISTRICT], [STATE]

Subject: Complaint regarding refusal to register FIR at [POLICE STATION]

Respected Sir/Madam,

I, [FULL NAME], S/o (D/o) [PARENT NAME], resident of [ADDRESS], hereby bring to your kind notice that a cognizable offence was committed on [DATE] at [PLACE].

Details of Incident:
[INCIDENT DETAILS]

I approached the SHO of [POLICE STATION] on [DATE] to register an FIR, but the officer refused to register the same despite the offence being cognizable under relevant sections of BNS.

I humbly request you to kindly direct the concerned SHO to register an FIR and initiate investigation as mandated under Section 173 of BNSS, 2023.

Enclosures:
1. Copy of written complaint submitted to SHO
2. Identity proof
3. Supporting evidence (if any)

Date: [DATE]
Place: [PLACE]

Yours faithfully,
[FULL NAME]
[CONTACT NUMBER]
[SIGNATURE]`,
        document_template_hi: `सेवा में,
पुलिस अधीक्षक,
[जिला], [राज्य]

विषय: [थाना] में FIR दर्ज करने से इनकार के संबंध में शिकायत

आदरणीय महोदय/महोदया,

मैं, [पूरा नाम], पुत्र/पुत्री [माता/पिता का नाम], निवासी [पता], इसके द्वारा आपके संज्ञान में लाना चाहता/चाहती हूँ कि दिनांक [तारीख] को [स्थान] पर एक संज्ञेय अपराध किया गया।

घटना का विवरण:
[घटना का विवरण]

मैंने दिनांक [तारीख] को [थाना] के SHO से FIR दर्ज कराने का प्रयास किया, परंतु अधिकारी ने BNS की संबंधित धाराओं के तहत संज्ञेय अपराध होने के बावजूद FIR दर्ज करने से इनकार कर दिया।

मैं विनम्रतापूर्वक अनुरोध करता/करती हूँ कि कृपया संबंधित SHO को BNSS, 2023 की धारा 173 के अनुसार FIR दर्ज करने और जांच शुरू करने का निर्देश दें।

संलग्नक:
1. SHO को दी गई लिखित शिकायत की प्रति
2. पहचान प्रमाण
3. सहायक साक्ष्य (यदि कोई हो)

दिनांक: [तारीख]
स्थान: [स्थान]

भवदीय/भवदीया,
[पूरा नाम]
[संपर्क नंबर]
[हस्ताक्षर]`
    },

    rti: {
        title: "File RTI Application",
        title_hi: "RTI आवेदन दाखिल करें",
        law: "Section 6(1), Right to Information Act, 2005",
        rights: [
            "Every Indian citizen has the right to request information from any public authority",
            "The fee is only ₹10 (free for BPL families)",
            "The authority MUST reply within 30 days",
            "If no reply in 30 days, you can file a First Appeal",
            "Second appeal goes to the State/Central Information Commission"
        ],
        rights_hi: [
            "हर भारतीय नागरिक को किसी भी सार्वजनिक प्राधिकरण से सूचना मांगने का अधिकार है",
            "शुल्क केवल ₹10 है (BPL परिवारों के लिए मुफ्त)",
            "प्राधिकरण को 30 दिनों के भीतर जवाब देना अनिवार्य है",
            "30 दिनों में कोई जवाब नहीं आने पर प्रथम अपील दायर कर सकते हैं",
            "दूसरी अपील राज्य/केंद्रीय सूचना आयोग में जाती है"
        ],
        escalation: [
            {
                level: 1,
                title: "File RTI Application",
                title_hi: "RTI आवेदन दाखिल करें",
                desc: "Submit application online at rtionline.gov.in (Central) or your state RTI portal. Fee: ₹10.",
                desc_hi: "rtionline.gov.in (केंद्र) या अपने राज्य के RTI पोर्टल पर ऑनलाइन आवेदन जमा करें। शुल्क: ₹10।",
                link: "https://rtionline.gov.in"
            },
            {
                level: 2,
                title: "Wait 30 Days for Response",
                title_hi: "जवाब के लिए 30 दिन इंतज़ार करें",
                desc: "The PIO must respond within 30 days. Track your application status online.",
                desc_hi: "PIO को 30 दिनों के भीतर जवाब देना होगा। अपने आवेदन की स्थिति ऑनलाइन ट्रैक करें।"
            },
            {
                level: 3,
                title: "First Appeal (Sec 19(1))",
                title_hi: "प्रथम अपील (धारा 19(1))",
                desc: "No response or unsatisfied? File First Appeal within 30 days to the First Appellate Authority (senior officer in same department).",
                desc_hi: "कोई जवाब नहीं या असंतुष्ट? 30 दिनों के भीतर प्रथम अपीलीय प्राधिकरण (उसी विभाग का वरिष्ठ अधिकारी) को प्रथम अपील दायर करें।"
            },
            {
                level: 4,
                title: "Second Appeal to Information Commission",
                title_hi: "सूचना आयोग में दूसरी अपील",
                desc: "File second appeal within 90 days to Central/State Information Commission.",
                desc_hi: "90 दिनों के भीतर केंद्रीय/राज्य सूचना आयोग में दूसरी अपील दायर करें।"
            }
        ],
        portals: {
            "Central Govt RTI": "https://rtionline.gov.in",
            "Delhi": "https://rti.delhi.gov.in",
            "UP": "https://rtionline.up.gov.in"
        },
        document_template: `To,
The Public Information Officer,
[DEPARTMENT NAME],
[OFFICE ADDRESS]

Subject: Application under Section 6(1) of the Right to Information Act, 2005

Sir/Madam,

I, [FULL NAME], an Indian citizen, request the following information under the Right to Information Act, 2005:

1. [YOUR SPECIFIC QUESTION OR INFORMATION REQUEST]
2. [ADDITIONAL QUESTION IF ANY]
3. [ADDITIONAL QUESTION IF ANY]

I am willing to pay any additional fee as prescribed under the Act. The prescribed application fee of ₹10 is enclosed herewith via [IPO/DD/Cash/Online Payment].

I hereby declare that I am a citizen of India.

Yours faithfully,
Name: [FULL NAME]
Address: [COMPLETE POSTAL ADDRESS]
Phone: [MOBILE NUMBER]
Email: [EMAIL ADDRESS]
Date: [DATE]
Place: [PLACE]
Signature: ___________

Enclosures:
1. IPO/DD/Payment proof of ₹10
2. BPL Certificate (if applicable)`,
        document_template_hi: `सेवा में,
जन सूचना अधिकारी,
[विभाग का नाम],
[कार्यालय का पता]

विषय: सूचना का अधिकार अधिनियम, 2005 की धारा 6(1) के तहत आवेदन

महोदय/महोदया,

मैं, [पूरा नाम], एक भारतीय नागरिक, सूचना का अधिकार अधिनियम, 2005 के तहत निम्नलिखित सूचना चाहता/चाहती हूँ:

1. [आपका विशिष्ट प्रश्न या सूचना का अनुरोध]
2. [अतिरिक्त प्रश्न यदि कोई हो]
3. [अतिरिक्त प्रश्न यदि कोई हो]

मैं अधिनियम के तहत निर्धारित किसी भी अतिरिक्त शुल्क का भुगतान करने को तैयार हूँ। निर्धारित आवेदन शुल्क ₹10 [IPO/DD/नकद/ऑनलाइन भुगतान] द्वारा संलग्न है।

मैं एतद्द्वारा घोषित करता/करती हूँ कि मैं भारत का नागरिक हूँ।

भवदीय/भवदीया,
नाम: [पूरा नाम]
पता: [पूरा डाक पता]
फोन: [मोबाइल नंबर]
ईमेल: [ईमेल पता]
दिनांक: [तारीख]
स्थान: [स्थान]
हस्ताक्षर: ___________

संलग्नक:
1. ₹10 का IPO/DD/भुगतान प्रमाण
2. BPL प्रमाण पत्र (यदि लागू हो)`
    },

    wages: {
        title: "Wages/Salary Unpaid",
        title_hi: "वेतन/मजदूरी का भुगतान नहीं",
        law: "Code on Wages, 2019 | Industrial Disputes Act, 1947",
        rights: [
            "Employers are legally bound to pay wages on time (Code on Wages, 2019)",
            "Minimum wages must be paid as per state notification",
            "Overtime wages must be paid at double the normal rate (Sec 14)",
            "PF deducted from salary must be deposited to EPFO within 15 days",
            "You can recover unpaid wages through Labour Court under Sec 33C of ID Act"
        ],
        rights_hi: [
            "नियोक्ता कानूनी रूप से समय पर वेतन देने के लिए बाध्य हैं (मजदूरी संहिता, 2019)",
            "राज्य अधिसूचना के अनुसार न्यूनतम मजदूरी का भुगतान किया जाना चाहिए",
            "ओवरटाइम मजदूरी सामान्य दर से दोगुनी दर पर दी जानी चाहिए (धारा 14)",
            "वेतन से काटा गया PF 15 दिनों के भीतर EPFO में जमा किया जाना चाहिए",
            "आप ID अधिनियम की धारा 33C के तहत श्रम न्यायालय के माध्यम से बकाया वेतन की वसूली कर सकते हैं"
        ],
        escalation: [
            {
                level: 1,
                title: "Send Written Notice to Employer",
                title_hi: "नियोक्ता को लिखित नोटिस भेजें",
                desc: "Send a formal written demand letter to your employer via email and registered post. Keep proof.",
                desc_hi: "अपने नियोक्ता को ईमेल और रजिस्टर्ड पोस्ट के माध्यम से औपचारिक लिखित मांग पत्र भेजें। प्रमाण रखें।"
            },
            {
                level: 2,
                title: "Complaint to Labour Commissioner",
                title_hi: "श्रम आयुक्त को शिकायत",
                desc: "File formal complaint with your district Labour Commissioner's office. Attach salary slips, employment contract, and bank statements.",
                desc_hi: "अपने जिले के श्रम आयुक्त कार्यालय में औपचारिक शिकायत दर्ज करें।"
            },
            {
                level: 3,
                title: "EPFO Complaint (if PF not deposited)",
                title_hi: "EPFO शिकायत (यदि PF जमा नहीं किया गया)",
                desc: "File complaint at epfigms.gov.in. Helpline: 1800-118-005.",
                desc_hi: "epfigms.gov.in पर शिकायत दर्ज करें। हेल्पलाइन: 1800-118-005।",
                link: "https://epfigms.gov.in"
            },
            {
                level: 4,
                title: "Labour Court Application (Sec 33C)",
                title_hi: "श्रम न्यायालय आवेदन (धारा 33C)",
                desc: "Apply to Labour Court for recovery of unpaid wages. Can also file at samadhan.labour.gov.in",
                desc_hi: "बकाया वेतन की वसूली के लिए श्रम न्यायालय में आवेदन करें।",
                link: "https://samadhan.labour.gov.in"
            }
        ],
        portals: {
            "Labour Samadhan": "https://samadhan.labour.gov.in",
            "EPFO Grievance": "https://epfigms.gov.in",
            "EPFO Helpline": "1800-118-005"
        },
        document_template: `To,
The Labour Commissioner / Assistant Labour Commissioner,
[DISTRICT], [STATE]

Subject: Complaint regarding non-payment of wages for [MONTHS] by [COMPANY NAME]

Respected Sir/Madam,

I, [FULL NAME], S/o (D/o) [PARENT NAME], working as [DESIGNATION] at [COMPANY NAME], [COMPANY ADDRESS], hereby submit the following complaint:

1. EMPLOYMENT DETAILS:
   - Date of Joining: [DATE]
   - Employee ID: [ID NUMBER]
   - Designation: [POSITION]
   - Monthly Salary: ₹[AMOUNT]
   - Last Working Day: [DATE, if applicable]

2. DETAILS OF COMPLAINT:
   My employer has failed to pay my wages/salary for the period of [SPECIFY MONTHS].
   The total unpaid amount is ₹[AMOUNT].

3. PREVIOUS EFFORTS TO RESOLVE:
   - I communicated with my employer on [DATE] requesting payment.
   - Despite the above, no payment has been made.

4. RELIEF SOUGHT:
   (a) Direct the employer to pay outstanding wages of ₹[AMOUNT]
   (b) Impose appropriate penalty as per law
   (c) Any other relief deemed appropriate

Enclosures:
1. Copy of appointment/offer letter
2. Copy of salary slips
3. Bank statement showing non-receipt
4. Identity proof

Date: [DATE]
Place: [PLACE]

Yours faithfully,
[FULL NAME]
[CONTACT NUMBER]`,
        document_template_hi: `सेवा में,
श्रम आयुक्त / सहायक श्रम आयुक्त,
[जिला], [राज्य]

विषय: [कंपनी का नाम] द्वारा [महीनों] के वेतन का भुगतान न करने के संबंध में शिकायत

आदरणीय महोदय/महोदया,

मैं, [पूरा नाम], पुत्र/पुत्री [माता/पिता का नाम], [कंपनी का नाम], [कंपनी का पता] में [पद] के रूप में कार्यरत, निम्नलिखित शिकायत प्रस्तुत करता/करती हूँ:

1. रोजगार विवरण:
   - शामिल होने की तारीख: [तारीख]
   - कर्मचारी ID: [ID नंबर]
   - पद: [पद]
   - मासिक वेतन: ₹[राशि]

2. शिकायत का विवरण:
   मेरे नियोक्ता ने [महीने निर्दिष्ट करें] की अवधि के लिए मेरा वेतन/मजदूरी का भुगतान नहीं किया है।
   कुल बकाया राशि ₹[राशि] है।

3. पूर्व प्रयास:
   - मैंने [तारीख] को अपने नियोक्ता से संपर्क किया।
   - इसके बावजूद कोई भुगतान नहीं किया गया।

4. अनुरोधित राहत:
   (क) नियोक्ता को ₹[राशि] का बकाया वेतन देने का निर्देश दें
   (ख) कानून के अनुसार उचित दंड लगाएं

दिनांक: [तारीख]
स्थान: [स्थान]

भवदीय/भवदीया,
[पूरा नाम]
[संपर्क नंबर]`
    },

    scheme: {
        title: "Government Scheme Rejected",
        title_hi: "सरकारी योजना रिजेक्ट",
        law: "Relevant Scheme Guidelines | CPGRAMS",
        rights: [
            "Every eligible citizen has the right to benefit from government welfare schemes",
            "Rejection must be communicated with proper reasons in writing",
            "You can file a grievance on CPGRAMS (pgportal.gov.in) for any central scheme",
            "Each scheme has a dedicated helpline and grievance mechanism",
            "You can file RTI to know why your application was rejected"
        ],
        rights_hi: [
            "हर पात्र नागरिक को सरकारी कल्याणकारी योजनाओं का लाभ पाने का अधिकार है",
            "अस्वीकृति की लिखित में उचित कारणों सहित सूचना दी जानी चाहिए",
            "किसी भी केंद्रीय योजना के लिए CPGRAMS (pgportal.gov.in) पर शिकायत दर्ज कर सकते हैं",
            "प्रत्येक योजना का समर्पित हेल्पलाइन और शिकायत तंत्र है",
            "आप RTI दायर करके जान सकते हैं कि आपका आवेदन क्यों रिजेक्ट हुआ"
        ],
        escalation: [
            {
                level: 1,
                title: "Contact Scheme Helpline",
                title_hi: "योजना हेल्पलाइन से संपर्क करें",
                desc: "PM-KISAN: 155261 | Ayushman: 14555 | Ujjwala: 1800-266-6696 | MGNREGA: nrega.nic.in",
                desc_hi: "PM-KISAN: 155261 | आयुष्मान: 14555 | उज्ज्वला: 1800-266-6696 | मनरेगा: nrega.nic.in"
            },
            {
                level: 2,
                title: "File Grievance on Scheme Portal",
                title_hi: "योजना पोर्टल पर शिकायत दर्ज करें",
                desc: "Each scheme has a dedicated portal. PM-KISAN: pmkisan.gov.in → Help Desk | Ayushman: cgrms.pmjay.gov.in",
                desc_hi: "प्रत्येक योजना का समर्पित पोर्टल है।"
            },
            {
                level: 3,
                title: "File on CPGRAMS",
                title_hi: "CPGRAMS पर दर्ज करें",
                desc: "Centralized Public Grievance portal for ALL central govt schemes. File under relevant Ministry.",
                desc_hi: "सभी केंद्रीय सरकारी योजनाओं के लिए केंद्रीकृत लोक शिकायत पोर्टल।",
                link: "https://pgportal.gov.in"
            },
            {
                level: 4,
                title: "File RTI for Rejection Reasons",
                title_hi: "रिजेक्शन के कारण जानने के लिए RTI दाखिल करें",
                desc: "File RTI asking specifically why your application was rejected and what criteria were used.",
                desc_hi: "RTI दायर करें और पूछें कि आपका आवेदन क्यों रिजेक्ट हुआ और किन मानदंडों का उपयोग किया गया।",
                link: "https://rtionline.gov.in"
            }
        ],
        portals: {
            "CPGRAMS": "https://pgportal.gov.in",
            "PM-KISAN": "https://pmkisan.gov.in",
            "Ayushman Bharat": "https://pmjay.gov.in",
            "MGNREGA": "https://nrega.nic.in"
        },
        document_template: `To,
The Grievance Officer,
[SCHEME NAME / MINISTRY NAME],
[ADDRESS]

Through: CPGRAMS Portal (pgportal.gov.in)

Subject: Grievance regarding wrongful rejection/non-receipt of benefits under [SCHEME NAME]

Respected Sir/Madam,

I, [FULL NAME], resident of [ADDRESS], hereby submit this grievance regarding the [SCHEME NAME]:

1. APPLICATION DETAILS:
   - Application/Registration No: [NUMBER]
   - Date of Application: [DATE]
   - Scheme Name: [SCHEME NAME]

2. GRIEVANCE DETAILS:
   [DESCRIBE YOUR ISSUE - e.g., application rejected without valid reason / 
   benefits not received despite approval / wrong amount credited etc.]

3. SUPPORTING DOCUMENTS:
   [LIST WHAT YOU HAVE - Aadhaar, bank passbook, rejection letter etc.]

4. RELIEF SOUGHT:
   I request that my application be re-examined and the rightful benefits 
   be provided to me at the earliest.

Date: [DATE]
Place: [PLACE]

[FULL NAME]
[AADHAAR NUMBER]
[CONTACT NUMBER]`
    },

    ration: {
        title: "Ration/PDS Denied",
        title_hi: "राशन/PDS से वंचित",
        law: "National Food Security Act (NFSA), 2013",
        rights: [
            "Under NFSA, every PHH member is entitled to 5 kg foodgrains per person/month at ₹1-3/kg",
            "AAY (Antyodaya) families get 35 kg per household/month",
            "If entitled foodgrains are NOT provided, you're entitled to food security allowance as compensation (Sec 8)",
            "Eldest woman (18+) is head of household for ration card (Sec 12)",
            "Each district must have a District Grievance Redressal Officer (DGRO)"
        ],
        rights_hi: [
            "NFSA के तहत, हर PHH सदस्य प्रति व्यक्ति/माह 5 किलो अनाज ₹1-3/किलो पर पाने का हकदार है",
            "AAY (अंत्योदय) परिवारों को 35 किलो प्रति परिवार/माह मिलता है",
            "यदि हकदार अनाज नहीं दिया जाता, तो आप खाद्य सुरक्षा भत्ते के हकदार हैं (धारा 8)",
            "राशन कार्ड के लिए सबसे बड़ी महिला (18+) परिवार की मुखिया होती है (धारा 12)",
            "प्रत्येक जिले में एक जिला शिकायत निवारण अधिकारी (DGRO) होना चाहिए"
        ],
        escalation: [
            {
                level: 1,
                title: "Call PDS Helpline: 1967",
                title_hi: "PDS हेल्पलाइन कॉल करें: 1967",
                desc: "National PDS helpline. Report the FPS (ration shop) and date of denial.",
                desc_hi: "राष्ट्रीय PDS हेल्पलाइन। FPS (राशन की दुकान) और इनकार की तारीख बताएं।"
            },
            {
                level: 2,
                title: "Written Complaint to District Supply Officer",
                title_hi: "जिला आपूर्ति अधिकारी को लिखित शिकायत",
                desc: "Submit written complaint to the DSO. Get acknowledgment receipt.",
                desc_hi: "DSO को लिखित शिकायत जमा करें। पावती रसीद लें।"
            },
            {
                level: 3,
                title: "Complaint to DGRO (Sec 15, NFSA)",
                title_hi: "DGRO को शिकायत (धारा 15, NFSA)",
                desc: "District Grievance Redressal Officer is mandated under NFSA to resolve PDS complaints.",
                desc_hi: "NFSA के तहत PDS शिकायतों के निवारण के लिए जिला शिकायत निवारण अधिकारी अनिवार्य है।"
            },
            {
                level: 4,
                title: "Escalate to State Food Commission (Sec 16)",
                title_hi: "राज्य खाद्य आयोग को शिकायत (धारा 16)",
                desc: "State Food Commission acts as appellate authority and can inquire into NFSA violations.",
                desc_hi: "राज्य खाद्य आयोग अपीलीय प्राधिकरण के रूप में कार्य करता है।",
                link: "https://nfsa.gov.in"
            }
        ],
        portals: {
            "NFSA Portal": "https://nfsa.gov.in",
            "PDS Helpline": "1967"
        },
        document_template: `To,
The District Grievance Redressal Officer (DGRO),
[DISTRICT], [STATE]

Subject: Complaint under Section 15 of National Food Security Act, 2013 regarding 
denial of ration at FPS [SHOP NAME/NUMBER]

Respected Sir/Madam,

I, [FULL NAME], Ration Card No. [CARD NUMBER], resident of [ADDRESS], hereby 
complain that the Fair Price Shop at [FPS LOCATION] has denied me my entitled 
foodgrains under NFSA.

1. RATION CARD DETAILS:
   - Card Number: [NUMBER]
   - Category: [PHH / AAY]
   - Number of members: [NUMBER]
   - Entitlement: [KG] per month

2. DETAILS OF DENIAL:
   - Date of visit: [DATE]
   - FPS Name/Number: [DETAILS]
   - Reason given by shopkeeper: [REASON OR "No reason given"]
   - [Did they ask for extra money? Did they say stock finished? etc.]

3. RELIEF SOUGHT:
   (a) Provide my entitled foodgrains immediately
   (b) Provide food security allowance for the denied period (Sec 8, NFSA)
   (c) Take action against the FPS dealer

Date: [DATE]
Place: [PLACE]

[FULL NAME]
[RATION CARD NUMBER]
[CONTACT NUMBER]`
    },

    northeast: {
        title: "Northeast India Special Issues",
        title_hi: "पूर्वोत्तर भारत के विशेष मुद्दे",
        law: "AFSPA 1958 | 6th Schedule | ILP | NRC",
        rights: [
            "Even under AFSPA, armed forces cannot use excessive or disproportionate force",
            "You can file NHRC complaint for human rights violations (portal: hrcnet.nic.in, helpline: 14433)",
            "NRC-excluded persons have legal right to appeal before Foreigners Tribunal",
            "6th Schedule gives Autonomous District Councils power over land, forests, and inheritance",
            "Forest Rights Act, 2006 protects rights of forest-dwelling tribal communities"
        ],
        escalation: [
            {
                level: 1,
                title: "File FIR with Local Police",
                desc: "Even in AFSPA areas, file FIR under relevant BNS sections. Get written acknowledgment."
            },
            {
                level: 2,
                title: "NHRC Complaint (Helpline: 14433)",
                desc: "File online at hrcnet.nic.in. Free of charge. Must be within 1 year of incident.",
                link: "https://hrcnet.nic.in"
            },
            {
                level: 3,
                title: "High Court Writ Petition (Art. 226)",
                desc: "Challenge specific actions of armed forces. Gauhati HC for NE states."
            },
            {
                level: 4,
                title: "Supreme Court (Art. 32 / SLP)",
                desc: "For fundamental rights violations. Can also contact Citizens for Justice and Peace (cjp.org.in).",
                link: "https://cjp.org.in"
            }
        ],
        portals: {
            "NHRC Complaint": "https://hrcnet.nic.in",
            "NHRC Helpline": "14433",
            "ILP Arunachal": "https://eilp.arunachal.gov.in",
            "ILP Nagaland": "https://ilp.nagaland.gov.in",
            "ILP Mizoram": "https://ilp.mizoram.gov.in",
            "ILP Manipur": "https://manipurilponline.mn.gov.in",
            "CJP (Legal Aid)": "https://cjp.org.in"
        },
        document_template: `NATIONAL HUMAN RIGHTS COMMISSION
Online Portal: hrcnet.nic.in | Helpline: 14433

COMPLAINT FORMAT:

1. COMPLAINANT DETAILS:
   Name: [FULL NAME]
   Address: [COMPLETE ADDRESS]
   Phone: [CONTACT NUMBER]
   Email: [EMAIL]

2. VICTIM DETAILS (if different):
   Name: [NAME]
   Age: [AGE]
   Gender: [GENDER]
   Community: [SC/ST/OBC/General]

3. INCIDENT DETAILS:
   Date: [DATE]
   Place: [EXACT LOCATION — village, district, state]
   
4. AUTHORITY/PERSONS INVOLVED:
   Name/Designation: [NAME OF OFFICER/UNIT]
   Department: [ARMY/PARAMILITARY/POLICE]
   
5. DESCRIPTION OF VIOLATION:
   [DETAILED DESCRIPTION OF WHAT HAPPENED]
   
6. RELIEF SOUGHT:
   [What action do you want? — Investigation, compensation, prosecution]

7. WHETHER MATTER IS PENDING BEFORE COURT/SHRC: [YES/NO]

Note: Can also send by post to:
The Chairperson, NHRC
Manav Adhikar Bhawan, Block-C
GPO Complex, INA
New Delhi - 110023`
    },
    ne_land_flood: {
        title: "Land Records & Flood Relief",
        title_hi: "भूमि रिकॉर्ड और बाढ़ राहत",
        law: "Assam Land and Revenue Regulation, 1886 | Disaster Management Act, 2005 | PMAY-G Guidelines",
        rights: [
            "Right to inspect and obtain certified copies of your land records (Jamabandi/Chitha) under Assam Dharitree",
            "Right to receive flood crop compensation under SDRF/NDRF guidelines within 30 days of damage assessment",
            "Right to a transparent inquiry and written rejection reasons if your Pradhan Mantri Awas Yojana (PMAY-G) house application is turned down"
        ],
        rights_hi: [
            "असम धरित्री के तहत अपने भूमि रिकॉर्ड (जमाबंदी/चिट्ठा) का निरीक्षण करने और प्रमाणित प्रतियां प्राप्त करने का अधिकार",
            "नुकसान के आकलन के 30 दिनों के भीतर SDRF/NDRF दिशानिर्देशों के तहत बाढ़ फसल मुआवजा प्राप्त करने का अधिकार",
            "प्रधान मंत्री आवास योजना (PMAY-G) आवेदन खारिज होने पर पारदर्शी जांच और लिखित अस्वीकृति कारणों का अधिकार"
        ],
        escalation: [
            {
                level: 1,
                title: "Apply Online via Dharitree / Submit Grievance to Circle Officer",
                title_hi: "धरित्री के माध्यम से ऑनलाइन आवेदन करें / मंडल अधिकारी को शिकायत दें",
                desc: "File for land record correction or submit a written application for crop compensation to your local Revenue Circle Office. Get an acknowledgment receipt.",
                desc_hi: "भूमि रिकॉर्ड सुधार के लिए आवेदन करें या स्थानीय राजस्व मंडल कार्यालय में फसल मुआवजे के लिए लिखित शिकायत दर्ज करें।"
            },
            {
                level: 2,
                title: "Escalate to District Commissioner (DC) Office",
                title_hi: "जिला आयुक्त (DC) कार्यालय को शिकायत करें",
                desc: "If Circle Office does not respond in 15 days, submit a formal written complaint to the DC of your district detailing the delay.",
                desc_hi: "यदि मंडल कार्यालय 15 दिनों में कोई कार्रवाई नहीं करता है, तो अपने जिले के DC को लिखित शिकायत दर्ज करें।"
            },
            {
                level: 3,
                title: "File Appeal on Assam RTPS / CPGRAMS Portal",
                title_hi: "असम RTPS / CPGRAMS पोर्टल पर शिकायत दर्ज करें",
                desc: "Register a grievance on the RTPS portal for delayed public services, or CPGRAMS under Revenue and Disaster Management Dept.",
                desc_hi: "देरी से मिलने वाली लोक सेवाओं के लिए RTPS पोर्टल पर या CPGRAMS पर शिकायत दर्ज करें।",
                link: "https://pgportal.gov.in"
            }
        ],
        portals: {
            "Assam Dharitree Portal": "https://revenueassam.nic.in",
            "Assam RTPS Portal": "https://rtps.assam.gov.in",
            "CPGRAMS Portal": "https://pgportal.gov.in"
        },
        document_template: `To,
The District Commissioner,
[DISTRICT NAME] District,
Government of Assam

Subject: Complaint regarding delay in release of Flood Crop Damage Compensation / Correction of Land Records at [VILLAGE/CIRCLE]

Respected Sir/Madam,

I, [FULL NAME], S/o (D/o) [PARENT NAME], resident of [ADDRESS], hereby bring to your kind notice the following grievance for immediate intervention:

1. DETAILS OF ISSUE:
   - Nature of Grievance: [Specify: Delay in Flood Relief Compensation / Dharitree Jamabandi Correction Delay]
   - Land Details (if applicable): Dag No: [DAG NO], Patta No: [PATTA NO], Mouza/Village: [VILLAGE], Revenue Circle: [CIRCLE]
   - Date of Application/Incident: [DATE]

2. FACTS OF THE CASE:
   - [For Flood Compensation]: My agricultural crops were fully damaged in the floods on [DATE]. The local revenue team completed the survey, but no relief compensation has been credited to my bank account.
   - [For Land Records]: I submitted an application online via Dharitree for mutation/correction on [DATE], but the Circle Officer has kept it pending for over 30 days without valid reasons.

I request you to kindly direct the concerned Revenue Circle Officer to expedite the matter and release the due compensation / correct the records at the earliest.

Enclosures:
1. Copy of Land Patta/Jamabandi
2. Crop damage survey report copy (if available)
3. Application acknowledgment slip

Date: [DATE]
Place: [PLACE]

Yours faithfully,
[FULL NAME]
[CONTACT NUMBER]`,
        document_template_hi: `सेवा में,
जिला आयुक्त,
[जिला का नाम], असम सरकार

विषय: [गाँव/मंडल] पर बाढ़ फसल नुकसान मुआवजे / भूमि रिकॉर्ड सुधार में देरी के संबंध में शिकायत

आदरणीय महोदय/महोदया,

मैं, [पूरा नाम], पुत्र/पुत्री [माता/पिता का नाम], निवासी [पता], इसके द्वारा तत्काल हस्तक्षेप के लिए निम्नलिखित शिकायत आपके संज्ञान में लाना चाहता हूँ:

1. शिकायत का विवरण:
   - शिकायत की प्रकृति: [बाढ़ राहत मुआवजा मिलने में देरी / धरित्री जमाबंदी सुधार में देरी]
   - भूमि का विवरण: डग नंबर: [डग नंबर], पट्टा नंबर: [पट्टा नंबर], गाँव: [गाँव], राजस्व मंडल: [राजस्व मंडल]
   - आवेदन/घटना की तारीख: [तारीख]

2. मामले के तथ्य:
   - [बाढ़ मुआवजे के लिए]: दिनांक [तारीख] को आई बाढ़ में मेरी फसलें पूरी तरह से नष्ट हो गईं। राजस्व टीम ने सर्वेक्षण पूरा कर लिया था, लेकिन अभी तक मुआवजा नहीं मिला।
   - [भूमि रिकॉर्ड के लिए]: मैंने दिनांक [तारीख] को सुधार के लिए धरित्री पर आवेदन किया था, लेकिन यह 30 दिनों से अधिक समय से लंबित है।

मैं आपसे अनुरोध करता हूँ कि कृपया राजस्व मंडल अधिकारी को इस मामले में तेजी लाने का निर्देश दें।

संलग्नक:
1. भूमि पट्टा/जमाबंदी की प्रति
2. आवेदन की पावती रसीद

दिनांक: [तारीख]
स्थान: [स्थान]

भवदीय/भवदीया,
[पूरा नाम]
[संपर्क नंबर]`
    },
    ne_scholarship_tea: {
        title: "Scholarship Delays & Tea Garden Rights",
        title_hi: "छात्रवृत्ति में देरी और चाय बागान श्रमिकों के अधिकार",
        law: "Right to Education Act, 2009 | Plantations Labour Act, 1951 | Minimum Wages Act, 1948",
        rights: [
            "Right of ST/SC/OBC/Minority students to receive state and national scholarships (NSP/State portals) on time",
            "Right of economically weaker sections to receive EWS certificate within 15 days of online submission",
            "Right of Tea Garden workers to receive statutory minimum wages, housing, medical aid, and clean drinking water under the Plantations Labour Act, 1951"
        ],
        rights_hi: [
            "ST/SC/OBC/अल्पसंख्यक छात्रों को समय पर राज्य और राष्ट्रीय छात्रवृत्ति (NSP/राज्य पोर्टल) प्राप्त करने का अधिकार",
            "आर्थिक रूप से कमजोर वर्गों (EWS) को ऑनलाइन जमा करने के 15 दिनों के भीतर EWS प्रमाणपत्र प्राप्त करने का अधिकार",
            "चाय बागान श्रमिकों को प्लांटेशन लेबर एक्ट, 1951 के तहत वैधानिक न्यूनतम मजदूरी, आवास, चिकित्सा सहायता और पीने का पानी पाने का अधिकार"
        ],
        escalation: [
            {
                level: 1,
                title: "Submit Written Complaint to Principal / Tea Garden Manager",
                title_hi: "प्रधानाचार्य / चाय बागान प्रबंधक को लिखित शिकायत दें",
                desc: "Submit a written representation regarding the scholarship delay to your college principal, or minimum wage complaint to the Tea Estate Manager. Keep proof.",
                desc_hi: "कॉलेज के प्रधानाचार्य को छात्रवृत्ति में देरी के संबंध में, या चाय बागान प्रबंधक को न्यूनतम मजदूरी के संबंध में लिखित शिकायत दें।"
            },
            {
                level: 2,
                title: "File Grievance with District Elementary/Higher Education Officer or Labour Inspector",
                title_hi: "जिला शिक्षा अधिकारी या श्रम निरीक्षक को शिकायत करें",
                desc: "For scholarship/EWS issues, approach the District Education Officer. For worker rights, file a complaint with the local Labour Inspector's office.",
                desc_hi: "छात्रवृत्ति/EWS मुद्दों के लिए जिला शिक्षा अधिकारी से संपर्क करें। श्रमिक अधिकारों के लिए स्थानीय श्रम निरीक्षक कार्यालय में शिकायत दर्ज करें।"
            },
            {
                level: 3,
                title: "Escalate to Welfare of Tea Tribes Director / state Labour Commissioner",
                title_hi: "चाय जनजाति कल्याण निदेशक / राज्य श्रम आयुक्त को शिकायत करें",
                desc: "Submit a formal petition to the Director of Welfare of Tea Tribes (Assam) or the state Labour Commissioner's office.",
                desc_hi: "चाय जनजाति कल्याण निदेशक या राज्य श्रम आयुक्त कार्यालय को एक औपचारिक याचिका प्रस्तुत करें।"
            }
        ],
        portals: {
            "National Scholarship Portal": "https://scholarships.gov.in",
            "Assam Tea Tribes Welfare": "https://ttwd.assam.gov.in",
            "Labour Commissioner Assam": "https://labourcommissioner.assam.gov.in"
        },
        document_template: `To,
The Director / Assistant Labour Commissioner,
Department of Labour & Employment,
[CITY/STATE]

Subject: Complaint regarding non-payment of statutory minimum wages / basic amenities to Tea Garden Workers at [TEA ESTATE]

Respected Sir/Madam,

I, [FULL NAME], on behalf of the workers of [NAME OF TEA ESTATE], resident of [ADDRESS], hereby submit this complaint regarding the violation of basic rights under the Plantations Labour Act, 1951:

1. WORKER DETAILS:
   - Name of Tea Estate: [TEA ESTATE NAME]
   - Location/District: [DISTRICT]
   - Number of Affected Workers: [NUMBER]

2. MAIN GRIEVANCES:
   - [Wage Dispute]: The management is failing to pay the revised statutory minimum wage of Rs. [AMOUNT] per day.
   - [Basic Amenities]: The estate management has failed to provide clean drinking water, adequate housing repairs, or basic medical facilities as mandated under the Plantations Labour Act, 1951.

We request your office to immediately conduct an inspection of the [TEA ESTATE NAME] and direct the management to comply with the statutory wage guidelines and restore basic amenities.

Date: [DATE]
Place: [PLACE]

Yours faithfully,
[FULL NAME]
[CONTACT NUMBER]`,
        document_template_hi: `सेवा में,
सहायक श्रम आयुक्त,
श्रम एवं रोजगार विभाग, [शहर/राज्य]

विषय: [चाय बागान का नाम] में चाय बागान श्रमिकों को वैधानिक न्यूनतम मजदूरी / बुनियादी सुविधाओं के भुगतान न करने के संबंध में शिकायत

आदरणीय महोदय/महोदया,

मैं, [पूरा नाम], [चाय बागान का नाम] के श्रमिकों की ओर से, निवासी [पता], इसके द्वारा प्लांटेशन लेबर एक्ट, 1951 के तहत बुनियादी अधिकारों के उल्लंघन के संबंध में यह शिकायत प्रस्तुत करता हूँ:

1. श्रमिकों का विवरण:
   - चाय बागान का नाम: [चाय बागान का नाम]
   - स्थान/जिला: [जिला]

2. मुख्य शिकायतें:
   - [मजदूरी विवाद]: प्रबंधन प्रतिदिन ₹[राशि] की संशोधित वैधानिक न्यूनतम मजदूरी का भुगतान करने में विफल रहा है।
   - [बुनियादी सुविधाएं]: प्रबंधन पीने के साफ पानी, उचित आवास मरम्मत या बुनियादी चिकित्सा सुविधाएं प्रदान करने में विफल रहा है।

हम आपके कार्यालय से अनुरोध करते हैं कि बागान का तत्काल निरीक्षण करें और प्रबंधन को मजदूरी देने तथा बुनियादी सुविधाएं बहाल करने का निर्देश दें।

दिनांक: [तारीख]
स्थान: [स्थान]

भवदीय/भवदीया,
[पूरा नाम]
[संपर्क नंबर]`
    },
    ne_ilp_border: {
        title: "ILP Delay & Border Disputes",
        title_hi: "ILP में देरी और सीमा विवाद",
        law: "Bengal Eastern Frontier Regulation, 1873 | Constitutional Rights to Property",
        rights: [
            "Right of Indian citizens to obtain an Inner Line Permit (ILP) to visit Arunachal, Nagaland, Mizoram, and Manipur without arbitrary rejection",
            "Right to protect agricultural land holdings in border areas of Assam and neighboring states from unauthorized takeover",
            "Right to safety and administrative assistance from state authorities in disputed border villages"
        ],
        rights_hi: [
            "बिना किसी मनमाने कारणों के अरुणाचल, नागालैंड, मिजोरम और मणिपुर का दौरा करने के लिए इनर लाइन परमिट (ILP) प्राप्त करने का अधिकार",
            "असम और पड़ोसी राज्यों के सीमावर्ती क्षेत्रों में कृषि भूमि जोतों को अनधिकृत कब्जे से बचाने का अधिकार",
            "विवादित सीमावर्ती गाँवों में राज्य अधिकारियों से सुरक्षा और प्रशासनिक सहायता का अधिकार"
        ],
        escalation: [
            {
                level: 1,
                title: "Apply Online / Submit Representation to Deputy Commissioner (DC)",
                title_hi: "ऑनलाइन आवेदन करें / उपायुक्त (DC) को अभ्यावेदन दें",
                desc: "Apply on official portals. For border land disputes, submit a formal petition to the Circle Officer or local border outpost commander.",
                desc_hi: "आधिकारिक पोर्टलों पर आवेदन करें। सीमा विवादों के लिए स्थानीय मंडल अधिकारी या सीमा चौकी कमांडर को याचिका प्रस्तुत करें।"
            },
            {
                level: 2,
                title: "Lodge Complaint with Border Area Development Department / Home Dept",
                title_hi: "सीमा क्षेत्र विकास विभाग / गृह विभाग में शिकायत दर्ज करें",
                desc: "If local officers fail to secure your land or issue ILP, submit a representation to the Secretary, Home Department or Border Areas Department of the state.",
                desc_hi: "यदि स्थानीय अधिकारी आपकी भूमि सुरक्षित करने या ILP जारी करने में विफल रहते हैं, तो राज्य के गृह विभाग या सीमा क्षेत्र विभाग के सचिव को आवेदन दें।"
            },
            {
                level: 3,
                title: "File Writ Petition in Gauhati High Court (Art. 226)",
                title_hi: "गुवाहाटी उच्च न्यायालय में रिट याचिका (अनु. 226)",
                desc: "For illegal boundary encroachment or arbitrary state action, approach the High Court for relief.",
                desc_hi: "अवैध सीमा अतिक्रमण या मनमाने राज्य कार्रवाई के लिए उच्च न्यायालय का दरवाजा खटखटाएं।"
            }
        ],
        portals: {
            "Arunachal ILP Portal": "https://eilp.arunachal.gov.in",
            "Nagaland ILP Portal": "https://ilp.nagaland.gov.in",
            "Mizoram ILP Portal": "https://ilp.mizoram.gov.in",
            "Manipur ILP Portal": "https://manipurilponline.mn.gov.in"
        },
        document_template: `To,
The Deputy Commissioner,
[DISTRICT NAME] District,
State of [STATE]

Subject: Petition regarding land boundary dispute / illegal encroachment in the interstate border area of [VILLAGE NAME]

Respected Sir/Madam,

I, [FULL NAME], resident of border village [VILLAGE NAME], Revenue Circle [CIRCLE], District [DISTRICT], hereby submit this urgent petition:

1. LAND DETAILS:
   - Dag/Patta Number: [NUMBERS]
   - Border Area Location: [Describe vicinity of border, e.g., Assam-Arunachal border line]

2. STATEMENT OF FACTS:
   - I/my family have been cultivating and maintaining possessory rights over the aforementioned land for over [NUMBER] years, verified by state land revenue receipts.
   - On [DATE], certain persons from the neighboring state entered my land and attempted to [explain activity: forcefully set up boundary posts, destroy crops, build temporary structures] without any authority.
   - Despite reporting the matter to the local police/border outpost on [DATE], no permanent protective action has been taken, and the threat of eviction remains.

I request your office to immediately coordinate with the border administration and carry out a joint verification survey to prevent illegal encroachment and secure my land holding.

Enclosures:
1. Copies of Land Revenue Receipt/Jamabandi
2. Photos of encroachment
3. Acknowledgment of complaint to local police

Date: [DATE]
Place: [PLACE]

Yours faithfully,
[FULL NAME]
[CONTACT NUMBER]`,
        document_template_hi: `सेवा में,
उपायुक्त,
[जिला का नाम], [राज्य का नाम]

विषय: [गाँव का नाम] के अंतर-राज्यीय सीमा क्षेत्र में भूमि विवाद / अवैध अतिक्रमण के संबंध में याचिका

आदरणीय महोदय/महोदया,

मैं, [पूरा नाम], निवासी सीमावर्ती गाँव [गाँव का नाम], राजस्व मंडल [राजस्व मंडल], जिला [जिला], इसके द्वारा यह आवश्यक याचिका प्रस्तुत करता हूँ:

1. भूमि का विवरण:
   - डग/पट्टा संख्या: [संख्या]
   - सीमावर्ती स्थान: [सीमा का विवरण दें, जैसे- असम-अरुणाचल सीमा रेखा]

2. मामले के तथ्य:
   - मैं और मेरा परिवार [वर्षों की संख्या] वर्षों से उक्त भूमि पर खेती कर रहे हैं।
   - दिनांक [तारीख] को, पड़ोसी राज्य के कुछ व्यक्तियों ने मेरी भूमि पर प्रवेश किया और [फसल नष्ट करने / अवैध रूप से कब्जा करने] का प्रयास किया।
   - स्थानीय पुलिस/सीमा चौकी को रिपोर्ट करने के बावजूद, कोई स्थायी कार्रवाई नहीं की गई है।

मैं आपसे अनुरोध करता हूँ कि सीमा प्रशासन के साथ समन्वय करें और अवैध अतिक्रमण को रोकने तथा मेरी भूमि सुरक्षित करने के लिए संयुक्त सर्वेक्षण कराएं।

संलग्नक:
1. भूमि पट्टा/जमाबंदी की प्रति
2. पुलिस शिकायत की प्रति

दिनांक: [तारीख]
स्थान: [स्थान]

भवदीय/भवदीया,
[पूरा नाम]
[संपर्क नंबर]`
    },
    ne_customary_tribal: {
        title: "Customary Laws & Tribal Land",
        title_hi: "रूढ़िवादी कानून और जनजातीय भूमि",
        law: "Sixth Schedule of the Constitution of India | Forest Rights Act, 2006 | Article 371A (Nagaland) | Article 371G (Mizoram)",
        rights: [
            "Absolute protection of tribal lands under the Sixth Schedule from transfer or sale to non-tribals",
            "Recognition of customary village councils (like Gaon Burahs in Nagaland, Nokmas in Meghalaya) to settle land and civil disputes",
            "Right of traditional forest-dwellers to collect forest produce and cultivate under the Forest Rights Act (FRA) 2006"
        ],
        rights_hi: [
            "छठी अनुसूची के तहत गैर-आदिवासियों को भूमि हस्तांतरण या बिक्री से आदिवासी भूमि की पूर्ण सुरक्षा",
            "भूमि और नागरिक विवादों को निपटाने के लिए पारंपरिक ग्राम परिषदों (जैसे नागालैंड में गाँव बूढ़ा, मेघालय में नोकमा) की मान्यता",
            "वन अधिकार अधिनियम (FRA) 2006 के तहत पारंपरिक वन-निवासियों को वन उपज एकत्र करने और खेती करने का अधिकार"
        ],
        escalation: [
            {
                level: 1,
                title: "Submit Case to Village Council / Gram Sabha / Nokma",
                title_hi: "ग्राम परिषद / ग्राम सभा / नोकमा को मामला सौंपें",
                desc: "File your dispute petition directly with the Village Authority / Gaon Burah / Nokma for settlement under customary laws. Get written record.",
                desc_hi: "रूढ़िवादी कानूनों के तहत निपटारे के लिए अपनी शिकायत सीधे ग्राम परिषद / गाँव बूढ़ा / नोकमा को सौंपें।"
            },
            {
                level: 2,
                title: "Petition to Autonomous District Council (ADC) Court",
                title_hi: "स्वायत्त जिला परिषद (ADC) न्यायालय में याचिका",
                desc: "If the customary village council fails to resolve the issue, file a formal title suit in the District Council Court or Subordinate District Council Court under the ADC.",
                desc_hi: "यदि ग्राम परिषद मामले को हल करने में विफल रहती है, तो ADC के तहत जिला परिषद न्यायालय में एक औपचारिक मुकदमा दायर करें।"
            },
            {
                level: 3,
                title: "Appeal in High Court",
                title_hi: "उच्च न्यायालय में अपील करें",
                desc: "District Council Court decisions can be appealed before the High Court (Gauhati High Court / Meghalaya High Court / Manipur High Court).",
                desc_hi: "जिला परिषद न्यायालय के निर्णयों के खिलाफ उच्च न्यायालय में अपील दायर की जा सकती है।"
            }
        ],
        portals: {
            "Meghalaya High Court": "https://meghalayahc.gov.in",
            "Gauhati HC (Tribal Cases)": "https://ghconline.gov.in",
            "Manipur High Court": "https://hcmimphal.nic.in"
        },
        document_template: `To,
The Executive Committee (Revenue),
[NAME OF AUTONOMOUS DISTRICT COUNCIL],
[HEADQUARTERS/ADDRESS]

Subject: Appeal against unauthorized transfer / alienation of tribal land in Sixth Schedule Area of [VILLAGE]

Respected Sir/Madam,

I, [FULL NAME], belonging to the Scheduled Tribe community, resident of [ADDRESS], hereby submit this petition for land protection under the Sixth Schedule land regulations:

1. DESCRIPTION OF TRIBAL LAND:
   - Area & Boundaries: Dag No: [DAG NO], Village: [VILLAGE], District: [DISTRICT]
   - Customary Title: [Details of inheritance or tribal allotment]

2. STATEMENT OF COMPLAINT:
   - The land described above is ancestral tribal land, protected under the land transfer regulations of this District Council.
   - On [DATE], the opposite party [NAME OF ENCROACHER/BUYER], who is a non-tribal, illegally occupied/purchased the land through a transaction that violates the Land Transfer Regulations of [YEAR].
   - The transaction has not been sanctioned by this Council and is void under the law.

I request this Council to declare the transfer void, initiate eviction proceedings against the unauthorized non-tribal occupant, and restore the land holding to me.

Enclosures:
1. Proof of Tribal identity (Tribe Certificate)
2. Land records/inheritance proof
3. Purchase deed copy (if available)

Date: [DATE]
Place: [PLACE]

Yours faithfully,
[FULL NAME]
[CONTACT NUMBER]`,
        document_template_hi: `सेवा में,
कार्यकारी समिति (राजस्व),
[स्वायत्त जिला परिषद का नाम]

विषय: [गाँव का नाम] के छठी अनुसूची क्षेत्र में जनजातीय भूमि के अनधिकृत हस्तांतरण के खिलाफ अपील

आदरणीय महोदय/महोदया,

मैं, [पूरा नाम], अनुसूचित जनजाति समुदाय से संबंधित, निवासी [पता], इसके द्वारा छठी अनुसूची भूमि नियमों के तहत भूमि संरक्षण के लिए यह याचिका प्रस्तुत करता हूँ:

1. भूमि का विवरण:
   - डग संख्या: [डग नंबर], गाँव: [गाँव], जिला: [जिला]
   - पारंपरिक स्वामित्व विवरण: [विरासत या आवंटन का विवरण]

2. शिकायत का विवरण:
   - उपरोक्त भूमि पैतृक जनजातीय भूमि है, जो इस जिला परिषद के भूमि हस्तांतरण नियमों के तहत संरक्षित है।
   - दिनांक [तारीख] को, विपक्षी पक्ष [अतिक्रमणकारी का नाम] (जो गैर-आदिवासी है) ने नियमों का उल्लंघन करके अवैध रूप से भूमि पर कब्जा कर लिया।
   - यह हस्तांतरण परिषद द्वारा स्वीकृत नहीं है और कानूनन शून्य है।

मैं परिषद से अनुरोध करता हूँ कि इस हस्तांतरण को शून्य घोषित करे और वास्तविक जनजातीय मालिक को भूमि वापस दिलाए।

संलग्नक:
1. जनजाति प्रमाण पत्र की प्रति
2. भूमि रिकॉर्ड/विरासत का प्रमाण

दिनांक: [तारीख]
स्थान: [स्थान]

भवदीय/भवदीया,
[पूरा नाम]
[संपर्क नंबर]`
    }
};

// ============================================
// Internationalization (i18n)
// ============================================

const TRANSLATIONS = {
    en: {
        hero_badge: "National Citizen-Rights Infrastructure",
        hero_title: 'When bureaucracy gets complicated, <span class="highlight-green">Haqqdar</span> shows the way.',
        hero_subtitle: "Millions of Indians lose benefits, wages, justice, and opportunities simply because they do not know the next step. Haqqdar uses AI to identify your rights, generate legal documents, and guide you through every escalation path — in your language.",
        hero_cta: "Describe Your Problem",
        hero_cta2: "See How It Works",
        stat1: "Govt Schemes",
        stat2: "Legal Categories",
        stat3: "Languages",
        hiw_tag: "THE PROCESS",
        hiw_title: 'From problem to legal document in <span class="gradient-text">60 seconds</span>',
        step1_title: "Describe Your Problem",
        step1_desc: "Tell us what happened in plain language. Hindi, English, or Assamese — type or speak.",
        step2_title: "AI Identifies Your Rights",
        step2_desc: "AI classifies your issue, identifies relevant laws, and determines which authority to approach.",
        step3_title: "Get Legal Documents",
        step3_desc: "Auto-generated complaint, RTI, or escalation letter — in correct legal format, ready to submit.",
        step4_title: "Escalation Ladder",
        step4_desc: "Step-by-step escalation path with contacts, portal links, and deadlines.",
        cat_tag: "WHAT WE COVER",
        cat_title: 'Select your <span class="gradient-text">issue</span>',
        cat_fir: "FIR Refused",
        cat_fir_desc: "Police won't register your complaint",
        cat_rti: "File RTI",
        cat_rti_desc: "Get information from any government office",
        cat_wages: "Wages Unpaid",
        cat_wages_desc: "Employer hasn't paid your salary",
        cat_scheme: "Scheme Rejected",
        cat_scheme_desc: "Wrongly denied a government scheme",
        cat_ration: "Ration Denied",
        cat_ration_desc: "PDS shop refused to give ration",
        cat_ne: "Northeast Special",
        cat_ne_desc: "AFSPA, NRC, ILP, Tribal Land Rights",
        chat_tag: "YOUR ISSUE",
        chat_title: 'Tell us what <span class="gradient-text">happened</span>',
        chat_welcome: "Namaste! I'm Haqqdar — your legal rights assistant. Tell me what happened to you in your own words. For example:",
        chat_placeholder: "Describe your problem here...",
        chat_disclaimer: "Haqqdar provides legal information, not legal advice. Always consult a lawyer for complex matters.",
        ne_title: 'Special protections for the <span class="gradient-text">Northeast</span>',
        ne_desc: "Unique legal frameworks for Assam, Nagaland, Manipur, Meghalaya, Mizoram, Arunachal Pradesh, Tripura & Sikkim",
        help_tag: "EMERGENCY",
        help_title: 'Important <span class="gradient-text">Helplines</span>',
        footer_tagline: "Your Rights, Your Words. — Built for India, by India.",
        footer_disc: "Haqqdar provides legal information, not legal advice. Consult a qualified lawyer for specific legal matters.",
        settings_title: "⚙️ AI Settings",
        settings_desc: "Haqqdar uses Google Gemini AI to analyze your problems, identify legal rights, and generate tailored legal documents.",
        settings_key_label: "Gemini API Key",
        settings_help_text: "Don't have a key? <a href=\"https://aistudio.google.com/\" target=\"_blank\">Get a free Gemini API Key here ↗</a>",
        settings_cancel: "Cancel",
        settings_save: "Save Config",
        nav_gap: "Gap Detector",
        gap_tag: "PAPERWORK INTELLIGENCE",
        gap_title: "Document Gap Detector",
        gap_desc: "Bridge your paperwork gaps before submitting to avoid rejections. Check your profile, identify missing documents, and see resolution steps.",
        gap_profile_title: "Select Citizen Profile",
        gap_profile_desc: "Choose a pre-defined profile or type a custom one to check required welfare documentation.",
        profile_flood: "🌾 Assam Flood Relief",
        profile_tea: "☕ Tea Garden Worker",
        profile_scholarship: "🎓 Low-Income Student",
        profile_ration: "🍚 Ration Card (NFSA)",
        profile_farmer: "🚜 PM-Kisan Scheme",
        gap_custom_label: "Or enter custom situation / category:",
        gap_detect_btn: "Analyze Gaps",
        gap_footer_help: "Use Haqqdar AI to draft request letters or appeal documents for missing items.",
        gap_ai_btn: "Draft Appeals for Missing Documents",
        showcase_tag: "INTELLIGENCE PLATFORM",
        showcase_title: 'Engineered to <span class="gradient-text">Bridge the Power Gap</span>',
        showcase_desc: "Haqqdar is not just a chatbot. It is a digital public utility designed to help you navigate hostile bureaucratic systems.",
        step5_title: "Deadline Tracking",
        step5_desc: "Track response windows and calendar milestones automatically.",
        step6_title: "Resolution Guidance",
        step6_desc: "Follow-through templates until your case reaches a verdict."
    },
    hi: {
        hero_badge: "राष्ट्रीय नागरिक-अधिकार अवसंरचना",
        hero_title: 'जब व्यवस्था जटिल हो जाए, <span class="highlight-green">Haqqdar</span> रास्ता दिखाता है।',
        hero_subtitle: "लाखों भारतीय केवल इसलिए लाभ, मजदूरी, न्याय और अवसर खो देते हैं क्योंकि वे अगला कदम नहीं जानते हैं। Haqqdar आपकी भाषा में — आपके अधिकारों की पहचान करने, कानूनी दस्तावेज़ तैयार करने और हर एस्केलेशन पथ पर आपका मार्गदर्शन करने के लिए AI का उपयोग करता है।",
        hero_cta: "अपनी समस्या बताएं",
        hero_cta2: "कैसे काम करता है देखें",
        stat1: "सरकारी योजनाएं",
        stat2: "कानूनी श्रेणियां",
        stat3: "भाषाएं",
        hiw_tag: "प्रक्रिया",
        hiw_title: 'समस्या से कानूनी दस्तावेज़ <span class="gradient-text">60 सेकंड</span> में',
        step1_title: "अपनी समस्या बताएं",
        step1_desc: "सरल भाषा में बताएं क्या हुआ। हिंदी, अंग्रेजी, या असमिया — टाइप करें या बोलें।",
        step2_title: "AI आपके अधिकार पहचानता है",
        step2_desc: "AI आपकी समस्या को वर्गीकृत करता है, प्रासंगिक कानूनों की पहचान करता है।",
        step3_title: "कानूनी दस्तावेज़ पाएं",
        step3_desc: "स्वचालित शिकायत, RTI, या एस्केलेशन पत्र — सही कानूनी प्रारूप में।",
        step4_title: "एस्केलेशन सीढ़ी",
        step4_desc: "संपर्क, पोर्टल लिंक और समय सीमा के साथ चरण-दर-चरण पथ।",
        cat_tag: "हम क्या कवर करते हैं",
        cat_title: 'अपना <span class="gradient-text">मुद्दा</span> चुनें',
        cat_fir: "FIR नहीं लिखी",
        cat_fir_desc: "पुलिस शिकायत दर्ज नहीं कर रही",
        cat_rti: "RTI दाखिल करें",
        cat_rti_desc: "किसी भी सरकारी कार्यालय से जानकारी पाएं",
        cat_wages: "वेतन नहीं मिला",
        cat_wages_desc: "नियोक्ता ने वेतन नहीं दिया",
        cat_scheme: "योजना रिजेक्ट",
        cat_scheme_desc: "सरकारी योजना से गलत तरीके से वंचित",
        cat_ration: "राशन नहीं मिला",
        cat_ration_desc: "राशन की दुकान ने राशन देने से मना किया",
        cat_ne: "पूर्वोत्तर विशेष",
        cat_ne_desc: "AFSPA, NRC, ILP, जनजातीय भूमि अधिकार",
        chat_tag: "आपका मुद्दा",
        chat_title: 'बताएं क्या <span class="gradient-text">हुआ</span>',
        chat_welcome: "नमस्ते! मैं हक़दार हूँ — आपका कानूनी अधिकार सहायक। अपने शब्दों में बताएं क्या हुआ। उदाहरण:",
        chat_placeholder: "अपनी समस्या यहाँ लिखें...",
        chat_disclaimer: "हक़दार कानूनी जानकारी देता है, कानूनी सलाह नहीं। जटिल मामलों में हमेशा वकील से परामर्श करें।",
        ne_title: '<span class="gradient-text">पूर्वोत्तर</span> के लिए विशेष सुरक्षा',
        ne_desc: "असम, नागालैंड, मणिपुर, मेघालय, मिज़ोरम, अरुणाचल प्रदेश, त्रिपुरा और सिक्किम के लिए अनूठे कानूनी ढांचे",
        help_tag: "आपातकालीन",
        help_title: 'महत्वपूर्ण <span class="gradient-text">हेल्पलाइन</span>',
        footer_tagline: "आपके अधिकार, आपके शब्द। — भारत के लिए, भारत द्वारा।",
        footer_disc: "हक़दार कानूनी जानकारी देता है, कानूनी सलाह नहीं। जटिल मामलों में हमेशा वकील से परामर्श करें।",
        settings_title: "⚙️ AI सेटिंग्स",
        settings_desc: "हक़दार आपकी समस्याओं का विश्लेषण करने, कानूनी अधिकारों की पहचान करने और आवश्यक कानूनी दस्तावेज़ तैयार करने के लिए Google Gemini AI का उपयोग करता है।",
        settings_key_label: "Gemini API Key",
        settings_help_text: "Key नहीं है? <a href=\"https://aistudio.google.com/\" target=\"_blank\">यहाँ मुफ़्त Gemini API Key प्राप्त करें ↗</a>",
        settings_cancel: "रद्द करें",
        settings_save: "सेव करें",
        nav_gap: "दस्तावेज़ जाँच",
        gap_tag: "कागजी कार्रवाई इंटेलिजेंस",
        gap_title: "दस्तावेज़ गैप डिटेक्टर",
        gap_desc: "अस्वीकृति से बचने के लिए सबमिट करने से पहले अपनी कागजी कार्रवाई के अंतर को दूर करें। अपना प्रोफ़ाइल जांचें, लापता दस्तावेज़ों की पहचान करें और समाधान कदम देखें।",
        gap_profile_title: "नागरिक प्रोफ़ाइल चुनें",
        gap_profile_desc: "आवश्यक कल्याणकारी दस्तावेज़ों की जांच के लिए एक पूर्व-निर्धारित प्रोफ़ाइल चुनें या एक कस्टम टाइप करें।",
        profile_flood: "🌾 असम बाढ़ राहत",
        profile_tea: "☕ चाय बागान श्रमिक",
        profile_scholarship: "🎓 कम आय वाले छात्र",
        profile_ration: "🍚 राशन कार्ड (NFSA)",
        profile_farmer: "🚜 पीएम-किसान योजना",
        gap_custom_label: "या कस्टम स्थिति / श्रेणी दर्ज करें:",
        gap_detect_btn: "कमियाँ खोजें",
        gap_footer_help: "लापता वस्तुओं के लिए अनुरोध पत्र या अपील दस्तावेज़ तैयार करने के लिए Haqqdar AI का उपयोग करें।",
        gap_ai_btn: "लापता दस्तावेज़ों के लिए अपील ड्राफ्ट करें",
        showcase_tag: "इंटेलिजेंस प्लेटफ़ॉर्म",
        showcase_title: 'नागरिकों को <span class="gradient-text">सशक्त बनाने के लिए</span> तैयार',
        showcase_desc: "Haqqdar केवल एक चैटबॉट नहीं है। यह एक डिजिटल सार्वजनिक उपयोगिता है जिसे जटिल सरकारी प्रणालियों को नेविगेट करने में आपकी सहायता के लिए डिज़ाइन किया गया है।",
        step5_title: "समय सीमा ट्रैकिंग",
        step5_desc: "स्वचालित रूप से उत्तर खिड़कियों और कैलेंडर मील के पत्थर को ट्रैक करें।",
        step6_title: "समाधान मार्गदर्शन",
        step6_desc: "जब तक आपके मामले का फैसला नहीं हो जाता, तब तक अनुवर्ती टेम्प्लेट का पालन करें।"
    },
    as: {
        hero_badge: "ৰাষ্ট্ৰীয় নাগৰিক-অধিকাৰ আন্তঃগাঁথনি",
        hero_title: 'যেতিয়া চৰকাৰী ব্যৱস্থা জটিল হৈ পৰে, <span class="highlight-green">Haqqdar-এ</span> পথ দেখুৱায়।',
        hero_subtitle: "লাখ লাখ ভাৰতীয়ই কেৱল পৰৱৰ্তী পদক্ষেপটো নজনাৰ বাবেই সুবিধা, মজুৰি, ন্যায় আৰু সুযোগ হেৰুৱাব লগা হয়। Haqqdar-এ AI ব্যৱহাৰ কৰি আপোনাৰ অধিকাৰ চিনাক্ত কৰে, আইনী নথিপত্ৰ প্ৰস্তুত কৰে আৰু প্ৰতিটো এস্কেলেচন পথৰ জৰিয়তে আপোনাক নিৰ্দেশনা দিয়ে — আপোনাৰ নিজৰ ভাষাত।",
        hero_cta: "আপোনাৰ সমস্যা বৰ্ণনা কৰক",
        hero_cta2: "কেনেকৈ কাম কৰে চাওক",
        stat1: "চৰকাৰী আঁচনি",
        stat2: "আইনী শ্ৰেণী",
        stat3: "ভাষা",
        hiw_tag: "প্ৰক্ৰিয়া",
        hiw_title: 'সমস্যাৰ পৰা আইনী নথিপত্ৰ <span class="gradient-text">৬০ ছেকেণ্ডত</span>',
        step1_title: "আপোনাৰ সমস্যা বৰ্ণনা কৰক",
        step1_desc: "সৰল ভাষাত কওক কি হৈছিল। হিন্দী, ইংৰাজী, বা অসমীয়া — টাইপ কৰক বা কওক।",
        step2_title: "AI-এ আপোনাৰ অধিকাৰ চিনাক্ত কৰে",
        step2_desc: "AI-এ আপোনাৰ সমস্যা শ্ৰেণীবদ্ধ কৰে, প্ৰাসংগিক আইন চিনাক্ত কৰে।",
        step3_title: "আইনী নথিপত্ৰ পাওক",
        step3_desc: "স্বয়ংক্ৰিয় অভিযোগ, RTI, বা এস্কেলেচন পত্ৰ — সঠিক আইনী ফৰ্মেটত।",
        step4_title: "এস্কেলেচন লেডাৰ",
        step4_desc: "যোগাযোগ, পৰ্টেল লিংক আৰু সময়সীমাৰ সৈते পদক্ষেপ-দৰ-পদক্ষেপ পথ।",
        cat_tag: "আমি কি সামৰি লওঁ",
        cat_title: 'আপোনাৰ <span class="gradient-text">সমস্যা</span> বাছক',
        cat_fir: "FIR প্ৰত্যাখ্যান",
        cat_fir_desc: "আৰক্ষীয়ে আপোনাৰ অভিযোগ দাখিল কৰা নাই",
        cat_rti: "RTI দাখিল কৰক",
        cat_rti_desc: "যিকোনো চৰকাৰী কাৰ্যালয়ৰ পৰা তথ্য পাওক",
        cat_wages: "দৰমহা পোৱা নাই",
        cat_wages_desc: "নিয়োগকৰ্তাই দৰমহা দিয়া নাই",
        cat_scheme: "আঁচনি প্ৰত্যাখ্যান",
        cat_scheme_desc: "চৰকাৰী আঁচনিৰ পৰা ভুলকৈ বঞ্চিত",
        cat_ration: "ৰেচন পোৱা নাই",
        cat_ration_desc: "ৰেচন দোকানে ৰেচন দিবলৈ মানা কৰিলে",
        cat_ne: "উত্তৰ-পূৱ বিশেষ",
        cat_ne_desc: "AFSPA, NRC, ILP, জনজাতীয় ভূমি অধিকাৰ",
        chat_tag: "আপোনাৰ সমস্যা",
        chat_title: 'কওক কি <span class="gradient-text">হৈছিল</span>',
        chat_welcome: "নমস্কাৰ! মই হকদাৰ — আপোনাৰ আইনী অধিকাৰ সহায়ক। আপোনাৰ নিজৰ ভাষাত কওক কি হৈছিল।",
        chat_placeholder: "আপোনাৰ সমস্যা ইয়াত লিখক...",
        chat_disclaimer: "হকদাৰে আইনী তথ্য প্ৰদান কৰে, আইনী পৰামৰ্শ নহয়। জটিল বিষয়ৰ বাবে সদায় উকীলৰ সৈতে পৰামৰ্শ কৰিব।",
        ne_title: '<span class="gradient-text">উত্তৰ-পূব</span>ৰ বাবে বিশেষ সুৰক্ষা',
        ne_desc: "অসম, নাগালেণ্ড, মণিপুৰ, মেঘালয়, মিজোৰাম, অৰুণাচল প্ৰদেশ, ত্ৰিপুৰা আৰু ছিকিমৰ বাবে একক আইনী গাঁথনি",
        help_tag: "জৰুৰীকালীন",
        help_title: 'গুৰুত্বপূৰ্ণ <span class="gradient-text">হেল্পলাইন</span>',
        footer_tagline: "আপোনাৰ অধিকাৰ, আপোনাৰ শব্দ। — ভাৰতৰ বাবে, ভাৰতৰ দ্বাৰা।",
        footer_disc: "হকদাৰে আইনী তথ্য প্ৰদান কৰে, আইনী পৰামৰ্শ নহয়। জটিল বিষয়ৰ বাবে সদায় উকীলৰ সৈতে পৰামৰ্শ কৰিব।",
        settings_title: "⚙️ AI ছেটিংছ",
        settings_desc: "হকদাৰে আপোনাৰ সমস্যাসমূহ বিশ্লেষণ কৰিবলৈ, আইনী অধিকাৰ চিনাক্ত কৰিবলৈ আৰু প্ৰয়োজনীয় আইনী নথিপত্ৰ প্ৰস্তুত কৰিবলৈ Google Gemini AI ব্যৱহাৰ কৰে।",
        settings_key_label: "Gemini API কি (API Key)",
        settings_help_text: "আপোনাৰ কি (Key) নাইনে? <a href=\"https://aistudio.google.com/\" target=\"_blank\">ইয়াত এটা বিনামূলীয়া Gemini API কি লাভ কৰক ↗</a>",
        settings_cancel: "বাতিল কৰক",
        settings_save: "সংৰক্ষণ কৰক",
        nav_gap: "নথিপত্ৰ পৰীক্ষক",
        gap_tag: "কাগজ-পত্ৰৰ বুদ্ধিমত্তা",
        gap_title: "নথিপত্ৰৰ ব্যৱধান চিনাক্তকাৰী",
        gap_desc: "আবেদন নাকচ হোৱাৰ পৰা বাচিবলৈ জমা দিয়াৰ পূৰ্বে আপোনাৰ নথিপত্ৰৰ অভাৱসমূহ দূৰ কৰক। আপোনাৰ প্ৰ’ফাইল পৰীক্ষা কৰক, হেৰুৱা নথিসমূহ চিনাক্ত কৰক আৰু সমাধানৰ পদক্ষেপসমূহ চাওক।",
        gap_profile_title: "নাগৰিক প্ৰ’ফাইল বাছক",
        gap_profile_desc: "প্ৰয়োজনীয় কল্যাণমুখী নথিপত্ৰ পৰীক্ষা কৰিবলৈ এটা পূৰ্ব-নিৰ্ধাৰিত প্ৰ’ফাইল বাছক বা এটা নিজাকৈ টাইপ কৰক।",
        profile_flood: "🌾 অসম বান সাহায্য",
        profile_tea: "☕ চাহ বাগিচাৰ শ্ৰমিক",
        profile_scholarship: "🎓 কম আয়ৰ শিক্ষাৰ্থী",
        profile_ration: "🍚 ৰেচন কাৰ্ড (NFSA)",
        profile_farmer: "🚜 পি.এম-কৃষক আঁচনি",
        gap_custom_label: "অথবা নিজা পৰিস্থিতি / শ্ৰেণী লিখক:",
        gap_detect_btn: "ব্যৱধান বিশ্লেষণ কৰক",
        gap_footer_help: "হেৰুৱা নথিসমূহৰ বাবে অনুৰোধ পত্ৰ বা আপীল পত্ৰ প্ৰস্তুত কৰিবলৈ Haqqdar AI ব্যৱহাৰ কৰক।",
        gap_ai_btn: "হেৰুৱা নথিসমূহৰ বাবে আপীল খচৰা কৰক",
        showcase_tag: "বুদ্ধিমত্তা মঞ্চ",
        showcase_title: 'নাগৰিকক <span class="gradient-text">সবল কৰিবলৈ</span> প্ৰস্তুত',
        showcase_desc: "Haqqdar কেৱল এটা চ্যাটবট নহয়। ই এটা ডিজিটেল ৰাজহুৱা ব্যৱস্থা যিটো জটিল চৰকাৰী প্ৰক্ৰিয়াসমূহ পাৰ হ’বলৈ আপোনাক সহায় কৰিবলৈ ডিজাইন কৰা হৈছে।",
        step5_title: "সময়সীমা ট্ৰেকিং",
        step5_desc: "স্বয়ংক্ৰিয়ভাৱে সঁহাৰিৰ সময়সীমা আৰু কেলেণ্ডাৰ মাইলৰ খুঁটি ট্ৰেক কৰক।",
        step6_title: "সমাধান নিৰ্দেশনা",
        step6_desc: "আপোনাৰ গোচৰৰ মীমাংসা নোহোৱালৈকে অনুসৰণমূলক টেমপ্লেট ব্যৱহাৰ কৰক।"
    }
};

let currentLang = 'en';
let selectedCategory = null;
let rawGeminiKey = localStorage.getItem('gemini_api_key');
let geminiApiKey = (!rawGeminiKey || rawGeminiKey === 'null' || rawGeminiKey === 'undefined' || rawGeminiKey.trim() === '') ? '' : rawGeminiKey;

// ============================================
// Issue Classification Keywords
// ============================================

const CLASSIFICATION_RULES = [
    {
        category: 'fir',
        keywords: ['fir', 'police', 'thana', 'complaint', 'case', 'report', 'crime', 'theft', 'assault', 'murder',
            'पुलिस', 'थाना', 'एफआईआर', 'शिकायत', 'चोरी', 'मारपीट', 'अपराध', 'केस',
            'fir nahi', 'police station', 'report nahi', 'zero fir', 'sho'],
        weight: 1
    },
    {
        category: 'rti',
        keywords: ['rti', 'information', 'right to information', 'सूचना', 'जानकारी',
            'jaankari', 'soochna', 'rti file', 'rti application'],
        weight: 1
    },
    {
        category: 'wages',
        keywords: ['salary', 'wages', 'pay', 'payment', 'paisa', 'rupees', 'employer', 'company', 'job',
            'वेतन', 'मजदूरी', 'तनख्वाह', 'पैसा', 'कंपनी', 'नौकरी',
            'salary nahi', 'payment nahi', 'paise nahi', 'tankhwah', 'majdoori',
            'pf', 'provident fund', 'epf', 'overtime'],
        weight: 1
    },
    {
        category: 'scheme',
        keywords: ['scheme', 'yojana', 'pm kisan', 'ayushman', 'ujjwala', 'mgnrega', 'nrega', 'pension',
            'योजना', 'किसान', 'आयुष्मान', 'उज्ज्वला', 'मनरेगा', 'पेंशन',
            'rejected', 'reject', 'deny', 'denied', 'government', 'sarkar', 'sarkari'],
        weight: 1
    },
    {
        category: 'ration',
        keywords: ['ration', 'pds', 'food', 'grain', 'rice', 'wheat', 'chawal', 'gehun', 'aata',
            'राशन', 'खाना', 'चावल', 'गेहूं', 'आटा',
            'ration card', 'ration shop', 'fair price', 'bpl', 'apl', 'antyodaya'],
        weight: 1
    },
    {
        category: 'ne_land_flood',
        keywords: ['dharitree', 'jamabandi', 'chitha', 'flood relief', 'crop damage', 'crop compensation', 'pmay', 'awas yojana', 'land record', 'বাঢ়', 'মুৱাজ্জা', 'জমাबंदी', 'बाढ़', 'फसल', 'मुआवजा'],
        weight: 1.5
    },
    {
        category: 'ne_scholarship_tea',
        keywords: ['scholarship', 'student fee', 'nsp', 'ews', 'tea garden', 'tea worker', 'plantation labor', 'wages tea', 'ছাত্রবৃত্তি', 'চাহ বাগিচা', 'छात्रवृत्ति', 'चाय बागान', 'श्रमिक'],
        weight: 1.5
    },
    {
        category: 'ne_ilp_border',
        keywords: ['ilp', 'inner line', 'permit', 'border dispute', 'boundary dispute', 'arunachal border', 'ইনাৰ লাইন', 'সীমা বিবাদ', 'परमिट', 'सीमा विवाद'],
        weight: 1.5
    },
    {
        category: 'ne_customary_tribal',
        keywords: ['customary law', 'tribal land', 'sixth schedule', '6th schedule', 'adc', 'district council', 'forest rights', 'fra', 'nokma', 'gaon burah', 'স্বায়ত্তশাসিত', 'জনজাতীয় ভূমি', 'स्वायत्त परिषद', 'जनजातीय'],
        weight: 1.5
    },
    {
        category: 'northeast',
        keywords: ['afspa', 'nrc', 'ilp', 'inner line', 'tribal land', 'army', 'military', 'paramilitary',
            'assam', 'nagaland', 'manipur', 'meghalaya', 'mizoram', 'arunachal', 'tripura', 'sikkim',
            'northeast', 'north east', 'foreigners tribunal', 'sixth schedule', '6th schedule',
            'autonomous district', 'nhrc', 'human rights'],
        weight: 1
    }
];

// ============================================
// Core Functions
// ============================================

function classifyIssue(text) {
    const lower = text.toLowerCase();
    const scores = {};

    CLASSIFICATION_RULES.forEach(rule => {
        scores[rule.category] = 0;
        rule.keywords.forEach(keyword => {
            if (lower.includes(keyword)) {
                scores[rule.category] += rule.weight;
            }
        });
    });

    // Find category with highest score
    let maxScore = 0;
    let bestCategory = null;

    Object.entries(scores).forEach(([cat, score]) => {
        if (score > maxScore) {
            maxScore = score;
            bestCategory = cat;
        }
    });

    // If selected category exists, boost it
    if (selectedCategory && scores[selectedCategory] > 0) {
        bestCategory = selectedCategory;
    } else if (selectedCategory && maxScore === 0) {
        bestCategory = selectedCategory;
    }

    return bestCategory;
}

function generateResponse(category, userMessage) {
    const data = LEGAL_DATA[category];
    if (!data) return null;

    const isHindi = currentLang === 'hi';
    const title = isHindi ? (data.title_hi || data.title) : data.title;
    const rights = isHindi ? (data.rights_hi || data.rights) : data.rights;
    const template = isHindi ? (data.document_template_hi || data.document_template) : data.document_template;

    return { data, title, rights, template, category };
}

function createResponseHTML(response) {
    const { data, title, rights, template, category } = response;
    const isHindi = currentLang === 'hi';

    let html = `<div class="ai-response">`;

    // Title & Law
    html += `<h4>⚖️ ${title}</h4>`;
    html += `<p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 16px;">
        <strong>${isHindi ? 'प्रासंगिक कानून' : 'Applicable Law'}:</strong> ${data.law}</p>`;

    // Rights Box
    html += `<div class="rights-box">`;
    html += `<div class="rights-label">${isHindi ? '📜 आपके अधिकार' : '📜 YOUR RIGHTS'}</div>`;
    rights.forEach(right => {
        html += `<p style="margin-bottom: 6px;">• ${right}</p>`;
    });
    html += `</div>`;

    // Escalation Ladder
    html += `<h4 style="margin-top: 20px;">${isHindi ? '🔼 शिकायत की सीढ़ी' : '🔼 Escalation Ladder'}</h4>`;
    html += `<div class="escalation-ladder">`;

    data.escalation.forEach(step => {
        const stepTitle = isHindi ? (step.title_hi || step.title) : step.title;
        const stepDesc = isHindi ? (step.desc_hi || step.desc) : step.desc;

        html += `<div class="escalation-step">
            <div class="escalation-level">${step.level}</div>
            <div class="escalation-info">
                <h5>${stepTitle}</h5>
                <p>${stepDesc}${step.link ? ` <a href="${step.link}" target="_blank">→ Open Portal</a>` : ''}</p>
            </div>
        </div>`;
    });
    html += `</div>`;

    // Portals
    if (data.portals) {
        html += `<h4 style="margin-top: 20px;">${isHindi ? '🔗 उपयोगी लिंक' : '🔗 Useful Links'}</h4>`;
        html += `<div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px;">`;
        Object.entries(data.portals).forEach(([name, link]) => {
            if (link.startsWith('http')) {
                html += `<a href="${link}" target="_blank" class="ne-tag" style="cursor: pointer; text-decoration: none;">${name} ↗</a>`;
            } else {
                html += `<span class="ne-tag">📞 ${name}: ${link}</span>`;
            }
        });
        html += `</div>`;
    }

    // Document Gap Checklist
    if (response.document_checklist && response.document_checklist.length > 0) {
        html += `<div class="chat-doc-checklist">`;
        html += `<div class="chat-doc-title">📋 ${isHindi ? 'आवश्यक दस्तावेज़ और स्थिति' : 'REQUIRED DOCUMENTS & STATUS'}</div>`;
        response.document_checklist.forEach(doc => {
            const isPresent = doc.status === 'present';
            const statusLabel = isPresent 
                ? `<span class="doc-status-dot" style="background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.3); color: var(--accent2-light); font-size: 0.65rem; font-weight: 700; padding: 1px 6px; border-radius: 4px; margin-left: 6px; text-transform: uppercase;">${isHindi ? 'तैयार' : 'READY'}</span>` 
                : `<span class="doc-status-dot" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.3); color: #f87171; font-size: 0.65rem; font-weight: 700; padding: 1px 6px; border-radius: 4px; margin-left: 6px; text-transform: uppercase;">${isHindi ? 'लापता' : 'MISSING'}</span>`;
            
            html += `<div class="chat-doc-item" style="margin-bottom: 8px;">
                • <strong>${escapeHTML(doc.name)}</strong>: ${statusLabel}
                ${doc.how_to_get ? `<div style="font-size: 0.78rem; color: var(--text-muted); padding-left: 12px; margin-top: 2px;">ℹ️ ${escapeHTML(doc.how_to_get)}</div>` : ''}
            </div>`;
        });
        html += `</div>`;
    }

    // Document Template
    if (template) {
        html += `<h4 style="margin-top: 20px;">${isHindi ? '📄 तैयार दस्तावेज़ टेम्पलेट' : '📄 Ready-to-Use Document Template'}</h4>`;
        html += `<div class="document-preview">${escapeHTML(template)}</div>`;
        html += `<div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 14px;">`;
        html += `<button class="download-btn" onclick="downloadDocument('${category}')" style="flex: 1; min-width: 150px; margin-top: 0;">
            📥 ${isHindi ? 'दस्तावेज़ डाउनलोड करें (.txt)' : 'Download Document (.txt)'}
        </button>`;
        
        // Track Case Button
        const tracked = isCaseTracked(category);
        html += `<button class="track-case-btn ${tracked ? 'tracked' : ''}" id="track-btn-${category}" onclick="trackCase('${category}')" ${tracked ? 'disabled' : ''} style="flex: 1; min-width: 150px; margin-top: 0;">
            🚀 ${tracked ? (isHindi ? 'केस ट्रैक किया जा रहा है' : 'Case is being Tracked') : (isHindi ? 'इस केस को ट्रैक करें' : 'Track this Case')}
        </button>`;
        html += `</div>`;
    }

    html += `</div>`;
    return html;
}

function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function downloadDocument(category) {
    const data = LEGAL_DATA[category];
    if (!data) return;

    const isHindi = currentLang === 'hi';
    const template = isHindi ? (data.document_template_hi || data.document_template) : data.document_template;
    const title = isHindi ? (data.title_hi || data.title) : data.title;

    const blob = new Blob([template], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Haqqdar_${category}_${currentLang}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ============================================
// Active Case Tracking Engine
// ============================================

function isCaseTracked(category) {
    const cases = getActiveCases();
    return cases.some(c => c.category === category);
}

function getActiveCases() {
    const data = localStorage.getItem('haqqdar_active_cases');
    try {
        return data ? JSON.parse(data) : [];
    } catch (e) {
        return [];
    }
}

function saveCases(cases) {
    localStorage.setItem('haqqdar_active_cases', JSON.stringify(cases));
}

function trackCase(category) {
    const data = LEGAL_DATA[category];
    if (!data) return;

    const cases = getActiveCases();
    if (cases.some(c => c.category === category)) {
        return; // Already tracking
    }

    // Ensure we have checklist and timeline
    const responseWithChecklist = ensureChecklistAndTimeline({
        category: category,
        data: data
    });

    const isHindi = currentLang === 'hi';
    const title = isHindi ? (data.title_hi || data.title) : data.title;
    const law = data.law;
    const rights = isHindi ? (data.rights_hi || data.rights) : data.rights;
    const escalation = data.escalation;
    const portals = data.portals;
    const document_template = isHindi ? (data.document_template_hi || data.document_template) : data.document_template;

    // Map document checklist to add checked property
    const checklist = responseWithChecklist.document_checklist.map(doc => ({
        ...doc,
        checked: doc.status === 'present'
    }));

    const newCase = {
        id: category,
        category: category,
        title: title,
        law: law,
        rights: rights,
        escalation: escalation,
        portals: portals,
        document_template: document_template,
        document_checklist: checklist,
        timeline: responseWithChecklist.timeline,
        dateAdded: Date.now(),
        currentStepIndex: 0,
        completedSteps: []
    };

    cases.push(newCase);
    saveCases(cases);
    
    // Update button in UI to show "Tracked"
    const btn = document.getElementById(`track-btn-${category}`);
    if (btn) {
        btn.classList.add('tracked');
        btn.disabled = true;
        btn.textContent = isHindi ? '✓ केस ट्रैक किया जा रहा है' : '✓ Case is being Tracked';
    }

    // Render dashboard
    renderCaseDashboard();

    // Scroll to dashboard
    const trackerSec = document.getElementById('case-tracker');
    if (trackerSec) {
        trackerSec.scrollIntoView({ behavior: 'smooth' });
    }
}

function deleteCase(caseId) {
    const isHindi = currentLang === 'hi';
    if (!confirm(isHindi ? 'क्या आप इस केस को हटाना चाहते हैं?' : 'Are you sure you want to remove this case?')) {
        return;
    }
    let cases = getActiveCases();
    cases = cases.filter(c => c.id !== caseId);
    saveCases(cases);
    
    // Also re-enable any matching track buttons in chat if they exist
    const btn = document.getElementById(`track-btn-${caseId}`);
    if (btn) {
        btn.classList.remove('tracked');
        btn.disabled = false;
        btn.textContent = isHindi ? '🚀 इस केस को ट्रैक करें' : '🚀 Track this Case';
    }

    renderCaseDashboard();
}

function toggleDocument(caseId, docIndex) {
    const cases = getActiveCases();
    const cIndex = cases.findIndex(item => item.id === caseId);
    if (cIndex === -1) return;

    const c = cases[cIndex];
    if (c.document_checklist && c.document_checklist[docIndex]) {
        c.document_checklist[docIndex].checked = !c.document_checklist[docIndex].checked;
        saveCases(cases);
        renderCaseDashboard();
    }
}

function completeTimelineStep(caseId, stepIndex, shouldReRender = true) {
    const cases = getActiveCases();
    const cIndex = cases.findIndex(item => item.id === caseId);
    if (cIndex === -1) return;

    const c = cases[cIndex];
    if (!c.completedSteps) c.completedSteps = [];
    
    if (!c.completedSteps.includes(stepIndex)) {
        c.completedSteps.push(stepIndex);
        
        // Update currentStepIndex to the next uncompleted step
        let nextStep = 0;
        for (let i = 0; i < c.timeline.length; i++) {
            if (!c.completedSteps.includes(i)) {
                nextStep = i;
                break;
            }
        }
        c.currentStepIndex = nextStep;
        
        saveCases(cases);
        if (shouldReRender) {
            renderCaseDashboard();
        }
    }
}

function runTimelineAction(caseId, stepIndex) {
    const cases = getActiveCases();
    const c = cases.find(item => item.id === caseId);
    if (!c) return;

    const step = c.timeline[stepIndex];
    if (!step) return;

    // Put prompt in input
    const input = document.getElementById('chat-input');
    if (input) {
        input.value = step.action_prompt || `Generate letter/appeal for: ${step.event}`;
        input.style.height = 'auto';
        autoResize(input);
        
        // Scroll to chat
        const chatSec = document.getElementById('chat');
        if (chatSec) {
            chatSec.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Focus input
        input.focus();
    }
    
    // Also mark this step as completed!
    completeTimelineStep(caseId, stepIndex, true);
}

function renderCaseDashboard() {
    const dashboard = document.getElementById('tracker-dashboard');
    const noCasesCard = document.getElementById('no-cases-card');
    const casesList = document.getElementById('active-cases-list');
    
    if (!dashboard || !noCasesCard || !casesList) return;

    const cases = getActiveCases();
    const isHindi = currentLang === 'hi';

    if (cases.length === 0) {
        noCasesCard.style.display = 'block';
        casesList.style.display = 'none';
        return;
    }

    noCasesCard.style.display = 'none';
    casesList.style.display = 'flex';
    casesList.innerHTML = '';

    cases.forEach(c => {
        // Calculate progress percentage
        const totalDocs = c.document_checklist.length;
        const checkedDocs = c.document_checklist.filter(doc => doc.checked).length;
        
        const totalSteps = c.timeline.length;
        const completedStepsCount = c.completedSteps ? c.completedSteps.length : 0;
        
        const totalTasks = totalDocs + totalSteps;
        const completedTasks = checkedDocs + completedStepsCount;
        const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

        // Build document checklist HTML
        let checklistHTML = '';
        c.document_checklist.forEach((d, idx) => {
            const isChecked = d.checked;
            const isPresent = d.status === 'present';
            const statusLabel = isChecked || isPresent ? (isHindi ? 'तैयार' : 'READY') : (isHindi ? 'लापता' : 'MISSING');
            const itemClass = isChecked || isPresent ? 'present-doc' : 'missing-doc';
            
            checklistHTML += `
                <div class="doc-checklist-item ${itemClass}">
                    <input type="checkbox" id="chk-${c.id}-${idx}" ${isChecked ? 'checked' : ''} onchange="toggleDocument('${c.id}', ${idx})">
                    <div style="flex: 1;">
                        <label for="chk-${c.id}-${idx}" style="cursor: pointer; font-weight: 500;">
                            ${escapeHTML(d.name)}
                        </label>
                        <span class="doc-status-dot">${statusLabel}</span>
                        ${d.how_to_get ? `
                            <div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 2px;">
                                💡 ${escapeHTML(d.how_to_get)}
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        });

        // Build timeline HTML
        let timelineHTML = '';
        c.timeline.forEach((step, idx) => {
            const isCompleted = c.completedSteps && c.completedSteps.includes(idx);
            const isActive = !isCompleted && idx === c.currentStepIndex;
            const itemClass = isCompleted ? 'completed' : isActive ? 'active' : '';
            
            timelineHTML += `
                <div class="timeline-step-item ${itemClass}">
                    <div class="timeline-step-circle">
                        ${isCompleted ? '✓' : step.days === 0 ? 'Now' : `+${step.days}d`}
                    </div>
                    <div class="timeline-step-info">
                        <h6 style="margin: 0; font-size: 0.88rem; color: var(--text-primary); font-weight: 700;">
                            ${escapeHTML(step.event)}
                        </h6>
                        <p style="margin: 2px 0 0 0; font-size: 0.78rem; color: var(--text-muted);">
                            ${isCompleted ? (isHindi ? 'पूरा हुआ' : 'Completed') : (step.days === 0 ? (isHindi ? 'तत्काल कार्रवाई' : 'Immediate action') : (isHindi ? `समयसीमा: आज से ${step.days} दिन` : `Deadline: Day ${step.days}`))}
                        </p>
                        ${!isCompleted ? `
                            <div style="display: flex; gap: 8px; align-items: center; margin-top: 8px;">
                                <button class="timeline-step-action-btn" onclick="runTimelineAction('${c.id}', ${idx})">
                                    ⚡ ${isHindi ? 'कार्रवाई शुरू करें' : 'Take Action'}
                                </button>
                                <button style="background: none; border: 1px solid var(--border); color: var(--text-muted); font-size: 0.78rem; font-weight: 600; padding: 5px 10px; border-radius: var(--radius-sm); cursor: pointer;" onclick="completeTimelineStep('${c.id}', ${idx})">
                                    ✓ ${isHindi ? 'पूरा हुआ' : 'Mark Done'}
                                </button>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        });

        // Append Case Card
        const cardDiv = document.createElement('div');
        cardDiv.className = 'case-card';
        cardDiv.id = `case-card-${c.id}`;
        cardDiv.innerHTML = `
            <div class="case-card-header">
                <div>
                    <div class="case-card-title">${escapeHTML(c.title)}</div>
                    <div class="case-card-law">${escapeHTML(c.law)}</div>
                </div>
                <button class="case-card-delete" onclick="deleteCase('${c.id}')" title="${isHindi ? 'केस हटाएं' : 'Remove Case'}">✕</button>
            </div>
            
            <div class="case-progress-wrapper">
                <div class="case-progress-label">
                    <span>${isHindi ? 'प्रगति' : 'Progress'}</span>
                    <span>${progressPercent}%</span>
                </div>
                <div class="case-progress-bar">
                    <div class="case-progress-fill" style="width: ${progressPercent}%;"></div>
                </div>
            </div>
            
            <div class="case-tracker-content">
                <div class="case-tracker-left">
                    <div class="doc-checklist-title">
                        📋 ${isHindi ? 'दस्तावेज़ गैप डिटेक्टर' : 'Document Gap Detector'}
                    </div>
                    <div class="doc-checklist-items">
                        ${checklistHTML}
                    </div>
                </div>
                
                <div class="case-tracker-right">
                    <div class="timeline-stepper-title">
                        ⏳ ${isHindi ? 'समयसीमा और अनुवर्ती' : 'Timeline & Escalation'}
                    </div>
                    <div class="timeline-stepper">
                        ${timelineHTML}
                    </div>
                </div>
            </div>
        `;
        casesList.appendChild(cardDiv);
    });
}

function ensureChecklistAndTimeline(response) {
    const cat = response.category;
    
    if (response.document_checklist && response.timeline) {
        return response;
    }
    
    if (response.data && response.data.document_checklist && response.data.timeline) {
        response.document_checklist = response.data.document_checklist;
        response.timeline = response.data.timeline;
        return response;
    }

    const defaults = {
        fir: {
            document_checklist: [
                { name: "Identity Proof (Aadhaar/Voter ID)", status: "present", how_to_get: "Standard government ID" },
                { name: "Written Complaint (2 copies)", status: "missing", how_to_get: "Draft using the template below and print 2 copies" },
                { name: "Supporting Evidence (photos/videos/messages if any)", status: "present", how_to_get: "Gather from your phone or records" }
            ],
            timeline: [
                { days: 0, event: "Submit Written Complaint to SHO", action_prompt: "Draft a follow-up letter to the SHO regarding my complaint filed today" },
                { days: 7, event: "Check status & send SP Complaint", action_prompt: "Draft a complaint to the SP about the SHO not registering my FIR" },
                { days: 30, event: "Apply to CJM Magistrate under Sec 175(3) BNSS", action_prompt: "Draft an application to the Judicial Magistrate under Section 175(3) BNSS" }
            ]
        },
        rti: {
            document_checklist: [
                { name: "Identity Proof (Aadhaar/Voter ID)", status: "present", how_to_get: "Standard government ID" },
                { name: "BPL Certificate (if claiming fee waiver)", status: "present", how_to_get: "From local Block Development Office" },
                { name: "RTI Application Form", status: "missing", how_to_get: "Draft using the template below" }
            ],
            timeline: [
                { days: 0, event: "Submit RTI Application (Fee ₹10)", action_prompt: "Prepare online/offline RTI request for my query" },
                { days: 30, event: "File First Appeal", action_prompt: "Draft a First Appeal under Section 19(1) of RTI Act as no response was received" },
                { days: 90, event: "File Second Appeal to Information Commission", action_prompt: "Draft a Second Appeal under Section 19(3) to the Central/State Information Commission" }
            ]
        },
        wages: {
            document_checklist: [
                { name: "Employment Contract / Offer Letter", status: "present", how_to_get: "Look for copy signed during joining" },
                { name: "Bank Statement showing salary history", status: "present", how_to_get: "Download from your net banking portal" },
                { name: "Written Complaint to Labour Commissioner", status: "missing", how_to_get: "Draft using the template below" }
            ],
            timeline: [
                { days: 0, event: "Submit Notice to Employer / Contact Labour Inspector", action_prompt: "Draft a demand notice to my employer for unpaid wages" },
                { days: 15, event: "File Formal Complaint to Labour Commissioner", action_prompt: "Draft a formal complaint to the Labour Commissioner for recovery of unpaid wages" },
                { days: 45, event: "Escalate to Labour Court / civil action", action_prompt: "Draft a claim petition to be filed in the Labour Court for recovery of salary" }
            ]
        },
        scheme: {
            document_checklist: [
                { name: "Aadhaar Card & Income Certificate", status: "present", how_to_get: "Obtain Income certificate from local Tehsildar" },
                { name: "Rejection Letter / Online status printout", status: "missing", how_to_get: "Print the status page from the scheme website" },
                { name: "Grievance Application", status: "missing", how_to_get: "Draft using the template below" }
            ],
            timeline: [
                { days: 0, event: "Submit Grievance on CPGRAMS / State portal", action_prompt: "Draft a grievance text to be uploaded on CPGRAMS regarding scheme rejection" },
                { days: 30, event: "Follow up / File RTI for rejection reason", action_prompt: "Draft an RTI application to know the specific reasons for my scheme rejection" }
            ]
        },
        ration: {
            document_checklist: [
                { name: "Ration Card copy", status: "present", how_to_get: "Standard card issued by Food Dept" },
                { name: "Aadhaar Card (linked to Ration Card)", status: "present", how_to_get: "Ensure Aadhaar linking is done" },
                { name: "Written complaint to District Grievance Redressal Officer (DGRO)", status: "missing", how_to_get: "Draft using the template below" }
            ],
            timeline: [
                { days: 0, event: "Submit written complaint to DGRO / Food Inspector", action_prompt: "Draft a complaint to the Food Inspector regarding PDS shop refusal" },
                { days: 15, event: "Call PDS Helpline / File online grievance", action_prompt: "Submit online grievance on the National Food Security portal" },
                { days: 30, event: "File Appeal to State Food Commission", action_prompt: "Draft an appeal to the State Food Commission as DGRO did not resolve my ration grievance" }
            ]
        },
        ne_land_flood: {
            document_checklist: [
                { name: "Land Patta/Jamabandi copy", status: "present", how_to_get: "Download from Assam Dharitree portal" },
                { name: "Crop damage survey report or photos", status: "present", how_to_get: "Take photos of damaged crops or get copy of survey report" },
                { name: "Written complaint to District Commissioner", status: "missing", how_to_get: "Draft using the template below" }
            ],
            timeline: [
                { days: 0, event: "Submit Complaint to Circle Officer", action_prompt: "Draft a letter to the Circle Officer for flood crop compensation" },
                { days: 15, event: "Escalate to District Commissioner (DC)", action_prompt: "Draft a complaint to the District Commissioner regarding circle office inaction on land mutation" },
                { days: 30, event: "Register grievance on Assam RTPS", action_prompt: "Draft a complaint under Right to Public Services Act for delayed mutation" }
            ]
        },
        ne_scholarship_tea: {
            document_checklist: [
                { name: "Income / Caste Certificate", status: "present", how_to_get: "Obtain from Circle Office / Edistrict portal" },
                { name: "Student ID & Admission Receipt", status: "present", how_to_get: "From your school or college" },
                { name: "RTI Application for Scholarship Delay", status: "missing", how_to_get: "Draft using the template below" }
            ],
            timeline: [
                { days: 0, event: "Submit Online Grievance to Welfare Dept", action_prompt: "Draft a grievance to the Director of Welfare for scholarship delay" },
                { days: 15, event: "Submit RTI to Public Information Officer (PIO)", action_prompt: "Draft an RTI to find out why my scholarship application is pending" },
                { days: 45, event: "First Appeal to Welfare Department", action_prompt: "Draft a First Appeal for my scholarship RTI" }
            ]
        },
        ne_ilp_border: {
            document_checklist: [
                { name: "Identity & Address Proof", status: "present", how_to_get: "Standard Government IDs" },
                { name: "ILP Application copy / reference ID", status: "present", how_to_get: "From the online ILP portal" },
                { name: "Written application to DC / Home Department", status: "missing", how_to_get: "Draft using the template below" }
            ],
            timeline: [
                { days: 0, event: "File online ILP Application / Border Dispute Complaint", action_prompt: "Draft a complaint regarding border land dispute to DC" },
                { days: 10, event: "Escalate to Deputy Commissioner (DC) Office", action_prompt: "Draft a letter to DC regarding ILP rejection without reason" },
                { days: 30, event: "File Grievance on State Portal", action_prompt: "Draft a grievance to the State Home Department" }
            ]
        },
        ne_customary_tribal: {
            document_checklist: [
                { name: "Tribal Certificate", status: "present", how_to_get: "Issued by District Council / Circle Officer" },
                { name: "Traditional Village Council Receipt/Order", status: "present", how_to_get: "From your Village Headman (Gaonburha / Syiem / Nokma)" },
                { name: "Written Complaint to Autonomous District Council (ADC)", status: "missing", how_to_get: "Draft using the template below" }
            ],
            timeline: [
                { days: 0, event: "Submit Grievance to Gaonburha / Village Council", action_prompt: "Draft a complaint letter to the Village Council Headman" },
                { days: 15, event: "File Formal Dispute in Autonomous District Council (ADC) Court", action_prompt: "Draft a formal application to the District Council Court for land protection" },
                { days: 45, event: "Appeal to District Council Executive Committee", action_prompt: "Draft an appeal to the Executive Committee of the District Council" }
            ]
        }
    };

    let cleanCat = cat;
    if (cat.startsWith('ai_')) {
        cleanCat = 'generic';
    }

    const set = defaults[cleanCat] || {
        document_checklist: [
            { name: "Identity Proof (Aadhaar/Voter ID)", status: "present", how_to_get: "Standard government ID" },
            { name: "Written Application/Grievance Letter", status: "missing", how_to_get: "Draft using the template below" }
        ],
        timeline: [
            { days: 0, event: "Submit Complaint to concern authority", action_prompt: "Draft a formal complaint for my issue" },
            { days: 30, event: "File Grievance on CPGRAMS / State Portal", action_prompt: "Draft a grievance text for escalation" }
        ]
    };

    response.document_checklist = set.document_checklist;
    response.timeline = set.timeline;

    return response;
}

// ============================================
// Chat Interface
// ============================================

function addMessage(content, isUser = false) {
    const messagesContainer = document.getElementById('chat-messages');

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;

    messageDiv.innerHTML = `
        <div class="message-avatar">${isUser ? '👤' : '⚖️'}</div>
        <div class="message-content">
            ${isUser ? `<p>${escapeHTML(content)}</p>` : content}
        </div>
    `;

    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function addTypingIndicator() {
    const messagesContainer = document.getElementById('chat-messages');

    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message';
    typingDiv.id = 'typing-indicator';

    typingDiv.innerHTML = `
        <div class="message-avatar">⚖️</div>
        <div class="message-content">
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        </div>
    `;

    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function removeTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) indicator.remove();
}

async function callGeminiAPI(userText, categoryContext) {
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    
    let url;
    if (geminiApiKey) {
        url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`;
    } else if (!isLocalhost) {
        url = `/.netlify/functions/chat`;
    } else {
        throw new Error("No API key configured for local environment.");
    }

    // Construct the context/prompt
    let contextStr = '';
    if (categoryContext) {
        const data = LEGAL_DATA[categoryContext];
        if (data) {
            contextStr = `The user has selected category: "${data.title}" (Applicable Law: ${data.law}).
Standard legal rights for reference:
${data.rights.map(r => '- ' + r).join('\n')}
Standard escalation ladder:
${data.escalation.map(s => `Level ${s.level}: ${s.title} - ${s.desc}`).join('\n')}
Use this curated legal database information as the ground truth. Customise the letter template and details specifically to the user's situation.`;
        }
    }

    const systemInstruction = `You are Haqqdar AI (हक़दार AI / হকদাৰ AI) — India's AI Rights & Benefits Navigator.
The user has described a problem. Your job is to analyze their problem, identify their legal rights under Indian law, including the Constitution of India (Fundamental Rights, Articles, and Schedules) and specific acts (such as BNS 2023, BNSS 2023, BSA 2023, RTI Act 2005, NFSA 2013, Code on Wages 2019, Forest Rights Act 2006, and regional/state-specific regulations).

You must output a JSON object containing the following keys (and nothing else):
- "title": A short, clear title for the legal issue (in the user's language).
- "law": The relevant sections of Indian laws and specific Articles of the Constitution of India (e.g. Article 21, Article 19, Sixth Schedule, etc.).
- "rights": An array of 3-5 key legal rights the user has in this situation, referencing constitutional protections where applicable (in the user's language).
- "escalation": An array of 3-4 steps (each has "level" as an integer starting at 1, "title" in the user's language, and "desc" in the user's language detailing what they should do and whom they should contact. If there is a verified website link, add it. If they can contact a higher authority, mention it).
- "portals": A key-value object of verified official government portals, websites or helplines related to the issue (e.g., {"National Portal": "https://...", "Helpline": "112"}).
- "document_template": A complete, ready-to-fill written complaint/application template in plain text (in the user's language) with placeholders like [FULL NAME], [DATE], [PLACE], [DETAILS OF INCIDENT], etc., so the user can copy/paste or download it.
- "document_checklist": An array of required documents that the user needs for this category, each item being an object with:
  - "name": Name of the document (in the user's language, e.g. "Identity Proof", "Ration Card copy", "Circle Office application receipt").
  - "status": Expected standard status, either "present" (for basic documents like ID) or "missing" (for case-specific applications/receipts/denial letters).
  - "how_to_get": Practical guidance on how/where to get this document from trusted sources (in the user's language).
- "timeline": An array of milestone steps, each containing:
  - "days": Number of offset days from today (e.g., 0, 15, 30, 90) representing the deadline/milestone.
  - "event": Name of the milestone (in the user's language, e.g., "File Complaint", "First Appeal", "Second Appeal", "Magistrate Complaint").
  - "action_prompt": A recommended prompt/message the user can use or ask the AI to generate for this step (in the user's language, e.g., "Draft a First Appeal for my crop compensation delay under RTI").

Rules & Requirements:
1. Always respond in the language the user is chatting in (English, Hindi, Assamese, or Hinglish). If the user asks in Hindi, the fields "title", "rights", "escalation", "document_template", "document_checklist.name", "document_checklist.how_to_get", "timeline.event", and "timeline.action_prompt" must be in Hindi.
2. Ground your response in 100% real, trusted, and verified Indian laws, regulations, and the Constitution of India (e.g. Article 14 for Equality, Article 19 for Freedoms, Article 21 for Life and Livelihood, Article 21A for Education, Article 226/32 for Writs, and the Sixth Schedule for tribal areas). Do not hallucinate or make up non-existent laws.
3. For Northeast-specific queries (Assam, Nagaland, Manipur, Meghalaya, Mizoram, Arunachal Pradesh, Tripura & Sikkim), you must include specific local acts (such as BEFR 1873, Assam Land Regulation 1886) and verify that links/portals provided (like Dharitree, RTPS portals) are real and active.
4. Keep the tone helpful, professional, and empowering.

Current Language Selected in UI: ${getLanguageLabel(currentLang)}.

${contextStr}

Analyze the user's query: "${userText}"`;

    const requestBody = {
        contents: [
            {
                parts: [
                    {
                        text: systemInstruction
                    }
                ]
            }
        ],
        generationConfig: {
            responseMimeType: "application/json"
        }
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
        throw new Error(`Gemini API error: ${response.status} ${response.statusText}`);
    }

    const resJson = await response.json();
    const responseText = resJson.candidates[0].content.parts[0].text;
    
    // Parse response text as JSON
    return JSON.parse(responseText);
}

async function handleSend() {
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (!text) return;

    // Add user message
    addMessage(text, true);
    input.value = '';
    input.style.height = 'auto';

    // Show typing indicator
    addTypingIndicator();

    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const canUseAI = geminiApiKey || !isLocalhost;

    // If Gemini API Key is configured or we are in production, attempt AI query
    if (canUseAI) {
        try {
            const aiResponse = await callGeminiAPI(text, selectedCategory || classifyIssue(text));
            removeTypingIndicator();
            
            // Format dynamic response
            const dynamicCategory = 'ai_' + Date.now();
            LEGAL_DATA[dynamicCategory] = {
                title: aiResponse.title,
                law: aiResponse.law,
                rights: aiResponse.rights,
                escalation: aiResponse.escalation,
                portals: aiResponse.portals,
                document_template: aiResponse.document_template,
                document_checklist: aiResponse.document_checklist || [],
                timeline: aiResponse.timeline || []
            };

            const enrichedResponse = ensureChecklistAndTimeline({
                category: dynamicCategory,
                data: LEGAL_DATA[dynamicCategory],
                title: aiResponse.title,
                rights: aiResponse.rights,
                template: aiResponse.document_template,
                document_checklist: aiResponse.document_checklist,
                timeline: aiResponse.timeline
            });

            const responseHTML = createResponseHTML(enrichedResponse);

            addMessage(responseHTML, false);
            return;
        } catch (error) {
            console.error("Gemini AI Query Failed:", error);
            // Fall back to rule-based matching if AI fails
        }
    }

    // Rule-based Fallback (Run with slight delay)
    setTimeout(() => {
        removeTypingIndicator();

        // Classify the issue
        const category = classifyIssue(text);

        if (category) {
            const response = generateResponse(category, text);
            if (response) {
                const enrichedResponse = ensureChecklistAndTimeline(response);
                let responseHTML = createResponseHTML(enrichedResponse);
                if (canUseAI) {
                    responseHTML += `<div style="font-size:0.75rem; color:var(--text-muted); margin-top:8px;">⚠️ Note: AI query failed (reverted to rule-based fallback). Please check your API key or connectivity.</div>`;
                }
                addMessage(responseHTML, false);
            }
        } else {
            // Couldn't classify — ask for more info
            const isHindi = currentLang === 'hi';
            let fallbackHTML = `<p>${isHindi
                ? 'मैं आपकी समस्या समझने की कोशिश कर रहा हूँ। कृपया अधिक विस्तार से बताएं, या ऊपर किसी श्रेणी पर क्लिक करें:'
                : "I'm trying to understand your issue. Could you provide more details, or select a category above:"
            }</p>
            <div class="example-queries" style="margin-top:12px;">
                <button class="example-btn" data-query="Police refused to file my FIR">🚔 FIR Refused</button>
                <button class="example-btn" data-query="I want to file RTI">📋 File RTI</button>
                <button class="example-btn" data-query="My salary has not been paid for 3 months">💰 Wages Unpaid</button>
                <button class="example-btn" data-query="My PM Kisan application was rejected">🏛️ Scheme Rejected</button>
                <button class="example-btn" data-query="Ration shop refused to give me ration">🍚 Ration Denied</button>
                <button class="example-btn" data-query="AFSPA related issue in Northeast">🏔️ Northeast</button>
            </div>`;
            if (canUseAI) {
                fallbackHTML += `<div style="font-size:0.75rem; color:var(--text-muted); margin-top:8px;">⚠️ Note: AI query failed. Please check your API key or connectivity.</div>`;
            }
            addMessage(fallbackHTML, false);

            // Re-attach example button listeners
            setTimeout(attachExampleListeners, 100);
        }
    }, 500);
}

// ============================================
// Language Switching
// ============================================

const LANGUAGES = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
    { code: 'as', label: 'Assamese', native: 'অসমীয়া' },
    { code: 'bn', label: 'Bengali', native: 'বাংলা' },
    { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
    { code: 'te', label: 'Telugu', native: 'తెలుగు' },
    { code: 'mr', label: 'Marathi', native: 'मराठी' },
    { code: 'gu', label: 'Gujarati', native: 'ગુજરાતી' },
    { code: 'pa', label: 'Punjabi', native: 'ਪੰਜਾਬী' },
    { code: 'ml', label: 'Malayalam', native: 'മലയാളം' },
    { code: 'or', label: 'Odia', native: 'ଓଡ଼ିଆ' },
    { code: 'kn', label: 'Kannada', native: 'ಕನ್ನಡ' },
    { code: 'ur', label: 'Urdu', native: 'اردو' }
];

function getLanguageLabel(code) {
    const lang = LANGUAGES.find(l => l.code === code);
    return lang ? lang.label : 'English';
}


// ============================================
// UI Helper Functions (Quotes & Voice Mic)
// ============================================

let currentQuoteIndex = 0;
let quoteTimer;

function startQuoteRotation() {
    const slides = document.querySelectorAll('.quote-slide');
    const dots = document.querySelectorAll('.slider-dot');
    if (slides.length === 0) return;

    function showQuote(index) {
        slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
        dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
        currentQuoteIndex = index;
    }

    // Click handler for dots
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            clearInterval(quoteTimer);
            showQuote(idx);
        });
    });

    // Auto rotate every 6 seconds
    quoteTimer = setInterval(() => {
        let nextIndex = (currentQuoteIndex + 1) % slides.length;
        showQuote(nextIndex);
    }, 6000);
}

let isRecording = false;
function setupVoiceMic() {
    const micBtn = document.getElementById('mic-btn');
    const statusBar = document.getElementById('voice-status-bar');
    const statusText = document.getElementById('voice-status-text');
    const chatInput = document.getElementById('chat-input');

    if (!micBtn) return;

    micBtn.addEventListener('click', () => {
        if (isRecording) {
            isRecording = false;
            micBtn.classList.remove('listening');
            if (statusBar) statusBar.style.display = 'none';
        } else {
            isRecording = true;
            micBtn.classList.add('listening');
            if (statusBar) {
                statusBar.style.display = 'flex';
                statusText.textContent = "Listening... Speak naturally in your language";
            }

            // Simulated voice transcription after 3 seconds
            setTimeout(() => {
                if (!isRecording) return;

                const voiceSamples = [
                    "Police station mein FIR nahi le rahe, 2 baar gaya",
                    "Company has not paid my salary for 3 months, how to get wages",
                    "Ration card active hone par bhi ration dealer ration dene se mana kar raha hai",
                    "I applied for scholarship but it got rejected without any reason",
                    "Tea garden owner minimum wages and medical benefits are not giving to worker",
                    "Flood water damaged all my crops in Assam, DC office pending relief"
                ];

                const randomSample = voiceSamples[Math.floor(Math.random() * voiceSamples.length)];
                
                if (chatInput) {
                    chatInput.value = randomSample;
                    autoResize(chatInput);
                }

                isRecording = false;
                micBtn.classList.remove('listening');
                if (statusBar) statusBar.style.display = 'none';

                // Send automatically after writing
                setTimeout(() => {
                    handleSend();
                }, 500);

            }, 3000);
        }
    });
}

function renderLanguageDropdown() {
    const listEl = document.getElementById('lang-options-list');
    if (!listEl) return;
    listEl.innerHTML = '';
    LANGUAGES.forEach(lang => {
        const btn = document.createElement('button');
        btn.className = `lang-option-item ${lang.code === currentLang ? 'active' : ''}`;
        btn.dataset.lang = lang.code;
        btn.dataset.search = `${lang.label} ${lang.native}`;
        btn.innerHTML = `
            <span>${lang.label}</span>
            <span class="lang-native-label">${lang.native}</span>
        `;
        btn.addEventListener('click', () => {
            switchLanguage(lang.code);
        });
        listEl.appendChild(btn);
    });
}

function switchLanguage(lang) {
    currentLang = lang;

    // Update dropdown option active states
    document.querySelectorAll('.lang-option-item').forEach(item => {
        item.classList.toggle('active', item.dataset.lang === lang);
    });

    // Update button label
    const labelEl = document.getElementById('current-lang-label');
    if (labelEl) {
        labelEl.textContent = getLanguageLabel(lang);
    }

    // Hide dropdown
    const dropdown = document.getElementById('lang-dropdown');
    if (dropdown) dropdown.classList.remove('active');

    // Update all translatable elements
    const translations = TRANSLATIONS[lang] || TRANSLATIONS['en'];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key]) {
            el.innerHTML = translations[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[key]) {
            el.placeholder = translations[key];
        }
    });
}

// ============================================
// Category Selection
// ============================================

function selectCategory(category) {
    selectedCategory = category;

    // Update card states
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.toggle('selected', card.dataset.category === category);
    });

    // Show badge
    const badge = document.getElementById('selected-category-badge');
    const badgeText = document.getElementById('selected-category-text');
    const data = LEGAL_DATA[category];

    if (data) {
        const isHindi = currentLang === 'hi';
        badgeText.textContent = isHindi ? (data.title_hi || data.title) : data.title;
        badge.style.display = 'inline-flex';
    }

    // Scroll to chat
    document.getElementById('chat').scrollIntoView({ behavior: 'smooth' });
}

function clearCategory() {
    selectedCategory = null;
    document.querySelectorAll('.category-card').forEach(card => card.classList.remove('selected'));
    document.getElementById('selected-category-badge').style.display = 'none';
}

// ============================================
// Example Query Buttons
// ============================================

function attachExampleListeners() {
    document.querySelectorAll('.example-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const query = btn.dataset.query;
            document.getElementById('chat-input').value = query;
            handleSend();
        });
    });
}

// ============================================
// Auto-resize Textarea
// ============================================

function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
}

// ============================================
// Navbar Scroll Effect
// ============================================

function handleScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// ============================================
// Intersection Observer for Animations
// ============================================

function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.category-card, .ne-card, .helpline-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

function handleNECardClick(category) {
    selectCategory(category);

    let query = '';
    const isHindi = currentLang === 'hi';
    const isAssamese = currentLang === 'as';
    
    if (category === 'ne_land_flood') {
        query = isHindi 
            ? "असम बाढ़ में मेरी फसल का नुकसान हुआ और मुझे मुआवजा नहीं मिला। मैं कैसे शिकायत या आवेदन करूँ?" 
            : isAssamese
            ? "অসমৰ বানপানীত মোৰ শস্যৰ ক্ষতি হ’ল কিন্তু মই ক্ষতিপূৰণ পোৱা নাই। মই কেনেকৈ আবেদন বা অভিযোগ কৰিম?"
            : "My crop got damaged in the Assam floods and I haven't received compensation. How can I apply/complain?";
    } else if (category === 'ne_scholarship_tea') {
        query = isHindi 
            ? "मैं चाय बागान का मजदूर हूँ और मुझे वेतन की समस्या है, या मेरी छात्रवृत्ति में देरी हुई है। मुझे क्या करना चाहिए?" 
            : isAssamese
            ? "মই এজন চাহ বাগিচাৰ শ্ৰমিক, মোৰ মজুৰি আৰু সা-সুবিধাৰ সমস্যা হৈছে, অথবা মোৰ জলপানিৰ পলম হৈছে। মই কি কৰিব পাৰোঁ?"
            : "I'm a tea garden worker facing wage issues and lack of facilities, or my student scholarship is delayed. What can I do?";
    } else if (category === 'ne_ilp_border') {
        query = isHindi 
            ? "मेरा इनर लाइन परमिट (ILP) आवेदन 2 सप्ताह से लंबित है, या मेरा सीमा भूमि विवाद है। इसकी शिकायत कहाँ करें?" 
            : isAssamese
            ? "মোৰ ইনাৰ লাইন পাৰ্মিট (ILP) আবেদনখন ২ সপ্তাহ ধৰি ওলমি আছে, অথবা মোৰ সীমাৰ মাটিৰ বিবাদ হৈছে। কেনেকৈ অভিযোগ কৰিম?"
            : "My Inner Line Permit (ILP) application is pending for 2 weeks, or I have a border land dispute. How to escalate?";
    } else if (category === 'ne_customary_tribal') {
        query = isHindi 
            ? "गैर-आदिवासियों ने मेरी जनजातीय भूमि पर अवैध रूप से कब्जा कर लिया है, या मेरा रूढ़िवादी कानून भूमि विवाद है। क्या कानूनी कार्रवाई करें?" 
            : isAssamese
            ? "অনা-জনগোষ্ঠীয়ে মোৰ জনজাতীয় ভূমিত অবৈধ দখল কৰিছে, অথবা মোৰ প্ৰচলিত আইনৰ মাটিৰ বিবাদ হৈছে। কি আইনী ব্যৱস্থা ল’ব পাৰি?"
            : "Non-tribals have illegally occupied my tribal land, or I have a customary law land dispute. What legal actions can I take?";
    }

    const chatInput = document.getElementById('chat-input');
    if (chatInput && query) {
        chatInput.value = query;
        autoResize(chatInput);
        
        document.getElementById('chat').scrollIntoView({ behavior: 'smooth' });
        
        setTimeout(() => {
            handleSend();
        }, 800);
    }
}

// ============================================
// AI API Key & Modal Management
// ============================================

function updateAIStatusBadge() {
    const badge = document.getElementById('ai-status-badge');
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');
    const keyInput = document.getElementById('api-key-input');
    
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

    if (geminiApiKey) {
        if (badge) {
            badge.textContent = 'AI Active';
            badge.classList.add('active');
        }
        if (statusDot) statusDot.className = 'status-dot green';
        if (statusText) statusText.textContent = 'Custom API Key configured. Haqqdar is ready with direct AI support.';
        if (keyInput) keyInput.value = geminiApiKey;
    } else if (!isLocalhost) {
        if (badge) {
            badge.textContent = 'AI Active';
            badge.classList.add('active');
        }
        if (statusDot) statusDot.className = 'status-dot green';
        if (statusText) statusText.textContent = 'Haqqdar is running with production serverless AI support.';
        if (keyInput) keyInput.value = '';
    } else {
        if (badge) {
            badge.textContent = 'AI Off';
            badge.classList.remove('active');
        }
        if (statusDot) statusDot.className = 'status-dot red';
        if (statusText) statusText.textContent = 'API Key is not set. Using rule-based fallback on localhost.';
        if (keyInput) keyInput.value = '';
    }
}

function showSettingsModal() {
    const modal = document.getElementById('settings-modal');
    if (modal) {
        modal.style.display = 'flex';
        updateAIStatusBadge();
    }
}

function hideSettingsModal() {
    const modal = document.getElementById('settings-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function saveSettings() {
    const keyInput = document.getElementById('api-key-input');
    if (keyInput) {
        const key = keyInput.value.trim();
        if (key && key !== 'null' && key !== 'undefined') {
            geminiApiKey = key;
            localStorage.setItem('gemini_api_key', key);
        } else {
            geminiApiKey = '';
            localStorage.removeItem('gemini_api_key');
        }
        updateAIStatusBadge();
        hideSettingsModal();
    }
}

// ============================================
// Initialize
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Render Case Dashboard (load stored cases)
    renderCaseDashboard();

    // Render 13 Languages dropdown
    renderLanguageDropdown();

    // Language dropdown toggle
    const langMenuBtn = document.getElementById('lang-menu-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    
    if (langMenuBtn && langDropdown) {
        langMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
        });
    }

    // Close dropdown on click outside
    document.addEventListener('click', (e) => {
        if (langDropdown && !langDropdown.contains(e.target) && e.target !== langMenuBtn) {
            langDropdown.classList.remove('active');
        }
    });

    // Language search filtering
    const langSearchInput = document.getElementById('lang-search-input');
    if (langSearchInput) {
        langSearchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            document.querySelectorAll('.lang-option-item').forEach(item => {
                const label = item.dataset.search.toLowerCase();
                item.style.display = label.includes(query) ? 'flex' : 'none';
            });
        });
    }

    // Initialize Quotes rotator & voice mic
    startQuoteRotation();
    setupVoiceMic();

    // Scroll handler
    window.addEventListener('scroll', handleScroll);

    // Category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => selectCategory(card.dataset.category));
    });

    // Northeast cards click
    document.querySelectorAll('.ne-card.clickable-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.neCategory;
            if (category) {
                handleNECardClick(category);
            }
        });
    });

    // Clear category
    const clearCategoryBtn = document.getElementById('clear-category');
    if (clearCategoryBtn) {
        clearCategoryBtn.addEventListener('click', clearCategory);
    }

    // Chat input
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('input', () => autoResize(chatInput));
        chatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
            }
        });
    }

    // Send button
    const sendBtn = document.getElementById('send-btn');
    if (sendBtn) {
        sendBtn.addEventListener('click', handleSend);
    }

    // Start button
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const chatSection = document.getElementById('chat');
            if (chatSection) {
                chatSection.scrollIntoView({ behavior: 'smooth' });
            }
            if (chatInput) {
                setTimeout(() => chatInput.focus(), 500);
            }
        });
    }

    // Example queries
    attachExampleListeners();

    // Scroll animations
    setupScrollAnimations();

    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            if (navLinks) {
                navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            }
        });
    }
});
