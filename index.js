let count = 0;
document.getElementById("btn").onclick = function () {
  count++;
  document.getElementById("count").textContent = "count:" + count;
  document.getElementById("reset").onclick = function () {
    count = 0;
    document.getElementById("count").textContent = "count: 0";
  };
};
