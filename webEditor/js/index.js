window.onload = function(){
    /*编辑器初始化*/
    var ehtm = ace.edit("html");
    var ecss = ace.edit("css");
    var ejs = ace.edit("js");
    /*主题初始化*/
    ehtm.setTheme("ace/theme/monokai");
    ehtm.session.setMode("ace/mode/html");
    ecss.setTheme("ace/theme/monokai");
    ecss.session.setMode("ace/mode/css");
    ejs.setTheme("ace/theme/monokai");
    ejs.session.setMode("ace/mode/javascript");
    /*显示前的准备*/
    var ifram = window.frames["result"].document;
    var res = document.querySelector("#show h2");

    document.getElementById('run').onclick = function(){
        /*获取DOM*/
        var style = ifram.getElementsByTagName('style')[0] || ifram.createElement("style");
        var sc = ifram.getElementsByTagName('script')[0] || ifram.createElement("script");
        /*配置内容*/
        style.type = "text/css";
        style.textContent = "\nbody{\nbackground-color: #fff;\n}" + ecss.getValue();
        // sc.type = "text/javascript";
        // sc.textContent = "//<![CDATA[\n" + ejs.getValue() + "\n//]]> ";
        /*添加到iframe*/
        ifram.body.innerHTML = ehtm.getValue();
        ifram.getElementsByTagName('head')[0].appendChild(style);
        // ifram.getElementsByTagName('head')[0].appendChild(sc);
        window.frames['result'].eval(ejs.getValue());
        
        res.style.display = "none";
    };
    document.body.onhashchange = function(){
    };
};