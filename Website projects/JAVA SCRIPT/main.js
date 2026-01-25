const papers = [
    { subject: "C", year: "2022", name: "C Programming 2022 Paper" },
    { subject: "C", year: "2023", name: "C Programming 2023 Paper" },
    { subject: "DSA", year: "2023", name: "DSA 2023 Paper" },
    { subject: "Java", year: "2024", name: "Java 2024 Paper" }
];

function filterPapers() {
    const subject = document.getElementById("subject").value;
    const year = document.getElementById("year").value;
    const resultsDiv = document.getElementById("results");

    resultsDiv.innerHTML = "";

    const filtered = papers.filter(p =>
        (subject === "" || p.subject === subject) &&
        (year === "" || p.year === year)
    );

    if (filtered.length === 0) {
        resultsDiv.innerHTML = "<p>No papers found</p>";
        return;
    }

    filtered.forEach(paper => {
        const div = document.createElement("div");
        div.className = "card";
        div.style.margin = "10px auto";
        div.style.width = "300px";
        div.innerText = paper.name;
        resultsDiv.appendChild(div);
    });
}
