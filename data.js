var APP_DATA = {
  "scenes": [
    {
      "id": "0-bahar-ka-gate",
      "name": "Bahar ka gate",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.01635171153579229,
          "pitch": 0.08311673321174062,
          "rotation": 0,
          "target": "1-goat-watchman"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5253742137026265,
          "pitch": -0.4160220405068955,
          "title": "Bajaj Institute of Technology",
          "text": "<div>very cool</div>"
        }
      ]
    },
    {
      "id": "1-goat-watchman",
      "name": "Goat Watchman",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.112277158390537,
          "pitch": 0.2520235755889608,
          "rotation": 0,
          "target": "0-bahar-ka-gate"
        },
        {
          "yaw": 1.5217210320200234,
          "pitch": 0.3107632842254038,
          "rotation": 0,
          "target": "5-entrance_right_mid"
        },
        {
          "yaw": 0.05080083137564273,
          "pitch": 0.26752877712542755,
          "rotation": 0,
          "target": "2-parking-pre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-parking-pre",
      "name": "parking Pre",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.00805760833894098,
          "pitch": 0.4957890621078729,
          "rotation": 0,
          "target": "18-garden"
        },
        {
          "yaw": -1.5935403822116694,
          "pitch": 0.4160919430720309,
          "rotation": 0,
          "target": "3-parking"
        },
        {
          "yaw": 1.5444755736306846,
          "pitch": 0.5838801942393417,
          "rotation": 0,
          "target": "1-goat-watchman"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-parking",
      "name": "Parking",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.014247585730569057,
        "pitch": -0.022356911572513738,
        "fov": 1.3473765980835988
      },
      "linkHotspots": [
        {
          "yaw": -0.02944179408107317,
          "pitch": 0.3627046212787626,
          "rotation": 0,
          "target": "4-parking-next"
        },
        {
          "yaw": -3.0881565260034325,
          "pitch": 0.31557036605909516,
          "rotation": 0,
          "target": "2-parking-pre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-parking-next",
      "name": "parking next",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.079054426905671,
        "pitch": 0.0048142880528967424,
        "fov": 1.3473765980835988
      },
      "linkHotspots": [
        {
          "yaw": 0.03183189476927417,
          "pitch": 0.337508587520599,
          "rotation": 0,
          "target": "19-huggies"
        },
        {
          "yaw": 1.5097739738211011,
          "pitch": 0.3407727104829945,
          "rotation": 0,
          "target": "3-parking"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-entrance_right_mid",
      "name": "Entrance_Right_Mid",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.42742757191697933,
        "pitch": -0.09191174757587106,
        "fov": 1.3473765980835988
      },
      "linkHotspots": [
        {
          "yaw": 0.02423200291146621,
          "pitch": 0.3381510567010739,
          "rotation": 0,
          "target": "6-entrance_rightmost_right"
        },
        {
          "yaw": -3.0724492147178957,
          "pitch": 0.43941663203285763,
          "rotation": 0,
          "target": "1-goat-watchman"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-entrance_rightmost_right",
      "name": "Entrance_Rightmost_Right",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.188041896839092,
        "pitch": -0.28069281423573145,
        "fov": 1.3473765980835988
      },
      "linkHotspots": [
        {
          "yaw": -1.035848196365599,
          "pitch": 0.1674136184210031,
          "rotation": 0,
          "target": "7-kanye-main-entrance"
        },
        {
          "yaw": 3.134999487383066,
          "pitch": 0.2968206724074687,
          "rotation": 0,
          "target": "5-entrance_right_mid"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kanye-main-entrance",
      "name": "kanye main entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.02045555675695354,
        "pitch": 0.004307022716744768,
        "fov": 1.3473765980835988
      },
      "linkHotspots": [
        {
          "yaw": -2.4333932156462996,
          "pitch": 0.21001601223020572,
          "rotation": 13.351768777756625,
          "target": "18-garden"
        },
        {
          "yaw": 3.0269376786800413,
          "pitch": 0.25984972297758446,
          "rotation": 0,
          "target": "6-entrance_rightmost_right"
        },
        {
          "yaw": 0.5541065997792565,
          "pitch": 0.19305336053482947,
          "rotation": 5.497787143782138,
          "target": "8-openplaza_stage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-openplaza_stage",
      "name": "OpenPlaza_Stage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.864030320668702,
        "pitch": -0.08450779020333243,
        "fov": 1.3473765980835988
      },
      "linkHotspots": [
        {
          "yaw": 2.19518278933697,
          "pitch": 0.2899624627407693,
          "rotation": 0.7853981633974483,
          "target": "9-openplaze_mid"
        },
        {
          "yaw": 0.002973122358085334,
          "pitch": 0.3310559928584791,
          "rotation": 0,
          "target": "7-kanye-main-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-openplaze_mid",
      "name": "OpenPlaze_Mid",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.2160285714535739,
        "pitch": 0.07893051600956724,
        "fov": 1.3473765980835988
      },
      "linkHotspots": [
        {
          "yaw": 0.022199003355382274,
          "pitch": 0.4646168851466417,
          "rotation": 0,
          "target": "10-libkeaage"
        },
        {
          "yaw": -3.039077934093868,
          "pitch": 0.4781952923032122,
          "rotation": 0,
          "target": "8-openplaza_stage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-libkeaage",
      "name": "LibKeAage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.017108831183455,
          "pitch": 0.2175727917243222,
          "rotation": 18.84955592153877,
          "target": "9-openplaze_mid"
        },
        {
          "yaw": -0.1610692047740514,
          "pitch": 0.199148051168887,
          "rotation": 12.566370614359176,
          "target": "11-libkeandar"
        },
        {
          "yaw": -1.8416311358038548,
          "pitch": 0.06945238639807094,
          "rotation": 0.7853981633974483,
          "target": "19-huggies"
        },
        {
          "yaw": 2.676869416008673,
          "pitch": 0.12048569435878953,
          "rotation": 10.995574287564278,
          "target": "16-hod-car"
        },
        {
          "yaw": 1.1596238928999263,
          "pitch": 0.16488529353994963,
          "rotation": 5.497787143782138,
          "target": "14-beating-with-mac"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-libkeandar",
      "name": "libkeandar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0825335305813297,
          "pitch": 0.46597757468995304,
          "rotation": 0,
          "target": "10-libkeaage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-huggies",
      "name": "huggies",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "13-workshop-front",
      "name": "workshop front",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3310783673737347,
          "pitch": 0.39910015635370755,
          "rotation": 0,
          "target": "15-near-workshop"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-beating-with-mac",
      "name": "Beating with mac",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6035831496504738,
          "pitch": 0.21268311846610288,
          "rotation": 0.7853981633974483,
          "target": "15-near-workshop"
        },
        {
          "yaw": -1.5405979552477937,
          "pitch": 0.1316589323381514,
          "rotation": 0.7853981633974483,
          "target": "10-libkeaage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-near-workshop",
      "name": "near workshop",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.10596319598557,
          "pitch": 0.17289949596889542,
          "rotation": 0.7853981633974483,
          "target": "14-beating-with-mac"
        },
        {
          "yaw": -0.01660723124678576,
          "pitch": 0.2441164946989236,
          "rotation": 6.283185307179586,
          "target": "13-workshop-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-hod-car",
      "name": "HOD CAR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -3.1033669996425477,
        "pitch": -0.2497321634775922,
        "fov": 1.3473765980835988
      },
      "linkHotspots": [
        {
          "yaw": -0.03082244044670901,
          "pitch": 0.25952595331404815,
          "rotation": 0,
          "target": "10-libkeaage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-asian-squat-and-demons",
      "name": "asian Squat and demons",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "18-garden",
      "name": "Garden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 3.0968293779033367,
        "pitch": 0.02235244095741784,
        "fov": 1.3473765980835988
      },
      "linkHotspots": [
        {
          "yaw": 3.1211871744938406,
          "pitch": 0.2897314518469951,
          "rotation": 0,
          "target": "7-kanye-main-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-huggies",
      "name": "huggies",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4913110873180724,
          "pitch": 0.2743815028098684,
          "rotation": 6.283185307179586,
          "target": "10-libkeaage"
        },
        {
          "yaw": 0.6282276253164021,
          "pitch": 0.08191592973483708,
          "rotation": 7.0685834705770345,
          "target": "9-openplaze_mid"
        },
        {
          "yaw": -2.566015641665736,
          "pitch": 0.3427940804549614,
          "rotation": 0,
          "target": "4-parking-next"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "cookinboi",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
