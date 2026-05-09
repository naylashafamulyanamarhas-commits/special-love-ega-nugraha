let index = 0;
let slides = document.querySelectorAll(".slide");

/* AUDIO */
const music = document.getElementById("bgMusic");
const rain = document.getElementById("rainSound");
const click = document.getElementById("clickSound");
const heart = document.getElementById("heartBeat");
const endingSound = document.getElementById("endingSound");

/* CLICK SOUND */
function playClick(){

    if(click){
        click.currentTime = 0;
        click.volume = 0.5;
        click.play().catch(()=>{});
    }

}

/* PAGE SWITCH */
function showPage(id){

    document.querySelectorAll(".page").forEach(p=>{
        p.classList.remove("active");
    });

    const page = document.getElementById(id);

    if(page){
        page.classList.add("active");
    }

    playClick();

    if(id === "messagePage"){
        showMessages();
    }

    if(id === "endingPage"){

    if(endingSound){

        endingSound.volume = 0.5;
        endingSound.play().catch(()=>{});

    }

}

}

/* SLIDER */
function show(i){

    slides.forEach(s=>{
        s.classList.remove("active");
    });

    slides[i].classList.add("active");

}

function nextSlide(){

    index = (index + 1) % slides.length;
    show(index);

}

function prevSlide(){

    index = (index - 1 + slides.length) % slides.length;
    show(index);

}

show(index);


/* MESSAGE */
function showMessages(){

    let box = document.getElementById("messages");

    if(!box) return;

    box.innerHTML = "";

    let msgs = [

        "makasih ya karena selalu hadir di hidup aku dengan cara sederhana, tapi berhasil bikin hati aku tenang 🤍.",

        "aku gatau sejak kapan semuanya mulai terasa sedalam ini… tapi sekarang kamu jadi bagian yang selalu ada di pikiran aku 🤍.",

        "aku suka semua hal kecil tentang kamu, bahkan yang mungkin ga kamu sadari.",

        "jangan capek jadi diri sendiri yaa, karena versi kamu sekarang udah cukup spesial.",

        "mungkin kamu ga sadar… tapi keberadaan kamu berarti banyak buat aku.",

        "ada rasa nyaman yang aku temuin waktu sama kamu, dan itu susah di jelasin hehe.",

        "aku harap kamu selalu bahagia, bahkan di hari-hari yang berat sekalipun.",

        "aku bersyukur banget bisa kenal kamu 🤍.",

        "semoga kita bisa terus bikin banyak kenangan manis berdua yaa.",

        "dan kalau suatu hari kamu lupa betapa berharganya diri kamu… semoga halaman ini bisa ngingetin sedikit 🤍."

    ];

    let i = 0;

    function type(){

        if(i >= msgs.length) return;

        let div = document.createElement("div");
        div.className = "msg";

        box.appendChild(div);

        let text = msgs[i];
        let j = 0;

        function typing(){

            div.innerHTML = text.slice(0,j);

            j++;

            if(j % 6 === 0 && heart){

                if(document.getElementById("messagePage").classList.contains("active")){

                    heart.currentTime = 0;
                    heart.volume = 0.3;
                    heart.play().catch(()=>{});

                }

            }

            if(j <= text.length){

                setTimeout(typing,18);

            } else {

                i++;
                setTimeout(type,1500);

            }

        }

        typing();

    }

    type();

}

/* INTRO START */
function startExperience(){

    const intro = document.getElementById("intro");

    if(music){

        music.volume = 0.4;
        music.play().catch(()=>{});

    }

    if(rain){

        rain.volume = 0.15;
        rain.play().catch(()=>{});

    }

    intro.style.transition = "0.8s";
    intro.style.opacity = "0";

    setTimeout(()=>{

        intro.remove();

    },800);

}