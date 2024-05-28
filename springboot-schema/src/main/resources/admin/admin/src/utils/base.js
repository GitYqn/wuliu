const base = {
    get() {
        return {
            url : "http://localhost:8080/springcloud142f7/",
            name: "springcloud142f7",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springcloud142f7/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "智能物流管理系统"
        } 
    }
}
export default base
