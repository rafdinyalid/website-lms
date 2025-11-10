function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(page).classList.add('active');
}

function showKelasList(page) {
    showPage(page + '-kelas');
}

function showMapel(kelas, page) {
    const container = document.getElementById(page + '-content');
    container.innerHTML = `
        <h2 style="color:#0056d2;">Kelas ${kelas}</h2>
        ${getMapelCards()}
      `;
    showPage(page);
}

function getMapelCards() {
    return `
        <div class="course-card">
          <div class="course-image" style="background: linear-gradient(135deg, #c4c4c4, #f0f0f0);">MAPEL</div>
          <div class="course-info">
            <p class="course-title">BAHASA INGGRIS</p>
            <div class="progress-bar"><div class="progress" style="width:0%;"></div></div>
          </div>
          <button class="view-btn">View Course</button>
        </div>

        <div class="course-card">
          <div class="course-image" style="background: linear-gradient(135deg, #d6aaff, #dcdcdc);">MAPEL</div>
          <div class="course-info">
            <p class="course-title">PENDIDIKAN KEWARGANEGARAAN</p>
            <div class="progress-bar"><div class="progress" style="width:0%;"></div></div>
          </div>
          <button class="view-btn">View Course</button>
        </div>

        <div class="course-card">
          <div class="course-image" style="background: linear-gradient(135deg, #8af5d1, #fbd0e0);">MAPEL</div>
          <div class="course-info">
            <p class="course-title">ILMU PENGETAHUAN ALAM</p>
            <div class="progress-bar"><div class="progress" style="width:0%;"></div></div>
          </div>
          <button class="view-btn">View Course</button>
        </div>

        <div class="course-card">
          <div class="course-image" style="background: linear-gradient(135deg, #f5c65f, #fbd0e0);">MAPEL</div>
          <div class="course-info">
            <p class="course-title">ILMU PENGETAHUAN SOSIAL</p>
            <div class="progress-bar"><div class="progress" style="width:0%;"></div></div>
          </div>
          <button class="view-btn">View Course</button>
        </div>

        <div class="course-card">
          <div class="course-image" style="background: linear-gradient(135deg, #f58ab0, #fbd0e0);">MAPEL</div>
          <div class="course-info">
            <p class="course-title">BAHASA INDONESIA</p>
            <div class="progress-bar"><div class="progress" style="width:0%;"></div></div>
          </div>
          <button class="view-btn">View Course</button>
        </div>
      `;
}
