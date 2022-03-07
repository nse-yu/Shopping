$(document).ready(function()
        {
            //max length
            const len = document.querySelectorAll('.img_list img').length;
            //何枚目の画像か
            var i = 0;

            $(".next_icon").on('click',function()
            {
                i++;
                if(i === len){
                    i = 0;
                }
                var value = "translateX(-"+(100*i)+"%)";
                $(".img_list img").css("transform",value);
                console.log(i);
            })
            $(".return_icon").on("click",function()
            {
                i--;
                if(i < 0){
                    i = len-1;
                }
                var value = "translateX(-"+(100*i)+"%)";
                $(".img_list img").css("transform",value);
                console.log(i);
            })

            document.querySelector(".img_list img").ontransitionstart = () =>{
                $(".img_list img").toggleClass("resize");
            }
            document.querySelector(".img_list img").ontransitionend = () => {
                $(".img_list img").removeClass("resize");
            }
        })