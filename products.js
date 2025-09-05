const productsData = {
  "television": [
    { 
      id: "tv1", 
      name: "Samsung QLED 50",
      price: 50000, 
      images: 
      [
       "https://m.media-amazon.com/images/I/41LnmGoTAvL._SX300_SY300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/81CcO6WoJiL._SY355_.jpg"
      ],
      description: "50 inch Samsung QLED TV with vibrant colors and smart features.", 
      specification: { 
        brand: "Samsung", 
        model: "QLED 50",
        resolution: "4K", 
        screenSize: "50 inch",
        smartTV: true,
        weight: "15kg"
      }
    },

    { 
      id: "tv2",
      name: "LG OLED 55", 
      price: 65000, 
      images: 
      [
        "https://m.media-amazon.com/images/I/51Y20IQzmdL._SX300_SY300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/71rlzAFhoIL._SY355_.jpg"
      ],
       description: "55 inch LG OLED TV with deep blacks and smart features.",
      specification: {
         brand: "LG",
         model: "OLED 55", 
         resolution: "4K", 
         screenSize: "55 inch", 
         smartTV: true, 
         weight: "16kg" 
        } 
    },
    { 
      id: "tv3",
      name: "Sony Bravia 50", 
      price: 60000, 
      images: 
      [
        "https://m.media-amazon.com/images/I/513B5KOD2VL._SX300_SY300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/81W8m6EDtrL._SY355_.jpg"
      ], 
      description: "Sony Bravia TV with excellent color accuracy and smart features.", 
      specification: { 
        brand: "Sony", 
        model: "Bravia 50", 
        resolution: "4K", 
        screenSize: "50 inch", 
        smartTV: true, 
        weight: "14.5kg" 
      } 
    },

    { 
      id: "tv4", 
      name: "Panasonic 49", 
      price: 40000, 
      images: [
        "https://m.media-amazon.com/images/I/81kIGY7STpL._SY355_.jpg",
        "https://m.media-amazon.com/images/I/81p8TBhJTXL._SL1500_.jpg"
      ], 
      description: "Affordable Panasonic 49 inch TV with clear display and smart options.",
      specification: { 
        brand: "Panasonic", 
        model: "49", 
        resolution: "Full HD", 
        screenSize: "49 inch", 
        smartTV: true, 
        weight: "14kg" 
      } 
    },

    { 
      id: "tv5", 
      name: "TCL 50S", 
      price: 30000, 
      images: [
        "https://m.media-amazon.com/images/I/71HEG4ks07L._SX355_.jpg",
        "https://m.media-amazon.com/images/I/81-7JXs13-L._SL1500_.jpg"
      ], 
      description: "Budget-friendly TCL 50 inch TV with decent display and smart features.", 
      specification: { 
        brand: "TCL", 
        model: "50S", 
        resolution: "Full HD", 
        screenSize: "50 inch", 
        smartTV: true, 
        weight: "13kg" 
      } 
    }
  ],

  "laptop": [
    { 
      id: "laptop1", 
      name: "Dell Inspiron 15",
      price: 60000, 
      images: [
        "https://m.media-amazon.com/images/I/7196KacSGQL._SX425_.jpg",
        "https://m.media-amazon.com/images/I/814HgUR0+LL._SX425_.jpg"
      ], 
      description: "Reliable Dell Inspiron 15 laptop for work and entertainment.", 
      specification: { 
        brand: "Dell", 
        model: "Inspiron 15", 
        ram: "8GB", 
        storage: "512GB SSD", 
        processor: "Intel i5", 
        weight: "2kg" 
      } 
    },

    { 
      id: "laptop2", 
      name: "HP Pavilion 14", 
      price: 55000, 
      images: [
        "https://m.media-amazon.com/images/I/618zAXbM4uL._SX425_.jpg",
        "https://m.media-amazon.com/images/I/719dgZqJJBL._SX425_.jpg"
      ],
       description: "HP Pavilion 14 laptop with sleek design and powerful performance.", 
       specification: { 
        brand: "HP", 
        model: "Pavilion 14", 
        ram: "8GB", 
        storage: "512GB SSD", 
        processor: "Intel i5", 
        weight: "1.8kg" 
      }
   },

    { 
      id: "laptop3", 
      name: "Lenovo ThinkPad X1", 
      price: 90000, 
      images: [
        "https://m.media-amazon.com/images/I/31aUue+tRIL._SY300_SX300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/51S5A5dChnL._SX425_.jpg"
      ], 
      description: "Premium Lenovo ThinkPad X1 for business and productivity.", 
      specification: { 
        brand: "Lenovo", 
        model: "ThinkPad X1", 
        ram: "16GB", 
        storage: "1TB SSD", 
        processor: "Intel i7", 
        weight: "1.4kg" 
      } 
  },
    { 
      id: "laptop4", 
      name: "Asus ZenBook 13",
      price: 70000, 
      images: [
       "https://m.media-amazon.com/images/I/51A82yIkqCL._SX425_.jpg",
       "https://m.media-amazon.com/images/I/31Wmh6qtfcL._SX425_.jpg"
      ], 
      description: "Lightweight Asus ZenBook 13 with long battery life.",
      specification: { 
        brand: "Asus", 
        model: "ZenBook 13", 
        ram: "8GB", 
        storage: "512GB SSD", 
        processor: "Intel i5", 
        weight: "1.2kg" 
      } 
  },

    { 
      id: "laptop5", 
      name: "Acer Swift 3", 
      price: 50000, 
      images: [
        "https://m.media-amazon.com/images/I/51SGKSn0BtL._SX300_SY300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/71-0mKbxO7L._SL1500_.jpg"
      ], 
      description: "Budget-friendly Acer Swift 3 with solid performance.", 
      specification: { 
        brand: "Acer", 
        model: "Swift 3", 
        ram: "8GB", 
        storage: "256GB SSD", 
        processor: "Intel i5", 
        weight: "1.25kg" 
      }
    }
  ],

  "speaker": [
    { 
      id: "speaker1", 
      name: "JBL Flip 6", 
      price: 7000, 
      images: [
        "https://m.media-amazon.com/images/I/41QBa9gm++L._SY300_SX300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/813IarPMYPL._SY450_.jpg"
      ], 
      description: "Portable JBL Flip 6 speaker with excellent bass and waterproof design.", 
      specification: { 
        brand: "JBL", 
        model: "Flip 6", 
        wireless: true, 
        batteryLife: "12 hours", 
        weight: "540g" 
      } 
  },
    { 
      id: "speaker2", 
      name: "Bose SoundLink Mini II", 
      price: 12000, 
      images: [
       "https://m.media-amazon.com/images/I/41hUgnmiplL._SY300_SX300_QL70_FMwebp_.jpg",
       "https://m.media-amazon.com/images/I/71cGncF-Z9L._SY450_.jpg"
      ], 
      description: "Compact Bose speaker with rich sound and Bluetooth connectivity.", 
      specification: { 
        brand: "Bose", 
        model: "SoundLink Mini II", 
        wireless: true, 
        batteryLife: "10 hours", 
        weight: "680g" 
      } 
  },

    { 
      id: "speaker3", 
      name: "Sony SRS-XB43", 
      price: 15000, 
      images: [
        "https://m.media-amazon.com/images/I/417lInhb1NL._SY300_SX300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/81Hh4Ac61WL._SY450_.jpg"
      ], 
      description: "Sony extra bass portable speaker with waterproof design.", 
      specification: { 
        brand: "Sony", 
        model: "SRS-XB43", 
        wireless: true, 
        batteryLife: "24 hours", 
        weight: "1.4kg" 
      } 
    },

    { 
      id: "speaker4", 
      name: "Ultimate Ears Boom 3", 
      price: 13000, 
      images: [
        "https://m.media-amazon.com/images/I/41DH3N6YWuL._SY300_SX300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/715-g4jPpbL._SY450_.jpg"
      ], 
      description: "Rugged UE Boom 3 speaker with 360° sound.", 
      specification: { 
        brand: "UE", 
        model: "Boom 3", 
        wireless: true, 
        batteryLife: "15 hours", 
        weight: "608g" 
      } 
    },

    { 
      id: "speaker5", 
      name: "Anker Soundcore Flare 2",
      price: 6000, 
      images: [
        "https://m.media-amazon.com/images/I/41C+eH2fELL._SY300_SX300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/411tVfycIDL.jpg"
      ], 
      description: "Affordable Anker portable speaker with LED lights and good bass.", 
      specification: { 
        brand: "Anker", 
        model: "Soundcore Flare 2", 
        wireless: true, 
        batteryLife: "12 hours", 
        weight: "530g" 
      } 
    }
  ],

  "headphone": [
    { 
      id: "headphone1", 
      name: "Sony WH-1000XM5", 
      price: 25000, 
      images: [
       "https://m.media-amazon.com/images/I/31vOBg8cPaL._SY300_SX300_QL70_FMwebp_.jpg",
       "https://m.media-amazon.com/images/I/81+4fB1ehJL._SY355_.jpg" ], 
      description: "Industry leading noise cancelling headphones with superior sound quality.",
      specification: { 
        brand: "Sony", 
        model: "WH-1000XM5", 
        color: "Black", 
        batteryLife: "30 hours", 
        wireless: true, 
        weight: "250g" 
      } 
    },

    { 
      id: "headphone2", 
      name: "Bose QuietComfort 45", 
      price: 24000, 
      images: [
        "https://m.media-amazon.com/images/I/31+fg95OcqL._SY300_SX300_QL70_FMwebp_.jpg",
         "https://m.media-amazon.com/images/I/615c64LJhBL._SY355_.jpg"], 
        description: "Comfortable and high-quality noise cancelling headphones by Bose.", 
        specification: { 
          brand: "Bose", 
          model: "QuietComfort 45", 
          color: "Silver", 
          batteryLife: "24 hours", 
          wireless: true, 
          weight: "235g" 
        } 
      },

    { 
      id: "headphone3", 
      name: "Apple AirPods Max", 
      price: 55000, 
      images: [
        "https://m.media-amazon.com/images/I/71QFjliR-ML._SX425_.jpg",
         "https://m.media-amazon.com/images/I/713vj053ZTL._SX425_.jpg"], 
        description: "Premium over-ear headphones with spatial audio and active noise cancellation.", 
        specification: {
          brand: "Apple", 
          model: "AirPods Max", 
          color: "Space Gray", 
          batteryLife: "20 hours", 
          wireless: true, 
          weight: "384g" 
        } 
    },
    { 
      id: "headphone4", 
      name: "Sennheiser Momentum 4", 
      price: 35000, 
      images: [
        "https://m.media-amazon.com/images/I/51+6hGEZFLL._SY355_.jpg",
         "https://m.media-amazon.com/images/I/51ACScRmBCL._SY355_.jpg"], 
        description: "High-fidelity headphones with adaptive noise cancellation and long battery life.", 
        specification: { 
          brand: "Sennheiser", 
          model: "Momentum 4", 
          color: "Black", 
          batteryLife: "30 hours", 
          wireless: true, 
          weight: "305g" 
        } 
    },
    { 
      id: "headphone5", 
      name: "JBL Live 660NC", 
      price: 15000, 
      images: [
        "https://m.media-amazon.com/images/I/71dnHOwbEqL._SY355_.jpg",
        "https://m.media-amazon.com/images/I/71jY7dL3IaL._SY355_.jpg"], 
        description: "Affordable noise-cancelling headphones with JBL signature sound.",
       specification: { 
        brand: "JBL", 
        model: "Live 660NC", 
        color: "Black", 
        batteryLife: "40 hours", 
        wireless: true, 
        weight: "275g" 
      } 
  }
  ],

  "smartphone": [
    { 
      id: "phone1", 
      name: "iPhone 14 Pro", 
      price: 120000, 
      images: [
        "https://m.media-amazon.com/images/I/412CKVTe8dL._SX342_SY445_QL70_FMwebp_.jpg",
         "https://m.media-amazon.com/images/I/51nZVUtGqOL._SX466_.jpg",
        "https://m.media-amazon.com/images/I/61csXBvcW8L._SX466_.jpg"],
        description: "Apple iPhone 14 Pro with A16 Bionic chip and ProMotion display.", 
        specification: { 
          brand: "Apple", 
          model: "iPhone 14 Pro", 
          color: "Space Black", 
          storage: "128GB", 
          ram: "6GB", 
          battery: "3200mAh" 
        } 
      },

    { 
      id: "phone2", 
      name: "Samsung Galaxy S23", 
      price: 90000, 
      images: [
        "https://m.media-amazon.com/images/I/41KvOkz7rYL._SY300_SX300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/71UgLUxvkzL._SX522_.jpg"], 
        description: "Samsung Galaxy S23 with Snapdragon 8 Gen 2 and 120Hz AMOLED display.", 
        specification: { 
          brand: "Samsung", 
          model: "Galaxy S23", 
          color: "Green", 
          storage: "256GB", 
          ram: "8GB", 
          battery: "3900mAh" 
        } 
    },

    { 
      id: "phone3", 
      name: "OnePlus 11", 
      price: 55000, 
      images: [
        "https://m.media-amazon.com/images/I/414+xRBltFL._SY300_SX300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/51pJKV6eUhL._SX522_.jpg"], 
        description: "OnePlus 11 with Snapdragon 8 Gen 2 and Hasselblad Camera.", 
        specification: { 
          brand: "OnePlus", 
          model: "11", 
          color: "Titanium", 
          storage: "256GB", 
          ram: "12GB", 
          battery: "5000mAh" 
        } 
    },

    { 
      id: "phone4", 
      name: "Google Pixel 7", 
      price: 60000, 
      images: [
       "https://m.media-amazon.com/images/I/51IS4vxjlLL._SX522_.jpg",
       "https://m.media-amazon.com/images/I/41eaiPHGfrL._SY606_.jpg"], 
        description: "Google Pixel 7 with clean Android experience and excellent camera.", 
        specification: { 
          brand: "Google", 
          model: "Pixel 7", 
          color: "Obsidian", 
          storage: "128GB", 
          ram: "8GB", 
          battery: "4355mAh" 
        } 
    },

    { 
      id: "phone5",
      name: "Xiaomi 13 Pro",
       price: 50000, 
       images: [
        "https://m.media-amazon.com/images/I/71r41+TT2UL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61ppipD5ROL._SX569_.jpg"], 
        description: "Xiaomi 13 Pro with AMOLED display and fast charging.", 
        specification: { 
          brand: "Xiaomi", 
          model: "13 Pro", 
          color: "Black", 
          storage: "256GB", 
          ram: "12GB", 
          battery: "4820mAh" 
        } 
    }
  ],

  "AC": [
    { 
      id: "ac1", 
      name: "LG Dual Inverter 1.5 Ton", 
      price: 45000, 
      images: [
        "https://m.media-amazon.com/images/I/61JZ82cn8WL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/81ZHEOtj43L._SX522_.jpg"], 
        description: "Energy-efficient AC with dual inverter technology.", 
        specification: { 
          brand: "LG", 
          capacity: "1.5 Ton", 
          type: "Split", 
          powerConsumption: "1350W", 
          color: "White" 
        } 
    },

    { 
      id: "ac2", 
      name: "Voltas 1.5 Ton Split AC", 
      price: 40000, 
      images: [
        "https://m.media-amazon.com/images/I/515t3+6W+hL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/71HwucRW7XL._SX522_.jpg"], 
        description: "Reliable Voltas AC with fast cooling and low noise.", 
        specification: { 
          brand: "Voltas", 
          capacity: "1.5 Ton", 
          type: "Split", 
          powerConsumption: "1400W", 
          color: "White" 
        } 
    },

    { 
      id: "ac3", 
      name: "Blue Star 1 Ton Inverter AC", 
      price: 35000, 
      images: [
       "https://m.media-amazon.com/images/I/51In2t1YlPL._SX522_.jpg",
       "https://m.media-amazon.com/images/I/71QCoQqYdbL._SX522_.jpg"], 
        description: "Blue Star AC with efficient cooling and inverter technology.", 
        specification: { 
          brand: "Blue Star", 
          capacity: "1 Ton", 
          type: "Split", 
          powerConsumption: "1200W", 
          color: "White" 
        } 
    },

    { 
      id: "ac4", 
      name: "Samsung 1.5 Ton Split AC", 
      price: 42000, 
      images: [
        "https://m.media-amazon.com/images/I/518jz8du8UL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/819UnExJRsL._SX522_.jpg"], 
        description: "Samsung AC with digital inverter and smart cooling.", 
        specification: { 
        brand: "Samsung",
        capacity: "1.5 Ton", 
        type: "Split", 
        powerConsumption: "1300W", 
        color: "White" 
      } 
  },

    { 
      id: "ac5", 
      name: "Hitachi 1.2 Ton Split AC", 
      price: 38000, 
      images: [
        "https://m.media-amazon.com/images/I/51rZMGxYJ7L._SX522_.jpg",
        "https://m.media-amazon.com/images/I/71QY5iRl+1L._SX522_.jpg"], 
        description: "Hitachi AC with powerful cooling and eco-friendly refrigerant.", 
        specification: { 
          brand: "Hitachi", 
          capacity: "1.2 Ton", 
          type: "Split", 
          powerConsumption: "1250W", 
          color: "White" 
        } 
    }
  ],

  "watch": [
    { 
      id: "watch1", 
      name: "Apple Watch Series 9", 
      price: 45000, 
      images: [
        "https://m.media-amazon.com/images/I/61I431q8rhL._SX466_.jpg",
        "https://m.media-amazon.com/images/I/71bPEpH1OUL._SX466_.jpg"], 
        description: "Apple Watch Series 9 with health tracking and smartwatch features.", 
        specification: { 
          brand: "Apple", 
          model: "Series 9", 
          color: "Silver", 
          connectivity: "Bluetooth, Wi-Fi", 
          waterResistant: true 
        } 
    },

    { 
      id: "watch2", 
      name: "Samsung Galaxy Watch 6", 
      price: 30000, 
      images: [
        "https://m.media-amazon.com/images/I/419KmSr44oL._SY300_SX300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/61WzJJn0ncL._SX425_.jpg"], 
        description: "Samsung Galaxy Watch 6 with fitness tracking and AMOLED display.", 
        specification: { 
          brand: "Samsung", 
          model: "Galaxy Watch 6", 
          color: "Black", 
          connectivity: "Bluetooth, Wi-Fi", 
          waterResistant: true 
        } 
    },
    { 
      id: "watch3", 
      name: "Fossil Gen 6", 
      price: 18000, 
      images: [
       "https://m.media-amazon.com/images/I/51yI829dMoL._SY355_.jpg",
       "https://m.media-amazon.com/images/I/51SF-2dX9EL._SY355_.jpg"], 
        description: "Fossil smartwatch with stylish design and fitness features.", 
        specification: { 
          brand: "Fossil", 
          model: "Gen 6", 
          color: "Brown", 
          connectivity: "Bluetooth", 
          waterResistant: true 
        } 
    },

    { 
      id: "watch4", 
      name: "Garmin Venu 2", 
      price: 25000, 
      images: [
        "https://m.media-amazon.com/images/I/71PElcRFwrL._SX425_.jpg",
        "https://m.media-amazon.com/images/I/71H1vaTtFtL._SX425_.jpg"], 
        description: "Garmin Venu 2 for fitness enthusiasts with AMOLED display.", 
        specification: { 
          brand: "Garmin", 
          model: "Venu 2", 
          color: "Black", 
          connectivity: "Bluetooth", 
          waterResistant: true 
        } 
    },

    { 
      id: "watch5", 
      name: "Noise ColorFit Pro 4", 
      price: 5000, 
      images: [
        "https://m.media-amazon.com/images/I/61HSmreVWrL._SX425_.jpg",
        "https://m.media-amazon.com/images/I/61YtsnlkACL._SX425_.jpg"], 
        description: "Affordable Noise smartwatch with health monitoring features.", 
        specification: { 
          brand: "Noise", 
          model: "ColorFit Pro 4", 
          color: "Black", 
          connectivity: "Bluetooth", 
          waterResistant: true 
        } 
    }],

  "refrigerator": [
    { 
      id: "fridge1", 
      name: "LG 260L Frost Free", 
      price: 25000, 
      images: [
        "https://m.media-amazon.com/images/I/61DIrcgNQuL._SY550_.jpg",
        "https://m.media-amazon.com/images/I/61Ybcc+b9nL._SX522_.jpg"], 
        description: "LG 260L Frost Free Refrigerator with smart inverter technology.", 
        specification: { 
          brand: "LG", 
          capacity: "260L", 
          type: "Frost Free", 
          color: "Silver", 
          energyRating: "4 Star" 
        } 
    },

    { 
      id: "fridge2",
      name: "Samsung 253L Frost Free",
      price: 24000, 
      images: [
        "https://m.media-amazon.com/images/I/31KgTxKVgUL._SY445_SX342_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/81vuCmQN5dL._SL1500_.jpg"], 
        description: "Samsung 253L Refrigerator with elegant design and energy efficiency.", 
        specification: { 
          brand: "Samsung", 
          capacity: "253L", 
          type: "Frost Free", 
          color: "White", 
          energyRating: "4 Star" 
        } 
    },

    { 
      id: "fridge3", 
      name: "Whirlpool 265L Neo Frost", 
      price: 23000, 
      images: [
        "https://m.media-amazon.com/images/I/21YOG1uVHIL._SY445_SX342_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/51iUGjZXfGS._SL1100_.jpg"
      ], 
        description: "Whirlpool 265L Refrigerator with neo frost technology for better cooling.", 
        specification: { 
          brand: "Whirlpool", 
          capacity: "265L", 
          type: "Frost Free", 
          color: "Silver", 
          energyRating: "3 Star" 
        } 
    },

    { 
      id: "fridge4", 
      name: "Godrej 236L Frost Free",
      price: 21000, 
      images: [
        "https://m.media-amazon.com/images/I/31mWvF7auYL._SX342_SY445_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/71SSVuvlxxL._SX522_.jpg"], 
        description: "Godrej 236L Refrigerator with toughened glass shelves and frost free cooling.", 
        specification: { 
          brand: "Godrej", 
          capacity: "236L", 
          type: "Frost Free", 
          color: "White", 
          energyRating: "3 Star" 
        }
   },

    { 
      id: "fridge5", 
      name: "Haier 258L Frost Free", 
      price: 22000, 
      images: [
        "https://m.media-amazon.com/images/I/31oO4nNbvxL._SX342_SY445_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/71zCx4RCYrL._SX522_.jpg"
      ], 
        description: "Haier 258L Refrigerator with efficient cooling and energy saving features.", 
        specification: { 
          brand: "Haier", 
          capacity: "258L", 
          type: "Frost Free", 
          color: "Silver", 
          energyRating: "4 Star" 
        } 
    }
  ],

  "washing_machine": [
    { 
      id: "wash1", 
      name: "LG 6.5kg Front Load", 
      price: 28000, 
      images: [
       "https://m.media-amazon.com/images/I/411nZVj1MeL._SX342_SY445_QL70_FMwebp_.jpg",
       "https://m.media-amazon.com/images/I/71HTv4ZDj1L._SX522_.jpg"], 
        description: "LG 6.5kg Front Load washing machine with smart inverter motor.", 
        specification: { 
          brand: "LG", 
          capacity: "6.5kg", 
          type: "Front Load", 
          color: "White", 
          spinSpeed: "1200 RPM"
        } 
    },

    {
      id: "wash2", 
      name: "Samsung 6kg Top Load", 
      price: 20000, 
      images: [
        "https://m.media-amazon.com/images/I/41iYZs1UdpL._SY445_SX342_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/71vjtmIb6+L._SL1500_.jpg"], 
        description: "Samsung 6kg Top Load washing machine with digital inverter motor.", 
        specification: { 
          brand: "Samsung", 
          capacity: "6kg", 
          type: "Top Load", 
          color: "White", 
          spinSpeed: "1000 RPM" 
        } 
    },

    { 
      id: "wash3", 
      name: "Bosch 7kg Front Load", 
      price: 35000, 
      images: [
      "https://m.media-amazon.com/images/I/41E9L4pYsjL._SX342_SY445_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/7199VoldbJL._SX522_.jpg"], 
        description: "Bosch 7kg Front Load washing machine with efficient cleaning and energy saving.", 
        specification: { 
          brand: "Bosch", 
          capacity: "7kg", 
          type: "Front Load",
         color: "Silver", 
         spinSpeed: "1200 RPM" 
        } 
    },

    { 
      
      id: "wash4", 
      name: "IFB 6kg Top Load", 
      price: 19000, 
      images: [
        "https://m.media-amazon.com/images/I/615ZY4AjOqL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71dOFd4JhZL._SL1500_.jpg"], 
        description: "IFB 6kg Top Load washing machine with Aqua Energie feature.",
         specification: { 
          brand: "IFB", 
          capacity: "6kg", 
          type: "Top Load", 
          color: "White", 
          spinSpeed: "1000 RPM" 
        } 
    },

    { 
      id: "wash5", 
      name: "Whirlpool 7kg Front Load", 
      price: 30000, 
      images: [
       "https://m.media-amazon.com/images/I/71Q7yamrrIL._SL1500_.jpg",
       "https://m.media-amazon.com/images/I/712YZ4AyWKL._SX522_.jpg" ], 
        description: "Whirlpool 7kg Front Load washing machine with 6th Sense technology.", 
        specification: { 
          brand: "Whirlpool", 
          capacity: "7kg", 
          type: "Front Load", 
          color: "White", 
          spinSpeed: "1200 RPM" 
        } 
    }
  ],

  "camera": [
    { 
      id: "camera1", 
      name: "Canon EOS 1500D", 
      price: 35000, 
      images: [
       "https://m.media-amazon.com/images/I/31czqpxAA3L._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/71dM9GuV3UL._SX355_.jpg"], 
        description: "Canon DSLR with 24MP sensor and full HD video recording.", 
        specification: { 
          brand: "Canon", 
          model: "EOS 1500D", 
          resolution: "24MP", 
          video: "Full HD", 
          color: "Black" 
        } 
    },

    { 
      id: "camera2", 
      name: "Nikon D3500", 
      price: 36000, 
      images: [
       "https://m.media-amazon.com/images/I/41hRcDMwvEL._SY300_SX300_QL70_FMwebp_.jpg",
       "https://m.media-amazon.com/images/I/51E8hN1TT4L._SY355_.jpg"], 
        description: "Nikon DSLR with 24.2MP sensor and lightweight body.", 
        specification: { 
          brand: "Nikon", 
          model: "D3500",
          resolution: "24.2MP", 
          video: "Full HD", 
          color: "Black"
         }
     },

    { 
      id: "camera3", 
      name: "Sony Alpha 6100", 
      price: 55000, 
      images: [
       "https://m.media-amazon.com/images/I/71SsP7PGEVL._SX355_.jpg",
       "https://m.media-amazon.com/images/I/711LIyCt-oL._SX355_.jpg"],
        description: "Sony mirrorless camera with 24MP sensor and fast autofocus.", 
        specification: { 
          brand: "Sony", 
          model: "Alpha 6100", 
          resolution: "24MP", 
          video: "4K", 
          color: "Black" 
        } 
    },

    { 
      id: "camera4", 
      name: "Fujifilm X-T30", 
      price: 50000, 
      images: [
       "https://m.media-amazon.com/images/I/61d3Z7GYoFL._SY450_.jpg",
       "https://m.media-amazon.com/images/I/51rigB6RlcL._SY450_.jpg"], 
        description: "Fujifilm mirrorless camera with 26MP sensor and retro design.", 
        specification: { 
          brand: "Fujifilm",
           model: "X-T30", 
           resolution: "26MP", 
           video: "4K", 
           color: "Silver" 
          } 
    },

    { 
      id: "camera5", 
      name: "Panasonic Lumix G85", 
      price: 48000, 
      images: [
        "https://m.media-amazon.com/images/I/411N+3pBhqL._SY300_SX300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/711qx6K+t6L._SY355_.jpg"
      ], 
        description: "Panasonic mirrorless camera with 16MP sensor and 4K video recording.", 
        specification: { 
          brand: "Panasonic", 
          model: "Lumix G85", 
          resolution: "16MP", 
          video: "4K", 
          color: "Black" 
        } 
    }
  ]
};
