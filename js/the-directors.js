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
      "“It always amazes me how much talent there is in every corner of the globe.”",
  },
  {
    img: "cruz.jpg",
    name: "Cruz Hamer",
    work: "Co-founder & CTO",
    description:
      "“It always amazes me how much talent there is in every corner of the globe.”",
  },
  {
    img: "drake.jpg",
    name: "Drake Heaton",
    work: "Business Development Lead",
    description:
      "“It always amazes me how much talent there is in every corner of the globe.”",
  },
  {
    img: "griffin.jpg",
    name: "Griffin Wise",
    work: "Lead Marketing",
    description:
      "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
  },
  {
    img: "aden.jpg",
    name: "Aden Allan",
    work: "Head of Talent",
    description:
      "“It always amazes me how much talent there is in every corner of the globe.”",
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

const buttons = document.querySelectorAll(".buttons_more_info");

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    let more_content_director = document.querySelector(
      ".more_content_directors_" + i
    );
    let content_directors = document.querySelector(".content_directors_" + i);
    // content_directors.style.display = "none";
    // more_content_director.style.display = "flex";
  });
});
