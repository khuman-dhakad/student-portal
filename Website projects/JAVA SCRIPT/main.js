const papers = [
    {uni:"RGPV", course:"MCA", sem:"1", title:"MCA Sem 1 C Programming 2023"},
    {uni:"RGPV", course:"MCA", sem:"2", title:"MCA Sem 2 Data Structures 2023"},
    {uni:"RGPV", course:"MCA", sem:"3", title:"MCA Sem 3 Java 2024"},

    {uni:"DU", course:"BCA", sem:"1", title:"BCA Sem 1 IT Fundamentals 2022"},
    {uni:"DU", course:"BCA", sem:"2", title:"BCA Sem 2 DSA 2023"},

    {uni:"MU", course:"BTech", sem:"1", title:"BTech Sem 1 Engineering Maths 2023"},
    {uni:"MU", course:"BTech", sem:"3", title:"BTech Sem 3 OOPS in Java 2024"}
];

function searchPapers(){
    const uni = document.getElementById("university").value;
    const course = document.getElementById("course").value;
    const sem = document.getElementById("semester").value;

    const results = document.getElementById("results");
    results.innerHTML = "";

    const filtered = papers.filter(p =>
        (uni === "" || p.uni === uni) &&
        (course === "" || p.course === course) &&
        (sem === "" || p.sem === sem)
    );

    if(filtered.length === 0){
        results.innerHTML = "<p>No papers found</p>";
        return;
    }

    filtered.forEach(p => {
        const div = document.createElement("div");
        div.className = "paper-card";
        div.innerHTML = `
            <h4>${p.title}</h4>
            <button>Download</button>
        `;
        results.appendChild(div);
    });
}
