angular.module('cvApp', ['ngSanitize'])
    .controller('cvCtl', function ($scope, $http) {

        $scope.profile = {
            "LearnerInfo": {
                "Identification": {
                    "PersonName": {
                        "FirstName": "Gabriel",
                        "Surname": "Beck dos Santos"
                    },
                    "ContactInfo": {
                        "Address": {
                            "Contact": {
                                "AddressLine": "11, Street Parque Desportivo",
                                "PostalCode": "6230-411",
                                "Municipality": "Fundao",
                                "Country": {
                                    "Code": "PT",
                                    "Label": "Portugal"
                                }
                            }
                        },
                        "Email": {
                            "Contact": "gabriel.beck.santos@gmail.com"
                        },
                        "TelephoneList": {
                            "Telephone": {
                                "Contact": "351+ 964 669 191",
                                "Use": {
                                    "Code": "mobile"
                                }
                            }
                        },
                        "WebsiteList": {
                            "Website": [
                                {
                                    "Contact": "https://medium.com/gbecks"
                                },
                                {
                                    "Contact": "https://www.linkedin.com/in/gabriel-beck"
                                }
                            ]
                        }
                    },
                    "Photo": {
                        "MimeType": "image/jpeg",
                        "Data": ""
                    }
                },
                "Headline": {
                    "Type": {
                        "Code": "position",
                        "Label": "POSITION"
                    },
                    "Description": {
                        "Label": "Devops Engineer"
                    }
                },
                "WorkExperienceList": {
                    "WorkExperience": [
                        {
                            "Period": {
                                "From": {
                                    "year": "2019",
                                    "month": "12"
                                },
                                "Current": "true"
                            },
                            "Position": {
                                "Label": "Devops Engineer"
                            },
                            "Activities": "<ul><li>Work as Devops Engineer in site to support the development team in their projects</li><li>Devops Engineer at IBM Research </li><li>Technologies: Linux, Bash, Python, Docker, Kubernetes, Jenkins, Vagrant, Git and IBM Cloud</li></ul>",
                            "Employer": {
                                "Name": "Softinsa",
                                "ContactInfo": {
                                    "Address": {
                                        "Contact": {
                                            "Municipality": "Fundao",
                                            "Country": {
                                                "Code": "PT",
                                                "Label": "Portugal"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "Period": {
                                "From": {
                                    "year": "2019",
                                    "month": "01"
                                },
                                "To": {
                                    "year": "2019",
                                    "month": "11"
                                },
                                "Current": "false"
                            },
                            "Position": {
                                "Code": "f2b15a0e-e65a-438a-affb-29b9d50b77d1",
                                "Label": "Software Developer"
                            },
                            "Activities": "<ul><li>Work for a french telecomunication enterprise project</li><li>Technologies: Java 8, Maven, REST, SOAP, JUnit, Jenkins, SVN, Javascript, Angular</li><li>Work with frontend and backend</li></ul>",
                            "Employer": {
                                "Name": "Altran",
                                "ContactInfo": {
                                    "Address": {
                                        "Contact": {
                                            "Municipality": "Fundao",
                                            "Country": {
                                                "Code": "PT",
                                                "Label": "Portugal"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "Period": {
                                "From": {
                                    "year": "2016",
                                    "month": "04"
                                },
                                "To": {
                                    "year": "2019",
                                    "month": "01"
                                },
                                "Current": "false"
                            },
                            "Position": {
                                "Label": "Lead Software Developer"
                            },
                            "Activities": "<ul><li>Work on a government tax collection project</li><li>Help building the project architecture</li><li>Technologies: Java 8, JSF, Spring, Hibernate, Maven, SASS, Bootstrap, Javascript, Oracle DB, JUnit, Wildfly, Jenkins, Git, Gerrit (code review), Docker, Redmine and Mantis</li><li>Write documentation: UML, Wiki and Development Guidelines</li><li>Technical Leader</li><li>Support the Development Team, Test Team and report Management</li></ul><p> </p>",
                            "Employer": {
                                "Name": "NTConsult",
                                "ContactInfo": {
                                    "Address": {
                                        "Contact": {
                                            "Municipality": "Porto Alegre",
                                            "Country": {
                                                "Code": "BR",
                                                "Label": "Brazil"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "Period": {
                                "From": {
                                    "year": "2014",
                                    "month": "06"
                                },
                                "To": {
                                    "year": "2016",
                                    "month": "04"
                                },
                                "Current": "false"
                            },
                            "Position": {
                                "Label": "Software Developer"
                            },
                            "Activities": "<ul><li>Developed the Network Management Software for the network equipment</li><li>Technologies: Java, Swing, Spring, JMS, JUnit, Maven Wildfly, Jenkins, Gerrit (code review), Oracle DB, MongoDB, Rally and Bugzilla</li><li>Supported team with Scrum methodology</li><li>Build a new architecture, using MongoDB, for future products</li></ul>",
                            "Employer": {
                                "Name": "Datacom",
                                "ContactInfo": {
                                    "Address": {
                                        "Contact": {
                                            "Municipality": "Eldorado do Sul",
                                            "Country": {
                                                "Code": "BR",
                                                "Label": "Brazil"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "Period": {
                                "From": {
                                    "year": "2013",
                                    "month": "10"
                                },
                                "To": {
                                    "year": "2014",
                                    "month": "06"
                                },
                                "Current": "false"
                            },
                            "Position": {
                                "Label": "Intern - Android Developer"
                            },
                            "Activities": "<ul><li>Opportunity to work in a large organization and reference in the technology area</li><li>Worked on HP ePrint application for android</li><li>Technologies: Android (Java), Robotium (test), REST, Review Board (code review)</li><li>Worked with people from other countries (USA, India), improving my English</li><li>Learned Scrum in practice, how to estimate, how to do daily meetings etc.</li></ul>",
                            "Employer": {
                                "Name": "HP R&D",
                                "ContactInfo": {
                                    "Address": {
                                        "Contact": {
                                            "Municipality": "Porto Alegre",
                                            "Country": {
                                                "Code": "BR",
                                                "Label": "Brazil"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "Period": {
                                "From": {
                                    "year": "2013",
                                    "month": "01"
                                },
                                "To": {
                                    "year": "2013",
                                    "month": "09"
                                },
                                "Current": "false"
                            },
                            "Position": {
                                "Label": "Intern - Software Developer"
                            },
                            "Activities": "<p>Software Innovation Laboratory of the Center for Research in Applied Computing of the institution PUCRS in partnership with HP</p><p> </p><ul><li>Developed the mobile application, using Enyo framework with PhoneGap through Javascript/HTML/CSS</li><li>Opportunity to communicate with a foreign developer having to hold meetings in English weekly to report the status of the project</li><li>Learned about cloud computing, using Juju (Ubuntu), OpenStack, HP Cloud, AWS, Azure. Project was an orchestration for cloud services, using web and mobile application</li><li>Technologies: Javascript, HTML, CSS, Java, GWT, Hibernate, MySql, REST, Enyo, PhoneGap, Cloud Services</li></ul>",
                            "Employer": {
                                "Name": "CPCA - PUCRS/HP",
                                "ContactInfo": {
                                    "Address": {
                                        "Contact": {
                                            "Municipality": "Porto Alegre",
                                            "Country": {
                                                "Code": "BR",
                                                "Label": "Brazil"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "Period": {
                                "From": {
                                    "year": "2012",
                                    "month": "04"
                                },
                                "To": {
                                    "year": "2012",
                                    "month": "12"
                                },
                                "Current": "false"
                            },
                            "Position": {
                                "Label": "Scientific Research"
                            },
                            "Activities": "<p>PET - Programa de Educação Tutorial (Tutorial Education Program) - group of PUCRS in partnership with the federal government program</p><p> </p><ul><li>Organized lectures for the students of PUCRS</li><li>Instructed courses about cloud storage using Google Drive, Dropbox; Agile Methodologies and Android Development</li><li>Developed an application to the Laboratory of Biology of Development of the Nervous System to studies of Alzheimer</li><li>Technologies: Java, Swing, Hibernate, H2DB</li></ul>",
                            "Employer": {
                                "Name": "PUCRS - PET",
                                "ContactInfo": {
                                    "Address": {
                                        "Contact": {
                                            "Municipality": "Porto Alegre",
                                            "Country": {
                                                "Code": "BR",
                                                "Label": "Brazil"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    ]
                },
                "EducationList": {
                    "Education": [
                        {
                            "Period": {
                                "From": {
                                    "year": "2012",
                                    "month": "01"
                                },
                                "To": {
                                    "year": "2015",
                                    "month": "12"
                                },
                                "Current": "false"
                            },
                            "Title": "Systems Information Bachelors Degree",
                            "Organisation": {
                                "Name": "Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)",
                                "ContactInfo": {
                                    "Address": {
                                        "Contact": {
                                            "Municipality": "Porto Alegre",
                                            "Country": {
                                                "Code": "BR",
                                                "Label": "Brazil"
                                            }
                                        }
                                    }
                                }
                            },
                            "Level": {
                                "Label": "Enade - Grade 5 (Max)"
                            }
                        },
                        {
                            "Period": {
                                "From": {
                                    "year": "2017",
                                    "month": "06"
                                },
                                "Current": "true"
                            },
                            "Title": "Global Design",
                            "Organisation": {
                                "Name": "Faculdade QI",
                                "ContactInfo": {
                                    "Address": {
                                        "Contact": {
                                            "Municipality": "Porto Alegre",
                                            "Country": {
                                                "Code": "BR",
                                                "Label": "Brazil"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    ]
                },
                "Skills": {
                    "Linguistic": {
                        "MotherTongueList": {
                            "MotherTongue": {
                                "Description": {
                                    "Code": "pt",
                                    "Label": "Portuguese"
                                }
                            }
                        },
                        "ForeignLanguageList": {
                            "ForeignLanguage": [
                                {
                                    "Description": {
                                        "Code": "en",
                                        "Label": "English"
                                    },
                                    "ProficiencyLevel": {
                                        "Listening": "C1",
                                        "Reading": "C1",
                                        "SpokenInteraction": "B2",
                                        "SpokenProduction": "B2",
                                        "Writing": "C1"
                                    }
                                },
                                {
                                    "Description": {
                                        "Code": "fr",
                                        "Label": "French"
                                    },
                                    "ProficiencyLevel": {
                                        "Listening": "A2",
                                        "Reading": "A2",
                                        "SpokenInteraction": "A2",
                                        "SpokenProduction": "A2",
                                        "Writing": "A2"
                                    }
                                }
                            ]
                        }
                    }
                },
                "AchievementList": {
                    "Achievement": [
                        {
                            "Title": {
                                "Code": "certifications",
                                "Label": "Certifications"
                            },
                            "Description": "<ul><li>Management 3.0 - AdaptWorks</li><li>Certified Scrum - Scrum Study</li><li>MongoDB Java Developer - Mongo University</li></ul>"
                        },
                        {
                            "Title": {
                                "Code": "courses",
                                "Label": "Courses"
                            },
                            "Description": "<ul><li>Java Advanced - Softblue</li><li>Java JSF - Alura</li><li>Java JPA and Hibernate - Alura</li><li>Android Development - Softblue</li><li>Learning NodeJS - Udemy</li><li>Understand and Document REST / RESTful APIs - Udemy</li><li>C# Course - PUCRS</li><li>Automate the Boring Stuff with Python - Udemy</li></ul>"
                        },
                        {
                            "Title": {
                                "Code": "publications",
                                "Label": "Publications"
                            },
                            "Description": "<p>Scientific Article - System for Analysis of Incidental Memory (2012)</p>"
                        },
                        {
                            "Title": {
                                "Code": "conferences",
                                "Label": "Conferences"
                            },
                            "Description": "<ul><li>Seminary of Project Management - PMI/RS</li><li>Ruby on Rails RS - Ruby On Rails RS Community</li></ul>"
                        }
                    ]
                }
            }
        }

        $scope.developerList = {
            "devlist": [
                {
                    "icon": "fa-html5"
                },
                {
                    "icon": "fa-css3-alt"
                },
                {
                    "icon": "fa-js-square"
                },
                {
                    "icon": "fa-angular"
                },
                {
                    "icon": "fa-node-js"
                },
                {
                    "icon": "fa-npm"
                },
                {
                    "icon": "fa-java"
                },
                {
                    "icon": "fa-docker"
                },
                {
                    "icon": "fa-git"
                },
                {
                    "icon": "fa-github"
                },
                {
                    "icon": "fa-jenkins"
                },
                {
                    "icon": "fa-python"
                },
                {
                    "icon": "fa-linux"
                }
            ]
        }

        $scope.hobbieList = {
            "hobbies": [
                {
                    "name": "Play Video Game",
                    "icon": "fa-gamepad"
                },
                {
                    "name": "Play Guitar",
                    "icon": "fa-guitar"
                },
                {
                    "name": "Watch Movies, Series and Anime",
                    "icon": "fa-tv"
                },
                {
                    "name": "Read About Tech",
                    "icon": "fa-robot"
                }
            ]
        }


        var todoList = this;
        todoList.todos = [
            { text: 'learn AngularJS', done: true },
            { text: 'build an AngularJS app', done: false }];

        $scope.dateConverter = function (date) {
            if (date) {
                return "" + date.month + "/" + date.year;
            }
            return "Current";
        };

        todoList.remaining = function () {
            var count = 0;
            angular.forEach(todoList.todos, function (todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

        todoList.archive = function () {
            var oldTodos = todoList.todos;
            todoList.todos = [];
            angular.forEach(oldTodos, function (todo) {
                if (!todo.done) todoList.todos.push(todo);
            });
        };
    });