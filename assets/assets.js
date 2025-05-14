// import user_image from './user-image.png';
import code_icon from './images/code_icon.png';
import code_icon_dark from './images/code_icon_dark.png';
import grad_icon from './images/grad.png';
import grad_icon_dark from './images/grad_dark.png';
import work_icon from './images/work.png';
import work_icon_dark from './images/briefcase_dark.png'

import vscode from './images/vscode.png';
import xcode from './images/xcode.png';
import mongodb from './images/mongodb2.png';
import firebase from './images/firebase3.png'
import postgreSQL from './images/postgresql.png';
import node from './images/node.png';
import git from './images/git.png';
import reactologo from './images/react.png';
import reactlogos from './images/reactlogos.png';
import nextjs from './images/nextjs.png';
import swift from './images/swift.png';
import aws from './images/aws.png';
import javascript from './images/javascript.png';
import python from './images/python.png';
import flask from './images/flask.png';
import fastapi from './images/fastapi.png'; 
import express from './images/express.png';
import jsonwebtoken from './images/jsonwebtoken.png';
import apollo from './images/apollo.png';
import graphql from './images/graphql.png';
import openai from './images/openai.png';
import reactnative from './images/reactnative.png';
import axios from './images/axios.png';
import gemini from './images/gemini.png';
import mysql from './images/mysql.png';
import expogo from './images/expogo.png';
import typescript from './images/typescript.png';
import nextauth from './images/nextauth.png';
import vercel from './images/vercel.png';
import turbopack from './images/turbopack.png';
import eslint from './images/ESLint.png';
import webpack from './images/webpack.png';
import tailwind from './images/tailwind.png';
import yahoo from './images/yahoo.png';

import web_icon from './images/desktop.png';
import mobile_icon from './images/mobile.png';
import ui_icon from './images/ui.png';
import llm_icon from './images/llm.png';
import send_icon from './images/send_icon.png';

// export const assets = {
//     user_image,
// };

export const assets = {
    code_icon,
    code_icon_dark,
    grad_icon,
    grad_icon_dark,
    work_icon,
    work_icon_dark,
    vscode,
    xcode,
    mongodb,
    firebase,
    postgreSQL,
    node,
    git,
    web_icon,
    mobile_icon,
    ui_icon,
    llm_icon,
    send_icon,
    reactologo,
    reactlogos,
    aws,
    nextjs,
    swift,
    javascript,
    python,
    flask,
    fastapi,
    express,
    jsonwebtoken,
    apollo,
    graphql,
    gemini,
    openai,
    reactnative,
    axios,
    mysql,
    expogo,
    typescript,
    nextauth,
    vercel,
    turbopack,
    eslint,
    webpack,
    tailwind,
    yahoo,
}

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },

]

export const serviceData = [
    {icon: assets.web_icon, title: 'Web Developer', description: 'Creating fast, scalable web apps with modern frameworks and clean architecture.'},
    {icon: assets.mobile_icon, title: 'Mobile App Developer', description: 'Building intuitive, high-performance mobile apps for iOS and Android.'},
    {icon: assets.ui_icon, title: 'UI/UX Design', description: 'Designing sleek and seamless user-centered interfaces that feel as good as they look and provide that optimal user experience.'},
    {icon: assets.llm_icon, title: 'AI Leveraging', description: 'Leveraging AI and building applications powered by Large Language Models for real-world use. '},
]

export const projectData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: ''},
]

export const projectsData = [
    {
        title: 'Fullstack Project',
        description: 'Web Design',
        bgImage: '/work1.jpg',
    },
    {
        title: 'Geo based app',
        description: 'Mobile app',
        bgImage: '/work2.jpg'
    },
    {
        title: 'UI/UX Desiging',
        description: 'User Experience',
        bgImage: '/work3.jpg'
    },
    {
        title: 'LLM',
        description: 'AI Leveraging',
        bgImage: '/work4.jpg'
    },

]

