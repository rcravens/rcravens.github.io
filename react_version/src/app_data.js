export default function app_data() {
    return {
        sidebar: {
            name: 'Bob Cravens',
            image: 'assets/img/headshots/cravens_profile_square.jpg',
            socials: [
                {
                    name: 'LinkedIn',
                    url: 'https://www.linkedin.com/in/bobcravens/',
                    icon: 'bx bxl-linkedin'
                },
                {
                    name: 'GitHub',
                    url: 'https://github.com/rcravens',
                    icon: 'bx bxl-github'
                },
                {
                    name: 'YouTube',
                    url: 'https://www.youtube.com/@thetechnologysandbox',
                    icon: 'bx bxl-youtube'
                }
            ],
            resume: 'assets/2024_bob_cravens_resume.pdf',
        },
        hero: {
            name: 'Bob Cravens',
            image: 'assets/img/hero-bg-01.jpeg',
            words: ['Leader', 'Strategic Thinker', 'Innovator', 'Architect', 'Full Stack Developer'],
        },
        about: {
            title: 'Software Engineering - Director | Manager | Architect | Full Stack Developer',
            image: 'assets/img/headshots/cravens_at_desk.JPG',
            summary: `Innovative professional with a dynamic background in software engineering and
                            application architecture. Seasoned leader adept at spearheading teams to develop and
                            maintain cutting-edge full-stack solutions.`,
            highlights: [
                '<strong>Teaching and Mentorship:</strong> I naturally gravitate toward helping others learn, whether it is through my videos or a thoughtful approach to coding. I enjoy breaking down complex concepts to make them accessible to others.',
                '<strong>Passion for Clean Code:</strong> Beyond technical proficiency, I emphasize the <em>art</em> of writing maintainable and good code. I have a strong internal drive towards craftsmanship in software development. I am not just looking to solve problems, I am aiming for elegance and sustainability in solutions.',
                '<strong>Balancing Vision with Pragmatism:</strong> I have a knack for balancing high-level vision with the practicalities of execution. I thrive on bridging the gap between strategic goals and the day-to-day work of software development.',
                '<strong>Commitment to Lifelong Learning:</strong> From exploring new leadership opportunities to creating educational content, I am continuously seeking growth, not just for others but also for myself. I have a constant curiosity and a drive to stay relevant in both technical and leadership domains.',
                '<strong>Empathy and Adaptability:</strong> From my experience in the healthcare technology industry and leadership roles, I deeply understand the value of empathy in technical and organizational contexts. Balancing the needs of users, especially in healthcare, with engineering realities requires emotional intelligence. I am highly adaptable and sensitive to these nuanced needs.',
                '<strong>Strong Attention to Detail:</strong> My emphasis on <em>maintainable and clean code</em> reflects a keen attention to detail. This quality not only applies to coding but extends to other areas, such as project management, leadership, and event other content I create. I focus on getting things right from the ground up, ensuring long-term stability rather than quick fixes.',
                '<strong>A Thoughtful Approach to Leadership:</strong> While I hold senior or leadership positions, I think about leadership in terms of empowerment rather than control. I lead with a focus on fostering talent, encouraging autonomy, and nurturing my team\'s growth.',
                '<strong>Strategic Thinker with a Practical Core:</strong> I think long-term and am drawn to roles that allow me to shape an organization\'s technical direction. I am not purely a visionary, but am also practical. My experience has me grounded in understanding of the constraints of timelines, team dynamics, and organizational goals. This balance makes me a steadying influence in high-pressure environments.',
                '<strong>Desire for Impact:</strong> Regardless of my role, I have a desire to make tangible impact. I am not satisfied with just technical success or financial metrics; there is a deeper drive to create meaningful change, be it in the lives of patients, end-users, team members, or learners engaging in my content.',
                '<strong>Innovative Problem Solver:</strong> I am driven by solving complex, impactful problems. I don\'t just focus on the technical challenge; I look for innovative, efficient ways to approach solutions. I am someone who thrives in the creative process of problem-solving, especially in high-stakes environments.',
                '<strong>Balanced Risk-Taker:</strong> I am not afraid to take calculated risks. However, my technical background and experience allows me to carefully weigh those risks, considering long-term outcomes rather than rushing into decisions. This balance of ambition and caution helps me make sound strategic choices.',
                '<strong>Desire for Continuous Improvement:</strong> I have a desire to refine skills, whether by learning new technologies or expanding my leadership capabilities. I am not just interested in personal growth, but also in uplifting others along my journey.',
                '<strong>Connector of Ideas and People:</strong> I naturally bridge gaps - whether it\'s between engineers and leadership, technology and vision, or between people at different stages of their learning journey. I excel at synthesizing ideas from diverse domains and using them to foster collaboration, create innovative solutions, or even help teams see the bigger picture.',
                '<strong>Patience and Persistence:</strong> I take a patient, long-term mindset in my approach to mentoring and communicating complex subjects. Whether it\'s guiding others through difficult learning processes or steering projects that require endurance, I am comfortable playing the long game, building lasting value rather than seeking quick wins.',
                '<strong>Grounded in Values:</strong> A sense of integrity is central to how I operate - whether it\'s maintaining high coding standards, seeking roles that align with my values, or showing concern for the lasting impact of our work. I am someone others trust, both as a leader and as a peer.',
            ]
        },
        skills: {
            trait_summary: `Over the years, I have refined and developed the following traits that have consistently
                            contributed to my professional growth and success, enabling me to effectively lead teams
                            and drive the development of innovative products:`,
            traits: [
                'Leadership', 'Strategic Planning', 'Team Management',
                'Project Management', 'Communication', 'Technical Expertise',
                'Problem-Solving', 'Innovation', 'Risk Management',
                'Change Management', 'Quality Assurance', 'Regulatory Compliance'],
            category_summary: `Technology does not stand still, and neither should our skills. As innovations continue to shape the
                        landscape of our industries, it's imperative that we embrace lifelong learning and adaptability to
                        stay relevant and effective in our roles. My extensive experience across various domains equips me
                        with a versatile skill set, enabling me to rapidly grasp and apply new skills as needed. Here is
                        a snapshot of technologies where I am experienced:`,
            categories: {
                left: [
                    {
                        'name': 'Languages',
                        'icon': 'text-bg-primary',
                        'items': ['Python', 'PHP', 'C#', 'Node', 'ASP.NET', 'HTML', 'CSS', 'JavaScript'],
                    },
                    {
                        'name': 'Frameworks',
                        'icon': 'text-bg-secondary',
                        'items': ['Laravel', 'Django', 'Flask', 'Vue.js', 'React', 'Bootstrap CSS'],
                    },
                    {
                        'name': 'Servers',
                        'icon': 'text-bg-success',
                        'items': ['Nginx', 'IIS', 'Apache', 'MySQL', 'PostgreSQL', 'SQL Server', 'Redis', 'RabbitMQ'],
                    },
                ],
                right: [
                    {
                        'name': 'Devops',
                        'icon': 'text-bg-warning',
                        'items': ['Bitbucket', 'Github', 'Gitlab', 'Jira', 'Jenkins', 'Docker', 'Azure Devops'],
                    },
                    {
                        'name': 'Integrations',
                        'icon': 'text-bg-info',
                        'items': ['Active Directory', 'Workday', 'ADP', 'Azure', 'AWS', 'Stripe', 'MailGun', 'Twilio'],
                    },
                    {
                        'name': 'Cloud',
                        'icon': 'text-bg-dark',
                        'items': ['AWS', 'Azure', 'Digital Ocean'],
                    }
                ]
            }
        },
        work_experiences: {
            left: [
                {
                    title: 'Professional Experience',
                    items: [
                        {
                            'title': 'Senior Manager Software Engineering',
                            'dates': 'August 2015 - February 2024',
                            'company': 'GenesisCare (formerly 21st Century Oncology)',
                            'highlights': [
                                'Developed the strategic planning for Asset IQ, communicated the vision, and secured Executive team support.',
                                'Directed the development of Asset IQ, an internal web-based platform, strategically created to enhance operational efficiency through intuitive dashboards and features.',
                                'Integrated disparate data sources within Asset IQ for comprehensive views, enabling data-informed decision-making.',
                                'Key evangelist in the widespread adoption of Asset IQ across multiple departments, including RT, Physics, Engineering, and Dosimetry, and all organizational levels from individual contributors to executives.',
                                'Played a pivotal role in the development of Adaptivo, a cutting-edge patient dosimetry application, by leading the architectural design efforts to create a modern and user-friendly web experience.',
                                'Architected the design of Adaptivo\'s resilient processing pipeline, enabling support for asynchronous job queues and ensuring high availability of critical functionalities.',
                                'Assisted in the deployment of Adaptivo into beta and production environments, providing support to various teams and ensuring seamless integration with existing workflows.',
                            ]
                        },
                        {
                            'title': 'Senior Manager System Analytics',
                            'dates': 'January 2014 - August 2015',
                            'company': 'Accuray',
                            'highlights': [
                                'Formulated and presented a forward-thinking data aggregation and analytics proposal to the Executive team, securing funding to establish an analytics team dedicated to enhancing the performance of TomoTherapy and CyberKnife radiation oncology products.',
                                'Directed the end-to-end project lifecycle, including roadmap planning, backlog management, and capacity planning, while empowering team members to drive towards project milestones, ensuring successful project execution and delivery.',
                                'Spearheaded the architecture and implementation of a unified, quasi-realtime data collection technology for TomoTherapy and Cyberknife products, enabling seamless data transmission from global installations to a centralized data-warehouse, optimizing data accessibility and analysis capabilities.',
                                'Developed an optimized data model for the storage of collected data, prioritizing fast reads for reporting purposes while maintaining acceptable write speeds, ensuring efficient data retrieval and analysis.',
                                'Led the design of a custom web-based dashboard and reporting solution (Up Center) tailored to provide role-specific views of the data, empowering stakeholders to make data-driven decisions. This solution facilitated troubleshooting, enabled proactive service opportunities, and facilitated remote service solutions, enhancing overall operational effectiveness and customer satisfaction.',
                            ]
                        },
                        {
                            'title': 'Research Software Manager',
                            'dates': '2011 - January 2014',
                            'company': 'Accuray',
                            'highlights': [
                                'Spearheaded the development of TomoTherapy Quality Assurance (TQA), a user-friendly application designed to automate the collection and analysis of key metrics for machine QA within the HiArt system. This application revolutionized daily, monthly, annual, and as- needed testing processes, resulting in significantly improved operational efficiency and informed decision-making for medical physics staff.',
                                'Managed the technical development of TomoLink, a cutting-edge application enabling remote diagnostics of the HiArt system. By automating publication of system data to a central data- warehouse, TomoLink provided invaluable proactive troubleshooting information, enhancing overall system reliability and customer support capabilities.',
                            ]
                        }],
                }
            ],
            right: [
                {
                    title: '&nbsp;',
                    items: [
                        {
                            title: 'Lead Applied Physicist',
                            dates: '2005 - 2011',
                            company: 'TomoTherapy',
                            highlights: [
                                'Led the development and research initiatives aimed at creating software applications to enhance operational efficiency and effectiveness for both internal and external stakeholders.',
                                'Directed the development of TomoTherapy Quality Assurance (TQA), a user-friendly application designed to streamline the collection and analysis of critical metrics for machine QA within the HiArt system. This innovative solution facilitated a more efficient and informed approach to daily, monthly, annual, and as-needed testing processes for medical physics staff.',
                                'Orchestrated the technical development of TomoLink, an advanced application enabling remote diagnostics of the HiArt system. By establishing a centralized data publishing mechanism to a Customer Support location, TomoLink provided invaluable proactive troubleshooting information, enhancing system reliability and customer support capabilities.',
                            ]
                        },
                        {
                            title: 'Physicist',
                            dates: '2003 - 2005',
                            company: 'TomoTherapy',
                            highlights: [
                                'Played a pivotal role in enhancing the Quality Assurance processes for the TomoTherapy radiotherapy machine.',
                                'Automated and streamlined the MVCT commissioning process. Eliminated the need for on-site visits by specialists by integrating commissioning into the manufacturing workflow. This optimized the manufacturing process, eliminated resource constraint, and reduced cost.',
                                'Automated and streamlined the treatment planning commissioning process. Transformed a previously manual and time-consuming procedure requiring specialized expertise (Medical Physicist) into a streamlined process that reduced commissioning time from approximately 30 days to 2-3 days, significantly accelerating time-to-market.',
                                'Led the development of hardware, software, and processes for dosimetric \'twinning\' of the TomoTherapy machine to a pre-created gold standard Treatment Planning System model. This twinning system allowed production to ramp up by reducing the need for specialized expertise (Medical Physicist). The gold standard models removed “snowflake models” from the install base allowing for more efficient customer support.',
                            ]
                        }
                    ]
                }
            ]
        },
        education: {
            left: [],
            right: [
                {
                    title: 'Education',
                    items: [
                        {
                            degree: 'PhD (all but dissertation) Electrical Engineering, Minor Physics',
                            school: 'University of Wisconsin - Madison',
                        },
                        {
                            degree: 'MSEE, Electrical Engineering',
                            school: 'University of Wisconsin - Madison',
                        },
                        {
                            degree: 'BSEE, Electrical Engineering',
                            school: 'University of Wisconsin - Madison',
                        }
                    ]
                }
            ]
        },
        portfolio: {
            summary: `The following are a few projects where my contributions have been instrumental to the success.
                        In all of these projects I served in a leadership role and contributed technically as an architect / full stack developer.
                        <strong>Click on each for additional details.</strong>`,
            filters: ['web', 'app', 'sandbox'],
            projects: {
                'linux_crash_course': {
                    name: 'Sandbox | Linux Crash Course',
                    short_name: 'Linux Crash Course',
                    filter: 'sandbox',
                    image: 'assets/img/portfolio/linux_crash_course/introduction.png',
                    category: 'Open Source',
                    company: 'NA',
                    urls: {
                        'Github Repo': 'https://github.com/rcravens/linux-crash-course',
                        'Youtube Playlist': 'https://www.youtube.com/playlist?list=PL1tt6av2E5daeQzJYZBXt35fI1Hb5HLS0',
                    },
                    tags: {
                        'text-bg-success': ['Linux'],
                    },
                    images: [
                        'assets/img/portfolio/linux_crash_course/linux-crash-course.png',
                        'assets/img/portfolio/linux_crash_course/introduction.png',
                        'assets/img/portfolio/linux_crash_course/linux_terminal.png',
                        'assets/img/portfolio/linux_crash_course/file_system.png',
                    ],
                    paragraphs: [
                        'Welcome to the Linux Crash Course, a comprehensive guide designed to take new Linux administrators from basic concepts to advanced system management. Whether you’re completely new to Linux or looking to solidify your skills, this course covers everything you need to know to confidently navigate, manage, and maintain Linux-based systems.',
                        '<strong>What You’ll Learn:</strong>',
                        '• Introduction to Linux',
                        '• Getting Started with the Linux Terminal',
                        '• File System Navigation',
                        '• Understanding and Using Text Editors',
                        '• Users and Permissions',
                        '• Process and Job Management',
                        '• Package Management',
                        '• Disk and File System Management',
                        '• Networking Essentials',
                        '• System Monitoring and Performance Tuning',
                        '• Basic and Advanced Shell Scripting',
                        '• Security Basics',
                        '• Backup and Recovery',
                        '• Web Server Management',
                        '• Final Projects',
                        '<strong>Who Should Take This Course:</strong>',
                        '• Aspiring Linux Administrators',
                        '• IT Professionals',
                        '• Developers',
                        '• Tech Enthusiasts',
                        'By the end of this course, you will not only have a solid foundation in Linux but also the hands-on skills required to troubleshoot, optimize, and automate tasks like a seasoned Linux administrator. Jump in and start your journey toward Linux mastery!',
                    ]
                },
                'kit': {
                    name: 'Sandbox | Kit - Application Starter Kit',
                    short_name: 'Kit',
                    filter: 'sandbox',
                    image: 'assets/img/portfolio/kit/dev_to_prod.png',
                    category: 'Open Source',
                    company: 'NA',
                    urls: {'Github Repo': 'https://github.com/rcravens/kit'},
                    tags: {
                        'text-bg-success': ['Shell', 'Python'],
                        'text-bg-info': ['AWS', 'Ansible', 'Docker', 'Infrastructure As Code', 'CI/CD', 'DevOps']
                    },
                    images: [
                        'assets/img/portfolio/kit/dev_to_prod.png',
                        'assets/img/portfolio/kit/github.png',
                        'assets/img/portfolio/kit/templates.png',
                    ],
                    paragraphs: [
                        'This is an easy-to-use application starter kit. The workflows from creating a new application, doing development, and managing dev, stage, and prod environments are included.',
                    ]
                },
                'technology_sandbox': {
                    name: 'Sandbox | Technology Sandbox - YouTube Channel',
                    short_name: 'Technology Sandbox',
                    filter: 'sandbox',
                    image: 'assets/img/portfolio/technology_sandbox/tech_box_01.png',
                    category: 'YouTube Channel',
                    company: 'NA',
                    urls: {'Technology Sandbox': 'https://www.youtube.com/@thetechnologysandbox'},
                    tags: {
                        'text-bg-secondary': ['Laravel', 'Vue.js', 'React', 'Django', 'FastAPI', 'Flask'],
                        'text-bg-primary': ['PHP', 'Python', 'JavaScript'],
                        'text-bg-success': ['MySQL', 'Redis', 'Ubuntu', 'Nginx', 'Docker'],
                        'text-bg-info': ['AWS', 'OpenAI', 'Architecture', 'Infrastructure As Code', 'CI/CD', 'DevOps']
                    },
                    images: [
                        'assets/img/portfolio/technology_sandbox/tech_box_01.png',
                        'assets/img/portfolio/technology_sandbox/tech_box_02.png',
                        'assets/img/portfolio/technology_sandbox/tech_box_03.png',
                        'assets/img/portfolio/technology_sandbox/tech_box_04.png',
                    ],
                    paragraphs: [
                        'Join me as I experiment, tinker, and push the boundaries of what\'s possible in this ever-evolving digital landscape. From in-depth product reviews and hands-on demonstrations to insightful tutorials and thought-provoking discussions. I\'m here to learn and to empower you with the knowledge and tools you need to navigate the exciting world of technology with confidence.',
                    ]
                },
                'trails': {
                    name: 'Sandbox | Trails App',
                    short_name: 'Trails',
                    filter: 'web',
                    image: 'assets/img/portfolio/trails/trails_01.png',
                    category: 'Full Stack Web Development',
                    company: 'NA',
                    urls: {},
                    tags: {
                        'text-bg-secondary': ['Laravel', 'Vue.js'],
                        'text-bg-primary': ['PHP'],
                        'text-bg-success': ['MySQL', 'Redis', 'Ubuntu'],
                        'text-bg-info': ['AWS', 'OpenAI', 'Stripe', 'Weather']
                    },
                    images: [
                        'assets/img/portfolio/trails/trails_01.png',
                        'assets/img/portfolio/trails/trails_02.png',
                        'assets/img/portfolio/trails/trails_03.png',
                        'assets/img/portfolio/trails/trails_04.png',
                        'assets/img/portfolio/trails/trails_05.png',
                        'assets/img/portfolio/trails/trails_06.png',
                    ],
                    paragraphs: [
                        'Full stack development of a web-based application that allows users to find trails, activities, and experiences that are near them.',
                    ]
                },
                'job_coach': {
                    name: 'Sandbox | AI Powered Job Coach',
                    short_name: 'Job Coach',
                    filter: 'sandbox',
                    image: 'assets/img/portfolio/ai_job_coach/analysis.png',
                    category: 'Open Source',
                    company: 'NA',
                    urls: {'Github Repo': 'https://github.com/rcravens/ai_job_coach'},
                    tags: {
                        'text-bg-success': ['Python', 'Streamlit'],
                        'text-bg-info': ['OpenAI', 'LLM', 'AI', 'Prompt Engineering', 'AI Agents']
                    },
                    images: [
                        'assets/img/portfolio/ai_job_coach/analysis.png',
                        'assets/img/portfolio/ai_job_coach/ask_the_coach.png',
                        'assets/img/portfolio/ai_job_coach/cover_letter.png',
                        'assets/img/portfolio/ai_job_coach/word_cloud.png',
                        'assets/img/portfolio/ai_job_coach/company_news.png',
                        'assets/img/portfolio/ai_job_coach/prompt_engineering.png',
                        'assets/img/portfolio/ai_job_coach/github.png',
                    ],
                    paragraphs: [
                        'This is an open-source AI-powered job coach application. It uses OpenAI\'s GPT models to generate personalized job recommendations based on user input.',
                        'The coach uses the job-seeker\'s background, industry knowledge, and skills to provide personalized advice and recommendations.',
                        'The coach can compare to a job description and provide strengths and weaknesses based on their experience and qualifications.',
                        'The coach can also generate cover letters and resumes based on user input.',
                        'The architecture uses AI Agents and prompt engineering to optimize the LLM\'s capabilities to generate high-quality content.',
                    ]
                },
                'architecture_examples': {
                    name: 'Sandbox | Architectural Examples',
                    short_name: 'Architectural',
                    filter: 'sandbox',
                    image: 'assets/img/portfolio/architecture/web_alb_docker_swarm.png',
                    category: 'Cloud Architecture',
                    company: 'NA',
                    urls: {},
                    tags: {
                        'text-bg-success': ['Architecture', 'Cloud', 'AWS', 'Docker'],
                    },
                    images: [
                        'assets/img/portfolio/architecture/web_alb_autoscale.png',
                        'assets/img/portfolio/architecture/web_alb_docker_swarm.png',
                        'assets/img/portfolio/architecture/web_lb_phpfpm.png',
                        'assets/img/portfolio/architecture/web_simple_arch.png',
                        'assets/img/portfolio/architecture/dropbox.png',
                    ],
                    paragraphs: [
                        'A few examples of cloud architecture showcasing the integration of various AWS services.',
                        'These are from various "sandbox" projects that I have worked on during my free time.'
                    ]
                },
                'gc_assetiq': {
                    name: 'GenesisCare | Asset IQ',
                    short_name: 'Asset IQ',
                    filter: 'web',
                    image: 'assets/img/portfolio/assetiq/assetiq-01.jpg',
                    category: 'Full Stack Web Development',
                    company: 'GenesisCare (formerly 21st Century Oncology)',
                    urls: {},
                    tags: {
                        'text-bg-secondary': ['Laravel', 'Vue.js'],
                        'text-bg-primary': ['PHP'],
                        'text-bg-success': ['MySQL', 'Redis', 'Ubuntu'],
                        'text-bg-info': ['Active Directory', 'Workday', 'ADP', 'Azure']
                    },
                    images: [
                        'assets/img/portfolio/assetiq/assetiq-01-clean.jpg',
                        'assets/img/portfolio/assetiq/assetiq-02-clean.jpg',
                        'assets/img/portfolio/assetiq/assetiq-03-clean.jpg',
                        'assets/img/portfolio/assetiq/assetiq-04-clean.jpg',
                    ],
                    paragraphs: [
                        'Delivering a comprehensive clinical operations platform utilized by executives, operational leaders, and team members across various departments including Regulatory, Dosimetry, Physics, Engineering, BI, and HR. Our business objectives are to:',
                        `<ul>
                    <li>Consolidate and integrate operational data to offer a centralized hub for analytics, dashboards, and reporting.</li>
                    <li>Ensure timely access to relevant data for informed decision-making at every level.</li>
                    <li>Track operational KPIs along the clinical pathway with robust data analysis capabilities for actionable insights.</li>
                    <li>Streamline repetitive processes through automation.</li>
                    <li>Offer user-friendly features for efficient collection of operational data.</li>
                </ul>`
                    ]
                },
                '21c_adaptivo': {
                    name: 'GenesisCare | Adaptivo',
                    short_name: 'Adaptivo',
                    filter: 'web',
                    image: 'assets/img/portfolio/adaptivo/adaptivo-01.jpg',
                    category: 'Full Stack Web Development',
                    company: '21st Oncology / Standard Imaging',
                    urls: {
                        'Standard Imaging': 'https://www.standardimaging.com/qa-software/adaptivo'
                    },
                    tags: {
                        'text-bg-secondary': ['Laravel', 'Flask'],
                        'text-bg-primary': ['PHP', 'Python', 'Matlab'],
                        'text-bg-success': ['MySQL', 'Redis', 'Ubuntu'],
                    },
                    images: [
                        'assets/img/portfolio/adaptivo/adaptivo-01.png',
                        'assets/img/portfolio/adaptivo/adaptivo-02.png',
                        'assets/img/portfolio/adaptivo/adaptivo-03.png',
                        'assets/img/portfolio/adaptivo/adaptivo-04.png',
                        'assets/img/portfolio/adaptivo/adaptivo-05.png',
                        'assets/img/portfolio/adaptivo/adaptivo-06.png',
                    ],
                    paragraphs: [
                        'Patient quality assurance application used in radio-therapy (RT) departments to compare delivered versus planned treatment volumes. Expected dose is computed and compared to the actual delivered dose measured using the external panel. This allows the oncology team to alter the treatment plan when anatomical changes occur that result in unacceptable planned versus actual differences. This application is an FDA product that is marketed by Standard Imaging.',
                        'Development included an API that allowed the integration of Adaptivo reports into the billing process for the clinic. This resulted in north of $10 million per year in revenue.',
                        'Each clinic would have their own Adaptivo server deployed locally. This improved calculation performance by placing the server closer to the patient data source. The API allowed the development of a centralized server dashboard to monitor each server.'
                    ]
                },
                'tomo_upcenter': {
                    name: 'Accuray | Up Center',
                    short_name: 'Up Center',
                    filter: 'web',
                    image: 'assets/img/portfolio/upcenter/upcenter-01.jpg',
                    category: 'Full Stack Web Development',
                    company: 'Accuray / TomoTherapy',
                    urls: {},
                    tags: {
                        'text-bg-secondary': ['ASP.NET', '.NET Framework'],
                        'text-bg-primary': ['C#'],
                        'text-bg-success': ['IIS', 'SQL Server', 'RabbitMQ'],
                        'text-bg-info': ['Remote Data Collection Agent', 'Centralized Data Warehouse']
                    },
                    images: [
                        'assets/img/portfolio/upcenter/upcenter-01.png',
                        'assets/img/portfolio/upcenter/upcenter-02.png',
                        'assets/img/portfolio/upcenter/upcenter-03.png',
                        'assets/img/portfolio/upcenter/upcenter-04.png',
                        'assets/img/portfolio/upcenter/upcenter-01.png',
                    ],
                    paragraphs: [
                        `Operational dashboard for monitoring and remotely troubleshooting the TomoTherapy radio-therapy (RT)
                treatment machines throughout the worldwide installation base. The TomoLink component was deployed as part
                of each machine and provided a secure gateway for remote access and quasi-realtime data collection.
                The Up Center application processed incoming data and provided a live view into clinical operations around the world.`,

                        `<ul>
                    <li>The Support Team leveraged the quasi-realtime stream of data to proactively target issues</li>
                    <li>The remote access features were used by the Support Team to troubleshoot and fix when possible or provide a solution to a dispatched Field Support Engineer</li>
                    <li>Operational Team members monitored consumable parts and proactively scheduled maintenance based on hours</li>
                    <li>Marketing Team learned from high-performing centers and created training material that helped all centers</li>
                    <li>Engineering Team monitored errors and targeted solutions in future releases
                </ul>`
                    ]
                },
                'tomo_tqa': {
                    name: 'Accuray | TomoTherapy Quality Assurance (TQA)',
                    short_name: 'TQA',
                    filter: 'web',
                    image: 'assets/img/portfolio/tqa/tqa-01.jpg',
                    category: 'Full Stack Web Development',
                    company: 'TomoTherapy',
                    urls: {
                        'Sales PDF': 'https://www.accuray.com/wp-content/uploads/tt-all-qa-kit-en-mkt-tt-0515-0113.pdf'
                    },
                    tags: {
                        'text-bg-secondary': ['ASP.NET', '.NET Framework'],
                        'text-bg-primary': ['C#'],
                        'text-bg-success': ['IIS', 'SQL Server', 'RabbitMQ'],
                        'text-bg-info': ['Remote Data Collection Agent']
                    },
                    images: [
                        'assets/img/portfolio/tqa/tqa-01.png',
                        'assets/img/portfolio/tqa/tqa-02.png',
                        'assets/img/portfolio/tqa/tqa-03.png',
                        'assets/img/portfolio/tqa/tqa-04.png',
                        'assets/img/portfolio/tqa/tqa-05.png',
                        'assets/img/portfolio/tqa/tqa-06.png',
                    ],
                    paragraphs: [
                        `TQA (TomoTherapy Quality Assurance) is a calendar based tool that streamlines machine QA by providing
                    automated data collection, analysis, and trending tools. TQA saves significant time and empowers
                    Medical Physicists to perform required protocols (AAPM TG-148) in an efficient manner.
                    TQA leverages on-board detectors to allow clinicians to quickly and easily assess the day-to-day consistency
                    of a wide variety of parameters.`,
                        `Prior to TQA many of these QA protocols required collection of data with water tanks or film. This required
                    Medical Physics staff to perform the data collection. With TQA, daily QA could be performed by the
                    Therapist and the Medical Physicist notified if it failed.`,
                        `The TQA platform was extensible by deploying additional QA modules. Each of the modules can be
                    licensed individually by the business.`
                    ]
                },
                'diglabs_memberowl': {
                    name: 'DigLabs | Member Owl',
                    short_name: 'Member Owl',
                    filter: 'web',
                    image: 'assets/img/portfolio/memberowl/memberowl-01.jpg',
                    category: 'Full Stack Web Development',
                    company: 'Dig Labs',
                    urls: {
                        'https://get.memberowl.com/': 'https://get.memberowl.com/'
                    },
                    tags: {
                        'text-bg-secondary': ['Laravel', 'Vue.js'],
                        'text-bg-primary': ['PHP'],
                        'text-bg-success': ['MySQL', 'Redis', 'Ubuntu'],
                        'text-bg-info': ['PaySimple', 'MailChimp', 'Twilio', 'Mailgun'],
                    },
                    images: [
                        'assets/img/portfolio/memberowl/memberowl-01.png',
                        'assets/img/portfolio/memberowl/memberowl-02.jpg',
                        'assets/img/portfolio/memberowl/memberowl-03.jpg',
                        'assets/img/portfolio/memberowl/memberowl-04.jpg',
                        'assets/img/portfolio/memberowl/memberowl-05.jpg',
                        'assets/img/portfolio/memberowl/memberowl-06.jpg',
                        'assets/img/portfolio/memberowl/memberowl-07.jpg',
                        'assets/img/portfolio/memberowl/memberowl-08.jpg',

                    ],
                    paragraphs: [
                        `Member Owl is a professional web-based membership solution developed to help manage membership data, automate billing, and improve retention.`,
                        `Member Owl partners with industry leaders to learn their secret sauce. This knowledge is transformed into features and workflows that users leverage in their daily operations.`,
                        `Member Owl leverages cloud infrastructure to provide a reliable, secure and safe hosting environment.`,
                    ]
                },
                'diglabs_bids': {
                    name: 'DigLabs | BIDS - Online Auctions',
                    short_name: 'BIDS',
                    filter: 'web',
                    image: 'assets/img/portfolio/bids/bids.jpg',
                    category: 'Full Stack Web Development',
                    company: 'Dig Labs',
                    urls: {
                        'https://bids.io': 'https://bids.io'
                    },
                    tags: {
                        'text-bg-secondary': ['Laravel'],
                        'text-bg-primary': ['PHP'],
                        'text-bg-success': ['MySQL', 'Redis', 'Ubuntu'],
                        'text-bg-info': ['Stripe', 'Mailgun', 'Twilio', 'AWS'],
                    },
                    images: [
                        'assets/img/portfolio/bids/bids.png',
                        'assets/img/portfolio/bids/bids-03.png',
                        'assets/img/portfolio/bids/bids-04.png',
                        'assets/img/portfolio/bids/bids-05.png',
                        'assets/img/portfolio/bids/bids-06.png',
                        'assets/img/portfolio/bids/bids-07.png',
                        'assets/img/portfolio/bids/bids-08.png',
                        'assets/img/portfolio/bids/bids-09.png',
                    ],
                    paragraphs: [
                        `BIDS is an easy-to-use low-cost solution for organizations to manage and host a professional auction.`,
                        `BIDS leverages best-in-class integrations to provide secure payment collection.`,
                    ]
                },
                'tomo_twinning': {
                    name: 'Accuray | Twinning Platform',
                    short_name: 'Twinning Platform',
                    filter: 'app',
                    image: 'assets/img/portfolio/twinning/twinning_platform.jpg',
                    category: 'Application &amp; Integrated Hardware',
                    company: 'TomoTherapy',
                    urls: {
                        'Patent PDF': 'https://patentimages.storage.googleapis.com/6e/b1/f4/f898c26f99d9a4/US7801269.pdf'
                    },
                    tags: {
                        'text-bg-secondary': ['MFC', 'Win32'],
                        'text-bg-primary': ['Visual C++'],
                        'text-bg-info': ['Serial Communication', '2D Motion', 'Electrometer'],
                    },
                    images: [
                        'assets/img/portfolio/twinning/twin-01.png',
                        'assets/img/portfolio/twinning/twin-02.png',
                        'assets/img/portfolio/twinning/twin-03.png',
                        'assets/img/portfolio/twinning/twin-04.png',
                        'assets/img/portfolio/twinning/twin-06.png',
                    ],
                    paragraphs: [
                        `Developed a platform that included hardware and software and was used by the Manufacturing Team to dosimetrically
                    twin each machine during the manufacturing process to a gold standard.`,
                        `The hardware included a frame that could be bolted to the machine that secured a scanning platform that used
                    stepper motors to drive an ion chamber in two-deminsions in the radiation field.`,
                        `The software simultaneously controlled the scanning platform while sampling the ion chamber to measure the field.
                    The data collected allowed tuning the output, energy, and field widths to a gold standard.`,
                        `Previously, data was collected by Medical Physicists and a unique treatment beam model per machine was created.
                    This process required a specialized skill-set and took 2-3 days. The new process could be performed by the
                    Manufacturing Techs and takes less than 1 hour.`,
                    ]
                },
                'tomo_tps_model': {
                    name: 'Accuray | Treatment Planning Model',
                    short_name: 'Treatment Planning Model',
                    filter: 'app',
                    image: 'assets/img/portfolio/treatment_planning_model/tomotherapy_machine.jpg',
                    category: 'Application',
                    company: 'TomoTherapy',
                    urls: {},
                    tags: {
                        'text-bg-secondary': ['MFC', 'Win32'],
                        'text-bg-primary': ['Visual C++'],
                        'text-bg-info': ['Cluster Computing'],
                    },
                    images: [
                        'assets/img/portfolio/treatment_planning_model/tomotherapy_machine.png',
                        'assets/img/portfolio/treatment_planning_model/tomo_no_covers.png',
                        'assets/img/portfolio/treatment_planning_model/tomo-dose.png',
                    ],
                    paragraphs: [
                        `Automated the optimization of a treatment model to a set of measured data. The measured data set included output,
                    energy, transverse profiles, and longitudinal profiles for each field width. The optimization process then
                    automatically iterated on solutions that converged by tuning various model parameters.`,
                        `The optimization model was greatly simplified by using a formula for the energy spectrum that utilized two
                    parameters to reduce the optimization space and automatically constrain to realistic solutions.`,
                        `Previously, the company had only shipped a few machines and the treatment beam modeling was being completed
                    manually by the VP of Research. The optimization space was large and took the better part of a month to
                    accomplish manually. This automated solution reduced the time to a few hours.`,
                    ]
                },
                'tomo_mvct': {
                    name: 'Accuray | Mega-Voltage CT (MVCT) Commissioning',
                    short_name: 'MVCT Commissioning',
                    filter: 'app',
                    image: 'assets/img/portfolio/mvct/tomo_mvct.png',
                    category: 'Application',
                    company: 'TomoTherapy',
                    urls: {},
                    tags: {
                        'text-bg-secondary': ['MFC', 'Win32'],
                        'text-bg-primary': ['Visual C++'],
                        'text-bg-info': ['CT Reconstruction', 'Image Processing'],
                    },
                    images: [
                        'assets/img/portfolio/mvct/tomo_mvct.png',
                        'assets/img/portfolio/mvct/mvct-02.png',
                        'assets/img/portfolio/mvct/mvct-03.png',
                        'assets/img/portfolio/mvct/mvct-04.jpg',
                    ],
                    paragraphs: [
                        `This feature set was added to an in-house engineering tool and allowed the Manufacturing Techs to
                    collect data and commission the mega-voltage CT (MVCT) imaging system on the TomoTherapy treatment machine.`,
                        `The imaging system is a critical feature that allows patients to be accurately aligned on the system before
                    their radio-therapy (RT) treatment. With the MVCT Commissioner it was easy to commission as part of the
                    manufacturing process or re-commission in the field by the Service Team if necessary.`,
                        `Previously, the plan was to have an MVCT specialist travel to any location that needed MVCT commissioning.
                    This new solution saved travel costs and only requires 1 hour by a Manufacturing Tech.`,
                    ]
                },
            }
        },
        testimonials: [
            {
                name: 'Jessica Vanhooser',
                title: 'GenesisCare - Director Revenue Integrity',
                text: `I would like to extend my sincere recommendation on behalf of Robert Cravens. Robert is a remarkable individual who has made significant contributions to Genesiscare. As Robert’s teammate at Genesiscare for the last 2 years, I’ve benefited from his extensive knowledge, endless ability to problem solve, and his tireless work ethic. Robert’s expert-level knowledge quickly stood out and is something that I have come to count on tremendously.
                                    <br/><br/>
                                    What is particularly noteworthy is Robert’s creation of and maintaining the Reconciliation Work Tool that my medical coding team uses daily to track potential missed codes, coding errors, and is a communication tool between the coders and the offices. Robert seamlessly created an option to have superusers so that processes could be more streamlined within the tool. He is consistently called upon to make changes at the last minute and always answers the call swiftly and efficiently. He has been a vital part of our team.
                                    <br/><br/>
                                    Robert’s dedication, professionalism, and results-driven mindset make him an invaluable asset, and I am confident he will continue to make significant contributions in his professional journey. He has an excellent rapport with many employees within our organization and I wholeheartedly recommend him for any endeavor he chooses to pursue.`,
                image: 'assets/img/testimonials/jessica-vanhooser.jpeg',
            },
            {
                name: 'Amber Smith',
                title: 'GenesisCare - Head of Radiation Therapy Clinical Operations and Transformation',
                text: `Bob Cravens has my highest recommendation, and any future collaborator, employer, or teammate will find that they are lucky to have him on board. Not only is Bob a master at his craft, but he has the rare ability to understand the user, interpret and translate the languages of IT and Operations (both terms used very broadly) and bridge the gap seamlessly. I worked with Bob as a business partner/customer requesting tools to provide visibility to leaders on operational efficiencies, rostering, and business metrics. Despite challenging data quality, he translated those business requests into easy to use dashboards. He is professional and solution focused, methodical and meticulous, accessible and responsive. I cannot recommend him enough.`,
                image: 'assets/img/testimonials/amber_smith.jpeg',
            },
            {
                name: 'Gary Burns',
                title: 'GenesisCare - Director of Engineering Services',
                text: `Bob has an outstanding work ethic and was a key contributor to a major program rollout we were assigned. This project involved working with leaders from several departments and a tight timeline. Bob was able to take input from multiple trade groups and make appropriate updates efficiently. He was an excellent communicator throughout the process and an invaluable team member. This project wouldn't have succeeded without his efforts. Bob would be an excellent addition to any team you have, or a new team that is being assembled.`,
                image: 'assets/img/testimonials/gary_burns.jpeg',
            },
            {
                name: 'Gustavo Olivera',
                title: '21st Century Oncology - CTO and acting COO',
                text: `I had the privilege of supervising Bob during my tenure as the VP of Research at TomoTherapy and later as the CTO at GenesisCare (formerly 21st Century Oncology). Throughout our time working together, Bob consistently demonstrated an exceptional talent for dissecting intricate business and technical processes. His ability to meticulously map out these complexities and devise innovative solutions significantly enhanced our operational efficiency and effectiveness.
                                    <br/><br/>
                                    One of Bob's most remarkable qualities is his knack for identifying areas of improvement and implementing strategies that not only streamline workflows but also yield cost savings for the organization. His forward-thinking approach and dedication to excellence have undoubtedly made a lasting impact on our team and the broader scope of our projects.
                                    <br/><br/>
                                    I wholeheartedly endorse Bob for any role that demands a blend of strategic thinking, technical acumen, and a passion for driving positive change. He is a valuable asset to any organization and a pleasure to work alongside.`,
                image: 'assets/img/testimonials/gustavo-olivera.jpeg',
            },
            {
                name: 'Leandro Barreca',
                title: 'GenesisCare - Executive Director Regulatory Affairs',
                text: `During my tenure as the Executive Director of Regulatory Affairs at GenesisCare, Bob led the development of an integrated solution designed to efficiently manage regulatory and quality data crucial for our clinics. This comprehensive system effectively streamlined the oversight of accreditation, licenses, and audit data, playing a pivotal role in ensuring clinics' compliance with both local and federal requirements.`,
                image: 'assets/img/testimonials/leandro_barreca.jpeg',
            },
            {
                name: 'Trish Rasmus',
                title: 'GenesisCare - Chief Operating Officer',
                text: `It is my pleasure to endorse Bob Cravens for employment in your organization.
                                    <br/><br/>
                                    I have known Bob for over 3 years, during which he worked as a Senior Software Engineering Manager.
                                    <br/><br/>
                                    Bob partnered with my team on over 14 projects during the last 3 years. These projects
                                    involved Bob leveraging technology to enhance our business performance. Including
                                    automated integration of our clinical data to be used to manage operational and clinical
                                    excellence metrics. Building rostering web applications. Designing and implementing
                                    operational dashboards to improve clinical workflows.
                                    <br/><br/>
                                    Bobs contribution to these projects was exemplary. He was agile and adaptable to the
                                    changing needs of the business throughout our work together. He was results driven
                                    and was exceptional at bridging the gap between strategy and reality. I am confident
                                    that he will display a high degree of commitment and discharge his job duties and
                                    responsibilities with diligence in your organization.
                                    <br/><br/>
                                    I recommend Bob without reservations.`,
                image: 'assets/img/testimonials/trish_rasmus.jpeg',
            },
            {
                name: 'Carlos A Rodriguez',
                title: 'GenesisCare - VP Data and Insights',
                text: `I highly recommend Bob Cravens, for his understanding of application development and innovation in the healthcare industry. He creates strong relationships and mentors team members to obtain strong results.He has delivered solutions that positively impact each team in the company. He has a unique collaboration approach to get business users engaged in their solution making it usable and adaptable in a short timeframe. It is a pleasure to work with him.`,
                image: 'assets/img/testimonials/carlos_rodriguez.jpeg',
            }
        ],
        contacts: [
            {
                title: 'Email:',
                icon: 'bi bi-envelope',
                text: 'bob.cravens@gmail.com',
            },
            {
                title: 'LinkedIn:',
                icon: 'bi bi-linkedin',
                text: '<a href="https://www.linkedin.com/in/bobcravens">https://www.linkedin.com/in/bobcravens</a>',
            },
            {
                title: 'Phone:',
                icon: 'bi bi-phone',
                text: '+1-608-320-1824',
            }
        ]
    }
}