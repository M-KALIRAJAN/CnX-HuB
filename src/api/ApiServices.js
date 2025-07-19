import axios from "axios";
import API from "./BaseUrl";

// Login
export const login = async (phone) => {
  try {
    console.log("phone", phone);
    console.log("API", API);

    const response = await axios.post(
      "https://demo.madurasoft.in/api/login/send-otp/",
      phone
    );
    console.log(response.data);

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// OTP

export const OTP = async (payload) => {
  try {
    const response = await axios.post(
      "https://demo.madurasoft.in/api/login/verify-otp/",
      payload
    );
    console.log("response", response.data);

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

// TemplateHistroy

export const TemplateHistroy = async (user_id) => {
  try {
    const response = await axios.get(
      `https://demo.madurasoft.in/template-list/?user_id=${user_id}`
    );
    console.log("TemplateHistroy", response.data);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

// Create Template

export const CreateTemplates = async ({ formData, user_id }) => {
  try {
    const form = new FormData();

    form.append("language", formData.language);
    form.append("name", formData.name || `template_${Date.now()}`);
    form.append("category", formData.category || "MARKETING");
    form.append("message_send_ttl_seconds", "43200");
    form.append("header_format", formData.header_format);
    form.append("body_text", formData.body_text);

    if (formData.header_format === "TEXT" && formData.header_text) {
      form.append("header_text", formData.header_text);
    }

    if (
      formData.header_format !== "TEXT" &&
      formData.header_media instanceof File
    ) {
      form.append("header_media", formData.header_media);
    }

    form.append("components", JSON.stringify(formData.components));

    if (formData.buttons && formData.buttons.length > 0) {
      form.append("buttons", JSON.stringify(formData.buttons));
    }

    const response = await axios.post(
      `https://demo.madurasoft.in/api/create-template/?user_id=${user_id}`,
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    console.error(" API Error:", error?.response?.data || error.message);
    throw error;
  }
};

// Register

export const Register = async (fullname, email, phone) => {
  try {
    const formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("email", email);
    formData.append("phone", phone);

    const response = await axios.post(
      "https://demo.madurasoft.in/api/register/",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log("Register error:", e.message);
  }
};

//CreateAccount
export const CreateAccounts = async (accountdata) => {
  try {
    const response = await axios.post(
      "https://demo.madurasoft.in/api/submit-whatsapp-settings/",
      accountdata
    );
    console.log(response.data);

    return response.data;
  } catch (e) {
    console.log(e.message);
  }
};

// SelectTemplate
export const SelectTemplate = async (user_id) => {
  try {
    const response = await axios.get(
      `https://demo.madurasoft.in/template-list/?user_id=${user_id}`
    );
   console.log("response.data",response.data.templates);
   
    if (response.data.status === "success") {
      return response.data.templates;
    } else {
      return [];
    }
  } catch (err) {
    console.error("Error fetching templates:", err.message);
    return [];
  }
};

//Send Single Message

export const SendSingleMsgs = async (user_id, formData) => {
 

  try {


    const response = await axios.post(
      `https://demo.madurasoft.in/send-message/?user_id=${user_id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true, 
      }
    );
    console.log("response.data",response.data);
    console.log("formData",formData);
    
    
    return response.data;
  } catch (e) {
    console.error("API SendSingleMsgs Error:", e.message);
    throw e;
  }
}; 


// User-Categories
export const UserCategories = async (user_id) => {
  try {
    const response = await axios.get(
      `https://demo.madurasoft.in/api/user-categories/?user_id=${user_id}`,
       {
     
        withCredentials: true, 
      }
    );
    console.log("UserCategories", response.data);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

// Conduct-Categories

export const ConductCategorie = async (data) =>{
  console.log("data*******",data);
  
  try{
        const response = await axios.post(
      `https://demo.madurasoft.in/api/contacts-by-category/`,
      data
    );
    console.log("ConductCategories", response.data.contacts);
    return response.data.contacts;

  } catch(e){
    console.log(e.message);
    
  }
}

//Send Bulk Message

// export const BulkMessageAPI = async (user_id, formData) => {
//   try {
//     const response = await axios.post(
//       `https://demo.madurasoft.in/send-bulk/?user_id=${user_id}`, 
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//         withCredentials: true, // ✅ Send cookies/session
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Bulk message error:", error?.response?.data?.detail || error.message);
//     throw new Error(error?.response?.data?.detail || "Bulk message failed");
//   }
// };




export const BulkMessageAPI = async (user_id, payload) => {
  console.log("payload",payload);
  
  try {
    const response = axios.post(`https://demo.madurasoft.in/api/send-bulk/?${user_id}`, payload, {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // ✅ important for session cookies
})
    return response.data;
  } catch (error) {
    const errorMsg = error?.response?.data?.detail || error.message;
    throw new Error(errorMsg);
  }
};








