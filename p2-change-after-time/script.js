// function make_rectangle(x,y,width,height) {
//     var rect = $('.rectangle');

//     rect.css({
//         left:x,
//         top: y,
//         width: width,
//         height: height
//     });
// }



// $(document).ready(function() {
//     console.log('test');
//     console.log(window.innerWidth,window.innerHeight);

//     setInterval(function(){
//         var width = Math.random() * window.innerWidth;
//         var height = Math.random() * window.innerHeight;
    
//         var x = Math.random() * (window.innerWidth-width);
//         var y = Math.random() * (window.innerHeight-height);
    
//         make_rectangle(x,y,width,height);

//     },200)

// });

$(document).ready(function(){
    $("h1").click(function(){
      alert("The paragraph was clicked.");
    });
  });


window.onLoad = moveImage();
                
                function moveImage(){

                setInterval (function(){
                window_Height = window.innerHeight;
                window_Width = window.innerWidth;

                
                // img 1
                image1_Element = document.getElementById("image1");
                image1_Height = image1_Element.clientHeight;
                image1_Width = image1_Element.clientWidth;

                availSpace_V1 = window_Height - image1_Height;
                availSpace_H1 = window_Width - image1_Width;

                var randNum_V1 = Math.round(Math.random() * availSpace_V1);
                var randNum_H1 = Math.round(Math.random() * availSpace_H1);

                image1_Element.style.top = randNum_V1 + "px";
                image1_Element.style.left = randNum_H1 + "px";
            
                // img 2
                image2_Element = document.getElementById("image2");
                image2_Height = image2_Element.clientHeight;
                image2_Width = image2_Element.clientWidth;
            
                availSpace_V2 = window_Height - image2_Height;
                availSpace_H2 = window_Width - image2_Width;

                var randNum_V2 = Math.round(Math.random() * availSpace_V2);
                var randNum_H2 = Math.round(Math.random() * availSpace_H2);
                
                image2_Element.style.top = randNum_V2 + "px";
                image2_Element.style.left = randNum_H2 + "px";

                // img 3
                image3_Element = document.getElementById("image3");
                image3_Height = image3_Element.clientHeight;
                image3_Width = image3_Element.clientWidth;
            
                availSpace_V3 = window_Height - image3_Height;
                availSpace_H3 = window_Width - image3_Width;

                var randNum_V3 = Math.round(Math.random() * availSpace_V3);
                var randNum_H3 = Math.round(Math.random() * availSpace_H3);
                
                image3_Element.style.top = randNum_V3 + "px";
                image3_Element.style.left = randNum_H3 + "px";

                // img 4
                image4_Element = document.getElementById("image4");
                image4_Height = image4_Element.clientHeight;
                image4_Width = image4_Element.clientWidth;
            
                availSpace_V4 = window_Height - image4_Height;
                availSpace_H4 = window_Width - image4_Width;

                var randNum_V4 = Math.round(Math.random() * availSpace_V4);
                var randNum_H4 = Math.round(Math.random() * availSpace_H4);
                
                image4_Element.style.top = randNum_V4 + "px";
                image4_Element.style.left = randNum_H4 + "px";

                // img 5
                image5_Element = document.getElementById("image5");
                image5_Height = image5_Element.clientHeight;
                image5_Width = image5_Element.clientWidth;
            
                availSpace_V5 = window_Height - image5_Height;
                availSpace_H5 = window_Width - image5_Width;

                var randNum_V5 = Math.round(Math.random() * availSpace_V5);
                var randNum_H5 = Math.round(Math.random() * availSpace_H5);
                
                image5_Element.style.top = randNum_V5 + "px";
                image5_Element.style.left = randNum_H5 + "px";

                // img 6
                image6_Element = document.getElementById("image6");
                image6_Height = image6_Element.clientHeight;
                image6_Width = image6_Element.clientWidth;
            
                availSpace_V6 = window_Height - image6_Height;
                availSpace_H6 = window_Width - image6_Width;

                var randNum_V6 = Math.round(Math.random() * availSpace_V6);
                var randNum_H6 = Math.round(Math.random() * availSpace_H6);
                
                image6_Element.style.top = randNum_V6 + "px";
                image6_Element.style.left = randNum_H6 + "px";

                // img 7
                image7_Element = document.getElementById("image7");
                image7_Height = image7_Element.clientHeight;
                image7_Width = image7_Element.clientWidth;
            
                availSpace_V7 = window_Height - image7_Height;
                availSpace_H7 = window_Width - image7_Width;

                var randNum_V7 = Math.round(Math.random() * availSpace_V7);
                var randNum_H7 = Math.round(Math.random() * availSpace_H7);
                
                image7_Element.style.top = randNum_V7 + "px";
                image7_Element.style.left = randNum_H7 + "px";

                // img 8
                image8_Element = document.getElementById("image8");
                image8_Height = image8_Element.clientHeight;
                image8_Width = image8_Element.clientWidth;
            
                availSpace_V8 = window_Height - image8_Height;
                availSpace_H8 = window_Width - image8_Width;

                var randNum_V8 = Math.round(Math.random() * availSpace_V8);
                var randNum_H8 = Math.round(Math.random() * availSpace_H8);
                
                image8_Element.style.top = randNum_V8 + "px";
                image8_Element.style.left = randNum_H8 + "px";

                // img 9
                image9_Element = document.getElementById("image9");
                image9_Height = image9_Element.clientHeight;
                image9_Width = image9_Element.clientWidth;
            
                availSpace_V9 = window_Height - image9_Height;
                availSpace_H9 = window_Width - image9_Width;

                var randNum_V9 = Math.round(Math.random() * availSpace_V9);
                var randNum_H9 = Math.round(Math.random() * availSpace_H9);
                
                image8_Element.style.top = randNum_V9 + "px";
                image8_Element.style.left = randNum_H9 + "px";

                // img 10
                image10_Element = document.getElementById("image10");
                image10_Height = image10_Element.clientHeight;
                image10_Width = image10_Element.clientWidth;
            
                availSpace_V10 = window_Height - image10_Height;
                availSpace_H10 = window_Width - image10_Width;

                var randNum_V10 = Math.round(Math.random() * availSpace_V10);
                var randNum_H10 = Math.round(Math.random() * availSpace_H10);
                
                image10_Element.style.top = randNum_V10 + "px";
                image10_Element.style.left = randNum_H10 + "px";

                // img 11
                image11_Element = document.getElementById("image11");
                image11_Height = image11_Element.clientHeight;
                image11_Width = image11_Element.clientWidth;
            
                availSpace_V11 = window_Height - image11_Height;
                availSpace_H11 = window_Width - image11_Width;

                var randNum_V11 = Math.round(Math.random() * availSpace_V11);
                var randNum_H11 = Math.round(Math.random() * availSpace_H11);
                
                image11_Element.style.top = randNum_V11 + "px";
                image11_Element.style.left = randNum_H11 + "px";

                // img 12
                image12_Element = document.getElementById("image12");
                image12_Height = image12_Element.clientHeight;
                image12_Width = image12_Element.clientWidth;
            
                availSpace_V12 = window_Height - image12_Height;
                availSpace_H12 = window_Width - image12_Width;

                var randNum_V12 = Math.round(Math.random() * availSpace_V12);
                var randNum_H12 = Math.round(Math.random() * availSpace_H12);
                
                image12_Element.style.top = randNum_V12 + "px";
                image12_Element.style.left = randNum_H12 + "px";

                // img 13
                image13_Element = document.getElementById("image13");
                image13_Height = image13_Element.clientHeight;
                image13_Width = image13_Element.clientWidth;
            
                availSpace_V13 = window_Height - image13_Height;
                availSpace_H13 = window_Width - image13_Width;

                var randNum_V13 = Math.round(Math.random() * availSpace_V13);
                var randNum_H13 = Math.round(Math.random() * availSpace_H13);
                
                image13_Element.style.top = randNum_V13 + "px";
                image13_Element.style.left = randNum_H13 + "px";

                // img 14
                image14_Element = document.getElementById("image14");
                image14_Height = image14_Element.clientHeight;
                image14_Width = image14_Element.clientWidth;
            
                availSpace_V14 = window_Height - image14_Height;
                availSpace_H14 = window_Width - image14_Width;

                var randNum_V14 = Math.round(Math.random() * availSpace_V14);
                var randNum_H14 = Math.round(Math.random() * availSpace_H14);
                
                image14_Element.style.top = randNum_V14 + "px";
                image14_Element.style.left = randNum_H14 + "px";

                // img 15
                image15_Element = document.getElementById("image15");
                image15_Height = image15_Element.clientHeight;
                image15_Width = image15_Element.clientWidth;
            
                availSpace_V15 = window_Height - image15_Height;
                availSpace_H15 = window_Width - image15_Width;

                var randNum_V15 = Math.round(Math.random() * availSpace_V15);
                var randNum_H15 = Math.round(Math.random() * availSpace_H15);
                
                image15_Element.style.top = randNum_V15 + "px";
                image15_Element.style.left = randNum_H15 + "px";

                // img 16
                image16_Element = document.getElementById("image16");
                image16_Height = image16_Element.clientHeight;
                image16_Width = image16_Element.clientWidth;
            
                availSpace_V16 = window_Height - image16_Height;
                availSpace_H16 = window_Width - image16_Width;

                var randNum_V16 = Math.round(Math.random() * availSpace_V16);
                var randNum_H16 = Math.round(Math.random() * availSpace_H16);
                
                image16_Element.style.top = randNum_V16 + "px";
                image16_Element.style.left = randNum_H16 + "px";

                // img 17
                image17_Element = document.getElementById("image17");
                image17_Height = image17_Element.clientHeight;
                image17_Width = image17_Element.clientWidth;
            
                availSpace_V17 = window_Height - image17_Height;
                availSpace_H17 = window_Width - image17_Width;

                var randNum_V17 = Math.round(Math.random() * availSpace_V17);
                var randNum_H17 = Math.round(Math.random() * availSpace_H17);
                
                image17_Element.style.top = randNum_V17 + "px";
                image17_Element.style.left = randNum_H17 + "px";

                // img 18
                image18_Element = document.getElementById("image18");
                image18_Height = image18_Element.clientHeight;
                image18_Width = image18_Element.clientWidth;
            
                availSpace_V18 = window_Height - image18_Height;
                availSpace_H18 = window_Width - image18_Width;

                var randNum_V18 = Math.round(Math.random() * availSpace_V18);
                var randNum_H18 = Math.round(Math.random() * availSpace_H18);
                
                image18_Element.style.top = randNum_V18 + "px";
                image18_Element.style.left = randNum_H18 + "px";

                // img 19
                image19_Element = document.getElementById("image19");
                image19_Height = image19_Element.clientHeight;
                image19_Width = image19_Element.clientWidth;
            
                availSpace_V19 = window_Height - image19_Height;
                availSpace_H19 = window_Width - image19_Width;

                var randNum_V19 = Math.round(Math.random() * availSpace_V19);
                var randNum_H19 = Math.round(Math.random() * availSpace_H19);
                
                image19_Element.style.top = randNum_V19 + "px";
                image19_Element.style.left = randNum_H19 + "px";

                // img 20
                image20_Element = document.getElementById("image20");
                image20_Height = image20_Element.clientHeight;
                image20_Width = image20_Element.clientWidth;
            
                availSpace_V20 = window_Height - image20_Height;
                availSpace_H20 = window_Width - image20_Width;

                var randNum_V20 = Math.round(Math.random() * availSpace_V20);
                var randNum_H20 = Math.round(Math.random() * availSpace_H20);
                
                image20_Element.style.top = randNum_V20 + "px";
                image20_Element.style.left = randNum_H20 + "px";

                // img 21
                image21_Element = document.getElementById("image21");
                image21_Height = image21_Element.clientHeight;
                image21_Width = image21_Element.clientWidth;
            
                availSpace_V21 = window_Height - image21_Height;
                availSpace_H21 = window_Width - image21_Width;

                var randNum_V21 = Math.round(Math.random() * availSpace_V21);
                var randNum_H21 = Math.round(Math.random() * availSpace_H21);
                
                image21_Element.style.top = randNum_V21 + "px";
                image21_Element.style.left = randNum_H21 + "px";

                // img 22
                image22_Element = document.getElementById("image22");
                image22_Height = image22_Element.clientHeight;
                image22_Width = image22_Element.clientWidth;
            
                availSpace_V22 = window_Height - image22_Height;
                availSpace_H22 = window_Width - image22_Width;

                var randNum_V22 = Math.round(Math.random() * availSpace_V22);
                var randNum_H22 = Math.round(Math.random() * availSpace_H22);
                
                image22_Element.style.top = randNum_V22 + "px";
                image22_Element.style.left = randNum_H22 + "px";

                // img 23
                image23_Element = document.getElementById("image23");
                image23_Height = image23_Element.clientHeight;
                image23_Width = image23_Element.clientWidth;
            
                availSpace_V23 = window_Height - image23_Height;
                availSpace_H23 = window_Width - image23_Width;

                var randNum_V23 = Math.round(Math.random() * availSpace_V23);
                var randNum_H23 = Math.round(Math.random() * availSpace_H23);
                
                image23_Element.style.top = randNum_V23 + "px";
                image23_Element.style.left = randNum_H23 + "px";

                 // img 24
                 image24_Element = document.getElementById("image24");
                 image24_Height = image24_Element.clientHeight;
                 image24_Width = image24_Element.clientWidth;
             
                 availSpace_V24 = window_Height - image24_Height;
                 availSpace_H24 = window_Width - image24_Width;
 
                 var randNum_V24 = Math.round(Math.random() * availSpace_V24);
                 var randNum_H24 = Math.round(Math.random() * availSpace_H24);
                 
                 image24_Element.style.top = randNum_V24 + "px";
                 image24_Element.style.left = randNum_H24 + "px";

                 // img 25
                 image25_Element = document.getElementById("image25");
                 image25_Height = image25_Element.clientHeight;
                 image25_Width = image25_Element.clientWidth;
             
                 availSpace_V25 = window_Height - image25_Height;
                 availSpace_H25 = window_Width - image25_Width;
 
                 var randNum_V25 = Math.round(Math.random() * availSpace_V25);
                 var randNum_H25 = Math.round(Math.random() * availSpace_H25);
                 
                 image25_Element.style.top = randNum_V25 + "px";
                 image25_Element.style.left = randNum_H25 + "px";

            },3000 )};