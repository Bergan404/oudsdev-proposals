// Initialize tooltips
document.addEventListener("DOMContentLoaded", function () {
  // Initialize any tooltips if needed
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Sample data fetch for dashboard (would be replaced with real API call)
  async function fetchDashboardData() {
    try {
      // In a real app, this would be an actual API endpoint
      // const response = await fetch('/api/dashboard');
      // return await response.json();
      return {
        stats: {
          totalDrivers: 42,
          activeWarnings: 8,
          criticalIssues: 3,
        },
      };
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      return null;
    }
  }

  // Load data when dashboard page loads
  if (window.location.pathname === "/dashboard.html") {
    fetchDashboardData().then((data) => {
      // Update DOM with data
    });
  }
});

// PDF export functionality
function generatePDF(driverId) {
  console.log(`Generating PDF report for driver ${driverId}`);
  // In a real app, this would call your backend PDF generation endpoint
  alert("PDF generation would be implemented here with a real backend");
}
