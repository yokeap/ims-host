var list = [
  {
    date: "january 15,2024",
    title: "event of january",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    date: "february 4,2024",
    title: "event of february",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    date: "march 7,2024",
    title: "event of march",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    date: "may 18,2024",
    title: "event of may",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    date: "july 2,2024",
    title: "event of july",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];
var content = ``;
list.forEach(function (val) {
  content += `<li class="relative wow fadeInUp"
  data-wow-delay="0.3s" style="padding-left:24px;list-style:none;">
  <div>
      <span class="capitalize">${val.date}</span>
  </div>
  <div class="timeline-marker"></div>
  <div style="padding-bottom: 22px">
  <div class="testimonial-item bg-light rounded p-2">
      <h3 class="timeline-title capitalize">${val.title}</h3>
      <p class="weight-300">${val.detail}</p>
  </div>
  </div>
</li>`;
});
document.getElementsByClassName("timeline")[0].innerHTML = content;
