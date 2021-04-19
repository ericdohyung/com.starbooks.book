var main={
    init : function(){
        var _this=this;
        $('#btn-save').on('click',function(){
            _this.save();
        });
        $('#btn-update').on('click',function(){
            _this.update();
        });
        $('#btn-delete').on('click',function(){
            _this.delete();
        });
    },
    save : function(){
        var data={
            title: $('#title').val(),
            author: $('#author').val(),
            content: $('#content').val()
        };

        $.ajax({
            type:'POST',
            url:'/api/v1/posts',
            dataType:'json',
            contentType:'application/json; charset=utf-8',
            data:JSON.stringify(data)
        }).done(function(){
            var data ={
                title: $('#title').val(),
                content: $('#contnet').val()
                };
                var id=$('#id').val();

                $.ajax({
                    type:'PUT',
                    url:'/api/v1/posts'+id,
                    dataType:'json',
                    contentType:'application/json: charset=utf-8',
                    data: JSON.stringify(data)
                    }).done(function(){
                        alert('글이 수정되었습니다.');
                        window.location.href='/';
                        }).fail(function(error){})
                    });
                });
        };)
    };
}