/**
 * @file dashboard.js
 * @description JavaScript functionality for the MDN JavaScript Skill Tests dashboard
 * Handles progress tracking, dynamic content generation, and interactive features
 */

// Dashboard configuration
const DASHBOARD_CONFIG = {
  modules: [
    {
      id: "variables",
      name: "Variables",
      icon: "📝",
      status: "completed",
      description:
        "Variable declarations, scope, data types, and the differences between let, const, and var.",
      link: "./variables/index.html",
    },
    {
      id: "strings",
      name: "Strings",
      icon: "🔤",
      status: "completed",
      description:
        "String methods, manipulation, template literals, and text processing techniques.",
      link: "strings/index.html",
    },
    {
      id: "arrays",
      name: "Arrays",
      icon: "📋",
      status: "completed",
      description:
        "Array manipulation and methods including push, pop, splice, filter, and iteration techniques.",
      link: "arrays/index.html",
    },

    {
      id: "conditionals",
      name: "Conditionals",
      icon: "🔀",
      status: "completed",
      description:
        "Decision making with if/else statements, switch cases, and ternary operators.",
      link: "conditionals/index.html",
    },
    {
      id: "loops",
      name: "Loops",
      icon: "🔄",
      status: "completed",
      description:
        "Iteration and control flow with for, while, do-while, and modern iteration methods.",
      link: "loops/index.html",
    },
    {
      id: "functions",
      name: "Functions",
      icon: "⚡",
      status: "completed",
      description:
        "Function declarations, expressions, arrow functions, and advanced concepts like closures.",
      link: "functions/index.html",
    },

    {
      id: "objectBasics",
      name: "Object Basics",
      icon: "🏗️",
      status: "in-progress",
      description:
        "Object creation, properties, methods, and object-oriented programming fundamentals.",
      link: "object_basics/index.html",
    },
    {
      id: "events",
      name: "Events",
      icon: "🎯",
      status: "not-started",
      description:
        "Event handling, DOM events, event listeners, and interactive web programming.",
      link: "events/index.html",
    },
    {
      id: "json",
      name: "JSON",
      icon: "📄",
      status: "not-started",
      description:
        "JSON parsing, stringification, data serialization, and API data handling.",
      link: "json/index.html",
    },
    {
      id: "math",
      name: "Math",
      icon: "🔢",
      status: "not-started",
      description:
        "Mathematical operations, Math object methods, and numerical computations.",
      link: "math/index.html",
    },
  ],
  resources: [
    {
      name: "📚 MDN JavaScript Guide",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    },
    {
      name: "📋 JavaScript Reference",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference",
    },
    {
      name: "🎓 Learn Web Development",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development",
    },
    {
      name: "🔗 GitHub Repository",
      url: "https://github.com/the-sankari/mdn-js-skill-tests",
    },
  ],
};

/**
 * Initialize the dashboard when DOM is loaded
 */
document.addEventListener("DOMContentLoaded", function () {
  initializeDashboard();
});

/**
 * Initialize dashboard components
 */
function initializeDashboard() {
  console.log("🚀 Dashboard initialized");

  generateStatsSection();
  generateModulesGrid();
  generateResourcesGrid();
  updateLastUpdatedDate();
  updateProgress();
  addEventListeners();
  animateProgressBar();
}

/**
 * Generate stats section dynamically
 */
function generateStatsSection() {
  const statsContainer = document.getElementById("stats-container");
  if (!statsContainer) return;

  const statsHTML = `
        <div class="stat-item">
            <div class="stat-number" id="completed-count">0</div>
            <div class="stat-label">Completed</div>
        </div>
        <div class="stat-item">
            <div class="stat-number" id="in-progress-count">0</div>
            <div class="stat-label">In Progress</div>
        </div>
        <div class="stat-item">
            <div class="stat-number" id="total-count">0</div>
            <div class="stat-label">Total Modules</div>
        </div>
        <div class="stat-item">
            <div class="stat-number" id="completion-percentage">0%</div>
            <div class="stat-label">Complete</div>
        </div>
    `;

  statsContainer.innerHTML = statsHTML;
}

/**
 * Generate modules grid dynamically
 */
function generateModulesGrid() {
  const modulesContainer = document.getElementById("modules-container");
  if (!modulesContainer) return;

  const modulesHTML = DASHBOARD_CONFIG.modules
    .map((module) => {
      const statusText = {
        completed: "✅ Completed",
        "in-progress": "🔄 In Progress",
        "not-started": "⏳ Not Started",
      };

      const linkText = {
        completed: "View Solutions",
        "in-progress": "Continue",
        "not-started": "Coming Soon",
      };

      const isDisabled = module.status === "not-started" ? "disabled" : "";

      return `
            <div class="module-card ${module.status}" data-module-id="${
        module.id
      }">
                <div class="module-header">
                    <div class="module-icon">${module.icon}</div>
                    <div class="module-title">${module.name}</div>
                </div>
                <div class="module-status status-${module.status}">${
        statusText[module.status]
      }</div>
                <div class="module-description">${module.description}</div>
                <a href="${module.link}" class="module-link ${isDisabled}">${
        linkText[module.status]
      }</a>
            </div>
        `;
    })
    .join("");

  modulesContainer.innerHTML = modulesHTML;
}

