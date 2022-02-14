
var Subjects = {
    "01": "Українська мова",
    "02": "Українська мова і література",
    "03": "Математика",
    "04": "Іноземна мова",
    "05": "Географія",
    "06": "Фізика",
    "07": "Хімія",
    "08": "Історія України",
    "09": "Біологія",
    "10": "Творчий конкурс",
    "11": "Сер.бал документа про освіту",
    "12": "",
    "13": "",

};

function calcEducDoc(evaluate) {
  evaluate = parseFloat(evaluate);
  switch (evaluate) {
    case 1:
    case 1.1:
    case 1.2:
    case 1.3:
    case 1.4:
    case 1.5:
    case 1.6:
    case 1.7:
    case 1.8:
    case 1.9:
    case 2: return 100;
    case 2.1: return 101;
    case 2.2: return 102;
    case 2.3: return 103;
    case 2.4: return 104;
    case 2.5: return 105;
    case 2.6: return 106;
    case 2.7: return 107;
    case 2.8: return 108;
    case 2.9: return 109;
    case 3: return 110;
    case 3.1: return 111;
    case 3.2: return 112;
    case 3.3: return 113;
    case 3.4: return 114;
    case 3.5: return 115;
    case 3.6: return 116;
    case 3.7: return 117;
    case 3.8: return 118;
    case 3.9: return 119;
    case 4: return 120;
    case 4.1: return 121;
    case 4.2: return 122;
    case 4.3: return 123;
    case 4.4: return 124;
    case 4.5: return 125;
    case 4.6: return 126;
    case 4.7: return 127;
    case 4.8: return 128;
    case 4.9: return 129;
    case 5: return 130;
    case 5.1: return 131;
    case 5.2: return 132;
    case 5.3: return 133;
    case 5.4: return 134;
    case 5.5: return 135;
    case 5.6: return 136;
    case 5.7: return 137;
    case 5.8: return 138;
    case 5.9: return 139;
    case 6: return 140;
    case 6.1: return 141;
    case 6.2: return 142;
    case 6.3: return 143;
    case 6.4: return 144;
    case 6.5: return 145;
    case 6.6: return 146;
    case 6.7: return 147;
    case 6.8: return 148;
    case 6.9: return 149;
    case 7: return 150;
    case 7.1: return 151;
    case 7.2: return 152;
    case 7.3: return 153;
    case 7.4: return 154;
    case 7.5: return 155;
    case 7.6: return 156;
    case 7.7: return 157;
    case 7.8: return 158;
    case 7.9: return 159;
    case 8: return 160;
    case 8.1: return 161;
    case 8.2: return 162;
    case 8.3: return 163;
    case 8.4: return 164;
    case 8.5: return 165;
    case 8.6: return 166;
    case 8.7: return 167;
    case 8.8: return 168;
    case 8.9: return 169;
    case 9: return 170;
    case 9.1: return 171;
    case 9.2: return 172;
    case 9.3: return 173;
    case 9.4: return 174;
    case 9.5: return 175;
    case 9.6: return 176;
    case 9.7: return 177;
    case 9.8: return 178;
    case 9.9: return 179;
    case 10: return 180;
    case 10.1: return 181;
    case 10.2: return 182;
    case 10.3: return 183;
    case 10.4: return 184;
    case 10.5: return 185;
    case 10.6: return 186;
    case 10.7: return 187;
    case 10.8: return 188;
    case 10.9: return 189;
    case 11: return 190;
    case 11.1: return 191;
    case 11.2: return 192;
    case 11.3: return 193;
    case 11.4: return 194;
    case 11.5: return 195;
    case 11.6: return 196;
    case 11.7: return 197;
    case 11.8: return 198;
    case 11.9: return 199;
    case 12: return 200;
    default: return 1;
  };
}
        var Specialty = [
        {
          01: num = "014.05",
          name: "Середня освіта (Біологія та здоров’я людини)" ,
          requires_special_support: true,
          lastyear_min_grade_budget: 141.044,
          required_subjects_1: [
                {
                  id: "01",
                  name: "Українська мова",
                  coef: 0.2,
                }
            ],
          required_subjects_2: [
                {
                  id:  "09",
                  name: "Біологія",
                  coef: 0.4,
                }
            ],
          non_required_subjects: [
                {
                 id: "08",
                 name: "Історія України",
                 coef: 0.29,
                },

                {
                 id: "03",
                 name: "Математика",
                 coef: 0.29,
                },

                {
                 id: "04",
                 name: "Іноземна мова",
                 coef: 0.29,
                },
            
                {
                 id: "05",
                 name: "Географія",
                 coef: 0.29,
                },
            
                {
                 id: "06",
                 name: "Фізика",
                 coef: 0.29,
                },

                {
                 id: "07",
                 name: "Хімія",
                 coef: 0.29,
                }

            ]
        },
            
          {02: num = "014.11",
          name: "Середня освіта (Фізична культура)",
          requires_special_support: false,
          lastyear_min_grade_budget: 149.136,
          required_subjects_1: [
            {
              id: "01",
              name: "Українська мова",
              coef: 0.2,
             }
          ],
          required_subjects_2: [
            {
              id:  "09",
              name: "Біологія",
              coef: 0.45,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.25,
            },

            {
             id: "03",
             name: "Математика",
             coef: 0.25,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.25,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.25,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.25,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.25,
            }
        
        ],},
        
          {03: num = "091",
          name: "Біологія",
          requires_special_support: true,
          lastyear_min_grade_budget: 172.518,
          required_subjects_1: [
            {
              id: "01",
              name: "Українська мова",
              coef: 0.2,
             }
          ],
          required_subjects_2: [
            {
              id:  "09",
              name: "Біологія",
              coef: 0.4,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.29,
            },

            {
             id: "03",
             name: "Математика",
             coef: 0.29,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.29,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.29,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.29,
            },


            {
             id: "07",
             name: "Хімія",
             coef: 0.29,
            }

        ],},
        
          {04: num = "101",
          name: "Екологія",
          requires_special_support: true,
          lastyear_min_grade_budget: 162.568,
          required_subjects_1: [
            {
              id: "01",
              name: "Українська мова",
              coef: 0.2,
             }
          ],
          required_subjects_2: [
            {
              id:  "09",
              name: "Біологія",
              coef: 0.35,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.35,
            },

            {
             id: "03",
             name: "Математика",
             coef: 0.35,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.35,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.35,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.35,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.35,
            }

        ],},
    
          {05: num = "014.07",
          name: "Середня освіта (Географія)",
          requires_special_support: true,
          lastyear_min_grade_budget: 148.314,
          required_subjects_1: [
            {
              id: "02",
              name: "Українська мова і література",
              coef: 0.2,
             }
          ],
          required_subjects_2: [
            {
              id:  "05",
              name: "Географія",
              coef: 0.4,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.29,
            },

            {
             id: "03",
             name: "Математика",
             coef: 0.29,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.29,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.29,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.29,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.29,
            }

        ],},
    
          {06: num = "103 ",
          name: "Науки про Землю",
          requires_special_support: true,
          lastyear_min_grade_budget: 159.99,
          required_subjects_1: [
            {
              id: "01",
              name: "Українська мова",
              coef: 0.2,
             }
          ],
          required_subjects_2: [
            {
              id:  "03",
              name: "Математика",
              coef: 0.35,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.34,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.34,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.34,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.34,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.34,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.34,
            }

        ],},
        
          {07: num = "106 ",
          name: "Географія",
          requires_special_support: true,
          lastyear_min_grade_budget: 0.0,
          required_subjects_1: [
            {
              id: "01",
              name: "Українська мова",
              coef: 0.2,
             }
          ],
          required_subjects_2: [
            {
              id:  "05",
              name: "Географія",
              coef: 0.4,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.3,
            },

            {
             id: "03",
             name: "Математика",
             coef: 0.3,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.3,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.3,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.3,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.3,
            }

        ],},
        
          {08: num = "012",
          name: "Дошкільна освіта",
          requires_special_support: true,
          lastyear_min_grade_budget: 138.008,
          required_subjects_1: [
            {
              id: "02",
              name: "Українська мова і література",
              coef: 0.3,
             }
          ],
          required_subjects_2: [
            {
              id:  "08",
              name: "Історія України",
              coef: 0.3,
             }
          ],
          non_required_subjects: [
            {
             id: "09",
             name: "Біологія",
             coef: 0.3,
            },

            {
             id: "03",
             name: "Математика",
             coef: 0.3,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.3,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.3,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.3,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.3,
            }

        ]},
        
          {09: num = "014.03",
          name: "Середня освіта (Історія)",
          requires_special_support: false,
          lastyear_min_grade_budget: 163.28,
          required_subjects_1: [
            {
              id: "02",
              name: "Українська мова і література",
              coef: 0.3,
             }
          ],
          required_subjects_2: [
            {
              id:  "08",
              name: "Історія України",
              coef: 0.3,
             }
          ],
          non_required_subjects: [
            {
             id: "09",
             name: "Біологія",
             coef: 0.3,
            },

            {
             id: "03",
             name: "Математика",
             coef: 0.3,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.3,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.3,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.3,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.3,
            }

        ],},
        
          {10: num = "032",
          name: "Історія та археологія",
          requires_special_support: false,
          lastyear_min_grade_budget: 187.512,
          required_subjects_1: [
            {
              id: "02",
              name: "Українська мова і література",
              coef: 0.3,
             }
          ],
          required_subjects_2: [
            {
              id:  "08",
              name: "Історія України",
              coef: 0.3,
             }
          ],
          non_required_subjects: [
            {
             id: "09",
             name: "Біологія",
             coef: 0.3,
            },

            {
             id: "03",
             name: "Математика",
             coef: 0.3,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.3,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.3,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.3,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.3,
            }

        ],},
        
          {11: num = "013",
          name: "Початкова освіта",
          requires_special_support: true,
          lastyear_min_grade_budget: 140.556,
          required_subjects_1: [
            {
              id: "02",
              name: "Українська мова і література",
              coef: 0.4,
             }
          ],
          required_subjects_2: [
            {
              id:  "03",
              name: "Математика",
              coef: 0.2,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.3,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.3,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.3,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.3,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.3,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.3,
            }

        ],},
        
          {12: num = "016.01",
          name:"Спеціальна освіта (Логопедія)",
          requires_special_support: false,
          lastyear_min_grade_budget: 168.349,
          required_subjects_1: [
            {
              id: "02",
              name: "Українська мова і література",
              coef: 0.3,
             }
          ],
          required_subjects_2: [
            {
              id:  "09",
              name: "Біологія",
              coef: 0.4,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.2,
            },

            {
             id: "03",
             name: "Математика",
             coef: 0.2,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.2,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.2,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.2,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.2,
            }

        ],},
        
          {13: num = "016.02",
          name:"Спеціальна освіта (Олігофренопедагогіка)",
          requires_special_support: false,
          lastyear_min_grade_budget: 140.98,
          required_subjects_1: [
            {
              id: "02",
              name: "Українська мова і література",
              coef: 0.3,
             }
          ],
          required_subjects_2: [
            {
              id:  "09",
              name: "Біологія",
              coef: 0.4,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.2,
            },

            {
             id: "03",
             name: "Математика",
             coef: 0.2,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.2,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.2,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.2,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.2,
            }

        ],},
        
          {14: num = "014.10",
          name:"Середня освіта (Трудове навчання та технології)",
          requires_special_support: true,
          lastyear_min_grade_budget: 125.632,
          required_subjects_1: [
            {
              id: "01",
              name: "Українська мова",
              coef: 0.3,
             }
          ],
          required_subjects_2: [
            {
              id:  "03",
              name: "Математика",
              coef: 0.3,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.3,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.3,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.3,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.3,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.3,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.3,
            }

        ],},
        
          {15: num = "015.37",
          name:"Професійна освіта (Аграрне виробництво, переробка сільськогосподарської продукції та харчові технології)",
          requires_special_support: true,
          lastyear_min_grade_budget: 134.264,
          required_subjects_1: [
            {
              id: "01",
              name: "Українська мова",
              coef: 0.3,
             }
          ],
          required_subjects_2: [
            {
              id:  "03",
              name: "Математика",
              coef: 0.3,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.3,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.3,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.3,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.3,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.3,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.3,
            }

        ],},
        
          {16: num = "051",
          name:"Економіка",
          requires_special_support: false,
          lastyear_min_grade_budget: 184.912,
          required_subjects_1: [
            {
              id: "02",
              name: "Українська мова і література",
              coef: 0.3,
             }
          ],
          required_subjects_2: [
            {
              id:  "03",
              name: "Математика",
              coef: 0.3,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.3,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.3,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.3,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.3,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.3,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.3,
            }

        ],},
        
          {17: num = "072",
          name:"Фінанси, банківська справа та страхування",
          requires_special_support: false,
          lastyear_min_grade_budget: 182.728,
          required_subjects_1: [
            {
              id: "02",
              name: "Українська мова і література",
              coef: 0.3,
             }
          ],
          required_subjects_2: [
            {
              id:  "03",
              name: "Математика",
              coef: 0.3,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.3,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.3,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.3,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.3,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.3,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.3,
            }

        ],},
        
          {18: num = "073",
          name:"Менеджмент",
          requires_special_support: false,
          lastyear_min_grade_budget: 134.368,
          required_subjects_1: [
            {
              id: "02",
              name: "Українська мова і література",
              coef: 0.3,
             }
          ],
          required_subjects_2: [
            {
              id:  "03",
              name: "Математика",
              coef: 0.3,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.3,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.3,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.3,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.3,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.3,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.3,
            }

        ],},
        
          {19: num = "076",
          name:"Підприємництво, торгівля та біржова діяльність",
          requires_special_support: false,
          lastyear_min_grade_budget: 183.56,
          required_subjects_1: [
            {
              id: "02",
              name: "Українська мова і література",
              coef: 0.3,
             }
          ],
          required_subjects_2: [
            {
              id:  "03",
              name: "Математика",
              coef: 0.3,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.3,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.3,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.3,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.3,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.3,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.3,
            }

        ],},
        
          {20: num = "081",
          name:"Право",
          requires_special_support: false,
          lastyear_min_grade_budget: 186.524,
          required_subjects_1: [
            {
              id: "02",
              name: "Українська мова і література",
              coef: 0.3,
             }
          ],
          required_subjects_2: [
            {
              id:  "08",
              name: "Історія України",
              coef: 0.3,
             }
          ],
          non_required_subjects: [
            {
             id: "03",
             name: "Математика",
             coef: 0.3,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.3,
            }

        ],},
        
          {21: num = "241",
          name:"Готельно-ресторанна справа",
          requires_special_support: false,
          lastyear_min_grade_budget: 130.728,
          required_subjects_1: [
            {
              id: "02",
              name: "Українська мова і література",
              coef: 0.3,
             }
          ],
          required_subjects_2: [
            {
              id:  "04",
              name: "Іноземна мова",
              coef: 0.3,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.3,
            },

            {
             id: "03",
             name: "Математика",
             coef: 0.3,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.3,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.3,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.3,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.3,
            }

        ],},
        
          {22: num = "242",
          name:"Туризм",
          requires_special_support: false,
          lastyear_min_grade_budget: 183.0,
          required_subjects_1: [
            {
              id: "02",
              name: "Українська мова і література",
              coef: 0.3,
             }
          ],
          required_subjects_2: [
            {
              id:  "04",
              name: "Іноземна мова",
              coef: 0.3,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.3,
            },

            {
             id: "03",
             name: "Математика",
             coef: 0.3,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.3,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.3,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.3,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.3,
            }

        ],},
        
          {23: num = "293",
          name:"Міжнародне право",
          requires_special_support: false,
          lastyear_min_grade_budget: 0.0,
          required_subjects_1: [
            {
              id: "02",
              name: "Українська мова і література",
              coef: 0.3,
             }
          ],
          required_subjects_2: [
            {
              id:  "04",
              name: "Іноземна мова",
              coef: 0.3,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.3,
            },

            {
             id: "03",
             name: "Математика",
             coef: 0.3,
            }

        ],},
        
          {24: num = "014.021",
          name:"Середня освіта (Англійська мова і література)*",
          requires_special_support: false,
          lastyear_min_grade_budget: 177.944,
          required_subjects_1: [
            {
              id: "02",
              name: "Українська мова і література",
              coef: 0.3,
             }
          ],
          required_subjects_2: [
            {
              id:  "04",
              name: "Іноземна мова",
              coef: 0.4,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.2,
            },

            {
             id: "03",
             name: "Математика",
             coef: 0.2,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.2,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.2,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.2,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.2,
            }

        ],},
        
          {25: num = "014.022",
          name:"Середня освіта (Німецька мова і література)*",
          requires_special_support: false,
          lastyear_min_grade_budget: 167.182,
          required_subjects_1: [
            {
              id: "02",
              name: "Українська мова і література",
              coef: 0.3,
             }
          ],
          required_subjects_2: [
            {
              id:  "04",
              name: "Іноземна мова",
              coef: 0.4,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.2,
            },

            {
             id: "03",
             name: "Математика",
             coef: 0.2,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.2,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.2,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.2,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.2,
            }

        ],},
        
          {26: num = "014.024",
          name:"Середня освіта (Іспанська мова і література)*",
          requires_special_support: false,
          lastyear_min_grade_budget: 171.184,
          required_subjects_1: [
            {
              id: "02",
              name: "Українська мова і література",
              coef: 0.3,
             }
          ],
          required_subjects_2: [
            {
              id:  "04",
              name: "Іноземна мова",
              coef: 0.4,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.2,
            },

            {
             id: "03",
             name: "Математика",
             coef: 0.2,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.2,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.2,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.2,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.2,
            }

        ],},
        
          {27: num = "035.041",
          name:"Філологія (Германські мови та літератури (переклад включно)), перша - англійська",
          requires_special_support: false,
          lastyear_min_grade_budget: 190.632,
          required_subjects_1: [
            {
              id: "02",
              name: "Українська мова і література",
              coef: 0.3,
             }
          ],
          required_subjects_2: [
            {
              id:  "04",
              name: "Іноземна мова",
              coef: 0.4,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.2,
            },

            {
             id: "03",
             name: "Математика",
             coef: 0.2,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.2,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.2,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.2,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.2,
            }
        ],},

          {28: num = "014.01",
          name:"Середня освіта (Українська мова і література)",
          requires_special_support: false,
          lastyear_min_grade_budget: 158.802,
          required_subjects_1: [
            {
              id: "02",
              name: "Українська мова і література",
              coef: 0.4,
             }
          ],
          required_subjects_2: [
            {
              id: "08",
              name: "Історія України",
              coef: 0.3,
             }
          ],
          non_required_subjects: [
            {
             id:  "04",
             name: "Іноземна мова",
             coef: 0.2,
            },

            {
             id: "03",
             name: "Математика",
             coef: 0.2,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.2,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.2,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.2,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.2,
            }
        ],},

          {29: num = "061",
          name:"Журналістика",
          requires_special_support: false,
          lastyear_min_grade_budget: 197.6,
          required_subjects_1: [
            {
              id: "02",
              name: "Українська мова і література",
              coef: 0.4,
             }
          ],
          required_subjects_2: [
            {
              id:  "03",
              name: "Математика",
              coef: 0.3,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.2,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.2,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.2,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.2,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.2,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.2,
            }
        ],},

          {30: num = "034",
          name:"Культурологія",
          requires_special_support: false,
          lastyear_min_grade_budget: 0.0,
          required_subjects_1: [
            {
              id: "02",
              name: "Українська мова і література",
              coef: 0.3,
             }
          ],
          required_subjects_2: [
            {
              id:  "08",
              name: "Історія України",
              coef: 0.35,
             }
          ],
          non_required_subjects: [
            {
             id: "09",
             name: "Біологія",
             coef: 0.25,
            },

            {
             id: "03",
             name: "Математика",
             coef: 0.25,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.25,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.25,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.25,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.25,
            }
        ],},

          {31: num = "231",
          name:"Соціальна робота",
          requires_special_support: false,
          lastyear_min_grade_budget: 165.984,
          required_subjects_1: [
            {
              id: "02",
              name: "Українська мова і література",
              coef: 0.3,
             }
          ],
          required_subjects_2: [
            {
              id:  "03",
              name: "Математика",
              coef: 0.3,
             }
          ],
          non_required_subjects: [
            {
             id: "09",
             name: "Біологія",
             coef: 0.3,
            },

            {
             id: "08",
             name: "Історія України",
             coef: 0.3,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.3,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.3,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.3,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.3,
            }
        ],},

          {32: num = "023",
          name:"Образотворче мистецтво, декоративне мистецтво, реставрація",
          requires_special_support: false,
          lastyear_min_grade_budget: 167.076,
          required_subjects_1: [
            {
              id: "02",
              name: "Українська мова і література",
              coef: 0.25,
             }
          ],
          required_subjects_2: [
            {
              id: "08",
              name: "Історія України",
              coef: 0.25,
             },
 
             {
              id: "07",
              name: "Хімія",
              coef: 0.25,
             }
          ],
          non_required_subjects: [
            {
             id: "10",
             name: "Творчий конкурс",
             coef: 0.4,
            }
        ],},

          {33: num = "024",
          name:"Хореографія",
          requires_special_support: false,
          lastyear_min_grade_budget: 172.744,
          required_subjects_1: [
            {
              id: "02",
              name: "Українська мова і література",
              coef: 0.25,
             }
          ],
          required_subjects_2: [
            {
              id: "08",
              name: "Історія України",
              coef: 0.25,
             },
 
             {
              id: "09",
              name: "Біологія",
              coef: 0.25,
             }
          ],
          non_required_subjects: [
            {
             id: "10",
             name: "Творчий конкурс",
             coef: 0.4,
            }
        ],},

          {34: num = "025",
          name:"Музичне мистецтво",
          requires_special_support: false,
          lastyear_min_grade_budget: 150.28,
          required_subjects_1: [
            {
              id: "02",
              name: "Українська мова і література",
              coef: 0.25,
             }
          ],
          required_subjects_2: [
            {
              id: "08",
              name: "Історія України",
              coef: 0.25,
             },
             {
              id: "03",
              name: "Математика",
              coef: 0.25,
             },
             {
              id: "04",
              name: "Іноземна мова",
              coef: 0.25,
             }
          ],
          non_required_subjects: [
            {
             id: "10",
             name: "Творчий конкурс",
             coef: 0.4,
            }
        ],},

          {35: num = "014.06",
          name:"Середня освіта (Хімія)",
          requires_special_support: true,
          lastyear_min_grade_budget: 128.593,
          required_subjects_1: [
            {
              id: "01",
              name: "Українська мова",
              coef: 0.25,
             }
          ],
          required_subjects_2: [
            {
              id:  "07",
              name: "Хімія",
              coef: 0.35,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.25,
            },

            {
             id: "03",
             name: "Математика",
             coef: 0.25,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.25,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.25,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.25,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.25,
            }
        ],},

          {36: num = "102",
          name:"Хімія",
          requires_special_support: true,
          lastyear_min_grade_budget: 130.104,
          required_subjects_1: [
            {
              id: "01",
              name: "Українська мова",
              coef: 0.25,
             }
          ],
          required_subjects_2: [
            {
              id:  "07",
              name: "Хімія",
              coef: 0.35,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.25,
            },

            {
             id: "03",
             name: "Математика",
             coef: 0.25,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.25,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.25,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.25,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.25,
            }
        ],},

          {37: num = "222",
          name:"Медицина",
          requires_special_support: false,
          lastyear_min_grade_budget: 164.84,
          required_subjects_1: [
            {
              id: "01",
              name: "Українська мова",
              coef: 0.2,
             }
          ],
          required_subjects_2: [
            {
              id:  "03",
              name: "Математика",
              coef: 0.5,
             },

             {
              id: "07",
              name: "Хімія",
              coef: 0.5,
             }
          ],
          non_required_subjects: [
            {
             id: "06",
             name: "Фізика",
             coef: 0.2,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.2,
            }
        ],},

          {38: num = "227",
          name:"Фізична терапія, ерготерапія",
          requires_special_support: false,
          lastyear_min_grade_budget: 171.213,
          required_subjects_1: [
            {
              id: "01",
              name: "Українська мова",
              coef: 0.2,
             }
          ],
          required_subjects_2: [
            {
              id:  "03",
              name: "Математика",
              coef: 0.5,
             },

             {
              id: "07",
              name: "Хімія",
              coef: 0.5,
             },
          ],
          non_required_subjects: [
            {
             id: "06",
             name: "Фізика",
             coef: 0.2,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.2,
            }
        ],},

          {39: num = "226",
          name:"Фармація, промислова фармація",
          requires_special_support: false,
          lastyear_min_grade_budget: 185.64,
          required_subjects_1: [
            {
              id: "01",
              name: "Українська мова",
              coef: 0.25,
             }
          ],
          required_subjects_2: [
            {
              id:  "03",
              name: "Математика",
              coef: 0.4,
             },

             {
              id: "07",
              name: "Хімія",
              coef: 0.4,
             }
          ],
          non_required_subjects: [
            {
             id: "06",
             name: "Фізика",
             coef: 0.25,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.25,
            }
        ],},

          {40: num = "053",
          name:"Психологія",
          requires_special_support: false,
          lastyear_min_grade_budget: 179.816,
          required_subjects_1: [
            {
              id: "02",
              name: "Українська мова і література",
              coef: 0.3,
             }
          ],
          required_subjects_2: [
            {
              id:  "03",
              name: "Математика",
              coef: 0.3,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.3,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.3,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.3,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.3,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.3,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.3,
            }
        ],},

          {41: num = "054",
          name:"Соціологія",
          requires_special_support: false,
          lastyear_min_grade_budget: 0.0,
          required_subjects_1: [
            {
              id: "02",
              name: "Українська мова і література",
              coef: 0.3,
             }
          ],
          required_subjects_2: [
            {
              id:  "03",
              name: "Математика",
              coef: 0.3,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.3,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.3,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.3,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.3,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.3,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.3,
            }
        ],},

          {42: num = "014.04",
          name:"Середня освіта (Математика)",
          requires_special_support: true,
          lastyear_min_grade_budget: 141.32,
          required_subjects_1: [
            {
              id: "01",
              name: "Українська мова",
              coef: 0.34,
             }
          ],
          required_subjects_2: [
            {
              id:  "03",
              name: "Математика",
              coef: 0.35,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.2,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.2,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.2,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.2,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.2,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.2,
            }
        ],},

          {43: num = "014.09",
          name:"Середня освіта (Інформатика)",
          requires_special_support: true,
          lastyear_min_grade_budget: 157.986,
          required_subjects_1: [
            {
              id: "01",
              name: "Українська мова",
              coef: 0.34,
             }
          ],
          required_subjects_2: [
            {
              id:  "03",
              name: "Математика",
              coef: 0.35,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.2,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.2,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.2,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.2,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.2,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.2,
            }
        ],},

          {44: num = "014.08 ",
          name:"Середня освіта (Фізика)",
          requires_special_support: true,
          lastyear_min_grade_budget: 126.49,
          required_subjects_1: [
            {
              id: "01",
              name: "Українська мова",
              coef: 0.34,
             }
          ],
          required_subjects_2: [
            {
              id:  "03",
              name: "Математика",
              coef: 0.35,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.2,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.2,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.2,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.2,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.2,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.2,
            }
        ],},

          {45: num = "104",
          name:"Фізика та астрономія",
          requires_special_support: false,
          lastyear_min_grade_budget: 0.0,
          required_subjects_1: [
            {
              id: "01",
              name: "Українська мова",
              coef: 0.34,
             }
          ],
          required_subjects_2: [
            {
              id:  "03",
              name: "Математика",
              coef: 0.35,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.21,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.21,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.21,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.21,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.21,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.21,
            }
        ],},

          {46: num = "121",
          name:"Інженерія програмного забезпечення",
          requires_special_support: false,
          lastyear_min_grade_budget: 180.544,
          required_subjects_1: [
            {
              id: "01",
              name: "Українська мова",
              coef: 0.35,
             }
          ],
          required_subjects_2: [
            {
              id:  "03",
              name: "Математика",
              coef: 0.35,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.2,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.2,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.2,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.2,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.2,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.2,
            }
        ],},

          {47: num = "122",
          name:"Комп’ютерні науки",
          requires_special_support: false,
          lastyear_min_grade_budget: 174.408,
          required_subjects_1: [
            {
              id: "01",
              name: "Українська мова",
              coef: 0.35,
             }
          ],
          required_subjects_2: [
            {
              id:  "03",
              name: "Математика",
              coef: 0.35,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.2,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.2,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.2,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.2,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.2,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.2,
            }
        ],},

          {48: num = "126",
          name:"Інформаційні системи та технології",
          requires_special_support: false,
          lastyear_min_grade_budget: 165.273,
          required_subjects_1: [
            {
              id: "01",
              name: "Українська мова",
              coef: 0.35,
             }
          ],
          required_subjects_2: [
            {
              id:  "03",
              name: "Математика",
              coef: 0.35,
             }
          ],
          non_required_subjects: [
            {
             id: "08",
             name: "Історія України",
             coef: 0.2,
            },

            {
             id: "09",
             name: "Біологія",
             coef: 0.2,
            },

            {
             id: "04",
             name: "Іноземна мова",
             coef: 0.2,
            },

            {
             id: "05",
             name: "Географія",
             coef: 0.2,
            },

            {
             id: "06",
             name: "Фізика",
             coef: 0.2,
            },

            {
             id: "07",
             name: "Хімія",
             coef: 0.2,
            }

        ],},
      
          {49: num = "017",
          name:"Фізична культура і спорт",
          requires_special_support: false,
          lastyear_min_grade_budget: 144.5,
          required_subjects_1: [
            {
              id: "01",
              name: "Українська мова",
              coef: 0.2,
             }
          ],
          required_subjects_2: [
            {
              id:  "09",
              name: "Біологія",
              coef: 0.45,
             }
          ],
          non_required_subjects: [
            {
             id:  "10",
             name: "Творчий конкурс",
             coef: 0.25,
            }
        
        ]
    },
        ]

             

    let select0 = document.querySelector('#p0');
    let select1 = document.querySelector('#p1');
    let select2 = document.querySelector('#p2');

    let inputRez00 = document.querySelector('#p00');
    let inputRez11 = document.querySelector('#p11');
    let inputRez22 = document.querySelector('#p22');
    let inputRez33 = document.querySelector('#p33');

    let inputBtn = document.querySelector('#rozsubmit');
    let Result = document.querySelector('#Result');
    let Doc = document.querySelector('#p3');
    const checkBoxChecked = document.querySelector('#c2');
    const gk_check = document.querySelector('#c3');

   inputBtn.onclick = function (){
    // debugger;
    if(select1.value == 0 || select2.value == 0) {alert('Оберіть предмети ЗНО в усіх полях!'); return;}
    if(select1.value == select2.value) {alert('Обрані предмети ЗНО не повинні бути однаковими! Оберіть інший предмет'); return;}
    if(inputRez00.value == '' || inputRez11.value == '' || inputRez22.value == '' || inputRez33.value == '') {alert('Укажіть усі результати ЗНО!'); return;} 
    Result.innerHTML='';
    if (inputRez33.value < 100) {
        inputRez33.value = calcEducDoc(inputRez33.value);
    }
    const filteredSps = Specialty.filter((sp) => sp.required_subjects_1.find((s) => s.id === select0.value)).filter((sp) => sp.required_subjects_2.find((s) => s.id === select1.value)).filter((sp => sp.non_required_subjects.find(s => s.id === select2.value)));
    let coef1;
    let coef2;
    let coef3;
    //let coef4;
    const rk = 1.04;
    var sk = 0.0;
    const gk = 1.02;
    const filteredSpecsArray = [];

    // debugger;

    for (const sp of filteredSps) {
       
        coef1 = sp.required_subjects_1.find((s) => s.id === select0.value)?.coef;

        coef2 = sp.required_subjects_2.find((s) => s.id === select1.value)?.coef;
        
        coef3 = sp.non_required_subjects.find((s) => s.id === select2.value)?.coef;
   //  debugger;
    //(КБ) = К1*П1 + К2*П2 + К3*П3 + К4*А
    if (checkBoxChecked.checked) {
       // alert('check')
       if (sp.requires_special_support) sk = 1.05;
       else sk = 1.02;
        result = (coef1 * inputRez00.value + coef2 * inputRez11.value + coef3 * inputRez22.value +  0.1 * inputRez33.value) * sk; 
    } else {
      //  alert('not check')
        result = (coef1 * inputRez00.value + coef2 * inputRez11.value + coef3 * inputRez22.value +  0.1 * inputRez33.value) * rk;
    }
    if (gk_check.checked && sp.requires_special_support) {
      result = result * gk;
    }
    if(result > 200) result = 200.0;
        if (!isNaN(result)) filteredSpecsArray.push({spname:sp.name, reslt:result, lstgrade:sp.lastyear_min_grade_budget});
    }
    filteredSpecsArray.sort(function(a, b) {return (b.reslt - a.reslt)});
    for (const sp of filteredSpecsArray) {
      printResult(sp.spname, sp.reslt.toFixed(3), sp.lstgrade.toFixed(3));
    }
    // debugger;
    

    }

    function round(value, decimals) {
      return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
     }

    function printResult(spName, result, lastgrade) {
        let p = document.createElement("p");
        p.innerHTML = `${spName}: ${result}${lastgrade > 0 ? ` Мінімальний прохідний бал у минулому році на бюджет: ${lastgrade}`:``}`
        Result.appendChild(p);
    }

    function validation(input_tag) {
      input_tag.value = input_tag.value.replace(/[^\d]/g, '');
      if (input_tag.value < 100) input_tag.value = '100';
      if (input_tag.value > 200) input_tag.value = '200';
    }

    function validation_osv(input_tag) {
      input_tag.value = input_tag.value.replace(/[^\d]/g, '');
      if (input_tag.value < 0) input_tag.value = '1';
      if (input_tag.value > 12 && input_tag.value < 100) input_tag.value = '12';
      if (input_tag.value > 200) input_tag.value = '200';
      input_tag.value = input_tag.value.replace(/[^\d]/g, '');
    }
