import axios from "axios";
import API from "./BaseUrl";
import { debugLog } from "../utils/debugLog";

// Login
export const login = async (email,password) => {
  try {
const payload ={
  "email": email,
  "password": password
}
    const response = await axios.post(
      "https://demo.madurasoft.in/api/login/",
     payload
    );
   console.log("response",response.data);
   
    return response.data;
  } catch (error) {
    debugLog(error.message)
  }
};

// OTP

export const OTP = async (payload) => {
  try {
    const response = await axios.post(
      "https://demo.madurasoft.in/api/login/verify-otp/",
      payload,
  
    );

   
    return response.data;
  } catch (err) {
    debugLog("8888888",err.message);
  }
};

// TemplateHistroy

export const TemplateHistroy = async (user_id) => {
  try {
    const response = await axios.get(
      `https://demo.madurasoft.in/template-list/?user_id=${user_id}`
    );

    return response.data;
  } catch (err) {
    debugLog(err.message);
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
    debugLog(" API Error:", error?.response?.data || error.message);

  }
};

// Register



export const Register = async (formDataObj) => {
  try {
    const formData = new FormData();
    for (const key in formDataObj) {
      formData.append(key, formDataObj[key]);
    }

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
    console.error("Register error:", e.message);
  }
};


//CreateAccount
export const CreateAccounts = async (accountdata) => {
  try {
    const response = await axios.post(
      "https://demo.madurasoft.in/api/submit-whatsapp-settings/",
      accountdata
    );
    return response.data;
  } catch (e) {
    debugLog(e.message);
  }
};

// SelectTemplate
export const SelectTemplate = async (user_id) => {
  try {
    const response = await axios.get(
      `https://demo.madurasoft.in/template-list/?user_id=${user_id}`
    );
    if (response.data.status === "success") {
      return response.data.templates;
    } else {
      return [];
    }
  } catch (err) {
    debugLog("Error fetching templates:", err.message);
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


    return response.data;
  } catch (e) {
    debugLog("API SendSingleMsgs Error:", e.message);
   
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
    debugLog(err.message);
  }
};

// Conduct-Categories

export const ConductCategorie = async (data) => {
  console.log("data*******", data);

  try {
    const response = await axios.post(
      `https://demo.madurasoft.in/api/contacts-by-category/`,
      data
    );

    return response.data.contacts;
  } catch (e) {
   debugLog(e.message);
  }
};

//Send Bulk Message

export const BulkMessageAPI = async (user_id, payload) => {
  try {
    const formData = new URLSearchParams();

    formData.append("user_id", user_id);
    formData.append("recipients", JSON.stringify(payload.recipients));
    formData.append("template", payload.template);
    formData.append("lang", payload.lang);
    formData.append("media_url", JSON.stringify(payload.media_url));
 const headerType = payload.media_url ? payload.media_url.type.split("/")[0] : "";
formData.append("header_type", headerType);


    // Log media_url if it exists
    if (payload.media_url) {
      console.log("📤 media_url:", {
        name: payload.media_url.name,
        size: `${(payload.media_url.size / 1024).toFixed(2)} KB`,
        type: payload.media_url.type .split("/")[0],
      });
      console.log("📤 header_type:", headerType);
    } else {
      console.log("📤 media_url: none");
      console.log("📤 header_type: none");
    }

    // Log all formData entries
    console.log("📤 FormData contents:");
    for (let [key, value] of formData.entries()) {
      console.log(`${key} : ${value}`);
    }
    // Send request
    const response = await axios.post(
      `https://demo.madurasoft.in/send-bulk/?user_id=${user_id}`,
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    const errorMsg = error?.response?.data?.detail || error.message;
    debugLog(errorMsg);
  }
};




// 🔹 API Service


// Dashboard
export const Dashboard = async (user_id) => {
  try {
    const response = await axios.get(
      `https://demo.madurasoft.in/api/dashboard/?user_id=${user_id}`
    );

    return response.data;
  } catch (err) {
    debugLog(err.message);
  }
};

// Reports
export const Reports = async (user_id) => {
  try {
    const response = await axios.get(
      `https://demo.madurasoft.in/api/template-usage/?user_id=${user_id}&month`
    );
    console.log("response", response.data.template_usage);
    return response.data.template_usage;
  } catch (err) {
    debugLog(err.message);
  }
};

// Live Chat

export const LiveChat = async(user_id)=>{
  try{
     const response = await axios.get(
      `https://demo.madurasoft.in/api/received-messages/?user_id=${user_id}`,
   
  );
     console.log("response", response.data.phone_list);
     return response.data;
  }catch(err){
    debugLog(err.message)
  }
}

export const LiveChatSend = async (phonenumber,user_id) => { 
  try {
    const response = await axios.post(
        `https://demo.madurasoft.in/api/received-messages/?user_id=${user_id}&phone=${phonenumber}`,
    )
    console.log("response", response.data);
    return response.data;
  }catch(err){
    debugLog(err.message)
  }
  
}
export const fetchLatestMessages  = async (user_id,phonenumber) => { 
  try {
    const phone = phonenumber.slice(2)
    const response = await axios.get(
        `https://demo.madurasoft.in/api/fetch-latest-messages?user_id=${user_id}&phone=${phone}`,
    )
    console.log("response", response.data);
    return response.data;
  }catch(err){
    debugLog(err.message)
  }
  
}
export const SendManually = async (formData) => {
  
  try {
    const response = await axios.post(
      "https://demo.madurasoft.in/send_manual_reply/",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error("Upload error:", err.message);
    throw err;
  }
};


//ConductFile
export const conductFile = async (formData) => {
  console.log("*********88888",formData);
  
  try {
    const response = await axios.post(
      "https://demo.madurasoft.in/api/contact-file/",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error("Upload error:", err.message);
    throw err;
  }
};

//ChatBot
export const chatBot = async (formData) => {

  try{
    const response = await axios.post("https://demo.madurasoft.in/api/chatbot/create/",
      formData,
    )
    console.log(response.data);
    return response.data
  }
  catch(e){
    console.log(e);
  }
}
