document.addEventListener("DOMContentLoaded", function () {
  const header = `
    <div id="site-header">
      <h1>ORPUS</h1>
      <h2>The Future Of Supply Tracking</h2>
      <nav>
        <a class="tablink" href="test.html">Home</a>
        <a class="tablink" href="about.html">About</a>
        <a class="tablink" href="meetUs.html">Meet Us</a>
        <a class="tablink" href="contact.html">Contact</a>
      </nav>
    </div>
  `;
  document.body.insertAdjacentHTML("afterbegin", header);
});
