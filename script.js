//卡片內容
//tag的部分先寫成字串，再想辦法改成單一元素
const post = [
  {
    image:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo4.png?raw=true",
    date: "2024/10/11",
    tag1: "#React",
    tag2: "#入門基礎",
    tag3: "",
    title: "React入門不再迷惘：三步驟帶你上手核心概念",
    text: "你是否對 React 感到好奇，卻苦惱於該如何正式啟動學習之路？身為前端工程師兼職涯諮詢師，我常遇到同學問我…",
    btn: "閱讀內文",
  },
  {
    image:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo1.png?raw=true",
    date: "2024/09/07",
    tag1: "#作品集",
    tag2: "#求職攻略",
    tag3: "",
    title: "前端作品集打造指南：讓你的專案成為履歷亮點",
    text: "對正在求職的前端工程師而言，作品集往往是第一個「說話」的利器。當面試官瀏覽你的網頁作品時，能夠快速了…",
    btn: "閱讀內文",
  },
  {
    image:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo2.png?raw=true",
    date: "2024/09/03",
    tag1: "#CSS設計",
    tag2: "#視覺體驗",
    tag3: "",
    title: "CSS 魔法大揭密：排版與設計的三大關鍵技巧",
    text: "在瀏覽器畫面上實現各種精美介面，一直是前端開發充滿成就感的部分。但當面臨複雜的佈局需求或是響應式設計時…",
    btn: "閱讀內文",
  },
  {
    image:
      "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/blog/photo6.png",
    date: "2024/07/09",
    tag1: "#轉職工程師",
    tag2: "#學習心法",
    tag3: "",
    title: "前端轉職必讀：從自學者到工程師的心路歷程",
    text: "能夠憑藉自學進入前端領域，聽起來令人振奮，但實際過程中可能遇到的挫折與疑慮，卻常常令人猶豫。回想當初我…",
    btn: "閱讀內文",
  },
  {
    image:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo3.png?raw=true",
    date: "2024/07/08",
    tag1: "#面試準備",
    tag2: "#工程師求職",
    tag3: "人氣文章",
    title: "前端面試不再慌：破解常見提問的三大策略",
    text: "面試前端工程師時，你或許擔心被問到各種刁鑽的技術題目，或是擔憂無法在短時間內展現實力。其實，許多面試…",
    btn: "閱讀內文",
  },
  {
    image:
      "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/blog/photo5.png",
    date: "2024/06/29",
    tag1: "#Vue3",
    tag2: "#框架學習",
    tag3: "",
    title: "Vue 3 新手指南：快速掌握 Composition API 與關鍵特色",
    text: "許多前端開發者對 Vue 一直情有獨鍾，因為它易上手又靈活。隨著 Vue 3 上線，Composition API 的導入更是大…",
    btn: "閱讀內文",
  },
];

//用JS在 .content 添加標籤
const content = document.querySelector(".content");

//渲染每一筆資料
post.forEach((item) => {
  const card = document.createElement("li");
  card.className = "card";

  // 如果有 tag3，則使用 card-tag3，否則為空
  let tag3Class = item.tag3 ? "card-tag3" : "";

  //發現要加不設flex的<div>才能讓<span>不要換行
  card.innerHTML = `
      <img class = "card-img" src = "${item.image}" alt= "${item.title}" />
      <p class = "card-date">${item.date}</p>
      <div class ="card-tags"> 
      <span class = "card-tag1">${item.tag1}</span>
      <span class = "card-tag2">${item.tag2}</span>
      <span class = "${tag3Class}">${item.tag3}</span>
      </div>
      <h2 class = "card-title">${item.title}</h2>
      <p class = "card-text">${item.text}</p>
      <button class = "card-btn">${item.btn}</button>
      `;

  content.appendChild(card);
});
