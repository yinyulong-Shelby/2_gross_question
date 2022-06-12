function notice1(){
    $.ajax("choose.json",{
            data:{},
            dataType:'json',
            type:'get',
            async:'false',
            success:function(data){				         
                if(data.length>0){   //项目列表
                    // int var booltest = false/
                    // let 
                    var listInfo="";
                    // $ jquery each foreach() /
                    // 匿名函数 this
                    $.each(data,function(){
                            listInfo+=
                        '<div class="question" id="s'+this.no+'">'+
                            '<p class="wen">'+
                                this.number+'&emsp;'+this.question+
                            '</p>'+
                            '<div class="answer">'+
                                '<button type="button" id="'+'c0k'+this.answer+'s'+this.no+ '"class="A">' + this.A + '</button>' +
                                '<button type="button" id="'+'c1k'+this.answer+'s'+this.no+ '"class="B">' + this.B + '</button>' +
                                '<button type="button" id="'+'c2k'+this.answer+'s'+this.no+ '"class="C">' + this.C + '</button>' +
                                '<button type="button" id="'+'c3k'+this.answer+'s'+this.no+ '"class="D">' + this.D + '</button>' +
                            '</div>'+
                        '</div>';
                        
                    });
                    $("#Select")[0].innerHTML=listInfo;	

                }
            }
    //		error:function(xhr,type,errorThrown){			
    //			alert("系统繁忙，请联系管理员");
    //		}
        })
    }
function notice2(){
    $.ajax("TF.json",{
        data:{},
        dataType:'json',
        type:'get',
        async:'false',
        success:function(data){				         
            if(data.length>0){   //项目列表
                var listInfo="";
                $.each(data,function(){
                    listInfo+=
                    '<div class="question" id="s'+this.no+'">'+
                        '<p class="wen">'+
                            this.number+'&emsp;'+this.question+
                        '</p>'+
                        '<div class="answer">'+
                            '<button type="button" id="'+'c0k'+this.answer+'s'+this.no+ '"class="A">' + this.T + '</button>' +
                            '<button type="button" id="'+'c1k'+this.answer+'s'+this.no+ '"class="B">' + this.F + '</button>' +
                        '</div>'+
                    '</div>';
                });
                $("#Select")[0].innerHTML=listInfo;
            }
        }
    })
}

function notice3(){
    $.ajax("choose.json",{
        data:{},
        dataType:'json',
        type:'get',
        async:'false',
        success:function(choose_data){				         
            $.ajax("TF.json",{
                data:{},
                dataType:'json',
                type:'get',
                async:'false',
                success:function(tf_data){

                    console.log("test",choose_data,tf_data);
                    if(choose_data.length > 0 && tf_data.length > 0){
                        let listInfo = ""
                        $.each(shuffle(choose_data).slice(0,40),function(){
                                listInfo+=
                            '<div class="question" id="s'+this.no+'">'+
                                '<p class="wen">'+
                                    this.number+'&emsp;'+this.question+
                                '</p>'+
                                '<div class="answer">'+
                                    '<button type="button" id="'+'c0k'+this.answer+'s'+this.no+ '"class="A">' + this.A + '</button>' +
                                    '<button type="button" id="'+'c1k'+this.answer+'s'+this.no+ '"class="B">' + this.B + '</button>' +
                                    '<button type="button" id="'+'c2k'+this.answer+'s'+this.no+ '"class="C">' + this.C + '</button>' +
                                    '<button type="button" id="'+'c3k'+this.answer+'s'+this.no+ '"class="D">' + this.D + '</button>' +
                                '</div>'+
                            '</div>';
                            
                        });
                    
                        $.each(shuffle(tf_data).slice(0,20),function(){
                            listInfo+=
                            '<div class="question" id="s'+this.no+'">'+
                                '<p class="wen">'+
                                    this.number+'&emsp;'+this.question+
                                '</p>'+
                                '<div class="answer">'+
                                    '<button type="button" id="'+'c0k'+this.answer+'s'+this.no+ '"class="A">' + this.T + '</button>' +
                                    '<button type="button" id="'+'c1k'+this.answer+'s'+this.no+ '"class="B">' + this.F + '</button>' +
                                '</div>'+
                            '</div>';
                        });



                    $("#Select")[0].innerHTML=listInfo;	
                    }

                }
            })
        }
    })
}

function submit_myself(){
    // alert("submit ok")
    alert("your score is "+( document.getElementsByClassName("question done right").length).toString());
    console.log("Test",document.getElementsByClassName("question done right").length);
}
    
function shuffle(arr) {
    if (!arr || !arr.length) return -1
    let length = arr.length;
    for (let i = length - 1; i > 0; i--) {
        let randomIndex = Math.floor((Math.random() * i));//生成一个随机数作为数组的一个index
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];//交换当前index的元素和生成的随机index的元素的值 
    }
    return arr;
}
