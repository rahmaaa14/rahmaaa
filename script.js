const API_URL = "https://script.google.com/macros/s/AKfycbxRc3XjvMbcxB2dltzEsHKHDQdauMqDR-Huk8Led4Kg-BDs5ihyc2NujDPbU87XSSS4/exec";

document.getElementById("formAbsen").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    ID: document.getElementById("ID").value,
    NIS: document.getElementById("NIS").value,
    NAMA: document.getElementById("NAMA").value,
    JENIS_KELAMIN: document.getElementById("JENIS_KELAMIN").value,
    KELAS: document.getElementById("KELAS").value,
    KETERANGAN: document.getElementById("KETERANGAN").value,
  };

  const response = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    }
  });

  const result = await response.json();
  alert("Data berhasil ditambahkan!");
  loadData();
  document.getElementById("formAbsen").reset();
});

document.getElementById("resetBtn").addEventListener("click", () => {
  document.getElementById("formAbsen").reset();
});

async function loadData() {
  const response = await fetch(API_URL);
  const data = await response.json();

  const tbody = document.getElementById("dataBody");
  tbody.innerHTML = "";

  data.forEach(item => {
    const row = `
      <tr>
        <td>${item.ID}</td>
        <td>${item.NIS}</td>
        <td>${item.NAMA}</td>
        <td>${item.JENIS_KELAMIN}</td>
        <td>${item.KELAS}</td>
        <td>${item.KETERANGAN}</td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

window.onload = loadData;
