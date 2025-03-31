document.addEventListener("DOMContentLoaded", function () {
  const skillData = {
    courses: [
      "😍 閱讀👩‍💼",
      "😍 打球🤾",
      "👍 國語演說 ",
      "👍 到處結交I人朋友❤️💼"
    ],
    skills: [
      { name: "E(外向)", level: 94 },
      { name: "N(直覺)", level: 79 },
      { name: "F(情感)", level: 65 },
      { name: "P(感知)", level: 86 }
    ]
  };

  // 定義原始的圖片 URL
  let imageUrls = [
    "https://i.imgur.com/AtkaHeX.jpeg",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajZpbGN5dHBmeDZscGdvODh5Y3A2YzVnZnp1czlzYzVybWd0ZmZyNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/CjmvTCZf2U3p09Cn0h/giphy.gif",
    "https://media.giphy.com/media/14udF3WUwwGMaA/giphy.gif?cid=ecf05e47tm9lu7cc9rg55dswofmd9909dwwxphk7m8x0w5h7&ep=v1_gifs_search&rid=giphy.gif&ct=g"
  ];

  // 取得 #courses 和 #skills
  const coursesSection = document.getElementById("courses");
  const skillsSection = document.getElementById("skills");

  // 生成「授課內容」HTML
  coursesSection.innerHTML = `
      <h4>專長興趣</h4>
      <ul>
        ${skillData.courses.map((course) => `<li>${course}</li>`).join("")}
      </ul>
    `;

  // 生成「技能條」HTML
  skillsSection.innerHTML = `
      <h4>MBTI</h4>
      ${skillData.skills
        .map(
          (skill) => `
        <div class="skill-bar" data-level="${skill.level}">
          <label>${skill.name}</label>
          <div class="bar">
            <div class="level" style="width: 0%;"></div>
            <div class="sheep"></div>
          </div>
        </div>
      `
        )
        .join("")}
    `;

  // 取得 .square-image
  const squareImages = document.querySelectorAll(".square-image");
  // 初始化圖片背景
  function initializeImages() {
    squareImages.forEach((img, index) => {
      img.style.backgroundImage = `url('${imageUrls[index]}')`;
    });
  }
  // 初始化圖片
  initializeImages();
  
  // 隨機排列圖片背景
  function shuffleImages() {
    let shuffledUrls = [...imageUrls].sort(() => Math.random() - 0.5);
    squareImages.forEach((img, index) => {
      img.style.backgroundImage = `url('${shuffledUrls[index]}')`;
    });
  }
  // 綁定點擊事件
  document.querySelector(".square-images").addEventListener("click", shuffleImages);

  // 添加滑鼠事件
  document.querySelectorAll('.skill-bar').forEach(bar => {
    const level = bar.dataset.level;
    const levelIndicator = bar.querySelector('.level');
    const sheep = bar.querySelector('.sheep');

    bar.addEventListener('mouseenter', () => {
      levelIndicator.style.width = `${level}%`; // 開始動畫
      sheep.style.left = `calc(${level}% - 15px)`; // 小羊跟隨動畫移動
      sheep.style.display = 'block'; // 顯示小羊
    });

    bar.addEventListener('mouseleave', () => {
      levelIndicator.style.width = '0%'; // 重置
      sheep.style.left = '0'; // 重置小羊位置
      sheep.style.display = 'none'; // 隱藏小羊
    });
  });
});