/**
 * Generate resources grid dynamically
 */
function generateResourcesGrid() {
  const resourcesContainer = document.getElementById("resources-container");
  if (!resourcesContainer) return;

  const resourcesHTML = DASHBOARD_CONFIG.resources
    .map(
      (resource) => `
        <a href="${resource.url}" class="resource-link" target="_blank">
            ${resource.name}
        </a>
    `
    )
    .join("");

  resourcesContainer.innerHTML = resourcesHTML;
}

/**
 * Update the last updated date in the footer
 */
function updateLastUpdatedDate() {
  const lastUpdatedElement = document.getElementById("last-updated");
  if (lastUpdatedElement) {
    const now = new Date();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    lastUpdatedElement.textContent = now.toLocaleDateString("en-US", options);
  }
}

/**
 * Calculate and update progress statistics
 */
function updateProgress() {
  const total = DASHBOARD_CONFIG.modules.length;
  const completed = DASHBOARD_CONFIG.modules.filter(
    (m) => m.status === "completed"
  ).length;
  const inProgress = DASHBOARD_CONFIG.modules.filter(
    (m) => m.status === "in-progress"
  ).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  // Update DOM elements
  updateElement("completed-count", completed);
  updateElement("in-progress-count", inProgress);
  updateElement("total-count", total);
  updateElement("completion-percentage", percentage + "%");

  // Update progress bar
  const progressFill = document.getElementById("progress-fill");
  if (progressFill) {
    progressFill.style.width = percentage + "%";
  }

  console.log(
    `📊 Progress updated: ${completed}/${total} modules completed (${percentage}%)`
  );
}

/**
 * Helper function to safely update element content
 */
function updateElement(elementId, content) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = content;
  }
}

/**
 * Animate the progress bar on load
 */
function animateProgressBar() {
  const progressFill = document.getElementById("progress-fill");
  if (progressFill) {
    const targetWidth = progressFill.style.width;
    progressFill.style.width = "0%";

    setTimeout(() => {
      progressFill.style.width = targetWidth;
    }, 500);
  }
}

/**
 * Add event listeners for interactive features
 */
function addEventListeners() {
  // Add click analytics for module cards (using event delegation)
  const modulesContainer = document.getElementById("modules-container");
  if (modulesContainer) {
    modulesContainer.addEventListener("click", handleModuleCardClick);
  }

  // Add click analytics for resource links (using event delegation)
  const resourcesContainer = document.getElementById("resources-container");
  if (resourcesContainer) {
    resourcesContainer.addEventListener("click", handleResourceLinkClick);
  }

  // Add keyboard navigation
  document.addEventListener("keydown", handleKeyboardNavigation);
}

/**
 * Handle module card click events
 */
function handleModuleCardClick(event) {
  const card = event.target.closest(".module-card");
  if (!card) return;

  const moduleTitle = card.querySelector(".module-title")?.textContent;
  const moduleStatus = card.classList.contains("completed")
    ? "completed"
    : card.classList.contains("in-progress")
    ? "in-progress"
    : "not-started";

  console.log(`📋 Module clicked: ${moduleTitle} (${moduleStatus})`);

  // Add click effect
  card.style.transform = "scale(0.98)";
  setTimeout(() => {
    card.style.transform = "";
  }, 150);
}

/**
 * Handle resource link click events
 */
function handleResourceLinkClick(event) {
  const link = event.target.closest(".resource-link");
  if (!link) return;

  const linkText = link.textContent.trim();
  console.log(`🔗 Resource link clicked: ${linkText}`);
}

/**
 * Handle keyboard navigation
 */
function handleKeyboardNavigation(event) {
  if (event.ctrlKey || event.metaKey) {
    switch (event.key) {
      case "r":
        event.preventDefault();
        updateProgress();
        console.log("🔄 Progress refreshed via keyboard shortcut");
        break;
    }
  }
}

/**
 * Update module status (for future use)
 */
function updateModuleStatus(moduleId, newStatus) {
  const moduleIndex = DASHBOARD_CONFIG.modules.findIndex(
    (m) => m.id === moduleId
  );
  if (moduleIndex === -1) return;

  // Update configuration
  DASHBOARD_CONFIG.modules[moduleIndex].status = newStatus;

  // Regenerate modules grid
  generateModulesGrid();

  // Re-add event listeners
  addEventListeners();

  // Refresh progress
  updateProgress();

  console.log(`📊 Module ${moduleId} status updated to: ${newStatus}`);
}

/**
 * Show notification (for future use)
 */
function showNotification(message, type = "info") {
  console.log(`🔔 ${type.toUpperCase()}: ${message}`);
}

/**
 * Export functions for external use
 */
window.Dashboard = {
  updateModuleStatus,
  updateProgress,
  showNotification,
  config: DASHBOARD_CONFIG,
};

// Log dashboard ready status
console.log("✅ Dashboard script loaded successfully");
