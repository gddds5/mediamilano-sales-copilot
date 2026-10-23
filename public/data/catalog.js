/* EDITABILE: catalogo e domande commerciali. Non modificare app.js per aggiornare i servizi. */
window.SALES_CONFIG = {
  "services": [
    {
      "id": "bclear",
      "name": "B-CLEAR",
      "url": "https://bclear.bravissima.ai/",
      "tagline": "Riconciliazione intelligente del ciclo passivo",
      "category": "Amministrazione e acquisti",
      "summary": "Riconcilia ordini, DDT e fatture fornitori; segnala difformità e riduce i controlli manuali.",
      "pitch": "Partiamo dal tempo speso a confrontare ordini, DDT e fatture: B-CLEAR struttura e riconcilia i documenti, evidenziando le eccezioni da verificare.",
      "steps": [
        "Quantificare i documenti del ciclo passivo gestiti ogni mese",
        "Verificare i formati disponibili (ERP, PDF, email, scansioni)",
        "Organizzare una demo su un caso reale"
      ],
      "requirements": [
        "Disponibilità di ordini, DDT e fatture da confrontare"
      ],
      "complements": [
        "mida",
        "aiquery"
      ]
    },
    {
      "id": "mida",
      "name": "MIDA.AI",
      "url": "https://mida.bravissima.ai/",
      "tagline": "Controllo di gestione e forecasting",
      "category": "Direzione e controllo",
      "summary": "Integra dati economici, commerciali e produttivi per KPI, margini, forecast e simulazioni.",
      "pitch": "Con MIDA colleghiamo le fonti economiche e operative per rendere visibili margini e scenari futuri in cruscotti per il management.",
      "steps": [
        "Identificare KPI e decisioni oggi difficili",
        "Verificare le fonti contabili e gestionali disponibili",
        "Definire una prima dashboard pilota"
      ],
      "requirements": [
        "Fonti economiche o operative sufficienti per l’analisi"
      ],
      "complements": [
        "aiquery",
        "bclear"
      ]
    },
    {
      "id": "aiquery",
      "name": "AI-QUERY",
      "url": "https://ai-query.ai/",
      "tagline": "Interrogazione e automazione dei dati aziendali",
      "category": "Dati e report",
      "summary": "Interroga sistemi informativi in linguaggio naturale e genera report, grafici, alert e attività programmate.",
      "pitch": "AI-QUERY rende più accessibili dati distribuiti tra sistemi e file, per ottenere rapidamente analisi e report senza nuove estrazioni manuali.",
      "steps": [
        "Elencare database, CRM e file da connettere",
        "Raccogliere tre domande sui dati ricorrenti",
        "Preparare una dimostrazione su dati di esempio"
      ],
      "requirements": [
        "Presenza di fonti dati interrogabili o integrabili"
      ],
      "complements": [
        "mida",
        "4sales"
      ]
    },
    {
      "id": "door",
      "name": "D.O.O.R.",
      "url": "",
      "tagline": "Da richieste e documenti a offerte e ordini",
      "category": "Offerte e ordini",
      "summary": "Elabora richieste da email o file, le abbina a clienti e listini e prepara documenti verificabili dagli operatori.",
      "pitch": "D.O.O.R. riduce le trascrizioni ripetitive nella preparazione delle offerte partendo direttamente dalle richieste ricevute.",
      "steps": [
        "Raccogliere esempi di email e richieste tipiche",
        "Verificare listini, anagrafiche e processo di approvazione",
        "Valutare integrazione con ERP e flusso ordini"
      ],
      "requirements": [
        "Esempi di richieste, listini o cataloghi per un caso pilota"
      ],
      "complements": [
        "4sales",
        "bclear"
      ]
    },
    {
      "id": "4sales",
      "name": "4Sales.ai",
      "url": "https://4sales.ai/",
      "tagline": "Gestione intelligente della pipeline commerciale",
      "category": "Vendite e CRM",
      "summary": "Organizza clienti, opportunità, follow-up e attività di reti commerciali; aiuta a prioritizzare le azioni.",
      "pitch": "4Sales aiuta la rete commerciale a non perdere opportunità e a pianificare ricontatti con una pipeline monitorabile.",
      "steps": [
        "Mappare numero di commerciali e modalità di lavoro",
        "Verificare CRM, fogli Excel e processo di follow-up",
        "Preparare una demo della pipeline"
      ],
      "requirements": [
        "Presenza di un processo di vendita o gestione contatti"
      ],
      "complements": [
        "door",
        "aiquery"
      ]
    }
  ],
  "areas": [
    {
      "id": "bclear",
      "title": "Amministrazione: controlli su fatture, ordini e DDT",
      "screen": "Ci sono problemi o lavoro manuale nel controllo dei documenti fornitori?",
      "details": [
        {
          "id": "bclear_volume",
          "title": "Quanto è oneroso il confronto tra ordini, DDT e fatture?",
          "options": [
            [
              "Molto manuale o frequente",
              4
            ],
            [
              "Parzialmente manuale",
              2
            ],
            [
              "Già automatizzato e soddisfacente",
              0
            ]
          ]
        },
        {
          "id": "bclear_errors",
          "title": "Quanto spesso emergono discrepanze tra documenti?",
          "options": [
            [
              "Spesso",
              4
            ],
            [
              "A volte",
              2
            ],
            [
              "Raramente",
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "mida",
      "title": "Direzione: margini, budget e forecast",
      "screen": "C’è difficoltà a controllare margini, costi o risultati futuri?",
      "details": [
        {
          "id": "mida_control",
          "title": "Come misurate redditività e scostamenti?",
          "options": [
            [
              "Report manuali o visibilità limitata",
              4
            ],
            [
              "Cruscotti incompleti",
              2
            ],
            [
              "Cruscotti soddisfacenti",
              0
            ]
          ]
        },
        {
          "id": "mida_forecast",
          "title": "Servono previsioni o simulazioni di scenario?",
          "options": [
            [
              "Sì, priorità alta",
              4
            ],
            [
              "Potrebbero essere utili",
              2
            ],
            [
              "Non servono",
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "aiquery",
      "title": "Dati: report e interrogazioni",
      "screen": "È difficile ottenere dati, report o alert da sistemi differenti?",
      "details": [
        {
          "id": "aiquery_access",
          "title": "Come vengono estratte oggi le informazioni?",
          "options": [
            [
              "Serve spesso IT o lavoro manuale",
              4
            ],
            [
              "Alcuni report già pronti ma non sufficienti",
              2
            ],
            [
              "Accesso immediato e sufficiente",
              0
            ]
          ]
        },
        {
          "id": "aiquery_auto",
          "title": "Quanto servono report schedulati o notifiche KPI?",
          "options": [
            [
              "Molto",
              4
            ],
            [
              "In parte",
              2
            ],
            [
              "Non servono",
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "door",
      "title": "Operazioni commerciali: preventivi e ordini",
      "screen": "Preparare preventivi e ordini a partire da richieste è lento o manuale?",
      "details": [
        {
          "id": "door_manual",
          "title": "Come vengono convertite le richieste in preventivi?",
          "options": [
            [
              "Trascrizione manuale da email o file",
              4
            ],
            [
              "Processo parzialmente automatizzato",
              2
            ],
            [
              "Processo già efficiente",
              0
            ]
          ]
        },
        {
          "id": "door_catalog",
          "title": "Serve controllare listini, prodotti e anagrafiche?",
          "options": [
            [
              "Sì, per molte richieste",
              4
            ],
            [
              "Solo in alcuni casi",
              2
            ],
            [
              "Quasi mai",
              0
            ]
          ]
        }
      ]
    },
    {
      "id": "4sales",
      "title": "Vendite: pipeline e follow-up",
      "screen": "Gestire lead, trattative o ricontatti è un problema?",
      "details": [
        {
          "id": "4sales_pipeline",
          "title": "Come gestite trattative e opportunità?",
          "options": [
            [
              "Excel o strumenti separati",
              4
            ],
            [
              "CRM con limiti operativi",
              2
            ],
            [
              "CRM già adeguato",
              0
            ]
          ]
        },
        {
          "id": "4sales_followup",
          "title": "Come gestite i follow-up?",
          "options": [
            [
              "Manuali, spesso si perdono",
              4
            ],
            [
              "Promemoria parziali",
              2
            ],
            [
              "Gestione soddisfacente",
              0
            ]
          ]
        }
      ]
    }
  ],
  "screenOptions": [
    [
      "Problema importante / priorità alta",
      5
    ],
    [
      "Da migliorare / opportunità",
      3
    ],
    [
      "Non è un problema",
      0
    ],
    [
      "Non so / da approfondire",
      null
    ]
  ]
};
