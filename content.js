// List of IDs to remove
const idsToRemove = ['offer_modal', 'ctl00_divA1Ads'];

// List of class names to remove
const classesToRemove = ['visible-desktop-ad', 'visible-mobile-ad', 'blink label label-warning', 'news-inner-ads'];

// Function to remove elements with the specified IDs
function removeElementsByIds() {
  idsToRemove.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.remove();
    }
  });
}

// Function to remove elements with the specified class names
function removeElementsByClasses() {
  classesToRemove.forEach(className => {
    const elements = document.getElementsByClassName(className);
    Array.from(elements).forEach(element => {
      element.remove();
    });
  });
}

// Function to remove both IDs and class names
function removeElements() {
  removeElementsByIds();
  removeElementsByClasses();
}

// Use MutationObserver to monitor the document for changes
const observer = new MutationObserver(removeElements);

// Start observing the document
observer.observe(document.documentElement, { childList: true, subtree: true });

// Initial check in case the elements are already present
removeElements();
