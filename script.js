let attendance = [];

function addAttendance() {

    let student = document.getElementById("student").value;
    let batch = document.getElementById("batch").value;
    let date = document.getElementById("date").value;
    let status = document.getElementById("status").value;

    attendance.push({
        student,
        batch,
        date,
        status
    });

    displayAttendance(attendance);
    calculatePercentage();

    document.getElementById("student").value = "";
    document.getElementById("batch").value = "";
}

function displayAttendance(data) {

    let table = document.getElementById("attendanceTable");

    table.innerHTML = "";

    data.forEach(item => {
        table.innerHTML += `
        <tr>
            <td>${item.student}</td>
            <td>${item.batch}</td>
            <td>${item.date}</td>
            <td>${item.status}</td>
        </tr>
        `;
    });
}

function filterAttendance() {

    let selectedDate =
        document.getElementById("filterDate").value;

    let filtered = attendance.filter(item =>
        item.date === selectedDate
    );

    displayAttendance(filtered);
}

function calculatePercentage() {

    let present = attendance.filter(
        item => item.status === "Present"
    ).length;

    let total = attendance.length;

    let percentage = total === 0
        ? 0
        : ((present / total) * 100).toFixed(2);

    document.getElementById("percentage").innerText =
        percentage + "%";
}