module.exports = {
    markdown: {
        lineNumbers: true
    },
    title: '灰熊の博客',
    description: '灰熊的博客',
    head: [
        ['link', { rel: 'icon', href: '/flower.ico' }],
    ],
    themeConfig: {
        nav: [
            { 
                text: "博客",
                link: "/blog/"
            },
            {
                text: "面试题",
                link: "/interview/"
            },
            { 
                text: '阅读', 
                link: "/book/"
            },
            { 
                text: 'Github', 
                link: 'https://github.com/huixiongyu/huixiongyu.github.io'
            }
        ],
        sidebar: {
            '/blog/': [
                '',
                {
                    title: '生活',
                    collapsable: true,
                    children: [
                        '/blog/Life/2020-action-list',
                        '/blog/Life/train-habit',
                        '/blog/Life/about-PG-entrance-exam',
                        '/blog/Life/graduation-thesis'
                    ]
                },
                {
                    title: '前端开发',
                    collapsable: true,
                    children: [
                        '/blog/JavaScript/fe-guide'
                    ]
                },
                {
                    title: 'Linux',
                    collapsable: true,
                    children: [
                        '/blog/Linux/when-we-use-deepin',
                        '/blog/Linux/typecho-migration'
                    ]
                }
            ],
            '/interview/': [
                '',
                '00-experiences',
                '01-html-css',
                '02-javascript',
                '03-vue',
                '04-React',
                '05-min-program',
                '06-jquery',
                '07-about-frontend',
                '08-mobile',
                '08-webpack',
                '09-network-principle',
                '10-code',
                '11-algorithm',
                '12-other',
                '99-personal'
            ],
            '/book/': [
                '',
                'plan-and-record',
                {
                    title:'JavaScript',
                    collapsable: true,
                    children:[
                      '/book/JavaScript/04-datastruct-JavaScript-description',
                      '/book/JavaScript/05-Eggjs-Practice'
                    ]
                },
                {
                    title:'Vue',
                    collapsable: true,
                    children:[
                      '/book/Vue/01-vue-up-and-running'
                    ]
                },
                {
                    title:'React',
                    collapsable: true,
                    children:[
                      '/book/React/00-reactjs-practice',
                      '/book/React/01-deep-learning-react-stack',
                      '/book/React/02-react-state-management-and-common-refator'
                    ]
                },
                {
                    title:'小程序',
                    collapsable: true,
                    children:[
                      '/book/Mini/01-mini-program-practice'
                    ]
                },
                {
                    title: 'Python',
                    collapsable: true,
                    children:[
                        '/book/Python/03-Docker-Deep-Dive'
                    ]
                },
                {
                    title: '数据库',
                    collapsable: true,
                    children:[
                        '/book/DB/01-left-mongodb-right-redis'
                    ]
                },
                {
                    title:'沟通',
                    collapsable: true,
                    children:[
                      '/book/communication/nonviolent-communication'
                    ]
                }
            ],
            '/': [
                ''
            ]
        },
        sidebarDepth: 2,
        displayAllHeaders: true,
        nextLinks: true,
        prevLinks: true,
        lastUpdated: '更新时间', 
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '帮助我完善这篇内容🙏'
    }    
}