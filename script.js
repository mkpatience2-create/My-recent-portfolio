const cursor=document.querySelector(".cursor");
window.addEventListener("pointermove",e=>{cursor.style.left=e.clientX+"px";cursor.style.top=e.clientY+"px";});

const observer=new IntersectionObserver(entries=>{
 entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible");});
},{threshold:.1});
document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));

const projects={
 pocketmoney:{eyebrow:"01 · FINAL YEAR PROJECT",title:"PocketMoney",status:"IN DEVELOPMENT",image:"images/pocketmoney/dashboard.png",about:"An AI-assisted financial management dashboard designed to help users understand spending patterns, track finances and receive practical recommendations for better financial decisions.",role:"Final-year team project. Work included data preparation and cleaning, system planning and contributing to the design of the finance dashboard and AI-oriented features.",chips:["HTML/CSS/JS","Data","AI","Finance"],note:"Add additional screenshots to images/pocketmoney/ and update the case study if you want to show more screens."},
 continuum:{eyebrow:"02 · INNOVATION",title:"Continuum",status:"CONCEPT",image:"images/continuum/home.png",about:"A platform concept focused on preserving unfinished ideas, research and expertise so useful knowledge can be discovered, inherited and continued instead of being lost.",role:"Product concept and platform shaping, including the problem, target users, value proposition and revenue model exploration.",chips:["Product Design","Web","Innovation"],note:"This is a concept/project case study. Add your mockups or pitch material to the Continuum image folder."},
 thuthukaai:{eyebrow:"03 · AI × ACCESSIBILITY",title:"ThuthukaAI",status:"CONCEPT",image:"images/thuthukaai/home.png",about:"An inclusive AI education platform concept focused on adaptive learning and accessibility features such as text-to-speech and speech-to-text.",role:"Concept development, feature planning, user experience direction and pitch/deck development as part of a team.",chips:["AI","UX/UI","Accessibility","EdTech"],note:"Add your actual pitch deck screenshots, wireframes or prototype images to the ThuthukaAI folder."},
 unilink:{eyebrow:"04 · FIRST YEAR",title:"UniLink",status:"ARCHIVED",image:"images/unilink/project.png",about:"A first-year C++ project designed to help undergraduate students adapt to university life and access support. The project used Stack and Queue concepts to organise student support-related information and interactions.",role:"Student project focused on implementing data structures and applying programming concepts to a real university-life problem.",chips:["C++","Stack","Queue","Data Structures"],note:"The original implementation was destroyed/unavailable, so this portfolio intentionally does not claim a live demo or GitHub repository. Add any surviving screenshots or documentation if you have them."},
 hult:{eyebrow:"05 · HULT PRIZE",title:"Hult Prize Project",status:"UNFINISHED",image:"images/hult-prize/project.png",about:"An unfinished social-impact project developed around a problem worth solving. The project represents an exploration of entrepreneurship, teamwork, impact and solution development.",role:"Team contribution to the idea, problem exploration and development process.",chips:["Innovation","Entrepreneurship","Teamwork","Impact"],note:"Because the project was unfinished, the portfolio presents it honestly as an unfinished project rather than implying that it was launched."}
};

const modal=document.getElementById("projectModal");
const modalImg=document.getElementById("modalImage");
const modalVideo=document.getElementById("modalVideo");
const placeholder=document.getElementById("modalImagePlaceholder");
document.querySelectorAll(".see-more").forEach(btn=>{
 btn.addEventListener("click",()=>{
   const p=projects[btn.dataset.project];
   document.getElementById("modalEyebrow").textContent=p.eyebrow;
   document.getElementById("modalTitle").textContent=p.title;
   document.getElementById("modalStatus").textContent=p.status;
   document.getElementById("modalAbout").textContent=p.about;
   document.getElementById("modalRole").textContent=p.role;
   document.getElementById("modalNote").textContent=p.note;
   document.getElementById("modalChips").innerHTML=p.chips.map(x=>`<span>${x}</span>`).join("");
   modalVideo.pause();
   modalVideo.removeAttribute("src");
   modalVideo.style.display="none";
   modalImg.style.display="block";
   placeholder.innerHTML="";
   if(p.title==="ThuthukaAI"){
     modalImg.style.display="none";
     modalVideo.src="videos/thuthuka-demo.mp4";
     modalVideo.style.display="block";
   } else if(p.title==="MediConnect"){
     modalImg.style.display="none";
     modalVideo.src="videos/mediconnect-demo.mp4";
     modalVideo.style.display="block";
   } else {
     modalImg.src=p.image;
     modalImg.alt=p.title+" project image";
     modalImg.onerror=()=>{
       modalImg.style.display="none";
       placeholder.innerHTML=`<div class="modal-image-placeholder">Add your screenshot to <b style="margin-left:5px">${p.image}</b></div>`;
     };
   }
   modal.classList.add("open");
   modal.setAttribute("aria-hidden","false");
   document.body.style.overflow="hidden";
 });
});
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");modalVideo.pause();modalVideo.removeAttribute("src");modalVideo.style.display="none";document.body.style.overflow="";}
document.querySelector(".close").addEventListener("click",closeModal);
document.querySelector(".modal-backdrop").addEventListener("click",closeModal);
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});

const menu=document.querySelector(".menu"),links=document.querySelector(".links");
menu.addEventListener("click",()=>{
 const open=links.classList.toggle("mobile-open");
 if(open){links.style.display="flex";links.style.position="absolute";links.style.top="78px";links.style.left="0";links.style.right="0";links.style.padding="25px 6%";links.style.background="rgba(9,9,11,.97)";links.style.flexDirection="column";links.style.gap="20px";}
 else links.style.display="";
});
links.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{if(innerWidth<=850){links.classList.remove("mobile-open");links.style.display="";}}));
