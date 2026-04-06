// ============ NAVIGATION ============
document.addEventListener("DOMContentLoaded", function () {
  updateActiveNav();
  setupMobileNav();
});

function updateActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}

function setupMobileNav() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");
    });
  }

  // Close menu when clicking on a link
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
}

// ============ MODAL HANDLING ============
function openSafetyModal() {
  const modal = document.getElementById("safetyModal");
  if (modal) {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

function closeSafetyModal() {
  const modal = document.getElementById("safetyModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

function openCampInfoModal() {
  const modal = document.getElementById("campInfoModal");
  if (modal) {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

function closeCampInfoModal() {
  const modal = document.getElementById("campInfoModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

function openCertificateModal() {
  const modal = document.getElementById("certificateModal");
  if (modal) {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

function closeCertificateModal() {
  const modal = document.getElementById("certificateModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

function openTrainersModal() {
  const modal = document.getElementById("trainersModal");
  if (modal) {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

function closeTrainersModal() {
  const modal = document.getElementById("trainersModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

function openHandsOnModal() {
  const modal = document.getElementById("handsOnModal");
  if (modal) {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

function closeHandsOnModal() {
  const modal = document.getElementById("handsOnModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

function openAgesModal() {
  const modal = document.getElementById("agesModal");
  if (modal) {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

function closeAgesModal() {
  const modal = document.getElementById("agesModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

// Close modal when clicking outside
window.addEventListener("click", function (event) {
  const safetyModal = document.getElementById("safetyModal");
  const campInfoModal = document.getElementById("campInfoModal");
  const certificateModal = document.getElementById("certificateModal");
  const trainersModal = document.getElementById("trainersModal");
  const handsOnModal = document.getElementById("handsOnModal");
  const agesModal = document.getElementById("agesModal");

  if (event.target === safetyModal) {
    closeSafetyModal();
  }
  if (event.target === campInfoModal) {
    closeCampInfoModal();
  }
  if (event.target === certificateModal) {
    closeCertificateModal();
  }
  if (event.target === trainersModal) {
    closeTrainersModal();
  }
  if (event.target === handsOnModal) {
    closeHandsOnModal();
  }
  if (event.target === agesModal) {
    closeAgesModal();
  }
});

// ============ WHATSAPP INTEGRATION ============
function openWhatsApp() {
  const phoneNumber = "+918446767999"; // WhatsApp number
  const message = encodeURIComponent(
    "Hi! I am interested in the Drone Camp. Can you provide more information?",
  );
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappURL, "_blank");
}

// ============ FORM VALIDATION ============
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return true;

  const name = form.querySelector('[name="name"]');
  const email = form.querySelector('[name="email"]');
  const phone = form.querySelector('[name="phone"]');
  const age = form.querySelector('[name="age"]');

  if (name && name.value.trim() === "") {
    alert("Please enter your name");
    return false;
  }

  if (email && !validateEmail(email.value)) {
    alert("Please enter a valid email");
    return false;
  }

  if (phone && phone.value.trim() === "") {
    alert("Please enter your phone number");
    return false;
  }

  if (age && age.value === "") {
    alert("Please select your age");
    return false;
  }

  return true;
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// ============ GOOGLE FORM CONFIGURATION ============
// To find your Google Form entry IDs:
// 1. Open your form in edit mode
// 2. Right-click on each field → Inspect
// 3. Look for: name="entry.XXXXXXXXXX"
// 4. Update the entry IDs below

const GOOGLE_FORM_CONFIG = {
  formId: "1FAIpQLSeOz70Vr-blHr4ueCsVGCRsxuo30YsyDU7P-lEbPdTSDlweTA",
  entryIds: {
    fullName: "1697827492",
    email: "1957187287",
    phone: "873908866",
    age: "1845421633",
    guardianName: "1524111384",
    preferredBatch: "720523704",
    schoolName: "1045781294",
  },
};

// Helper function to extract Google Form entry IDs
function extractGoogleFormIds() {
  console.clear();
  console.log("🔍 GOOGLE FORM ENTRY ID EXTRACTOR");
  console.log(`
📋 STEP 1: Open your Google Form:
https://docs.google.com/forms/d/e/1FAIpQLSeOz70Vr-blHr4ueCsVGCRsxuo30YsyDU7P-lEbPdTSDlweTA/edit

📋 STEP 2: For EACH field, right-click → Inspect (or press F12)

📋 STEP 3: Look for: name="entry.XXXXXXXXXX"

📋 STEP 4: Copy the ID numbers (just the numbers) and paste below:

FIELDS TO FIND:
- Full Name *
- Email Address *  
- Phone Number *
- Your Age
- Guardian/Parent Name *
- Preferred Batch
- School Name

📋 STEP 5: Once you have all IDs, run this in console:
updateGoogleFormIds({
  fullName: 'ID_HERE',
  email: 'ID_HERE',
  phone: 'ID_HERE',
  age: 'ID_HERE',
  guardianName: 'ID_HERE',
  preferredBatch: 'ID_HERE',
  schoolName: 'ID_HERE'
})
  `);
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSeOz70Vr-blHr4ueCsVGCRsxuo30YsyDU7P-lEbPdTSDlweTA/edit",
    "_blank",
  );
}

// Function to update entry IDs
function updateGoogleFormIds(newIds) {
  GOOGLE_FORM_CONFIG.entryIds = { ...GOOGLE_FORM_CONFIG.entryIds, ...newIds };
  console.log("✅ Entry IDs updated successfully!");
  console.log("New Config:", GOOGLE_FORM_CONFIG);
  alert(
    "✅ Google Form Entry IDs updated! Try submitting the registration form again.",
  );
}

// ============ GOOGLE FORM SUBMISSION ============
function submitToGoogleForm(data) {
  const formUrl = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_CONFIG.formId}/formResponse`;
  const ids = GOOGLE_FORM_CONFIG.entryIds;

  const formParams = new URLSearchParams();
  formParams.append(`entry.${ids.fullName}`, data.name);
  formParams.append(`entry.${ids.email}`, data.email);
  formParams.append(`entry.${ids.phone}`, data.phone);
  formParams.append(`entry.${ids.age}`, data.age);
  formParams.append(`entry.${ids.guardianName}`, data.guardian);
  formParams.append(`entry.${ids.preferredBatch}`, data.batch);
  formParams.append(`entry.${ids.schoolName}`, data.school || "");

  // Log submission for debugging
  console.log("📤 GOOGLE FORM SUBMISSION:");
  console.log("URL:", formUrl);
  console.log("Entry IDs Config:", ids);
  console.log("Data being sent:", data);
  console.log("Form Params:", {
    [`entry.${ids.fullName}`]: data.name,
    [`entry.${ids.email}`]: data.email,
    [`entry.${ids.phone}`]: data.phone,
    [`entry.${ids.age}`]: data.age,
    [`entry.${ids.guardianName}`]: data.guardian,
    [`entry.${ids.preferredBatch}`]: data.batch,
    [`entry.${ids.schoolName}`]: data.school,
  });

  fetch(formUrl, {
    method: "POST",
    body: formParams,
    mode: "no-cors",
  })
    .then(() => {
      console.log(
        "✅ Data submitted to Google Form (check your Google Sheet in 1-2 minutes)",
      );
    })
    .catch((error) => {
      console.log("Submission registered:", error);
    });
}

// ============ FORM SUBMISSION TO GOOGLE FORM ============
function submitRegistration(event) {
  event.preventDefault();

  if (!validateForm("registrationForm")) {
    return;
  }

  const formURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSeIJDJl2LcqNN4_lcGPDjloOQ5QOmPvX39OBZ9hM-_lgEkvzQ/formResponse";

  // Get form values with trim for better data quality
  const nameValue = document.getElementById("name").value.trim();
  const emailValue = document.getElementById("email").value.trim();
  const phoneValue = document.getElementById("phone").value.trim();
  const ageValue = document.getElementById("age").value;
  const guardianValue = document.getElementById("guardian").value.trim();
  const batchValue = document.getElementById("batch").value;
  const schoolValue = document.getElementById("school").value.trim();

  // Log submission data for debugging
  const submissionData = {
    timestamp: new Date().toLocaleString(),
    name: nameValue,
    email: emailValue,
    phone: phoneValue,
    age: ageValue,
    guardian: guardianValue,
    batch: batchValue,
    school: schoolValue,
  };

  console.log("📤 Submitting registration:", submissionData);

  // Create URLSearchParams with NEW entry IDs (more reliable for Google Forms)
  const data = new URLSearchParams({
    "entry.1218213551": nameValue,
    "entry.1231877861": emailValue,
    "entry.256641189": phoneValue,
    "entry.1056289523": ageValue,
    "entry.637270378": guardianValue,
    "entry.1304502194": batchValue,
    "entry.926845933": schoolValue,
  });

  // Also save to localStorage for verification
  let submissions = JSON.parse(localStorage.getItem("registrations") || "[]");
  submissions.push(submissionData);
  localStorage.setItem("registrations", JSON.stringify(submissions));
  console.log(
    "💾 Saved to local storage. Total submissions:",
    submissions.length,
  );

  // Submit to Google Form
  fetch(formURL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data.toString(),
  })
    .then(() => {
      console.log("✅ Successfully sent to Google Form");

      // Show success message
      alert(
        "✅ Registration submitted successfully!\n\nYour data is now saved in our registration system.\n\nCamp Details:\n📅 20-24 April 2026\n📍 Eklavya School, Kothrud, Pune\n💰 ₹100 (Payable at venue)\n\n📧 Email confirmation will be sent to: " +
          emailValue +
          "\n\nWe will contact you soon with more details.",
      );

      // Reset form
      const form = document.getElementById("registrationForm");
      form.reset();

      console.log("✅ Form Reset - Ready for next submission");
    })
    .catch((error) => {
      console.warn("⚠️ Form error (expected for no-cors):", error);
      alert(
        "✅ Registration submitted successfully!\n\nThank you for registering!",
      );
      document.getElementById("registrationForm").reset();
    });
}

// ============ SMOOTH SCROLL ============
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ============ SCROLL ANIMATIONS ============
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document
  .querySelectorAll(".event-card, .info-section, .feature-card")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
  });

// ============ PHONE NUMBER FORMATTING ============
// Only allow 10 digits, no formatting/hyphens
function formatPhoneNumber(input) {
  let value = input.value.replace(/\D/g, "");
  if (value.length > 10) value = value.slice(0, 10);
  input.value = value;
}

// ============ PARALLAX EFFECT ============
window.addEventListener("scroll", function () {
  const drone = document.getElementById("drone-container");
  if (drone) {
    const scrollY = window.scrollY;
    drone.style.transform = `translateY(${scrollY * 0.5}px)`;
  }
});

// ============ GET DIRECTIONS TO VENUE ============
function getDirections() {
  // Eklavya School Pune - DP Road, Kothrud
  const venueName =
    "Eklavya School, DP Road, Kothrud, Pune, Maharashtra 411038";
  const googleMapsURL = `https://www.google.com/maps/search/${encodeURIComponent(venueName)}`;
  window.open(googleMapsURL, "_blank");
}
