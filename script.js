// Function to mark attendance
function markAttendance(status) {
    // Update the status text based on the button clicked
    document.getElementById('attendance-status').innerText = status;

    // Optionally, you can change the color based on the attendance status
    const statusElement = document.getElementById('attendance-status');
    if (status === 'Present') {
        statusElement.style.color = 'green';
    } else if (status === 'Absent') {
        statusElement.style.color = 'red';
    }
}
