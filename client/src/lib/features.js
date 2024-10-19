import moment from "moment";

const fileFormat = (url = "") => {
    const fileExtention = url.split(".").pop();
    if (fileExtention === "mp4" || fileExtention === "webm" || fileExtention === "ogg") return "video";
    if (fileExtention === "mp3" || fileExtention === "wav") return "audio";
    if (fileExtention === "png" || fileExtention === "jpg"
        || fileExtention === "jpeg" || fileExtention === "gif") return "image";
    return "file";
};
// /dpr_auto/w_200
const transformImage = (url = "", width = "100") => {
    // if (typeof url !== "string") {
    //     console.error("The provided URL is not a string:", url);
    //     return url;  // Return the original value if it's not a string
    // }
    
    const newUrl = url.replace("upload/", `upload/dpr_auto/w_${width}/`);
    return newUrl;
};

const getLast7Days = () => {
    const currentDate = moment();
    const last7Days = [];
    for (let index = 0; index < 7; index++) {
        const dayDate = currentDate.clone().subtract(index, "days");
        const dayName = dayDate.format("dddd")
        last7Days.unshift(dayName);
    }
    return last7Days;
}

const getOrSaveFromStorage = ({ key, value, get }) => {
    if (get)
      return localStorage.getItem(key)
        ? JSON.parse(localStorage.getItem(key))
        : null;
    else localStorage.setItem(key, JSON.stringify(value));
  };

export {fileFormat, transformImage, getLast7Days, getOrSaveFromStorage};