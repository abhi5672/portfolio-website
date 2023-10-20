

function headingAnime(){
    
    const heading = document.querySelector('.unique');
    const h2 = document.querySelector('h2');
    const discrition2 = document.querySelector('.disc2');

    
    gsap.from(heading, {
     Transform: 'translateY(150px)',
     opacity: 0,
     duration: 1,
     delay: 0.5,
     stagger: 1,
    //  ease: 'circ'
    
    })
    
    
    gsap.from(h2, {
       Transform: 'translateX(200px)',
       opacity: 0,
       duration: 1,
       delay: 0.3,
       stagger: -2
    
         
      })

      gsap.from(discrition2, {
        Transform: 'translateX(-300px)',
        opacity: 0,
        duration: 1,
        delay: 0.5,
        stagger: -2
     
          
       })



      
   }
   headingAnime()

   function Scroller (){
    
      const about = document.querySelector('.about');
      const scroll = document.querySelector('.scroller')

      about.addEventListener('mouseenter',function(){
    
         // alert('heyy')
         gsap.to(scroll,{
           opacity: 0.3,
           scale: 1
         })
           
        }) 

        about.addEventListener('mouseleave',function(){
    
         // alert('heyy')
         gsap.to(scroll,{
           opacity: 0,
           scale: 0
         })
           
        }) 

        about.addEventListener('mousemove',function(dets){
    
      
         gsap.to(scroll,{
           left:dets.x-120,
           top:dets.y-120
         })
           
        }) 

     }
     Scroller ()


     //  tried to add underline to nav childs using animations it worked but not as exected.

    //  const nav = document.querySelector('.nav');
    //  const navRight = document.querySelector('.nav-right h5')

    //  navRight.addEventListener('mouseover',function(){
   
    //     // alert('heyy')
    //     gsap.to(navRight,{
    //       borderBottom: '1px solid #7d7b7b'
    //     })
          
    //   })