export const webData = [
    {
        title: 'Delicioso',
        description: 'A recipe web app that allows users to search, save, and create recipes along with cookbooks.',
        bgImage: '/deliciosoweb.png',
        tools: [assets.reactlogos, assets.javascript, assets.mysql, assets.node, assets.git],
        link: 'https://github.com/ayadalshaikhli/Delicioso'
    },
    {
        title: 'AI Finance Advisor',
        description: 'A simple personal finance assistant that categorizes spending, gets trends and gives plain summaries of the user\'s spending.',
        bgImage: '/work2.jpg',
        tools: [assets.nextjs, assets.typescript, assets.tailwind, assets.python, assets.fastapi, assets.openai, assets.postgreSQL, assets.nextauth, assets.vercel],
        link: 'https://github.com/louisvincelli/ai-finance-advisor'
    },
    {
        title: 'Varcade',
        description: 'A web app that allows users to play retro arcade games, earn points and put their name on the leaderboard.',
        bgImage: '/varcade.png',
        tools: [assets.reactlogos, assets.javascript, assets.node, assets.mongodb, assets.graphql, assets.apollo, assets.jsonwebtoken, assets.git],
        link: 'https://github.com/Vidfinnx/varcade'
    },
    {
        title: 'AI-Powered Investment Analyzer',
        description: 'An AI-stock predictor that uses LLM to analyze stock prices and give predictions on future stock prices.',
        bgImage: '/work4.jpg',
        tools: [assets.reactlogos, assets.nextjs, assets.typescript, assets.tailwind, assets.python, assets.openai, assets.flask, assets.yahoo, assets.vercel],
        link: 'https://github.com/louisvincelli/investment-analyzer'
    },
]

export const mobileData = [
    {
        title: 'Delicioso',
        description: 'A recipe mobile app that allows users to search, save, and create recipes along with cookbooks.',
        bgImage: '/deliciosomobile.png',
        tools: [assets.reactnative, assets.typescript, assets.axios, assets.firebase, assets.expogo],
        link: 'https://github.com/louisvincelli'
    },
    {
        title: 'Finance Tracker App',
        description: 'A simple finance tracker app that allows users to track their income and expenses.',
        bgImage: '/expense.png',
        tools: [assets.reactnative, assets.typescript, assets.axios, assets.firebase, assets.expogo],
        link: 'https://github.com/louisvincelli/expense-tracker-app'
    },
    {
        title: 'Mental Health Journal',
        description: 'Daily Journaling app that uses LLM to identify mood patterns and provide insights.',
        bgImage: '/work3.jpg',
        tools: [assets.reactnative, assets.typescript, assets.postgreSQL, assets.python, assets.fastapi, assets.openai, assets.aws, assets.expogo],
        link: 'https://github.com/louisvincelli/mental-health-journal'
    },
    {
        title: 'LLM Powered Flashcards',
        description: 'An LLM powered flashcard app + Quiz Generator that uses AI to create personalized flashcards and quizzes based on user input.',
        bgImage: '/work4.jpg',
        tools: [assets.reactnative, assets.typescript, assets.python, assets.fastapi, assets.gemini, assets.postgreSQL, assets.expogo],
        link: 'https://github.com/louisvincelli/llm-powered-flashcards'
    },
]


export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark,
        title: 'Languages', description: 'React/Next.js, React Native, Typescript, Javascript, Python, HTML, CSS'
    },
    { icon: assets.grad_icon, iconDark: assets.grad_icon_dark,
        title: 'Education', description: 'Aggie Alumni from University of California, Davis'
    },
    {
        icon: assets.work_icon, iconDark: assets.work_icon_dark,
        title: 'Projects', description: 'Built projects for web and mobile'
    }
];

export const toolsData = [
    assets.reactlogos, assets.nextjs, assets.expogo, assets.tailwind, assets.aws, assets.mongodb, assets.firebase, assets.postgreSQL, assets.fastapi, assets.flask, assets.git,
];