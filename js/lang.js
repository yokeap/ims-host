var th = {
  btn_language: "Thai",
  menu_home: "หน้าแรก",
  reseach_portal: "พอร์ทัลการวิจัย",
  laboratory: "ห้องปฏิบัติการ",
  documents: "เอกสาร",
  services: "บริการ",
  student_project: "โปรเจคนักศึกษา",
  researcher: "นักวิจัย",
  researcher_2: "นักวิจัย",
  research_articles: "หัวข้อวิจัย",
  research_articles_2: "หัวข้อวิจัย",
  research_articles_3: "หัวข้อวิจัย",
  research_project: "โปรเจควิจัย",
  research_project_2: "โปรเจควิจัย",
  research_project_3: "โปรเจควิจัย",
  awards: "รางวัล",
  awards_2: "รางวัล",
  awards_3: "รางวัล",
  intellectual_property: "ทรัพย์สินทางปัญญา",
  intellectual_property_2: "ทรัพย์สินทางปัญญา",
};
var en = {
  btn_language: "English",
  menu_home: "Home",
  reseach_portal: "Reseach Portal",
  laboratory: "Laboratory",
  documents: "documents",
  services: "Services",
  student_project: "Student Project",
  researcher: "researcher",
  researcher_2: "researcher",
  research_articles: "Research Articles",
  research_articles_2: "Research Articles",
  research_articles_3: "Research Articles",
  research_project: "Research Project",
  research_project_2: "Research Project",
  research_project_3: "Research Project",
  awards: "Awards",
  awards_2: "Awards",
  awards_3: "Awards",
  intellectual_property: "Intellectual Property",
  intellectual_property_2: "Intellectual Property",
};

function renderlang() {
  console.log("renderlang " + localStorage.lang);
  if (!localStorage.lang) {
    window.localStorage.setItem("lang", "en");
  } else {
    $(".btn_language").text(settext("btn_language"));
    $(".menu_home").text(settext("menu_home"));
    $(".reseach_portal").text(settext("reseach_portal"));
    $(".laboratory").text(settext("laboratory"));
    $(".documents").text(settext("documents"));
    $(".services").text(settext("services"));
    $(".student_project").text(settext("student_project"));
    $(".researcher").text(settext("researcher"));
    $(".researcher_2").text(settext("researcher_2"));
    $(".research_articles").text(settext("research_articles"));
    $(".research_articles_2").text(settext("research_articles_2"));
    $(".research_articles_3").text(settext("research_articles_3"));
    $(".research_project").text(settext("research_project"));
    $(".research_project_2").text(settext("research_project_2"));
    $(".research_project_3").text(settext("research_project_3"));
    $(".awards").text(settext("awards"));
    $(".awards_2").text(settext("awards_2"));
    $(".awards_3").text(settext("awards_3"));
    $(".intellectual_property").text(settext("intellectual_property"));
    $(".intellectual_property_2").text(settext("intellectual_property_2"));

  }
}

function settext(key) {
  if (localStorage.lang == "en") {
    return en[key];
  } else {
    return th[key];
  }
}

function togglelang() {
  console.log("togglelang " + window.localStorage.getItem("lang"));
  // if (localStorage.lang == "th") localStorage.setItem("lang", "en");
  // else if (localStorage.lang == "en") localStorage.setItem("lang", "th");

  // renderlang();
  // return "now language: " + localStorage.lang;
  if (localStorage.lang == "th") {
    // localStorage.setItem("lang", "en");
    window.localStorage.setItem("lang", "en");
  console.log("togglelang if " + localStorage.lang);

    renderlang();
    return "now language: " + localStorage.lang;
  }else{
    // localStorage.setItem("lang", "th");
    window.localStorage.setItem("lang", "th");

  console.log("togglelang else " + localStorage.lang);

    renderlang();
    return "now language: " + localStorage.lang;
  }
}

renderlang();
