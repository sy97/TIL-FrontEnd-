//main.js 와 같은 역할을 할 파일
import { createWebHashHistory, createWebHistory, createRouter } from 'vue-router'

import Home from './Home.vue'
import About from './About.vue'

//시작페이지에서 사용할수 있게 객체 생성해서 내보내주기.
export default createRouter({
    //필수 프로퍼티
    history : createWebHistory(),
    routes : [
        {
            path : "/", //이런 경로가 들어오면 나는 HOME이라는 컴포넌트를 실행시키겠다.
            component : Home
        },
        {
            path : "/about", //http:google.com/about 이란 경로면 about이라는 컴포넌트 실행.
            component : About
        }
    ]
})