import React, { useEffect, useState, useRef } from "react";
import { toast } from 'react-toastify';
/* global $, intlTelInput */

const Hero = () => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    propertyLocation: "",
    preferredOffice: "",
    terms: false,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Add a key state to force form re-render on submission
  const [formKey, setFormKey] = useState(Date.now());

  // Refs for the phone input element and the intl-tel-input instance
  const phoneInputRef = useRef(null);
  const itiRef = useRef(null);

  // --- FORM VALIDATION LOGIC ---
  const validateName = (name) => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    if (/[0-9]/.test(name)) return "Name cannot contain numbers";
    if (!/^[a-zA-Z\s]+$/.test(name))
      return "Name can only contain letters and spaces";
    return "";
  };

  const validatePhone = () => {
    if (!itiRef.current) return "Phone number is required";
    if (!formData.phone.trim()) return "Phone number is required";
    if (!itiRef.current.isValidNumber())
      return "Please enter a valid phone number";
    return "";
  };

  const validateSelect = (value, fieldName) => {
    if (!value || value === "") return `${fieldName} is required`;
    return "";
  };

  const validateTerms = (terms) => {
    if (!terms) return "You must accept the terms and conditions";
    return "";
  };

  // --- FORM HANDLERS ---
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "phone") {
      const fullNumber = itiRef.current.getNumber();
      setFormData((prev) => ({ ...prev, phone: fullNumber }));
    } else {
      const fieldValue = type === "checkbox" ? checked : value;
      setFormData((prev) => ({ ...prev, [name]: fieldValue }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFieldBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    let error = "";
    switch (name) {
      case "firstName":
        error = validateName(formData.firstName);
        break;
      case "lastName":
        error = validateName(formData.lastName);
        break;
      case "phone":
        error = validatePhone();
        break;
      case "propertyLocation":
        error = validateSelect(formData.propertyLocation, "Property Location");
        break;
      case "preferredOffice":
        error = validateSelect(formData.preferredOffice, "Preferred Office");
        break;
      case "terms":
        error = validateTerms(formData.terms);
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Inside your Hero.js component

// Inside your Hero.js file, replace the entire handleSubmit function

// const handleSubmit = (e) => {
//   e.preventDefault();

//   const newErrors = {
//     firstName: validateName(formData.firstName),
//     lastName: validateName(formData.lastName),
//     phone: validatePhone(),
//     propertyLocation: validateSelect(formData.propertyLocation, "Property Location"),
//     preferredOffice: validateSelect(formData.preferredOffice, "Preferred Office"),
//     terms: validateTerms(formData.terms),
//   };

//   setErrors(newErrors);
//   setTouched({
//     firstName: true,
//     lastName: true,
//     phone: true,
//     propertyLocation: true,
//     preferredOffice: true,
//     terms: true,
//   });

//   const isFormValid = Object.values(newErrors).every((error) => error === "");

//   if (isFormValid) {
//     const scriptURL = "https://script.google.com/macros/s/AKfycbx4jGP0hxuB_45jE2d1R8mDt2KXlK8kXJhRMVJcgtwD-mh9BisCk74P4qpTc7290c7fEw/exec";
    
//     const data = new FormData();
//     data.append('firstName', formData.firstName);
//     data.append('lastName', formData.lastName);
//     data.append('phone', formData.phone);
//     data.append('propertyLocation', formData.propertyLocation);
//     data.append('preferredOffice', formData.preferredOffice);
//     data.append('terms', formData.terms);

//     const submissionPromise = fetch(scriptURL, {
//       method: 'POST',
//       body: data,
//       mode: 'no-cors' // This mode bypasses the preflight check
//     });

//     // Use toast.promise to automatically handle loading, success, and error states
//     toast.promise(
//       submissionPromise,
//       {
//         pending: 'Submitting your form...',
//         success: 'Thank you! Your form has been submitted successfully.',
//         error: 'There was an error submitting your form. Please try again.'
//       }
//     )
//     .then(() => {
//       // This block runs after the submission is successful.
//       // Reset the form state and key to clear the fields.
//       setFormData({
//         firstName: '', lastName: '', phone: '',
//         propertyLocation: '', preferredOffice: '', terms: false
//       });
//       setErrors({});
//       setTouched({});
//       setFormKey(Date.now());
//     })
//     .catch(error => {
//       // The error toast will be shown automatically by toast.promise
//       console.error("Error!", error.message);
//     });
//   }
// };

const handleSubmit = (e) => {
  e.preventDefault();

  const newErrors = {
    firstName: validateName(formData.firstName),
    lastName: validateName(formData.lastName),
    phone: validatePhone(),
    propertyLocation: validateSelect(formData.propertyLocation, "Property Location"),
    preferredOffice: validateSelect(formData.preferredOffice, "Preferred Office"),
    terms: validateTerms(formData.terms),
  };

  setErrors(newErrors);
  setTouched({
    firstName: true,
    lastName: true,
    phone: true,
    propertyLocation: true,
    preferredOffice: true,
    terms: true,
  });

  const isFormValid = Object.values(newErrors).every((error) => error === "");

  if (isFormValid) {
    const scriptURL = "https://script.google.com/macros/s/AKfycbzGV3UPfUXiJjHxzoaYWi-7Ipj5K60w9U1LIbanEqwBojqtpCXSxTxiElRf2uoXVIMG/exec";
    
    const data = new FormData();
    data.append('firstName', formData.firstName);
    data.append('lastName', formData.lastName);
    data.append('phone', formData.phone);
    data.append('propertyLocation', formData.propertyLocation);
    data.append('preferredOffice', formData.preferredOffice);
    data.append('terms', formData.terms);

    const submissionPromise = fetch(scriptURL, {
      method: 'POST',
      body: data,
      mode: 'no-cors'
    });

    toast.promise(
      submissionPromise,
      {
        pending: 'Submitting your form...',
        success: 'Thank you! Your form has been submitted successfully.',
        error: 'There was an error submitting your form. Please try again.'
      }
    )
    .then(() => {
      // ===== SEND WHATSAPP MESSAGE AFTER SUCCESSFUL SUBMISSION =====
      
      const accessToken = "REPJWL1O5XWuVvH4YDXV5VU5ERVJTQ09SRQagoScR5ZhsAxyE7aNQXpmwYEzr1duBm065tNJuYoSQ4yFbYLDXcVU5ERVJTQ09SRQBPFx0vJHREFTSALYXmVKVU5ERVJTQ09SRQhRVU5ERVJTQ09SRQNZ6fRojZR8yNREFTSAi6SDPqb7eAEsrIpN0";
      const apiUrl = "https://crmapi.karvatech.com/api/meta/v19.0/567718153091691/messages";
      
      // The phone number from the form, digits only
      const userPhoneNumber = formData.phone.replace(/\D/g, ''); 

      const whatsappData = {
        to: userPhoneNumber,
        recipient_type: "individual",
        type: "template",
        template: {
          language: {
            policy: "deterministic",
            code: "en"
          },
          name: "reminder_tempate_lic",
          components: []
        }
      };

      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(whatsappData)
      })
      .then(response => response.json())
      .then(data => console.log('WhatsApp message sent:', data))
      .catch(error => console.error('Error sending WhatsApp message:', error));

      // =============================================================

      // Reset the form state and key to clear the fields.
      setFormData({
        firstName: '', lastName: '', phone: '',
        propertyLocation: '', preferredOffice: '', terms: false
      });
      setErrors({});
      setTouched({});
      setFormKey(Date.now());
    })
    .catch(error => {
      console.error("Error!", error.message);
    });
  }
};
  // --- SIDE EFFECTS (API Calls & Plugin Initialization) ---

  useEffect(() => {
    const FALLBACK_CITIES = [
      "Mumbai",
      "Delhi",
      "Bangalore",
      "Chennai",
      "Kolkata",
      "Hyderabad",
      "Pune",
      "Ahmedabad",
      "Jaipur",
      "Lucknow",
    ];
    const loadIndianCities = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://countriesnow.space/api/v0.1/countries/cities",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ country: "India" }),
          }
        );
        if (!res.ok) throw new Error("API fetch failed");
        const json = await res.json();
        const cityList =
          json && Array.isArray(json.data) && json.data.length
            ? json.data
            : FALLBACK_CITIES;
        const uniqueSorted = Array.from(new Set(cityList)).sort();
        setCities(uniqueSorted);
      } catch (e) {
        console.warn("City API failed, using fallback list:", e.message);
        setCities(FALLBACK_CITIES.sort());
      }
      setIsLoading(false);
    };
    loadIndianCities();
  }, []);

  useEffect(() => {
    if (phoneInputRef.current) {
      itiRef.current = intlTelInput(phoneInputRef.current, {
        initialCountry: "in",
        preferredCountries: ["in", "us", "gb", "ae"],
        separateDialCode: true,
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js",
      });

      phoneInputRef.current.addEventListener("countrychange", () => {
        const fullNumber = itiRef.current.getNumber();
        setFormData((prev) => ({ ...prev, phone: fullNumber }));
      });
    }

    if (cities.length > 0 && window.$ && window.$.fn.select2) {
      const select2Options = {
        width: "100%",
        allowClear: true,
        dropdownParent: $("#regForm"),
      };
      $("#propertyLocation").select2({
        ...select2Options,
        placeholder: "Select Property Location",
      });
      $("#preferredOffice").select2({
        ...select2Options,
        placeholder: "Select Preferred Area Office",
      });
      const handleSelect2Change = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
      };
      $("#propertyLocation, #preferredOffice").on(
        "change",
        handleSelect2Change
      );
    }

    return () => {
      if (itiRef.current) {
        itiRef.current.destroy();
      }
      if (window.$ && window.$.fn.select2) {
        try {
          $("#propertyLocation, #preferredOffice")
            .off("change")
            .select2("destroy");
        } catch (e) {
          console.error("Error destroying Select2:", e);
        }
      }
    };
  }, [cities, formKey]); // Rerun effect when formKey changes

  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text-container">
          <div className="hero-text-box orange-bg">
            <h2>APNE GHAR KI </h2>
            <h2> AZAADI OFFER</h2>
          </div>
          <div className="hero-text-box green-bg">
            <h2>ZERO PROCESSING FEES*</h2>
            <p>(Offer Valid until 31.12.2025)</p>
          </div>
          <div className="hero-headings">
            <h4>
              Unlock the Door to Your Dream Home
              <br />
              with Home Loans Starting
            </h4>
            <h1>@7.50%* ROI</h1>
          </div>
        </div>

        <div className="hero-form">
          <div className="card">
            <header>
              <h3>Registration & Login Page</h3>
            </header>
            <form id="regForm" key={formKey} onSubmit={handleSubmit} noValidate>
              <div className="field">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  onBlur={handleFieldBlur}
                  className={
                    touched.firstName
                      ? errors.firstName
                        ? "is-invalid"
                        : "is-valid"
                      : ""
                  }
                />
                {touched.firstName && errors.firstName && (
                  <div className="invalid-feedback">{errors.firstName}</div>
                )}
              </div>

              <div className="field">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  onBlur={handleFieldBlur}
                  className={
                    touched.lastName
                      ? errors.lastName
                        ? "is-invalid"
                        : "is-valid"
                      : ""
                  }
                />
                {touched.lastName && errors.lastName && (
                  <div className="invalid-feedback">{errors.lastName}</div>
                )}
              </div>

              <div className="field">
                <input
                  ref={phoneInputRef}
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  onChange={handleInputChange}
                  onBlur={handleFieldBlur}
                  className={
                    touched.phone
                      ? errors.phone
                        ? "is-invalid"
                        : "is-valid"
                      : ""
                  }
                />
                {touched.phone && errors.phone && (
                  <div className="invalid-feedback">{errors.phone}</div>
                )}
              </div>

              <div className="field">
                <select
                  id="propertyLocation"
                  name="propertyLocation"
                  value={formData.propertyLocation}
                  onChange={handleInputChange}
                  onBlur={handleFieldBlur}
                  className={
                    touched.propertyLocation
                      ? errors.propertyLocation
                        ? "is-invalid"
                        : "is-valid"
                      : ""
                  }
                >
                  <option value="" disabled>
                    {isLoading ? "Loading cities…" : "Select Property Location"}
                  </option>
                  {cities.map((city) => (
                    <option key={`prop-${city}`} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                {touched.propertyLocation && errors.propertyLocation && (
                  <div className="invalid-feedback">
                    {errors.propertyLocation}
                  </div>
                )}
              </div>

              <div className="field">
                <select
                  id="preferredOffice"
                  name="preferredOffice"
                  value={formData.preferredOffice}
                  onChange={handleInputChange}
                  onBlur={handleFieldBlur}
                  className={
                    touched.preferredOffice
                      ? errors.preferredOffice
                        ? "is-invalid"
                        : "is-valid"
                      : ""
                  }
                >
                  <option value="" disabled>
                    {isLoading
                      ? "Loading cities…"
                      : "Select Preferred Area Office"}
                  </option>
                  {cities.map((city) => (
                    <option key={`office-${city}`} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                {touched.preferredOffice && errors.preferredOffice && (
                  <div className="invalid-feedback">
                    {errors.preferredOffice}
                  </div>
                )}
              </div>

              <label className="terms">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleInputChange}
                  onBlur={handleFieldBlur}
                  className={touched.terms && errors.terms ? "is-invalid" : ""}
                />
                <span>
                  • I confirm that the information provided by me here is
                  accurate. I authorized LICHFL or its Authorized
                  representatives to contact me for any queries and or my
                  documents collection for loan application. This wild override
                  registry on DND/NONC
                </span>
              </label>
              {touched.terms && errors.terms && (
                <div
                  className="invalid-feedback"
                  style={{ marginTop: "-20px", marginBottom: "10px" }}
                >
                  {errors.terms}
                </div>
              )}

              <button type="submit">Submit</button>
              <small className="muted">
                This site is protected by reCAPTCHA and the Google's Privacy
                Policy and Terms of Service aoplv.
              </small>
            </form>
          </div>
        </div>
      </div>
      {/* ===== NEW ELEMENT ADDED HERE ===== */}
      <div className="hero-terms">*T&C Apply</div>
    </section>
  );
};

export default Hero;
