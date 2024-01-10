let directors = [
  {
    img: "nikita.jpg",
    name: "Nikita Marks",
    work: "Founder & CEO",
    description:
      "“It always amazes me how much talent there is in every corner of the globe.”",
  },
  {
    img: "christian.jpg",
    name: "Christian Duncan",
    work: "Co-founder & COO",
    description:
      "“Distributed teams required unique processes. You need to approach work in a new way.”",
  },
  {
    img: "cruz.jpg",
    name: "Cruz Hamer",
    work: "Co-founder & CTO",
    description:
      "“Technology is at the forefront of enabling distributed teams. That's where we come in.”",
  },
  {
    img: "drake.jpg",
    name: "Drake Heaton",
    work: "Business Development Lead",
    description:
      "“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”",
  },
  {
    img: "griffin.jpg",
    name: "Griffin Wise",
    work: "Lead Marketing",
    description:
      "“Unique perspectives shape unique products, which is what you need to survive these days.”",
  },
  {
    img: "aden.jpg",
    name: "Aden Allan",
    work: "Head of Talent",
    description:
      "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
  },
];

const section = document.querySelector(".directors div");
for (const director in directors) {
  section.innerHTML += `<article>
                    <div class="content_directors content_directors_${director}">
                        <img class="profil" src="../assets/avatar/avatar-${directors[director].img}" alt="${directors[director].name}">
                        <h3>${directors[director].name}</h3>
                        <em>${directors[director].work}</em>
                    </div>
                    <div class="more_content_directors more_content_directors_${director}">
                        <h3>${directors[director].name}</h3>
                        <p>${directors[director].description}</p>
                        <ul>
                            <li><a href="#"><img class="link" src="../assets/icon/icon-twitter.svg" alt="Twitter"></a>
                            </li>
                            <li><a href="#"><img class="link" src="../assets/icon/icon-facebook.svg" alt="Facebook"></a>
                            </li>
                        </ul>
                    </div>
                    <button class="buttons_more_info"><img class="more_info" src="../assets/icon/icon-cross.svg" alt="More info"></button>
                </article>`;
}

let lastDirector;
const buttons = document.querySelectorAll(".buttons_more_info");
buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    let more_content_director = document.querySelector(
      ".more_content_directors_" + i
    );
    let content_directors = document.querySelector(".content_directors_" + i);
    if (more_content_director.style.display == "flex") {
      more_content_director.style.display = "none";
      content_directors.style.display = "flex";
      button.innerHTML =
        '<img class="more_info" src="../assets/icon/icon-cross.svg" alt="More info">';
    } else {
      content_directors.style.display = "none";
      more_content_director.style.display = "flex";
      button.innerHTML =
        '<img class="close_info" src="../assets/icon/icon-close.svg" alt="Close info">';
      lastDirector = button.length;
    }
  });
});
