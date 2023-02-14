module.exports = {
    root: true,
    env: {
        browser: true,
        amd:true,
        node: true,
        es6: true,
    },
    extends: [
       'eslint:recommended',
       'next/core-web-vitals',
       'plugin:prettier/recommended',
       'next',
       'plugin:@next/next/recommended',

    ],
    rules: {
        'semi': ['error' , 'always'],
        "react/no-unescaped-entities": "off",
        "@next/next/no-page-custom-font": "off"
      
    },
}
