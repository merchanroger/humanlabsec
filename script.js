// Traducciones conocidas de los nombres de exámenes para el idioma inglés.
const EXAM_EN= {
    "Ácido úrico": "Uric acid",
    "Albúmina": "Albumin",
    "Amilasa": "Amylase",
    "Aglutinaciones febriles": "Febrile agglutinations",
    "ASTO - Antiestreptolisina": "ASO - Antistreptolysin O",
    "Alfa feto proteínas - AFP": "Alpha-fetoprotein - AFP",
    "Ácido fólico": "Folic acid",
    "ACTIN F. IgA / ACTIN": "ACTIN F. IgA / ACTIN",
    "ACTIN IgG": "ACTIN IgG",
    "ANCA C-P": "ANCA C-P",
    "ASCA IgG": "ASCA IgG",
    "ASCA IgA": "ASCA IgA",
    "Antitrombina": "Antithrombin",
    "Apolipoproteína A1": "Apolipoprotein A1",
    "Apolipoproteína B": "Apolipoprotein B",
    "BUN (incluye urea)": "BUN (includes urea)",
    "Creatinina": "Creatinine",
    "Colesterol total": "Total cholesterol",
    "Colesterol HDL": "HDL cholesterol",
    "Colesterol LDL": "LDL cholesterol",
    "Coprocultivo (heces)": "Stool culture (feces)",
    "Calcio": "Calcium",
    "CA 125 (ovario, útero)": "CA 125 (ovary, uterus)",
    "Ceruloplasmina": "Ceruloplasmin",
    "Calprotectina": "Calprotectin",
    "Calcio iónico": "Ionized calcium",
    "Cloro": "Chloride",
    "Cardiolipina IgG": "Cardiolipin IgG",
    "Cardiolipina IgM": "Cardiolipin IgM",
    "CK MB-CPK": "CK-MB / CPK",
    "Creatinina (orina)": "Creatinine (urine)",
    "Colinesterasa": "Cholinesterase",
    "Interleukina 6": "Interleukin 6",
    "Insulina plasmática en ayunas": "Fasting plasma insulin",
    "IgG por nefelometría": "IgG by nephelometry",
    "IgM por nefelometría": "IgM by nephelometry",
    "IgA por nefelometría": "IgA by nephelometry",
    "IgE total": "Total IgE",
    "Influenza A/B/H1N1 por PCR GeneXpert": "Influenza A/B/H1N1 by GeneXpert PCR",
    "Influenza A/B antígeno": "Influenza A/B antigen",
    "Insulina 2h post prandial": "Insulin 2h postprandial",
    "KOH": "KOH",
    "Kappa (orina)": "Kappa (urine)",
    "Kappa 24h": "Kappa 24h",
    "Lipasa": "Lipase",
    "LDH (deshidrogenasa láctica)": "LDH (lactate dehydrogenase)",
    "Linfocitos B (CD19-CD20)": "Lymphocytes B (CD19-CD20)",
    "Linfocitos NK (CD16-CD56)": "Lymphocytes NK (CD16-CD56)",
    "Lipoproteína A": "Lipoprotein (a)",
    "Litio": "Lithium",
    "Lactoferrina": "Lactoferrin",
    "Norovirus": "Norovirus",
    "Osmolalidad": "Osmolality",
    "Osteocalcina": "Osteocalcin",
    "Oxalato urinario": "Urinary oxalate",
    "Opiáceos cuantitativa": "Opiates, quantitative",
    "Plaquetas": "Platelets",
    "Prueba de Coombs directa": "Direct Coombs test",
    "Prueba de Coombs indirecta": "Indirect Coombs test",
    "Parasitoscópico concentración (heces)": "Stool parasitology, concentration method",
    "PSA total": "Total PSA",
    "PSA libre": "Free PSA",
    "Potasio": "Potassium",
    "Pro-BNP": "Pro-BNP",
    "Procalcitonina": "Procalcitonin",
    "Prealbúmina": "Prealbumin",
    "Prolactina": "Prolactin",
    "Progesterona": "Progesterone",
    "Rotavirus": "Rotavirus",
    "R. de Widal y Weill Felix": "Widal and Weil-Felix reactions",
    "Factor reumatoideo por nefelometría": "Rheumatoid factor by nephelometry",
    "RPR": "RPR",
    "Rubeola IgG": "Rubella IgG",
    "Rubeola IgM": "Rubella IgM",
    "Sangre oculta - HB humana": "Occult blood - human Hb",
    "Sodio": "Sodium",
    "Sodio (orina)": "Sodium (urine)",
    "Strept-A": "Strep A",
    "Salmonella antígeno": "Salmonella antigen",
    "Urea": "Urea",
    "Urocultivo (orina)": "Urine culture",
    "Urea 24h": "Urea 24h",
    "V.D.R.L.": "V.D.R.L.",
    "Vitamina B12": "Vitamin B12",
    "VLDL colesterol": "VLDL cholesterol",
    "V.D.R.L. cuantitativo": "V.D.R.L. quantitative",
    "Varicela zóster IgG": "Varicella zoster IgG",
    "Varicela zóster IgM": "Varicella zoster IgM",
    "Vitamina D total": "Total vitamin D",
    "Vitamina E": "Vitamin E",
    "Virus sincitial respiratorio": "Respiratory syncytial virus",
    "Ziehl Neelsen": "Ziehl-Neelsen",
    "Zinc": "Zinc",
    "Zika virus IgG": "Zika virus IgG",
    "Zika virus IgM": "Zika virus IgM"
};
// CATÁLOGO DEL COTIZADOR (Excel recibido, 22/10/2026).
// Cada fila conserva el nombre y el precio PARTICULAR del tarifario original.
// El orden coincide con la hoja Examenes; los IDs de laboratorio se documentan aparte.
// La misma lista alimenta búsqueda, selección, suma de importes y PDF.
const exams=
[
  [
    "HEMOGRAMA",
    "$9,90"
  ],
  [
    "PLAQUETAS",
    "$6,00"
  ],
  [
    "TIEMPO DE PROTROMBINA (TP)",
    "$5,20"
  ],
  [
    "GRUPO SANGUINEO Y RH",
    "$7,00"
  ],
  [
    "TIEMPO PARCIAL DE TROMBOPLASTINA-TTP",
    "$4,00"
  ],
  [
    "I. RETICULOCITARIO",
    "$4,80"
  ],
  [
    "PRUEBA DE COOMBS DIRECTA",
    "$9,00"
  ],
  [
    "PRUEBA DE COOMBS INDIRECTA",
    "$9,00"
  ],
  [
    "TIEMPO DE COAGULACION",
    "$3,15"
  ],
  [
    "T.SANGRIA",
    "$2,60"
  ],
  [
    "ERITROSEDIMENTACION - VSG",
    "$3,00"
  ],
  [
    "GENOTIPO RH",
    "$21,00"
  ],
  [
    "HEMOGLOBINA",
    "$3,60"
  ],
  [
    "TRANSFERRINA SERICA",
    "$7,97"
  ],
  [
    "FERRITINA.",
    "$12,80"
  ],
  [
    "ACIDO FOLICO",
    "$13,00"
  ],
  [
    "VITAMINA B 12 (QL)",
    "$13,00"
  ],
  [
    "HEMATOCRITO",
    "$3,78"
  ],
  [
    "OBTENCION DE PLASMA",
    "$5,25"
  ],
  [
    "FERRITINA",
    "$12,80"
  ],
  [
    "GLUCOSA EN AYUNAS",
    "$3,30"
  ],
  [
    "GPT",
    "$3,30"
  ],
  [
    "GLUCOSA POST PRANDIAL - 2 H",
    "$3,30"
  ],
  [
    "GOT",
    "$3,19"
  ],
  [
    "UREA",
    "$3,30"
  ],
  [
    "FOSFAT. ALCALINA",
    "$3,30"
  ],
  [
    "CREATININA",
    "$3,30"
  ],
  [
    "FOSFAT. ACIDA TOTAL",
    "$7,00"
  ],
  [
    "BILIRRUBINA TOTAL",
    "$3,19"
  ],
  [
    "COLESTEROL TOTAL",
    "$3,30"
  ],
  [
    "BILIRRUBINA DIRECTA",
    "$3,19"
  ],
  [
    "COLESTEROL HDL",
    "$5,50"
  ],
  [
    "ACIDO URICO",
    "$3,30"
  ],
  [
    "COLESTEROL LDL",
    "$5,60"
  ],
  [
    "PROTEINAS TOTALES",
    "$3,38"
  ],
  [
    "TRIGLICERIDOS (EN AYUNAS)",
    "$3,30"
  ],
  [
    "ALBUMINA",
    "$3,30"
  ],
  [
    "HIERRO SERICO",
    "$6,50"
  ],
  [
    "AMILASA",
    "$4,00"
  ],
  [
    "LIPASA",
    "$4,40"
  ],
  [
    "ELECTROLITOS CA/MG",
    "$8,69"
  ],
  [
    "GAMMA GT",
    "$4,00"
  ],
  [
    "CALCIO",
    "$4,00"
  ],
  [
    "MAGNESIO",
    "$5,00"
  ],
  [
    "SODIO",
    "$4,00"
  ],
  [
    "POTASIO",
    "$4,00"
  ],
  [
    "VLDL COLESTEROL",
    "$6,30"
  ],
  [
    "BUN",
    "$3,00"
  ],
  [
    "BUN (INCLUYE UREA)",
    "$6,09"
  ],
  [
    "PRU.EMBARAZO",
    "$6,18"
  ],
  [
    "ELEMENTAL: F Q S",
    "$5,30"
  ],
  [
    "MICROALBUMINURIA",
    "$23,20"
  ],
  [
    "ACIDO URICO EN ORINA OCASIONAL",
    "$3,99"
  ],
  [
    "CALCIO EN ORINA OCASIONAL",
    "$3,99"
  ],
  [
    "CLORO EN ORINA OCASIONAL",
    "$4,00"
  ],
  [
    "PROTEINAS EN ORINA OCASIONAL",
    "$3,99"
  ],
  [
    "PROTEÍNA DE BENCEN JONES (ORINA)",
    "$6,00"
  ],
  [
    "TAMIZAJE DE 10 DROGAS EN SUERO",
    "$34,00"
  ],
  [
    "TAMIZAJE DE 12 DROGAS EN SUERO",
    "$39,00"
  ],
  [
    "PARASITOSCOPICO CONCENTRACION (HECES)",
    "$6,00"
  ],
  [
    "PARASITOSCOPICO CONCENTRACION SERIADO",
    "$5,80"
  ],
  [
    "SANGRE OCULTA - HB HUMANA",
    "$7,10"
  ],
  [
    "CITOLOGIA DE MOCO FECAL-POLIMORFOS",
    "$9,00"
  ],
  [
    "ROTAVIRUS",
    "$13,00"
  ],
  [
    "HELICOBACTER PYLORI ANTIGENO",
    "$25,12"
  ],
  [
    "CALPROTECTINA",
    "$36,40"
  ],
  [
    "PH EN HECES",
    "$4,20"
  ],
  [
    "V.D.R.L.",
    "$5,50"
  ],
  [
    "AGLUTIN.FEBRILES",
    "$7,00"
  ],
  [
    "ASTO - ANTIESTREPTOLISINA",
    "$8,80"
  ],
  [
    "R. DE WIDALL Y WEILL FELIX",
    "$7,00"
  ],
  [
    "INTERLEUKINA 6",
    "$34,00"
  ],
  [
    "CHLAMYDIA TRACHOMATIS- IGG",
    "$17,60"
  ],
  [
    "CHLAMYDIA TRACHOMATIS- IGM",
    "$16,00"
  ],
  [
    "HERPES SIMPLEX VIRUS 2 IGG",
    "$10,84"
  ],
  [
    "TINCION DE GRAM",
    "$4,25"
  ],
  [
    "FRESCO",
    "$5,80"
  ],
  [
    "ZIEHL NEELSEN",
    "$7,20"
  ],
  [
    "HONGOS",
    "$40,57"
  ],
  [
    "COPROCULTIVO (HECES)",
    "$22,00"
  ],
  [
    "UROCULTIVO (ORINA)",
    "$18,00"
  ],
  [
    "CULTIVO SECRECION",
    "$23,18"
  ],
  [
    "ELECTROLITOS NA-K-CL",
    "$11,11"
  ],
  [
    "TRANSGLUTAMINASA ANTIC IGG",
    "$21,00"
  ],
  [
    "PSA TOTAL",
    "$16,93"
  ],
  [
    "PSA LIBRE",
    "$25,30"
  ],
  [
    "T4 TOTAL",
    "$9,02"
  ],
  [
    "T3 TOTAL",
    "$9,02"
  ],
  [
    "ALFA FETO PROTEINAS-AFP",
    "$13,28"
  ],
  [
    "ANTIG. CARCINOEMBRIONARIO CEA .",
    "$12,10"
  ],
  [
    "CA 72-4 T.DIGESTIVO",
    "$24,00"
  ],
  [
    "HEMOGLOBINA GLICOSILADA",
    "$15,40"
  ],
  [
    "TEST ALIENTO - LACTOSA",
    "$100,00"
  ],
  [
    "TEST ALIENTO - SACAROSA",
    "$100,00"
  ],
  [
    "TEST ALIENTO - HELICOBACTER PILORY",
    "$100,00"
  ],
  [
    "TEST ALIENTO - FRUCTOSA",
    "$100,00"
  ],
  [
    "TEST ALIENTO - SORBITOL",
    "$100,00"
  ],
  [
    "TEST ALIENTO - GLUCOSA",
    "$100,00"
  ],
  [
    "TEST ALIENTO - ALMIDON",
    "$100,00"
  ],
  [
    "ALERGIAS A ALIM. POR IGG - 59",
    "$304,50"
  ],
  [
    "ALERGIAS A ALIM POR IGG - 220",
    "$577,50"
  ],
  [
    "LDH (DESHIDROGENASA LACTICA)",
    "$4,40"
  ],
  [
    "BETA 2 MICROGLOBULINA",
    "$16,00"
  ],
  [
    "ELECTROFORESIS HEMOGLOBINA",
    "$38,50"
  ],
  [
    "FOSFATASA ALCALINA LEUCOCITARIA",
    "$51,78"
  ],
  [
    "CA 125 (OVARIO, UTERO)",
    "$15,40"
  ],
  [
    "TSH HORMONA TIROESTIMULANTE",
    "$9,02"
  ],
  [
    "CERULOPLASMINA",
    "$35,07"
  ],
  [
    "TRANSGLUTAMINASA ANTIC IGA",
    "$18,00"
  ],
  [
    "ANCA C - P",
    "$40,00"
  ],
  [
    "CÉLULAS PARIETALES, ANTIC",
    "$32,00"
  ],
  [
    "ALFA FNT (F. NECROSIS TUMORAL)",
    "$38,00"
  ],
  [
    "PRO-BNP (PEPTIDO NATRIUREICO )",
    "$65,00"
  ],
  [
    "CISTATINA C+CR(T F G)",
    "$26,00"
  ],
  [
    "CALCIO IONICO",
    "$8,00"
  ],
  [
    "HOMA IR POST CARGA 75 GR",
    "$16,50"
  ],
  [
    "CLORO",
    "$3,38"
  ],
  [
    "CHLOSTRIDIUM DIFFICILE, TOXINA A",
    "$20,00"
  ],
  [
    "INSULINA PLASMÁTICA EN AYUNAS",
    "$14,30"
  ],
  [
    "BCR\ABL CUANTITATIVO - GENEXPERT",
    "$240,00"
  ],
  [
    "FRAGILIDAD OSMÓTICA HITIES",
    "$18,00"
  ],
  [
    "TINCION DE PERLS",
    "$28,98"
  ],
  [
    "ENF. MIN. RESIDUAL (LEUCEMIA)",
    "$173,88"
  ],
  [
    "LINFOCITOS B (CD19 - CD20)",
    "$80,00"
  ],
  [
    "LINFOCITOS NK (CD16 - CD56)",
    "$48,30"
  ],
  [
    "HEMOGLOBINURIA PAROXISTICA NOCT. POR CDEF",
    "$101,43"
  ],
  [
    "FIBRINOGENO",
    "$6,00"
  ],
  [
    "FACTOR II  DE LA COAGULACION",
    "$57,96"
  ],
  [
    "FACTOR V  DE LA COAGULACION",
    "$42,50"
  ],
  [
    "FACTOR VII DE LA COAGULACION",
    "$57,96"
  ],
  [
    "FACTOR VIII DE LA COAGULACION",
    "$38,64"
  ],
  [
    "FACTOR IX DE LA COAGULACION",
    "$38,64"
  ],
  [
    "FACTOR X DE LA COAGULACION",
    "$40,00"
  ],
  [
    "FACTOR XI DE LA COAGULACION",
    "$75,05"
  ],
  [
    "FACTOR XII DE LA COAGULACION",
    "$57,96"
  ],
  [
    "FACTOR XIII DE LA COAGULACION",
    "$13,00"
  ],
  [
    "ANNEXINA, ANTICUERPOS IGG",
    "$43,00"
  ],
  [
    "ANNEXINA, ANTICUERPOS IGM",
    "$43,00"
  ],
  [
    "ANTICOAGULANTE LUPICO",
    "$44,95"
  ],
  [
    "ANTITROMBINA",
    "$39,61"
  ],
  [
    "DIMERO D",
    "$32,00"
  ],
  [
    "HOMOCISTEINA",
    "$35,00"
  ],
  [
    "MUTACIONES F (II) Y F (V) DE LEYDEN - PCR",
    "$197,93"
  ],
  [
    "PROTEINA C",
    "$77,28"
  ],
  [
    "PROTEINA S",
    "$77,28"
  ],
  [
    "PROTROMBINA, ANTICUERPOS IGG",
    "$21,80"
  ],
  [
    "PROTROMBINA, ANTICUERPOS  IGM",
    "$21,80"
  ],
  [
    "B2 GLICOPROTEÍNAS, AC  IGG",
    "$24,44"
  ],
  [
    "B2 GLICOPROTEÍNAS, AC  IGM",
    "$24,44"
  ],
  [
    "B2 GLICOPROTEÍNAS, AC  IGA",
    "$23,00"
  ],
  [
    "CARDIOLIPINA IGG AC",
    "$24,44"
  ],
  [
    "CARDIOLIPINA IGM AC",
    "$24,44"
  ],
  [
    "CARDIOLIPINA IGA",
    "$24,00"
  ],
  [
    "CK MB-CPK",
    "$13,52"
  ],
  [
    "MIOGLOBINA",
    "$41,00"
  ],
  [
    "TROPONINA I ALTAMENTE SENSIBLE",
    "$24,00"
  ],
  [
    "TROPONINA T DE ALTA SENSIBILIDAD",
    "$24,00"
  ],
  [
    "BETA HCG",
    "$12,27"
  ],
  [
    "CALCULO URINARIO",
    "$22,00"
  ],
  [
    "CREATININA (ORINA)",
    "$6,09"
  ],
  [
    "OSMOLALIDAD",
    "$14,49"
  ],
  [
    "KAPPA (ORINA)",
    "$27,63"
  ],
  [
    "CADENAS LIGERAS LAMBDA EN ORINA",
    "$27,63"
  ],
  [
    "SODIO (ORINA)",
    "$4,00"
  ],
  [
    "POTASIO (ORINA)",
    "$4,00"
  ],
  [
    "PIRILINKS - D",
    "$58,00"
  ],
  [
    "FRUCTOSAMINA",
    "$12,10"
  ],
  [
    "LIPOPROTEINA A",
    "$16,00"
  ],
  [
    "APOLIPOPROTEINA A1",
    "$15,40"
  ],
  [
    "APOLIPOPROTEINA B",
    "$9,36"
  ],
  [
    "INDICE APO B/APO A-I",
    "$24,76"
  ],
  [
    "ELECTROFORESIS DE PROTEINAS",
    "$41,00"
  ],
  [
    "ADENOSIN DEAMINASA ADA",
    "$44,44"
  ],
  [
    "ALDOLASA",
    "$22,00"
  ],
  [
    "ALFA 2 MACROGLOBULINA",
    "$30,00"
  ],
  [
    "ELECTROFORESIS DE CK",
    "$99,79"
  ],
  [
    "FOSFAT. ACIDA PROSTATICA",
    "$14,00"
  ],
  [
    "COLINESTERASA",
    "$4,40"
  ],
  [
    "FIBROMAX",
    "$289,09"
  ],
  [
    "FIBROTEST",
    "$243,44"
  ],
  [
    "FOSFORO",
    "$4,00"
  ],
  [
    "LITIO",
    "$16,00"
  ],
  [
    "AMONIO",
    "$15,40"
  ],
  [
    "PLOMO (ABS. ATOMICA)",
    "$30,00"
  ],
  [
    "COBRE  (ABS. ATOMICA)",
    "$35,00"
  ],
  [
    "ZINC  (ABS. ATOMICA)",
    "$35,00"
  ],
  [
    "GASOMETRIA ARTERIAL",
    "$32,00"
  ],
  [
    "FENA",
    "$16,00"
  ],
  [
    "RA TEST NEFELOMETRIA( FACTOR REUMATOIDEO)",
    "$16,00"
  ],
  [
    "PROCALCITONINA",
    "$74,38"
  ],
  [
    "V.D.R.L. CUANTITATIVO",
    "$9,00"
  ],
  [
    "ANTIPEPTIDO CITRUILINADO",
    "$34,00"
  ],
  [
    "MONOTEST",
    "$5,50"
  ],
  [
    "PREALBUMINA",
    "$30,00"
  ],
  [
    "R DE HUDLESSON",
    "$7,00"
  ],
  [
    "STREPT - A",
    "$13,20"
  ],
  [
    "C1Q ANTICUERPOS",
    "$58,93"
  ],
  [
    "C3",
    "$22,00"
  ],
  [
    "C4",
    "$22,00"
  ],
  [
    "IGG POR NEFELOMETRIA",
    "$16,00"
  ],
  [
    "IGM POR NEFELOMETRIA",
    "$17,00"
  ],
  [
    "IGA POR NEFELOMETRIA",
    "$17,00"
  ],
  [
    "CADENAS KAPPA",
    "$28,60"
  ],
  [
    "CADENAS LAMBDA",
    "$27,63"
  ],
  [
    "IGG SUBCLASE 1",
    "$39,00"
  ],
  [
    "IGG SUBCLASE 2",
    "$39,00"
  ],
  [
    "IGG SUBCLASE 3",
    "$39,00"
  ],
  [
    "IGG SUBCLASE 4",
    "$39,00"
  ],
  [
    "HISTAMINA PLASMATICA",
    "$45,00"
  ],
  [
    "ADENOVIRUS AG",
    "$13,00"
  ],
  [
    "GIARDIA ANTIGENO EN HECES",
    "$12,56"
  ],
  [
    "CRIPTOSPORIDIUM PARVUS AG",
    "$12,10"
  ],
  [
    "SALMONELLA ANTIGENO",
    "$14,00"
  ],
  [
    "TEST DE GRAHAM (OXIUROS)",
    "$4,50"
  ],
  [
    "APT TEST (NEONATO)",
    "$11,00"
  ],
  [
    "ESCHERICHIA COLI",
    "$13,00"
  ],
  [
    "TRANSFERRINA EN HECES",
    "$14,00"
  ],
  [
    "LACTOFERRINA",
    "$20,00"
  ],
  [
    "NOROVIRUS",
    "$40,00"
  ],
  [
    "SHIGELLA ANTIGENO",
    "$18,00"
  ],
  [
    "SUDAN III GRASAS",
    "$6,00"
  ],
  [
    "ANTINUCLEARES ANA HEP - 2 IF",
    "$17,00"
  ],
  [
    "DNA DS - IF ANTIC",
    "$18,00"
  ],
  [
    "DNA DS  - IF ANTIC",
    "$18,00"
  ],
  [
    "ANTI JO 1 IGG",
    "$25,69"
  ],
  [
    "RNP - ANTIC",
    "$21,80"
  ],
  [
    "SCLERO 70 ANTIC",
    "$21,00"
  ],
  [
    "LA - SSB ANTIC",
    "$21,06"
  ],
  [
    "RO - SSA ANTIC",
    "$21,25"
  ],
  [
    "SM (SMITH) ANTIC",
    "$21,80"
  ],
  [
    "CENTROMERO B EIA ANTIC",
    "$24,15"
  ],
  [
    "HISTONAS ANTIC",
    "$25,00"
  ],
  [
    "MIOSITIS POR LIA",
    "$80,00"
  ],
  [
    "HLA B27",
    "$60,00"
  ],
  [
    "NUCLEOSOMAS ANTIC",
    "$25,00"
  ],
  [
    "HEPATICO SOLUBLE (SLA) AG",
    "$30,00"
  ],
  [
    "LKM-1 ANTIC",
    "$27,30"
  ],
  [
    "MUSCULO LISO - ASMA - IF",
    "$30,00"
  ],
  [
    "MITOCONDRIALES M2 (ELISA) ANTIC",
    "$23,00"
  ],
  [
    "GP-210 (EIA)",
    "$32,00"
  ],
  [
    "SP-100 (EIA)",
    "$21,00"
  ],
  [
    "GASTRINA",
    "$38,64"
  ],
  [
    "FSH",
    "$12,10"
  ],
  [
    "ANTIC TPO-MICROSOMALES",
    "$19,32"
  ],
  [
    "ANTICUERPOS TIROGLOBULINA",
    "$21,60"
  ],
  [
    "PROLACTINA",
    "$12,00"
  ],
  [
    "PROLACTINA 2 BASALES(1 DIARIA)",
    "$24,00"
  ],
  [
    "PROLACTINA POOL (0 - 30 - 60 MIN)",
    "$36,00"
  ],
  [
    "PROGESTERONA",
    "$12,00"
  ],
  [
    "17 OH PROGESTERONA",
    "$30,91"
  ],
  [
    "17 B - ESTRADIOL",
    "$12,10"
  ],
  [
    "ESTRIOL LIBRE",
    "$19,13"
  ],
  [
    "HCG BETA CUANTITATIVA",
    "$12,80"
  ],
  [
    "TESTOSTERONA",
    "$14,30"
  ],
  [
    "TESTOSTERONA LIBRE",
    "$27,63"
  ],
  [
    "DIHIDROTESTOSTERONA",
    "$40,57"
  ],
  [
    "SHBG (SEXHORMONE BINDING GLOBULINE)",
    "$24,20"
  ],
  [
    "ANDROSTENEDIONA",
    "$34,00"
  ],
  [
    "TIROGLOBULINA",
    "$15,40"
  ],
  [
    "CALCITONINA",
    "$42,50"
  ],
  [
    "LH",
    "$12,10"
  ],
  [
    "RECEPTORES DE TSH (TSI) ANTI",
    "$38,00"
  ],
  [
    "OSTEOCALCINA",
    "$50,72"
  ],
  [
    "VITAMINA D (25 OH)",
    "$212,52"
  ],
  [
    "PARATHORMONA -PTH",
    "$16,00"
  ],
  [
    "ECA ENZIMA CONVERT. DE ANGIOTENSINA",
    "$60,76"
  ],
  [
    "SEROTONINA PLASMATICA",
    "$287,87"
  ],
  [
    "METANEFRINAS PLASMATICAS",
    "$130,00"
  ],
  [
    "RENINA ACTIVIDAD PLASMATICA",
    "$49,20"
  ],
  [
    "ADRENALINA PLASMATICA",
    "$44,63"
  ],
  [
    "NORADRENALINA PLASMATICA",
    "$44,63"
  ],
  [
    "DOPAMINA PLASMATICA",
    "$44,63"
  ],
  [
    "DHEAS",
    "$14,30"
  ],
  [
    "IGF - 1",
    "$41,73"
  ],
  [
    "IGFBP - 3",
    "$36,82"
  ],
  [
    "GH - H DE CRECIM",
    "$13,82"
  ],
  [
    "LEPTINA",
    "$49,00"
  ],
  [
    "A. COLINA ARECEPTORES ANTIC BLOQUEADORES",
    "$144,14"
  ],
  [
    "A. COLINA ARECEPTORES ANTIC FIJADORES",
    "$135,14"
  ],
  [
    "A. COLINA ARECEPTORES ANTIC MODULADORES",
    "$164,24"
  ],
  [
    "MUSCULO ESTRIADO IFI ANTIC",
    "$78,00"
  ],
  [
    "MEMBRANA BASAL GLOMERULAR EIA ANTIC",
    "$40,42"
  ],
  [
    "ANCA C Y P - IF ANTIC",
    "$40,00"
  ],
  [
    "MIELOPEROXIDASA - MPO - ANCA P ANTIC",
    "$26,40"
  ],
  [
    "PR3 - ANCA C ANTIC",
    "$28,00"
  ],
  [
    "ACTH 7 -10 AM",
    "$14,30"
  ],
  [
    "CORTISOL  7 - 10  AM",
    "$14,30"
  ],
  [
    "CORTISOL  4 - 6 PM",
    "$14,30"
  ],
  [
    "CORTISOL 11 PM",
    "$13,82"
  ],
  [
    "CORTISOL SALIVAL 11PM",
    "$14,30"
  ],
  [
    "PEPTIDO C E INDICE",
    "$19,80"
  ],
  [
    "HOMA IR (EN AYUNAS)",
    "$19,80"
  ],
  [
    "HOMA - IR POST PRANDIAL",
    "$19,80"
  ],
  [
    "INSULINA ANTICUERPOS",
    "$40,00"
  ],
  [
    "CELULAS DE ISLOTES IA2 AC",
    "$43,00"
  ],
  [
    "ZN - T8 ANTIC",
    "$370,00"
  ],
  [
    "DEXAMETASONA  1MG",
    "$15,00"
  ],
  [
    "DEXAMETASONA  8MG",
    "$17,00"
  ],
  [
    "CLONIDINA",
    "$96,00"
  ],
  [
    "SUPRESION DE GH CON TOG",
    "$103,95"
  ],
  [
    "CA 15 3 (MAMA)",
    "$15,40"
  ],
  [
    "CROMOGRANINA A",
    "$67,62"
  ],
  [
    "CYFRA 21.1 - PULMON",
    "$21,45"
  ],
  [
    "ENOLASA - NSE - PULMON",
    "$40,00"
  ],
  [
    "HE4 (OVARIO)",
    "$54,00"
  ],
  [
    "ACIDO URICO 24 H",
    "$6,30"
  ],
  [
    "ALA PORFOBILINOGENO 24 H",
    "$39,00"
  ],
  [
    "AMILASA 24H",
    "$5,00"
  ],
  [
    "CORTISOL LIBRE URINARIO  24 H",
    "$31,80"
  ],
  [
    "CREATININA DEPURACION",
    "$9,60"
  ],
  [
    "CALCIO 24H",
    "$5,00"
  ],
  [
    "COBRE 24H",
    "$49,90"
  ],
  [
    "ELECTROFORESIS PROTEINAS 24H",
    "$50,00"
  ],
  [
    "FOSFORO 24H",
    "$6,30"
  ],
  [
    "KAPPA 24H",
    "$28,60"
  ],
  [
    "LAMBDA 24H",
    "$28,60"
  ],
  [
    "MICROALBUMINA 24H",
    "$23,20"
  ],
  [
    "POTASIO 24H",
    "$5,00"
  ],
  [
    "PROTEINAS TOTALES 24H",
    "$6,30"
  ],
  [
    "SODIO 24H",
    "$4,00"
  ],
  [
    "UREA 24H",
    "$6,30"
  ],
  [
    "ALDOSTERONA",
    "$38,64"
  ],
  [
    "ACIDO 5 AMINOLEVULINICO",
    "$44,00"
  ],
  [
    "ACIDO 5 HIDROXI INDOLACETICO",
    "$39,61"
  ],
  [
    "ACIDO VANILMANDELICO",
    "$40,00"
  ],
  [
    "CITRATO URINARIO 24 H",
    "$38,64"
  ],
  [
    "METANEFRINAS 24H",
    "$90,00"
  ],
  [
    "SEROTONINA",
    "$55,79"
  ],
  [
    "17 CETOSTEROIDES",
    "$40,33"
  ],
  [
    "17 HIDROXICORTICOSTEROIDES",
    "$40,33"
  ],
  [
    "CATECOLAMINAS DIFERENCIADAS EN ORINA DE 24 H.",
    "$98,37"
  ],
  [
    "PPD - FUERZA I (2U)",
    "$6,76"
  ],
  [
    "PPD - FUERZA II (5U)",
    "$6,76"
  ],
  [
    "ASPERGILLUS FUMIGATUS IGA + IGM (ELISA)",
    "$36,00"
  ],
  [
    "CANDIDA ALBICANS ANTIC (ELISA) IGM, IGA E IGG",
    "$86,94"
  ],
  [
    "GALACTOMANANO (ASPERGILLUS INVASIVA) ELISA",
    "$46,78"
  ],
  [
    "HISTOPLASMA CAPSULATUM IDR",
    "$40,00"
  ],
  [
    "MANANO ANTIG (CANDIDA INVASIVA) ELISA",
    "$106,50"
  ],
  [
    "PARACOCCIDIODES BRASILIENSIS IDR",
    "$40,00"
  ],
  [
    "EXUDADO FARINGEO",
    "$22,00"
  ],
  [
    "HEPATITIS B CARGA VIRAL",
    "$164,22"
  ],
  [
    "HEPATITIS B DETECTOR",
    "$164,22"
  ],
  [
    "HEPATITIS C CARGA VIRAL",
    "$360,00"
  ],
  [
    "HEPATITIS C GENOTIPIFICACION",
    "$571,87"
  ],
  [
    "HIV CARGA VIRAL",
    "$152,25"
  ],
  [
    "HIV SENSIBILIDAD",
    "$193,20"
  ],
  [
    "HIV DETECTOR RNA",
    "$199,50"
  ],
  [
    "CITOMEGALOVIRUS CARGA",
    "$192,19"
  ],
  [
    "CITOMEGALOVIRUS DETECTOR",
    "$187,57"
  ],
  [
    "HPV GENOTIPIFICACION",
    "$278,21"
  ],
  [
    "M. TUBERCULOSIS PCR EN LCR U OTRAS MUESTRAS",
    "$250,00"
  ],
  [
    "HERPES TIPO I Y II - PCR",
    "$196,10"
  ],
  [
    "INFLUENZA A, B, H1N1 POR PCR GENEXPERT",
    "$188,37"
  ],
  [
    "PARVOVIRUS B19 (PCR)",
    "$179,68"
  ],
  [
    "TOXOPLASMOSIS POR PCR",
    "$196,10"
  ],
  [
    "PANEL DE INFECCIONES RESPIRATORIAS",
    "$81,00"
  ],
  [
    "ACIDOS ORGANICOS EN ORINA",
    "$156,62"
  ],
  [
    "ACILCARNITINAS - CUANTITATIVAS",
    "$207,90"
  ],
  [
    "AMINOACIDOS PLASMATICOS CUANTITATIVA",
    "$156,62"
  ],
  [
    "BIOTINIDASA",
    "$220,53"
  ],
  [
    "G1PUT / GALACTOSEMIA CLASICA",
    "$12,00"
  ],
  [
    "MUCOPOLISACARIDOS EN ORINA",
    "$151,27"
  ],
  [
    "17 - OH PROG NN",
    "$25,00"
  ],
  [
    "CARIOTIPO EN MEDULA OSEA",
    "$173,88"
  ],
  [
    "CARIOTIPO CON FRAGILIDAD CROMOSOMICA",
    "$196,35"
  ],
  [
    "METABOLICO NEONATAL 7: TSH, 17OH, GAL, PK,FQ, Q6PDH, BIOT",
    "$65,00"
  ],
  [
    "METABOLICO NEONATAL BASICO TSH, 17OH, GAL, PK",
    "$38,00"
  ],
  [
    "METABOLICO ALTO RIESGO POR MS/MS AMINOACIDEMIAS + ACILCAMINITAS",
    "$124,74"
  ],
  [
    "ACIDO VALPROICO",
    "$14,00"
  ],
  [
    "CARBAMAZEPINAS",
    "$27,40"
  ],
  [
    "CICLOSPORINA",
    "$36,00"
  ],
  [
    "ETANOL",
    "$22,87"
  ],
  [
    "EVEROLIMUS (CERTICAN)",
    "$84,00"
  ],
  [
    "FENOBARBITAL",
    "$29,23"
  ],
  [
    "TACROLIMUS",
    "$108,11"
  ],
  [
    "AMEBA HISTOLYTICA ANTIC",
    "$15,00"
  ],
  [
    "BORDETELLA  PERTUSSIS IGG",
    "$26,25"
  ],
  [
    "BORDETELLA PERTUSSIS IGM",
    "$26,25"
  ],
  [
    "BORDETELLA PERTUSSIS IGA",
    "$26,25"
  ],
  [
    "BORRELIA BURGDORFERI (ENF LYME) IGG",
    "$20,90"
  ],
  [
    "BORRELIA BURGDORFERI (ENF LYME) IGM",
    "$20,90"
  ],
  [
    "BORRELIA BURGDORFERI (ENF LYME) W.BOLT",
    "$144,00"
  ],
  [
    "BRUCELLA  ABORTUS ANTICUERPOS IGG",
    "$24,15"
  ],
  [
    "BRUCELLA  ABORTUS ANTICUERPOS IGM",
    "$50,00"
  ],
  [
    "CHIKUNGUNYA ANTIC IGG",
    "$91,77"
  ],
  [
    "CHIKUNGUNYA ANTIC IGM",
    "$89,84"
  ],
  [
    "CHLAMYDIA ANTIC PNEUMONIAE IGG",
    "$28,60"
  ],
  [
    "CHLAMYDIA ANTIC PNEUMONIAE IGM",
    "$28,60"
  ],
  [
    "CHLAMYDIA ANTIC PNEUMONIAE IGA",
    "$28,60"
  ],
  [
    "CHLAMYDIA TRACHOMATIS - IGA",
    "$17,00"
  ],
  [
    "CHLAMYDIA TRACHOMATIS AG (URETRAL O VAGINAL)",
    "$212,52"
  ],
  [
    "CISTICERCO, ANTICUERPOS IGG",
    "$31,88"
  ],
  [
    "CISTICERCOSIS W BOLT",
    "$225,00"
  ],
  [
    "DENGUE ANTIC IGG",
    "$12,76"
  ],
  [
    "DENGUE ANTIC IGM",
    "$12,76"
  ],
  [
    "DENGUE, ANTIGENO NS1",
    "$14,00"
  ],
  [
    "EPSTEIN BARR VIRUS ANTIC IGG",
    "$15,54"
  ],
  [
    "EPSTEIN BARR VIRUS ANTIC IGM",
    "$15,70"
  ],
  [
    "HELICOBACTER PYLORI ANTIC IGG",
    "$14,88"
  ],
  [
    "HELICOBACTER PYLORI ANTIC IGM",
    "$14,88"
  ],
  [
    "HELICOBACTER PYLORI ANTIC IGA",
    "$14,88"
  ],
  [
    "HEPATITIS A IGG",
    "$17,00"
  ],
  [
    "HEPATITIS A IGM",
    "$16,72"
  ],
  [
    "HEPATITIS B ANTIGENO(HBS AG)",
    "$19,80"
  ],
  [
    "HEPATITIS B ANTICUERPO (HBS AC)",
    "$29,30"
  ],
  [
    "HEPATITIS B ANTIC CORE IGG",
    "$19,80"
  ],
  [
    "HEPATITIS B ANTIC CORE IGM",
    "$19,80"
  ],
  [
    "HEPATITIS B, E ANTICUERPO (HBE AC)",
    "$28,31"
  ],
  [
    "HEPATITIS B, E ANTIGENO (HBE AG)",
    "$19,13"
  ],
  [
    "HEPATITIS C ANTIC HCV",
    "$18,00"
  ],
  [
    "HEPATITIS C ANTIC W BLOTT",
    "$167,31"
  ],
  [
    "HEPATITIS D IGM ANTICUERPO",
    "$105,00"
  ],
  [
    "HEPATITIS D HDV AG",
    "$45,00"
  ],
  [
    "HERPES SIMPLEX VIRUS 1 IGG",
    "$10,84"
  ],
  [
    "HERPES SIMPLEX VIRUS 1 IGM",
    "$10,84"
  ],
  [
    "HERPES SIMPLEX VIRUS 2 IGM",
    "$10,84"
  ],
  [
    "HIDATIDOSIS, (EQUINOCOCCUS) ANTICUERPOS",
    "$40,00"
  ],
  [
    "HIV 1 Y 2 ANTIC + AG P24",
    "$13,00"
  ],
  [
    "HIV 1 Y 2 W BLOTT",
    "$154,00"
  ],
  [
    "HTLV I y II IGG",
    "$30,00"
  ],
  [
    "LEISHMANIA ANTIC IGG",
    "$24,00"
  ],
  [
    "LEPTOSPIRA ANTIC IGG",
    "$21,25"
  ],
  [
    "LEPTOSPIRA ANTIC IGM",
    "$21,25"
  ],
  [
    "MICOPLASMA PNEUMONIAE IGM",
    "$29,47"
  ],
  [
    "PARVOVIRUS ANTIC IGG",
    "$23,10"
  ],
  [
    "PARVOVIRUS ANTIC IGM",
    "$27,00"
  ],
  [
    "FROTIS SANGRE PERIFERICA",
    "$15,90"
  ],
  [
    "PLASMODIUM VIVAX Y FALC ANTIGENO",
    "$19,00"
  ],
  [
    "LINFOCITOS T (CD3 - CD4 - CD8)",
    "$96,00"
  ],
  [
    "INMUNOTIPIFICACION DE LEUCEMIAS",
    "$325,50"
  ],
  [
    "CD34 CUANTIFICACION CELULAS MADRES",
    "$80,00"
  ],
  [
    "RETRACCION DE COAGULO",
    "$3,68"
  ],
  [
    "F VON WILLEBRAND AG",
    "$48,51"
  ],
  [
    "CK",
    "$7,73"
  ],
  [
    "AMILASURIA",
    "$5,00"
  ],
  [
    "INMUNOFIJACION DE INMUNOGLOBULINAS",
    "$140,00"
  ],
  [
    "TOG (TOLERANCIA A LA GLUCOSA) 2H: BASAL Y 2 HORAS",
    "$12,18"
  ],
  [
    "TOG (TOLERANCIA A LA GLUCOSA) 3H: BASAL, 1H 2H Y 3H",
    "$15,65"
  ],
  [
    "DIABETES GESTAC TAMIZ 50 GR BASAL 1H",
    "$14,70"
  ],
  [
    "DIABETES GESTAC TAMIZ 75 GR BASAL 1 Y 2H",
    "$14,70"
  ],
  [
    "DIABETES GESTAC CONF 100 GR BASAL 1, 2 Y 3H",
    "$14,00"
  ],
  [
    "RESERVA ALCALINA",
    "$12,00"
  ],
  [
    "BICARBONATO STANDARD",
    "$8,40"
  ],
  [
    "OSMOLALIDAD PLASMATICA",
    "$11,59"
  ],
  [
    "LACTATO/AC. LACTICO",
    "$20,00"
  ],
  [
    "RPR",
    "$5,00"
  ],
  [
    "ALFA 1 ANTITRIPSINA",
    "$26,00"
  ],
  [
    "IGE TOTAL",
    "$16,00"
  ],
  [
    "CADENAS KAPPA LIBRES",
    "$154,56"
  ],
  [
    "CADENAS LAMBDA LIBRES",
    "$45,91"
  ],
  [
    "ROTAVIRUS + ADENOVIRUS AG",
    "$26,00"
  ],
  [
    "CRIPTOSPORIDIUM + GIARDINA AG",
    "$25,12"
  ],
  [
    "AZUCARES REDUCTORES (CLINITEST)",
    "$5,31"
  ],
  [
    "TESTOSTERONA POST-GONADOTROPINA",
    "$13,82"
  ],
  [
    "COCIENTE: MICROALBUMINA/CREATININA",
    "$28,50"
  ],
  [
    "COCIENTE: PROTEINA/CREATININA",
    "$12,18"
  ],
  [
    "FACTORES ANGIOGENICOS (SFIT/PIGT)",
    "$203,74"
  ],
  [
    "CORTISOL RITMO CIRCAD",
    "$42,90"
  ],
  [
    "GAD - 65 ANTIC",
    "$50,40"
  ],
  [
    "METOCLOPRAMIDA",
    "$68,25"
  ],
  [
    "TOLER GLUCOSA CON DOSIF INSULINA",
    "$78,75"
  ],
  [
    "GH CON HIPOGLICEMIA POST INSULINICA",
    "$106,26"
  ],
  [
    "TRH",
    "$50,61"
  ],
  [
    "ACTH CON DET DE CORTISOL",
    "$71,97"
  ],
  [
    "ACTH CON DET DE CORTISOL Y DHEAS",
    "$155,40"
  ],
  [
    "ACTH CON DET DE CORTISOL Y 17 OH PROG",
    "$205,59"
  ],
  [
    "ALDOSTERONA CON CARGA DE SODIO",
    "$210,00"
  ],
  [
    "OXALATO URINARIO",
    "$46,20"
  ],
  [
    "ESTREPTOCOCO GRUPO B (EMBARAZADAS)",
    "$19,11"
  ],
  [
    "HEPATITIS C DETECTOR",
    "$216,38"
  ],
  [
    "HIV 1,2 ADNPROVIRAL",
    "$154,56"
  ],
  [
    "HIV 1,2 RESISTENCIA",
    "$13,65"
  ],
  [
    "HIV DETECTOR RNA EN LCR",
    "$154,56"
  ],
  [
    "HPV TAMIZAJE ALTO RIESGO GENOTIPOS +16 - 18 (MUJERES)",
    "$144,51"
  ],
  [
    "PANEL DE INFECCIONES GASTROINTESTINAL",
    "$381,00"
  ],
  [
    "PANEL DE SEPSIS",
    "$381,00"
  ],
  [
    "PANEL DE MENINGITIS EN LCR",
    "$381,00"
  ],
  [
    "GLICOSAMINOGLICANOS EN LA ORINA",
    "$208,10"
  ],
  [
    "IRT - FQ",
    "$16,28"
  ],
  [
    "CARIOTIPO ESTANDAR",
    "$140,00"
  ],
  [
    "CARIOTIPO EN LIQUIDO AMNIOTICO",
    "$392,20"
  ],
  [
    "CARIOTIPO EN RESTOS CORIONICOS",
    "$591,19"
  ],
  [
    "DOBLE TEST: 8 - 13,6 SEMANAS",
    "$60,00"
  ],
  [
    "TRIPLE TEST: 14 - 22 SEMANAS",
    "$77,51"
  ],
  [
    "PRUEBA PRENATAL NO INVASIVA (NIPT) - VERIFI SECUENCIACION",
    "$1522,42"
  ],
  [
    "DIFENILHIDANTOINA ( FENITOINA - EPAMIN)",
    "$14,00"
  ],
  [
    "SIRULIMUS",
    "$136,44"
  ],
  [
    "ANFETAMINAS CUALITATIVA",
    "$8,69"
  ],
  [
    "EXTASIS CUALITATIVA (EXT)",
    "$13,52"
  ],
  [
    "BENZODIAZEPINAS, CUALITATIVO (BENZ)",
    "$23,18"
  ],
  [
    "NICOTINA",
    "$25,50"
  ],
  [
    "CANNABINOIDE (THC) - CUANTITATIVA",
    "$10,63"
  ],
  [
    "CANNABINOIDE (THC) - CUALITATIVA",
    "$9,00"
  ],
  [
    "COCAINA (COC) - CUANTITATIVA",
    "$11,59"
  ],
  [
    "COCAINA (COC) - CUALITATIVA",
    "$9,00"
  ],
  [
    "OPIACEOS (OPI) CUANTITATIVA",
    "$11,59"
  ],
  [
    "OPIACEOS (OPI) CUALITATIVA",
    "$8,69"
  ],
  [
    "TAMIZAJE DE 10 DROGAS",
    "$33,81"
  ],
  [
    "TAMIZAJE 7 DROGAS",
    "$25,13"
  ],
  [
    "TAMIZAJE 5 DROGAS",
    "$23,18"
  ],
  [
    "TAMIZAJE 3 DROGAS",
    "$23,18"
  ],
  [
    "ADENOVIRUS RESPIRATORIO ANTIGENO",
    "$28,90"
  ],
  [
    "RSV ANTIGENO (SECRECION NASAL)",
    "$30,35"
  ],
  [
    "INFLUENZA A , B , ANTIGENO (SECRECION NASAL)",
    "$28,00"
  ],
  [
    "LEGIONELLA PNEUMOFILA, AG (ORINA)",
    "$130,41"
  ],
  [
    "KOH",
    "$13,20"
  ],
  [
    "TINTA CHINA",
    "$5,00"
  ],
  [
    "HEMOCULTIVO 1º MUESTRA",
    "$27,05"
  ],
  [
    "HEMOCULTIVO 2º MUESTRA",
    "$27,05"
  ],
  [
    "HEMOCULTIVO 3ª MUESTRA",
    "$27,05"
  ],
  [
    "AEROBIOS",
    "$29,11"
  ],
  [
    "ANAEROBIOS",
    "$29,11"
  ],
  [
    "CON/INHIBIDORES DE ANTIBIOTICOS",
    "$27,93"
  ],
  [
    "L. PERICARDIACO",
    "$38,25"
  ],
  [
    "L. SINOVIAL - LUZ POLARIZADA CRISTALES",
    "$41,58"
  ],
  [
    "LIQUIDO ASCITICO",
    "$38,25"
  ],
  [
    "LIQUIDO CEFALO RAQUIDEO -  CITOQUÍMICO",
    "$38,25"
  ],
  [
    "LIQUIDO SINOVIAL - CITOQUIMICO",
    "$41,58"
  ],
  [
    "LAV. BRONQUIOALVEOLAR BAL",
    "$28,00"
  ],
  [
    "L PERITONEAL",
    "$38,25"
  ],
  [
    "L. PLEURAL - CITOQUIMICO",
    "$38,25"
  ],
  [
    "ESPERMATOGRAMA",
    "$24,00"
  ],
  [
    "ANTICUERPOS ANTIESPERMATOZOIDES",
    "$42,00"
  ],
  [
    "FRUCTOSA EN SEMEN",
    "$6,24"
  ],
  [
    "CITRATO EN SEMEN",
    "$11,43"
  ],
  [
    "ACIDO URICO EN LIQ. BIOLOGICO",
    "$3,70"
  ],
  [
    "ADA (TB) EN LIQ. BIOLOGICO",
    "$44,44"
  ],
  [
    "ALBUMINA RADIO (LCR/SUERO) EN LIQ. BIOLOGICO",
    "$24,30"
  ],
  [
    "AMILASA Y LIPASA EN LIQ. BIOLOGICO",
    "$9,40"
  ],
  [
    "BANDAS OLIGOCLONALES EN LIQ. BIOLOGICO",
    "$140,00"
  ],
  [
    "COLESTEROL EN LIQ. BIOLOGICO",
    "$3,19"
  ],
  [
    "GLUCOSA EN LIQ. BIOLOGICO",
    "$3,86"
  ],
  [
    "CRISTALES EN LIQ. BIOLOGICO",
    "$20,29"
  ],
  [
    "IGG POR NEFELOMETRIA EN LIQ. BIOLOGICO",
    "$15,46"
  ],
  [
    "IGG RADIO LCR/SUERO EN LIQ. BIOLOGICO",
    "$20,48"
  ],
  [
    "LACTATO LCR EN LIQ. BIOLOGICO",
    "$19,32"
  ],
  [
    "(LDH) LACTATO DESHIDROGENASA EN LIQ. BIOLOGICO",
    "$4,40"
  ],
  [
    "PROTEINA BASICA DE LA MIELINA",
    "$181,30"
  ],
  [
    "PROTEINAS Y FRACCIONES EN LIQ. BIOLOGICO",
    "$6,76"
  ],
  [
    "VDRL - LCR EN LIQ. BIOLOGICO",
    "$5,31"
  ],
  [
    "CANDIDAS + IDENTIFICACION",
    "$54,10"
  ],
  [
    "FUNGIGRAMA",
    "$56,00"
  ],
  [
    "HONGOS MICOSIS SISTEMATICAS",
    "$51,74"
  ],
  [
    "HONGOS MICOSIS SUPERFICIALES",
    "$51,74"
  ],
  [
    "CULTIVO PARA M.TB",
    "$60,00"
  ],
  [
    "IDENTIFICACION PARA MICROBACTERIAS",
    "$56,00"
  ],
  [
    "CHLAMYDIA TRACHOMATIS AG (SOLO SECRECION: URETRAL O VAGINAL)",
    "$16,00"
  ],
  [
    "CITOMEGALOVIRUS ANTIC IGG",
    "$15,46"
  ],
  [
    "CITOMEGALOVIRUS ANTIC IGM",
    "$18,54"
  ],
  [
    "PAROTIDITIS ANTIC IGG",
    "$26,40"
  ],
  [
    "PAROTIDITIS ANTIC IGM",
    "$28,00"
  ],
  [
    "RICKETTSIA ANTIC IGG",
    "$118,00"
  ],
  [
    "RUBEOLA IGG",
    "$16,72"
  ],
  [
    "RUBEOLA IGM",
    "$16,72"
  ],
  [
    "SARAMPION IGG",
    "$25,26"
  ],
  [
    "SARAMPION IGM",
    "$25,26"
  ],
  [
    "SIFILIS ANTIC TOTALES (IGG+IGM ANTI TREPONEMA)",
    "$34,78"
  ],
  [
    "SIFILIS IGM ANTITREPONEMA",
    "$20,29"
  ],
  [
    "STRONGYLOIDES STERCORALIS ANTIC",
    "$28,98"
  ],
  [
    "TOXOCARA ANTIC IGG",
    "$25,00"
  ],
  [
    "TOXOPLASMA GONDI ANTIC IGG",
    "$16,00"
  ],
  [
    "TOXOPLASMA GONDI ANTIC IGM",
    "$14,30"
  ],
  [
    "TOXOPLASMA IGG-AVIDEZ",
    "$70,00"
  ],
  [
    "TRICHINELLA SPIRALIS ANTICUERPO",
    "$28,98"
  ],
  [
    "TRIPANOSOMA CRUZII (CHAGAS)",
    "$16,50"
  ],
  [
    "TUBERCULOSIS MYCOB IGG",
    "$15,75"
  ],
  [
    "VARICELA ZOSTER ANTIC IGG",
    "$28,00"
  ],
  [
    "VARICELA ZOSTER ANTIC IGM",
    "$21,25"
  ],
  [
    "ZIKA VIRUS, ANTICUERPOS IGG",
    "$100,49"
  ],
  [
    "ZIKA VIRUS, ANTICUERPOS IGM",
    "$75,74"
  ],
  [
    "ALDOSTERONA - ENDO",
    "$38,64"
  ],
  [
    "TUBERCULOSIS MYCOB IGM",
    "$15,75"
  ],
  [
    "CULTIVO DE LIQUIDO ASCITICO",
    "$27,05"
  ],
  [
    "TEST ALIENTO - SOBRE CRECIMIENTO BACTERIANO LACTULOSA",
    "$100,00"
  ],
  [
    "BILIRRUBINAS EN LÍQUIDO ASCITICO",
    "$3,19"
  ],
  [
    "CULTIVO EN NICKERSON",
    "$8,40"
  ],
  [
    "HCG BETA CUALITATIVO",
    "$5,88"
  ],
  [
    "ESTUDIOS CLINICOS DE DUODENOSCOPIOS 66",
    "$4656,96"
  ],
  [
    "C.E.A ANTIG CARCINO EMBR. LIQUIDO BIOLOGICO",
    "$12,60"
  ],
  [
    "PROTEINAS Y FRACCIONES",
    "$6,80"
  ],
  [
    "ANTI HBC TOTAL",
    "$20,00"
  ],
  [
    "CA - 125 EN LIQUIDO BIOLOGICO",
    "$14,88"
  ],
  [
    "SELENIO",
    "$64,51"
  ],
  [
    "YODO",
    "$85,05"
  ],
  [
    "PRUEBA DETECCION CUALITATIVA DE ANTICUERPOS DE VIRUS SARS-COV-2(COVID19) IGM E IGG POR INMUNOENSAYO",
    "$12,60"
  ],
  [
    "PCR ULTRASENSIBLE",
    "$8,21"
  ],
  [
    "PRUEBA DETECCION CUALITATIVA DE ANTICUERPOS DE VIRUS SARS-COV-2(COVID19) IGM E IGG POR INMUNOENSAYO",
    "$23,10"
  ],
  [
    "PRUEBA DETECCION CUALITATIVA DE ANTICUERPOS DE VIRUS SARS-COV-2(COVID19) IGM E IGG POR INMUNOENSAYO",
    "$15,75"
  ],
  [
    "VITAMINA D TOTAL",
    "$32,00"
  ],
  [
    "INSULINA 2H POST PRANDIAL",
    "$34,00"
  ],
  [
    "FACTOR DE CRECIMIENTO PLACENTARIO 1 -PIGF",
    "$203,74"
  ],
  [
    "CLORO EN ORINA (24H)",
    "$3,30"
  ],
  [
    "CA 19-9 T.DIGESTIVO",
    "$19,25"
  ],
  [
    "ANTIG. CARCINOEMBRIONARIO CEA",
    "$12,32"
  ],
  [
    "MYCOBACTERIUM TB, DNA DETECCIÓN",
    "$231,00"
  ],
  [
    "HORMONA ANTI MULERIANA",
    "$98,70"
  ],
  [
    "CULTIVO PARA MYCOBACTERIUM",
    "$60,00"
  ],
  [
    "PRUEBA DETECCION CUANTITATIVA DE ANTICUERPOS DE VIRUS SARS-COV-2(COVID19) IGM E IGG POR QUIMIO LUMINISCENCIA",
    "$31,50"
  ],
  [
    "ENDOMISIALES, ANTICUERPOS IGG",
    "$46,20"
  ],
  [
    "ENDOMISIALES, ANTICUERPOS IGA",
    "$28,35"
  ],
  [
    "ELASTASA FECAL",
    "$69,30"
  ],
  [
    "GASOMETRIA VENOSA",
    "$32,00"
  ],
  [
    "PRUEBA COVID19 ANTIGENO (HISOPADO) POR FLUJO LATERAL - INMUNOCROMATOGRAFIA",
    "$13,00"
  ],
  [
    "COVID-19 (CORONAVIRUS) DETECCION POR PCR",
    "$45,00"
  ],
  [
    "CA 21-1",
    "$15,00"
  ],
  [
    "COFACTOR DE RISTOCETINA",
    "$115,50"
  ],
  [
    "ANTI TB IGG + IGM",
    "$15,75"
  ],
  [
    "HEMATOZOARIOS GOTA GRUESA",
    "$5,25"
  ],
  [
    "ANTICUERPOS SPIKE 2019-NCOV RBD",
    "$26,25"
  ],
  [
    "CITOQUÍMICO DE LÍQUIDO ASCITICO",
    "$36,04"
  ],
  [
    "PRUEBA DE ADN PATERNIDAD",
    "$525,00"
  ],
  [
    "VITAMINA E",
    "$65,10"
  ],
  [
    "SARS-COV-2 (COVID-19) EXPRESS",
    "$110,25"
  ],
  [
    "ESTUDIO FUNCIONAL DE MICROBIOTA INTESTINAL",
    "$420,00"
  ],
  [
    "DIAMINO OXIDASA (DAO) CONCENTRACION SUERO",
    "$157,50"
  ],
  [
    "OXALATO EN SANGRE",
    "$57,75"
  ],
  [
    "CITRATO EN SANGRE",
    "$52,50"
  ],
  [
    "CA 19-9 ANTÍGENO (MARCADOR TUMORAL) EN FLUÍDOS BIOLÓGICOS",
    "$37,80"
  ],
  [
    "VIRUS SINCITIAL RESPIRATORIO",
    "$36,75"
  ],
  [
    "IGE ESPECÍFICOS RAST",
    "$20,00"
  ],
  [
    "HORMONA ANTIMULLERIANA (AMH)",
    "$106,00"
  ],
  [
    "IGG SUBCLASE 1,2,3 Y 4",
    "$117,00"
  ],
  [
    "KAPPA/LAMBDA EN ORINA 24 HORAS",
    "$37,70"
  ],
  [
    "CADENAS LIGERAS LIBRES KAPPA/LAMBDA EN SUERO",
    "$70,20"
  ],
  [
    "E1 CASPA DE GATO",
    "$16,64"
  ],
  [
    "E3 CASPA DE CABALLO",
    "$24,00"
  ],
  [
    "E5 CASPA DE PERRO",
    "$16,64"
  ],
  [
    "E84 EPITELIO DE HAMSTER",
    "$16,64"
  ],
  [
    "F1 CLARA DE HUEVO",
    "$16,64"
  ],
  [
    "F2 LECHE",
    "$16,64"
  ],
  [
    "F3 BACALAO",
    "$24,00"
  ],
  [
    "F4 TRIGO",
    "$18,00"
  ],
  [
    "F7 AVENA",
    "$16,64"
  ],
  [
    "F8 MAÍZ",
    "$18,00"
  ],
  [
    "F9 ARROZ",
    "$18,00"
  ],
  [
    "F13 MANÍ",
    "$16,64"
  ],
  [
    "F14 SOYA",
    "$16,64"
  ],
  [
    "F24 CAMARÓN",
    "$16,64"
  ],
  [
    "F36 COCO",
    "$24,00"
  ],
  [
    "F40 ATÚN",
    "$16,64"
  ],
  [
    "F41 SALMÓN",
    "$16,64"
  ],
  [
    "F75 YEMA DE HUEVO",
    "$16,64"
  ],
  [
    "F76 ALFA LACTALBUMIN",
    "$16,64"
  ],
  [
    "F77 BETA LACTOGLOBULIN",
    "$16,64"
  ],
  [
    "F78 CASEÍNA",
    "$16,64"
  ],
  [
    "F80 LANGOSTA",
    "$18,00"
  ],
  [
    "F105 CHOCOLATE",
    "$18,00"
  ],
  [
    "H1 POLVO DE CASA GREER",
    "$16,64"
  ],
  [
    "M1 PENICILLUM NOTATUM",
    "$18,00"
  ],
  [
    "M2 CLADOSPORIUM HERBARUM",
    "$18,00"
  ],
  [
    "M3 ASPERGUILLUS FUMIGTUS",
    "$18,00"
  ],
  [
    "M6 ALTERNARIA TENUIS",
    "$18,00"
  ],
  [
    "M5 CÁNDIDA ALBICANS",
    "$18,00"
  ],
  [
    "D1 DERMATHOFAGOIDES PTERONYSSINUS",
    "$16,64"
  ],
  [
    "D2 DERMATHOFAGOIDES FARINAE",
    "$16,64"
  ],
  [
    "I1 VENENO DE ABEJA",
    "$18,00"
  ],
  [
    "I4 VENENO DE AVISPA AMARILLA",
    "$18,00"
  ],
  [
    "I6 CUCARACHA",
    "$16,64"
  ],
  [
    "K82 LATEX",
    "$18,00"
  ],
  [
    "K74 SEDA",
    "$24,00"
  ],
  [
    "EP1 PANEL ANIMAL",
    "$43,55"
  ],
  [
    "FP1 MEZCLA DE ALIMENTOS",
    "$26,65"
  ],
  [
    "FP2 MEZCLA DE ALIMENTOS",
    "$26,65"
  ],
  [
    "FP7 PANEL DE COMIDA",
    "$26,65"
  ],
  [
    "HP1 PANEL DE POLVO",
    "$38,00"
  ],
  [
    "MP1 PANEL DE HONGOS",
    "$26,65"
  ],
  [
    "DPI PANEL DE ACAROS",
    "$26,65"
  ],
  [
    "INDICE FAI",
    "$38,50"
  ],
  [
    "LÍPIDOS TOTALES",
    "$9,60"
  ],
  [
    "MAGNESIO 24H",
    "$5,00"
  ],
  [
    "LIQUIDO CEFALORAQUIDEO",
    "$27,05"
  ],
  [
    "FT4",
    "$9,02"
  ],
  [
    "FT3",
    "$9,02"
  ],
  [
    "NT-PRO BNP (PEPTIDO NATRIURETICO)",
    "$37,63"
  ],
  [
    "INDICE HOMA",
    "$16,00"
  ],
  [
    "CATECOLAMINAS DIFERENCIADAS EN PLASMA (HPLC)",
    "$42,90"
  ],
  [
    "PAPANICOLAU",
    "$4,50"
  ],
  [
    "MERCURIO",
    "$44,40"
  ],
  [
    "ARSÉNICO",
    "$44,40"
  ],
  [
    "ALUMINIO",
    "$33,30"
  ],
  [
    "CREATININA, DEPURACION CORREGIDA",
    "$6,84"
  ],
  [
    "PRE ANESTESICO",
    "$30,00"
  ],
  [
    "GASTRO PANEL",
    "$30,00"
  ],
  [
    "PANEL DE INTOLERANCIA ALIMENTICIA",
    "$304,50"
  ],
  [
    "PLOMO EN SANGRE",
    "$16,00"
  ],
  [
    "CITOLOGIA NASAL",
    "$8,69"
  ],
  [
    "TEST DE EQUILIBRIO",
    "$15,00"
  ],
  [
    "TRANSFERRINA (RECEPTOR SOLUBLE DE LA TRANSFERRINA)",
    "$50,00"
  ],
  [
    "9000 ANA BLOT ANTIGENOS CUALITATIVO",
    "$75,41"
  ],
  [
    "C-TELOPEPTIDO",
    "$52,00"
  ],
  [
    "INMUNOGLOBULINA G4 (IGG4) EN SUERO",
    "$40,00"
  ],
  [
    "PAPERAS IGG",
    "$36,64"
  ],
  [
    "FEE SEGURO PRIVADO",
    "$3,52"
  ],
  [
    "AMILASA, LIQ. BIOLOGICO",
    "$6,02"
  ],
  [
    "ANTIFOSFOLIPIDOS IGA",
    "$31,92"
  ],
  [
    "TOMA A DOMICILIO",
    "$6,00"
  ],
  [
    "ANTI VIMENTINA CITRULINADA",
    "$20,00"
  ],
  [
    "PEPSINOGENO",
    "$111,55"
  ],
  [
    "TOMA DE MUESTRA A METROPOLIS",
    "$10,00"
  ],
  [
    "PELO DE PERRO",
    "$16,48"
  ],
  [
    "OVOALBUMINA",
    "$18,00"
  ],
  [
    "NARANJA",
    "$18,54"
  ],
  [
    "BLOMIA TROPICAL",
    "$18,00"
  ],
  [
    "COCIENTE: CALCIO/CREATININA",
    "$8,24"
  ],
  [
    "ZONULINA",
    "$90,00"
  ],
  [
    "MUESTRA  BIOTECH + ENVIO",
    "$50,00"
  ],
  [
    "HELICOBACTER PYLORI – RESISTENCIA A 2 MEDICAMENTOS: CLARITROMICINA Y QUINOLONA",
    "$110,00"
  ],
  [
    "HELICOBACTER PYLORI – RESISTENCIA A 6 MEDICAMENTOS: CLARITROMICINA, QUINOLONA, AMOXICILINA, ERITROMICINA, METRONIDAZOL Y OFLOXACINA",
    "$140,00"
  ],
  [
    "ESTUDIO DE MICROBIOTA INTESTINAL",
    "$425,00"
  ],
  [
    "QUANTIFERON-TB",
    "$275,01"
  ],
  [
    "T4 LIBRE",
    "$9,02"
  ],
  [
    "T3 LIBRE .",
    "$8,72"
  ],
  [
    "ACTIN IGG",
    "$28,60"
  ],
  [
    "T4 TOTAL.",
    "$8,72"
  ],
  [
    "T3 TOTAL.",
    "$8,72"
  ],
  [
    "T3 LIBRE",
    "$8,72"
  ],
  [
    "GLUCOSA -6 P DESHIDROGENASA",
    "$27,00"
  ],
  [
    "HEMOSIDERINURIA",
    "$14,00"
  ],
  [
    "TEST DE HEMÓLISIS EN SUCROSA",
    "$10,00"
  ],
  [
    "TEST DE HAM",
    "$11,00"
  ],
  [
    "HAPTOGLOBINA",
    "$33,48"
  ],
  [
    "ERITROPOYETINA",
    "$29,11"
  ],
  [
    "GLIADINA DESAMINADA ANTIC IGA",
    "$26,00"
  ],
  [
    "GLIADINA DESAMINADA ANTIC IGG",
    "$24,55"
  ],
  [
    "ACTIN F. IGA, ACTIN",
    "$28,60"
  ],
  [
    "HLA-DQ2 GENOTIPO SUSCEPTIBILIDAD CELIAQUIA",
    "$196,88"
  ],
  [
    "HLA-DQ8 GENOTIPO SUSCEPTIBILIDAD CELIAQUIA",
    "$196,88"
  ],
  [
    "ENDOMISIALES, ANTICUERPOS IGM",
    "$42,00"
  ],
  [
    "ASCA IGG",
    "$25,50"
  ],
  [
    "ASCA IGA",
    "$25,50"
  ],
  [
    "FACTOR INTRINSECO ANTIC",
    "$32,00"
  ]
]
.map(([name,price])=>({
    name,price,en:EXAM_EN[name]||name
}));
// Artículos de salud: imagen, título, resumen y contenido de cada nota.
const notes=[
{
    slug:'el-estres-un-enemigo-silencioso-que-afecta-nuestra-salud-fisica-y-mental',
    title:'El estrés: Un enemigo silencioso que afecta nuestra salud física y mental',
    date:'07 Nov',
    enDate:'07 Nov',
    tag:'Labs · Salud',
    img:'assets/estres2.jpeg',
    intro:'La Organización Mundial de la Salud (OMS) define el estrés como cualquier tipo de cambio que provoca agotamiento físico, emocional o psicológico.',
    enTitle:'Stress: A silent enemy that affects our physical and mental health',
    enTag:'Health · LABS',
    enIntro:'The World Health Organization (WHO) defines stress as any type of change that causes physical, emotional or psychological exhaustion.',
    enBody:['The World Health Organization (WHO) defines stress as any type of change that causes physical, emotional or psychological exhaustion. According to the organization, it is a natural response of the human body to situations that require quick action.',
    'Although stress can arise in response to any challenge, it is a daily phenomenon in modern life. When it becomes chronic, it can affect health.',
    'The body responds to stress by releasing hormones such as cortisol, which activate the state of alertness, tense the muscles, and accelerate breathing and heart rate. Headaches, stomach discomfort, back pain, and insomnia are some of its manifestations.',
    'To assess its impact, LABS notes the usefulness of hormone profiles and specific tests, always as part of a medical evaluation.',
    'Learning to manage stress can improve quality of life. Regular exercise, relaxation techniques, and activities that promote wellbeing can help reduce tension.'],
    body:[`La Organización Mundial de la Salud (OMS) define el estrés como cualquier tipo de cambio que provoca agotamiento físico, emocional o psicológico. Según la entidad, se trata de una respuesta natural del cuerpo humano ante situaciones que requieren una acción rápida.`,
    `Aunque el estrés puede surgir frente a cualquier desafío, es un fenómeno cotidiano en la vida moderna. Cuando se convierte en algo crónico puede tener repercusiones en la salud.`,
    `El cuerpo reacciona al estrés liberando hormonas como el cortisol, que activan el estado de alerta, tensionan los músculos y aceleran la respiración y el ritmo cardíaco. Dolores de cabeza, malestar estomacal, dolor de espalda e insomnio son algunas de sus manifestaciones.`,
    `Para evaluar su impacto, LABS señala la utilidad de perfiles hormonales y pruebas específicas, siempre dentro de una evaluación médica.`,
    `Aprender a manejar el estrés mejora la calidad de vida. El ejercicio regular, las técnicas de relajación y actividades que generen bienestar pueden ayudar a reducir la tensión.`]
},
{
    slug:'higado-el-filtro-natural-del-cuerpo',
    title:'Hígado, el «filtro» natural del cuerpo',
    date:'05 Sep',
    enDate:'05 Sep',
    tag:'Hígado · Labs',
    img:'assets/higado.jpeg',
    intro:'Mantenerlo sano a través de una buena alimentación es vital.',
    enTitle:'Liver, the body’s natural “filter”',
    enTag:'Liver · LABS',
    enIntro:'Keeping it healthy through good nutrition is vital.',
    enBody:["The liver is an essential organ with a crucial role in metabolic activity. It is located in the upper right part of the abdominal cavity and performs vital functions for overall wellbeing.",
    "It regulates chemicals in the blood, produces bile, and processes substances that arrive from the digestive system.",
    {
        "h2": "Main liver functions"
    },
    {
        "ul": ["Elimination of toxins",
        "Metabolism of medicines",
        "Bile secretion",
        "Nutrient storage"]
    },
    "Prevention is key. A balanced diet, moderating fats and processed foods, avoiding excess alcohol, and maintaining physical activity are important measures.",
    "LABS offers liver function testing to evaluate proteins, bilirubins, and liver enzymes, according to medical indication."],
    body:["El hígado, un órgano esencial, tiene un papel crucial en la actividad metabólica. Se ubica en la parte superior derecha de la cavidad abdominal y cumple funciones vitales para el bienestar general.",
    "Es responsable de regular sustancias químicas en la sangre, producir bilis y procesar sustancias que llegan desde el aparato digestivo.",
    {
        "h2": "Principales funciones del hígado"
    },
    {
        "ul": ["Eliminación de toxinas",
        "Metabolización de medicamentos",
        "Secreción de bilis",
        "Almacenamiento de nutrientes"]
    },
    "La prevención es clave. Una alimentación equilibrada, moderar el consumo de grasas y alimentos procesados, evitar el exceso de alcohol y mantener actividad física son medidas importantes.",
    "En LABS se puede realizar una prueba de función hepática para evaluar proteínas, bilirrubinas y enzimas hepáticas, de acuerdo con la indicación médica."]
},
{
    slug:'rinones-los-heroes-ocultos-de-nuestro-cuerpo',
    title:'Riñones: los héroes ocultos de nuestro cuerpo',
    date:'23 Jul',
    enDate:'23 Jul',
    tag:'Labs',
    img:'assets/rinones.jpeg',
    alt:'Imagen ilustrativa de los riñones humanos',
    intro:'La hidratación, el ejercicio y una alimentación baja en sal son fundamentales para su cuidado.',
    enTitle:'Kidneys: the hidden heroes of our body',
    enTag:'LABS',
    enIntro:'Hydration, exercise, and a low-salt diet are essential for kidney care.',
    enBody:['The kidneys are two organs with a fundamental task: filtering the blood and removing waste. They also participate in hormonal functions and help maintain the body’s balance.',
    'Every day they filter large amounts of blood to produce urine and help maintain the balance of water and minerals.',
    'Poor habits can affect kidney health. These include a high-salt diet, excessive sugar intake, smoking, drinking too little water, physical inactivity, and excessive alcohol consumption.',
    'Blood and urine tests can evaluate kidney function. LABS includes tests such as creatinine, BUN, cystatin C, and urine protein assessments.'],
    body:[`Los riñones son dos órganos con una tarea primordial: filtrar la sangre y eliminar desechos. También participan en funciones hormonales y en el equilibrio del organismo.`,
    `Cada día filtran grandes cantidades de sangre para producir orina y ayudar a mantener el equilibrio de agua y minerales.`,
    `Los malos hábitos pueden afectar la salud renal. Entre ellos están una dieta alta en sal, ingerir demasiada azúcar, fumar, beber poca agua, la inactividad física y el consumo excesivo de alcohol.`,
    `Los exámenes de sangre y orina permiten evaluar el funcionamiento renal. Entre los análisis mencionados por LABS están creatinina, BUN, cistatina C y evaluaciones de proteínas en orina.`]
},
{
    slug:'4-sintomas-que-debes-saber-sobre-el-dengue',
    title:'4 síntomas que debes saber sobre el dengue',
    date:'05 Mar',
    enDate:'05 Mar',
    tag:'Labs · Nacionales',
    img:'assets/dengue.jpeg',
    intro:'Fiebre alta, dolor de cabeza, dolor muscular y molestias detrás de los ojos son síntomas que requieren atención.',
    enTitle:'4 dengue symptoms you should know',
    enTag:'LABS · National',
    enIntro:'High fever, headache, muscle pain, and discomfort behind the eyes require attention.',
    enBody:['The four highlighted symptoms are high fever, headache, muscle pain, and discomfort behind the eyes. When compatible symptoms appear, it is important to seek medical care and avoid self-medication.',
    'Laboratory tests play a fundamental role in the accurate diagnosis of dengue. LABS offers specific tests such as Dengue anti-IgG, Dengue anti-IgM, and NS1 antigen, according to medical indication.',
    'Preventive measures include eliminating standing water, using repellents, installing mosquito nets, and seeking medical advice when symptoms appear.',
    'Prevention, early detection, and appropriate treatment are important tools in the fight against dengue.'],
    body:[`Los cuatro síntomas destacados son fiebre alta, dolor de cabeza, dolor muscular y molestias detrás de los ojos. Ante síntomas compatibles es importante acudir a un médico y evitar la automedicación.`,
    `Las pruebas de laboratorio desempeñan un papel fundamental en el diagnóstico preciso del dengue. LABS cuenta con pruebas específicas como Dengue anti IgG, Dengue anti IgM y antígeno NS1, según la indicación médica.`,
    `Las medidas preventivas incluyen eliminar aguas estancadas, usar repelentes, instalar mosquiteros y acudir a consulta ante la presencia de síntomas.`,
    `La prevención, la detección temprana y el tratamiento adecuado son herramientas importantes en la lucha contra el dengue.`]
},
{
    slug:'perdiendo-peso-que-examenes-de-laboratorio-necesito',
    title:'Perdiendo peso, ¿qué exámenes de laboratorio necesito?',
    date:'05 Feb',
    enDate:'05 Feb',
    tag:'Exámenes · Labs · Salud',
    img:'assets/examenes.jpeg',
    intro:'Bajar de peso de manera saludable requiere prevención, alimentación equilibrada, ejercicio y seguimiento médico.',
    enTitle:'Losing weight: which laboratory tests do I need?',
    enTag:'Tests · LABS · Health',
    enIntro:'Healthy weight loss requires prevention, a balanced diet, exercise, and medical follow-up.',
    enBody:['Preventive medicine plays an important role. Basic blood, stool, and urine tests can provide information about the body’s condition.',
    'A healthy lifestyle combines a balanced diet, regular exercise, and periodic medical checkups.',
    'Clinical tests can reveal aspects such as glucose levels, lipid profile, food intolerances, and other indicators.',
    'Results should be interpreted with the support of healthcare professionals.'],
    body:[`La medicina preventiva juega un papel importante. Los chequeos y exámenes básicos de sangre, heces y orina pueden aportar información sobre el estado del organismo.`,
    `Un estilo de vida saludable combina dieta equilibrada, ejercicio regular y controles médicos periódicos.`,
    `Los análisis clínicos pueden revelar aspectos como niveles de glucosa, perfil lipídico e intolerancias alimentarias, entre otros indicadores.`,
    `Los resultados deben interpretarse con el acompañamiento de profesionales de la salud.`]
},
{
    slug:'7-examenes-basicos-que-debes-realizarte-en-el-ano',
    title:'7 exámenes básicos que debes realizarte en el año',
    date:'19 Ene',
    enDate:'19 Jan',
    tag:'Exámenes · Labs · Salud',
    img:'assets/examen2.jpeg',
    intro:'Los chequeos preventivos y análisis completos aportan información valiosa sobre el estado general de salud.',
    enTitle:'7 basic tests you should have during the year',
    enTag:'Tests · LABS · Health',
    enIntro:'Preventive checkups and comprehensive analyses provide valuable information about general health.',
    enBody:['A complete blood count evaluates blood cells and is one of the most common basic tests.',
    'A lipid profile provides information about cholesterol and triglyceride levels. Blood glucose is related to the detection and control of diabetes.',
    'Inflammatory markers provide information about inflammation. Vitamins and minerals can also be evaluated.',
    'Urinalysis and stool parasite testing are among the basic analyses described by LABS.',
    'Preparation depends on the test and should follow the laboratory and healthcare professional’s instructions.'],
    body:[`El hemograma completo evalúa las células sanguíneas y es uno de los análisis básicos más habituales.`,
    `El perfil lipídico permite conocer niveles de colesterol y triglicéridos. La glucosa en sangre está relacionada con la detección y control de diabetes.`,
    `Los marcadores inflamatorios aportan información sobre la presencia de inflamación. También pueden evaluarse vitaminas y minerales.`,
    `El elemental físico químico de orina y el coproparasitario forman parte de los análisis básicos descritos por LABS.`,
    `La preparación depende del examen y debe seguir las indicaciones del laboratorio y del profesional de salud.`]
},
{
    slug:'estres-dolor-abdominal-gases-estrenimiento',
    title:'¿Cómo los exámenes revelan el impacto del estrés en tu salud?',
    date:'11 Ene',
    enDate:'11 Jan',
    tag:'Exámenes · Labs · Salud',
    img:'assets/estres1.jpeg',
    intro:'Los niveles altos de estrés pueden relacionarse con trastornos gastrointestinales y otros síntomas.',
    enTitle:'How do tests reveal the impact of stress on your health?',
    enTag:'Tests · LABS · Health',
    enIntro:'High stress levels can be associated with gastrointestinal disorders and other symptoms.',
    enBody:['Described symptoms include abdominal bloating, stomach pain, constipation, stomach pressure, loss of appetite, and dyspepsia.',
    'Medical evaluation may be accompanied by groups of tests such as cortisol, hormone profiles, stool samples, inflammation tests, liver function, and nutrient assessments.',
    'Together, these tests can provide the specialist with information to assess gastrointestinal health.'],
    body:[`Entre los síntomas descritos están hinchazón abdominal, dolor de estómago, estreñimiento, opresión estomacal, falta de apetito y dispepsia.`,
    `La evaluación médica puede acompañarse de grupos de exámenes como cortisol, perfil hormonal, muestras fecales, pruebas de inflamación, función hepática y nutrientes.`,
    `La combinación de estas pruebas puede brindar al especialista información para valorar el estado de salud gastrointestinal.`]
},
{
    slug:'que-se-puede-ver-en-un-hemograma',
    title:'¿Qué se puede ver en un hemograma?',
    date:'22 Dic',
    enDate:'22 Dec',
    tag:'Exámenes · Labs · Salud',
    img:'assets/hemograma.jpeg',
    intro:'El hemograma es uno de los análisis más comunes y aporta información sobre las células sanguíneas.',
    enTitle:'What can be seen in a complete blood count?',
    enTag:'Tests · LABS · Health',
    enIntro:'A complete blood count is one of the most common analyses and provides information about blood cells.',
    enBody:["A complete blood count lets us observe the behavior of red blood cells, white blood cells, and platelets, the main cellular components of blood. These parameters help assess different conditions.",
    "It can provide useful information about hemoglobin, hematocrit, and other blood parameters.",
    "Regular check-ups can help identify alterations at early stages.",
    "The results must be interpreted by a physician, in the clinical context and together with the patient’s symptoms and medical history.",
    "A blood sample is needed for a complete blood count and, according to the information published by LABS, fasting is not required.",
    "LABS provides laboratory testing that supports medical decision-making."],
    body:["El hemograma permite observar el comportamiento de glóbulos rojos, glóbulos blancos y plaquetas, los principales componentes celulares de la sangre. Estos parámetros ayudan a valorar distintas condiciones.",
    "Puede aportar información útil sobre la hemoglobina, el hematocrito y otros parámetros sanguíneos.",
    "Realizarse controles puede contribuir a identificar alteraciones en etapas tempranas.",
    "La interpretación debe estar a cargo de un médico, en el contexto clínico y junto con los síntomas y los antecedentes del paciente.",
    "Para realizar un hemograma se requiere una muestra de sangre y, según la información publicada por LABS, no es necesario estar en ayunas.",
    "LABS ofrece pruebas de laboratorio que apoyan la toma de decisiones médicas."]
},
{
    slug:'los-examenes-de-laboratorio-son-necesarios-y-primordiales',
    title:'Los exámenes de laboratorio son necesarios y primordiales',
    date:'15 Dic',
    enDate:'15 Dec',
    tag:'Labs · Salud',
    img:'assets/examan3.jpeg',
    intro:'Las pruebas de laboratorio aportan información para el diagnóstico, seguimiento y prevención.',
    enTitle:'Laboratory tests are necessary and essential',
    enTag:'Tests · LABS · Health',
    enIntro:'Laboratory tests are an important tool for prevention, diagnosis, monitoring, and treatment follow-up.',
    enBody:["Laboratory tests are performed on samples such as blood, urine, and stool, and can help discover various conditions.",
    "Laboratory testing provides objective information that helps healthcare professionals evaluate a person’s health status.",
    "Diagnostic tests are a support tool for medical decisions and make it possible to evaluate different physiological and biochemical aspects.",
    "Tests can support the detection of alterations before symptoms become evident and can also help monitor known conditions.",
    "The variety of tests available makes it possible to personalize the care approach and contribute to the prevention and management of different conditions.",
    "The appropriate test depends on the clinical situation, symptoms, age, medical history, and professional indication.",
    "Correct preparation and professional interpretation are essential for meaningful results."],
    body:["Los exámenes de laboratorio se realizan a partir de muestras como sangre, orina y heces, y pueden ayudar a descubrir diversas afecciones.",
    "Aportan información objetiva que ayuda a los profesionales de la salud a evaluar el estado de salud de una persona.",
    "Las pruebas diagnósticas son una herramienta de apoyo para las decisiones médicas y permiten evaluar diferentes aspectos fisiológicos y bioquímicos.",
    "Pueden ayudar a detectar alteraciones antes de que los síntomas sean evidentes y también a hacer seguimiento de afecciones conocidas.",
    "La variedad de exámenes disponibles permite personalizar el enfoque de atención y contribuir a la prevención y manejo de distintas afecciones.",
    "El examen adecuado depende de la situación clínica, los síntomas, la edad, los antecedentes médicos y la indicación profesional.",
    "La preparación correcta y la interpretación profesional son esenciales para obtener resultados útiles."]
},
{
    slug:'el-vih-y-el-sida-son-lo-mismo',
    title:'¿El VIH y el SIDA son lo mismo?',
    date:'01 Dic',
    enDate:'01 Dec',
    tag:'Exámenes · Labs · Salud',
    img:'assets/sida.jpeg',
    intro:'VIH y SIDA están relacionados, pero no significan lo mismo.',
    enTitle:'Are HIV and AIDS the same?',
    enTag:'Health · LABS',
    enIntro:'HIV and AIDS are related concepts, but they are not the same.',
    enBody:["HIV is the human immunodeficiency virus. AIDS is the advanced stage of HIV infection, when the immune system has been severely weakened.",
    "An HIV diagnosis does not automatically mean that a person has AIDS. With appropriate treatment and medical follow-up, people living with HIV can maintain their health for many years.",
    "The virus can be transmitted through certain body fluids, and there are sexual, blood-borne, and vertical (mother-to-child) transmission routes.",
    "Laboratory tests are essential for detection, monitoring, and medical follow-up of the infection and of the response to treatment.",
    "If there is a possible exposure or concern, seek professional advice and use the appropriate testing and prevention measures."],
    body:["El VIH es el virus que causa la infección, mientras que el SIDA es un síndrome que puede aparecer en una etapa avanzada de la infección, cuando el sistema inmunitario se ha debilitado gravemente.",
    "Un diagnóstico de VIH no significa automáticamente que la persona tenga SIDA. Con tratamiento adecuado y seguimiento médico, las personas que viven con VIH pueden mantener su salud durante muchos años.",
    "El virus puede transmitirse mediante determinados fluidos corporales y existen vías de transmisión sexual, sanguínea y vertical.",
    "Los exámenes de laboratorio son importantes para detectar y hacer seguimiento de la infección y de la respuesta al tratamiento.",
    "Ante una posible exposición o una inquietud, es recomendable buscar orientación profesional y utilizar las pruebas y medidas de prevención adecuadas."]
}
];
const examsSearch=exams.map((x,i)=>({
    ...x,id:i
}));
const state= {
    selected:new Set()
};
const money=s=>Number(String(s).replace('$','').replace(',','.'));
const fmt=n=>'$'+n.toFixed(2).replace('.',currentLang==='en'?'.':',');
const priceText=x=>currentLang==='en'?x.price.replace(',','.'):x.price;
const examName=x=>currentLang==='en'?(x.en||x.name):x.name;
function esc(s) {
    return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
// Textos de la interfaz en español e inglés; cada clave identifica un texto visible.
const I18N={
 es:{
  topBrand:'HUMANLABS · MEDICINA DIAGNÓSTICA',logoAlt:'LABS Medicina Diagnóstica',ariaHome:'LABS inicio',ariaMenu:'Abrir menú',ariaNav:'Navegación principal',ariaLang:'Cambiar idioma',ariaSlide:'Diapositiva',byLabel:'Por',metaDesc:'LABS Humanlabs Medicina Diagnóstica.',titleHome:'LABS | Medicina Diagnóstica',titleAbout:'Nosotros | LABS',titleNotes:'Notas de salud | LABS',titleContact:'Contactos | LABS',titleQuote:'Cotizador de exámenes | LABS',titleLogin:'Login | LABS',navHome:'Inicio',navAbout:'Nosotros',navNotes:'Notas de salud',navContact:'Contacto',navQuote:'Cotizador de exámenes',login:'Login',loginTitle:'Iniciar sesión',loginLead:'Ingresa con tu cédula y contraseña si tu cuenta está habilitada en el sistema de LABS.',loginCedula:'Cédula',loginPassword:'Contraseña',loginSubmit:'Iniciar sesión',forgotPassword:'¿Olvidaste tu contraseña?',createAccount:'Crear cuenta',loginUnavailable:'Esta web no tiene un servicio de autenticación conectado, por lo que no se enviaron tus credenciales. Para acceder, utiliza el portal actual de LABS.',loginFlowUnavailable:'La recuperación de contraseña y el registro no están integrados en esta web. Consulta el portal actual de LABS o contacta al laboratorio.',loginPortal:'Acceder al portal actual de LABS',
  heroEyebrow:'HUMANLABS · MEDICINA DIAGNÓSTICA',heroTitle:'Su laboratorio de confianza.',heroLead:'Servicios de análisis y diagnósticos clínicos confiables, oportunos y orientados al bienestar de nuestros pacientes.',heroCta:'Conoce más sobre LABS',heroEyebrow2:'CALIDAD · TECNOLOGÍA · CONFIANZA',heroTitle2:'Resultados que ayudan a cuidar tu salud.',heroLead2:'Contamos con tecnología para la toma y procesamiento de muestras y profesionales comprometidos con la calidad.',heroCta2:'Encuentra una sede',heroEyebrow3:'ATENCIÓN · CALIDEZ · PUNTUALIDAD',heroTitle3:'Tu bienestar, con atención cercana.',heroLead3:'Toma de muestras con calidez, puntualidad y rigurosas normas de confidencialidad.',heroCta3:'Cotiza tus exámenes',heroEyebrow4:'EXÁMENES · RIGOR · COMPROMISO',heroTitle4:'Análisis con rigor y compromiso.',heroLead4:'Un servicio completo de exámenes de laboratorio para apoyar el diagnóstico y el cuidado de tu salud.',heroCta4:'Lee nuestras notas de salud',
  homeKicker:'HUMANLABS',homeTitle:'Medicina diagnóstica con confianza.',homeLead:'HUMANLABS Medicina Diagnóstica se establece con el fin de brindar el mejor y más completo servicio de exámenes de laboratorio. Trabajamos con calidad, calidez, puntualidad y rigurosas normas de confidencialidad.',homeCta:'Conoce más sobre nosotros',
  aboutHeroTitle:'HUMANLABS MEDICINA DIAGNÓSTICA',aboutHeroLead:'Su laboratorio de confianza.',aboutKicker:'ACERCA DE NOSOTROS',aboutTitle:'Su laboratorio de confianza.',aboutIntro:'HUMANLABS MEDICINA DIAGNÓSTICA se establece con el fin de brindar el mejor y más completo servicio de exámenes de laboratorio a los ciudadanos de la ciudad de Guayaquil.',missionLabel:'Misión:',missionText:'Somos un laboratorio que cuenta con tecnología para la toma y procesamiento de muestras. Otorgamos servicios de análisis y diagnósticos clínicos confiables, oportunos con altos niveles de ética y calidad. Mediante la calidad de nuestro servicio, brindamos apoyo a los médicos y empresas que confían en los resultados que entregamos, a fin de buscar soluciones tempranas que ayuden al bienestar del paciente.',visionLabel:'Visión:',visionText:'Ampliar la cartera de exámenes clínicos para ofrecer un servicio más completo, aumentar la satisfacción de nuestros pacientes y de esta manera, llegar a ser un laboratorio referente a nivel nacional con presencia en puntos estratégicos del país.',scopeTitle:'Alcance',scopeText:'Proceso de análisis clínico en sus etapas pre-analítico, analítico, post analítico en las líneas de hematología, coagulación, química clínica, hormonas, uroanálisis y parasitología aplicadas a Laboratorio Central.',qualityTitle:'Política de Calidad',qualityText:'Somos un laboratorio clínico confiable que trabaja con calidad, calidez, puntualidad y rigurosas normas de confidencialidad en cada uno de los procesos ejecutados. Nuestro personal capacitado trabaja comprometido con nuestros pacientes, para entregar información clínicamente útil para la toma de decisiones médicas.',continuousTitle:'Mejora continua',continuousText:'En Humanlabs estamos comprometidos con el cumplimiento de los requisitos de nuestras partes interesadas, mediante la mejora continua y cumplimiento de nuestros objetivos.',
  contactHeroTitle:'Contactos',contactHeroLead:'HUMANLABS siempre cerca de ti.',locationsKicker:'ENCUÉNTRANOS EN TU CIUDAD',locationsTitle:'Nuestras sedes',guayaquil:'Guayaquil',principal:'Sede Principal',gyeAddress:'Av. Abel Romeo Castillo y Juan Tanca Marengo, Torre Médica 2, piso 4, consultorios 417 y 418.',gyeHours:'LUN–VIE 06h30–18h00 · SAB 06h30–12h00',quito:'Quito',quitoAddress:'Edificio Instituto de Radiología, Av. Eloy Alfaro 516, 170515 Quito-Alemania, Ecuador.',quitoHours:'LUN–VIE 07h00–16h00',manta:'Manta',mantaAddress:'Edificio Umiñamed, planta baja (misma sede de EndoscopyNet Manta).',mantaHours:'LUN–VIE 07h00–15h40',santoDomingo:'Santo Domingo',santoAddress:'Av. Quito, entre Latacunga e Ibarra.',santoHours:'LUN–VIE 07h30–16h10',milagro:'Milagro',milagroAddress:'Calle 17 de Septiembre, entre Calle Esmeraldas y Guayas, frente a CNEL.',milagroHours:'LUN–VIE 08h00–16h00',hoursLabel:'Horario:',hoursLabel2:'Horario:',hoursLabel3:'Horario:',hoursLabel4:'Horario:',hoursLabel5:'Horario:',contactKicker:'CONTACTO',contactTitle:'Estamos para ayudarte.',nationalCall:'Call Center Nacional:',whatsappWrite:'Escribir en WhatsApp',emailWrite:'Enviar correo',mapButton:'Ver ubicación',contactNameLabel:'Nombres completos',contactCommentLabel:'Comentario o consulta',contactSend:'Enviar consulta',contactFormNote:'Al enviar, se abrirá tu aplicación de correo con la consulta preparada. Deberás confirmar el envío desde allí.',contactFormOpenEmail:'Se abrirá tu aplicación de correo para que revises y confirmes el envío.',contactFormRequired:'Completa todos los campos.',contactFormCedula:'La cédula debe tener 10 dígitos y superar la validación ecuatoriana.',contactFormEmail:'Ingresa un correo electrónico válido.',contactFormPhone:'Ingresa un teléfono válido.',contactFormEmailError:'No se pudo preparar la consulta. Intenta nuevamente.',
  backToNotes:'Volver a Notas de salud',articleNotFound:'No encontramos esta nota.',newsHeroTitle:'Notas de salud',newsHeroLead:'Contenido educativo de LABS para pacientes y familias.',searchPlaceholder:'Buscar aquí',searchButton:'Buscar',noResults:'No encontramos contenidos con ese término.',
  quotePageTitle:'Cotizador de exámenes',quotePageLead:'Busca, selecciona tus exámenes y genera una cotización en PDF.',quoteKicker:'COTIZADOR DE EXÁMENES',quoteTitle:'Consulta y cotiza tus exámenes.',quoteIntro:'Busca un examen, agrégalo individualmente a tu cotización y revisa el total automáticamente.',examSearchPlaceholder:'Buscar examen por nombre',clearSearch:'Limpiar',selectedTitle:'Exámenes seleccionados',selectedLabel:'seleccionados',totalLabel:'TOTAL',clientData:'Datos del cliente',fullName:'Nombre completo',idNumber:'Cédula',email:'Correo electrónico',phone:'Teléfono',generatePdf:'GENERAR COTIZACIÓN PDF',pdfNote:'El PDF incluirá los exámenes seleccionados, precios, total, fecha y tus datos.',add:'Agregar',added:'Agregado',remove:'Eliminar',emptySelected:'Aún no has agregado exámenes.',noExams:'No encontramos exámenes con ese nombre.',
  footerNear:'HUMANLABS siempre cerca de ti.',footerExplore:'EXPLORA',footerLabs:'LABS',footerWho:'Quiénes somos',footerLocations:'Sedes',footerContact:'CONTACTO',whatsapp:'WhatsApp',copyright:'© 2026 HUMANLABS. Todos los Derechos Reservados',diagnostics:'Medicina Diagnóstica',privacyTitle:'Privacidad',privacyText:'Este sitio utiliza cookies necesarias para funcionar y cookies opcionales para mejorar la experiencia.',saveCookies:'GUARDAR Y ACEPTAR',
  pdfTitle:'COTIZACIÓN DE EXÁMENES',pdfClient:'DATOS DEL CLIENTE',pdfExam:'EXAMEN',pdfPrice:'PRECIO',pdfTotal:'TOTAL',pdfDisclaimer:'Este documento corresponde a una solicitud de cotización y no constituye una factura fiscal.',pdfConfirm:'Precios mostrados según el catálogo de cotización utilizado por este sitio; confirme condiciones con LABS.',pdfGenerated:'PDF generado correctamente.',pdfLoad:'No se pudo cargar el generador PDF. Revisa tu conexión a internet.',
  alertName:'Ingresa tu nombre completo.',alertCedula:'La cédula debe contener 10 dígitos.',alertEmail:'Ingresa un correo electrónico válido.',alertPhone:'Ingresa un teléfono válido.',alertExam:'Agrega al menos un examen a la cotización.'
 },
 en:{logoAlt:'LABS Diagnostic Medicine',ariaHome:'LABS home',ariaMenu:'Open menu',ariaNav:'Main navigation',ariaLang:'Change language',ariaSlide:'Slide',byLabel:'By',metaDesc:'LABS Humanlabs Diagnostic Medicine.',titleHome:'LABS | Diagnostic Medicine',titleAbout:'About us | LABS',titleNotes:'Health notes | LABS',titleContact:'Contact | LABS',titleQuote:'Test quotation | LABS',titleLogin:'Login | LABS',
  topBrand:'HUMANLABS · DIAGNOSTIC MEDICINE',navHome:'Home',navAbout:'About us',navNotes:'Health notes',navContact:'Contact',navQuote:'Test quote',login:'Login',loginTitle:'Sign in',loginLead:'Enter your ID number and password if your account is enabled in the LABS system.',loginCedula:'ID number',loginPassword:'Password',loginSubmit:'Sign in',forgotPassword:'Forgot your password?',createAccount:'Create account',loginUnavailable:'This website is not connected to an authentication service, so your credentials were not sent. To access your account, use the current LABS portal.',loginFlowUnavailable:'Password recovery and registration are not integrated into this website. Please use the current LABS portal or contact the laboratory.',loginPortal:'Open the current LABS portal',
  heroEyebrow:'HUMANLABS · DIAGNOSTIC MEDICINE',heroTitle:'Your trusted laboratory.',heroLead:'Reliable and timely clinical analysis and diagnostic services focused on the wellbeing of our patients.',heroCta:'Learn more about LABS',heroEyebrow2:'QUALITY · TECHNOLOGY · TRUST',heroTitle2:'Results that help care for your health.',heroLead2:'We have technology for sample collection and processing, supported by professionals committed to quality.',heroCta2:'Find a location',heroEyebrow3:'CARE · WARMTH · PUNCTUALITY',heroTitle3:'Your wellbeing, with caring attention.',heroLead3:'Sample collection with warmth, punctuality, and strict confidentiality standards.',heroCta3:'Quote your tests',heroEyebrow4:'TESTS · RIGOR · COMMITMENT',heroTitle4:'Analysis with rigor and commitment.',heroLead4:'A complete laboratory testing service to support diagnosis and the care of your health.',heroCta4:'Read our health notes',
  homeKicker:'HUMANLABS',homeTitle:'Diagnostic medicine you can trust.',homeLead:'HUMANLABS Diagnostic Medicine was established to provide citizens with the best and most complete laboratory testing service. We work with quality, warmth, punctuality and strict confidentiality standards.',homeCta:'Learn more about us',
  aboutHeroTitle:'HUMANLABS DIAGNOSTIC MEDICINE',aboutHeroLead:'Your trusted laboratory.',aboutKicker:'ABOUT US',aboutTitle:'Your trusted laboratory.',aboutIntro:'HUMANLABS DIAGNOSTIC MEDICINE was established to provide citizens of Guayaquil with the best and most complete laboratory testing service.',missionLabel:'Mission:',missionText:'We are a laboratory equipped with technology for sample collection and processing. We provide reliable and timely clinical analysis and diagnostic services with high standards of ethics and quality. Through the quality of our service, we support physicians and companies that trust our results, seeking early solutions that contribute to patient wellbeing.',visionLabel:'Vision:',visionText:'Expand our clinical test portfolio to offer a more complete service, increase patient satisfaction and become a nationally recognized laboratory with a presence in strategic locations throughout the country.',scopeTitle:'Scope',scopeText:'Clinical analysis processes in the pre-analytical, analytical and post-analytical stages in hematology, coagulation, clinical chemistry, hormones, urinalysis and parasitology applied at the Central Laboratory.',qualityTitle:'Quality Policy',qualityText:'We are a reliable clinical laboratory that works with quality, warmth, punctuality and strict confidentiality standards in every process. Our trained staff are committed to our patients and to providing clinically useful information for medical decision-making.',continuousTitle:'Continuous improvement',continuousText:'At Humanlabs we are committed to meeting stakeholder requirements through continuous improvement and fulfillment of our objectives.',
  contactHeroTitle:'Contact',contactHeroLead:'HUMANLABS is always close to you.',locationsKicker:'FIND US IN YOUR CITY',locationsTitle:'Our locations',guayaquil:'Guayaquil',principal:'Main Location',gyeAddress:'Av. Abel Romeo Castillo and Juan Tanca Marengo, Torre Médica 2, 4th floor, offices 417 and 418.',gyeHours:'MON–FRI 06:30–18:00 · SAT 06:30–12:00',quito:'Quito',quitoAddress:'Edificio Instituto de Radiología, Av. Eloy Alfaro 516, 170515 Quito-Alemania, Ecuador.',quitoHours:'MON–FRI 07:00–16:00',manta:'Manta',mantaAddress:'Umiñamed Building, ground floor (same location as EndoscopyNet Manta).',mantaHours:'MON–FRI 07:00–15:40',santoDomingo:'Santo Domingo',santoAddress:'Av. Quito, between Latacunga and Ibarra.',santoHours:'MON–FRI 07:30–16:10',milagro:'Milagro',milagroAddress:'17 de Septiembre Street, between Esmeraldas and Guayas, opposite CNEL.',milagroHours:'MON–FRI 08:00–16:00',hoursLabel:'Hours:',hoursLabel2:'Hours:',hoursLabel3:'Hours:',hoursLabel4:'Hours:',hoursLabel5:'Hours:',contactKicker:'CONTACT',contactTitle:'We are here to help.',nationalCall:'National Call Center:',whatsappWrite:'Write on WhatsApp',emailWrite:'Send email',mapButton:'View location',contactNameLabel:'Full name',contactCommentLabel:'Comment or inquiry',contactSend:'Send inquiry',contactFormNote:'When you submit, your email application will open with the inquiry prepared. You must confirm sending there.',contactFormOpenEmail:'Your email application will open so you can review and confirm sending.',contactFormRequired:'Please complete all fields.',contactFormCedula:'The ID number must contain 10 digits and pass Ecuadorian validation.',contactFormEmail:'Enter a valid email address.',contactFormPhone:'Enter a valid phone number.',contactFormEmailError:'The inquiry could not be prepared. Please try again.',
  backToNotes:'Back to health notes',articleNotFound:'We could not find this note.',newsHeroTitle:'Health notes',newsHeroLead:'Educational content from LABS for patients and families.',searchPlaceholder:'Search here',searchButton:'Search',noResults:'No content was found for that term.',
  quotePageTitle:'Test quote',quotePageLead:'Search, select your tests and generate a PDF quotation.',quoteKicker:'TEST QUOTATION',quoteTitle:'Search and quote your tests.',quoteIntro:'Search for a test, add it individually to your quotation and review the total automatically.',examSearchPlaceholder:'Search test by name',clearSearch:'Clear',selectedTitle:'Selected tests',selectedLabel:'selected',totalLabel:'TOTAL',clientData:'Client information',fullName:'Full name',idNumber:'ID number',email:'Email',phone:'Phone',generatePdf:'GENERATE PDF QUOTATION',pdfNote:'The PDF will include selected tests, prices, total, date and your information.',add:'Add',added:'Added',remove:'Remove',emptySelected:'You have not added any tests yet.',noExams:'No tests were found with that name.',
  footerNear:'HUMANLABS is always close to you.',footerExplore:'EXPLORE',footerLabs:'LABS',footerWho:'About us',footerLocations:'Locations',footerContact:'CONTACT',whatsapp:'WhatsApp',copyright:'© 2026 HUMANLABS. All Rights Reserved',diagnostics:'Diagnostic Medicine',privacyTitle:'Privacy',privacyText:'This site uses necessary cookies to operate and optional cookies to improve your experience.',saveCookies:'SAVE AND ACCEPT',
  pdfTitle:'TEST QUOTATION',pdfClient:'CLIENT INFORMATION',pdfExam:'TEST',pdfPrice:'PRICE',pdfTotal:'TOTAL',pdfDisclaimer:'This document is a quotation request and is not a tax invoice.',pdfConfirm:'Prices shown according to the quotation catalog used by this site; please confirm conditions with LABS.',pdfGenerated:'PDF generated successfully.',pdfLoad:'The PDF generator could not be loaded. Please check your internet connection.',
  alertName:'Enter your full name.',alertCedula:'The ID number must contain 10 digits.',alertEmail:'Enter a valid email address.',alertPhone:'Enter a valid phone number.',alertExam:'Add at least one test to the quotation.'
 }
};
let currentLang=localStorage.getItem('labs-language')||'es';
const t=k=>(I18N[currentLang]&&I18N[currentLang][k])||I18N.es[k]||k;
const ES_TITLES={'LABS | Medicina Diagnóstica':'titleHome','Nosotros | LABS':'titleAbout','Notas de salud | LABS':'titleNotes','Contactos | LABS':'titleContact','Cotizador de exámenes | LABS':'titleQuote','Login | LABS':'titleLogin'};
const ES_TITLE_ORIGINAL=document.title;
function applyLanguage(){document.documentElement.lang=currentLang;
 document.querySelectorAll('[data-i18n-aria]').forEach(el=>el.setAttribute('aria-label',t(el.dataset.i18nAria)));
 document.querySelectorAll('[data-i18n-alt]').forEach(el=>el.setAttribute('alt',t(el.dataset.i18nAlt)));
 document.querySelectorAll('.dots button').forEach((d,i)=>d.setAttribute('aria-label',t('ariaSlide')+' '+(i+1)));
 const tk=ES_TITLES[ES_TITLE_ORIGINAL];if(tk)document.title=t(tk);
 const md=document.querySelector('meta[name="description"]');if(md)md.setAttribute('content',t('metaDesc'));
 const qm=document.getElementById('quoteMsg');if(qm)qm.textContent='';
document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(I18N[currentLang][key]!==undefined)el.textContent=I18N[currentLang][key]});document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{const key=el.dataset.i18nPlaceholder;if(I18N[currentLang][key]!==undefined)el.placeholder=I18N[currentLang][key]});document.querySelectorAll('[data-lang-toggle]').forEach(b=>b.textContent=currentLang==='es'?'ES | EN':'EN | ES');renderExamResults(document.getElementById('examSearch')?.value||'');renderSelected();renderNotesList?.(document.getElementById('search')?.value||'');initArticle();localStorage.setItem('labs-language',currentLang);}
function toggleLanguage(){currentLang=currentLang==='es'?'en':'es';applyLanguage();}
function initLanguage(){document.querySelectorAll('[data-lang-toggle]').forEach(b=>b.addEventListener('click',toggleLanguage));applyLanguage();}
function initMenu(){const btn=document.getElementById('menuBtn'),nav=document.getElementById('nav');if(btn&&nav){btn.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');btn.setAttribute('aria-expanded','false')}))}}
function initCookie(){const c=document.getElementById('cookie');if(c&&!localStorage.getItem('labs-cookie'))c.classList.add('show');document.getElementById('acceptCookies')?.addEventListener('click',()=>{localStorage.setItem('labs-cookie','1');c?.classList.remove('show')})}
// Filtra exámenes y dibuja los resultados en el cotizador.
function renderExamResults(q = '') {
  const box = document.getElementById('examResults');
  if (!box) return;

  const term = q.trim().toLowerCase();
  const list = examsSearch
    .filter(exam => !term || (exam.name + ' ' + (exam.en || '')).toLowerCase().includes(term))
    .slice(0, 80);

  box.innerHTML = list.map(exam => `
    <div class="examRow">
      <div>
        <strong>${esc(examName(exam))}</strong>
        <span class="price">${priceText(exam)}</span>
      </div>
      <button
        type="button"
        class="btn smallBtn"
        data-add-exam="${exam.id}"
        ${state.selected.has(exam.id) ? 'disabled' : ''}
      >${state.selected.has(exam.id) ? t('added') : t('add')}</button>
    </div>
  `).join('') || `<p class="emptyState">${t('noExams')}</p>`;

  box.querySelectorAll('[data-add-exam]').forEach(button => {
    button.addEventListener('click', () => {
      state.selected.add(Number(button.dataset.addExam));
      renderExamResults(document.getElementById('examSearch')?.value || '');
      renderSelected();
    });
  });
}

// Redibuja la selección y recalcula el total cada vez que cambia.
function renderSelected() {
  const box = document.getElementById('selectedExams');
  const total = document.getElementById('quoteTotalInline');
  const count = document.getElementById('selectedCount');
  if (!box) return;

  const ids = [...state.selected];
  const selectedExams = ids.map(id => exams[id]);
  const sum = selectedExams.reduce((amount, exam) => amount + money(exam.price), 0);

  if (total) total.textContent = fmt(sum);
  if (count) count.textContent = String(selectedExams.length);

  box.innerHTML = selectedExams.length
    ? selectedExams.map((exam, index) => `
      <div class="selectedRow">
        <div>
          <strong>${esc(examName(exam))}</strong>
          <span class="price">${priceText(exam)}</span>
        </div>
        <button type="button" class="removeExam" data-remove="${ids[index]}">${t('remove')}</button>
      </div>
    `).join('')
    : `<p class="emptyState">${t('emptySelected')}</p>`;

  box.querySelectorAll('[data-remove]').forEach(button => {
    button.addEventListener('click', () => {
      state.selected.delete(Number(button.dataset.remove));
      renderExamResults(document.getElementById('examSearch')?.value || '');
      renderSelected();
    });
  });
}

function isValidEcuadorianCedula(value){
  if(!/^\d{10}$/.test(value))return false;
  const province=Number(value.slice(0,2)),third=Number(value[2]);
  if(province<1||province>24||third>5)return false;
  const digits=value.split('').map(Number);let sum=0;
  for(let i=0;i<9;i++){let n=digits[i]*(i%2===0?2:1);if(n>9)n-=9;sum+=n;}
  const check=(10-(sum%10))%10;
  return check===digits[9];
}
function isValidEmailSyntax(value){
  if(value.length>254||/\\s/.test(value))return false;
  const parts=value.split('@');if(parts.length!==2)return false;
  const [local,domain]=parts;
  if(!local||local.length>64||!domain||domain.length>253)return false;
  if(local.startsWith('.')||local.endsWith('.')||local.includes('..'))return false;
  if(!/^[A-Za-z0-9.!#$%&'*+\\/=?^_`{|}~-]+$/.test(local))return false;
  const labels=domain.split('.');
  if(labels.length<2||labels.some(x=>!x||x.length>63||x.startsWith('-')||x.endsWith('-')||!/^[A-Za-z0-9-]+$/.test(x)))return false;
  return /^[A-Za-z]{2,63}$/.test(labels[labels.length-1]);
}
function validForm(){
  const form=document.getElementById('quoteForm');if(!form)return false;
  const name=form.name.value.trim(),ced=form.cedula.value.trim(),email=form.email.value.trim(),phone=form.phone.value.trim();
  if(name.length<3){alert(t('alertName'));form.name.focus();return false}
  if(!isValidEcuadorianCedula(ced)){alert(t('alertCedula'));form.cedula.focus();return false}
  if(!isValidEmailSyntax(email)){alert(t('alertEmail'));form.email.focus();return false}
  if(!/^0[0-9]{9}$/.test(phone)){alert(t('alertPhone'));form.phone.focus();return false}
  if(!state.selected.size){alert(t('alertExam'));return false}
  return true
}
function imageData(url){return new Promise(resolve=>{const img=new Image();img.crossOrigin='anonymous';img.onload=()=>{try{const c=document.createElement('canvas');c.width=img.naturalWidth;c.height=img.naturalHeight;c.getContext('2d').drawImage(img,0,0);resolve(c.toDataURL('image/png'))}catch(e){resolve(null)}};img.onerror=()=>resolve(null);img.src=url})}
// Prepara y descarga la cotización PDF con los mismos precios del catálogo.
async function generatePDF() {
  if (!validForm()) return;

  if (!window.jspdf) {
    alert(t('pdfLoad'));
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const green = [0, 161, 155];
  const orange = [255, 108, 14];
  const headerBg = [60, 69, 72];
  const dark = [36, 59, 58];
  const data = new FormData(document.getElementById('quoteForm'));
  const selected = [...state.selected].map(i => exams[i]);
  const total = selected.reduce((sum, exam) => sum + money(exam.price), 0);
  const now = new Date();
  const date = now.toLocaleDateString(currentLang === 'es' ? 'es-EC' : 'en-US');
  const code = 'LABS-' + now.getFullYear()
    + String(now.getMonth() + 1).padStart(2, '0')
    + String(now.getDate()).padStart(2, '0')
    + '-' + Math.floor(1000 + Math.random() * 9000);

  doc.setFillColor(...headerBg);
  doc.rect(0, 0, 210, 30, 'F');

  const logoEl = document.querySelector('.footerLogo')
    || document.querySelector('.brandLogo');
  const logo = logoEl ? await imageData(logoEl.src) : null;

  doc.setFillColor(...orange);
  doc.rect(0, 30, 210, 1.6, 'F');

  if (logo) {
    try {
      doc.addImage(logo, 'PNG', 14, 6, 40.5, 18);
    } catch (error) {
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(22);
      doc.setFont('helvetica', 'bold');
      doc.text('LABS', 14, 20);
    }
  } else {
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text('LABS', 14, 20);
  }

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(15);
  doc.setFont('helvetica', 'bold');
  doc.text(t('pdfTitle'), 196, 14, { align: 'right' });
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text(date + ' · ' + code, 196, 22, { align: 'right' });

  let y = 44;
  doc.setTextColor(...dark);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text(t('pdfClient'), 14, y);
  y += 9;
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');

  [
    [t('fullName'), data.get('name')],
    [t('idNumber'), data.get('cedula')],
    [t('email'), data.get('email')],
    [t('phone'), data.get('phone')]
  ].forEach(([label, value]) => {
    doc.setFont('helvetica', 'bold');
    doc.text(label + ':', 14, y);
    doc.setFont('helvetica', 'normal');
    doc.text(String(value), 58, y);
    y += 6;
  });

  y += 5;
  doc.setFillColor(...green);
  doc.rect(14, y - 5, 182, 9, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.text(t('pdfExam'), 18, y + 1);
  doc.text(t('pdfPrice'), 192, y + 1, { align: 'right' });
  y += 12;

  doc.setTextColor(...dark);
  doc.setFont('helvetica', 'normal');
  selected.forEach((exam, index) => {
    if (y > 275) {
      doc.addPage();
      y = 20;
    }

    if (index % 2 === 0) {
      doc.setFillColor(245, 249, 248);
      doc.rect(14, y - 5, 182, 9, 'F');
    }

    doc.text(examName(exam), 18, y + 1);
    doc.text(priceText(exam), 192, y + 1, { align: 'right' });
    y += 9;
  });

  y += 6;
  doc.setDrawColor(...orange);
  doc.line(120, y, 196, y);
  y += 10;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...orange);
  doc.text(t('pdfTotal'), 145, y);
  doc.setTextColor(...dark);
  doc.text(fmt(total), 192, y, { align: 'right' });
  y += 18;

  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 100, 100);
  doc.text(t('pdfDisclaimer'), 14, y);
  doc.text(t('pdfConfirm'), 14, y + 5);
  doc.text(
    'HUMANLABS · '
      + (currentLang === 'es' ? 'Medicina Diagnóstica' : 'Diagnostic Medicine')
      + ' · (+593) 98 509 0215 · info@labs.ec',
    14,
    y + 14
  );

  doc.save(code + '.pdf');
  const message = document.getElementById('quoteMsg');
  if (message) message.textContent = t('pdfGenerated');
}
// Conecta buscador, botones y validaciones del formulario de cotización.
function initQuote(){const search=document.getElementById('examSearch');if(!search)return;renderExamResults();renderSelected();search.addEventListener('input',()=>renderExamResults(search.value));document.getElementById('clearSearch')?.addEventListener('click',()=>{search.value='';renderExamResults()});const cedula=document.querySelector('#quoteForm [name=cedula]');cedula?.addEventListener('input',()=>{const clean=cedula.value.replace(/[^0-9]/g,'').slice(0,10);if(cedula.value!==clean)cedula.value=clean});const phone=document.querySelector('#quoteForm [name=phone]');phone?.addEventListener('input',()=>{const clean=phone.value.replace(/[^0-9]/g,'').slice(0,10);if(phone.value!==clean)phone.value=clean});document.getElementById('quoteForm')?.addEventListener('submit',e=>{e.preventDefault();generatePDF()})}
const noteDate=n=>currentLang==='en'?(n.enDate||n.date):n.date;
const rich=x=>esc(x).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>');
function renderBlocks(arr){return (arr||[]).map(b=>{
 if(typeof b==='string')return '<p>'+rich(b)+'</p>';
 if(b.h2)return '<h2>'+esc(b.h2)+'</h2>';
 if(b.h3)return '<h3>'+esc(b.h3)+'</h3>';
 if(b.ul)return '<ul>'+b.ul.map(li=>'<li>'+rich(li)+'</li>').join('')+'</ul>';
 if(b.ol)return '<ol>'+b.ol.map(li=>'<li>'+rich(li)+'</li>').join('')+'</ol>';
 if(b.quote)return '<blockquote>'+rich(b.quote)+'</blockquote>';
 if(b.img)return '<figure><img src="../../'+esc(b.img)+'" alt="'+esc(b.alt||'')+'">'+(b.caption?'<figcaption>'+esc(b.caption)+'</figcaption>':'')+'</figure>';
 return '';}).join('')}
function renderNotesList(q = '') {
  const box = document.getElementById('notes');
  if (!box) return;

  const term = q.trim().toLowerCase();
  const list = notes.filter(note => {
    const title = currentLang === 'en' ? (note.enTitle || note.title) : note.title;
    const tag = currentLang === 'en' ? (note.enTag || note.tag) : note.tag;
    const intro = currentLang === 'en' ? (note.enIntro || note.intro) : note.intro;
    return (title + ' ' + tag + ' ' + intro).toLowerCase().includes(term);
  });

  box.innerHTML = list.map(note => {
    const title = currentLang === 'en' ? (note.enTitle || note.title) : note.title;
    const tag = currentLang === 'en' ? (note.enTag || note.tag) : note.tag;
    const intro = currentLang === 'en' ? (note.enIntro || note.intro) : note.intro;
    return `
      <a class="noteCard" href="${note.slug}/">
        <img src="../${esc(note.img)}" alt="${esc(note.alt || title)}">
        <div class="noteBody">
          <div class="date">${esc(noteDate(note))} · ${esc(tag)}</div>
          <h3>${esc(title)}</h3>
          <p>${esc(intro)}</p>
        </div>
      </a>
    `;
  }).join('') || `<p class="emptyState">${t('noResults')}</p>`;
}

// Monta una noticia a partir del slug de su carpeta y del arreglo notes.
function initArticle() {
  const box = document.getElementById('article');
  if (!box) return;

  const path = window.location.pathname.replace(/\\/g, '/').replace(/\/$/, '');
  const slug = path.split('/').pop();
  const note = notes.find(item => item.slug === slug);
  if (!note) {
    box.innerHTML = `<p class="emptyState">${esc(t('articleNotFound'))}</p>`;
    return;
  }

  const title = currentLang === 'en' ? (note.enTitle || note.title) : note.title;
  const tag = currentLang === 'en' ? (note.enTag || note.tag) : note.tag;
  const intro = currentLang === 'en' ? (note.enIntro || note.intro) : note.intro;
  const paragraphs = currentLang === 'en' ? (note.enBody || note.body) : note.body;
  const imagePath = '../../' + note.img;
  const body = renderBlocks(paragraphs);

  document.title = title + ' | LABS';
  box.innerHTML = `
    <div class="articleMeta">${esc(noteDate(note))} · ${esc(tag)} · LABS</div>
    <h1>${esc(title)}</h1>
    ${note.author ? `<div class="articleAuthor">${esc(t('byLabel'))} ${esc(note.author)}</div>` : ''}
    <p class="lead">${esc(intro)}</p>
    <img class="articleImage" src="${esc(imagePath)}" alt="${esc(note.alt || title)}">
    <div class="articleBody">${body}</div>
    <p style="margin-top:42px"><a class="btn secondary" href="../">← <span>${esc(t('backToNotes'))}</span></a></p>
  `;
}

function initContactForm(){const form=document.getElementById('contactForm');if(!form)return;const cedula=form.elements.contactCedula;cedula?.addEventListener('input',()=>{const clean=cedula.value.replace(/[^0-9]/g,'').slice(0,10);if(cedula.value!==clean)cedula.value=clean});const phoneField=form.elements.contactPhone;phoneField?.addEventListener('input',()=>{const clean=phoneField.value.replace(/[^0-9]/g,'').slice(0,10);if(phoneField.value!==clean)phoneField.value=clean});form.addEventListener('submit',e=>{e.preventDefault();const msg=document.getElementById('contactFormMsg');if(msg)msg.textContent='';const name=form.elements.contactName.value.trim(),id=cedula.value,email=form.elements.contactEmail.value.trim(),phone=form.elements.contactPhone.value.trim(),comment=form.elements.contactComment.value.trim();if(!name||!id||!email||!phone||!comment){if(msg)msg.textContent=t('contactFormRequired');return}if(!isValidEcuadorianCedula(id)){if(msg)msg.textContent=t('contactFormCedula');cedula.focus();return}if(!form.elements.contactEmail.checkValidity()||!isValidEmailSyntax(email)){if(msg)msg.textContent=t('contactFormEmail');form.elements.contactEmail.focus();return}if(!/^0[0-9]{9}$/.test(phone)){if(msg)msg.textContent=t('contactFormPhone');form.elements.contactPhone.focus();return}const subject=encodeURIComponent('Consulta desde la página web de LABS');const body=encodeURIComponent('Nombres completos: '+name+'\nCédula: '+id+'\nTeléfono: '+phone+'\nCorreo electrónico: '+email+'\n\nComentario o consulta:\n'+comment);if(msg)msg.textContent=t('contactFormOpenEmail');window.location.href='mailto:info@labs.ec?subject='+subject+'&body='+body})}

function initNotesSearch(){
  const search = document.getElementById('search');
  const button = document.getElementById('searchBtn');
  if (!search) return;
  search.addEventListener('input', () => renderNotesList(search.value));
  button?.addEventListener('click', () => renderNotesList(search.value));
}
function initLogin(){const form=document.getElementById('loginForm');if(!form)return;const notice=document.getElementById('loginNotice');const show=(key)=>{if(notice){notice.hidden=false;notice.querySelector('[data-login-message]').textContent=t(key);}};form.addEventListener('submit',e=>{e.preventDefault();show('loginUnavailable')});document.querySelectorAll('[data-login-flow]').forEach(link=>link.addEventListener('click',e=>{e.preventDefault();show('loginFlowUnavailable')}));}
function initHome(){const slides=[...document.querySelectorAll('.slide')],dots=[...document.querySelectorAll('.dots button')];if(slides.length){let idx=0;const go=i=>{idx=i;slides.forEach((s,j)=>s.classList.toggle('active',j===i));dots.forEach((d,j)=>d.classList.toggle('active',j===i))};dots.forEach(d=>d.addEventListener('click',()=>go(+d.dataset.i)));setInterval(()=>go((idx+1)%slides.length),6000)}}
document.addEventListener('DOMContentLoaded',()=>{initMenu();initCookie();initLanguage();initQuote();initContactForm();initLogin();initHome();initNotesSearch();renderNotesList(document.getElementById('search')?.value || '');initArticle()});
